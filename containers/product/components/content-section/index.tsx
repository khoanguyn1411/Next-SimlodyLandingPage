import { ContentItem } from "./content-item";

export const ContentSection = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="container">
       <ContentItem
          title="Rate your next meeting a 10 !"
          description="Let the automation of our Level 10 Meeting™ system work for you. Keep scrolling to check out this enhanced meeting management."
          subDescription={["Findings about the users’ context, common scenarios, goals","various forms: clickable Invision prototype, low fidelity wireframe, storyboards, lightweight coded prototype"]}
        />
      </div>
    </section>
  );
};
