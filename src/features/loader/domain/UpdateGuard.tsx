import React, {FC, useEffect, useState} from 'react';
import {Modal} from 'antd';
import {currentEnv, Environment} from '../../../config/envs/env';
import * as serviceWorker from '../../../utils/srvWorker';

export const UpdateGuard: FC = () => {
	const [action, setAction] = useState<(() => void) | undefined>(undefined);
	const [isModalVisible, setIsModalVisible] = useState(false);

	useEffect(() => {
		registerServiceWorker();
	}, []);

	useEffect(() => {
		if (action) {
			showModal();
		}
	}, [action]);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = async () => {
		setIsModalVisible(false);
		action && action();
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const registerServiceWorker = () => {
		if (currentEnv !== Environment.Local) {
			// If you want your app to work offline and load faster, you can change
			// unregister() to register() below. Note this comes with some pitfalls.
			// Learn more about service workers: https://bit.ly/CRA-PWA
			serviceWorker.register({
				onInit: (registration: ServiceWorkerRegistration) => {
					console.log('Update worker has been registered');
					updateWorkerAndReload(registration);
					setInterval(() => {
						registration.update().catch(reason => {
							console.error(reason);
						});
						updateWorkerAndReload(registration);
					}, 60 * 1000);
				},
				onUpdate: (registration: ServiceWorkerRegistration) => {
					console.log('Updating transcoder?');
					updateWorkerAndReload(registration);
				}
			});

			const initDate = Date.now();
			let canOpenUpdateModal = true;
			const updateWorkerAndReload = (registration: ServiceWorkerRegistration) => {
				if (registration.waiting) {
					const applyUpdateNow = () => {
						console.log('applying update!');
						registration.waiting!!.postMessage({type: 'SKIP_WAITING'});
						window.location.reload();
					};

					const sinceInit = Date.now() - initDate;
					//a new update is available
					if (sinceInit >= 10000) {
						if (!canOpenUpdateModal) {
							return;
						}

						canOpenUpdateModal = false;
						console.log('this is the time for update!');
						setAction(() => {
							return () => applyUpdateNow();
						});
					} else {
						//not long has passed since init, force reload
						applyUpdateNow();
					}
				}
			};
		}
	};

	return <>
		<Modal title="Update Available" centered visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
			<p>New version of Transcoder is available. Do you want to update now?</p>
		</Modal>
	</>;
};
