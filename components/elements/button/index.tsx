import React from 'react';

type Props =
	| {
			icon: JSX.Element;
			text?: string;
	  }
	| {
			icon?: JSX.Element;
			text: string;
	  }
	| {
			icon: JSX.Element;
			text: string;
	  };

export const Button: React.FC<Props> = ({ icon, text }) => {
	return (
		<button className='bg-primary-500 rounded-lg outline-none px-4 py-2 hover:bg-primary-600 transition-all duration-300 ease-in-out'>
			{icon}
			<span className='text-white text-base font-semibold'>{text}</span>
		</button>
	);
};
