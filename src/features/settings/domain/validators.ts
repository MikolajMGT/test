import {Rule} from 'antd/lib/form';

export const validateRequired = () => {
	return [
		{
			required: true,
			message: 'This field is required'
		}
	] as Rule[];
};
