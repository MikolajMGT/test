import {SettingsFormValues} from '../components/Settings/Settings';
import {diff} from '../../../utils/diff';
import {EditAccountFormValues} from '../components/EditAccount/EditAccount';
import {RoleName, roleStringToEnum} from './roleConverter';
import {UpdateUserSrvArgs} from '../api/users_requests';

export const convertUpdateSettingsDataToServiceArgs = (original: SettingsFormValues, current: SettingsFormValues) => {

	const originalData = {...original};
	const currentData = {...current};

	const difference: Partial<SettingsFormValues> = diff(originalData, currentData);

	let serviceArgs: UpdateUserSrvArgs = {};
	if (Object.keys(difference).length > 0) {
		serviceArgs = {
			email: difference.email,
			firstname: difference.firstname,
			lastname: difference.lastname,
			company: difference.company,
			password: difference.password
		};
	}
	return serviceArgs;
};

export const convertEditAccountDataToServiceArgs = (original: EditAccountFormValues, current: EditAccountFormValues) => {

	const originalData = {...original};
	const currentData = {...current};

	const difference: Partial<EditAccountFormValues> = diff(originalData, currentData);

	let role: number | undefined;
	if (difference.role) {
		role = roleStringToEnum(difference.role as RoleName);
	}

	let serviceArgs: UpdateUserSrvArgs = {};
	if (Object.keys(difference).length > 0) {
		serviceArgs = {
			firstname: difference.firstname,
			lastname: difference.lastname,
			company: difference.company,
			role: role
		};
	}
	return serviceArgs;
};
