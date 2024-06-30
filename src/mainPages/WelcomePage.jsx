import styled from "styled-components"
import {Link} from "react-router-dom"
import { useState, useEffect } from "react";


export function WelcomePage({todos}) {
    const [subject, setTitles] = useState("");
    function NumberOfTodos() {
    if(todos.length > 3) {
        setTitles(`Heute hast du noch sehr viel zu erledigen!`)
    } else {
        setTitles(`Heute hast du wenige Aufgaben ! \nOffene Todos: ${todos.length}`)
    }
}

    useEffect(() => {
        NumberOfTodos()
    }, [todos])

return(
    <>
        <Link to="/todos">
            <StyledWelcomeHeader >
                {subject}
            </StyledWelcomeHeader>
        </Link>
    </>
)
}

const StyledWelcomeHeader = styled.h1`

    fontSize: clamp(2rem, calc(4vw + 0rem), 5rem);
    color: purple;
    position: relative;
    text-transform: uppercase;
    text-shadow: -15px 5px 20px #bfbcba;
    transition: all 0.25 ease-out;
    &:hover {
    text-shadow: -20px, 6px, 15px #E27D60
    }
`