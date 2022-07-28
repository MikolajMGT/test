import React, {FC} from 'react';
import {NavbarS, NavbarS_Container, NavbarS_UserWrapper} from './NavbarS';
import {Logo} from '../../Logo/Logo';
import {animateScroll as scroll} from 'react-scroll';
import {useNavigate} from 'react-router-dom';
import {tab} from '../Page';
import {useAppSelector} from '../../../stores/hooks';
import {selectUser} from '../../../stores/slices/user';
import {Avatar, Dropdown, Menu} from 'antd';
import {AuthService} from '../../../features/auth/api/service';

export interface NavbarProps extends React.ComponentPropsWithoutRef<'div'> {
	scrollPosition?: number;
	currentTab?: tab;
	setCurrentTab?: (arg: tab) => void;
}

export const Navbar: FC<NavbarProps> = (props) => {
	const {currentTab, scrollPosition, setCurrentTab} = props;
	const user = useAppSelector(selectUser);
	const authService = AuthService.getInstance();
	const navigate = useNavigate();

	const menu = (
		<Menu
			mode="inline"
		>
			{user.model?.role === 200 && <Menu.Item key="admin-tools" onClick={() => navigate('/admin-tools')}>Admin Tools</Menu.Item>}
			<Menu.Item key="settings" onClick={() => navigate('/settings')}>Settings</Menu.Item>
			<Menu.Item key="log-out" onClick={() => authService.logout()}>Log Out</Menu.Item>
		</Menu>
	);

	const onClickHandler = () => {
		setCurrentTab && setCurrentTab('home');
		navigate('/');
		scroll.scrollToTop();
	};

	return <>
		<NavbarS $scrollPosition={scrollPosition}>
			<NavbarS_Container>
				{/*<Logo/>*/}
				<Menu
					mode="horizontal"
					disabledOverflow={true}
					selectedKeys={[currentTab!]}
				>
					<Menu.Item key="home" onClick={onClickHandler}>Home</Menu.Item>
				</Menu>
			</NavbarS_Container>
		</NavbarS>
	</>;
};
