
import { ProcessProps } from "@containers/solution/sections";
import { SolutionIcon, PlanIcon, ProductIcon, PlatformIcon, FlexibleIcon, ConnectIcon, OrganizedIcon, PeopleIcon, ManagementIcon } from "./icons";
import {
  ClientIcon,
  DataIcon,
  HiringIcon,
  IncreaseIcon,
  MarketingIcon,
  MoneyIcon,
  ScalabilityIcon,
} from "./icons/process-icon";

import problem_1 from "@containers/solution/images/problem_1.png";
import problem_2 from "@containers/solution/images/problem_2.png";

import medium_1 from "./images/medium_1.png"
import medium_2 from "./images/medium_2.png"

import large_1 from "./images/large_1.png"
import large_2 from "./images/large_2.png"
import { FeatureItemProps } from "./sections/feature-section/feature-item";
import { SolutionProps } from "./sections/solution-section/solution-item";


export const PROCESSES_SMALL: ProcessProps[] = [
  {
    title: "Scalability",
    description:
      "Scalability according to market needs, enterprise needs, with good product architecture",
    icon: <ScalabilityIcon />,
  },
  {
    title: "Client Dependence",
    description:
      "Diversifying your client base is vital to growing a business.Having a client willing to pay on time",
    icon: <ClientIcon />,
  },
  {
    title: "Money Management",
    description:
      "Money management is important when earning money.Financial expert help is needed",
    icon: <MoneyIcon />,
  },
];

export const PROCESSES_MEDIUM: ProcessProps[] = [
  {
    title: "Growing Revenue",
    description:
      "Greater revenue provides more protection against these shocks",
    icon: <ScalabilityIcon />,
  },
  {
    title: "Hiring Employees",
    description:
      "Hiring employees become a primary concern. Businesses need a larger workforce growing",
    icon: <HiringIcon />,
  },
  {
    title: "Marketing",
    description:
      "Focus on promoting marketing to get more markets and users in order to scale up",
    icon: <MarketingIcon />,
  },
];

export const PROCESSES_LARGE: ProcessProps[] = [
  {
    title: "Increasing Profit",
    description:
      "The challenge is more to achieve  expand the customer base than to aggressively drive profits",
    icon: <IncreaseIcon />,
  },
  {
    title: "Hiring Employees",
    description:
      "Hiring employees become a primary concern. Businesses need a larger workforce growing",
    icon: <HiringIcon />,
  },
  {
    title: "Customers Data",
    description:
      "With thousands of users, it is necessary to protect information to avoid risks",
    icon: <DataIcon />,
  },
];

export const FEATURE_SMALL:FeatureItemProps[] = [
  {
    title: "Concept Solution",
    description:
      "We provide plans to tranfer your old company to become more dynamic and faster",
    icon: <SolutionIcon />,
    color: "green",
    href:"/solution/product"
  },
  {
    title: "ERP Plan",
    description: "Sold your problems with KPI, OKRs, EOS",
    icon: <PlanIcon />,
    color: "purple",
    href:"/solution/odoo"
  },
  {
    title: "SaaS Product",
    description: "New technology and platform to work more effeciently",
    icon: <ProductIcon />,
    color: "blue",
    href:"/solution/saas"
  },
];

export const PRICES = [
  {
    title: "Small enterprise",
    price: "$24",
    titleBtn: "Buy Small Enterprise",
    supplies: [
      "5 products",
      "Basic analytics",
      "4 consultants for educate ",
      "4 consultants for educate ",
    ],
    isPopular: false,
  },
  {
    title: "Medium enterprise",
    price: "$56",
    supplies: [
      "5 products",
      "Basic analytics",
      "4 consultants for educate ",
      "4 consultants for educate ",
      "4 consultants for educate ",
      "4 consultants for educate ",
    ],
    titleBtn: "Buy Medium Enterprise",
    isPopular: true,
  },
  {
    title: "Large enterprise",
    price: "$90",
    titleBtn: "Buy Large Enterprise",
    supplies: [
      "5 products",
      "Basic analytics",
      "4 consultants for educate ",
      "4 consultants for educate ",
      "4 consultants for educate ",
      "4 consultants for educate ",
      "4 consultants for educate ",
    ],
    isPopular: false,
  },
];

export const SOLUTION_SMALL:SolutionProps[] = [
  {
    icon: <PlatformIcon />,
    label: "Platform",
    color: "orange",
    position: "left",
    title: "Just one platform",
    description:
      "Whatever your niche, we have the flexibility and customization you need to kickstart your team to turn your idea into a business. And notably, they are on the same platform as the EOS model™",
    srcImg: problem_1,
  },
  {
    icon: <FlexibleIcon />,
    label: "Adapt",
    color: "green",
    position: "right",
    title: "Flexible and easy to use",
    description:`Tungtung provide products easy to use and flexible enough to support any type of project.\nIf you have used tools like Jira, Asana, Trello. Surely this product is completely simple for you.`,
    srcImg: problem_2,
  },
];

export const SOLUTION_MEDIUM:SolutionProps[] = [
  {
    icon: <ConnectIcon />,
    label: "Method",
    color: "purple",
    position: "left",
    title: "Connect tools and teams",
    description:
      "Avoid silos early by integrating your teams and SaaS tools to keep vision transparent, knowledge central, and actions agile",
    srcImg: problem_1,
  },
  {
    icon: <OrganizedIcon />,
    label: "Organization",
    color: "green",
    position: "right",
    title: "Get organized",
    description:`Bring every one, rock and scorecard together in one space so nothing falls through the cracks`,
    srcImg: problem_2,
  },
];

export const SOLUTION_LARGE:SolutionProps[] = [
  {
    icon: <PeopleIcon />,
    label: "People",
    color: "blue",
    position: "left",
    title: "Empower your team. Transform your business.",
    description:
      "Help companies to increase the inside traction to achieve annual goals. </br> Make it easy for companies to implement their vision.",
    srcImg: large_1,
  },
  {
    icon: <ManagementIcon />,
    label: "Management",
    color: "green",
    position: "right",
    title: "Going deep into the nature of human management",
    description:`Helping employees to own (ownership) important goals which are self-proposed and need to be done proactively`,
    srcImg: large_2,
  },
];

