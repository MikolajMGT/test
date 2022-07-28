///
/// RoomAccesses List
///

export const roles: number[] = [
	100,
	200
];

///
/// Role to String
///

export const roleToString = (role: number) => {
	switch (role) {
		case 100: {
			return 'User';
		}
		case 200: {
			return 'Admin';
		}
		default: {
			return 'UNKNOWN';
		}
	}
};

///
/// Role String List Type
///

export type RoleName = ReturnType<typeof roleToString>

///
/// Role string to Role
///

export const roleStringToEnum = (access: RoleName) => {
	switch (access.toUpperCase()) {
		case 'USER': {
			return 100;
		}
		case 'ADMIN': {
			return 200;
		}
		case 'UNKNOWN': {
			return 0;
		}
		default: {
			return 0;
		}
	}
};
