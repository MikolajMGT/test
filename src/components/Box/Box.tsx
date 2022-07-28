import React, {FC, useState} from 'react';
import {BoxS} from './BoxS';
import {Button, Divider, Modal, Row, Typography} from 'antd';
import {remm} from '../../utils/remm';
import {DANGER} from '../../utils/colors';

export interface BoxProps {
	title?: string;
	error?: string;
	width?: string;
	children?: React.ReactNode;
}

export const Box: FC<BoxProps> = (props) => {
	const {title, error, children} = props;

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
		<BoxS {...props}>
			{title &&
				<div style={{textAlign: 'center'}}>
					<Typography.Title style={{fontSize: remm(26)}}>{title}</Typography.Title>
					<Divider/>
				</div>
			}
			{children}
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
		</BoxS>
	);
};
