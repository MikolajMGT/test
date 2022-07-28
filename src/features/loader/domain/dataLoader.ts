import {AuthService} from '../../auth/api/service';
import {store} from '../../../stores/store';
import {userActions, UserToken} from '../../../stores/slices/user';
import {callGetUser} from '../../auth/api/requests';
import {appNavigate} from './DataLoaderGuard';

const NoUserAccountErrCode = 7;

export class DataLoader {
	static async init() {
		const authService = AuthService.getInstance();

		await authService.init();
		const token = await authService.refreshToken();

		if (token) {
			store.dispatch(userActions.setToken({...token as UserToken}));
			await authService.authStateChangeDetection().start();
		}

		const currentUser = authService.currentUser();
		if (!currentUser) return;
		try {
			const userObj = await callGetUser(currentUser.uid);
			userObj?.user && store.dispatch(userActions.setModel(userObj.user));
		} catch (e: any) {
			console.log(e.code);
			if (e.code === NoUserAccountErrCode) {
				appNavigate('/register-step-2', {
					state: {
						hidePage: true
					}
				});
				return;
			} else {
				throw(e);
			}
		}
	}
}
