import { LayoutBase } from "@components"
import { SolutionContainer } from "@containers"
import { useRouter } from "next/router";
import { useMemo } from "react";

const SolutionPage: React.FC = () => {
    const router = useRouter();
    const type = router.query?.type as string;

    const pageHead: {
        title: string
        cover: string
      } = useMemo(() => {
        switch (type) {
          case "product":
            return {
              title: "Product Concept | Solution",
              cover: "/images/site-covers/product.jpg"
            };

          case "saas":
            return {
              title: "Software As A Service | Solution",
              cover: "/images/site-covers/sass.jpg"
            };

          case "odoo":
            return {
              title: "Odoo | Solution",
              cover: "/images/site-covers/odoo.jpg"
            };

          default:
            return {
              title: "Unknown",
              cover: ""
            };
        }
      }, [type]);

    return(
        <LayoutBase
            pageKey="Solution"
            head={{
                pageTitle: pageHead.title,
                pageCoverImageRectangle: pageHead.cover
            }}
        >
            <SolutionContainer/>
        </LayoutBase>
    )
}

export default SolutionPage