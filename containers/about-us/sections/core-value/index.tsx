import React, { memo } from 'react';
import classnames from 'classnames';
import { ExcellentIcon, FocusIcon, PassionIcon, TogetherIcon } from './icons';
import { FlexibilityIcon } from './icons/Flexibility';
import { HeaderSection } from '@components';

type CoreValueProps = {
	icon: JSX.Element;
	title: string;
	content: string[];
};

const coreValues: CoreValueProps[] = [
	{
		icon: <FocusIcon />,
		title: 'Focus customer',
		content: ['Empathize', 'Understand', 'Conversation'],
	},
	{
		icon: <ExcellentIcon />,
		title: 'Excellent ability',
		content: ['Conditions', 'Upgrade', 'Work & Learn'],
	},
	{
		icon: <PassionIcon />,
		title: 'Passion',
		content: ['Empathize', 'Understand', 'Conversation'],
	},
	{
		icon: <FlexibilityIcon />,
		title: 'Flexibility',
		content: ['Shortest time', 'Best method', 'Best technology'],
	},
	{
		icon: <TogetherIcon />,
		title: 'Together',
		content: ['Keep track', 'Build the culture', 'Build the world'],
	},
];

const CoreValueItem: React.FC<CoreValueProps> = ({ title, icon, content }) => {
	return (
		<div className='flex flex-row flex-1 gap-x-6'>
			<div
				className={classnames(
					'w-14 h-14',
					'rounded-xl',
					'bg-primary-500',
					'flex items-center justify-center'
				)}
			>
				{icon}
			</div>
			<div className='flex flex-col'>
				<h5 className='text-2xl font-semibold text-gray-800 pb-1'>{title}</h5>
				<ul className='pl-4 list-disc'>
					{content.map((c, idx) => (
						<li key={idx} className='text-gray-500 text-base font-normal'>
							{c}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export const CoreValueSection = memo(() => {
	return (
		<section className='bg-white'>
			<div
				className={classnames(
					'container py-16 space-y-16',
					"bg-[url('/images/background-dot.svg')] bg-no-repeat md:bg-[right_12rem_top_4rem] bg-[right_2rem_top_4rem] bg-[length:250px_auto]"
				)}
			>
				<HeaderSection title="Our core values" description="We build technology solution with the best user experience, optimized operation for businesses, startups to develop business model"/>
				{/* <div className='flex flex-col pb-14 md:max-w-3xl md:mx-auto'>
					<h4 className='text-gray-800 text-3xl font-semibold pb-6 text-center'>
						Our core values
					</h4>
					<span className='text-gray-500 text-xl font-normal text-center'>
						We build technology solution with the best user experience,
						optimized operation for businesses, startups to develop business
						model
					</span>
				</div> */}
				<div className='flex flex-wrap -mx-4 md:-mx-10 -my-6'>
					{coreValues.map((coreValue, idx) => {
						return (
							<div
								key={idx}
								className={classnames(
									'px-4 py-6',
									'md:px-10',
									'flex basis-full',
									'md:basis-1/2 lg:basis-1/3'
								)}
							>
								<CoreValueItem {...coreValue} />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
});

CoreValueSection.displayName = 'CoreValueSection';
