import React, {FC} from 'react';
import {ContentS, FooterS_Container} from './ContentS';

export interface ContentProps extends React.ComponentPropsWithoutRef<'div'> {
}

export const Content: FC<ContentProps> = (props) => {
	const {children} = props;

	return <>
		<ContentS {...props}>
			<FooterS_Container>
				{children}
			</FooterS_Container>
		</ContentS>
	</>;
};
