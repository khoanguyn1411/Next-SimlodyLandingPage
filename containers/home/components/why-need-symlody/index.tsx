import { Item } from "./Item"

export const WhyNeedSymlody: React.FC = () => {
  const ITEMS = [
    {
      src: "/images/home/need_symlody_1.png",
      content: "Tập trung vào hiệu suất công việc"
    },
    {
      src: "/images/home/need_symlody_2.png",
      content: "Liên kết giữa thành viên và tổ chức"
    },
    {
      src: "/images/home/need_symlody_3.png",
      content: "Xác định mục tiêu cho đội nhóm"
    },
    {
      src: "/images/home/need_symlody_4.png",
      content: "Dữ liệu tập trung tại 1 nơi"
    },
  ]

  return (
    <section className="container py-12">
      <div className="flex flex-col">
        <h2 className="text-2xl text-gray-800 font-medium text-center">
          Tại sao Leader cần Symlody?
        </h2>

        <h3 className="mt-4 text-gray-400 text-base text-center">
          Công cụ để xây dựng tổ chức năng suất và hiệu quả
        </h3>

        <div className="grid grid-cols-2 gap-8 mt-8 justify-between items-center">
          {ITEMS.map((item,idx)=>(
            <Item key={idx} src={item.src} content={item.content}/>
          ))}
        </div>
      </div>
    </section>
  )
}