import {Rule} from 'antd/lib/form';

export const validateEmail = () => {
	return [
		{
			max: 64,
			message: 'Email should have max. 64 characters'
		},
		{
			type: 'email',
			message: 'Please input valid email'
		},
		{
			required: true,
			message: 'This field is required'
		}
	] as Rule[];
};

export const validatePassword = (required?: boolean) => {
	const result = [
		{
			min: 6,
			message: 'Password should have min. 6 characters'
		},
		{
			max: 64,
			message: 'Password should have max. 64 characters'
		}
	] as Rule[];

	if (required) {
		result.push({
			required: true,
			message: 'This field is required'
		});
	}

	return result;
};

export const validateFirstname = () => {
	return [
		{
			required: true,
			message: 'This field is required'
		},
		{
			max: 32,
			message: 'Firstname should have max. 32 characters'
		}
	] as Rule[];
};

export const validateLastname = () => {
	return [
		{
			required: true,
			message: 'This field is required'
		},
		{
			max: 32,
			message: 'Lastname should have max. 32 characters'
		}
	] as Rule[];
};

export const validateCompany = () => {
	return [
		{
			max: 32,
			message: 'Company should have max. 32 characters'
		}
	] as Rule[];
};
