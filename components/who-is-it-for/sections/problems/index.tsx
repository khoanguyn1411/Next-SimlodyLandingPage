import React, { memo } from 'react';

type Props = {
	title: string;
	description: string;
};

export const ProblemSection: React.FC<Props> = memo(
	({ title, description }) => {
		return (
			<section className='bg-white'>
				<div className="container py-16 bg-[url('/images/background-dot.svg')] bg-no-repeat md:bg-[right_10rem_top_1rem] bg-[right_1rem_top_0]">
					<div className='flex flex-col relative'>
						<div className='flex flex-col items-center pb-14'>
							<h4 className='text-gray-800 text-3xl font-semibold pb-6 text-center'>
								{title}
							</h4>
							<span className='text-gray-500 text-xl font-normal text-center'>
								{description}
							</span>
						</div>
						<div className='flex -m-4 mt-3 flex-row flex-wrap'>
							{[1, 2, 3].map((item, idx) => (
								<div key={idx} className='flex p-4 basis-full md:basis-1/3'>
									<div className='bg-gray-50 rounded-xl pt-16 pb-8 px-8 flex flex-col items-center relative'>
										<div className='absolute w-14 h-14 flex items-center justify-center bg-primary-500 rounded-xl -top-7 shadow-lg'>
											d
										</div>
										<label className='text-gray-800 text-2xl font-semibold pb-5'>
											Scalability
										</label>
										<span className='text-gray-500 text-base font-normal text-center'>
											Scalability according to market needs, enterprise needs,
											with good product architecture
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		);
	}
);

ProblemSection.displayName = 'ProblemSection';
