import styled from 'styled-components/macro'

export const ProgramCardWrapper = styled.div`
  background: #f9f9fc;
  display: flex;
  border-radius: 5px;
  width: 95%;
  padding: 1.5rem;
  margin: 20px;

  .img {
    width: 90%;
    height: 90%;
    border-radius: 5px;
  }

  .div {
    h5 {
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 47px;
      color: #2e3192;
    }

    p {
      font-family: DM Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 140%;
      color: #737373;
    }

    button {
      /* width: 60%; */
      padding: 14px 16px;
      border-radius: 10px;
      background: #2e3192;
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 140%;
      color: #ffffff;
      border: none;

      @media (max-width: 768px) {
        /* padding: 0 0.19rem; */
      }
    }
  }
`

export const TodoCard = styled.div`
  width: 40%;
  padding: 18px;
  border-radius: 12px;
  background: #f9f9f9;
  margin-top: 10px;

  .head {
    h6 {
      font-size: 1em;
      font-weight: 600;
    }
  }

  .date {
    h6 {
      color: #100298;
    }

    button {
      border: none;
      width: 20%;
      background: #def6ff;
      color: #103298;
      border-radius: 7px;
    }
  }

  p {
    width: 95%;
    color: #111;
  }

  .foot {
    span {
      color: #000;
      font-weight: 500;
    }
  }
`

export const TabFilterWrapper = styled.div`
  .sort-btn {
    background: #F9F9FC;
    border-radius: 5px;
    border: none;
    height: 3.063rem;
    padding: 0.75rem;

    span {
      font-family: Lato;
      font-size: 1.125rem;
      line-height: 140%;
      color: #656363;
    }
  }
`
