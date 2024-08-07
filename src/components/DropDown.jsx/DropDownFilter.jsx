import styled from "styled-components";


export function DropDownFilter({category, id, todos, setTodos}){






    return( 
        <>
        <ButtonDD>
        <button class="btn" id="btn">
            Dropdown
            <i class="bx bx-chevron-down" id="arrow"></i>
        </button>
        </ButtonDD>
        <DP>
        <div class="dropdown" id="dropdown">
        <a href="#create">
          <i class="bx bx-plus-circle"></i>
          Create New
        </a>
        <a href="#draft">
          <i class="bx bx-book"></i>
          All Drafts
        </a>
        <a href="#move">
          <i class="bx bx-folder"></i>
          Move To
        </a>
        <a href="#profile">
          <i class="bx bx-user"></i>
          Profile Settings
        </a>
        <a href="#notification">
          <i class="bx bx-bell"></i>
          Notification
        </a>
        <a href="#settings">
          <i class="bx bx-cog"></i>
          Settings
        </a>
      </div>
        </DP>
       
      </>
    )
}


const ButtonDD = styled.div.attrs({
    className: 'btn',
    })`
    .input{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    --shadow: rgba(0, 0, 0, 0.05) 0px 6px 10px 0px,
        rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
    --color: #166e67;
    --gap: 0.5rem;
    --radius: 5px;
}

body {
  margin: 2rem;
  background-color: #b3e6f4;
  font-size: 0.9rem;
  color: black;
}`

const DP = styled.div`
  
   .btn {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: var(--gap);
  padding: 0.6rem;
  cursor: pointer;
  border-radius: var(--radius);
  border: none;
  box-shadow: var(--shadow);
  position: relative;
}

.bx {
  font-size: 1.1rem;
}

.dropdown {
  position: absolute;
  width: 250px;
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  margin-top: 0.3rem;
  background: white;
}

.dropdown a {
  display: flex;
  align-items: center;
  column-gap: var(--gap);
  padding: 0.8rem 1rem;
  text-decoration: none;
  color: black;
}

.dropdown a:hover {
  background-color: var(--color);
  color: white;
}`