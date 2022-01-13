import { ITab } from "@components/elements";
import { CollaborationIcon, PlanningIcon, VisualizationIcon } from "./icon";
import problem_1 from "./images/problem_1.png";
import problem_2 from "./images/problem_2.png";
import problem_3 from "./images/problem_3.png";
import problem_4 from "./images/problem_4.png";

import product_1 from "./images/product_1.png"
import product_2 from "./images/product_2.png"
import product_3 from "./images/product_3.png"
import product_4 from "./images/product_4.png"

import validate_1 from "./images/validate_1.png"
import validate_2 from "./images/validate_2.png"
import validate_3 from "./images/validate_3.png"
import validate_4 from "./images/validate_4.png"


import { ProcessProps } from "./sections";

export const PROCESSES_PRODUCT:ProcessProps[] = [
  {
    title: "Planning",
    description:
      "Quickly import your data and hit the ground running with our drag-and-drop editor",
    icon: <PlanningIcon />,
  },
  {
    title: "Collaboration",
    description: "Share, discuss and track activity on your roadmap",
    icon: <CollaborationIcon />,
  },
  {
    title: "Visualization",
    description:
      "Personalize your plan with custom color palettes and flexible export options",
    icon: <VisualizationIcon />,
  },
];

export const PROCESSES_SASS:ProcessProps[] = [
  {
    title: "Accessibility",
    description:
      "Ability to run via an internet browser 24/7 from any device",
    icon: <PlanningIcon />,
  },
  {
    title: "Management",
    description: "No installation, equipment updates or traditional licensing management",
    icon: <CollaborationIcon />,
  },
  {
    title: "Cost Effective",
    description:
      "No upfront hardware costs and flexible payment methods such as pay-as-you-go models",
    icon: <VisualizationIcon />,
  },
];


export const CONTENTS_PROBLEMS = [
  {
    title: "Discover problems",
    description: "",
    subDescription: [
      "Findings about the users’ context, common scenarios, goals",
      "Various forms: clickable Invision prototype, low fidelity wireframe, storyboards, lightweight coded prototype",
      "Optimize Average and Totals Colums",
    ],
    isReverse: false,
    srcImg: problem_1,
  },
  {
    title: "Define Solutions",
    description: "",
    subDescription: [
      "Findings about the users’ context, common scenarios, goals",
      "Various forms: clickable Invision prototype, low fidelity wireframe, storyboards, lightweight coded prototype",
      "Optimize Average and Totals Colums",
    ],
    isReverse: true,
    srcImg: problem_2,
  },
  {
    title: "Concept Validation",
    description: "",
    subDescription: [
      "Shortlisted concepts are tested using a throwaway prototype to quickly solicit feedback from customers. ",
      "This can come in the form of a clickable Invision prototype, low fidelity wireframes, or a lightweight coded prototype. ",
    ],
    isReverse: false,
    srcImg: problem_3,
  },
  {
    title: "Initial Discovery Complete",
    description: "",
    subDescription: [
      "Have a clear set of product requirements",
      "We can begin engineering scoping and estimation for this initial set of requirements.",
      "Discuss with your Product Marketing Manager: competitive analysis and preliminary naming/messaging.",
      "Keep in mind any security/compliance implications (data deletion, data locality, encryption at rest, enhanced DR).",
    ],
    isReverse: true,
    srcImg: problem_4,
  },
];

export const CONTENTS_PRODUCTS = [
  {
    title: "Design Iterations",
    description: "",
    subDescription: [
      "Early-stage foundational work – nav structure, interaction model, information architecture and user flows",
      "Mid-stage interface design - approve use pre-existing , fleshing out interactions, visual design",
      "Dev support – designers pair with engineers to discuss any ad hoc UX decisions, design QA",
      "Request support from User Research, if needed.",
    ],
    isReverse: false,
    srcImg: product_1,
  },
  {
    title: "Localization & Documentation",
    description: "",
    subDescription: [
      "Make a plan with your Documentation writer for Help Center content and Community plans.",
      "Diagnostic endpoints are implemented for your feature or service.",
      "SLAs, SLOs, and SLIs can be measured (and are hopefully achievable!).",
    ],
    isReverse: true,
    srcImg: product_2,
  },
  {
    title: "Acceptance Testing Complete",
    description: "",
    subDescription: [
      "Complete a final pass of manual and automated acceptance testing.",
      "End-to-end testing of downstream systems should also be undertaken.",
    ],
    isReverse: false,
    srcImg: product_3,
  },
  {
    title: "Code Complete",
    description: "",
    subDescription: [
      "The Development team agrees that no entirely new source code will be added to this release.",
      "The product/feature has been designed, coded, and tested",
      "GA-Ready",
    ],
    isReverse: true,
    srcImg: product_4,
  },
];

export const CONTENTS_VALIDATE = [
  {
    title: "Validation",
    description: "",
    subDescription: [
      "These milestones can (and should) overlap with the Development Phase",
      "Alpha - We're not Feature Complete, but we can begin testing some functionality, ideas, and concepts",
      "Beta - We’re Feature Complete with restrictions on types of customers who can use the produce/feature",
      "During each phase, collect feedback from users with data, survey or interview",
    ],
    isReverse: false,
    srcImg: validate_1,
  },
  {
    title: "Internal Validation",
    description: "",
    subDescription: [
      "Ops agrees to support what you want to deliver",
      "You've completed Security Review, Compliance Review, and TechReview, if applicable",
      "Review the pre-launch checklist to ensure you've covered the things you will need to complete before launch",
    ],
    isReverse: true,
    srcImg: validate_2,
  },
  {
    title: "Internal Training",
    description: "",
    subDescription: [
      "Sales Enablement, success Enablement, advocacy enablement",
      "We may be doing a slow roll-out to assess and address any compatibility and scalability issues",
      "The product/feature is commercially available, meaning it can be purchased or is part of a purchased plan"
    ],
    isReverse: false,
    srcImg: validate_3,
  },
  {
    title: "Public & Post Launch",
    description: "",
    subDescription: [
      "This is when we announce the product/feature",
      "Talking to users and iterating on the UX",
      "Follow up survey with users, post-launch data analysis",
    ],
    isReverse: true,
    srcImg: validate_4,
  },
];

