import styled from 'styled-components';
import {InfiniteListProps} from './InfiniteList';
import {LIGHT_3} from '../../utils/colors';

export const InfiniteListS = styled.div<InfiniteListProps>`
	color: ${LIGHT_3};
	height: ${({height}) => height};
	overflow: auto;
	padding: 0 16px;
	border: 1px solid rgba(140, 140, 140, 0.35);
	border-radius: 4px;

	.ant-collapse {
		background: transparent;
		border: none;
		border-radius: unset;

		.ant-collapse-header {
			width: 100%;
		}

		.ant-collapse-item {
			border-radius: unset;
		}

		.ant-list-item {
			width: 100%;
			border-bottom: none !important;
		}
	}
`;
