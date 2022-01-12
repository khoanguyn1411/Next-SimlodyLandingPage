type IProps ={
    icon?:JSX.Element
    title:string,
    description:string
}
export const CartItem:React.FC<IProps>=({icon,title,description})=>{
    return(
        <div className="relative px-14 py-16 rounded-md bg-gray-50 shadow-md space-y-4 flex flex-col items-center justify-center">
           <div className="rounded-md bg-primary-500 absolute top-0 w-14 h-14 -mt-8 flex items-center justify-center">
               <span>{icon}</span>
           </div>
           
            <h2 className="text-2xl font-semibold">{title}</h2>
            <span className="text-center">{description}</span>
        </div>
    )
}