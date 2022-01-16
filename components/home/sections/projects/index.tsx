/* eslint-disable @next/next/no-img-element */
import { HeaderSection } from '@components';
import React from 'react';
import { ProjectItemProps, projects } from './constant';

const ProjectItem: React.FC<ProjectItemProps> = ({
	title,
	image,
	subTitle,
}) => (
	<div className='flex flex-col'>
		<div className='pb-4'>
			<img
				className='w-full h-96 hover:scale-105 transition ease-in-out hover:cursor-pointer object-contain rounded-lg'
				alt={title}
				src={image}
			/>
		</div>
		<div className='flex flex-col'>
			<span className='text-lg font-medium text-gray-800'>{title}</span>
			<span className='text-sm font-normal text-gray-500'>{subTitle}</span>
		</div>
	</div>
);

export const ProjectSection = () => {
	return (
		<section className='bg-white'>
			<div className='container mx-auto py-32 space-y-16'>
				<HeaderSection title="TungTung projects" description="Customers have accompanied with us"/>
				
				<div className='flex flex-row flex-wrap -m-4'>
					{projects.map((project, idx) => (
						<div className='p-4 basis-full md:basis-1/2 lg:basis-1/3' key={idx}>
							<ProjectItem {...project} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
