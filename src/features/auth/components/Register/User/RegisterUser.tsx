import React, {FC, useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Button, Form, Input, Row, Typography} from 'antd';
import {callRegisterUser} from '../../../api/requests';
import {Notification, notify} from '../../../../../utils/notify';
import {Page} from '../../../../../components/Page/Page';
import {Box} from '../../../../../components/Box/Box';
import {validateCompany, validateFirstname, validateLastname} from '../../../domain/validators';
import {store} from '../../../../../stores/store';
import {userActions} from '../../../../../stores/slices/user';
import * as CheckType from 'check-types';
import {AuthService} from '../../../api/service';

export interface RegisterUserFormValues {
	firstname: string;
	lastname: string;
	company?: string;
}

export const RegisterUser: FC = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const auth = AuthService.getInstance();

	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);
	const [hide, setHide] = useState(false);

	useEffect(() => {
		if (CheckType.assigned(location.state && (location.state as any).hidePage)) {
			const state = {...(location.state as any)};
			console.log(state.hidePage);
			setHide(state.hidePage);
			delete location.state;
		}
	}, []);

	const onSubmit = async (values: RegisterUserFormValues) => {
		setLoading(true);

		try {
			const response = await callRegisterUser(values.firstname, values.lastname, values.company);
			auth.refreshToken();
			navigate('/');
			notify(Notification.SUCCESS, 'Operation Completed', 'Account has been registered successfully');
			if (response.user) {
				store.dispatch(userActions.setModel(response.user));
			}
		} catch (error: any) {
			setError(error.message);
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Page tab="none" hide={hide}>
			<Row align="middle" justify="center" style={{width: '100%'}}>
				<Box title="Register Account" error={error}>
					<Form
						form={form}
						layout="vertical"
						autoComplete="Off"
						onFinish={onSubmit}
					>
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
								<Button disabled type="default" onClick={() => navigate(-1)}>Cancel</Button>
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
