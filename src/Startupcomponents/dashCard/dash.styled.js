import styled from 'styled-components/macro'

export const CardWrapper = styled.div`
  width: 248px;
  height: 124px;
  margin-left: 12px;
  margin-top: 10px;
  background: #ffffff;
  /* Cool 2 */
  padding: 25px;
  box-shadow: 0px 4px 18px -2px rgba(86, 87, 88, 0.12);
  border-radius: 20px;

  .card-star {
    position: relative;
    top: -3.6rem;
    left: 159px;
    border-radius: 0 0 18px 0;
  }

  p {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 140%;
    color: #eff3f6;
    color: #181819;
  }

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 90%;
    color: #828282;
    text-transform: capitalize;
  }
`
export const CardWrap = styled.div`
  width: 211px;
  filter: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.05));
  border-radius: 10px;
  padding: 15px;
  background: ${(props) => props.bg};
  text-align: center;
  margin-left: 20px;
  color: #fff;
  margin-top: 10px;

  h5 {
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 90%;
    margin-bottom: 6px;
    color: #fff;
  }

  p {
    font-size: 1rem;
    line-height: 50%;
    margin-bottom: 15px;
  }

  span {
    font-size: 0.6rem;
    line-height: 30%;
    margin-top: 0.7rem;
    margin-left: 4px;
  }
`
