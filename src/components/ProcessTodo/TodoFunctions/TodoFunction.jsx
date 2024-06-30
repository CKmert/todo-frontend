// Delete und Done FUnktion 



// Funktion zum Löschen eines Todos
// 
export function deleteOnClick(id, todos, setTodos){
    setTodos(todos.filter(todo => todo.id !== id));
}

export function toggleStatusOnClick(id, todos, setTodos) {
    setTodos(todos.map(todo => {
        if(todo.id === id) {
            todo.done = !todo.done //invertieren
        }
        return todo;
    }));
}