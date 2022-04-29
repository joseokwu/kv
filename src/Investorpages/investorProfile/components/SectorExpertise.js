import React from 'react'
import edit from '../../../assets/icons/edit.svg'
import { Tag, Modal, RowOption, Select, Button } from '../../../components'
import { useAuth } from '../../../hooks'
import { Form } from 'antd'
import { sectors } from '../../../utils/utils'

export const SectorExpertise = ({data}) => {

  return (
    <section className="profile-offering mb-3">
      <span className="text-right d-block">
        <Modal title="Edit Sector Expertise" id="editSectorModal">
          <EditSectorExpertise />
        </Modal>
      </span>

      <div>
        <section className="mb-5">
          <div className="flex-align justify-content-between mb-4">
            <p className="partner-cat-header">Sector Expertise</p>
            <img
              src={edit}
              alt="edit"
              data-toggle="modal"
              data-target="#editSectorModal"
              role="button"
            />
          </div>
          <span
            className="d-flex align-items-center flex-wrap"
            style={{ columnGap: 10, rowGap: 10 }}
          >
            {/* <Tag name="Tech" /> */}
            {/* <Tag name="Engineering" color="#40439A" /> */}
            <Tag
              name={`${data?.investorApproach?.techSector}`}
              color="#E31937"
            />
            {/* <Tag name="Engineering" color="#40439A" /> */}
            {/* <Tag name="Career" color="#E31937" /> */}
          </span>
        </section>

        <section>
          <p className="partner-cat-header mb-4">Preference</p>
          <div
            className="flex-align flex-wrap"
            style={{ columnGap: 16, rowGap: 10 }}
          >
            <span className="cat-tag">
              {data?.investorApproach?.investmentPreference}
            </span>
            {/* <span className="cat-tag">B2C</span> */}
          </div>
        </section>
      </div>
    </section>
  )
}

const EditSectorExpertise = () => {
  const preferred = ['B2B', 'B2C', 'Marketplace']
  const { updateInvestorProfileData, stateAuth, updateInvestorInfo } = useAuth()
  const onFinish = async () => {
    updateInvestorInfo()
  }

  return (
    <div className="px-4">
      <Form onFinish={onFinish} initialValues={{ remember: true }}>
        <section className="mb-5">
          <label className="mb-3">
            Are you interested in any sectors or technologies in particular?
          </label>
          <Select
            name="techSector"
            initialValue={stateAuth?.investorData?.investorApproach?.techSector}
            rules={[{ message: 'Please select a sector' }]}
            placeholder="Choose sectors you are interested in"
            className="edit_input"
            style={{ backgroundColor: '#f8f8f8' }}
            onChange={(e) =>
              updateInvestorProfileData('investorApproach', {
                techSector: e.target.value,
              })
            }
            options={sectors}
          />
          
        </section>

        <section className="mb-5">
          <p className="mb-3">I Prefer to invest in</p>
          <RowOption
            currentSelected={
              stateAuth?.investorData?.investorApproach?.investmentPreference
            }
            getSelected={(value) => {
              updateInvestorProfileData('investorApproach', {
                investmentPreference: value,
              })
            }}
            options={preferred} 
          />
        </section>

        <section className="text-right mb-4">
          <Button label="Save" type={"submit"} />
        </section>
      </Form>
    </div>
  )
}
