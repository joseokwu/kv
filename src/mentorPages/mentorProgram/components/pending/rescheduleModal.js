import React from 'react'
import { AuthButton, Select, TextArea } from '../../../../mentorComponents'

export const RescheduleModal = () => {
  return (
    <div className="px-4 pb-5">
      <section>
        <TextArea
          label="Date"
          placeholder={'Thursday 17th Oct 2021'}
          rows={1}
        />
      </section>

      <div className="row">
        <section className="col-lg-6">
          <Select label="Start time" placeholder="Time" />
        </section>
        <section className="col-lg-6">
          <Select label="End time" placeholder="Time" />
        </section>
      </div>

      <div className="mt-4">
        <AuthButton label="Send" />
      </div>
    </div>
  )
}
