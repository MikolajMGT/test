import React, {FC} from 'react';
import logoIcon from '../../assets/logo-icon.png';
import {LogoS} from './LogoS';
import {useNavigate} from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';

export interface LogoProps extends React.ComponentPropsWithoutRef<'div'> {
	iconOnly?: boolean;
}

export const Logo: FC<LogoProps> = (props) => {
	const {iconOnly} = props;
	const navigate = useNavigate();

	const onClickHandler = () => {
		navigate('/');
		scroll.scrollToTop();
	};

	return <>
		<LogoS onClick={onClickHandler} {...props}>
			<img src={logoIcon} width="32px" alt="logo"/>
			{!iconOnly && <h1>Transcoder</h1>}
		</LogoS>
	</>;
};
