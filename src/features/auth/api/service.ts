import {FirebaseApp, initializeApp} from 'firebase/app';
import {
	Auth,
	browserLocalPersistence,
	connectAuthEmulator,
	createUserWithEmailAndPassword,
	getAuth,
	setPersistence,
	signInWithEmailAndPassword,
	Unsubscribe
} from 'firebase/auth';
import {currentEnv, Environment, envVars} from '../../../config/envs/env';
import {appLocation, appNavigate} from '../../loader/domain/DataLoaderGuard';
import {store} from '../../../stores/store';
import {userActions, UserToken} from '../../../stores/slices/user';
import {callGetUser} from './requests';
import {callUpdateUser} from '../../settings/api/users_requests';

export class AuthService {

	/// properties

	private static instance?: AuthService;
	private readonly firebaseApp: FirebaseApp;
	private readonly auth: Auth;

	private constructor() {
		this.firebaseApp = initializeApp(envVars.firebaseConfig);
		this.auth = getAuth(this.firebaseApp);
	}

	/// public methods

	static getInstance() {
		if (!this.instance) {
			this.instance = new AuthService();
		}
		return this.instance;
	}

	async init() {
		if (currentEnv === Environment.Local) {
			connectAuthEmulator(this.auth, 'https://local.zu.casa');
			console.log('detected local environment, using firebase emulator');
		}
		await setPersistence(this.auth, browserLocalPersistence);
	}

	currentUser() {
		return this.auth.currentUser;
	}

	async loginUser(email: string, password: string) {
		const result = signInWithEmailAndPassword(this.auth, email, password);
		await this.authStateChangeDetection().start();
		return result;
	}

	async registerUser(email: string, password: string) {
		const result = await createUserWithEmailAndPassword(this.auth, email, password);
		await this.authStateChangeDetection().start();
		return result;
	}

	currentToken() {
		if (!this.auth.currentUser) {
			throw new Error('auth user is null');
		}

		return this.auth.currentUser.getIdTokenResult();
	}

	refreshToken() {
		return this.currentUser()?.getIdTokenResult(true);
	}

	authStateChangeDetection() {
		const that = this;
		return {
			unsubFn: undefined as undefined | Unsubscribe,
			start: async function () {
				this.unsubFn = that.auth.onIdTokenChanged(async (user) => {
					if (user) {
						const token = await that.refreshToken();
						token && store.dispatch(userActions.setToken({...token as UserToken}));

						if (appLocation.pathname === '/register-step-2') return;
						const userObj = await callGetUser(user.uid);
						userObj?.user && store.dispatch(userActions.setModel(userObj.user));

						if (userObj && userObj.user?.timezone === '') {
							callUpdateUser(userObj.user.id, {timezone: Intl.DateTimeFormat().resolvedOptions().timeZone}).then();
						}
					}
				});
			},
			stop: async function () {
				await this.unsubFn?.();
			}
		};
	}

	async logout() {
		await this.authStateChangeDetection().stop();
		await this.auth.signOut();
		store.dispatch(userActions.clear());
		appNavigate('/');
	}
}
