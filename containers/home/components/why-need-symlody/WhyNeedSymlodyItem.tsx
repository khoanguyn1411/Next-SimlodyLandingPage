/* eslint-disable @next/next/no-img-element */
type Props = {
  src: string;
  content: string;
};
export const WhyNeedSymlodyItem: React.FC<Props> = ({ src, content }) => {
  return (
    <div className="flex items-center justify-center space-x-8">
      <div className="relative w-1/4 flex justify-start h-28">
        <img src={src} alt={content} className="object-contain" />
      </div>
      <span className="leading-relaxed w-3/4 text-2xl">{content}</span>
    </div>
  );
};
