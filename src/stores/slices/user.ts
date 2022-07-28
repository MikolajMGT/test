import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {IdTokenResult} from 'firebase/auth';
import {User} from '../../autogen/gRPC/arranger/users/models_pb';

export interface UserToken extends IdTokenResult {
	claims: {
		aud: string
		auth_time: string | undefined,
		email: string
		email_verified: string | object | undefined,
		exp: string | undefined,
		firebase: {
			email: string[]
			sign_in_provider: string
		}
		role?: string
		iat: string | undefined,
		iss: string
		sub: string
		user_id: string
		_user_id: string
		_user_role: string | object | undefined,
	};
}

export interface UserState {
	model?: User.AsObject;
	token?: UserToken;
	logged: boolean;
}

export const initialState: UserState = {logged: false};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<UserToken>) => {
			state.token = action.payload;
		},
		setModel: (state, action: PayloadAction<User.AsObject>) => {
			state.model = action.payload;
			state.logged = true;
		},
		clear: (state) => {
			state.model = undefined;
			state.token = undefined;
			state.logged = false;
		}
	}
});

export const userActions = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
