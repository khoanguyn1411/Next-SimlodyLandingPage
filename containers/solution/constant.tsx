import problem_1 from "./images/problem1.png";
import problem_2 from "./images/problem_2.png";
import problem_3 from "./images/problem_3.png";
import problem_4 from "./images/problem_4.png";

import product_1 from "./images/product_1.png"
import product_2 from "./images/product_2.png"
import product_3 from "./images/product_3.png"
import product_4 from "./images/product_4.png"

export const CONTENTS_PROBLEMS = [
  {
    title: "Discover problems",
    description: "",
    subDescription: [
      "Findings about the users’ context, common scenarios, goals",
      "various forms: clickable Invision prototype, low fidelity wireframe, storyboards, lightweight coded prototype",
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
      "various forms: clickable Invision prototype, low fidelity wireframe, storyboards, lightweight coded prototype",
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
