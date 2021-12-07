import React from 'react';
import { LoaderWrapper, Loading } from './CircularLoader.styled';

export const CircularLoader = ({ color }) => {
	return (
		<LoaderWrapper>
			<Loading color={color} />
		</LoaderWrapper>
	);
};
