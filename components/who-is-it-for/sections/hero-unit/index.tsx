import { Button } from '@components/elements';
import React, { memo } from 'react';

type Props = {
	label: string;
	title: string;
	description: string;
};

export const HeroUnitSection: React.FC<Props> = memo(
	({ label, title, description }) => {
		return (
			<section className='bg-white'>
				<div className="container py-20 bg-[url('/images/background-dot.svg')] bg-no-repeat bg-[left_1rem_top_2rem] md:bg-[left_10rem_top_6rem]">
					<div className="flex flex-col items-center bg-[url('/images/three-triangle.svg')] bg-no-repeat bg-[left_-1rem_top_-1rem] md:bg-[left_5rem_top_-1rem] bg-contain">
						<label className='text-base font-semibold text-primary-500 pb-4'>
							{label}
						</label>
						<div className='flex flex-col items-center pb-8'>
							<h4 className='text-gray-800 text-4xl font-semibold pb-8 uppercase text-center'>
								{title}
							</h4>
							<span className='text-gray-500 text-xl font-normal'>
								{description}
							</span>
						</div>
						<Button text='Get Free Trial Today' type='primary' size='large' />
					</div>
				</div>
			</section>
		);
	}
);

HeroUnitSection.displayName = 'HeroUnitSection';
