import {notification} from 'antd';

export enum Notification {
	SUCCESS = 'success',
	INFO = 'info',
	ERROR = 'error',
	WARNING = 'warning'
}

export const notify = (type: Notification, message = '', description = '') => {
	notification[type]({
		message: message,
		description: description,
		duration: 5
	});
};
