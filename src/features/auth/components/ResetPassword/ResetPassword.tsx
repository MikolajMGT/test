import React, {FC, useState} from 'react';
import {Page} from '../../../../components/Page/Page';
import {Button, Form, Input, Row, Space, Typography} from 'antd';
import {Box} from '../../../../components/Box/Box';
import {useNavigate} from 'react-router-dom';
import {Notification, notify} from '../../../../utils/notify';
import {validatePassword} from '../../domain/validators';
import {callResetPassword} from '../../api/requests';

export interface ResetPasswordFormValues {
	password: string;
}

export const ResetPassword: FC = () => {
	const navigate = useNavigate();

	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);

	const onSubmit = async (values: ResetPasswordFormValues) => {
		setLoading(true);

		const url = new URL(window.location.href);
		const token = url.searchParams.get('token');

		if (token != null) {
			try {
				await callResetPassword(token, values.password);
				navigate('/');
				notify(Notification.SUCCESS, 'Operation Completed', 'Your password has been changed');
			} catch (error: any) {
				setError(error.message);
				console.log(error);
			} finally {
				setLoading(false);
			}
		}
	};

	return (
		<Page tab="none">
			<Row align="middle" justify="center" style={{width: '100%'}}>
				<Box title="Reset Password" error={error}>
					<Form
						form={form}
						layout="vertical"
						autoComplete="Off"
						onFinish={onSubmit}
					>
						<Space direction="vertical" size={20}>
							<Typography.Text>
								To reset your password, please enter new password below.
							</Typography.Text>
							<Form.Item
								label={<Typography.Text>Password</Typography.Text>}
								name="password"
								tooltip="Enter a new password to this account."
								rules={validatePassword(true)}
							>
								<Input.Password placeholder="input password"/>
							</Form.Item>
						</Space>
						<Form.Item
							label={<Typography.Text>Repeat password</Typography.Text>}
							name="repeatPassword"
							tooltip="Please repeat your new password below"
							rules={[...validatePassword(true),
								({getFieldValue}) => ({
									validator(_, value) {
										if (!value || getFieldValue('password') === value) {
											return Promise.resolve();
										}

										return Promise.reject(new Error('The two passwords does not match!'));
									}
								})
							]}
						>
							<Input.Password placeholder="repeat password"/>
						</Form.Item>
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
