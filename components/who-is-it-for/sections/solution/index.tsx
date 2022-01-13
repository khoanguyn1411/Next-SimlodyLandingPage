import { Button } from '@components/elements';
import { FlexibleIcon, PlatformIcon } from '@components/who-is-it-for/icons';
import Image from 'next/image';
import React, { memo } from 'react';
import background from '@images/projects/vietan.png';
import classnames from 'classnames';

type Props = {
	position: 'left' | 'right';
	title: string;
	description: string;
	color: 'orange' | 'green';
	label: string;
	icon: JSX.Element;
};

const SolutionItem: React.FC<Props> = ({
	position = 'left',
	title,
	description,
	label,
	color,
	icon,
}) => {
	const classes = {
		orange: {
			bg: 'bg-orange-400',
			text: 'text-orange-400',
		},
		green: {
			bg: 'bg-green-400',
			text: 'text-green-400',
		},
	};
	return (
		<div className='flex flex-col md:flex-row flex-1 gap-24'>
			{position === 'right' ? (
				<div className='basis-full md:basis-7/12'>
					<Image src={background} alt='background' />
				</div>
			) : null}
			<div className='flex basis-full md:basis-5/12 items-center'>
				<div className='flex flex-1 flex-col py-4'>
					<div className='flex flex-col pb-4'>
						<div className='pb-4'>
							<div
								className={classnames(
									'flex items-center justify-center',
									'w-10 h-10',
									'rounded-xl',
									classes[color].bg,
									classes[color].text
								)}
							>
								{icon}
							</div>
						</div>
						<label
							className={classnames(
								'text-base font-semibold',
								classes[color].text
							)}
						>
							{label}
						</label>
					</div>
					<div className='flex flex-col pb-4'>
						<h4 className='text-gray-800 text-3xl font-semibold pb-4'>
							{title}
						</h4>
						<span
							className='text-gray-500 text-base font-normal'
							dangerouslySetInnerHTML={{
								__html: description.replace(/\n/g, '<br />'),
							}}
						/>
					</div>
				</div>
			</div>
			{position === 'left' ? (
				<div className='basis-full md:basis-7/12'>
					<Image src={background} alt='background' />
				</div>
			) : null}
		</div>
	);
};

export const SolutionSection = memo(() => {
	return (
		<section className='bg-white'>
			<div className='container py-6'>
				<div className='flex flex-1 flex-col gap-20'>
					<div className='flex flex-col'>
						<h4 className='text-center pb-6 text-gray-800 text-3xl font-semibold'>
							Our solution for you
						</h4>
						<span className='text-center text-gray-500 text-xl font-normal'>
							To meet the needs of the startup business, you should do the
							following things:
						</span>
					</div>
					<SolutionItem
						icon={<PlatformIcon />}
						label='Platform'
						color='orange'
						position='left'
						title='Just one platform'
						description='Whatever your niche, we have the flexibility and customization you need to kickstart your team to turn your idea into a business. And notably, they are on the same platform as the EOS model™'
					/>
					<SolutionItem
						icon={<FlexibleIcon />}
						label='Adapt'
						color='green'
						position='right'
						title='Flexible and easy to use'
						description={`Tungtung provide products easy to use and flexible enough to support any type of project.\nIf you have used tools like Jira, Asana, Trello. Surely this product is completely simple for you.`}
					/>
				</div>
			</div>
		</section>
	);
});

SolutionSection.displayName = 'SolutionSection';
