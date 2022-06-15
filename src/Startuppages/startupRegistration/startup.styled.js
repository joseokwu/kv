import styled from "styled-components/macro";

export const WelcomeMessage = styled.div`
    margin-top: 1rem;

    h5 {
        color: #2e3192;
        letter-spacing: 0.01em;
        display: flex;
        line-height: 31px;
        font-weight: bold;
        font-size: 24px;
        font-family: DM Sans;
    }

    p {
        color: #828282;
        margin-top: 5px;
    }
`;

export const RegCard = styled.div`
    padding-top: 50px;
    .reg-card {
        background: #f9f9fc;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.02);
        border-radius: 5px;
        padding: 26px 29px 75px 48px;
        // padding: 50px 80px;

        @media (max-width: 1024px) {
            padding: 0px;
        }
    }
`;
