import styled from "styled-components/macro";

export const CoInputWrapper = styled.label`
    position: absolute;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background: #2bb4f0;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    right: 0;
`;

export const HeaderTeam = styled.div`
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
`;

export const ImageWrapper = styled.span`
    text-align: center;
    width: 143px;
    height: 143px;
    border-radius: 50%;
    border: 1px solid #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #fff;
`;
export const InputWrapper = styled.label`
    position: absolute;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    background: #2bb4f0;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 8px;
    right: -8px;
    margin-bottom: 0;

    input {
        width: inherit;
        height: inherit;
        opacity: 0;
    }

    /* @media (max-width: 768px) {
    top: 418px;
    left: 136px;
  } */
`;

export const FormWrapper = styled.div`
    width: 100%;
    height: ${(props) => (props.height ? props.height : "80%")};
    padding: 3rem;
    order: 2;
    margin: 3rem 0;
    flex: none;
    border: 0 solid #d3d3d3;
    border-radius: 5px;
    background: #fff;
    @media (max-width: 1024px) {
        padding: 3rem 1rem;
    }

    .select-search {
        width: 100%;
        border: 1px solid red;
    }

    span {
        cursor: pointer;
    }

    hr {
        background: #636363;
        width: 100%;
    }

    .error {
        color: red;
    }

    .div {
        margin-bottom: 10px;
        margin-top: 15px;
        // margin-left: 15px;
        span {
            font-family: DM Sans;
            font-weight: 500;
            font-size: 24px;
            line-height: 30.83px;
            color: #2e3192;
            cursor: pointer;
        }

        p {
            font-family: DM Sans;
            font-weight: 400;
            font-size: 16px;
            line-height: 30.83px;
            color: #727372;
        }
    }

    .sold {
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
    }

    label {
        font-family: DM Sans;
        font-weight: 400;
        font-size: 16px;
        line-height: 20.02px;
        color: #000000;
        /* margin-left: 15px; */
    }

    input {
        border: none;
        background: #fafafc !important;
        border-radius: 4px;
        /* margin-left: 15px; */
        /* margin-bottom: 15px; */

        ::placeholder {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;
            color: #bdbdbd;
        }
    }

    textarea {
        border: none;
        background: #fafafc;
        /* margin-left: 15px; */
    }
    .cust {
        border: none;
        background: #fafafc;
        width: 100%;
        border-radius: 4px;
        /* margin-left: 15px; */
        outline: none;
    }

    .custs {
        border: none;
        background: #fafafc;
        width: 100%;
        /* margin-left: 15px; */
        border-radius: 7px;
        outline: none;

        input:focus {
            outline: none;
        }

        &:focus {
            outline: none;
        }

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    .ant-picker {
        padding: 8px 20px 8px 20px !important;
    }

    .ant-select-multiple .ant-select-selection-item {
        background: #6466aa;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        line-height: 21px;
        font-family: "DM Sans";
        letter-spacing: 0.01em;
    }

    .ant-select-multiple .ant-select-selection-item-remove svg {
        color: #fff;
        margin-bottom: 5px;
        margin-left: 10px;
    }

    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        background: #fafafc;
        border-radius: 4px;
        border: none;
        padding: 5px 0px 5px 5px;
    }

    .skiil-select {
        background: #fafafc !important;
        border-radius: 4px;
        border: none !important;
    }
`;

export const HeaderModal = styled.h4`
    font-size: 1.6rem;
    color: #030298;
    font-weight: 600;
    margin-top: 10px;
`;
export const ModalForm = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    text-align: justify;
    /* height: 70vh; */

    input {
        background: #fafafc !important;
        border: none;

        ::placeholder {
            color: #bdbdbd;
            font-size: 0.875rem;
        }
    }

    label {
        font-family: "DM Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #000000;
        margin-top: 10px;
    }

    article {
        color: red;
    }

    textarea {
        background: #fafafc !important;
        border: none;

        ::placeholder {
            color: #bdbdbd;
            font-size: 0.875rem;
        }
    }
    span {
        margin-left: 10px;
    }

    .date-input {
        padding: 8px 14px;
        background: #fafafc;
        border-radius: 4px;
        border: none;
        outline: none;
    }
`;
// export const BntWrap = styled.div`
//   button {
//     width: 6%;
//     border: none;
//     border-radius: 10px;
//     margin-top: 10px;
//   }
// `

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
`;

// export const Education = styled.div`
//   .addEducation {
//     column-gap: 20px;
//   }

export const Spacer = styled.div`
    flex: 1;
`;
export const Education = styled.div`
    .addEducation {
        column-gap: 20px;
    }

    h4 {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 140%;
        color: #323232;
    }

    //   h4 {
    //     font-family: 'Lato';
    //     font-style: normal;
    //     font-weight: 700;
    //     font-size: 20px;
    //     line-height: 140%;
    //     color: #323232;
    //   }

    //   h2 {
    //     font-family: 'DM Sans';
    //     font-style: normal;
    //     font-weight: 400;
    //     font-size: 18px;
    //     line-height: 23px;
    //     letter-spacing: 0.01em;
    //     color: #525151;
    //   }

    //   p {
    //     font-family: 'DM Sans';
    //     font-style: normal;
    //     font-weight: 400;
    //     font-size: 16px;
    //     line-height: 21px;
    //     letter-spacing: 0.01em;
    //     color: #828282;
    //   }

    p {
        font-family: "DM Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        letter-spacing: 0.01em;
        color: #828282;
    }
`;
