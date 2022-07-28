import styled from 'styled-components';
import {Layout} from 'antd';
import {GREY_3, LIGHT_3} from '../../../utils/colors';
import {ContentProps} from './Content';

const {Content} = Layout;

export const ContentS = styled(Content)<ContentProps>`
	background: ${GREY_3};
	color: ${LIGHT_3};
	margin-top: 64px;
	min-height: calc(100vh - 94px - 64px);
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

