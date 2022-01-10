import React from 'react';
import { Logo, Button } from '@components/elements';

export const Header = React.memo(() => {
	return (
		<header className='bg-white h-14 shadow-md sticky top-0 z-50'>
			<div className='container flex flex-row mx-auto items-center h-full justify-between'>
				{/* logo */}
				<Logo withText />

				{/* main */}
				<div>1</div>
				{/* contact */}
				<div>
					<Button text='Contact Us' />
				</div>
			</div>
		</header>
	);
});

Header.displayName = 'Header';
