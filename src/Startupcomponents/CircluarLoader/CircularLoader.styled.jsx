import styled, { keyframes } from 'styled-components/macro';

const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;

export const Loading = styled.div`
	border-radius: 50%;
	width: 24px;
	height: 24px;
	border: 2px solid #ffffff6a;
	border-top-color: ${(props) => (props.color ? props.color : '#fff')};
	animation: ${spin} 1s infinite linear;
`;

export const LoaderWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
