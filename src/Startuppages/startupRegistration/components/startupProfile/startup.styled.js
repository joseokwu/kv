import styled from 'styled-components/macro'

export const HeaderStartup = styled.div`
  h5 {
    font-family: DM Sans;
    font-weight: 700;
    font-size: 30px;
    line-height: 39.06px;
    color: #000000;
  }

  p {
    font-family: DM Sans;
    font-weight: 400;
    font-size: 16px;
    line-height: 20.83px;
    color: #828282;
  }
`

export const ImageWrapper = styled.span`
  text-align: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #fff;
`
export const InputWrapper = styled.label`
  position: absolute;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: #2BB4F0;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 380px;
  left: 200px;

  input {
    width: inherit;
    height: inherit;
    opacity: 0;
  }
`

export const FormWrapper = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? props.height : '70%')};
  padding: 2rem;
  order: 2;
  margin: 3rem 0;
  flex: none;
  border: 0 solid #d3d3d3;
  border-radius: 5px;
  background: #fff;

  .div {
    margin-bottom: 10px;
    margin-top: 15px;
    margin-left: 15px;
    span {
      font-family: DM Sans;
      font-weight: 500;
      font-size: 24px;
      line-height: 30.83px;
      color: #2e3192;
    }
  }

  label {
    margin-left: 15px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }

  input {
    border: none;
    background: #fafafc;
    border-radius: 4px;
    /* padding: 8px 14px; */
    margin-left: 15px;
    margin-bottom: 15px;

    ::placeholder {
      font-family: DM Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      text-transform: capitalize;
      color: #bdbdbd;
    }
  }

  textarea {
    border: none;
    margin-left: 15px;
    background: #fafafc;
    border-radius: 4px;

    ::placeholder {
      font-family: DM Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #bdbdbd;
    }
  }
  .cust {
    border: none;
    background: #f4f4fa;
    width: 70%;
    margin-left: 15px;
  }

  .custs {
    border: none;
    background: #fafafc;
    /* width: 70%; */
    margin-left: 15px;
    border-radius: 7px;
    outline: 0;

    &:focus {
      outline: 0;
    }
  }

  .date-input {
    padding: 8px 14px;
    background: #fafafc;
    border-radius: 4px;
  }
`
