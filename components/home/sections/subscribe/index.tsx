/* eslint-disable react/no-unescaped-entities */
import { Button } from '@components/elements';
import Image from 'next/image';
import { memo } from 'react';
import classnames from 'classnames';
import backgroundImage from './background.png';
import background2Image from './background2.png';
import background3Image from './background3.png';
import { EmailIcon } from '@components/home/icons';

export const SubscribeSection = memo(() => {
	return (
		<section
			style={{
				background:
					'linear-gradient(96.03deg, #0B9BFB 1.05%, rgba(29, 65, 123, 0) 180.46%, #BDE1FF 180.46%)',
			}}
		>
			<div className='container mx-auto flex flex-1'>
				<div className='flex flex-col md:flex-row flex-1 gap-10'>
					<div className='flex flex-1 justify-center flex-col py-6'>
						<div className='flex flex-col pb-8'>
							<h4 className='text-3xl font-semibold text-gray-50 pb-4'>
								We're got more coming...
							</h4>
							<span className='text-gray-100 text-xl font-normal'>
								Sign up for our newsletter and we'll email you every time we
								release a new batch of components.
							</span>
						</div>
						<div className='flex flex-row gap-4'>
							<div className='flex flex-1 rounded-xl bg-white overflow-hidden items-center px-6 py-4 gap-x-2'>
								<EmailIcon />
								<input
									placeholder='Enter your email'
									className={classnames(
										'flex-1 outline-none text-sm font-normal'
									)}
								/>
							</div>
							<Button text='Subscribe now' type='primary' />
						</div>
					</div>
					<div className='flex flex-col flex-1'>
						<div className='md:-mt-14 mb-4'>
							<Image src={backgroundImage} alt='Background' />
						</div>
						<div className='flex flex-row gap-4'>
							<Image src={background2Image} alt='Background 2' />
							<Image src={background3Image} alt='Background 3' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
});

SubscribeSection.displayName = 'SubscribeSection';
