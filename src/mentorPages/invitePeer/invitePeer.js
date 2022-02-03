import React, { useState } from 'react'
import FormCard from '../../mentorComponents/formCard/FormCard'
import { TextField, TextArea, Button } from '../../mentorComponents/index'
import imageRep from '../../assets/icons/circleTimes.svg'
import { Form } from 'antd'
import { useFormik } from 'formik'
import * as yup from 'yup'
import './invitePeer.css'

const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(3, 'Please enter your first name')
    .required('First name is required!'),
  lastName: yup
    .string()
    .min(3, 'Please enter your last name')
    .required('Last name is required!'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email address is required'),
  interest: yup.string().required('Area of interest is required'),
  linkedIn: yup.string().required('LinkedIn is required'),
})

export const InvitePeer = ({ history }) => {
  const [loader, setLoader] = useState(false)

  const [success] = useState(null)
  const [error] = useState(null)

  const onSubmit = async (values) => {
    console.log(values)
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      interest: '',
      linkedIn: '',
    },
    validateOnBlur: true,
    onSubmit: (values) => onSubmit(values),
    validationSchema: validationSchema,
  })

  return (
    <div className="">
      <div className="mentor_invite_peer_form_wrap">
        <div className="col-md-12 pt-3">
          {!error && (
            <span className="form_success">{success ? success : ''}</span>
          )}
          {!success && <span className="form_error">{error ? error : ''}</span>}

          <Form onSubmit={formik.handleSubmit}>
            <FormCard>
              <div className="personal_info text-left">
                <h4>Peer Infomation</h4>
              </div>

              <div className="row text-left">
                <section className="col-md-6 mb-4">
                  <TextField
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label={'First Name*'}
                    placeholder={'Micheal'}
                    required={true}
                  />
                  <span className="input_error">
                    {formik.touched.firstName && formik.errors.firstName
                      ? formik.errors.firstName
                      : ''}
                  </span>
                </section>
                <section className="col-md-6 mb-4">
                  <TextField
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label={'Last Name*'}
                    placeholder={'Smith'}
                    required={true}
                  />
                  <span className="input_error">
                    {formik.touched.lastName && formik.errors.lastName
                      ? formik.errors.lastName
                      : ''}
                  </span>
                </section>

                <section className="col-md-12 mb-4">
                  <TextArea
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label={'Email*'}
                    placeholder={'michealsmith@gmail.com'}
                    required={true}
                    rows={'1'}
                  />
                  <span className="input_error">
                    {formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : ''}
                  </span>
                </section>

                <section className="col-md-12 mb-4">
                  <TextArea
                    value={formik.values.interest}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label={'Area of Interest'}
                    placeholder={'Search'}
                    rows={'1'}
                  />
                  <span className="input_error">
                    {formik.touched.interest && formik.errors.interest
                      ? formik.errors.interest
                      : ''}
                  </span>
                </section>

                <section className="col-md-4 mb-4">
                  <button className="health_btn">
                    Health care{' '}
                    <img className="pl-2" src={imageRep} alt="delete" />
                  </button>
                </section>

                <section className="col-md-12">
                  <TextArea
                    value={formik.values.linkedIn}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    label={'LinkedIn'}
                    placeholder={'we@linkedin.com'}
                    rows={'1'}
                  />
                  <span className="input_error">
                    {formik.touched.linkedIn && formik.errors.linkedIn
                      ? formik.errors.linkedIn
                      : ''}
                  </span>
                </section>
              </div>
            </FormCard>

            {/* <Form.Item>
            <div className=" text-left mb-4 mt-3">
              <Button
                label="Submit"
                type={"submit"}
                loading={loader}
                onClick={() => setLoader()}
                // disabled={!formik.isValid}
              />
            </div>
          </Form.Item> */}
            <button disabled={!formik.isValid}>Send</button>
          </Form>
        </div>
      </div>
    </div>
  )
}
