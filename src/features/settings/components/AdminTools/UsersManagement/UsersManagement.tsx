import React, {FC, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {callDeleteUser, callListUsers} from '../../../api/users_requests';
import {Avatar, Button, Modal, Space} from 'antd';
import {User} from '../../../../../autogen/gRPC/arranger/users/models_pb';
import {InfiniteList, ListItemProps} from '../../../../../components/InfiniteList/InfiniteList';
import {Notification, notify} from '../../../../../utils/notify';

export const UsersManagement: FC = () => {
	const navigate = useNavigate();

	const ItemsToLoad = 10;
	const [loadedUsers, setLoadedUsers] = useState<number>(0);
	const [totalUsers, setTotalUsers] = useState<number>(0);

	const [isModalVisible, setIsModalVisible] = useState(false);
	const [currentUserId, setCurrentUserId] = useState<string>('');
	const [idToRemove, setIdToRemove] = useState('');

	const loadUsers = async () => {
		const users = await callListUsers(loadedUsers, loadedUsers + ItemsToLoad);
		setLoadedUsers(loadedUsers + users.usersList.length);
		setTotalUsers(users.total);
		return users.usersList.map((user) => {
			const itemProps: ListItemProps = {
				id: user.id,
				image: <Avatar size="large">{user.firstname[0]}{user.lastname[0]}</Avatar>,
				title: prepareTitle(user),
				description: user.email,
				actions: [
					<a key="list-users-edit" onClick={() => {
						navigate('/admin-tools/edit-account', {
							state: {user: user}
						});
					}}>edit</a>,
					<a key="list-users-delete" onClick={() => {
						showModal(user.id);
					}}>delete</a>
				]
			};
			return itemProps;
		});
	};

	const prepareTitle = (user: User.AsObject) => {
		let title = `${user.firstname} ${user.lastname}`;
		if (user.company !== '') {
			title += `, ${user.company}`;
		}

		return title;
	};

	const showModal = (id: string) => {
		setCurrentUserId(id);
		setIsModalVisible(true);
	};

	const handleOk = async () => {
		setIsModalVisible(false);
		try {
			await callDeleteUser(currentUserId);
			setIdToRemove(currentUserId);
			setTotalUsers(totalUsers - 1);
			notify(Notification.SUCCESS, 'Operation Completed', 'User has been deleted successfully');
		} catch (e) {
			console.log(e);
			notify(Notification.ERROR, 'Operation Failed', 'Failed to delete user, please try again');
		}
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<>
			<Space style={{width: '70vw'}} direction="vertical" size={22}>
				<Button type="primary" onClick={() => {
					navigate('/admin-tools/register-account');
				}}>Register Account</Button>
				<InfiniteList height="65vh" header="Existing Users" total={totalUsers} loader={loadUsers} idToRemove={idToRemove}/>
			</Space>
			<Modal title="Warning" centered visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
				<p>Are you sure you want to remove this user?</p>
			</Modal>
		</>
	);
};
