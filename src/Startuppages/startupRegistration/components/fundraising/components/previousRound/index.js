import { useState } from 'react'
import { BodyWrapper, BntWrap, BoxBorder } from './previous.styled'
import { CustomSelect } from '../../../../../../Startupcomponents/select/customSelect'
import { PlusOutlined } from '@ant-design/icons'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'
import { Tag } from '../../../../../../Startupcomponents/tag/Tag'

export const PreviousRound = () => {
  const optionsNumb = [
    { value: 'Fund 1', label: 'Fund 1' },
    { value: 'Fund 2', label: 'Fund 2' },
    { value: 'Fund 3', label: 'Fund 3' },
  ]

  const [stateDate, setStartDate] = useState(new Date())

  function btn(e) {
    e.preventDefault()
  }

  return (
    <>
      <BodyWrapper>
        {/* <span className='span' > Previous Round </span> */}
        <p>A brief description of your previous round</p>
        <hr />

        <div className="row my-5">
          <div className="form-group col-12 mx-n4 mx-lg-n0">
            <label>
              Which instrument did you use for your previous round?*
            </label>
            <CustomSelect
              options={optionsNumb}
              className="cust mx-3"
              placeholder="choose"
            />
          </div>

          <div className="form-group col-lg-6 col-12 mx-n4 mx-lg-n0">
            <label>Select your previous round*</label>
            <CustomSelect
              options={optionsNumb}
              className="cust mx-3"
              placeholder="Choose round"
            />
          </div>
          <div className="form-group col-12 mx-n4 mx-lg-n0">
            <label>In which month/year did you get funding?*</label>
            <div>
              <DatePicker
                style={{ background: '#FAFAFC', border: 'none' }}
                className="form-control w-lg-50 w-100 datePick mx-3"
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>

          <div className="form-group col-12 mx-n4 mx-lg-n0">
            <label> How much did you raise in last funding round?* </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter amount raised"
            />
          </div>
          <div className="form-group my-2 col-12 mx-n4 mx-lg-n0">
            <label>Dilution (%)*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter duration for investment"
            />
          </div>
          <div className="form-group my-2 col-12 mx-n4 mx-lg-n0">
            <label>What was your pre-money valuation in last round?*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter pre-money Valuation"
            />
          </div>
          <div className="form-group my-2 col-12 mx-n4 mx-lg-n0">
            <label>Post-Money valuation for last round*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter post-money Valuation"
            />
          </div>
          <div className="form-group col-12 mx-n4 mx-lg-n0">
            <label>Did you have a lead investor for last round?*</label>
            <BntWrap>
              <button className="me-3" onClick={btn}>
                Yes
              </button>
              <button className="" onClick={btn}>
                No
              </button>
            </BntWrap>
          </div>
          <label>Investors who participated in last funding round*</label>
          <div className="sold my-3 col-12 mx-n3 mx-lg-n0">
            <Tag
              name="+ Add Lead Investor"
              color="#4F4F4F"
              bg="rgba(183, 218, 231, 0.5)"
              padding="9px"
            />
          </div>

          <div className="col-12 my-5">
            <span
              style={{
                color: '#120297',
                borderBottom: '1px solid #120297',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Add previous founding round +{' '}
            </span>
          </div>
        </div>
      </BodyWrapper>
    </>
  )
}
