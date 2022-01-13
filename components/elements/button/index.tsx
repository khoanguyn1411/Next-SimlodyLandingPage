import classnames from 'classnames';
import React from 'react';
import { forwardRef } from 'react';

const SIZE_MAPS = {
	small: 'h-8',
	default: '',
	large: 'h-12',
};

const TYPE_MAPS = {
	primary: 'bg-primary-500 hover:bg-primary-600 text-white',
	default: classnames(
		'bg-transparent hover:bg-primary-100',
		'border border-primary-500',
		'text-primary-500'
	),
	text: '',
};

type IProps = (
	| { text: string; icon: JSX.Element }
	| { text?: string; icon: JSX.Element }
	| { text: string; icon?: JSX.Element }
) & {
	htmlType?: 'button' | 'submit' | 'reset';
	className?: string;
	size?: keyof typeof SIZE_MAPS;
	type?: keyof typeof TYPE_MAPS;
	block?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = forwardRef<HTMLButtonElement, IProps>(
	(
		{
			text,
			icon,
			htmlType = 'button',
			size = 'default',
			type = 'default',
			className,
			block = false,
			onClick,
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				type={htmlType}
				onClick={onClick}
				className={classnames(
					'text-base rounded-md px-4 py-2 font-medium',
					'transition-all duration-300 ease-in-out',
					'flex items-center justify-center',
					{ 'w-full': block },
					SIZE_MAPS[size],
					TYPE_MAPS[type],
					className
				)}
			>
				{text && <span className='leading-6'>{text}</span>}
				{icon}
			</button>
		);
	}
);

Button.displayName = 'Button';
