import { Button } from '@components/elements';
import Image from 'next/image';
import React, { memo } from 'react';
import image1 from 'public/home/image-1.jpeg';
import image2 from 'public/home/image-2.jpeg';
import background from './background.png';

export const UnitHeroSection = memo(() => {
	return (
		<section className='bg-primary-50 flex py-32'>
			<div className='container mx-auto my-auto flex flex-col md:flex-row gap-24'>
				<div className='flex flex-1 items-center'>
					<div className='flex flex-col'>
						<div className='title flex flex-col mb-8'>
							<h3 className='text-5xl font-bold text-gray-800 py-4'>
								Data to enrich your
							</h3>
							<h3 className='text-5xl font-bold text-primary-500'>
								platform business
							</h3>
						</div>
						<div className='description flex flex-col mb-8'>
							<span className='text-gray-700 font-normal text-xl'>
								Help your business grow revenue by building product concept and
								solution
							</span>
						</div>
						<div className='button flex flex-row space-x-10'>
							<Button text='Get Started' type='primary' />
							<Button text='Explore more' 
							icon={<span className='ml-2 w-4 h-4 rounded-full bg-primary-500 text-white flex items-center justify-center'
							style={{fontSize:"10px"}}
							><i className='fa fa-chevron-right'/></span>}
							/>
						</div>
					</div>
				</div>
				<div
					className='flex-1'
					style={{
						backgroundImage: "url('/home/background.png')",
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'contain',
						backgroundPosition: 'right',
					}}
				>
					<div className='p-12'>
						<Image src={background} alt='Background' />
					</div>
				</div>
			</div>
		</section>
	);
});

UnitHeroSection.displayName = 'UnitHeroSection';
