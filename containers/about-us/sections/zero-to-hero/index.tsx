import React, { memo } from 'react';
import classnames from 'classnames';
import { FiveYearIcon, TenYearIcon, ThreeYearIcon } from './icons';
import { HeaderSection } from '@components';

type Props = {
	title: string;
	content: string[];
	color: 'primary' | 'orange' | 'purple';
	icon: JSX.Element;
};

const list: Props[] = [
	{
		icon: <ThreeYearIcon />,
		title: 'Target next 3 years',
		color: 'primary',
		content: [
			'Top 10 startups following the Vietnamese venture builder model',
			'Top 10 companies with the best UI/UX products in Vietnam',
			'Top 10 companies with strong human resources and culture in Tech',
		],
	},
	{
		icon: <FiveYearIcon />,
		title: 'Target next 5 years',
		color: 'orange',
		content: [
			'Provide products in 3 areas: SaaS for Business, Education, Data Platform',
			'Provide products in America, Europe,...',
			'>60 employees, with more than 10 products',
		],
	},
	{
		icon: <TenYearIcon />,
		title: 'Target next 10 years',
		color: 'purple',
		content: [
			'We have global team in 3 regions: India, Vietnam, USA',
			'Revenue 250 billion vnd/year.',
			'>100 employees, with more than 20 products',
		],
	},
];

const Item: React.FC<Props> = ({ title, color, content, icon }) => {
	const classes = {
		primary: {
			bg: 'bg-primary-50',
			overlay: 'bg-primary-500',
		},
		orange: {
			bg: 'bg-orange-50',
			overlay: 'bg-orange-500',
		},
		purple: {
			bg: 'bg-purple-50',
			overlay: 'bg-purple-500',
		},
	};
	return (
		<div className='relative flex flex-1'>
			<div
				className={classnames(
					'absolute right-3 top-3 w-full h-full',
					'rounded-xl',
					classes[color].overlay
				)}
			/>
			<div
				className={classnames(
					'absolute -right-6 -top-6 w-full h-full',
					'bg-[url("/images/background-dot.svg")] bg-no-repeat bg-[length:200px_auto] bg-right-top'
				)}
			/>
			<div
				className={classnames(
					'flex flex-1 flex-col',
					'relative',
					'px-4 py-4',
					'rounded-xl',
					classes[color].bg
				)}
			>
				<div className='flex justify-center pb-6'>
					<div
						className={classnames(
							'w-16 h-16',
							'flex items-center justify-center',
							'shadow-md rounded-2xl',
							classes[color].overlay
						)}
					>
						{icon}
					</div>
				</div>
				<div className='flex flex-col'>
					<h4 className='pb-6 text-2xl font-medium text-gray-800'>{title}</h4>
					<ul className='list-disc pl-5'>
						{content.map((c) => (
							<li
								key={c}
								className={classnames(
									'text-gray-500 text-base font-normal',
									'pb-1 last:pb-0'
								)}
							>
								{c}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export const ZeroToHeroSection = memo(() => {
	return (
		<section className='bg-white'>
			<div className='container space-y-16'>
				<HeaderSection title="From zero to Hero" description="We aim to become a Tech Venture Builder company with a SaaS business model in: SaaS For Business, Education, Data Platform"/>
				{/* <div className='flex flex-col flex-1 pb-14'>
					<div className='flex flex-col md:max-w-3xl mx-auto'>
						<h4 className='text-center pb-6 text-3xl font-semibold text-gray-800'>
							From zero to Hero
						</h4>
						<span className='text-center text-gray-500 text-xl font-normal'>
							We aim to become a Tech Venture Builder company with a SaaS
							business model in: SaaS For Business, Education, Data Platform
						</span>
					</div>
				</div> */}
				<div
					className={classnames(
						'flex flex-wrap flex-row',
						'-mx-3 -my-10 lg:-mx-20',
						'pb-3'
					)}
				>
					{list.map((item, idx) => (
						<div
							key={idx}
							className={classnames(
								'flex',
								'basis-full md:basis-1/3',
								'px-3 py-10 lg:px-20'
							)}
						>
							<Item {...item} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
});

ZeroToHeroSection.displayName = 'ZeroToHeroSection';
