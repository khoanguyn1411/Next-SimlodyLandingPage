import { SectionContainer } from "@components"

const FeatureItem = (props) => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-between">
      {!props.isRight &&
        <div className="col-span-2">
          <div className="">
            <img className="w-full  object-contain" src={props.image} alt="image" />
          </div>
        </div>
      }

      <div className="flex flex-col col-span-1">
        <h2 className="text-2xl font-medium text-primary-800">{props.title}</h2>
        <span className="mt-2 text-gray-400 text-base">{props.description}</span>
        <div className="flex flex-col mt-6 space-y-4">
          {props.contents.map((content, idx) => (
            <div key={idx} className='flex items-center space-x-2 text-base'>
              <i className="fas fa-check-circle text-primary-800" />
              <span>{content}</span>
            </div>
          ))}
        </div>
      </div>

      {props.isRight &&
        <div className="col-span-2">
          <div className="">
            <img className="w-full  object-contain" src={props.image} alt="image" />
          </div>
        </div>
      }
    </div>
  )
}

export const FeatureSection: React.FC = () => {
  const FEATURES = [
    {
      id: "1",
      title: "Quản lý công việc",
      description: "Hỗ trợ cấp quản lý theo dõi tiến độ công việc của các phòng ban trên ứng dụng Symlody",
      contents: ["Giao diện thân thiện", "Thông tin minh bạch", "Tương tác nhanh chóng"],
      image: "/images/product/feature_1.png",
      isRight:true
    },
    {
      id: "2",
      title: "Quản lý thành viên",
      description: "Hỗ trợ cấp quản lý theo dõi tiến độ công việc của các phòng ban trên ứng dụng Symlody",
      contents: ["Giao diện thân thiện", "Thông tin minh bạch", "Tương tác nhanh chóng"],
      image: "/images/product/feature_1.png",
      isRight:false
    },
    {
      id: "3",
      title: "Quản lý tài sản",
      description: "Hỗ trợ cấp quản lý theo dõi tiến độ công việc của các phòng ban trên ứng dụng Symlody",
      contents: ["Giao diện thân thiện", "Thông tin minh bạch", "Tương tác nhanh chóng"],
      image: "/images/product/feature_1.png",
      isRight:true
    },
    {
      id: "4",
      title: "Quản lý sự kiện",
      description: "Hỗ trợ cấp quản lý theo dõi tiến độ công việc của các phòng ban trên ứng dụng Symlody",
      contents: ["Giao diện thân thiện", "Thông tin minh bạch", "Tương tác nhanh chóng"],
      image: "/images/product/feature_1.png",
      isRight:false
    },
    {
      id: "5",
      title: "Quản lý mục tiêu",
      description: "Hỗ trợ cấp quản lý theo dõi tiến độ công việc của các phòng ban trên ứng dụng Symlody",
      contents: ["Giao diện thân thiện", "Thông tin minh bạch", "Tương tác nhanh chóng"],
      image: "/images/product/feature_1.png",
      isRight:true
    },
  ]
  return (
    <SectionContainer title="Tính năng nổi bật">
      <div className="mt-12">
        {FEATURES.map((feature, idx) => (
          <FeatureItem key={`${idx + feature.id}`} {...feature} />
        ))}
      </div>
    </SectionContainer>
  )
}