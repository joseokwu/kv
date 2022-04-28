import styled from 'styled-components/macro'

export const TodoCard = styled.div`
  width: 47%;
  padding: 18px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  .head {
    display: flex;
    h6 {
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 140%;
      color: rgba(24, 24, 25, 0.9);
    }
  }

  .date {
    h6 {
      font-family: DM Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      color: #3855b3;
    }
  }

  .body {
    p {
      font-family: DM Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      text-transform: capitalize;
      color: #525151;
    }
  }

  p {
    width: 95%;
    color: #111;
  }

  .foot {
    span {
      font-family: DM Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 140%;
      color: #525151;
    }

    div {
      display: flex;
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
        color: #262626;
      }
    }
  }

  .notSubAssbtn {
    button {
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 140%;
      color: #ffffff;
      background: #2e3192;
      border-radius: 5px;
      padding: 10px 35px;
      border: none;
    }
    .download-ass {
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 140%;
      color: #2e3192;
      background: transparent;
      border-radius: 5px;
      padding: 10px 35px;
      border: 1px solid #2e3192;
    }
  }

  .subAssbtn {
    button {
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 140%;
      color: #2e3192;
      background: transparent;
      border-radius: 10px;
      padding: 10px 35px;
      border: 1px solid #2e3192;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SubmitAssignment = styled.div`
  h2 {
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    letter-spacing: 0.01em;
    color: #2e3192;
  }

  span {
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.01em;
    color: #828282;
  }

  button {
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    color: #ffffff;
    background: #2e3192;
    border-radius: 5px;
    padding: 10px 35px;
    border: none;
  }
`

export const Feedback = styled.div`
  h2 {
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    letter-spacing: 0.01em;
    color: #2e3192;
  }

  h4 {
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 140%;
    color: #000000;
  }

  h3 {
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 140%;
    color: #3855b3;
  }

  .body {
    background: #fafafc;
    border-radius: 4px;
    p {
      font-family: DM Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      text-transform: capitalize;
      color: #525151;
    }

    h4 {
      font-family: DM Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: #525151;
    }

    span {
      font-family: DM Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 13px;
      color: #828282;
    }
  }
`
