import { LayoutBase } from "@components"
import { ProductContainer } from "@containers"

const ProductPage=()=>{
    return(
        <LayoutBase
            pageKey="Product"
            head={{
                pageTitle: 'Product',
                pageCoverImageRectangle: '/images/site-covers/product.jpg'
            }}
        >
            <ProductContainer/>
        </LayoutBase>
    )
}

export default ProductPage