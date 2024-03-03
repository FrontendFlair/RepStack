import SalesDevelopmentSkill from "../SkillPageComponents/SalesDevelopmentSkill"
import SkillCardHeader from "../SkillPageComponents/SkillCardHeader"
import SkillHero from "../SkillPageComponents/SkillHero"
import SkillSectionBtn from "../SkillPageComponents/SkillSectionBtn"

function SalesDevelopmentReps() {
  return (
    <div>
      <SkillHero skillTitle="Sales Development Reps"/>
      <SkillCardHeader />
      <SalesDevelopmentSkill />
      <div className="flex items-center justify-center mb-16">
        <SkillSectionBtn btnText="Book a Strategy Session" />
      </div>
    </div>
  )
}

export default SalesDevelopmentReps
