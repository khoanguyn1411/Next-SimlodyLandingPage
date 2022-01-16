import Image from 'next/image';
import React, { memo } from 'react';
import { PersonProps, teams } from './constant';

export const OurTeamItem: React.FC<PersonProps> = ({
	avatar,
	fullName,
	position,
	description,
}) => (
	<div className='flex flex-1 flex-col py-4 px-6 rounded-lg bg-white hover:bg-gray-100'>
		<div className='pb-4 self-center'>
			<Image src={avatar} alt={fullName} width={200} height={200} />
		</div>
		<div className='flex flex-col pb-3'>
			<span className='text-gray-800 text-xl font-semibold pb-1 text-center'>
				{fullName}
			</span>
			<span className='text-primary-500 text-base font-normal text-center'>
				{position}
			</span>
		</div>
		<div
			className='text-gray-500 text-base font-normal text-center'
			dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }}
		/>
	</div>
);

export const OurTeam = memo(() => {
	return (
		<section className='bg-white'>
			<div className='container py-16'>
				<div className='flex flex-col'>
					<div className='flex flex-col pb-14'>
						<h4 className='text-gray-800 text-3xl font-semibold pb-6 text-center'>
							Meet our team
						</h4>
						<span className='text-gray-500 text-xl font-normal text-center'>
							We build Tech culture from individuals
						</span>
					</div>
					<div className='flex flex-row flex-wrap -m-4'>
						{teams.map((team, idx) => (
							<div key={idx} className='p-4 basis-full md:basis-1/3'>
								<OurTeamItem {...team} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
});

OurTeam.displayName = 'OurTeam';
