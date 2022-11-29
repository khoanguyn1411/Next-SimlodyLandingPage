import { Avatar } from "@components/elements";
import { Feedback } from "./util";

type Props = Feedback;

export const FeedbackItem: React.FC<Props> = (props) => {
  return (
    <div className="pt-20 flex h-full">
      <div className="relative bg-white border rounded-md p-4">
        <div className="absolute left-0 top-0 flex justify-center	w-full transform -translate-y-1/2">
          <Avatar src={props.src} fullName={props.name} className="w-40 h-40" />
        </div>
        <div className="flex flex-col gap-8 justify-between pt-20 h-full">
          <p className="text-base text-gray-500">{props.content}</p>
          <div className="flex flex-col space-y-2 items-center justify-center">
            <h2 className="font-medium text-base">{props.name}</h2>
            <span className="text-gray-400">{props.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
