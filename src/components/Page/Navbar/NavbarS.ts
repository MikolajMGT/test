import styled, {css} from 'styled-components';
import {Layout} from 'antd';
import {GREY_3, GREY_4} from '../../../utils/colors';

const {Header} = Layout;

export const NavbarS = styled(Header)<{ $scrollPosition?: number }>`
	position: fixed;
	z-index: 1;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${GREY_3};

	@media (max-width: 650px) {
		h1 {
			display: none;
		}
	}

	${({$scrollPosition}) => $scrollPosition && css`
		background: ${GREY_4};
		box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
	`}
`;

export const NavbarS_Container = styled.div`
	width: 70vw;
	display: flex;
	justify-content: space-between;

	@media (max-width: 600px) {
		width: 90vw;
	}
`;

export const NavbarS_UserWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	@media (min-width: 1000px) {
		.ant-menu {
			width: 450px;
		}
	}

	@media (max-width: 1200px) {
		.ant-menu {
			max-width: 30vw;
		}
	}
`;
