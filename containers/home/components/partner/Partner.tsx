import { SectionContainer } from "@components";

/* eslint-disable @next/next/no-img-element */
export const PartnerSection: React.FC = () => {
  const PARTNERS = [
    {
      id: "1",
      src: "/images/home/partner_1.png",
    },
    {
      id: "2",
      src: "/images/home/partner_2.png",
    },
    {
      id: "3",
      src: "/images/home/partner_3.png",
    },
    {
      id: "4",
      src: "/images/home/partner_4.png",
    },
    {
      id: "5",
      src: "/images/home/partner_5.png",
    },
  ];

  return (
    <SectionContainer
      title="Đối tác của chúng tôi"
      subtitle="Cảm thấy hài lòng chỉ sau 8 tuần sử dụng"
    >
      <div className="flex md:flex-row flex-col flex-wrap space-y-8 md:space-x-4 items-center justify-between">
        {PARTNERS.map((p, idx) => (
          <div key={idx}>
            <img className="w-40 h-40" src={p.src} alt={p.id} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
