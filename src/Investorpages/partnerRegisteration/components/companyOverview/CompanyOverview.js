import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './companyOverview.css'
import imageRep from '../../../../assets/icons/image.svg'
import add from '../../../../assets/icons/addFile.svg'
import { Button, TextField } from '../../../../components/index'
import FormCard from '../formCard/FormCard'
import { useAuth } from '../../../../hooks/useAuth'
import { upload } from '../../../../services/utils'
import { CircularLoader } from './../../../../Startupcomponents/CircluarLoader/CircularLoader'
import toast from 'react-hot-toast'
import { Input, Form, Select } from 'antd'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import { industry, category } from '../../../../constants/domiData';
import { letterOnly, onNumberOnlyChange } from '../../../../utils/helpers'

const { Option } = Select
const { TextArea } = Input

// const industry = [
//   ''
// ]

const CompanyOverview = () => {
  const { stateAuth, updatePartnerLocalData, updatePartnerInfo } = useAuth()
  const [logoUploading, setLogoUploading] = useState(false)

  //console.log(stateAuth)

  const onFinish = async (values) => {
    updatePartnerInfo()

    console.log(values)
  }

  const handleCountry = (value) => {
    updatePartnerLocalData('', {
      country: value,
    })

    console.log(value)
  }

  const handleChangeState = (value) => {
    updatePartnerLocalData('', {
      state: value,
    })
  }

  const onChangeImage = async (e) => {
    const { files } = e.target
    const formData = new FormData()
    formData.append('dir', 'kv')
    formData.append('ref', stateAuth.user?.userId)
    formData.append('type', 'image')
    formData.append(0, files[0])
    try {
      setLogoUploading(true)
      const response = await upload(formData)
      console.log(response?.path)
      updatePartnerLocalData('', {
        logo: response?.path,
      })
      setLogoUploading(false)
    } catch (error) {
      setLogoUploading(false)
      toast.error(error?.response?.data?.message ?? 'Unable to upload image')
    }
  }

  const handlePhoneInput = (value) => {
    updatePartnerLocalData('', {
      phoneNumber: value,
    })
  }

  const { push } = useHistory()
  return (
    <div className="register-form-wrap">
      <h3>Company Overview</h3>
      <p>Fill in partner details</p>
      <Form
        name="Sign-Up"
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        onFinish={onFinish}
      >
        <FormCard>
          <div className="row mb-4">
            <section className="col-md-3">
              <div className="form-dp">
                <span className="image-placeholder">
                  {stateAuth?.partnerData?.logo === null ? (
                    logoUploading ? (
                      <CircularLoader color={'#000'} />
                    ) : (
                      <>
                        <img
                          src={imageRep}
                          style={{ width: '40px', height: '40px' }}
                          alt="placeholder"
                        />
                        <p>
                          Company
                          <br />
                          logo
                        </p>
                      </>
                    )
                  ) : (
                    <img
                      src={stateAuth?.partnerData?.logo}
                      alt="add"
                      className="image-placeholder"
                    />
                  )}
                </span>

                <label for="op">
                  <img src={add} className="add-dp" alt="add" />
                  <input type="file" onChange={onChangeImage} id="op" hidden />
                </label>
              </div>
            </section>
            <section className="col-md-9 pl-5">
              <Form.Item
                name="companyDescription"
                label="Company Description"
                initialValue={stateAuth?.partnerData?.companyDescription}
                rules={[
                  { required: true, message: 'Please input Intro' },
                  {
                    min: 200,
                    message: 'Description must not be less down 200 characters',
                  },
                ]}
              >
                <TextArea
                  rows={4}
                  style={{ height: 150 }}
                  value={stateAuth?.partnerData?.companyDescription}
                  onChange={(e) =>
                    updatePartnerLocalData('', {
                      companyDescription: e.target.value,
                    })
                  }
                  onKeyPress={letterOnly}
                  showCount
                  maxLength={250}
                  placeholder="250 characters at most"
                />
              </Form.Item>
            </section>
          </div>

          <div className="row">
            <section className="col-md-6 mb-4">
              <TextField
                label="Company Name"
                name={'companyName'}
                onChange={(e) =>
                  updatePartnerLocalData('', {
                    companyName: e.target.value,
                  })
                }
                value={stateAuth?.partnerData?.companyName}
                required={true}
                placeholder="Enter name of partner"
              />
            </section>
            <section className="col-md-6 mb-4">
              <TextField
                onChange={(e) =>
                  updatePartnerLocalData('', {
                    website: e.target.value,
                  })
                }
                label="Website"
                name={'website'}
                type={'url'}
                required={true}
                value={stateAuth?.partnerData?.website}
                placeholder="Enter website URL"
              />
            </section>

            <section className="col-md-6 mb-4">
              <Form.Item
                name="industry"
                label="Industry"
                initialValue={stateAuth?.partnerData?.industry}
                rules={[
                  { required: true, message: 'Please select a industry!' },
                ]}
              >
                <Select
                  id="industry"
                  style={{ width: 200, backgroundColor: '#959596' }}
                  placeholder="select your categories"
                  onChange={(value) => {
                    updatePartnerLocalData('', {
                      industry: value,
                    })
                  }}
                >
                  {industry.map((item, i) => (
                    <Option value={item} key={i}>
                      {' '}
                      {item}{' '}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </section>
            <section className="col-md-6 mb-4">
              <Form.Item
                name="categories"
                label="Categories"
                initialValue={stateAuth?.partnerData?.categories}
                rules={[
                  { required: true, message: 'Please select a category!' },
                ]}
              >
                <Select
                  style={{ width: 200, backgroundColor: '#959596' }}
                  placeholder="select your categories"
                  onChange={(value) =>
                    updatePartnerLocalData('', {
                      categories: value,
                    })
                  }
                >
                  {category.map((item, i) => (
                    <Option key={i} value={item}>
                      {' '}
                      {item}{' '}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </section>
            <section className="col-md-6 mb-4">
              <TextField
                label="Twitter"
                name={'twitter'}
                type={'url'}
                onChange={(e) =>
                  updatePartnerLocalData('', {
                    twitter: e.target.value,
                  })
                }
                value={stateAuth?.partnerData?.twitter}
                placeholder="Enter twitter URL"
              />
            </section>

            <section className="col-md-6 mb-4">
              <TextField
                label="Linkedin"
                name={'linkedin'}
                type={'url'}
                value={stateAuth?.partnerData?.linkedin ?? ''}
                onChange={(e) =>
                  updatePartnerLocalData('', {
                    linkedin: e.target.value,
                  })
                }
                placeholder="Enter Linkedin URL"
              />
            </section>
          </div>
        </FormCard>

        <FormCard>
          <div className="contact-title">
            <h4>Contact Info</h4>
          </div>

          <div className="row">
            <section className="col-md-6 mb-4">
              <TextField
                value={stateAuth?.partnerData?.coordinatorName ?? ''}
                name={'coordinatorName'}
                onChange={(e) =>
                  updatePartnerLocalData('', {
                    coordinatorName: e.target.value,
                  })
                }
                onKeyPress={letterOnly}
                label="Coordinator Name"
                placeholder="Enter contact person"
              />
            </section>

            <section className="col-md-6 mb-4">
              <TextField
                name={'designation'}
                label="Designation"
                onKeyPress={letterOnly}
                value={stateAuth?.partnerData?.designation ?? ''}
                placeholder="Enter contact person"
                onChange={(e) =>
                  updatePartnerLocalData('', {
                    designation: e.target.value,
                  })
                }
              />
            </section>
            <section className="col-md-6 mb-4 ">
              <label>
                Mobile Number<span style={{ color: 'red' }}>*</span>
              </label>
              <PhoneInput
                id="phoneNumber"
                international
                name="phoneNumber"
                countryCallingCodeEditable={true}
                className="custs ps-3 py-2"
                value={stateAuth?.partnerData?.phoneNumber ?? ''}
                onChange={handlePhoneInput}
                maxLength={17}
              />
            </section>
            <section className="col-md-6 mb-4">
              <TextField
                label="Email"
                placeholder="Enter email address"
                type="email"
                value={stateAuth?.partnerData?.companyEmail ?? ''}
                name={'companyEmail'}
                onChange={(e) =>
                  updatePartnerLocalData('', {
                    companyEmail: e.target.value,
                  })
                }
                required={true}
              />
            </section>
            <section className="col-md-4 mb-4">
              <label>
                Country<span style={{ color: 'red' }}>*</span>
              </label>
              <CountryDropdown
                className="form-control px-5 py-1 country-bg"
                value={stateAuth.partnerData.country ?? ''}
                onChange={(value) => handleCountry(value)}
              ></CountryDropdown>
            </section>
            <section className="col-md-4 mb-4">
              <label>
                State<span style={{ color: 'red' }}>*</span>
              </label>
              <RegionDropdown
                name="state"
                country={stateAuth.partnerData.country ?? ''}
                value={stateAuth.partnerData.state ?? ''}
                onChange={(value) => handleChangeState(value)}
                className="form-control ps-3"
              />
            </section>
            <section className="col-md-4 mb-4">
              <TextField
                onChange={(e) =>
                  updatePartnerLocalData('', {
                    city: e.target.value,
                  })
                }
                value={stateAuth?.partnerData?.city ?? ''}
                name={'city'}
                onKeyPress={letterOnly}
                label="City"
                placeholder="Enter partner city"
              />
            </section>
          </div>
        </FormCard>

        <section
          className="d-flex align-items-center justify-content-end my-4"
          style={{ columnGap: 9 }}
        >
          <Button type="submit" label="Save" variant="secondary" />
          <Button
            type="button"
            label="Next"
            onClick={() => {
              push('#offerings')
            }}
          />
        </section>
      </Form>
    </div>
  )
}

export default CompanyOverview
