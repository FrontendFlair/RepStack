import AccountManagerSkill from "../SkillPageComponents/AccountManagerSkill"
import SkillCardHeader from "../SkillPageComponents/SkillCardHeader"
import SkillHero from "../SkillPageComponents/SkillHero"
import SkillSectionBtn from "../SkillPageComponents/SkillSectionBtn"

function AccountManager() {
  return (
    <div>
      <SkillHero skillTitle="Account Managers" />
      <SkillCardHeader />
      <AccountManagerSkill />
      <div className="flex items-center justify-center mb-16">
        <SkillSectionBtn btnText="Book a Strategy Session" />
      </div>
    </div>
  )
}

export default AccountManager
