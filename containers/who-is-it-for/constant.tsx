import {
  PlanningIcon,
  CollaborationIcon,
  VisualizationIcon,
} from "@containers/solution/icon";
import { ProcessProps } from "@containers/solution/sections";
import { SolutionIcon,PlanIcon,ProductIcon } from "./icons";

export const PROCESSES_SMALL: ProcessProps[] = [
  {
    title: "Scalability",
    description:
      "Scalability according to market needs, enterprise needs, with good product architecture ",
    icon: <PlanningIcon />,
  },
  {
    title: "Scalability",
    description:
      "Scalability according to market needs, enterprise needs, with good product architecture ",
    icon: <CollaborationIcon />,
  },
  {
    title: "Scalability",
    description:
      "Scalability according to market needs, enterprise needs, with good product architecture ",
    icon: <VisualizationIcon />,
  },
];

export const FEATURE_SMALL = [
  {
    title: "Concept Solution",
    description:
      "We provide plans to tranfer your old company to become more dynamic and faster",
    srcImg: <SolutionIcon/>,
  },
  {
    title: "ERP Plan",
    description: "Sold your problems with KPI, OKRs, EOS",
    srcImg: <PlanIcon/>,
  },
  {
    title: "SaaS Product",
    description: "New technology and platform to work more effeciently",
    srcImg: <ProductIcon/>,
  },
];

export const PRICES=[
  {
    title:"Small enterprise",
    price:"$24",
    titleBtn:"Buy Small Enterprise",
    supplies:["5 products","Basic analytics","4 consultants for educate ","4 consultants for educate "],
    isPopular:false,
  },
  {
    title:"Medium enterprise",
    price:"$56",
    supplies:["5 products","Basic analytics","4 consultants for educate ","4 consultants for educate ","4 consultants for educate ","4 consultants for educate "],
    titleBtn:"Buy Medium Enterprise",
    isPopular:true,
  },
  {
    title:"Large enterprise",
    price:"$90",
    titleBtn:"Buy Large Enterprise",
    supplies:["5 products","Basic analytics","4 consultants for educate ","4 consultants for educate ","4 consultants for educate ","4 consultants for educate ","4 consultants for educate "],
    isPopular:false,
  },
]