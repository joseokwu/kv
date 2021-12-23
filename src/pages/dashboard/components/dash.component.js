import styled from 'styled-components/macro';

export const HeadWrapper = styled.div`


color:#122198;

width:100%;
padding:7px;
border-radius:7px;


h5 {
    font-size:1.2em;
    color:#122198;
    font-weight:500;
  
    
}

p {
    font-size:1em;
    font-weight:500;
    
}

h6 {
    width:100%;
    color:#122198;
    font-size:0.8em;
    margin-left:78%;
    
}

`
export const TodoCard = styled.div`
width:45%;
padding:18px;
border-radius:12px;
background:#fff;
margin-top:10px;
box-shadow: 0px 4px 18px -2px rgba(86, 87, 88, 0.12);

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


export const UpcomingCard = styled.div`
width:30%;
padding:18px;
border-radius:12px;
background:#fff;
margin-top:10px;
box-shadow: 0px 4px 18px -2px rgba(86, 87, 88, 0.12);


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
    button {
        border:none;
        border-radius:10px;
        width:40%;
        background:#103298;
        color:#fff;
        
    }
}


`