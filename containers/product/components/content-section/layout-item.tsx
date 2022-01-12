import classNames from "classnames"

type IProps={
    isReverse?:boolean
    layoutFirst:JSX.Element
    layoutSecond:JSX.Element
}
export const LayoutItem:React.FC<IProps>=({isReverse,layoutFirst,layoutSecond})=>{
    return(
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-24">
            <div className={classNames({
                "col-span-3":isReverse,
                "col-span-2":!isReverse
            })}>
                {layoutFirst}
            </div>
            <div className={classNames({
                "col-span-2":isReverse,
                "col-span-3":!isReverse
            })}>
                {layoutSecond}
            </div>
        </div>
    )
}