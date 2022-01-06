import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ParsedUrlQuery } from 'querystring';
import Button from '../../components/Button';

interface Params extends ParsedUrlQuery {
	slug: string;
}

type PostStaticProps = {
	mdxSource: MDXRemoteSerializeResult;
	frontMatter: {
		[key: string]: any;
	};
};

const PostPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
	frontMatter: { title },
	mdxSource,
}) => {
	return (
		<div className='mt-4'>
			<h1>{title}</h1>
			<MDXRemote {...mdxSource} components={{ Button, SyntaxHighlighter }} />
		</div>
	);
};

export const getStaticProps: GetStaticProps<PostStaticProps, Params> = async ({
	params,
}) => {
	const markdownWithMeta = fs.readFileSync(
		path.join('posts', params!.slug + '.mdx'),
		'utf-8'
	);
	const { data: frontMatter, content } = matter(markdownWithMeta);
	const mdxSource = await serialize(content);
	return {
		props: {
			frontMatter,
			slug: params!.slug,
			mdxSource,
		},
	};
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const files = fs.readdirSync(path.join('posts'));
	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.mdx', ''),
		},
	}));
	return {
		paths,
		fallback: false,
	};
};

export default PostPage;
