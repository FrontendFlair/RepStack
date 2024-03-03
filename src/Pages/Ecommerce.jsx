import EcommerceSkill from "../SkillPageComponents/EcommerceSkill"
import SkillCardHeader from "../SkillPageComponents/SkillCardHeader"
import SkillHero from "../SkillPageComponents/SkillHero"
import SkillSectionBtn from "../SkillPageComponents/SkillSectionBtn"

function Ecommerce() {
  return (
    <div>
      <SkillHero skillTitle="Ecommerce Services" />
      <SkillCardHeader />
      <EcommerceSkill />
      <div className="flex items-center justify-center mb-16">
        <SkillSectionBtn btnText="Book a Strategy Session" />
      </div>
    </div>
  )
}

export default Ecommerce
