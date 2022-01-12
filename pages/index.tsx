import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import {
	BringSection,
	LoveInSection,
	NicheSection,
	UnitHeroSection,
	SubscribeSection,
	ProjectSection,
} from '@components';
import { LayoutBase } from '@components';

// type Props = {
// 	posts: {
// 		slug: string;
// 		frontMatter: {
// 			title: string;
// 			description: string;
// 			thumbnailUrl: string;
// 			date: string;
// 		};
// 	}[];
// };

const Home: React.FC = () => {
	return (
		<LayoutBase pageKey='' pageTitle=''>
			<>
				<UnitHeroSection />
				<NicheSection />
				<BringSection />
				<LoveInSection />
				<ProjectSection />
				<SubscribeSection />
			</>
		</LayoutBase>
	);
};

export default Home;

// export const getStaticProps = async () => {
// 	const files = fs.readdirSync(path.join('posts'));
// 	const posts = files.map((filename) => {
// 		const markdownWithMeta = fs.readFileSync(
// 			path.join('posts', filename),
// 			'utf-8'
// 		);
// 		const { data: frontMatter } = matter(markdownWithMeta);
// 		return {
// 			frontMatter,
// 			slug: filename.split('.')[0],
// 		};
// 	});
// 	return {
// 		props: {
// 			posts,
// 		},
// 	};
// };
