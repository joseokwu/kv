import styled from 'styled-components/macro';

export const FundRounding = styled.div`

width:80%;
padding:1.2rem;
background:#fff;
border-radius:8px;
margin-bottom:10px;

h6 {
    font-size:1rem;
    color:#023198;
    margin-bottom:20px;
    font-weight:600;
}

p {
    display:flex;
    margin-top:9px;
    font-size:16px;
    color:#232323;
}

span {
        color:#c2c2c2;
    }



`

export const Btn = styled.span`

       background:${(props) => props.bg};
        font-size:16px;
        letter-spacing:0.01em;
        line-height:21px;
        color: ${(props) => props.color };
        border:none;
        border-radius:6px;
        padding:4px 10px;
        

`