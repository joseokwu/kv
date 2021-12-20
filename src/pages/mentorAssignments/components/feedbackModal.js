import React from 'react'
import { Button, TextArea } from '../../../components'

export const FeedbackModal = () => {
  return (
    <div className="px-4 pb-5">
      <TextArea placeholder={'Send a message'} rows={4} />
      <div className="text-right mt-5">
        <Button label="Send" />
      </div>
    </div>
  )
}
