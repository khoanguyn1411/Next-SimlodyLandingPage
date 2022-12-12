import { MailIcon, SectionContainer } from "@components";
import { Button, Input } from "@components/elements";
import { BackgroundHeart } from "@components/icons/BackgroundHeart";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const GOOGLE_API_URL =
  "https://script.google.com/macros/s/AKfycbyccwaPOlK3RGn-Y6x15EJvLT-euGc138rybxqqIaAu68Yx46AUkSsFtaalTWaeW7Ah/exec";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const ERROR_MESSAGES = {
  emptyField: "Vui lòng nhập trường này.",
  notEmail: "Trường này phải là email.",
};

export const BoxEmail: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>(
    ERROR_MESSAGES.emptyField
  );
  const [isClickedSubmit, setIsClickedSubmit] = useState<boolean>(false);
  const [isShowError, setIsShowError] = useState<boolean>(false);

  const handleSubmitEmail = async () => {
    setIsClickedSubmit(true);
    if (email === "") {
      setErrorMessage(ERROR_MESSAGES.emptyField);
      setIsShowError(true);
      return;
    }
    if (EMAIL_REGEX.test(email) === false) {
      setIsShowError(true);
      setErrorMessage(ERROR_MESSAGES.notEmail);
      return;
    }
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
  const shouldShowError = isShowError && isClickedSubmit;

  useEffect(() => {
    if (email === "") {
      setErrorMessage(ERROR_MESSAGES.emptyField);
      setIsShowError(true);
      return;
    }
    setIsShowError(false);
  }, [email]);

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

        <div className="flex relative">
          <div className="w-full flex flex-col gap-2">
            <Input
              bordered
              className="pr-[155px]"
              placeholder="Vui lòng điền Email của bạn tại đây"
              prefix={<MailIcon />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {shouldShowError && (
              <span className="text-red-400">{errorMessage}</span>
            )}
          </div>
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
