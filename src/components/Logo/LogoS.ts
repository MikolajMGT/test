import styled from 'styled-components';
import {LogoProps} from './Logo';
import {LIGHT_3} from '../../utils/colors';
import {remm} from '../../utils/remm';

export const LogoS = styled.div<LogoProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	h1 {
		font-size: ${remm('24px')};
		font-weight: 800;
		color: ${LIGHT_3};
		margin: 0 0 0 10px
	}

`;
