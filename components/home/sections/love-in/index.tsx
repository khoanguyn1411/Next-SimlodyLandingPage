import React, { memo } from 'react';
import classnames from 'classnames';
import {
	CustomerCentricIcon,
	DataDrivenIcon,
	FastestReleaseIcon,
	ScalabilityIcon,
} from '@components/home/icons';

type Color = 'orange' | 'indigo' | 'pink' | 'secondary';

const list = [
	{
		icon: <DataDrivenIcon />,
		title: 'Data Driven',
		description:
			'Make quick decisions, build data centers, metrics and reporting, information concentration',
		color: 'orange',
	},
	{
		icon: <ScalabilityIcon />,
		title: 'Scalability',
		description:
			'Scalability according to market needs, enterprise needs, with good product architecture',
		color: 'indigo',
	},
	{
		icon: <CustomerCentricIcon />,
		title: 'Customer Centric',
		description:
			'Solve the right problem, create customer value, fastest solutions solving contribute',
		color: 'pink',
	},
	{
		icon: <FastestReleaseIcon />,
		title: 'Fastest Release',
		description:
			'Scalability according to market needs, enterprise needs, with good product architecture',
		color: 'secondary',
	},
];

export const LoveInSection = memo(() => {
	const colors = {
		orange: 'bg-orange-400',
		indigo: 'bg-indigo-400',
		pink: 'bg-pink-400',
		secondary: 'bg-secondary-400',
	};
	return (
		<section
			className='flex flex-1'
			style={{
				backgroundImage: `url(
					"data:image/svg+xml,%3Csvg width='1438' height='760' viewBox='0 0 1438 760' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-2.05225 0L1437.95 113V760H-2.05225V0Z' fill='%2370C9F4'/%3E%3C/svg%3E%0A"
				)`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: '100%',
			}}
		>
			<div className='flex flex-col flex-1 container mx-auto pt-40 pb-20'>
				<div className='flex flex-col flex-1 pb-16'>
					<h3 className='text-3xl text-white font-semibold pb-6 text-center'>
						We put strong love in
					</h3>
					<span className='text-xl font-normal text-white text-center'>
						We invest in both product and customer satisfaction in the fastest
						time
					</span>
				</div>
				<div className={classnames('relative')}>
					<div
						className={classnames(
							'absolute top-0 right-0 left-0 bottom-0',
							'rounded-xl',
							'bg-purple-500',
							'-rotate-3',
							'hidden md:block'
						)}
					/>
					<div
						className={classnames(
							'bg-primary-500',
							'rounded-xl',
							'px-20 py-16 relative z-10'
						)}
					>
						<div className={classnames('-m-8', 'flex flex-row flex-wrap')}>
							{list.map((item, idx) => (
								<div
									key={idx}
									className={classnames(
										'p-4',
										'flex flex-1',
										'basis-full md:basis-1/2 lg:basis-1/4'
									)}
								>
									<div
										className={classnames(
											'bg-white',
											'rounded-xl',
											'px-2 py-4',
											'flex flex-col items-center'
										)}
									>
										<div className='pb-4'>
											<div
												className={classnames(
													'w-10 h-10',
													'flex items-center justify-center',
													'rounded-xl',
													colors[item.color as Color]
												)}
											>
												{item.icon}
											</div>
										</div>
										<label className='text-2xl font-semibold text-gray-800 pb-4 text-center'>
											{item.title}
										</label>
										<span className='text-base font-normal text-gray-500 text-center'>
											{item.description}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
});

LoveInSection.displayName = 'LoveInSection';
