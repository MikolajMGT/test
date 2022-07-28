import React from 'react';
import './index.less';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from './routes/routes';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './stores/store';
import {GlobalStyle} from './utils/global';
import {DataLoaderGuard} from './features/loader/domain/DataLoaderGuard';
import {UpdateGuard} from './features/loader/domain/UpdateGuard';

if (window.location.href.includes('www.')) {
	const newLocation = window.location.href.replace('www.', '');
	window.location.replace(newLocation);
}

if (window.location.protocol !== 'https:' && !window.location.href.includes('localhost')) {
	window.location.replace(`https:${window.location.href.substring(window.location.protocol.length)}`);
}

ReactDOM.render(
	<React.StrictMode>
		<meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
		<BrowserRouter>
			<Provider store={store}>
				<GlobalStyle/>
				<DataLoaderGuard>
					<Routes/>
					<UpdateGuard/>
				</DataLoaderGuard>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
