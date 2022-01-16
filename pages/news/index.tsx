import { LayoutBase } from '@components';
import { NewsContainer } from '@containers';

const AboutUsPage = () => {
	return (
		<LayoutBase key='News' pageKey='News' pageTitle='News'>
			<NewsContainer />
		</LayoutBase>
	);
};

export default AboutUsPage;
