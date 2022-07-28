import {FC, useEffect} from 'react';
import {Navigate, useRoutes} from 'react-router';
import {NotFound} from '../features/home/components/NotFound/NotFound';
import {Home} from '../features/home/components/Home/Home';
import {Login} from '../features/auth/components/Login/Login';
import {ResetPassword} from '../features/auth/components/ResetPassword/ResetPassword';
import {RemindPassword} from '../features/auth/components/RemindPassword/RemindPassword';
import {AdminTools} from '../features/settings/components/AdminTools/AdminTools';
import {useLocation, useNavigate} from 'react-router-dom';
import {useAppSelector} from '../stores/hooks';
import {selectUser} from '../stores/slices/user';
import {RegisterAccount} from '../features/settings/components/RegisterAccount/RegisterAccount';
import {EditAccount} from '../features/settings/components/EditAccount/EditAccount';
import {Settings} from '../features/settings/components/Settings/Settings';
import {SessionExpired} from '../features/auth/components/SessionExpired/SessionExpired';
import preval from 'preval.macro';
import {GREY_3, PRIMARY} from '../utils/colors';
import {ErrorPage} from '../features/settings/components/ErrorPage/ErrorPage';
import {RegisterFirebase} from '../features/auth/components/Register/Firebase/RegisterFirebase';
import {RegisterUser} from '../features/auth/components/Register/User/RegisterUser';
import {Api} from '../features/home/components/Api/Api';

const PublicRoutes = ['/', '/login', '/register', '/register-step-1', '/register-step-2', '/remind-password', '/reset-password', '/error', '/session-expired', '/remind-password', '/reset-password'];
const RestrictedRoutes = ['/admin-tools', '/register-account', 'create-base-preset'];
const UserExcludedRoutes = ['/login', '/register', '/remind-password', '/reset-password'];

export const Routes: FC = () => {
	const user = useAppSelector(selectUser);

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const dateTimeStamp: string = preval`module.exports = new Date().toLocaleString();`;
		console.log(`%c${process.env.REACT_APP_NAME} ${process.env.REACT_APP_VERSION} ${dateTimeStamp} `,
			`color: ${PRIMARY}; font-weight: 600; background: ${GREY_3}; padding: 2px; border: 1px solid ${PRIMARY}`);
	}, []);

	useEffect(() => {
		if (!user.logged && !PublicRoutes.includes(location.pathname)) {
			navigate('/login');
		}
		if (user.logged && UserExcludedRoutes.includes(location.pathname)) {
			navigate('/');
		}
		if (user.model && user.model.role < 200 && RestrictedRoutes.includes(location.pathname)) {
			navigate('/not-found');
		}
	}, [user]);

	return useRoutes([
		{path: '/login', element: <Login/>},
		{path: '/register', element: <RegisterFirebase/>},
		{path: '/register-step-1', element: <RegisterFirebase/>},
		{path: '/register-step-2', element: <RegisterUser/>},
		{path: '/remind-password', element: <RemindPassword/>},
		{path: '/reset-password', element: <ResetPassword/>},
		{path: '/session-expired', element: <SessionExpired/>},
		{path: '/settings', element: <Settings/>},

		{path: '/admin-tools', element: <AdminTools/>},
		{path: '/admin-tools/edit-account', element: <EditAccount/>},
		{path: '/admin-tools/register-account', element: <RegisterAccount/>},

		{path: '/api', element: <Api/>},
		{path: '/error', element: <ErrorPage/>},
		{path: '/not-found', element: <NotFound/>},
		{path: '/', element: <Home/>},
		{path: '*', element: <Navigate to="/not-found"/>}
	]);
};
