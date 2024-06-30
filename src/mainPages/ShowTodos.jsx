// Hier befindet sich das Inputfeld zur eingabe
// und die angezeigte Liste
import { TodoInput } from "../components/Input/TodoInput"
import { MapTodo } from "./MapTodo"

export function ShowTodos({todos, setTodos}) {

    return(
        <>
            <TodoInput todos={todos} setTodos={setTodos}/>
            <MapTodo todos={todos} setTodos={setTodos}/>
        </>

    )
}