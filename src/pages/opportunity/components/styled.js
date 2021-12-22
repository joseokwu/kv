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

li {
    display:flex;
    margin-top:9px;

    span {
        color:#c2c2c2;
    }

}


`

export const Btn = styled.button`

       background:${(props) => props.bg};
        width: ${(props) => props.w} ;
        padding:0.3rem;
        color: ${(props) => props.color };
        border:none;
        border-radius:6px;
        margin-left:8px;

`