import Image from 'next/image';
import React, { memo } from 'react';
import classnames from 'classnames';

type Props = {
	featuredImage: string;
	year: number;
	position: 'left' | 'right';
	content: string[];
};

const journeys: Props[] = [
	{
		featuredImage: '/images/journey/2018.png',
		year: 2018,
		position: 'right',
		content: [
			"TungTung's project was established",
			'5 members',
			'Core team established',
		],
	},
	{
		featuredImage: '/images/journey/2019.png',
		year: 2019,
		position: 'left',
		content: [
			'Multi-Helix ledger simulation results',
			'Applying R&D to Web 2.5 consumer applications',
			'Building a non-custodial DeFi platform',
		],
	},
	{
		featuredImage: '/images/journey/2020.png',
		year: 2020,
		position: 'right',
		content: [
			"TungTung's project was established",
			'5 members',
			'Core team established',
		],
	},
	{
		featuredImage: '/images/journey/2021.png',
		year: 2021,
		position: 'left',
		content: [
			'Co-operate with VietAngroup, Ilotusland',
			'Build EOS platform, Saas products, product solutions',
			'Building a non-custodial DeFi platform',
		],
	},
];

const JourneyItem: React.FC<Props> = ({
	featuredImage,
	year,
	position,
	content,
}) => (
	<div className='flex flex-row group'>
		{position === 'right' ? (
			<>
				<div className='flex-1 relative min-h-[250px] mb-20'>
					<Image
						src={featuredImage}
						alt={year.toString()}
						layout='fill'
						objectFit='contain'
					/>
				</div>
				<div className='flex flex-col h-auto items-center'>
					<div className='w-6 h-6 rounded-full border border-gray-300' />
					<div className='flex w-[0.5px] bg-gray-300 flex-1' />
				</div>
			</>
		) : null}

		<div className='flex-1'>
			<div className='flex flex-col pl-12'>
				<div className='pb-4 -ml-4'>
					<h4 className='text-black text-3xl font-semibold'>{year}</h4>
				</div>
				<ul className='list-disc text-base font-normal text-gray-800'>
					{content.map((c, idx) => (
						<li key={idx}>{c}</li>
					))}
				</ul>
			</div>
		</div>

		{position === 'left' ? (
			<>
				<div className='flex flex-col h-auto items-center'>
					<div className='w-6 h-6 rounded-full border border-gray-300' />
					<div className='group-last:hidden flex w-[0.5px] bg-gray-300 flex-1' />
				</div>
				<div className='flex-1 relative min-h-[250px] mb-20'>
					<Image
						src={featuredImage}
						alt={year.toString()}
						layout='fill'
						objectFit='contain'
					/>
				</div>
			</>
		) : null}
	</div>
);

export const OurJourneySection = memo(() => {
	return (
		<section
			className='bg-no-repeat bg-center bg-[length:auto_100%]'
			style={{
				backgroundImage:
					"url(\"data:image/svg+xml,%3Csvg width='1440' height='1614' viewBox='0 0 1440 1614' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3.99999C0 1.79085 1.79086 0 4 0H1436C1438.21 0 1440 1.79086 1440 4V1491.56C1440 1493.52 1438.58 1495.19 1436.65 1495.51L713.153 1613.89C712.721 1613.96 712.28 1613.96 711.848 1613.89L3.34085 1495.52C1.41283 1495.19 0 1493.53 0 1491.57V3.99999Z' fill='%23F3FBFE'/%3E%3C/svg%3E%0A\")",
			}}
		>
			<div className='container py-40'>
				<div className='relative w-full h-full'>
					<div
						className={classnames(
							"bg-[url('/images/pentagon-indigo.svg')] bg-no-repeat",
							'absolute top-0 bottom-0 left-0 right-0',
							'bg-left-top bg-[length:250px_250px]'
						)}
					/>
					<div
						className={classnames(
							"bg-[url('/images/pentagon-primary.svg')] bg-no-repeat",
							'absolute top-0 bottom-0 left-0 right-0',
							'bg-right-bottom bg-[length:250px_250px]'
						)}
					/>
					<div
						className={classnames(
							"bg-[url('/images/background-dot.svg')] bg-no-repeat",
							'absolute top-0 bottom-0 left-0 right-0',
							'bg-left-bottom bg-[length:250px_250px]'
						)}
					/>
					<div
						className={classnames(
							"bg-[url('/images/background-dot.svg')] bg-no-repeat",
							'absolute top-0 bottom-0 left-0 right-0',
							'bg-right-top bg-[length:250px_250px]'
						)}
					/>
					<div className='flex flex-col relative z-10'>
						<div className='flex flex-col pb-20'>
							<h4 className='text-center text-gray-800 text-3xl font-semibold pb-6'>
								Our journey
							</h4>
							<span className='text-center text-gray-500 text-xl font-normal'>
								We grow over time and have more experience in each project
							</span>
						</div>
						<div className='flex flex-col'>
							{journeys.map((journey, idx) => (
								<JourneyItem key={idx} {...journey} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
});

OurJourneySection.displayName = 'OurJourneySection';
