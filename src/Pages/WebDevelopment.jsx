import SkillCardHeader from '../SkillPageComponents/SkillCardHeader'
import SkillHero from '../SkillPageComponents/SkillHero'
import SkillSectionBtn from '../SkillPageComponents/SkillSectionBtn'
import WebServiceCard from '../SkillPageComponents/WebServiceCard'

function WebDevlopment() {
  return (
    <div>

      <SkillHero skillTitle="Web Development" />
      <SkillCardHeader />
      <WebServiceCard />
      <div className="flex items-center justify-center mb-16">
        <SkillSectionBtn btnText="Book a Strategy Session" />
      </div>
    </div>
  )
}

export default WebDevlopment