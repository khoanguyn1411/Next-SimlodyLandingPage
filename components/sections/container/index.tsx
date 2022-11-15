type Props = {
  title?: string
}
export const SectionContainer: React.FC<Props> = ({ title, children }) => {
  return (
    <section className="py-12">
      <div className="container">
        {title &&
          <h2 className="text-2xl text-gray-800 text-center font-medium">Đối tác của chúng tôi</h2>
        }
        {children}
      </div>
    </section>
  )
}