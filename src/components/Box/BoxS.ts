import styled from 'styled-components';

import {GREY_4} from '../../utils/colors';
import {BoxProps} from './Box';

export const BoxS = styled.div<BoxProps>`
	padding: 35px 70px;
	max-width: 520px;
	min-width: 500px;
	width: ${({width}) => width ?? 'unset'};
	background: ${GREY_4};
	border-radius: 6px;
	box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
`;
