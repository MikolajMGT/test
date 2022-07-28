const CracoLessPlugin = require('craco-less');

const PRIMARY = '#5193EB';
const SECONDARY = '#606169';
const DANGER = '#ff4d4f';

/// Backgrounds

const GREY_1 = '#404A4F';
const GREY_2 = '#373F43';
const GREY_3 = '#2A3033';
const GREY_4 = '#252A2D';
const GREY_5 = '#1C2022';

/// Texts

const LIGHT_1 = '#EAEAEB';
const LIGHT_2 = '#EAEAEB';
const LIGHT_3 = '#E0E0E2';

module.exports = {
	babel: {
		presets: [],
		plugins: [],
	},
	typescript: {
		enableTypeChecking: true,
	},
	webpack: {
		alias: {},
		plugins: {
			add: [],
			remove: [],
		},
	},
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {

							/// Common
							'@font-family': '\'Montserrat\', \'Roboto\', \'Oxygen\', \'Helvetica Neue\', sans-serif;',
							'@body-background': GREY_3,
							'@primary-color': PRIMARY,
							'@text-color': LIGHT_3,
							'@heading-color': LIGHT_3,
							'@border-color-base': GREY_1,
							'@component-background': GREY_5,
							'@background-color-light': GREY_2,
							'@border-color-split': LIGHT_3,
							'@border-radius-base': '4px',
							'@disabled-bg': GREY_1,
							'@disabled-color': LIGHT_2,
							'@disabled-active-bg': GREY_1,
							'@height-base': '40px',

							/// Button
							'@btn-height-base': '35px',
							'@btn-font-weight': '500',
							'@btn-default-bg': SECONDARY,
							'@btn-text-hover-bg': GREY_5,

							/// Input
							'@input-placeholder-color': GREY_1,

							/// Checkbox
							'@checkbox-check-color': GREY_4,

							/// Table
							'@table-bg': GREY_3,
							'@table-header-bg': GREY_3,
							'@table-header-cell-split-color': LIGHT_3,
							'@table-selected-row-bg': GREY_2,
							'@table-footer-bg': GREY_3,

							/// Pagination
							'@pagination-item-bg': GREY_3,
							'@pagination-item-bg-active': GREY_3,
							'@pagination-item-link-bg': GREY_3,

							/// Card
							'@card-background': GREY_4,

							/// Divider
							'@divider-color': LIGHT_3,

							/// Menu
							'@menu-bg': 'transparent',
							'@menu-item-font-size': '16px',

							/// Select
							'@item-hover-bg': GREY_2,

							/// Tooltip
							'@tooltip-bg': GREY_5,
							'@tooltip-color': LIGHT_3,

							/// Avatar
							'@avatar-bg': PRIMARY,

							/// Transfer
							'@transfer-item-selected-hover-bg': GREY_2
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
