import React, {FC, useState} from 'react';
import {Button, Modal, Row, Typography} from 'antd';
import {DANGER} from '../../utils/colors';

export interface ErrorProps {
	error?: string;
}

export const ErrorLabel: FC<ErrorProps> = (props) => {
	const {error} = props;

	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = async () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<div {...props}>
			{error &&
				<Row justify="end" style={{marginTop: '5px'}}>
					<Typography.Text style={{color: DANGER}}>
						Server returned unexpected error. Please verify your data and try again.
					</Typography.Text>
					<Button type="text" onClick={showModal}>show details...</Button>
				</Row>
			}
			<Modal title="Error details" centered visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
				<p>Server error content: {error}</p>
			</Modal>
		</div>
	);
};
