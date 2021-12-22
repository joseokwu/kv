import styled from 'styled-components/macro';

export const TodoCard = styled.div`
width:40%;
padding:18px;
border-radius:12px;
background:#f9f9f9;
margin-top:10px;

.head {
    display:flex;
    h6 {
        font-size:1em;
        font-weight:600;
        color:#c3c4c1;
    }

    button {
        border:none;
        width:20%;
        background:#DEF6FF;
        color:#103298;
        border-radius:7px;
    }
}

.date {
    h6 {
        color:#100298;
    }

    button {
        border:none;
        width:20%;
        background:#DEF6FF;
        color:#103298;
        border-radius:7px;
    }
}

p {
    width:95%;
    color:#111;
}

.foot {
    span {
        color:#000;
        font-weight:500;
    }
}


`


