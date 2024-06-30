// Mapping welches über Array mit Objekten durchgehet und diese zerlegt

import { Fragment } from "react";
import { ProcessTodo } from "../components/ProcessTodo/ProcessTodo";

export function MapTodo({todos, setTodos}){
    return(
        <>
        {
        todos ? // Ist todos wahr ? Wenn ja dann mappe mir über das gesamte Array mit den Objekten
        todos.map((todo) => {
            return(
                <Fragment key={todo.id}>
                    <ProcessTodo subject={todo.subject} done={todo.done} category={todo.category} id={todo.id} todos={todos} setTodos={setTodos}/>
                </Fragment>
            )
        }) : null

        }
        </>
    )
}