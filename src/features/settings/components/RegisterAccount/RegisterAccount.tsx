import React, {FC, useState} from 'react';
import {Page} from '../../../../components/Page/Page';
import {Button, Form, Input, Row, Typography} from 'antd';
import {Box} from '../../../../components/Box/Box';
import {useNavigate} from 'react-router-dom';
import {Notification, notify} from '../../../../utils/notify';
import {validateCompany, validateEmail, validateFirstname, validateLastname} from '../../../auth/domain/validators';
import {callCreateUser} from '../../api/users_requests';

export interface RegisterAccountFormValues {
	email: string;
	firstname: string;
	lastname: string;
	password?: string;
	company?: string;
}

export const RegisterAccount: FC = () => {
	const navigate = useNavigate();

	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);

	const onSubmit = async (values: RegisterAccountFormValues) => {
		setLoading(true);

		try {
			await callCreateUser(values.email, values.firstname, values.lastname, values.password, values.company);
			navigate('/admin-tools');
			notify(Notification.SUCCESS, 'Operation Completed', 'Account has been registered successfully');
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
							tooltip="Enter email for this account"
							rules={validateEmail()}
						>
							<Input placeholder="input email"/>
						</Form.Item>
						<Form.Item
							label={<Typography.Text>Firstname</Typography.Text>}
							name="firstname"
							tooltip="Enter firstname for this account"
							rules={validateFirstname()}
						>
							<Input placeholder="input firstname"/>
						</Form.Item>
						<Form.Item
							label={<Typography.Text>Lastname</Typography.Text>}
							name="lastname"
							tooltip="Enter lastname for this account"
							rules={validateLastname()}
						>
							<Input placeholder="input lastname"/>
						</Form.Item>
						<Form.Item
							label={<Typography.Text>Company</Typography.Text>}
							name="company"
							tooltip="Enter company for this account. This field is optional."
							rules={validateCompany()}
						>
							<Input placeholder="input company"/>
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
