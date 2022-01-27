import Image from "next/image";
import Link from "next/link";

import { Avatar } from "@components/elements";

type IProps = {
  post: {
    slug: string;
    frontMatter: {
      title: string;
      description: string;
      thumbnailUrl: string;
      date: string;
      avatar?: string;
      fullName?: string;
    };
  };
};
export const BlogItem: React.FC<IProps> = ({ post }) => {
  return (
    <Link href={"/blogs/" + post.slug} passHref>
      <div className="rounded-lg mb-3 cursor-pointer transition-all duration-300 hover:shadow-primary-500 shadow-md max-w-xl bg-gray-50">
        <div className="m-auto">
          <Image
            src={post.frontMatter.thumbnailUrl}
            className="img-fluid mt-1 rounded-t-md"
            alt="thumbnail"
            width="500"
            height={200}
            objectFit="cover"
          />
        </div>

        <div className="p-4">
          <div className="flex flex-col space-y-4">
            <h5 className="font-medium text-xl">{post.frontMatter.title}</h5>
            <span className="text-gray-400">
              {post.frontMatter.description}
            </span>

            <div className="flex flex-row flex-wrap space-x-4 items-center">
              <Avatar
                src={post.frontMatter.avatar}
                fullName={post.frontMatter.fullName}
              />
              <div className="flex flex-col">
                <h2 className="font-medium">{post.frontMatter.fullName || "Phan Thanh Tùng"} </h2>
                <span className="text-gray-400">{post.frontMatter.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
