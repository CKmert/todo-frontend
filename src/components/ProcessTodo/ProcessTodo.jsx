import { Fragment } from "react";
import styled from "styled-components";
import { FaCircleInfo } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { deleteOnClick } from "./TodoFunctions/TodoFunction";
import { toggleStatusOnClick } from "./TodoFunctions/TodoFunction";


export function ProcessTodo({subject, done, category, id, todos, setTodos}) {

    return (
        <Fragment>
        <StyledProcessCard done={done}>
            {subject}
            <br/>
            Kategorie: {category}
            <br/>
            <FaTrashCan onClick={() => deleteOnClick(id, todos, setTodos)} />
            <FaCircleInfo onClick={() => toggleStatusOnClick(id, todos, setTodos)} />
        </StyledProcessCard>
        </Fragment>
    );
}

const StyledProcessCard = styled.div`

font-family: Cursive;
margin: auto;
width: 50%;
border: 3px solid pruiple;
padding: 10px;
width: 250px;
color: #372071;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
margin-bottom: 8px;
color: ${(props) => (props.done ? "green" : "red")};

`