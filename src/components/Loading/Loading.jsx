import React from 'react';
import { Container, LoadingWrapper, Ball, WrapLoad } from './Loading.styled';
import logo from '../../assets/icons/kvlogo.svg';

const Loader = () => (
	<LoadingWrapper>
		<Ball />
		<Ball />
		<Ball />
		
	</LoadingWrapper>
);

export const LoadingIcon = ({ fullscreen }) => {
	return fullscreen ? (
		<>
		
		<Container>
		<img src={logo} alt={"logo"}/>
			<WrapLoad>
			<Loader />
			</WrapLoad>
		</Container>
		</>
	) : (
		<Loader />
	);
};
