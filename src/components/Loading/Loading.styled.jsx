import styled, { keyframes } from 'styled-components/macro';

const rotate = keyframes`
	0% {
		transform: rotate(0)
	}
	
	100% {
		transform: rotate(360deg)
	}
`;

const move1 = keyframes`
	0%,
	5% {transform: translate(0, 0);}
	to {transform: translate(0, -100%);}
`;

const move2 = keyframes`
	0%,
	5% {
		transform: translate(0, 0);
	}
	to {
		transform: translate(100%, 100%);
	}
`;

const move3 = keyframes`
	0%,
	15% {
		transform: translate(0);
	}
	to {
		transform: translate(-100%, 100%);
	}
`;

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction:column;
	background: linear-gradient(180deg, #242679 -13.89%, #1d2147 100%);
`;

export const WrapLoad = styled.div`

margin-top:40px;
`

export const LoadingWrapper = styled.div`
	animation: ${rotate} 1s linear infinite normal;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	height: 0.8rem;
	position: relative;
	width: 0.8rem;
`;

export const Ball = styled.div`
	animation-name: ${move1};
	animation-duration: 0.5s;
	animation-direction: alternate;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;
	background-color: #fff;
	border-radius: 50%;
	height: 100%;
	position: absolute;
	width: 100%;

	&:nth-of-type(2) {
		animation-name: ${move2};
	}

	&:nth-of-type(3) {
		animation-name: ${move3};
	}

`;
