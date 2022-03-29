import React, { useState } from 'react'
import { BodyWrapper, BntWrap } from './fundAsk.styled'
import { useFormik } from 'formik'
import { CustomSelect } from '../../../../../../Startupcomponents/select/customSelect'
import { Tag } from '../../../../../../Startupcomponents/tag/Tag'
import { fundraising } from '../../../../../../services/startUpReg'
import { LargeModal } from '../../../../../../Startupcomponents'
import { CoFounder } from '../../../teams/coFounder'
// import { toast } from 'react-hot-toast';

export const FundAsk = () => {
  const optionsNumb = [
    { value: 'Fund 1', label: 'Fund 1' },
    { value: 'Fund 2', label: 'Fund 2' },
    { value: 'Fund 3', label: 'Fund 3' },
  ]
  const [showModal, setShowModal] = useState(false)

  function btn(e) {
    e.preventDefault()
  }

  // const onSubmit = (value) => {
  //   fundraising(value).then(res =>{
  //     if(res?.message){
  //       console.log(res)
  //       toast.success(res?.message)
  //     }
  //   })
  // }

  // const formik = useFormik ({
  //   initialValues: {
  //     hasPreviousFundraising: false,
  //     description: '',
  //     instrumentForRound: 'instrumentForRound',
  //     numberOfRounds: 'numberOfRounds',
  //     fundraisingAmount: '',
  //     dilution: '',
  //     preMoneyValuation: '',
  //     hasLeadInvestor: '',
  //     terms: []
  //   },
  //   validateOnBlur: true,
  //   onSubmit: (value) => onSubmit(value)
  // })

  return (
    <>
      {showModal ? (
        // <LargeModal id="cofounder" title="" closeModal={setShowModal}>
        //   <CoFounder />
        // </LargeModal>
        <LargeModal id="cofounder" title="" closeModal={setShowModal}>
          <CoFounder />
        </LargeModal>
      ) : (
        <span></span>
      )}
      <form>
        <BodyWrapper className="">
          <p>A brief description of funding ask</p>
          <hr />
          <div className="row mt-4">
            <div className="form-group col-12">
              <label>Have you fundraised before?*</label>
              <BntWrap>
                <button className="me-3" onClick={btn}>
                  Yes
                </button>
                <button className="" onClick={btn}>
                  No
                </button>
              </BntWrap>
            </div>
            <div className="form-group my-3 col-12">
              <label>
                Which instrument would you prefer to use for your current
                round?*
              </label>
              <CustomSelect
                options={optionsNumb}
                className="cust"
                // value={formik.value.instrumentForRound}
                // onChange={(value) => formik.setFieldValue('instrumentForRound', value.value)}
              />
            </div>
            <div className="form-group my-2 col-lg-6 col-12">
              <label>Select your round?*</label>
              <CustomSelect
                options={optionsNumb}
                className="cust"
                // value={formik.value.numberOfRounds}
                // onChange={(value) => formik.setFieldValue('numberOfRounds', value.value)}
              />
            </div>
            <div className="form-group my-2 col-12">
              <label>
                How much investment is your company looking to raise?*
              </label>
              <input
                name="fundraisingAmount"
                type="text"
                className="form-control ps-3"
                placeholder="Enter amount"
                // value={formik.values.fundraisingAmount}
                // onChange={formik.handleChange}
              />
            </div>
            <div className="form-group my-2 col-12">
              <label>Dilution (%)*</label>
              <input
                name="dilution"
                type="text"
                className="form-control ps-3"
                placeholder="Enter what your business does"
                // value={formik.values.dilution}
                // onChange={formik.handleChange}
              />
            </div>
            <div className="form-group my-2 col-12">
              <label>What is your pre-money valuation?*</label>
              <input
                name="preMoneyValuation"
                type="text"
                className="form-control ps-3"
                placeholder="Enter amount"
                // value={formik.values.preMoneyValuation}
                // onChange={formik.handleChange}
              />
            </div>
            <div className="form-group my-2 col-12">
              <label>Post-Money valuation*</label>
              <input
                name="postMoneyValuation"
                type="text"
                className="form-control ps-3"
                placeholder="Enter what your business does"
                // value={formik.values.postMoneyValuation}
                // onChange={formik.handleChange}
              />
            </div>
            <div className="form-group col-12">
              <label> Do you have a lead investor for this round?* </label>
              <BntWrap>
                <button className="me-3" onClick={btn}>
                  Yes
                </button>
                <button className="" onClick={btn}>
                  No
                </button>
              </BntWrap>
            </div>
            <div className="sold my-3">
              <div className="d-flex justify-content-center" data-target="#cofounder" onClick={() => setShowModal(true)}>
                <Tag
                  name="+ Add Lead Investor"
                  color="#4F4F4F"
                  bg="rgba(183, 218, 231, 0.5)"
                  padding="9px 30px"
                />
              </div>
            </div>
            <div className="form-group col-12 mt-3">
              <div className="d-flex justify-content-between">
                <label>
                  Mention any specific terms for this round If you have term
                  sheet
                </label>
                <label style={{ color: 'rgb(130, 130, 130)' }}>
                  500 words at most
                </label>
              </div>

              <textarea
                name="terms"
                cols="5"
                rows="5"
                className="form-control ps-3"
                placeholder="Enter Terms for round"
                // value={formik.values.terms}
                // onChange={formik.handleChange}
              />
            </div>
          </div>
        </BodyWrapper>
      </form>
    </>
  )
}
