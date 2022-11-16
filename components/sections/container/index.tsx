import classNames from "classnames"
type Props = {
  title?: string
  className?: string
}
export const SectionContainer: React.FC<Props> = ({ title, className, children }) => {
  return (
    <section className={classNames("py-12", className)}

    >
      <div className="container"

      >
        {title &&
          <h2 className="text-2xl text-gray-800 text-center font-medium">{title}</h2>
        }
        {children}
      </div>
    </section>
  )
}