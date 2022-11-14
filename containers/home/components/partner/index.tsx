/* eslint-disable @next/next/no-img-element */
export const PartnerSection: React.FC = () => {
  const PARTNERS = [
    {
      id: "1",
      src: "/images/home/partner_1.png"
    },
    {
      id: "2",
      src: "/images/home/partner_2.png"
    },
    {
      id: "3",
      src: "/images/home/partner_3.png"
    },
    {
      id: "4",
      src: "/images/home/partner_4.png"
    },
  ]

  return (
    <section className="container py-12">
      <h2 className="text-2xl text-gray-800 text-center font-medium">Đối tác của chúng tôi</h2>
      <h3 className="mt-4 text-base text-gray-400 text-center">Cảm thấy hài lòng chỉ sau 8 tuần sử dụng</h3>
      <div className="flex items-center justify-between mt-8">
        {PARTNERS.map((p, idx) => (
          <div key={idx}>
            <img className="w-40 h-40" src={p.src} alt={p.id} />
          </div>
        ))}
      </div>
    </section>
  )
}