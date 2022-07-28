import React, {FC} from 'react';
import {LoadingS} from './LoadingS';
import {Spin} from 'antd';

export const Loading: FC = () => {

	return (
		<LoadingS>
			<Spin size="large"/>
		</LoadingS>
	);
};
