import styled, { keyframes } from "styled-components/macro";

export const Card = styled.div`
  border: 1px solid #d5d6f4;
  border-radius: 10px;
  padding: 1.625rem 1.81rem;

  h5 {
    font-family: DM Sans;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.26rem;
    letter-spacing: 0.01em;
    color: #181818;
    margin-bottom: 1.69rem;
  }

  span{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 12px;
      height: 12px;
  }

  .legend-name{
    font-family: DM Sans;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #333333;
    flex-basis: 40%;
  }
  .percentage{
    font-family: DM Sans;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #757575;
  }
`;
