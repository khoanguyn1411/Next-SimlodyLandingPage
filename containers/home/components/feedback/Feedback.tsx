import { SectionContainer } from "@components";
import { Avatar } from "@components/elements";

const FeedbackItem = (props) => {
  return (
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
  );
};

export const FeedbackSection: React.FC = () => {
  const FEEDBACKS = [
    {
      id: "1",
      src: "/images/home/feedback_partner_2.png",
      content:
        "“Ban đầu mình chỉ thử chuyển dổi vào việc quản lý tổ chức. Mình cũng không nghĩ rằng Symody lại giúp đỡ tổ chức mình đơn giản hóa các quy trình đến như vậy. “ ",
      name: "Anh Hoàng Minh",
      role: "Chủ nhiệm CLB E-Commerce nhiệm kì 2020-2021",
    },
    {
      id: "2",
      src: "/images/home/feedback_partner_1.png",
      content:
        "“Symlody đã thật sự giải quyết được nổi đau mà bấy lâu nay tổ chức của mình đang đối mặt. Các thành viên trong CLB đã có thể định hướng rõ ràng các mục tiêu khi tham gia tổ chức “ ",
      name: "Chị Diễm Quỳnh",
      role: "Chủ nhiệm CLB IBT nhiệm kì 2020-2021",
    },
  ];

  return (
    <SectionContainer
      title="Khách hàng nói gì về Symlody?"
      className="flex flex-1 bg-[url('/images/home/bg_feedback.png')] bg-no-repeat bg-[length:100%_100%]"
    >
      <h3 className="mt-4 text-base text-gray-400 text-center">
        Giải quyết nỗi đau mà người lãnh đạo đang gặp
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-24 justify-center">
        {FEEDBACKS.map((feedback, idx) => (
          <FeedbackItem key={idx} {...feedback} />
        ))}
      </div>
    </SectionContainer>
  );
};
