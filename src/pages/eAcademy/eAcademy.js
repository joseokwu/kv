import React from 'react'
import { Section } from './eAcademy.styled'
import comingSoon from '../../assets/images/comingsoon.svg'

export const EAcademy = () => {
  return (
    <>
      <Section>
        <div className="mx-auto text-center my-auto">
          <img src={comingSoon} alt="" />
          <h3 className="py-5">Feature Under Construction</h3>
          <p>
            We know you really want to use this feature and we are <br />
            excited to show you how awesomes it is but unfortunately it’s <br />
            still under construction. Please exercise a little patient.
          </p>
        </div>
      </Section>
    </>
  )
}
