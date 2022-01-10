import { Footer } from './footer';
import { Header } from './header';
import {Head} from "./head"
type IProps={
    pageKey?:string
    pageTitle?:string
    children:JSX.Element
}

export const LayoutBase:React.FC<IProps>=({pageKey,pageTitle,children})=>{
    return(
        <>
        <Head pageTitle={pageTitle}/>

        <Header pageKey={pageKey}/>
        <div>
            <main>
                {children}
            </main>
        </div>
        <Footer/>
        </>
    )
}