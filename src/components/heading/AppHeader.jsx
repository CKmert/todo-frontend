import {styled} from "styled-components"

export function AppHeader() {

    return(
        <>
            <StyledAppHeader>
                Mert's Todolist
            </StyledAppHeader>
        </>

    )
}


// StyledComponents für die H1 Überschrift

const StyledAppHeader = styled.h1`

    font-family: Arial, sans-serif;
    color: #A0C5E8;
    position: relative;
    font-size: 3em;
    transition: all 0.25 ease-out;
    -webkit-text-fill-color: #A0C5E8; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: black;
    &:hover {
        text-shadow: -10px 3px 7px;
    }
`

