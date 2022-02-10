import styled from 'styled-components/macro'

export const ApplicationCard = styled.div`
  width: 32%;
  padding: 18px;
  border-radius: 12px;
  background: #fff;
  margin-top: 10px;
  box-shadow: 0px 4px 18px -2px rgba(86, 87, 88, 0.12);

  h3 {
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 140%;
    color: rgba(24, 24, 25, 0.9);
  }

  p {
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    text-transform: capitalize;
    color: #5d5d5e;

    span {
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 24px;
      text-transform: capitalize;
      color: #2e3192;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .applyBtn {
    background: #2e3192;
    border-radius: 5px;
    border: none;
    padding: 10px 35px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    color: #ffffff;
  }

  .appliedBtn {
    background: #c2c2c2;
    border-radius: 5px;
    border: none;
    padding: 10px 35px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    color: #ffffff;
  }

  .approvedBtn {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    color: #18a615;
    background: none;
    border: none;
  }

  .expiredBtn {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    color: #838077;
    background: none;
    border: none;
  }

  .reapplyBtn {
    background: transparent;
    border-radius: 5px;
    border: 1px solid #a8300a;
    padding: 10px 35px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    color: #a8300a;
  }

  .declinedBtn {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    color: #A8300A;
    background: none;
    border: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
