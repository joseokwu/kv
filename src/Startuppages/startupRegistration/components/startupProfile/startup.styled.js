import styled from 'styled-components/macro';

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
`;

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
`;
export const InputWrapper = styled.label`
  position: relative;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: #2bb4f0;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -30px;
  left: 60px;

  input {
    width: inherit;
    height: inherit;
    opacity: 0;
  }
`;

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

  .error {
    color: red;
  }

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
    border: none !important;
    background: #fafafc !important;
    /* border-radius: 4px !important; */
    padding: 8px 14px;
    /* margin-left: 15px !important; */
    /* margin-bottom: 15px !important; */

    ::placeholder {
      font-family: DM Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      text-transform: capitalize;
      color: #bdbdbd;
    }

    :focus {
      outline: none !important;
    }
  }

  textarea {
    border: none;
    margin-left: 15px;
    background: #fafafc !important;
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
    width: 70%;
    margin-left: 15px;
  }

  .custs {
    border: none;
    background: #fafafc;
    /* width: 70%; */
    margin-left: 15px;
    border-radius: 7px;
    outline: none;

    &:focus {
      outline: 0;
    }
  }

  .sel {
    width: 97%;
    background: ${(props) => (props.bg ? props.bg : '#fafafc')};
    color: #4f4f4f;
    border-radius: 7px;
    /* cursor: pointer; */
    text-transform: capitalize;
    outline: 0;
    min-height: 2.56rem;
    /* margin-left: 15px; */
    border: 0.1rem solid #fefefe;
  }

  .date-input {
    padding: 8px 14px;
    background: #fafafc;
    border-radius: 4px;
    border: none;
    outline: none;
  }

  .country-bg {
    background: #fafafc;
    border: none;
    outline: none;
    }
`;
