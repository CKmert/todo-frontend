import { useState } from 'react';
import './App.css';
import { AppHeader } from './components/heading/AppHeader';
import { WelcomePage } from './mainPages/WelcomePage';
import { ShowTodos } from './mainPages/ShowTodos';
import { ErrorPage } from './mainPages/ErrorPage';

// router --> Aufgabe 2.7 importieren (Server Routing)
import { BrowserRouter, Route, Routes} from "react-router-dom"

// Importiere Objekte aus todoData
import { todoData } from './data/todoData';



function App() {
  // Auslagern der Objekte -> Initialisieren der Daten in Localstorage
  const [todos, setTodos] = useState(() => {
    var currentTodos = localStorage.getItem("todos")
    if(!currentTodos) {                                               // Wenn kein Wert für Todo vorhanden setze currentTodo auf leeres Array
      currentTodos = [];                                              // Das Leere aRRAY wird als Json String im localstorage gespeichert
      localStorage.setItem("todos", JSON.stringify(currentTodos));    
                                                                      
    } else {                                                    // Wenn SchlüsselWert Todo vorhanden dann wird dieser als JSON String gespeichert
      currentTodos = JSON.parse(currentTodos)                   // geparst und in currentTodos gespeichert. Dadurch wird der JSON-String in ein JavaScript-Array umgewandelt
    } return todoData
  }
);



  return (
      <div className="app-container">
        
        
          <BrowserRouter>
            <AppHeader/>
              <Routes>
                <Route path="/todos" element={<ShowTodos todos={todos} setTodos={setTodos}></ShowTodos>}/>
                <Route path="/" element={<WelcomePage todos={todos}/>}/>
                <Route path="/:whatever" element={<ErrorPage/>}/>
              </Routes>
          </BrowserRouter>
        

      </div>
     
  );
}

export default App;

