import React from 'react'
import SkillHero from '../SkillPageComponents/SkillHero'
import VideoEditingSkill from '../SkillPageComponents/VideoEditingSkill'
import SkillCardHeader from '../SkillPageComponents/SkillCardHeader'
import SkillSectionBtn from '../SkillPageComponents/SkillSectionBtn'

function VideoEditing() {
  return (
    <div>
      <SkillHero skillTitle="Video Editing" />
      <SkillCardHeader />
      <VideoEditingSkill/>
      <div className="flex items-center justify-center mb-16">
        <SkillSectionBtn btnText="Book a Strategy Session" />
      </div>
    </div>
  )
}

export default VideoEditing
