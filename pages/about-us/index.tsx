import { LayoutBase } from '@components';
import { AboutUsContainer } from '@containers';

const AboutUsPage = () => {
	return (
		<LayoutBase key='About' pageKey='About' pageTitle='About us'>
			<AboutUsContainer />
		</LayoutBase>
	);
};

export default AboutUsPage;
