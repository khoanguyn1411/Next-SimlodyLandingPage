/* eslint-disable @next/next/no-img-element */
type Props = {
  src: string;
  content: string;
};
export const WhyNeedSymlodyItem: React.FC<Props> = ({ src, content }) => {
  return (
    <div className="flex items-center justify-center space-x-8">
      <span className="flex items-center">
        <img className="w-32 h-32 object-cover" src={src} alt="need symlody" />
      </span>

      <span className="text-lg">{content}</span>
    </div>
  );
};
