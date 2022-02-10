import styled from 'styled-components/macro'

export const BodyWrapper = styled.div`
  margin-bottom: 10px;
  margin-top: 30px;
  width: 100%;

  .sold {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    width: 95%;
    background: #fff;
    margin: 10px;
    border: 1.5px solid #e6e7e9;
    box-sizing: border-box;
    border-radius: 6px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .span {
    font-family: DM Sans;
    font-weight: 500;
    font-size: 24px;
    line-height: 30.83px;
    color: #2e3192;
  }
  p {
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    margin-top: 10px;
    color: #828282;
  }
  hr {
    width: 100%;
    margin-top: 15px;
    margin-bottom: 5px;
    background: #808080;
  }

  label {
    font-family: DM Sans;
    font-weight: 400;
    font-size: 16px;
    line-height: 20.02px;
    color: #000000;
    margin-left: 8px;
  }

  input {
    border: none;
    background: #fafafc;
    border-radius: 4px;
    width: 75%;
    margin-left: 8px;
    margin-bottom: 15px;

    ::placeholder {
      font-family: DM Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #bdbdbd;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  textarea {
    border: none;
    background: #fafafc;
    border-radius: 4px;
    width: 100%;
    margin-left: 8px;

    ::placeholder {
      font-family: DM Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #bdbdbd;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .cust {
    border: none;
    background: #fafafc;
    border-radius: 4px;
    width: 70%;
    margin-left: 15px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .custs {
    border: none;
    background: #f4f4f4;
    width: 70%;
    margin-left: 15px;
    border-radius: 7px;
    outline: 0;

    &:focus {
      outline: 0;
    }
  }
`

export const BntWrap = styled.div`
  button {
    /* width: 30px; */
    background: #f9f9fc;
    color: #4f4f4f;
    border: none;
    border-radius: 10px;
    padding: 10px 15px;
    margin-top: 10px;

    :focus {
      background: #dcebff;
      color: #2e3192;
    }
  }
`

export const BoxBorder = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  width: 50%;

  background: #fff;
  margin: 10px;
  border: 1.5px solid #e6e7e9;
  box-sizing: border-box;
  border-radius: 6px;

  @media (max-width: 768px) {
    width: 100%;
  }
`