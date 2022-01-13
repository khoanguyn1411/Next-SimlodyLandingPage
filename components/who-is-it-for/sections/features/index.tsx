import React, { memo } from 'react';
import classnames from 'classnames';

type FeatureItemProps = {
	title: string;
	description: string;
};

const features: FeatureItemProps[] = [
	{
		title: 'Concept Solution',
		description:
			'We provide plans to transfer your old company to become more dynamic and faster',
	},
	{
		title: 'ERP Plan',
		description: 'Sold your problems with KPI, OKRs, EOS',
	},
	{
		title: 'SaaS Product',
		description: 'New technology and platform to work more efficiently',
	},
];

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
	return (
		<div
			className={classnames(
				'p-6',
				'flex flex-col flex-1',
				'shadow-xl rounded-xl',
				'relative',
				'bg-white'
			)}
		>
			<h4 className='text-gray-800 text-2xl font-semibold pb-5 text-center'>
				{title}
			</h4>
			<span className='text-gray-500 text-base font-normal text-center'>
				{description}
			</span>
		</div>
	);
};

export const FeatureSection = memo(() => {
	return (
		<section className='bg-white'>
			<div className='container py-6'>
				<div className='flex flex-col pb-16'>
					<h4 className='text-gray-800 text-3xl font-semibold pb-6 text-center'>
						Features for you
					</h4>
					<span className='text-gray-500 text-xl font-normal text-center'>
						Helping businesses to grow revenue through building a simple
						self-operating model within 2 years with 5 pillars (Sales &
						Marketing, Finance & Accounting, Operations, Human Resources Team,
						Organizational Culture).
					</span>
				</div>
				<div className='flex flex-wrap -m-10'>
					{features.map((featureItem, idx) => (
						<div
							key={idx}
							className={classnames(
								'p-10 flex basis-full md:basis-1/3',
								"bg-[url('/images/background-dot.svg')] bg-no-repeat bg-[top_1rem_left_1rem] bg-[length:150px_auto]"
							)}
						>
							<FeatureItem {...featureItem} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
});

FeatureSection.displayName = 'FeatureSection';
