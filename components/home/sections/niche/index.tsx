import React from 'react';
import { Card } from '@components/home/card';
import {
	BusinessIcon,
	EducationIcon,
	PlatformIcon,
} from '@components/home/icons';

export const NicheSection = React.memo(() => (
	<section className='flex bg-primary-500 pt-16 pb-32'>
		<div className='container mx-auto my-auto flex flex-col'>
			<div className='title flex flex-1 flex-col mb-24'>
				<h4 className='text-3xl font-semibold text-white pb-4 text-center'>
					Our Niche
				</h4>
				<span className='text-center text-xl font-normal text-white'>
					We build product and platform for business to scale-up their ability,
					position
				</span>
			</div>
			<div className='flex flex-1 flex-col xl:gap-28 gap-12 md:flex-row'>
				<Card
					title='SaaS For Business'
					description='We provide plans to transfer your old company to become more dynamic and faster'
					color='green'
					icon={<BusinessIcon />}
					className='bg-green'
					delay='0'
				/>
				<Card
					title='SaaS for Education'
					description='New technology and platform to work more efficiently'
					color='secondary'
					icon={<EducationIcon />}
					className='bg-secondary'
					delay='200'
				/>
				<Card
					title='Data PLatform'
					description='Sold your problems with KPI, OKRs, EOS'
					color='indigo'
					icon={<PlatformIcon />}
					className='bg-indigo'
					delay='400'
				/>
			</div>
		</div>
	</section>
));

NicheSection.displayName = 'NicheSection';
