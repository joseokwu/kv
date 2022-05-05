import React from "react";
import { Tag, Modal, Button } from "../../../../components";
import edit from "../../../../assets/icons/edit.svg";
import { useAuth } from '../../../../hooks/useAuth';
import { category , industry } from '../../../../constants/domiData';
import { Input, Form, Select } from 'antd'
import { editEducationAction } from './../../../../store/actions/business/index';
const { Option } = Select

const ProfileCategory = ({ data }) => {
  return (
    <section className="profile-offering mb-3">
      <span className="text-right d-block">
        <img
          src={edit}
          alt="edit"
          data-toggle="modal"
          data-target="#editCategoryModal"
          role="button"
        />
        <Modal title="Edit" id="editCategoryModal">
          <EditCategory data={data} />
        </Modal>
      </span>

      <div>
        <section className="mb-5">
          <p className="partner-cat-header mb-4">Partner Category</p>
          <span className="cat-tag"> {data?.categories} </span>
        </section>

        <section>
          <p className="partner-cat-header mb-4">Industry</p>
          <span
            className="d-flex align-items-center flex-wrap"
            style={{ columnGap: 10, rowGap: 10 }}
          >
            <Tag name={data?.industry} color={'#40439A'} />
          </span>
        </section>
      </div>
    </section>
  )
}

export default ProfileCategory

const EditCategory = (data) => {
  const { stateAuth, updatePartnerLocalData, updatePartnerInfo } = useAuth()

  const onFinish = async (values) => {
    updatePartnerInfo()

    console.log(values)
  }
  return (
    <div className="px-4 pb-4">
       <Form
        name="Category"
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        onFinish={onFinish}
      >
      <section className="d-flex mb-4" style={{ columnGap: 23 }}>
      <section className="col-md-6 mb-4">
              <Form.Item
                name="categories"
                label="Categories"
                initialValue={stateAuth?.partnerData?.categories}
                rules={[
                  { required: true, message: 'Please select a category!' },
                ]}
              >
                <select
                  style={{ width: 200, backgroundColor: '#959596' }}
                  placeholder="select your categories"
                  onChange={(e) =>
                    updatePartnerLocalData('', {
                      categories: e.target.value,
                    })
                  }
                >
                  {category.map((item, i) => (
                    <option key={i} value={item}>
                      {' '}
                      {item}{' '}
                    </option>
                  ))}
                </select>
              </Form.Item>
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
                <select
                  id="industry"
                  style={{ width: 200, backgroundColor: '#959596' }}
                  placeholder="select your categories"
                  onChange={(e) => {
                    updatePartnerLocalData('', {
                      industry: e.target.value,
                    })
                  }}
                >
                  {industry.map((item, i) => (
                    <option value={item} key={i}>
                      {' '}
                      {item}{' '}
                    </option>
                  ))}
                </select>
              </Form.Item>
            </section>
      </section>
      <section className="text-right">
        <Button type="submit" label="Save" />
      </section>
      </Form>
    </div>
  )
}
