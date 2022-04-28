import styled from 'styled-components/macro'

export const HeadWrapper = styled.div`
  p {
    .score {
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #323232;
      opacity: 0.2;
    }
  }

  .scale {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #242679;
  }
`

export const RatingContent = styled.div`
  .card {
    background: #ffffff;
    border: 1px solid #d1d1d1;
    box-sizing: border-box;
    box-shadow: 0px 4px 30px rgba(42, 63, 157, 0.05);
    border-radius: 10px;
  }

  .card-header {
    background: none;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #bdbdbd;
  }

  .card-text {
    border-bottom: 1px solid #e7e7e7;
    padding-bottom: 10px;
    p {
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #878181;
    }
  }

  .rating-btn button {
    margin-right: 20px;
    background: #f8f8fa;
    border-radius: 4px;
    border: none;
    padding: 10px 15px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #000000;

    :focus {
      background: #2e3192;
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      color: #f9f9fc;
    }
  }
`
