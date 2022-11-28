import { MailIcon, SectionContainer } from "@components";
import { Button, Input } from "@components/elements";
import { BackgroundHeart } from "@components/icons/BackgroundHeart";
import { useState } from "react";

export const BoxEmail: React.FC = () => {
  const [email, setEmail] = useState("");
  return (
    <SectionContainer
      className="py-40 relative"
      background={<BackgroundHeart />}
    >
      <div className="border text-gray-400 bg-white rounded-md shadow-xl items-center grid grid-cols-1 lg:grid-cols-2 gap-4 px-12 py-8">
        <div className="flex justify-center w-96 items-center">
          <h2 className="text-2xl font-semibold text-primary-800">
            Quản lý tổ chức đơn giản và dễ dàng hơn.
          </h2>
        </div>

        <div className="flex items-center space-x-4 relative">
          <Input
            bordered={true}
            className="pr-[155px]"
            placeholder="Vui lòng điền Email của bạn tại đây"
            prefix={<MailIcon />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="min-w-max absolute right-0">
            <Button
              text="Trải nghiệm ngay"
              type="primary"
              onClick={null}
              block
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
