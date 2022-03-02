import { LayoutBase } from "@components"
import { PolicyContainer } from "@containers"

const PrivacyPolicy = ()=>{
    return(
        <LayoutBase
            pageKey="Policy"
            head={{
				pageTitle: 'Privacy Policy',
				pageCoverImageRectangle: '/images/site-covers/privacy-policy.jpg'
			}}
        >
            <PolicyContainer/>
        </LayoutBase>
    )
}

export default PrivacyPolicy