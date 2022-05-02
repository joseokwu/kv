import React, { useState } from 'react'
import FormCard from '../../../partnerRegisteration/components/formCard/FormCard'
import add from '../../../../assets/icons/add.svg'
import { Button, Modal, TextArea, TextField } from '../../../../components'
import { useHistory } from 'react-router'
import './portfolio.css'
import { TextareaCustom } from '../../../../components/textArea/cutstomTextarea'
import { useAuth } from '../../../../hooks/useAuth'
import { Form, Input } from 'antd'
import { LargeModal } from './../../../../Startupcomponents/modal/Modal'
import { sendInvitation } from '../../../../services'
import toast from 'react-hot-toast'

export const Portfolio = () => {
  const { push } = useHistory()

  const { updateInvestorInfo, stateAuth } = useAuth()
  const [close, setClose] = useState(false)

  const submit = () => {
    updateInvestorInfo(true)
  }

  console.log(stateAuth)

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   updateInvestorInfo()
  //   window.open('/investor/dashboard', '_self')
  // }


  return (
    <div className="register-form-wrap">
      {close ? (
        <LargeModal
          closeModal={setClose}
          title="Invite Start-ups"
          id="portfolio"
          subTitle="Invite your startups by additing their email address below. Startups will receive personalised email notification to register their details at knight ventures platform"
        >
          <div className="mx-5 mb-4">
            <p className="modal-startup">
              Invite your startups by additing their email address below.
              Startups will receive personalised email notification to register
              their details at knight ventures platform
            </p>
          </div>
          <InviteStartUps handleClose={setClose} />
        </LargeModal>
      ) : (
        <span />
      )}
      <h3 style={{ color: '#2e3192' }}>Start-up portfolio</h3>
      <p>
        This will help us provide startups personalised for your preferences
      </p>

      <FormCard className="mb-0 card-for-invite d-flex flex-column align-items-center justify-content-center">
        {stateAuth?.investorData?.portfolio.length > 0 ? (
          stateAuth?.investorData?.portfolio.map((item, i) => (
            <div key={i} className="">
              {i}
            </div>
          ))
        ) : (
          <span />
        )}
        <section
          className="d-flex align-items-center invite-strip"
          onClick={() => setClose(true)}
        >
          <img src={add} alt="add" />
          <p>Invite your portfolio startups</p>
        </section>
      </FormCard>
      <section className="d-flex justify-content-end mt-3">
        <p className="do-later" onClick={() => {submit()}} >
          Do this later
        </p>
      </section>

      <section className="d-flex align-items-center justify-content-between mt-5">
        <button
          style={{ color: 'white', background: '#808080' }}
          className="back-btn"
          onClick={() => {
            push('#approach')
          }}
        >
          Go Back
        </button>

        <div className="d-flex align-items-center" style={{ columnGap: 9 }}>
          <Button type="button" label="Done" onClick={() => {submit()}} />
        </div>
      </section>
    </div>
  )
}

const InviteStartUps = ({ handleClose }) => {
  const [loading, setLoading] = useState(false)

  const { stateAuth } = useAuth()

  const onFinish = async (values) => {
    try {
      setLoading(true)
      const newInvitation = {
        email: values.email,
        sender: `${stateAuth.firstname} ${stateAuth.lastname}`,
        name: values.name,
        message: values.message,
      }
      console.log(values)
      const res = await sendInvitation(newInvitation)
      toast.success(res?.message)
      setLoading(false)
      handleClose(false)
    } catch (err) {
      setLoading(false)
      toast.error(
        err?.response?.data?.message ??
          'There was an error in sending invitation',
      )
    }
  }

  const letterOnly = (e) => {
    const charCode = e.charCode || e.which
    const keyValue = String.fromCharCode(charCode)
    const isValid = new RegExp('[a-zA-Z]').test(keyValue)
    if (!isValid) {
      e.preventDefault()
      return
    }
  }

  return (
    <div className="px-5 pb-5">
      <Form onFinish={onFinish} initialValues={{ remember: true }}>
        <section className="mb-3">
          <TextField
            type="email"
            name={'email'}
            label="Email"
            placeholder="jamil@gmail.com"
            className="edit_input"
          />
        </section>

        <section className="mb-3">
          <TextField
            label="Name"
            name={'name'}
            onKeyPress={letterOnly}
            className="edit_input"
          />
        </section>

        <section className="mb-5">
          <label className="mb-3">Message (recommended)</label>
          <TextareaCustom
            name={'message'}
            onKeyPress={letterOnly}
            // label="Message (recommended)"
            placeholder="Send a message"
          />
        </section>

        <section className="d-flex justify-content-between mt-5 pt-4">
          <button className="back-btn" data-dismiss="modal">
            Cancel
          </button>

          <Button type="submit" label="Send Invitation" loading={loading} />
        </section>
      </Form>
    </div>
  )
}
