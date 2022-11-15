import { BoxEmail, IntroduceSection, PartnerSection, WhyNeedSymlody } from "./components"

export const HomeContainer: React.FC = () => {
  return <div className="flex flex-col">
    <IntroduceSection />
    <WhyNeedSymlody/>
    <PartnerSection/>
    <BoxEmail/>
  </div>
}