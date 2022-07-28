import React, {FC, useState} from 'react';
import {Page} from '../../../../components/Page/Page';
import {Button, Form, Input, Row, Space, Typography} from 'antd';
import {Box} from '../../../../components/Box/Box';
import {useNavigate} from 'react-router-dom';
import {Notification, notify} from '../../../../utils/notify';
import {validateEmail} from '../../domain/validators';
import {callRemindPassword} from '../../api/requests';

export interface RemindPasswordFormValues {
	email: string;
}

export const RemindPassword: FC = () => {
	const navigate = useNavigate();

	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);

	const onSubmit = async (values: RemindPasswordFormValues) => {
		setLoading(true);

		try {
			await callRemindPassword(values.email);
			navigate('/');
			notify(Notification.SUCCESS, 'Operation Completed', 'Please check you e-mail inbox');
		} catch (error: any) {
			setError(error.message);
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Page tab="none">
			<Row align="middle" justify="center" style={{width: '100%'}}>
				<Box title="Remind Password" error={error}>
					<Form
						form={form}
						layout="vertical"
						autoComplete="Off"
						onFinish={onSubmit}
					>
						<Space direction="vertical" size={20}>
							<Typography.Text>
								To reset your password, enter your e-mail which is associated with the account. We will send further instructions to this
								e-mail.
							</Typography.Text>
							<Form.Item
								label={<Typography.Text>Email</Typography.Text>}
								name="email"
								tooltip="Enter email for this account"
								rules={validateEmail()}
							>
								<Input placeholder="input email"/>
							</Form.Item>
						</Space>
						<Row justify="space-between" style={{marginBottom: '-12px'}}>
							<Form.Item>
								<Button type="default" onClick={() => navigate(-1)}>Cancel</Button>
							</Form.Item>
							<Form.Item>
								<Button loading={loading} type="primary" htmlType="submit">Submit</Button>
							</Form.Item>
						</Row>
					</Form>
				</Box>
			</Row>
		</Page>
	);
};
