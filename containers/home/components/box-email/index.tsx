import { MailIcon, SectionContainer } from "@components"
import { Button, Input } from "@components/elements"
import { useState } from "react"

export const BoxEmail: React.FC = () => {
  const [email, setEmail] = useState("")
  return (
    <SectionContainer>
      <div className="border text-gray-400 bg-white rounded-md shadow-md items-center grid grid-cols-2 gap-4 px-12 py-8">
        <div className="w-96">
          <h2 className="text-2xl font-medium text-primary-800">Quản lý tổ chức đơn giản và dễ dàng hơn.</h2>
        </div>

        <div className="flex items-center space-x-4 flex-1">
          <Input bordered={true} placeholder="Vui lòng điền Email của bạn tại đây"
            prefix={<MailIcon />} value={email} onChange={(e) => setEmail(e.target.value)} />
          <div className="w-72">
            <Button text="Trải nghiệm ngay" type="primary" onClick={null} block />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}