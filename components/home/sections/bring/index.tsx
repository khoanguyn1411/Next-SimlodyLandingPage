/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import {
	ConceptIcon,
	OptimizedIcon,
	TechnologyIcon,
} from '@components/home/icons';
import background from './background.png';
import { HeaderSection } from '@components';

const list = [
	{
		title: 'All-in-one platform',
		description:
			'We use latest technology and always update our designs for our customers',
		icon: <TechnologyIcon />,
	},
	{
		title: 'Company optimized operation',
		description:
			'Centralized data ware house, operation and business optimization by our method',
		icon: <OptimizedIcon />,
	},
	{
		title: 'Concept to implementation',
		description:
			'We provide SaaS platform, Payment, ERP for our customers to achieve higher revenue',
		icon: <ConceptIcon />,
	},
];

export const BringSection = React.memo(() => {
	return (
		<section className='bg-white flex py-28'>
			<div className='container mx-auto flex flex-1 flex-col space-y-16'>
				<HeaderSection title='What we can bring?' description="By understanding our customers's paint, we would love to help yousold the problems you are facing"/>

				<div className='flex flex-col md:flex-row gap-12 md:gap-72'>
					<div className='flex flex-1'>
						<Image src={background} alt='background' unoptimized />
					</div>
					<div className='flex flex-1 items-center'>
						<div className='flex flex-1 flex-col'>
							<div className='flex flex-col pb-4'>
								<h4 className='text-gray-800 text-3xl font-semibold pb-4'>
									All-in-one platform
								</h4>
								<span className='text-base text-gray-500 font-normal'>
									We use latest technology and always update our designs for our
									customers
								</span>
							</div>
							<div className='flex flex-col'>
								{list.map((item, idx) => (
									<div
										key={idx}
										className={classnames(
											'gap-4',
											'pb-4 last:pb-0',
											'flex flex-1 flex-row items-center'
										)}
									>
										<div
											className={classnames(
												'w-10 h-10',
												'rounded-xl',
												'bg-primary-500',
												'flex items-center justify-center'
											)}
										>
											{item.icon}
										</div>
										<div className='flex flex-col flex-1'>
											<label className='text-lg font-medium text-gray-800 pb-2'>
												{item.title}
											</label>
											<span className='text-gray-500 text-base font-normal'>
												{item.description}
											</span>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
});

BringSection.displayName = 'BringSection';
