import {createGlobalStyle} from 'styled-components';
import {GREY_1, GREY_2, GREY_3, GREY_4, GREY_5, LIGHT_2, LIGHT_3, PRIMARY, SECONDARY} from './colors';

export const GlobalStyle = createGlobalStyle`

	/*
	 ** General
	 */

	body {
		background: ${GREY_3};
		margin: 0;
		font-family: 'Montserrat', 'Roboto', 'Oxygen', 'Helvetica Neue', sans-serif;
		font-weight: 550;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
		monospace;
	}

	.firebase-emulator-warning {
		display: none;
	}

	/*
	 ** Ant overrides
	 */

	.ant-btn:not(.ant-btn-circle) {
		min-width: 110px;
	}

	.ant-btn-default {
		border-color: ${SECONDARY};
	}

	.ant-checkbox-disabled .ant-checkbox-inner {
		background: ${GREY_1};
	}

	.ant-table-wrapper {
		border: 1px solid rgba(140, 140, 140, 0.35);
		border-radius: 4px;
	}

	.ant-pagination {
		padding-right: 10px;

		.ant-pagination-item:not(:hover):not(.ant-pagination-item-active), .ant-pagination-item-link:not(:hover) {
			border-color: ${LIGHT_3};
		}

		.ant-pagination-item-link:disabled {
			border-color: ${GREY_1};

			svg {
				color: ${GREY_1};
			}
		}

		svg {
			height: 14px;
		}
	}

	.ant-card-meta-title {
		color: ${LIGHT_2};
	}

	.ant-card-meta-description, .ant-list-item-meta-description, svg {
		color: ${LIGHT_3};
	}

	.ant-menu-submenu-popup, .ant-menu-sub {
		box-shadow: none;
	}

	.ant-menu:not(.ant-menu-sub) {
		display: flex;
		align-items: center;
		justify-content: center;

		svg {
			margin-top: 24px;
			font-size: 34px;
		}
	}

	.ant-menu-horizontal {
		border: none;
	}

	.ant-menu-horizontal > .ant-menu-item::after, .ant-menu-horizontal > .ant-menu-submenu::after {
		border: none;
	}

	.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover::after,
	.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active::after,
	.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open::after,
	.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected::after {
		border: none;
	}

	.ant-progress-inner {
		background: ${GREY_1} !important;
	}
	
	.ant-progress-status-exception .ant-progress-outer .ant-progress-inner .ant-progress-bg {
		background: ${GREY_1} !important;
	}
	
	.ant-progress-status-success .ant-progress-outer .ant-progress-inner .ant-progress-bg {
		background: ${GREY_1} !important;
	}

	.ant-spin-dot-item {
		background: ${PRIMARY};
	}

	.ant-steps-item-finish .ant-steps-item-icon, .ant-steps-item-wait .ant-steps-item-icon {
		background: ${GREY_2};
	}

	.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
		color: ${LIGHT_2};
	}
	
	.ant-collapse-content-box {
		background: ${GREY_4};
	}

	.ant-table-thead tr th {
		background: ${GREY_2};
		height: 10px;
		border-bottom: none;
	}

	.ant-table-tbody > .ant-table-placeholder > td {
		border-bottom: 0;
	}

	.ant-table-tbody > tr.ant-table-row-selected > td {
		background: ${GREY_1};
	}

	.ant-list-split .ant-list-item:last-child {
		border-bottom: 1px solid #404A4F;
	}

	.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
		background: ${GREY_1};
	}

	/*
	 ** Autocomplete
	 */

	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus,
	&:-webkit-autofill:active {
		border-radius: 4px;
		-webkit-text-fill-color: ${LIGHT_3};
		-webkit-box-shadow: 0 0 0 1000px ${GREY_5} inset;
		transition: background-color 50000s ease-in-out 0s;

		:focus {
			-webkit-box-shadow: 0 0 3px ${PRIMARY}
		}
	}

	/*
   ** Scroll
   */

	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}

	::-webkit-scrollbar-button {
		width: 0;
		height: 0;
	}

	::-webkit-scrollbar-thumb {
		background: ${GREY_5};
		border-radius: 2px;
		transition: .5s;
	}

	::-webkit-scrollbar-track {
		background: ${GREY_4};
	}

	::-webkit-scrollbar-corner {
		background: ${GREY_4};
	}
`;
