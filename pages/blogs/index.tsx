import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Props = {
	posts: {
		slug: string;
		frontMatter: {
			title: string;
			description: string;
			thumbnailUrl: string;
			date: string;
		};
	}[];
};

const Home: React.FC<Props> = ({ posts }) => {
	return (
		<div className='mt-5'>
			{posts.map((post, index) => (
				<Link href={'/blogs/' + post.slug} passHref key={index}>
					<div className='border border-gray-100 p-4 rounded-lg mb-3 pointer max-w-xl bg-gray-50'>
						<div className='row g-0'>
							<div className='col-md-8'>
								<div className='card-body'>
									<h5 className='card-title'>{post.frontMatter.title}</h5>
									<p className='card-text'>{post.frontMatter.description}</p>
									<p className='card-text'>
										<small className='text-muted'>
											{post.frontMatter.date}
										</small>
									</p>
								</div>
							</div>
							<div className='col-md-4 m-auto'>
								<Image
									src={post.frontMatter.thumbnailUrl}
									className='img-fluid mt-1 rounded-start'
									alt='thumbnail'
									width={500}
									height={400}
									objectFit='cover'
								/>
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Home;

export const getStaticProps = async () => {
	const files = fs.readdirSync(path.join('posts'));
	const posts = files.map((filename) => {
		const markdownWithMeta = fs.readFileSync(
			path.join('posts', filename),
			'utf-8'
		);
		const { data: frontMatter } = matter(markdownWithMeta);
		return {
			frontMatter,
			slug: filename.split('.')[0],
		};
	});
	return {
		props: {
			posts,
		},
	};
};
