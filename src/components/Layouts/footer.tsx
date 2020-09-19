import React from 'react';
import styled from 'styled-components';
import { logo, facebook, github, youtube } from '../../assets';
const Container = styled.div`
	width: 100%;
	height: 200px;
	min-width: 1440px;
	background-color: #f0f0f0;
`;
const InnerContainer = styled.div`
	width: 100%;
	height: 100%;
	max-width: 1240px;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		width: 92px;
		height: 25px;
		margin-bottom: 8px;
	}
	p {
		margin: 0;
		color: #22232d;
		font-weight: bold;
		font-size: 12px;
	}
	.circle {
		width: 42px;
		margin-left: 32px;
		height: 42px;
		display: flex;
		align-items: center;
		border-radius: 50%;
		background-color: #fff;
		justify-content: center;
		img {
			height: 22px;
			margin: 0;
		}
	}
`;
export const Footer = () => {
	return (
		<Container>
			<InnerContainer>
				<div>
					<img src={logo} alt='' />
					<p>
						© 2020 Xstep
						<br /> All Rights Reserved.
					</p>
				</div>
				<div style={{ flex: 1 }} />
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<a href='' className='circle'>
						<img src={github} alt='' />
					</a>
					<a href='' className='circle'>
						<img src={facebook} alt='' />
					</a>
					<a href='' className='circle'>
						<img src={youtube} alt='' />
					</a>
				</div>
			</InnerContainer>
		</Container>
	);
};
