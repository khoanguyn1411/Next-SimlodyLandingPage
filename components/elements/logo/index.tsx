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
				<span className='text-gray-800 pl-2 text-xl font-semibold'>
					tungtung
				</span>
			) : null}
		</div>
	);
};
