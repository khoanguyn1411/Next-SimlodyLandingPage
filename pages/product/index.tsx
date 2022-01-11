import { LayoutBase } from "@components"
import { ProductContainer } from "@containers"

const ProductPage=()=>{
    return(
        <LayoutBase pageKey="Product" pageTitle="Product">
            <ProductContainer/>
        </LayoutBase>
    )
}

export default ProductPage