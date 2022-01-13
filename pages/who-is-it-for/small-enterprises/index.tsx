import { LayoutBase } from '@components';
import {
	FeatureSection,
	HeroUnitSection,
	ProblemSection,
	SolutionSection,
} from '@components/who-is-it-for';

const SmallEnterPrises = () => {
	return (
		<LayoutBase pageTitle='Small Enterprises' key='small-enterprises'>
			<div className='flex flex-col'>
				<HeroUnitSection
					label='Small Enterprises'
					title='GROWN UP YOUR COMPANY'
					description='For your startup, by our startup'
				/>
				<ProblemSection
					title='Tungtung empathize your problems'
					description='To meet the needs of the startup business, you should do the following things:'
				/>
				<SolutionSection />
				<FeatureSection />
			</div>
		</LayoutBase>
	);
};

export default SmallEnterPrises;
