import styled from 'styled-components/macro'

export const TodoCard = styled.div`
  width: 47%;
  padding: 18px;
  margin-top: 10px;
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

    article {
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 140%;
      color: #525151;
    }

    span {
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 140%;
      color: #525151;
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

  .foot {
    button {
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 140%;
      text-align: center;
      color: #ffffff;
      background: #2e3192;
      border-radius: 10px;
      border: none;
      padding: 0px 30px;
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

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const InProgress = styled.div`
  .sesDesc {
    background: #f9f9fc;
    padding: 30px 24px;

    h6 {
      font-family: DM Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
    }

    p {
      font-family: DM Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      text-transform: capitalize;
      color: #525151;
    }

    a {
      font-family: DM Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      text-decoration: underline;
      color: #2e3192;
    }
  }

  .mentor {
    p {
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 140%;
      color: #000000;
    }

    span {
      font-family: DM Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 140%;
      color: #000000;
    }
  }

  h2 {
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 140%;
    color: rgba(24, 24, 25, 0.9);
  }

  .workshop {
    article {
      font-family: DM Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 140%;
      letter-spacing: 0.01em;
      color: #000000;
    }

    span {
      font-family: DM Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 21px;
      letter-spacing: 0.01em;
      color: #2e3192;
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

    article {
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 140%;
      color: #525151;
    }

    span {
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 140%;
      color: #525151;
    }
  }

  h3 {
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }

  h4 {
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #3e3e3e;
  }

  button {
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    color: #ffffff;
    background: #2e3192;
    border-radius: 10px;
    border: none;
    padding: 10px 35px;
  }

  .completeScore {
    button {
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
      background: #f8f8fa;
      border-radius: 4px;
      border: none;
      padding: 15px 18px;
    }

    button:focus {
      background: #dcebff;
      outline: none;
    }
  }

  .upEvt {
    button {
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 140%;
      color: #4f4f4f;
      background: #f4f4f4;
      border-radius: 5px;
      border: none;
      padding: 10px 35px;
    }
  }
`
