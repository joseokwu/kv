import styled from 'styled-components/macro'

export const HeaderPitch = styled.div`
  width: 224px;

  align-items: flex-start;
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
  background: #d2d2d2;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 11.69%;
  left: 8.88%;

  input {
    width: inherit;
    height: inherit;
    opacity: 0;
  }
`

export const FormWrapper = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? props.height : '80%')};
  padding: 2rem;
  order: 2;
  margin: 2rem 0;
  flex: none;
  border: 0 solid #d3d3d3;
  border-radius: 5px;
  background: #fff;

  .button {
    border: none;
    background: ${(props) =>
      props.background ? props.background : ' #2E3192'};
    border-radius: 5px;
    padding-left: 20px;
    padding-right: 20px;
    height: 37px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin-left: 10px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 140%;
    color: #ffffff;
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

    input {
      width: 50%;
      background: #fafafc!important;
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

    hr {
      width: 100%;
      margin-top: 15px;
      margin-bottom: 5px;
      background: #808080;
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
  }

  label {
    font-family: DM Sans;
    font-weight: 400;
    font-size: 16px;
    line-height: 20.02px;
    color: #000000;
    margin-left: 15px;
  }

  input {
    border: none;
    background: #f4f4f4;
    width: 75%;
    margin-left: 15px;
    margin-bottom: 15px;
  }

  textarea {
    border: none;
    background: #f4f4f4;
    width: 70%;
    margin-left: 15px;
  }
  .cust {
    border: none;
    background: #f4f4f4;
    width: 70%;
    margin-left: 15px;
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

export const FileWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  width: 100%;
  height: 75%;
  background: #fff;
  /* margin:10px; */
  border: 1.5px dashed #e6e7e9;
  box-sizing: border-box;
  border-radius: 4px;

  /* .download {
    color: #ffffff!important ;
    background: #2e3192;
    cursor: pointer;
  } */


  @media (max-width: 768px) {
    width: 100%;
  }
`
export const FileText = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
  text-align: center;

  color: rgba(24, 24, 25, 0.9);
`

export const FileSize = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;

  text-align: center;

  color: #2e3192 !important;
`

export const LabelButton = styled.label`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  padding: 8px 12px;
  background: #f9f9fc;
  border-radius: 4px;
  color: #2e3192 !important;
  /* margin-top:5px; */
`

export const VideoWrapper = styled.div`
  padding: 3rem;
  width: 78%;

  background: #f9f9fc;
  margin-top: 10px;
  box-sizing: border-box;
  border-radius: 6px;

  .div {
    width: 70%;
    padding: 15px;
    background: #f9f9fc;
    border: 1px solid #e6e7e9;
    border-bottom: 0;
    border-radius: 8px 8px 0 0;

    img {
      margin-left: 35%;
      margin-top: 16px;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  #div {
    width: 70%;
    background: #fff;
    border-radius: 0 0 8px 8px;
    margin-left: 15px;
    margin-top: -0.64rem;
    .p {
      margin-left: 30%;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
