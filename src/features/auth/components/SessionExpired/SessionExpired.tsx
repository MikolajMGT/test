import React, {FC} from 'react';
import {Box} from '../../../../components/Box/Box';
import {envVars} from '../../../../config/envs/env';
import {Button, Row, Space, Typography} from 'antd';

export const SessionExpired: FC = () =>
	<Row align="middle" justify="center" style={{width: '100%', height: '100vh'}}>
		<Box title="Session Expired">
			<Space direction="vertical" size={20}>
				<Typography.Text>
					Your session expired and you have been signed off. Please Log in again.
				</Typography.Text>
				<Row justify="center">
					<Button type="primary" onClick={() => window.location.assign(envVars.pageUrl)}>Refresh</Button>
				</Row>
			</Space>
		</Box>
	</Row>;
