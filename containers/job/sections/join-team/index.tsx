import { HeaderSection } from "@components";
import { JOBS } from "@containers/job/constant";

export const JoinTeamSection = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col space-y-16">
          <HeaderSection
            title="Join the team"
            description="We are a young team who have the same passion for product. We building a culture in our company and bring it to our customers"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-12">
            {JOBS.map((job, index) => (
              <div
                key={index}
                className="flex flex-col rounded-md border py-6 px-6 space-y-6 items-center justify-center hover:shadow-md hover:shadow-primary-400 transition-all duration-300 cursor-pointer"
              >
                <span>{job.icon}</span>

                <span className="text-base">{job.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
