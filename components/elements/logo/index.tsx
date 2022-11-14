import { APP_NAME } from '@constants';
import Image from 'next/image';
import React from 'react';
import logo from '/public/logo/logo.svg';

type Props = {
	withText?: boolean;
	width?: number;
	height?: number;
};

export const Logo: React.FC<Props> = ({
	withText = false,
	width = 40,
	height = 40,
}) => {
	return (
		<div className='flex flex-row items-center'>
			<Image src={logo} width={width} height={height} alt='Logo Website' />
			{withText ? (
				<span className=' pl-2 text-xl font-semibold' style={{
					background: "linear-gradient(54.05deg, #007EA4 15.92%, rgba(0, 175, 185, 0.7) 87.98%)",
					WebkitBackgroundClip:"text",
					WebkitTextFillColor:"transparent"
				}}>
					{APP_NAME}
				</span>
			) : null}
		</div>
	);
};
