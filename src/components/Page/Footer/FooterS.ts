import styled from 'styled-components';
import {Layout} from 'antd';
import {GREY_4, LIGHT_3} from '../../../utils/colors';
import {remm} from '../../../utils/remm';

const {Footer} = Layout;

export const FooterS = styled(Footer)`
	background: ${GREY_4};
	color: ${LIGHT_3};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const FooterS_Container = styled.div`
	width: 70vw;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const FooterS_LeftPart = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;

	p {
		width: 28vw;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin: 0 0 0 15px;
		color: ${LIGHT_3};
		font-weight: 600;
		font-size: ${remm('15px')};

		@media (min-width: 1000px) {
			width: unset;
		}
	}
`;
