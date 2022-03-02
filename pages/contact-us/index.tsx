import { LayoutBase } from '@components';
import { ContactContainer } from '@containers';

const ContactUsPage = () => {
	return (
		<LayoutBase
			key='Contact'
			pageKey='Contact'
			head={{
        pageTitle: "Contact",
        pageCoverImageRectangle: "/images/site-covers/contact-us.jpg"
      }}
		>
			<ContactContainer />
		</LayoutBase>
	);
};

export default ContactUsPage;
