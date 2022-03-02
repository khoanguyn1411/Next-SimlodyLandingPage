import { LayoutBase } from '@components';
import { AboutUsContainer } from '@containers';

const AboutUsPage = () => {
	return (
		<LayoutBase
			key='About'
			pageKey='About'
			head={{
				pageTitle: 'About Us',
				pageCoverImageRectangle: '/images/site-covers/about-us.jpg'
			}}
		>
			<AboutUsContainer />
		</LayoutBase>
	);
};

export default AboutUsPage;
