import Image from 'next/image';
import image1 from "../images/image1.jpg"
type IProps={
    title:string
    description:string
    subDescription:string[]
}
export const ContentItem:React.FC<IProps>=({title,description,subDescription=[]})=>{
    return(
        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-8 flex flex-col justify-center">
                <h2 className="text-3xl font-semibold">{title}</h2>

                <span className="text-base">{description}</span>

                <div className="space-y-2">
                {subDescription.map((des,index)=>(
                    <div key={index} className="space-x-2 flex">
                    <span className="w-5 h-5 bg-primary-200 text-primary-400 rounded-full flex items-center justify-center "
                    style={{fontSize:"10px"}}
                    >
                        <i className="fa fa-check"/>
                    </span>
    
                    <span className="text-base flex-1 text-gray-400">{des}</span>
                    </div>
                ))}
                </div>
            </div>

            <div
            	style={{
                    backgroundImage: "url('/home/background.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'right',
                }}
            >
            <Image src={image1} alt='Background 3' />

            </div>
        </div>
    )
}