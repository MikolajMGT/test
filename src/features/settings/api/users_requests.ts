import {envVars} from '../../../config/envs/env';
import {CreateRequest, DeleteRequest, ListRequest, UpdateRequest} from '../../../autogen/gRPC/arranger/users/service_users_pb';
import {UsersServiceClient} from '../../../autogen/gRPC/arranger/users/Service_usersServiceClientPb';
import {AuthService} from '../../auth/api/service';
import {
	CompanyVal,
	EmailVal,
	FirstnameVal,
	LastnameVal,
	PasswordVal,
	RoleVal,
	TimezoneVal
} from '../../../autogen/gRPC/arranger/users/models_pb';

const service = new UsersServiceClient(envVars.apiArrangerUrl);

const prepareHeaders = async () => {
	const token = await AuthService.getInstance().currentToken();
	return {'Authorization': 'Bearer ' + token.token};
};

export const callListUsers = async (offset?: number, limit?: number) => {
	const request = new ListRequest();

	limit && request.setLimit(limit);
	offset && request.setOffset(offset);

	const response = await service.list(request, await prepareHeaders());
	return response.toObject();
};

export const callCreateUser = async (email: string, firstname: string, lastname: string, password?: string, company?: string) => {
	const request = new CreateRequest();

	request.setEmail(email);
	request.setFirstname(firstname);
	request.setLastname(lastname);
	password && request.setPassword(password);
	company && request.setCompany(company);

	const response = await service.create(request, await prepareHeaders());
	return response.toObject();
};

export interface UpdateUserSrvArgs {
	email?: string,
	firstname?: string,
	lastname?: string,
	company?: string,
	role?: number,
	password?: string,
	timezone?: string,
}

export const callUpdateUser = async (id: string, values: UpdateUserSrvArgs) => {
	const {email, firstname, lastname, company, role, password, timezone} = values;
	const request = new UpdateRequest();

	request.setId(id);
	email && request.setEmail(new EmailVal().setValue(email));
	firstname && request.setFirstname(new FirstnameVal().setValue(firstname));
	lastname && request.setLastname(new LastnameVal().setValue(lastname));
	company && request.setCompany(new CompanyVal().setValue(company));
	role && request.setRole(new RoleVal().setValue(role));
	password && request.setPassword(new PasswordVal().setValue(password));
	timezone && request.setTimezone(new TimezoneVal().setValue(timezone));

	const response = await service.update(request, await prepareHeaders());
	return response.toObject();
};

export const callDeleteUser = async (id: string) => {
	const request = new DeleteRequest();

	request.setId(id);

	const response = await service.delete(request, await prepareHeaders());
	return response.toObject();
};
