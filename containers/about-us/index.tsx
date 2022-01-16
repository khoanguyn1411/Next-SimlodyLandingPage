import React, { memo } from 'react';
import {
	CoreValueSection,
	HeroUnitSection,
	OurJourneySection,
	OurMissionSection,
	OurTeam,
	ZeroToHeroSection,
} from './sections';

export const AboutUsContainer = memo(() => {
	return (
		<div className='flex flex-col gap-y-16'>
			<HeroUnitSection />
			<OurTeam />
			<OurJourneySection />
			<CoreValueSection />
			<OurMissionSection />
			<ZeroToHeroSection />
		</div>
	);
});

AboutUsContainer.displayName = 'AboutUsContainer';
