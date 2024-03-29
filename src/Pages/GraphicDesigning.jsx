import GraphicDesigningSkill from "../SkillPageComponents/GraphicDesigningSkill"
import SkillCardHeader from "../SkillPageComponents/SkillCardHeader"
import SkillHero from "../SkillPageComponents/SkillHero"
import SkillSectionBtn from "../SkillPageComponents/SkillSectionBtn"

function GraphicDesigning() {
  return (
    <div>
      <SkillHero skillTitle="Graphic Designing" />
      <SkillCardHeader />
      <GraphicDesigningSkill />
      <div className="flex items-center justify-center mb-16">
        <SkillSectionBtn btnText="Book a Strategy Session" />
      </div>
    </div>
  )
}

export default GraphicDesigning
