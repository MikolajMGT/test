import React, {FC, useEffect, useState} from 'react';
import {Box} from '../../../../components/Box/Box';
import {envVars} from '../../../../config/envs/env';
import {ErrorPageS} from './ErrorPageS';
import {useLocation, useNavigate} from 'react-router-dom';
import * as CheckType from 'check-types';
import {Button, Modal, Row, Space, Typography} from 'antd';

export interface ErrorPageProps {
	error?: string,
}

export const ErrorPage: FC<ErrorPageProps> = (props) => {
	const {error} = props;
	const navigate = useNavigate();
	const location = useLocation();
	const [errorMsg, setErrorMsg] = useState<string | undefined>(error);
	const [isModalVisible, setIsModalVisible] = useState(false);

	useEffect(() => {
		if (CheckType.not.assigned(location.state && (location.state as any).errorMsg)) {
			navigate('/');
		} else {
			const state = {...(location.state as any)};
			setErrorMsg(state.errorMsg);
			delete location.state;
		}
	}, []);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = async () => {
		setIsModalVisible(false);
	};

	return (
		<ErrorPageS>
			<Box title="Error Occurred">
				<Space direction="vertical">
					<Row justify="end">
						<Typography.Text>Server returned unexpected error. Please verify your data and try
							again.</Typography.Text>
						<Button type="text" onClick={showModal}>show details...</Button>
					</Row>
					<Row justify="center">
						<Button type="primary" onClick={() => window.location.assign(envVars.pageUrl)}>Refresh</Button>
					</Row>
				</Space>
				<Modal title="Error details" centered visible={isModalVisible} onOk={handleOk}>
					<p>Server error content: {errorMsg}</p>
				</Modal>
			</Box>
		</ErrorPageS>
	);
};
