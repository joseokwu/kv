import { useState } from 'react'
import { BodyWrapper, BntWrap, BoxBorder } from './fundAsk.styled'
import { CustomSelect } from '../../../../../../Startupcomponents/select/customSelect'
import { PlusOutlined } from '@ant-design/icons'
import { Tag } from '../../../../../../Startupcomponents/tag/Tag'

export const FundAsk = () => {
  const optionsNumb = [
    { value: 'Fund 1', label: 'Fund 1' },
    { value: 'Fund 2', label: 'Fund 2' },
    { value: 'Fund 3', label: 'Fund 3' },
  ]

  function btn(e) {
      e.preventDefault();
  }

  return (
    <>
      <BodyWrapper className="">
        {/* <span className="span"> Fund Ask </span> */}
        <p>A brief description of funding ask</p>
        <hr />
        <div className="row">
          <div className="form-group col-12">
            <label>Have you fundraised before?*</label>
            <BntWrap>
              <button className="me-3" onClick={btn}>Yes</button>
              <button className="" onClick={btn}>No</button>
            </BntWrap>
          </div>
          <div className="form-group my-3 col-12">
            <label>
              Which instrument would you prefer to use for your current round?*
            </label>
            <CustomSelect options={optionsNumb} className="cust" />
          </div>
          <div className="form-group my-2 col-lg-6 col-12">
            <label>Select your round?*</label>
            <CustomSelect options={optionsNumb} className="cust " />
          </div>
          <div className="form-group my-2 col-12">
            <label>
              How much investment is your company looking to raise?*{' '}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Amount"
            />
          </div>
          <div className="form-group my-2 col-12">
            <label> Duration (%) * </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter duration for investment"
            />
          </div>
          <div className="form-group my-2 col-12">
            <label> What is your pre-money valuation?* </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter pre-money Valuation"
            />
          </div>
          <div className="form-group my-2 col-12">
            <label> What is your post-money valuation?* </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter post-money Valuation"
            />
          </div>
          <div className="form-group col-12">
            <label> Do you have a lead investor for this round?* </label>
            <BntWrap>
              <button className="me-3" onClick={btn}>Yes</button>
              <button className="" onClick={btn}>No</button>
            </BntWrap>
          </div>
          <div className="sold my-3">
            <Tag
              name="+ Add Co-founder"
              color="#4F4F4F"
              bg="rgba(183, 218, 231, 0.5)"
              padding="9px 30px"
            />
          </div>
          <div className="form-group col-12 mt-3">
            <div className="d-flex justify-content-between">
              <label>
                Mention any specific terms for this round If you have term sheet
              </label>
              <label style={{ color: 'rgb(130, 130, 130)' }}>
                500 words at most
              </label>
            </div>

            <textarea
              cols="5"
              rows="5"
              className="form-control"
              placeholder="Enter Terms for round"
            ></textarea>
          </div>
        </div>
      </BodyWrapper>
    </>
  )
}
