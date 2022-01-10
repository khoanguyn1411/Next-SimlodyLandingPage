
type IProps={
    title:string
    description:string
}
export const ColItem:React.FC<IProps>=({title,description})=>{
    return(
        <div className="space-y-4 flex flex-col  w-72">
            <h2 className="text-3xl font-semibold">{title}</h2>

            <span>{description}</span>
        </div>
    )
}