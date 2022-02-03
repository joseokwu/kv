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

// export const TabFilterWrapper = styled.div`
//   .sort-btn {
//     background: #F9F9FC;
//     border-radius: 5px;
//     border: none;
//     height: 3.063rem;
//     padding: 0.75rem;

//     span {
//       font-family: Lato;
//       font-size: 1.125rem;
//       line-height: 140%;
//       color: #656363;
//     }
//   }
// `
