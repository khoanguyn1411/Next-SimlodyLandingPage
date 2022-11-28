import { Avatar } from "@components/elements";
import { Feedback } from "./util";

type Props = Feedback;

export const FeedbackItem: React.FC<Props> = (props) => {
  return (
    <div className="pt-20">
      <div className="relative bg-white border rounded-md p-4">
        <div className="absolute left-0 top-0 flex justify-center	w-full transform -translate-y-1/2">
          <Avatar src={props.src} fullName={props.name} className="w-40 h-40" />
        </div>
        <h3 className="text-base text-gray-500 mt-20">{props.content}</h3>
        <div className="flex flex-col space-y-2 mt-8 items-center justify-center">
          <h2 className="font-medium text-base">{props.name}</h2>
          <span className="text-gray-400">{props.role}</span>
        </div>
      </div>
    </div>
  );
};
