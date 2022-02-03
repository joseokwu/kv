import styled from 'styled-components/macro'

export const CustomButton = styled.button`
  border: none;
  background: ${(props) => props.background};
  color: #fff;
  border-radius: 5px;
  align-items: center;
  padding: 7px 30px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 140%;
`

export const OutlineButton = styled.button`
  border: 1px solid #2E3192;
  background: ${(props) => props.background};
  color: #2E3192;
  border-radius: 5px;
  align-items: center;
  padding: 7px 30px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 140%;
`
