import styled from 'styled-components/macro';

export const Header = styled.div`

h4 {
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 31px;
display: flex;

letter-spacing: 0.01em;
color:#2E3192

}

span {
background: #2E3192;
border-radius: 10px;
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 8px;
padding:4px 10px;
color:#fff;
}

b {
font-size: 15px;
line-height: 31px;
color:#2E3192
}

`

export const Table = styled.table`

margin-top:1.3rem;

thead {
background: #F8F8FA;

padding:10px;
    tr {
        border-radius:12px;
    }
    th {
font-weight: 500;
font-size: 16px;
line-height: 140%;
color: #9B9DC3;

    }

    td {
        font-weight: 600; 
        line-height: 140%;  
    }

}
`

export const Section = styled.section`

margin-top:1.3rem;

h4 {
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 31px;
display: flex;

letter-spacing: 0.01em;
color:#182399;
}
`



