export interface Feedback {
  readonly id: string | number;
  readonly src: string;
  readonly content: string;
  readonly name: string;
  readonly role: string;
}

export interface SlideList {
  readonly id: string;
  readonly cardList: readonly Feedback[];
}

const CARD_PER_SLIDE = 2;

export const FEEDBACKS: readonly Feedback[] = [
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
