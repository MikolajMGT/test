import React, {FC, useEffect, useState} from 'react';
import {PageS} from './PageS';

import {Layout} from 'antd';
import {Navbar} from './Navbar/Navbar';
import {Footer} from './Footer/Footer';
import {Content} from './Content/Content';
import {useLocation} from 'react-router-dom';

export type tab = 'home' | 'about' | 'api' | 'login' | 'get-started' | 'create-job' | 'recent-jobs' | 'manage-files' | 'none'

export interface PageProps {
	tab?: tab;
	hide?: boolean;
	children?: React.ReactNode;
}

export const Page: FC<PageProps> = ({tab, hide, children}) => {
	const location = useLocation();

	const [scroll, setScroll] = useState(window.scrollY);
	const [currentTab, setCurrentTab] = useState<tab>(tab ?? 'home');

	const handleScrolledUp = () => {
		if (window.scrollY === 0) {
			setCurrentTab('home');
		}
	};

	const handleScrolledDown = () => {
		if (Math.ceil(window.scrollY + window.innerHeight) >= document.body.scrollHeight) {
			setCurrentTab('about');
		}
	};

	useEffect(() => {
		if (location.pathname === '/') {
			window.addEventListener('scroll', handleScrolledUp);
			window.addEventListener('scroll', handleScrolledDown);
		}
		return () => {
			window.removeEventListener('scroll', handleScrolledUp);
			window.removeEventListener('scroll', handleScrolledDown);
		};
	}, []);

	const handleScroll = () => {
		setScroll(window.scrollY);
	};

	// set up listener on window to update scroll state on scroll
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return <>
		<PageS hide={hide}>
			<Layout>
				<Navbar scrollPosition={scroll} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
				<Content>
					{children}
				</Content>
				<Footer/>
			</Layout>
		</PageS>
	</>;
};
