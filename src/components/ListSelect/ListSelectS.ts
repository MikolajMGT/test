import styled from 'styled-components';
import {ListSelectProps} from './ListSelect';
import {GREY_2, GREY_3} from '../../utils/colors';

export const ListSelectS = styled.div<ListSelectProps>`

`;

export const ListSelectS_Info = styled.div<{ shrink?: boolean }>`
	width: 100%;
	display: flex;
	border: 1px solid rgba(140, 140, 140, 0.35);
	border-radius: 4px;

	.ant-divider {
		margin: 0;
	}
`;

export const ListSelectS_Header = styled.div`
	width: inherit;
	display: flex;
	padding: 15px 50px;
	text-align: left;
	background: ${GREY_2};
	border-bottom: none;
`;

export const ListSelectS_Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 40px;
	width: 100%;
	min-height: 45vh;
	background: ${GREY_3};

	.ant-table-wrapper {
		width: 50%;
	}

	.ant-table-thead > tr > th {
		padding: 9px 16px;
	}

	.ant-table-thead {
		height: 52px;
	}

	${ListSelectS_Info} {
		width: 50%;
	}

	@media (max-width: 1000px) {
		flex-direction: column;

		.ant-table-wrapper {
			width: unset;
		}

		${ListSelectS_Info} {
			width: unset;
		}
	}
`;

