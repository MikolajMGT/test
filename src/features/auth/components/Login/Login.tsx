import React, {FC, useState} from 'react';
import {Page} from '../../../../components/Page/Page';
import {Button, Checkbox, Divider, Form, Input, Row, Typography} from 'antd';
import {Box} from '../../../../components/Box/Box';
import {useNavigate} from 'react-router-dom';
import {AuthService} from '../../api/service';
import {validateEmail, validatePassword} from '../../domain/validators';

export interface LoginFormValues {
	email: string;
	password: string;
	remember: boolean;
}

export const Login: FC = () => {

	const authService = AuthService.getInstance();
	const navigate = useNavigate();

	const [form] = Form.useForm();
	const [error, setError] = useState<string | undefined>(undefined);
	const [loading, setLoading] = useState(false);

	const onSubmit = async (values: LoginFormValues) => {
		setLoading(true);

		try {
			await authService.loginUser(values.email, values.password);
			navigate('/');
		} catch (error: any) {
			if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
				form.setFields([
					{name: 'email', errors: ['']},
					{name: 'password', errors: ['Your email or password is incorrect.']}
				]);
			} else if (error.code === 'auth/too-many-requests') {
				form.setFields([
					{name: 'email', errors: ['Access to this account has been temporarily disabled due to many failed login attempts.']}
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
		<Page tab="login">
			<Row align="middle" justify="center" style={{width: '100%'}}>
				<Box title="Sign In" error={error}>
					<Form
						form={form}
						layout="vertical"
						initialValues={{
							remember: true
						}}
						onFinish={onSubmit}
					>
						<Form.Item
							label={<Typography.Text>Email</Typography.Text>}
							name="email"
							tooltip="Enter your email address used during registration"
							rules={validateEmail()}
						>
							<Input placeholder="input email"/>
						</Form.Item>
						<Form.Item
							label={<Typography.Text>Password</Typography.Text>}
							name="password"
							tooltip="Enter your password set during registration"
							rules={validatePassword(true)}
						>
							<Input.Password placeholder="input password"/>
						</Form.Item>
						<Form.Item
							name="remember"
							valuePropName="checked"
						>
							<Checkbox defaultChecked={true}>Remember me</Checkbox>
						</Form.Item>
						<Row justify="space-between">
							<Form.Item>
								<Button type="default" onClick={() => navigate(-1)}>Cancel</Button>
							</Form.Item>
							<Form.Item>
								<Button type="primary" loading={loading} htmlType="submit">Submit</Button>
							</Form.Item>
						</Row>
					</Form>
					<div style={{textAlign: 'center', margin: '-10px'}}>
						<Button type="text" onClick={() => navigate('/remind-password')}>Forgot password? Click here</Button>
					</div>
					<Divider/>
					<Row align="middle" justify="space-between">
						<Typography.Text>Do not have an account?</Typography.Text>
						<Button type="default" onClick={() => navigate('/register')}>Sign Up</Button>
					</Row>
				</Box>
			</Row>
		</Page>
	);
};
