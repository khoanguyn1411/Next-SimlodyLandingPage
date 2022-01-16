/* eslint-disable react/no-unescaped-entities */
import React, { memo } from 'react';
import classnames from 'classnames';

export const HeroUnitSection = memo(() => {
	return (
		<section className='bg-white'>
			<div
				className={classnames(
					'container md:py-24 py-6',
					"bg-[url('/images/background-dot.svg')] bg-no-repeat",
					'md:bg-[left_15rem_top_6rem] bg-[left_1rem_top_2rem]',
					'bg-[length:250px_auto]'
				)}
			>
				<div
					className={classnames(
						'flex flex-col py-8',
						"bg-[url('/images/three-triangle.svg')] bg-no-repeat",
						'md:bg-[left_14rem_top_0rem] bg-[left_-0.5rem_top_-0.5rem]',
						''
					)}
				>
					<label className='text-primary-500 pb-4 text-base font-semibold text-center'>
						TungTung's team
					</label>
					<div className='flex flex-col'>
						<h4 className='text-gray-800 text-4xl font-semibold pb-8 text-center'>
							All-in-one Culture
						</h4>
						<span className='text-gray-500 text-xl font-normal text-center'>
							We provide not only product but also spirit's work
						</span>
					</div>
				</div>
			</div>
		</section>
	);
});

HeroUnitSection.displayName = 'HeroUnitSection';
