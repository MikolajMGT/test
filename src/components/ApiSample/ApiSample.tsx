import React, {FC, useState} from 'react';
import {Button, Col, Divider, Modal, Row, Space, Tooltip, Typography} from 'antd';
import { ApiSampleS } from './ApiSampleS';
import {ApiOutlined} from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import {useAppSelector} from '../../stores/hooks';
import {selectUser} from '../../stores/slices/user';
import {RequestInfo} from './infos';

export interface ApiSampleProps {
	info: RequestInfo;
	body?: string;
	children?: React.ReactNode;
}

const ApiUrl = 'https://api.transcoder.evemeta.com'

export const ApiSample: FC<ApiSampleProps> = (props) => {
	const {info, body, children} = props;

	const user = useAppSelector(selectUser);
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

	const prepareCallString = () => {
		let result = `curl -H "ApiKey: ${user.model?.apiKey}" -H "Content-Type: application/json" -X POST ${ApiUrl}/${info.path}`
		if (body) {
			result = `${result} -d \'${body}\'`
		}

		return result
	}

	return (
		<ApiSampleS {...props}>
			<Tooltip title='check api call'>
				<Button shape='circle' icon={<ApiOutlined />} onClick={showModal}/>
			</Tooltip>
			<Modal style={{minWidth: '550px'}} title="Api call details" centered visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
				<Col>
					<Space direction='vertical' size={20}>
						{info.description && <Typography.Text>{info.description}</Typography.Text>}
						<Typography.Text>To perform this operation through API please use following request:</Typography.Text>
						<TextArea style={{minHeight: '150px'}} spellCheck={false}
						          value={prepareCallString()}/>
					</Space>
				</Col>
			</Modal>
		</ApiSampleS>
	);
};
