import styled from 'styled-components/macro';



export const ProgramCardWrapper = styled.div`

background:#F9F9FC;
display:flex;
border-radius: 5px;
width:95%;
padding:1.5rem;
margin:20px;

.img {
    width:90%;
    height:90%;
    border-radius: 5px;
}

.div{

h5 {
    font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 2.2rem;
line-height: 121%;
margin-top:10px;
color: #2E3192;
}

p {
    font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 1rem;
line-height: 140%;
width:80%;
margin-top:10px;
color: #737373;

}

button {
    width:60%;
    border-radius: 8px;
    background:#2E3192;
    color:#fff;
    border:none;
    padding:0.5rem;
}

}

`

export const TodoCard = styled.div`
width:40%;
padding:18px;
border-radius:12px;
background:#f9f9f9;
margin-top:10px;

.head {
    h6 {
        font-size:1em;
        font-weight:600;
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

