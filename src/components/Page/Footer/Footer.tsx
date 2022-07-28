import React, {FC} from 'react';
import {Logo} from '../../Logo/Logo';
import {FooterS, FooterS_Container, FooterS_LeftPart} from './FooterS';
import {animateScroll as scroll} from 'react-scroll/modules';
import {useNavigate} from 'react-router-dom';
import {tab} from '../Page';
import {Menu} from 'antd';

export interface FooterProps extends React.ComponentPropsWithoutRef<'div'> {
	currentTab?: tab;
	setCurrentTab?: (arg: tab) => void;
}

export const Footer: FC<FooterProps> = (props) => {
	const {setCurrentTab} = props;
	const navigate = useNavigate();

	const onClickHandler = () => {
		navigate('/');
		setCurrentTab && setCurrentTab('home');
		scroll.scrollToTop();
	};

	return <>
		<FooterS>
			<FooterS_Container>
				<FooterS_LeftPart>
					<Logo iconOnly/>
					<p>© 2022 Evemeta LLC. All rights reserved.</p>
				</FooterS_LeftPart>
				<Menu
					mode="horizontal"
					disabledOverflow={true}
					selectable={false}
					activeKey={'none'}
				>
					<Menu.Item key="home" onClick={onClickHandler}>Home</Menu.Item>
					<Menu.Item key="about" onClick={() => {
						navigate('/', {
							state: {
								scrolled: true
							}
						});
						setCurrentTab && setCurrentTab('about');
						scroll.scrollToBottom();
					}}>
						About
					</Menu.Item>
				</Menu>
			</FooterS_Container>
		</FooterS>
	</>;
};
