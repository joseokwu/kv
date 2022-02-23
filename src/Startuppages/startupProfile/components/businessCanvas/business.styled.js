import styled from 'styled-components/macro'

export const Header = styled.div`
  h3 {
    color: #020498;
    font-size: 1.3rem;
    font-weight: bold;
  }
`

export const Wrapper = styled.div`
  width: 25%;
  padding: 46px;
  border: 1px dashed #d5d5d5;
  border-radius: 6px;
  margin: 15px;

  p {
    font-weight: 400;
  }

  @media (max-width) {
    width: 100%;
  }
`

export const BusCanButton = styled.div`
  .can {
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    color: #4f4f4f;
    background: #f4f4f4;
    border-radius: 5px;
    border: none;
    padding: 10px 30px;
  }

  .sav {
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    color: #FFFFFF;
    background: #00adef;
    border-radius: 5px;
    border: none;
    padding: 10px 30px;
  }
`
