import React from 'react';
import { Logo, Button } from '@components/elements';
import { MenuItem } from './menu-item';

const MENUS=[
	{
		key:"Product",
		name:"Product",
		href:"/product"
	},
	{
		key:"WhoItFor",
		name:"Who's It For",
		href:"/who-it-for",
		icon:<i className='fa fa-chevron-down'/>
	},
	{
		key:"Solution",
		name:"Solution",
		href:"/solution",
		icon:<i className='fa fa-chevron-down'/>
	},
	{
		key:"News",
		name:"News",
		href:"/news"
	},
	{
		key:"About",
		name:"About us",
		href:"/about"
	}
]

type IProps={
	pageKey?:string
}
export const Header:React.FC<IProps> = React.memo(({pageKey}) => {
	return (
		<header className='bg-white h-14 shadow-md sticky top-0 z-50'>
			<div className='container flex flex-row mx-auto items-center h-full justify-between'>
				{/* logo */}
				<Logo withText />

				{/* main */}
				<ul className='flex items-center overflow-y-auto list-none hide-scrollbar space-x-16'>
					{MENUS.map((menu,index)=>(
						<MenuItem key={index} name={menu.name} icon={menu.icon} href={menu.href} isActive={pageKey===menu.key}/>
					))}
				</ul>
				{/* contact */}
				<div>
					<Button text='Contact Us' />
				</div>
			</div>
		</header>
	);
});

Header.displayName = 'Header';
