import styled from 'styled-components/macro';

export const TodoCard = styled.div`
width:47%;
padding:18px;
border-radius:12px;

margin-top:10px;
background: #FFFFFF;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
border-radius: 5px;

.head {
    display:flex;
    h6 {
        font-size:1em;
        font-weight:600;
        color:#c3c4c1;
    }

   
}

.date {
    h6 {
        color:#100298;
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

    div {
        display:flex;
        .p {
            font-weight: 500;
            font-size: 12px;
            line-height: 16px;
        }
        .secPara {
            font-family: DM Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 10px;
            line-height: 13px;
            color:#262626;
        }
    }
}


`

