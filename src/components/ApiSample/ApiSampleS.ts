import styled from 'styled-components';

import {ApiSampleProps} from './ApiSample';

export const ApiSampleS = styled.div<ApiSampleProps>`
	
	.ant-btn-default {
		background: transparent;
	}

	.ant-btn:not(.ant-btn-circle) {
		min-width: unset;
	}
`;
