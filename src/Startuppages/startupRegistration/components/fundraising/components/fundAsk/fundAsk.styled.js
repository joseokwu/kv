import styled from "styled-components/macro";

export const BodyWrapper = styled.div`
    margin-bottom: 10px;
    // margin-top: 30px;
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

    .mini-title {
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
        background: #fafafc !important;
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
        background: #fafafc !important;
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

    .extra {
        height: 2.4rem;
    }

    .error {
        color: red;
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
`;

export const BntWrap = styled.div`
    button {
        /* width: 30px; */
        background: #f9f9fc;
        color: #4f4f4f;
        border: none;
        border-radius: 10px;
        padding: 10px 15px;
        margin-top: 10px;

        /* :focus {
      background: #dcebff;
      color: #2e3192;
    } */
    }
    .active {
        background: #dcebff;
        color: #2e3192;
    }
`;

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
`;

// export const HeaderFund = styled.div`
//   width: 224px;

//   align-items: flex-start;
//   h5 {
//     font-family: DM Sans;
//     font-weight: 700;
//     font-size: 30px;
//     line-height: 39.06px;
//     color: #000000;
//   }

//   p {
//     font-family: DM Sans;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 20.83px;
//     color: #828282;
//   }
// `;

// export const ImageWrapper = styled.span`
//   text-align: center;
//   width: 90px;
//   height: 90px;
//   border-radius: 50%;
//   border: 1px solid #e0e0e0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   background: #fff;
// `;
// export const InputWrapper = styled.label`
//   position: absolute;
//   border-radius: 50%;
//   width: 30px;
//   height: 30px;
//   background: #d2d2d2;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   top: 418px;
//   left: 126px;

//   input {
//     width: inherit;
//     height: inherit;
//     opacity: 0;
//   }
// `;

// export const FormWrapper = styled.div`
//   width: 90%;
//   height: ${(props) => (props.height ? props.height : '80%')};
//   padding: 3rem;
//   order: 2;
//   margin: 3rem 0;
//   flex: none;
//   border: 0 solid #d3d3d3;
//   border-radius: 5px;
//   background: #fff;

//   hr {
//     background: #636363;
//     width: 95%;
//   }

//   .div {
//     margin-bottom: 10px;
//     margin-top: 15px;
//     margin-left: 15px;
//     span {
//       font-family: DM Sans;
//       font-weight: 500;
//       font-size: 24px;
//       line-height: 30.83px;
//       color: #2e3192;
//     }

//     p {
//       font-family: DM Sans;
//       font-weight: 400;
//       font-size: 16px;
//       line-height: 30.83px;
//       color: #727372;
//     }
//   }

//   .sold {
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     padding: 3rem;
//     width: 70%;

//     background: #fff;
//     margin: 10px;
//     border: 1.5px solid #e6e7e9;
//     box-sizing: border-box;
//     border-radius: 6px;
//   }

//   label {
//     font-family: DM Sans;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 20.02px;
//     color: #000000;
//     margin-left: 15px;
//   }

//   input {
//     border: none;
//     background: #f4f4f4;
//     width: 75%;
//     margin-left: 15px;
//     margin-bottom: 15px;
//   }

//   textarea {
//     border: none;
//     background: #f4f4f4;
//     width: 70%;
//     margin-left: 15px;
//   }
//   .cust {
//     border: none;
//     background: #f4f4f4;
//     width: 70%;
//     margin-left: 15px;
//   }

//   .custs {
//     border: none;
//     background: #f4f4f4;
//     width: 70%;
//     margin-left: 15px;
//     border-radius: 7px;
//     outline: 0;

//     &:focus {
//       outline: 0;
//     }
//   }
// `;

// export const HeaderModal = styled.h4`
//   font-size: 1.6rem;
//   color: #030298;
//   font-weight: 600;
//   margin-top: 10px;
// `;
// export const ModalForm = styled.div`
//   overflow-x: hidden;
//   overflow-y: auto;
//   text-align: justify;
//   height: 70vh;

//   input {
//     background: #f7f9f9;
//     border: none;
//   }

//   textarea {
//     background: #f7f9f9;
//     border: none;
//   }
//   span {
//     margin-left: 10px;
//   }
// `;
// export const BntWrap2 = styled.div`
//   button {
//     width: 6%;
//     border: none;
//     border-radius: 10px;
//     margin-top: 10px;
//   }
// `;

export const Terms = styled.div`
    width: 85%;
    p {
        font-family: DM Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        color: #828282;

        span {
            color: #121298;
            font-weight: 600;
        }
    }
`;
