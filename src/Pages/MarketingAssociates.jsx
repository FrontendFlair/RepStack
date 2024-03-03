import MarketingAssociatesSkill from "../SkillPageComponents/MarketingAssociatesSkill"
import SkillCardHeader from "../SkillPageComponents/SkillCardHeader"
import SkillHero from "../SkillPageComponents/SkillHero"
import SkillSectionBtn from "../SkillPageComponents/SkillSectionBtn"

function MarketingAssociates() {
  return (
    <div>
      <SkillHero skillTitle="Marketing Associates"/>
      <SkillCardHeader />
      <MarketingAssociatesSkill />
      <div className="flex items-center justify-center mb-16">
        <SkillSectionBtn btnText="Book a Strategy Session" />
      </div>
    </div>
  )
}

export default MarketingAssociates
