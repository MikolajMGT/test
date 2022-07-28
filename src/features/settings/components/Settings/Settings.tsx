import React, {FC, useState} from 'react';
import {Page} from '../../../../components/Page/Page';
import {Button, Form, Input, Row, Typography} from 'antd';
import {Box} from '../../../../components/Box/Box';
import {useNavigate} from 'react-router-dom';
import {Notification, notify} from '../../../../utils/notify';
import {validateCompany, validateEmail, validateFirstname, validateLastname, validatePassword} from '../../../auth/domain/validators';
import {useAppSelector} from '../../../../stores/hooks';
import {selectUser, userActions} from '../../../../stores/slices/user';
import {store} from '../../../../stores/store';
import {convertUpdateSettingsDataToServiceArgs} from '../../domain/serviceArgs';
import {callUpdateUser} from '../../api/users_requests';

export interface SettingsFormValues {
	email?: string;
	firstname?: string;
	lastname?: string;
	company?: string;
	password?: string;
}

let originalSettingsFormValues: SettingsFormValues;

export const Settings: FC = () => {
	const navigate = useNavigate();
	const user = useAppSelector(selectUser);

	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);

	const initialValues = {
		email: user.model?.email,
		firstname: user.model?.firstname,
		lastname: user.model?.lastname,
		company: user.model?.company,
		password: ''
	};
	originalSettingsFormValues = {...initialValues};

	const onSubmit = async (values: SettingsFormValues) => {
		setLoading(true);
		const serviceArgs = convertUpdateSettingsDataToServiceArgs(originalSettingsFormValues, values);
		const isFormChanged = Object.keys(serviceArgs).length > 0;

		if (user.model && isFormChanged) {
			try {
				const response = await callUpdateUser(user.model.id, serviceArgs);
				response?.user && store.dispatch(userActions.setModel(response.user));
				onSuccess();
				if (serviceArgs.email || serviceArgs.password) {
					store.dispatch(userActions.clear());
				}
			} catch (error: any) {
				setError(error.message);
				console.error(error);
			} finally {
				setLoading(false);
			}
		} else {
			onSuccess();
		}
	};

	const onSuccess = () => {
		navigate('/');
		notify(Notification.SUCCESS, 'Operation Completed', 'Settings has been applied successfully');
		setLoading(false);
	};

	if (!user.model) {
		return null;
	}

	return (
		<Page tab="none">
			<Row align="middle" justify="center" style={{width: '100%'}}>
				<Box title="Settings" error={error}>
					<Form
						form={form}
						layout="vertical"
						autoComplete="off"
						onFinish={onSubmit}
						initialValues={initialValues}
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
						<Form.Item
							label={<Typography.Text>Password</Typography.Text>}
							name="password"
							tooltip="Enter a new password to this account."
							rules={validatePassword()}
						>
							<Input.Password autoComplete="off" placeholder="new password"/>
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
