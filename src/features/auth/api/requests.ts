import {envVars} from '../../../config/envs/env';
import {AuthService} from './service';
import {
	GetRequest,
	RegisterRequest,
	RemindPasswordRequest,
	ResetPasswordRequest
} from '../../../autogen/gRPC/arranger/users/service_users_pb';
import {UsersServiceClient} from '../../../autogen/gRPC/arranger/users/Service_usersServiceClientPb';
import {Type} from '../../../autogen/gRPC/arranger/users/enums_pb';

const service = new UsersServiceClient(envVars.apiArrangerUrl);

const prepareHeaders = async () => {
	const token = await AuthService.getInstance().currentToken();
	return {'Authorization': 'Bearer ' + token.token};
};

export const callGetUser = async (uid: string) => {

	const request = new GetRequest();
	request.setAuthId(uid);

	const response = await service.get(request, await prepareHeaders());
	return response.toObject();
};

export const callRegisterUser = async (firstname: string, lastname: string, company?: string) => {
	const request = new RegisterRequest();

	request.setFirstname(firstname);
	request.setLastname(lastname);
	company && request.setCompany(company);
	request.setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
	request.setType(Type.TYPE_PASSWORD);

	const response = await service.register(request, await prepareHeaders());
	return response.toObject();
};

export const callRemindPassword = async (email: string) => {
	const request = new RemindPasswordRequest();

	request.setEmail(email);
	request.setReturnUrl(`${envVars.pageUrl}/reset-password`);

	const response = await service.remindPassword(request, null);
	return response.toObject();
};

export const callResetPassword = async (token: string, password: string) => {
	const request = new ResetPasswordRequest();

	request.setToken(token);
	request.setPassword(password);

	const response = await service.resetPassword(request, null);
	return response.toObject();
};
