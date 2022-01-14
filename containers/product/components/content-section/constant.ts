import meeting1 from "../images/meet1.png";
import meeting2 from "../images/meet2.png";
import meeting3 from "../images/meet3.png";
import meeting4 from "../images/meet4.png";
import meeting5 from "../images/meet5.png";
import { ContentItemProps } from "./content-item";

export const CONTENTS: ContentItemProps[] = [
  {
    id: "MEETING",
    title: "Rate your next meeting a 10 !",
    description:
      "Let the automation of our Level 10 Meeting™ system work for you. Keep scrolling to check out this enhanced meeting management.",
    subDescription: [
      "Findings about the users’ context, common scenarios, goals",
      "various forms: clickable Invision prototype, low fidelity wireframe, storyboards, lightweight coded prototype",
      "Optimize Average and Totals Colums",
    ],
    position: "left",
    srcImg: meeting1,
  },
  {
    id: "MEASURABLE",
    title: "Scorecards & Measurables",
    description:
      "Weekly and Monthly data entry allows you to track each team’s Scorecard with ease.",
    subDescription: [
      "Findings about the users’ context, common scenarios, goals",
      "Various forms: clickable Invision prototype, low fidelity wireframe, storyboards, lightweight coded prototype",
      "Optimize Average and Totals Colums",
    ],
    position: "right",
    srcImg: meeting2,
  },
  {
    id: "PROBLEM",
    title: "Big Problems",
    description:
      "Say “done” in 90 days with easy Rock tracking and management. TractionWork Rocks are automatically integrated with Feedback ",
    subDescription: [
      "Findings about the users’ context, common scenarios, goals",
      "various forms: clickable Invision prototype, low fidelity wireframe, storyboards, lightweight coded prototype",
      "Optimize Average and Totals Colums",
    ],
    position: "left",
    srcImg: meeting3,
  },
  {
    id: "TODO",
    title: "Things to do",
    description:
      "Weekly and Monthly data entry allows you to track each team’s Scorecard with ease.",
    subDescription: [
      "Findings about the users’ context, common scenarios, goals",
      "Multiple people with the same role? Add them all to the same seat.",
      "Choose a new “Top Seat” to easily view different departments.",
    ],
    position: "right",
    srcImg: meeting4,
  },
  {
    id: "MANAGER",
    title: "Manager",
    description:
      "Organize your team’s to-do’s to see what is past due, and overtime you can see what has not been completed on time.",
    subDescription: [
      "Findings about the users’ context, common scenarios, goals",
      "Convert Issues into To-do’s.",
      "Switch issues between Short Term ",
    ],
    position: "left",
    srcImg: meeting5,
  },
];
