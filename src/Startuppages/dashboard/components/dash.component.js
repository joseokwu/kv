import styled from 'styled-components/macro'

export const HeadWrapper = styled.div`
  color: #122198;
  width: 100%;
  padding: 7px;
  border-radius: 7px;

  h5 {
    font-size: 1.2em;
    color: #2e3192;
    font-weight: bold;
    cursor: pointer;
    line-height: 140%;
    font-family: Lato;
  }

  p {
    font-family: Lato;
    font-size: 18px;
    font-weight: bold;
    line-height: 140%;
    color: rgba(24, 24, 25, 0.9);
  }

  span {
    color: #041b55;
    font-size: 14px;
    cursor: pointer;

    @media (max-width: 768px) {
      margin-left: 0;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const TodoCard = styled.div`
  width: 49%;
  padding: 18px;
  border-radius: 12px;
  background: #fff;
  margin-top: 10px;
  box-shadow: 0px 4px 18px -2px rgba(86, 87, 88, 0.12);

  .head {
    h6 {
      font-family: DM Sans;
      font-size: 18px;
      line-height: 140%;
      font-weight: bold;
      color: rgba(24, 24, 25, 0.9);
      cursor: pointer;
    }
  }

  .date {
    span {
      font-family: DM Sans;
      font-size: 16px;
      line-height: 140%;
      color: #3855b3;
      cursor: pointer;
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
    width: 90%;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-transform: capitalize;
    color: #525151;
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
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const UpcomingCard = styled.div`
  width: 32%;
  padding: 18px;
  border-radius: 12px;
  background: #fff;
  margin-top: 10px;
  box-shadow: 0px 4px 18px -2px rgba(86, 87, 88, 0.12);

  .head {
    h6 {
      font-family: Lato;
      font-weight: 800;
      font-size: 18px;
      line-height: 140%;
      color: rgba(24, 24, 25, 0.9);
    }
  }

  .event_time {
    font-family: Lato;
    font-size: 12px;
    line-height: 140%;
    color: #858585;
  }

  .date {
    span {
      color: #3855b3;
      font-family: Lato;
      font-size: 14px;
      line-height: 140%;
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
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-transform: capitalize;
    color: #525151;
  }

  .foot {
    button {
      border: none;
      border-radius: 10px;
      /* width: 40%;/ */
      background: #2e3192;
      font-family: DM Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 140%;
      color: #ffffff;
      padding: 0px 20px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
