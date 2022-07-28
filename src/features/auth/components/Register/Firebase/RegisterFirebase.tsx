import React, {FC, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthService} from '../../../api/service';
import {Button, Divider, Form, Input, Row, Typography} from 'antd';
import {Page} from '../../../../../components/Page/Page';
import {Box} from '../../../../../components/Box/Box';
import {validateEmail, validatePassword} from '../../../domain/validators';

export interface RegisterFirebaseFormValues {
	email: string;
	password: string;
}

export const RegisterFirebase: FC = () => {
	const navigate = useNavigate();

	const authService = AuthService.getInstance();
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);

	const onSubmit = async (values: RegisterFirebaseFormValues) => {
		setLoading(true);

		try {
			await authService.registerUser(values.email, values.password);
			navigate('/register-step-2');
		} catch (error: any) {
			if (error.code === 'auth/email-already-in-use') {
				form.setFields([
					{name: 'email', errors: ['This email is already in use.']}
				]);
			} else {
				setError(error);
				console.error(error);
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<Page tab="none">
			<Row align="middle" justify="center" style={{width: '100%'}}>
				<Box title="Register Account" error={error}>
					<Form
						form={form}
						layout="vertical"
						autoComplete="Off"
						onFinish={onSubmit}
					>
						<Form.Item
							label={<Typography.Text>Email</Typography.Text>}
							name="email"
							tooltip="Enter email for your account"
							rules={validateEmail()}
						>
							<Input placeholder="input email"/>
						</Form.Item>
						<Form.Item
							label={<Typography.Text>Password</Typography.Text>}
							name="password"
							tooltip="Enter a new password to this account."
							rules={validatePassword(true)}
						>
							<Input.Password placeholder="input password"/>
						</Form.Item>
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
						<Divider/>
						<Row align="middle" justify="space-between">
							<Typography.Text>Already have an account?</Typography.Text>
							<Button type="default" onClick={() => navigate('/login')}>Sign In</Button>
						</Row>
					</Form>
				</Box>
			</Row>
		</Page>
	);
};
