import styled from "styled-components";

export const OptionWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.7rem;
`;

export const Option = styled.div`
  background: ${(props) => (props.bg ? props.bg : "#f9f9fc")};
  border-radius: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.31rem;
  letter-spacing: 0.01em;
  color: #4f4f4f;
  min-height: 2.56rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  cursor: pointer;
  text-transform: capitalize;
`;
