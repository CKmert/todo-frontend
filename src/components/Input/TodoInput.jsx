import styled from "styled-components";
import { useRef } from "react";
import { v4 as uuidv4} from "uuid";

export function TodoInput({todos, setTodos}) {


    const inputValue = useRef()
    const inputCategory = useRef()
    

    function createTodo() {
        if(inputValue.current.value !== "") {        // Current(das key).value nimmt das aktuelle Input Wert über inputHook(FUnktion)
            setTodos([
                ...todos,   // Alte Todos 
             {
                id: uuidv4(),
                subject: inputValue.current.value,
                category: inputCategory.current.value,
                done: false
            }])     // Neues Objekt
        }
        inputValue.current.value = "";         // setzt das Inputfeld wieder auf ein leeres Feld
        inputCategory.current.value = ""; 
    }
    

    function pressEnterCreate(enter){        // Funktion damit man per Entertaste ein Todo einfügen kann
        if(enter.code === "Enter") {          // Wenn Event einem Enter-Taste entspricht dann löse 
            createTodo()
        }                
    }

    return(
        <StyledInputContainer>
            <input ref={inputValue} onKeyDown={pressEnterCreate} placeholder="Enter task"></input>
            <br></br>
            <input ref={inputCategory} onKeyDown={pressEnterCreate}placeholder="Enter Category of task"></input>
        </StyledInputContainer>
    )


}




const StyledInputContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: 100%;
    margin: 0 auto;
    background: #A0C5E8;
    padding: 10px 0;
    gap: 20px;
    margin-bottom: 30px;


`