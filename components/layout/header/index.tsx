import React from 'react';
import { Logo, Button } from '@components/elements';
import { ItemMenu } from './menu-item';
import Link from 'next/link';
import classNames from 'classnames';
import { Media } from '@components';
import { useRouter } from 'next/router';

 const MENUS = [
	{
		key: 'Product',
		name: 'Product',
		href: '/product',
		hasSubmenu: false,
	},
	{
		key: 'WhoItFor',
		name: "Who's It For",
		href: '/who-is-it-for/small',
		icon: <i className='fa fa-chevron-down' />,
		hasSubmenu: true,
		submenus: [
			{
				key: 'Small',
				name: 'Small enterprises',
				href: '/who-is-it-for/small',
			},
			{
				key: 'Medium',
				name: 'Medium-sized enterprises',
				href: '/who-is-it-for/medium',
			},
			{
				key: 'Large',
				name: 'Large enterprises',
				href: '/who-is-it-for/large',
			},
		],
	},
	{
		key: 'Solution',
		name: 'Solution',
		href: '/solution/product',
		icon: <i className='fa fa-chevron-down' />,
		hasSubmenu: true,
		submenus: [
			{
				key: 'Product',
				name: 'Product concept',
				href: '/solution/product',
			},
			{
				key: 'Saas',
				name: 'Saas',
				href: '/solution/saas',
			},
			{
				key: 'Odoo',
				name: 'Odoo',
				href: '/solution/odoo',
			},
		],
	},
	{
		key: 'Blog',
		name: 'News',
		href: '/blogs',
		hasSubmenu: false,

	},
	{
		key: 'About',
		name: 'About us',
		href: '/about-us',
		hasSubmenu: false,

	},
];

type IProps = {
	pageKey?: string;
	onOpen: () => void;
};
export const Header: React.FC<IProps> = React.memo(({ pageKey, onOpen }) => {
	const router=useRouter()
	const handleLink=()=>{
		router.push("/contact-us")
	}
	return (
		<header className='bg-white h-header shadow sticky top-0 z-50'>
			<div className='container flex flex-row mx-auto items-center h-full justify-between'>
				<div className='flex items-center'>
					<Media lessThan='xl'>
						<button
							className={classNames(
								'flex outline-none focus:outline-none mr-4 items-center justify-center'
							)}
							onClick={onOpen}
						>
							<i className='text-base text-gray-400 fas fa-bars line-height-normal'></i>
						</button>
					</Media>

					{/* logo */}
					<Link href='/'>
						<a>
							<Logo withText />
						</a>
					</Link>
				</div>

				{/* main */}
				<Media greaterThanOrEqual='xl'>
					<ul className='flex items-center list-none hide-scrollbar'>
						{MENUS.map((menu, index) => (
							<ItemMenu
								key={index}
								name={menu.name}
								icon={menu.icon}
								href={menu.href}
								isActive={pageKey === menu.key}
								hasSubMenu={menu.hasSubmenu}
								subMenus={menu.submenus}
							/>
						))}
					</ul>
				</Media>

				{/* contact */}
				<div>
					<Button text='Contact Us' type='primary' onClick={handleLink} />
				</div>
			</div>
		</header>
	);
});

Header.displayName = 'Header';
