import { ITab } from "@components/elements";
import { ContentItemProps } from "@containers/product/components/content-section/content-item";
import { CollaborationIcon, PlanningIcon, VisualizationIcon } from "./icon";
import problem_1 from "./images/problem_1.png";
import problem_2 from "./images/problem_2.png";
import problem_3 from "./images/problem_3.png";
import problem_4 from "./images/problem_4.png";

import product_1 from "./images/product_1.png";
import product_2 from "./images/product_2.png";
import product_3 from "./images/product_3.png";
import product_4 from "./images/product_4.png";

import validate_1 from "./images/validate_1.png";
import validate_2 from "./images/validate_2.png";
import validate_3 from "./images/validate_3.png";
import validate_4 from "./images/validate_4.png";

import centrallize_1 from "./images/centrallize_1.png";
import centrallize_2 from "./images/centrallize_2.png";
import centrallize_3 from "./images/centrallize_3.png";

import integrating_1 from "./images/integrate_1.png";
import integrating_2 from "./images/integrate_2.png";

import revolution_1 from "./images/revolution_1.png";
import revolution_2 from "./images/revolution_2.png";

import adapt_1 from "./images/adapt_1.png";
import adapt_2 from "./images/adapt_2.png";

import staff_1 from "./images/staff_1.png";
import staff_2 from "./images/staff_2.png";

import human_1 from "./images/human_1.png";
import human_2 from "./images/human_2.png";
import human_3 from "./images/human_3.png";

import sale_1 from "./images/sale_1.png";
import sale_2 from "./images/sale_2.png";
import sale_3 from "./images/sale_3.png";

import marketing_1 from "./images/marketing_1.png";
import marketing_2 from "./images/marketing_2.png";
import marketing_3 from "./images/marketing_3.png";

import service_1 from "./images/service_1.png";
import service_2 from "./images/service_2.png";
import service_3 from "./images/service_3.png";

import productivity_1 from "./images/productivity_1.png";
import productivity_2 from "./images/productivity_2.png";
import productivity_3 from "./images/productivity_3.png";

import { ProcessProps } from "./sections";

