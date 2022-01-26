export type PersonProps = {
  avatar: string;
  fullName: string;
  position: string;
  description: string;
  delay: string;
};

export const teams: PersonProps[] = [
  {
    avatar: "/images/teams/dang.png",
    fullName: "Huu Dang",
    position: "Product Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis pharetra felis, ac volutpat purus mattis sit amet... ",
    delay: "0",
  },
  {
    avatar: "/images/teams/tung.png",
    fullName: "Thanh Tung",
    position: "CEO | Founder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis pharetra felis, ac volutpat purus mattis sit amet... ",
    delay: "200",
  },
  {
    avatar: "/images/teams/trong.png",
    fullName: "Nguyen Trong",
    position: "CTO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis pharetra felis, ac volutpat purus mattis sit amet... ",
    delay: "400",
  },
];
