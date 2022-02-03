import styled from 'styled-components/macro'

export const Header = styled.div`
  h4 {
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    display: flex;
    letter-spacing: 0.01em;
    color: #2e3192;
  }

  span {
    background: #2e3192;
    border-radius: 10px;
    padding: 8px 25px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
  }

  b {
    font-size: 14px;
    line-height: 31px;
    color: #2e3192;
    text-decoration: underline;
    font-family: DM Sans;
    font-weight: bold;
  }
`

export const Table = styled.table`
  margin-top: 1.3rem;

  thead {
    /* background: #f8f8fa; */
    text-align: center;

    /* padding: 10px; */
    tr {
      background: #f8f8fa;
      border-radius: 10px;
    }
    th {
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 140%;
      color: #2e3192;
      padding: 20px 10px;
      /* border-radius: 10px; */
    }
  }

  td {
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    color: rgba(24, 24, 25, 0.9);
  }

  tbody {
    text-align: center;
  }
`

export const Section = styled.section`
  margin-top: 1.3rem;

  h4 {
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.01em;
    color: #181818;
  }

  td {
    padding: 10px 0px;
  }
`