export const PROCESSES_PRODUCT: ProcessProps[] = [
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

export const PROCESSES_SASS: ProcessProps[] = [
  {
    title: "Accessibility",
    description: "Ability to run via an internet browser 24/7 from any device",
    icon: <PlanningIcon />,
  },
  {
    title: "Management",
    description:
      "No installation, equipment updates or traditional licensing management",
    icon: <CollaborationIcon />,
  },
  {
    title: "Cost Effective",
    description:
      "No upfront hardware costs and flexible payment methods such as pay-as-you-go models",
    icon: <VisualizationIcon />,
  },
];

export const CONTENTS_PROBLEMS: ContentItemProps[] = [
  {
    title: "Discover problems",
    description: "",
    subDescription: [
      "Findings about the users’ context, common scenarios, goals",
      "Various forms: clickable Invision prototype, low fidelity wireframe, storyboards, lightweight coded prototype",
      "Optimize Average and Totals Colums",
    ],
    position: "left",
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
    position: "right",
    srcImg: problem_2,
  },
  {
    title: "Concept Validation",
    description: "",
    subDescription: [
      "Shortlisted concepts are tested using a throwaway prototype to quickly solicit feedback from customers. ",
      "This can come in the form of a clickable Invision prototype, low fidelity wireframes, or a lightweight coded prototype. ",
    ],
    position: "left",
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
    position: "right",
    srcImg: problem_4,
  },
];

export const CONTENTS_PRODUCTS: ContentItemProps[] = [
  {
    title: "Design Iterations",
    description: "",
    subDescription: [
      "Early-stage foundational work – nav structure, interaction model, information architecture and user flows",
      "Mid-stage interface design - approve use pre-existing , fleshing out interactions, visual design",
      "Dev support – designers pair with engineers to discuss any ad hoc UX decisions, design QA",
      "Request support from User Research, if needed.",
    ],
    position: "left",

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
    position: "right",

    srcImg: product_2,
  },
  {
    title: "Acceptance Testing Complete",
    description: "",
    subDescription: [
      "Complete a final pass of manual and automated acceptance testing.",
      "End-to-end testing of downstream systems should also be undertaken.",
    ],
    position: "left",

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
    position: "right",

    srcImg: product_4,
  },
];

export const CONTENTS_VALIDATE: ContentItemProps[] = [
  {
    title: "Validation",
    description: "",
    subDescription: [
      "These milestones can (and should) overlap with the Development Phase",
      "Alpha - We're not Feature Complete, but we can begin testing some functionality, ideas, and concepts",
      "Beta - We’re Feature Complete with restrictions on types of customers who can use the produce/feature",
      "During each phase, collect feedback from users with data, survey or interview",
    ],
    position: "left",

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
    position: "right",

    srcImg: validate_2,
  },
  {
    title: "Internal Training",
    description: "",
    subDescription: [
      "Sales Enablement, success Enablement, advocacy enablement",
      "We may be doing a slow roll-out to assess and address any compatibility and scalability issues",
      "The product/feature is commercially available, meaning it can be purchased or is part of a purchased plan",
    ],
    position: "left",

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
    position: "right",

    srcImg: validate_4,
  },
];

export const CONTENTS_CENTRALIZING: ContentItemProps[] = [
  {
    title: "Adapt Customer Environment",
    description: "",
    subDescription: [
      "Better deliver applications and services",
      "SaaS developers also ensure their solution easily integrates with customer environments ( Cloud, Hybrid,..)",
      "SaaS providers should build APIs that ease this process",
    ],
    position: "left",
    srcImg: centrallize_1,
  },
  {
    title: "Data Intergration",
    description: "",
    subDescription: [
      "Data integration provides easy, fast connections between all your applications and data stores",
      "From data integrity and instant data availability, to powerful business insights and greater efficiency",
    ],
    position: "right",
    srcImg: centrallize_2,
  },
  {
    title: "Leverage Data Integration",
    description: "",
    subDescription: [
      "Your website AND product should have analytics built in",
      "Key information such as which parts of the SaaS product are used a lot, how to track errors in the product",
    ],
    position: "left",
    srcImg: centrallize_3,
  },
];

export const CONTENTS_INTEGRATING: ContentItemProps[] = [
  {
    title: "Everything ‘’As a service’’",
    description: "",
    subDescription: [
      "Transitioning to SaaS providers can be a true paradigm shift impacting people, technology, and processes",
      "Save time with automated operations",
    ],
    position: "left",
    srcImg: integrating_1,
  },
  {
    title: "Update Regularly",
    description: "",
    subDescription: [
      "Stay up to date and remain competitive on a technical level every month",
      "Standardize your configurations, implement automation whenever possible and operate agilely",
    ],
    position: "right",
    srcImg: integrating_2,
  },
];

export const CONTENTS_REVOLUTION: ContentItemProps[] = [
  {
    title: "Monthly Recurring Revenue (MRR)",
    description: "",
    subDescription: [
      "Instead of paying once for the right to download a product, users subscribe to a SaaS product or solution",
      "The entire pricing model shifts from annual large-chunk payments to much smaller monthly payments per customer",
    ],
    position: "left",
    srcImg: revolution_1,
  },
  {
    title: "Focus Heavily on Customer",
    description: "",
    subDescription: [
      "Keep your product updated and highly responsive to emergent customer needs in order to stay relevant",
      "Making sure customer know where end customers are along this path to decide how and when to upsell successfully",
    ],
    position: "right",
    srcImg: revolution_2,
  },
];

export const CONTENTS_ADAPT: ContentItemProps[] = [
  {
    title: "Shifting a business model",
    description: "",
    subDescription: [
      "Service level agreements (SLAs)  and providing more ongoing support at all levels – software, cloud",
      "Ensuring key performance indicators (KPIs) are met for business continuity or timely updates (24/7 support)",
    ],
    position: "left",
    srcImg: adapt_1,
  },
  {
    title: "Security and Compliance",
    description: "",
    subDescription: [
      "Include processes that determine how long the data is stored and how it is removed from any databases",
      "Processes necessary to meet regulations and data security are in place before a company launches its application",
    ],
    position: "right",
    srcImg: adapt_2,
  },
];

export const CONTENTS_STAFFING: ContentItemProps[] = [
  {
    title: "Building Out a SaaS solution",
    description: "",
    subDescription: [
      "Adopt an end-to-end, multi-disciplinary approach, including specialists in many cloud environments, CI/CD, compliance",
      "Ensuring key performance indicators (KPIs) are met for business continuity or timely updates (24/7 support)",
    ],
    position: "left",
    srcImg: staff_1,
  },
  {
    title: "Development Services",
    description: "",
    subDescription: [
      "Save money when developing and deploying a SaaS solution can utilize multi-disciplinary development services",
      "Known as flexible R&D, enables companies to tap into the world’s best talent but only pay for services",
    ],
    position: "right",
    srcImg: staff_2,
  },
];

export const CONTENTS_HUMAN: ContentItemProps[] = [
  {
    title: "Employees",
    description: "",
    subDescription: [
      "Centralize all your HR information",
      "Oversee all important information for each department at a glance",
      "Receive alerts for any new leave requests, allocation requests, applications, appraisals, and more",
    ],
    position: "left",
    srcImg: human_1,
  },
  {
    title: "Track Time & Attendance",
    description: "",
    subDescription: [
      "Weekly or monthly timesheets with optional attendance tracking",
      "Easily access statistics to record and analyze timesheets as well as check each employee's attendance",
    ],
    position: "right",
    srcImg: human_2,
  },
  {
    title: "Employee Evaluation Made Easy",
    description: "",
    subDescription: [
      "Easily set up your evaluation process and calendar",
      "Design form-based questionnaires to collect feedback from everyone in the company",
      "Automate the entire process so that you can focus on people, not administration duties.",
    ],
    position: "left",
    srcImg: human_3,
  },
];

export const CONTENTS_SALE: ContentItemProps[] = [
  {
    title: "Get Accurate Forecasts",
    description: "",
    subDescription: [
      "Get the insights you need to make smarter decisions",
      "Design custom dashboards to get a picture of your business at a glance",
      "Dig deeper with real-time reports and flow charts that anyone can create and share",
    ],
    position: "left",
    srcImg: sale_1,
  },
  {
    title: "More Done In Less Time",
    description: "",
    subDescription: [
      "Schedule activities based on your sales scripts: calls, meetings, mailing, and quotations",
      "Get all the information you need, directly on the opportunity: website pages viewed, mail received, etc",
    ],
    position: "right",
    srcImg: sale_2,
  },
  {
    title: "Real-time Overview",
    description: "",
    subDescription: [
      "Easily review your performances & next activities",
      "Know exactly how you perform compared to your monthly targets",
      "Organize your work based on your scheduled next actions",
    ],
    position: "left",
    srcImg: sale_3,
  },
];

export const CONTENTS_MARKETING: ContentItemProps[] = [
  {
    title: "Plan, Monitor, Analyze accounts",
    description: "",
    subDescription: [
      "Connects you with your customers, boosts leads, and income",
      "Provide customer support and help broadcast important company news and messages",
      "Find new customers and keep users’ engaged",
    ],
    position: "left",
    srcImg: marketing_1,
  },
  {
    title: "Reach your audience anywhere",
    description: "",
    subDescription: [
      "The short and straightforward messages allow users easily to read the messengers",
      "Get all the information you need, directly on the opportunity: website pages viewed, mail received, etc",
    ],
    position: "right",
    srcImg: marketing_2,
  },
  {
    title: "Start Conversations At Will",
    description: "",
    subDescription: [
      "Turn visitors into leads and customers into happy users",
      "Users respond well to live chats; it gives them a chance of real-time interaction",
      "Proactively engage with visitors, which is a crucial part of a positive customer support experience",
    ],
    position: "left",
    srcImg: marketing_3,
  },
];

export const CONTENTS_SERVICES: ContentItemProps[] = [
  {
    title: "Forecast needs & resources",
    description: "",
    subDescription: [
      "Schedule your teams across projects taking employees' holidays into account",
      "Plan ahead for upcoming projects with forecasts based on comparable projects and estimate deadlines",
      "Compare forecasts with real timesheets for increased profitability",
    ],
    position: "left",
    srcImg: service_1,
  },
  {
    title: "Any device & Anywhere",
    description: "",
    subDescription: [
      "Provide mobile app no matter you work by your own or running a bussines, managing employees",
      "Log in and track your time through any device, anywhere",
    ],
    position: "right",
    srcImg: service_2,
  },
  {
    title: "Discuss Tasks Share Documents",
    description: "",
    subDescription: [
      "Add quick notes or attach files to any task and stay connected to your team",
      "Communicate through the chatter, write in a shared real-time pad, or use live chat",
      "Create graph views to analyze your data utilizing a powerful search tool, filter and grouping functions ",
    ],
    position: "left",
    srcImg: service_3,
  },
];

export const CONTENTS_PRODUCTIVITY: ContentItemProps[] = [
  {
    title: "Engage In Conversation",
    description: "",
    subDescription: [
      "Drive discussions between all levels of your company ",
      "Get an overview of the topics being discussed and all the new messages in the module’s news feed",
      "A powerful communication tool",
    ],
    position: "left",
    srcImg: productivity_1,
  },
  {
    title: "Save Time Managing Employee",
    description: "",
    subDescription: [
      "Everything in one place",
      "The management of your requests are made easy all request submissions can be created, validated, or declined in second",
    ],
    position: "right",
    srcImg: productivity_2,
  },
  {
    title: "Integrated With All Modules",
    description: "",
    subDescription: [
      "Keep track of all actions within one window",
      "See what colleagues are up to and how quickly they can respond to messages by checking their status",
      "Choose how you want notifications to be handled, add followers to tasks, schedule activities",
    ],
    position: "left",
    srcImg: productivity_3,
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