export const CONTENTS_CENTRALIZING = [
  {
    title: "Adapt Customer Environment",
    description: "",
    subDescription: [
      "Better deliver applications and services",
      "SaaS developers also ensure their solution easily integrates with customer environments ( Cloud, Hybrid,..)",
      "SaaS providers should build APIs that ease this process",
    ],
    isReverse: false,
    srcImg: validate_1,
  },
  {
    title: "Data Intergration",
    description: "",
    subDescription: [
      "Data integration provides easy, fast connections between all your applications and data stores",
      "From data integrity and instant data availability, to powerful business insights and greater efficiency",
    ],
    isReverse: true,
    srcImg: validate_2,
  },
  {
    title: "Leverage Data Integration",
    description: "",
    subDescription: [
      "Your website AND product should have analytics built in",
      "Key information such as which parts of the SaaS product are used a lot, how to track errors in the product",
    ],
    isReverse: false,
    srcImg: validate_3,
  },
];

export const CONTENTS_INTEGRATING = [
  {
    title: "Everything ‘’As a service’’",
    description: "",
    subDescription: [
      "Transitioning to SaaS providers can be a true paradigm shift impacting people, technology, and processes",
      "Save time with automated operations",
    ],
    isReverse: false,
    srcImg: validate_1,
  },
  {
    title: "Update Regularly",
    description: "",
    subDescription: [
      "Stay up to date and remain competitive on a technical level every month",
      "Standardize your configurations, implement automation whenever possible and operate agilely",
    ],
    isReverse: true,
    srcImg: validate_2,
  },
];

export const CONTENTS_REVOLUTION = [
  {
    title: "Monthly Recurring Revenue (MRR)",
    description: "",
    subDescription: [
      "Instead of paying once for the right to download a product, users subscribe to a SaaS product or solution",
      "The entire pricing model shifts from annual large-chunk payments to much smaller monthly payments per customer",
    ],
    isReverse: false,
    srcImg: validate_1,
  },
  {
    title: "Focus Heavily on Customer",
    description: "",
    subDescription: [
      "Keep your product updated and highly responsive to emergent customer needs in order to stay relevant",
      "Making sure customer know where end customers are along this path to decide how and when to upsell successfully",
    ],
    isReverse: true,
    srcImg: validate_2,
  },
];

export const CONTENTS_ADAPT = [
  {
    title: "Shifting a business model",
    description: "",
    subDescription: [
      "Service level agreements (SLAs)  and providing more ongoing support at all levels – software, cloud",
      "Ensuring key performance indicators (KPIs) are met for business continuity or timely updates (24/7 support)",
    ],
    isReverse: false,
    srcImg: validate_1,
  },
  {
    title: "Security and Compliance",
    description: "",
    subDescription: [
      "Include processes that determine how long the data is stored and how it is removed from any databases",
      "Processes necessary to meet regulations and data security are in place before a company launches its application",
    ],
    isReverse: true,
    srcImg: validate_2,
  },
];

export const CONTENTS_STAFFING = [
  {
    title: "Building Out a SaaS solution",
    description: "",
    subDescription: [
      "Adopt an end-to-end, multi-disciplinary approach, including specialists in many cloud environments, CI/CD, compliance",
      "Ensuring key performance indicators (KPIs) are met for business continuity or timely updates (24/7 support)",
    ],
    isReverse: false,
    srcImg: validate_1,
  },
  {
    title: "Development Services",
    description: "",
    subDescription: [
      "Save money when developing and deploying a SaaS solution can utilize multi-disciplinary development services",
      "Known as flexible R&D, enables companies to tap into the world’s best talent but only pay for services",
    ],
    isReverse: true,
    srcImg: validate_2,
  },
];

// section Tabs
export const TABS_PRODUCT: ITab[] = [
  {
    key: "PROBLEMS",
    name: "Discover Problems",
  },
  {
    key: "PRODUCT",
    name: "Development Product",
  },
  {
    key: "VALIDATE",
    name: "Validate & Roll-out",
  },
];

export const TABS_SASS: ITab[] = [
  {
    key: "CENTRALIZING",
    name: "Centralizing Operations",
  },
  {
    key: "INTEGRATING",
    name: "Integrating With Others",
  },
  {
    key: "REVOLUTION",
    name: "New Model Revolution",
  },
  {
    key: "ADAPT",
    name: "Adapt Environment",
  },
  {
    key: "STAFFING",
    name: "Smart Staffing",
  },
];

export const TABS_ODOO: ITab[] = [
  {
    key: "HUMAN",
    name: "Human Resource",
  },
  {
    key: "SALES",
    name: "Sales CRM",
  },
  {
    key: "MARKETING",
    name: "Marketing",
  },
  {
    key: "SERVICE",
    name: "Services",
  },
  {
    key: "PRODUCTIVITY",
    name: "Productivity",
  },
];

