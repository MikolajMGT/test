import React, {FC, useEffect, useState} from 'react';
import {DataLoader} from './dataLoader';
import {Loading} from '../../home/components/Loading/Loading';
import {Location, NavigateFunction, useLocation, useNavigate} from 'react-router-dom';
import {ErrorPage} from '../../settings/components/ErrorPage/ErrorPage';

export let appNavigate: NavigateFunction;
export let appLocation: Location;

interface DataLoaderGuardProps {
	children?: React.ReactNode;
}

export const DataLoaderGuard: FC<DataLoaderGuardProps> = (props) => {
	const {children} = props;

	const navigate = useNavigate();
	const location = useLocation();
	const [mode, setMode] = useState<'LOADING' | 'LOADED' | 'ABORTED'>('LOADING');

	appNavigate = navigate;
	appLocation = location;

	useEffect(() => {
		(async function () {
			try {
				await DataLoader.init();
				setMode('LOADED');
			} catch (err: any) {
				setMode('ABORTED');
				console.error(err);
				navigate('/error', {
					state: {
						errorMsg: err.message
					}
				});
			}
		})();
	}, []);

	const render = () => {
		switch (mode) {
			case 'LOADING':
				return (
					<Loading/>
				);
			case 'LOADED':
				return (
					<>
						{children}
					</>
				);
			case 'ABORTED':
				return <ErrorPage/>;
		}
	};

	return render();
};
