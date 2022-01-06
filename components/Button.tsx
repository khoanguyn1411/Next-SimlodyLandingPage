import React from 'react';

type Props = {
	text: string;
};

const Button: React.FC<Props> = ({ text }) => {
	return (
		<button
			className='btn btn-primary'
			onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
				((event.target as HTMLElement).innerText = 'You clicked me!')
			}
		>
			{text}
		</button>
	);
};

export default Button;
