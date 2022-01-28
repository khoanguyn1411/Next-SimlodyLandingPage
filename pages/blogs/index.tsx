import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { LayoutBase } from "@components";
import { NewsContainer } from "@containers";

type Props = {
  posts: {
    slug: string;
    frontMatter: {
      title: string;
      description: string;
      thumbnailUrl: string;
      date: string;
      resource?: string;
      tag:string
      link:string
    };
  }[];
};

const BlogPage: React.FC<Props> = ({ posts }) => {
  return (
    <LayoutBase pageKey="Blog" pageTitle="Blogs">
      <NewsContainer posts={posts} />
    </LayoutBase>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};
