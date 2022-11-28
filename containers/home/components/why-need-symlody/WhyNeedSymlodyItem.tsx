import Image from "next/image";
type Props = {
  src: string;
  content: string;
};
export const WhyNeedSymlodyItem: React.FC<Props> = ({ src, content }) => {
  return (
    <div className="flex items-center justify-center space-x-8">
      <div className="relative w-1/4 h-28">
        <Image src={src} layout="fill" objectFit="contain" alt={content} />
      </div>
      <span className="leading-relaxed w-3/4 text-2xl">{content}</span>
    </div>
  );
};
