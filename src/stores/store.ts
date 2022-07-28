import {AnyAction, combineReducers, configureStore} from '@reduxjs/toolkit';
import {createEpicMiddleware, Epic} from 'redux-observable';
import {enableBatching} from 'redux-batched-actions';
import {userSlice} from './slices/user';

const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, RootState>();

export const reducer = enableBatching(combineReducers({
	user: userSlice.reducer,
}));

export const store = configureStore({
	reducer,
	middleware:
		(getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware)
});

// epicMiddleware.run(rootEpic);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducer>;
export type AppEpic = Epic<AnyAction, AnyAction, RootState>;
