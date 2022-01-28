/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element
// eslint-disable-next-line @next/next/no-img-element
import Image from "next/image"
type IProps = {
  post: {
    slug: string;
    frontMatter: {
      title: string;
      description: string;
      thumbnailUrl: string;
      date: string;
      resource?: string;
      tag: string;
      link: string;
    };
  };
};

const getColorFromText = (value: string) => {
  const text = value.split("")[0];
  switch (text) {
    case "t":
      return "#4ade80";
    case "b":
      return "#60a5fa";
    case "p":
      return "#f87171";

    default:
      return "#4ade80";
  }
  return;
};

export const BlogItem: React.FC<IProps> = ({ post }) => {
  const handleOpenLink = () => {
    window.open(post.frontMatter.link, "_blank");
  };

  return (
    <div
      onClick={handleOpenLink}
      className="rounded-lg mb-3 flex flex-col justify-center cursor-pointer transition-all duration-300 hover:shadow-primary-500 shadow-md max-w-xl bg-white"
    >
      <div className="flex flex-1 h-64">
        {/* <img
          src={post.frontMatter.thumbnailUrl}
          alt="thumbnail"
          className="w-full h-full object-contain rounded-t-md"
        /> */}
        <Image
          src={post.frontMatter.thumbnailUrl}
          className="rounded-t-md"
          alt="thumbnail"
        
          // layout="responsive"
          width={480}
          height={256}
          objectFit="cover"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex-1 h-64">
        <div className="flex flex-col space-y-4">
          <h5
            className=""
            style={{ color: getColorFromText(post.frontMatter.tag) }}
          >
            #{post.frontMatter.tag}
          </h5>
          <h5 className="font-medium text-xl line-clamp-2">
            {post.frontMatter.title}
          </h5>
          <span className="text-gray-400 line-clamp-3">
            {post.frontMatter.description}
          </span>

          <div className="flex flex-row flex-wrap justify-between items-center">
            <h2 className="font-medium">source: {post.frontMatter.resource}</h2>
            <span className="text-gray-400">{post.frontMatter.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
