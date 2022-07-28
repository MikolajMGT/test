import styled from 'styled-components';
import {LIGHT_3} from '../../../../utils/colors';

export const HomeS = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const HomeS_Main = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	min-height: calc(100vh - 64px);

	@media (max-width: 1000px) {
		margin-top: 10vh;
		flex-direction: column;
	}
`;

export const HomeS_LeftPart = styled.div`
	color: ${LIGHT_3};
	width: 34vw;
	padding-right: 2vw;

	h1 {
		color: inherit;
		font-weight: 700;
		font-size: 42px;
	}

	h2 {
		margin-top: 15px;
		color: inherit;
		font-weight: 600;
		font-size: 26px;
	}

	@media (max-width: 1000px) {
		width: 70vw;
	}
`;

export const HomeS_RightPart = styled.div<{ image: string }>`
	height: 26vw;
	width: 36vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background-size: contain;
	background-image: ${({image}) => `url(${image})`};
	background-repeat: no-repeat;

	@media (max-width: 1000px) {
		margin-top: 10px;
		background-position: center;
		width: 70vw;
		height: 70vw;
	}
`;

export const HomeS_Details = styled.div`
	display: flex;
	align-items: center;
	min-height: calc(100vh - 64px - 94px);
	padding: 10vh 0;
`;

export const HomeS_CardsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media (max-width: 1000px) {
		margin-top: 10vh;
		flex-direction: column;

		div {
			margin-bottom: 20px;
		}
	}
`;

export const HomeS_Space = styled.div`
	width: 10vw;
`;
