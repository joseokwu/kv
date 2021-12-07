import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import hi from '../../assets/icons/hiEmoji.png'
import { ProgressBar } from '../../components/index'
import AssistantInfo from './components/assistantInfo/assistantInfo'
import Consulting from './components/consulting/consulting'
import Details from './components/details/details'
import Interest from './components/interest/interest'
import WorkExperience from './components/workExperience/workExperience'
import './personalDetails.css'

export const PersonalDetails = () => {
  const wrapRef = useRef()
  const [progress, setProgress] = useState('')

  const {
    location: { hash },
    push,
  } = useHistory()

  const switchForm = (currentHash) => {
    push(currentHash)
  }

  useEffect(() => {
    wrapRef.current.scrollTop = 0
    if (hash === '#assistant_info') {
      setProgress('100')
    }
    if (hash === '#consulting') {
      setProgress('70')
    }
    if (hash === '#area_of_interest') {
      setProgress('50')
    }
    if (hash === '#work_experience') {
      setProgress('30')
    }
    if (hash === '#personal_details') {
      setProgress('20')
    }
  }, [hash])

  return (
    <div className="mentor_personal_details_wrap" ref={wrapRef}>
      <section className="mentor_personal_details_header">
        <div>
          <span>
            <section
              className="d-flex align-items-center"
              style={{ columnGap: 12 }}
            >
              <h4>Hi Daniella</h4>
              <img src={hi} alt={'hi'} />
            </section>
            <p>Let’s customise your experience</p>
          </span>
          <ProgressBar progress={progress} />
        </div>
      </section>
      <section className="mentor_personal_details_grid">
        <div>
          <ul className="mentor_personal_details_list">
            <li
              onClick={() => switchForm('#personal_details')}
              className={
                (hash === '#personal_details' || hash === '') && 'active-li'
              }
            >
              Personal Details
            </li>

            <li
              onClick={() => switchForm('#work_experience')}
              className={
                (hash === '#work_experience' || hash === '') && 'active-li'
              }
            >
              Work Experience
            </li>

            <li
              onClick={() => switchForm('#area_of_interest')}
              className={
                (hash === '#area_of_interest' || hash === '') && 'active-li'
              }
            >
              Area of interest / skills
            </li>

            <li
              onClick={() => switchForm('#consulting')}
              className={(hash === '#consulting' || hash === '') && 'active-li'}
            >
              Consultant Offerings
            </li>

            <li
              onClick={() => switchForm('#assistant_info')}
              className={
                (hash === '#assistant_info' || hash === '') && 'active-li'
              }
            >
              Assistant Info
            </li>
          </ul>
        </div>
        <div className="mt-2 d-flex justify-content-end">
          {hash === '#personal_details' ? (
            <Details />
          ) : hash === '#work_experience' ? (
            <WorkExperience />
          ) : hash === '#area_of_interest' ? (
            <Interest />
          ) : hash === '#consulting' ? (
            <Consulting />
          ) : hash === '#assistant_info' ? (
            <AssistantInfo />
          ) : (
            hash === ''
          )}
        </div>
      </section>
    </div>
  )
}
