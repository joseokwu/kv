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
    font-size: 15px;
    line-height: 31px;
    color: #2e3192;
  }
`

export const Section = styled.section`
  margin-top: 1.3rem;

  h4 {
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 31px;
    display: flex;

    letter-spacing: 0.01em;
    color: #182399;
  }
`

export const VideoWrapper = styled.div`
  .div {
    width: 20%;
    background: #f9f9fc;
    border: 1px 1px 0 0 solid #e6e7e9;
    border-radius: 8px 8px 0 0;
    padding: 40px;
  }

  #div {
    width: 20%;
    background: #fff;
    border-radius: 0 0 8px 8px;
    padding: 10px;
    box-shadow: 0px 4px 18px -2px rgba(86, 87, 88, 0.12);

    .p {
      margin-left: 30%;
    }
  }
`
