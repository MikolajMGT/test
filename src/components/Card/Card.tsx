import React, {FC} from 'react';
import {Card as AntCard, CardProps as AntCardProps} from 'antd';
import Meta from 'antd/es/card/Meta';

export interface CardProps extends AntCardProps {
	image?: string;
	header?: string;
	description?: string;
}

export const Card: FC<CardProps> = (props) => {
	const {image, header, description, children} = props;

	return (
		<AntCard cover={
			<img
				src={image}
				alt="image"
				width="300px"
				height="300px"
			/>
		} {...props}>
			<Meta title={header} description={description}/>
			{children}
		</AntCard>
	);
};
