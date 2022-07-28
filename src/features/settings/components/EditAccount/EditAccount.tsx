import React, {FC, useEffect, useState} from 'react';
import {Page} from '../../../../components/Page/Page';
import {Button, Form, Input, Row, Select, Typography} from 'antd';
import {Box} from '../../../../components/Box/Box';
import {useLocation, useNavigate} from 'react-router-dom';
import {Notification, notify} from '../../../../utils/notify';
import {validateCompany, validateFirstname, validateLastname} from '../../../auth/domain/validators';
import * as CheckType from 'check-types';
import {User} from '../../../../autogen/gRPC/arranger/users/models_pb';
import {roleToString} from '../../domain/roleConverter';
import {convertEditAccountDataToServiceArgs} from '../../domain/serviceArgs';
import {callUpdateUser} from '../../api/users_requests';

const {Option} = Select;

export interface EditAccountFormValues {
	email?: string,
	firstname?: string
	lastname?: string
	company?: string
	role?: string
}

let originalEditAccountFormValues: EditAccountFormValues;

export const EditAccount: FC = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState<User.AsObject | undefined>(undefined);
	const [error, setError] = useState<string | undefined>(undefined);

	const initialValues = {
		email: user?.email,
		firstname: user?.firstname,
		lastname: user?.lastname,
		company: user?.company,
		role: user?.role ? roleToString(user?.role) : ''
	};
	originalEditAccountFormValues = {...initialValues};

	useEffect(() => {
		if (CheckType.not.assigned(location.state && (location.state as any).user)) {
			navigate('/');
		} else {
			const state = {...(location.state as any)};
			setUser(state.user);
			delete location.state;
		}
	}, []);

	if (!user) {
		return null;
	}

	const onSubmit = async (values: EditAccountFormValues) => {
		setLoading(true);
		const serviceArgs = convertEditAccountDataToServiceArgs(originalEditAccountFormValues, values);
		const isFormChanged = Object.keys(serviceArgs).length > 0;

		if (user && isFormChanged) {
			try {
				await callUpdateUser(user.id, serviceArgs);
				onSuccess();
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
		setLoading(false);
		navigate('/admin-tools');
		notify(Notification.SUCCESS, 'Operation Completed', 'Account has been updated successfully');
	};

	return (
		<Page tab="none">
			<Row align="middle" justify="center" style={{width: '100%'}}>
				<Box title="Edit Account" error={error}>
					<Form
						form={form}
						layout="vertical"
						autoComplete="Off"
						onFinish={onSubmit}
						initialValues={initialValues}
					>
						<Form.Item
							label={<Typography.Text>Email</Typography.Text>}
							name="email"
							initialValue={user?.email}
						>
							<Input value={user?.email} disabled/>
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
							label={<Typography.Text>Role</Typography.Text>}
							name="role"
							tooltip="Select role for this account."
						>
							<Select>
								<Option value="user">User</Option>
								<Option value="admin">Admin</Option>
							</Select>
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
