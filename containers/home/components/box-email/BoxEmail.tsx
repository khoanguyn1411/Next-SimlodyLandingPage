import { MailIcon, SectionContainer } from "@components";
import { Button, Input } from "@components/elements";
import { BackgroundHeart } from "@components/icons/BackgroundHeart";
import { useState } from "react";
import { toast } from "react-toastify";

const GOOGLE_API_URL =
  "https://script.google.com/macros/s/AKfycbyccwaPOlK3RGn-Y6x15EJvLT-euGc138rybxqqIaAu68Yx46AUkSsFtaalTWaeW7Ah/exec";

export const BoxEmail: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleSubmitEmail = async () => {
    const formData = new FormData();
    formData.append("email", email);
    setIsLoading(true);
    try {
      await fetch(GOOGLE_API_URL, {
        method: "POST",
        body: formData,
      });
      toast.success("Gửi email thành công");
    } catch (e) {
      toast.error("Gửi email thất bại");
    }
    setIsLoading(false);
  };
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
              loading={isLoading}
              text="Trải nghiệm ngay"
              type="primary"
              onClick={handleSubmitEmail}
              block
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
