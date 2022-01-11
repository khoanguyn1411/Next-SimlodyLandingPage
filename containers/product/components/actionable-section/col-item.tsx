
type IProps={
    title:string
    description:string
}
export const ColItem:React.FC<IProps>=({title,description})=>{
    return(
        <div className="space-y-4 flex flex-col flex-1 w-72">
            <h2 className="text-3xl font-semibold">{title}</h2>

            <span className="flex-1">{description}</span>
        </div>
    )
}