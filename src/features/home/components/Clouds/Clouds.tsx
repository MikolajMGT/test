import React, {FC} from 'react';
import {CloudsS} from './CloudsS';
import {Button} from 'antd';

export interface CloudsProps {
	topText: string;
	bottomText: string;
	buttonAction?: () => void;
	buttonText?: string;
}

export const Clouds: FC<CloudsProps> = ({topText, bottomText, buttonAction, buttonText}) => {

	return (
		<CloudsS>
			<div id="clouds">
				<div className="cloud x1"/>
				<div className="cloud x1_5"/>
				<div className="cloud x2"/>
				<div className="cloud x3"/>
				<div className="cloud x4"/>
				<div className="cloud x5"/>
			</div>
			<div className="wrapper">
				<div className="topText">{topText}</div>
				<div className="bottomText">{bottomText}</div>
				<Button className="primary" onClick={() => buttonAction && buttonAction()}>{buttonText}</Button>
			</div>
		</CloudsS>
	);
};
