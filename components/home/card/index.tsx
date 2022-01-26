import React, { memo } from 'react';
import classnames from 'classnames';

type Props = {
	title: string;
	description: string;
	color: 'green' | 'secondary' | 'indigo';
	icon: JSX.Element;
	className: string;
	delay:string
};

export const Card: React.FC<Props> = React.memo(
	({ title, description, color, icon, className,delay }) => {
		const colors = {
			green: {
				bg: 'bg-green-50',
				boxBg: 'bg-green-500',
			},
			secondary: {
				bg: 'bg-secondary-50',
				boxBg: 'bg-secondary-500',
			},
			indigo: {
				bg: 'bg-indigo-50',
				boxBg: 'bg-indigo-500',
			},
		};

		return (
			<div data-aos="fade-up" data-aos-delay={delay} className='flex flex-1 relative'>
				<div
					className={classnames(
						'z-10',
						'px-3',
						'py-8',
						'flex',
						'flex-col',
						'rounded-xl',
						'outline-none',
						'flex-1',
						colors[color].bg
					)}
				>
					<div className='flex justify-center pb-6'>{icon}</div>
					<h4 className='text-gray-800 text-center font-semibold pb-4 text-2xl'>
						{title}
					</h4>
					<span className='text-gray-500 text-base text-center'>
						{description}
					</span>
				</div>
				<div
					className={classnames(
						'absolute -left-3 -bottom-3',
						'w-full h-full',
						'rounded-xl',
						colors[color].boxBg
					)}
				/>
			</div>
		);
	}
);

Card.displayName = 'Card';
