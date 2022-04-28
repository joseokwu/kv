import styled from 'styled-components/macro';

export const FundRounding = styled.div`

width:100%;
padding:1.2rem;
background:#fff;
border-radius: 1.25rem;
margin-bottom:10px;
@media (max-width: 1024px) {
    overflow-y: hidden;
}

h6 {
    font-size:1rem;
    color:#023198;
    margin-bottom:20px;
    font-weight:600;
}

article {
    /* display:flex; */
    /* margin-top:9px; */
    font-size:16px;
    color: #828282;
    line-height: 21px;
    font-family: DM Sans;
    letter-spacing: 0.01em;
}

span {
        /* color:#c2c2c2; */
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