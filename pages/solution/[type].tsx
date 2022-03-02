import { LayoutBase } from "@components"
import { SolutionContainer } from "@containers"
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";

const getPageHead = (type: string): {
  title: string
  cover: string
} => {
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
}

type IProps = {
  pageTitle: string
  pageCoverImageRectangle: string;
}

const SolutionPage: NextPage<IProps> = ({ pageTitle, pageCoverImageRectangle }) => {
    const router = useRouter();
    const type = router.query?.type as string;

    return(
        <LayoutBase
            pageKey="Solution"
            head={{
                pageTitle,
                pageCoverImageRectangle
            }}
        >
            <SolutionContainer/>
        </LayoutBase>
    )
}

SolutionPage.getInitialProps = async (
  context: NextPageContext
) => {
  const type = context?.query?.type as string;
  const pageHead = getPageHead(type)

  return {
    pageTitle: pageHead.title,
    pageCoverImageRectangle: pageHead.cover
  };
};

export default SolutionPage
