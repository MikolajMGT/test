import {localEnv} from './env-local';
import {prodEnv} from './env-prod';

export interface EnvVars {
	pageUrl: string,
	apiArrangerUrl: string,
	firebaseConfig: {
		apiKey: string,
		authDomain: string,
		projectId: string,
		storageBucket: string,
		messagingSenderId: string,
		appId: string,
	},
}

const config = (() => {

	switch (process.env.REACT_APP_ENV) {
		case 'local': {
			return localEnv;
		}
		case 'prod': {
			return prodEnv;
		}
		default: {
			return localEnv;
		}
	}

})();

export const currentEnv = process.env.REACT_APP_ENV;

export enum Environment {
	Local = 'local',
	Prod = 'production',
}

export const envVars: EnvVars = {
	...config
};
