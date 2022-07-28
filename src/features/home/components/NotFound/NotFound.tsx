import React, {FC} from 'react';
import {Clouds} from '../Clouds/Clouds';
import {Page} from '../../../../components/Page/Page';
import {useNavigate} from 'react-router-dom';

export const NotFound: FC = () => {
	const navigate = useNavigate();

	return (
		<Page>
			<Clouds
				topText="Page Not Found"
				bottomText="It seems that page you are looking for doesn't exist. Please check your url again or go back to the home page."
				buttonAction={() => navigate('/')}
				buttonText="Home Page"
			/>
		</Page>
	);
};
