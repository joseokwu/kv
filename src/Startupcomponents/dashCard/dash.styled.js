import styled from "styled-components/macro";

export const CardWrapper = styled.div`
    width: 248px;
    height: 124px;
    margin-left: 12px;
    margin-top: 10px;
    background: #ffffff;
    padding: 25px;
    box-shadow: 0px 4px 18px -2px rgba(86, 87, 88, 0.12);
    border-radius: 20px;
    @media (max-width: 1024px) {
        width: 82vw;
    }

    .card_star {
        position: relative;
        top: -4.4rem;
        left: 159px;
        border-radius: 0 0 18px 0;
    }

    p {
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 48px;
        color: #181819;
    }

    h3 {
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 140%;
        color: #828282;
        text-transform: capitalize;
    }
`;
export const CardWrap = styled.div`
    min-width: 211px;
    width: max-content;
    max-width: 306px;
    filter: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.05));
    border-radius: 10px;
    padding: 24px 32px;
    background: ${(props) => props.bg};
    text-align: left;
    margin-left: 20px;
    color: #fff;
    margin-top: 10px;
    @media (max-width: 1024px) {
        width: 100vw;
        text-align: center;
        padding: 30px;
        margin-left: 10px;
    }

    h5 {
        font-family: "DM Sans";
        font-style: normal;
        display: flex;
        justify-content: center;
        font-weight: 700;
        font-size: 30px;
        line-height: 39px;
        margin-bottom: 6px;
        color: #fff;
    }

    p {
        font-family: "DM Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
    }

    span {
        font-weight: 700;
        font-size: 30px;
        line-height: 39px;
    }
`;

export const Wrapper = styled.div`
    display: inline-flex;
    align-items: center;
    background: whitesmoke;
    border-radius: 8px;
    padding: 0.5rem;

    h5 {
        color: #09302;
        font-size: 1rem;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 0.5rem;
    }
`;
