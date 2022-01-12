export type ProjectItemProps = {
	title: string;
	image: string;
	subTitle: string;
};

export const projects: ProjectItemProps[] = [
	{
		image: '/images/projects/ilotusland.png',
		title: 'Ilotusland',
		subTitle: 'IoT Monitoring platform',
	},
	{
		image: '/images/projects/privatrip.png',
		title: 'Privatrip',
		subTitle: 'Traveling platform',
	},
	{
		image: '/images/projects/zuumviet.png',
		title: 'ZuumViet',
		subTitle: 'Delivery app',
	},
	{
		image: '/images/projects/vietan.png',
		title: 'Vietangroup',
		subTitle: 'Environment solutions',
	},
	{
		image: '/images/projects/greenfood.jpeg',
		title: 'GreenFood',
		subTitle: 'Import and export green food',
	},
];
