import {
	FacebookIcon,
	GoogleIcon,
	LinkedInIcon,
	YoutubeIcon,
} from '@components/home/icons';
import Link from 'next/link';
import React, { memo } from 'react';

export const Footer = memo(() => {
	return (
		<footer className='py-16 flex flex-1 shadow-inner'>
			<div className='flex flex-col w-full md:w-2/5 mx-auto'>
				<div className='flex flex-row justify-between pb-12'>
					<Link href='/about-us'>
						<a className='hover:text-primary-500 font-semibold text-base text-gray-400 px-4 py-2'>
							About
						</a>
					</Link>

					<Link href='/job'>
						<a className='hover:text-primary-500 font-semibold text-base text-gray-400 px-4 py-2'>
							Job
						</a>
					</Link>

					<Link href='/blog'>
						<a className='hover:text-primary-500 font-semibold text-base text-gray-400 px-4 py-2'>
							Blog
						</a>
					</Link>

					<Link href='/privacy-policy'>
						<a className='hover:text-primary-500 font-semibold text-base text-gray-400 px-4 py-2'>
							Privacy policy
						</a>
					</Link>
				</div>
				<div className='flex flex-row w-64 mx-auto justify-between pb-12'>
					<a href='' className='hover:text-primary-500 text-gray-400'>
						<FacebookIcon />
					</a>
					<a href='' className='hover:text-primary-500 text-gray-400'>
						<GoogleIcon />
					</a>
					<a href='' className='hover:text-primary-500 text-gray-400'>
						<LinkedInIcon />
					</a>
					<a href='' className='hover:text-primary-500 text-gray-400'>
						<YoutubeIcon />
					</a>
				</div>
				<div className='flex flex-1 justify-center'>
					<span className='text-center text-gray-400 text-base font-normal'>
						© 2019 - Copyright Tungtung JSC - Tungtung.vn. All rights reserved
					</span>
				</div>
			</div>
		</footer>
	);
});

Footer.displayName = 'Footer';
