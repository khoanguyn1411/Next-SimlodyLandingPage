import { LayoutBase } from '@components';
import { ContactContainer } from '@containers';

const ContactUsPage = () => {
	return (
		<LayoutBase key='Contact' pageKey='Contact' pageTitle='Contact'>
			<ContactContainer />
		</LayoutBase>
	);
};

export default ContactUsPage;
