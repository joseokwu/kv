import React, { useState } from 'react';
import { BodyWrapper, BntWrap } from './fundAsk.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CustomSelect } from '../../../../../../Startupcomponents/select/customSelect';
import { Tag } from '../../../../../../Startupcomponents/tag/Tag';
import { fundraising } from '../../../../../../services/startUpReg';
import { LargeModal } from '../../../../../../Startupcomponents';
import { CoFounder } from '../../../teams/coFounder';
import { toast } from 'react-hot-toast';

export const FundAsk = () => {
  const optionsNumb = [
    { value: 'Fund 1', label: 'Fund 1' },
    { value: 'Fund 2', label: 'Fund 2' },
    { value: 'Fund 3', label: 'Fund 3' },
  ];
  const [showModal, setShowModal] = useState(false);
  const [havePreviouslyFundraised, setHavePreviouslyFundraised] =
    useState('no');
  const [hasLeadInvestor, setHasLeadInvestor] = useState('no');

  // function btn(e) {
  //   e.preventDefault();
  //   setHavePreviouslyFundraised(e.target.dataset.id);
  // }

  const onSubmit = (value) => {
    fundraising(value).then((res) => {
      if (res?.message) {
        console.log(res);
        toast.success(res?.message);
      }
    });
  };

  const formik = useFormik({
    initialValues: {
      hasPreviousFundraising: false,
      description: '',
      instrumentForRound: 'instrumentForRound',
      numberOfRounds: 'numberOfRounds',
      fundraisingAmount: '',
      dilution: '',
      preMoneyValuation: '',
      postMoneyValuation: '',
      hasLeadInvestor: '',
      terms: [],
    },
    validationSchema: Yup.object({
      fundraisingAmount: Yup.string().required('Required'),
      dilution: Yup.string().required('Required'),
      preMoneyValuation: Yup.string().required('Required'),
      postMoneyValuation: Yup.string().required('Required'),
    }),
    onSubmit: (value) => onSubmit(value),
  });

  return (
    <>
      {showModal ? (
        // <LargeModal id="cofounder" title="" closeModal={setShowModal}>
        //   <CoFounder />
        // </LargeModal>
        <LargeModal id='cofounder' title='' closeModal={setShowModal}>
          <CoFounder />
        </LargeModal>
      ) : (
        <span></span>
      )}
      <form>
        <BodyWrapper className=''>
          <p>A brief description of funding ask</p>
          <hr />
          <div className='row mt-4'>
            <div className='form-group col-12'>
              <label>Have you fundraised before?*</label>
              <BntWrap>
                <button
                  className={`me-3 ${
                    havePreviouslyFundraised === 'yes' && 'active'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setHavePreviouslyFundraised('yes');
                  }}
                >
                  Yes
                </button>
                <button
                  className={havePreviouslyFundraised === 'no' && 'active'}
                  onClick={(e) => {
                    e.preventDefault();
                    setHavePreviouslyFundraised('no');
                  }}
                >
                  No
                </button>
              </BntWrap>
            </div>
            <div className='form-group my-3 col-12'>
              <label>
                Which instrument would you prefer to use for your current
                round?*
              </label>
              <select
                id='instrumentForRound'
                name='instrumentForRound'
                // options={optionsNumb}
                className='cust extra'
                value={formik.values.instrumentForRound}
                onChange={formik.handleChange}
              >
                {optionsNumb.map((item, index) => {
                  return <option key={index}>{item.label}</option>;
                })}
              </select>
            </div>
            <div className='form-group my-2 col-lg-6 col-12'>
              <label>Select your round?*</label>
              <select
                id={'numberOfRounds'}
                name={'numberOfRounds'}
                // options={optionsNumb}
                className='cust extra'
                value={formik.values.numberOfRounds}
                onChange={formik.handleChange}
              >
                {optionsNumb.map((item, index) => {
                  return <option key={index}>{item.label}</option>;
                })}
              </select>
            </div>
            <div className='form-group my-2 col-12'>
              <label>
                How much investment is your company looking to raise?*
              </label>
              <input
                id='fundraisingAmount'
                name='fundraisingAmount'
                type='text'
                className='form-control ps-3'
                placeholder='Enter amount'
                onBlur={formik.handleBlur}
                value={formik.values.fundraisingAmount}
                onChange={formik.handleChange}
              />
              {formik.touched.fundraisingAmount &&
              formik.errors.fundraisingAmount ? (
                <label className='error'>
                  {formik.errors.fundraisingAmount}
                </label>
              ) : null}
            </div>
            <div className='form-group my-2 col-12'>
              <label>Dilution (%)*</label>
              <input
                id='dilution'
                name='dilution'
                type='text'
                className='form-control ps-3'
                placeholder='Enter what your business does'
                onBlur={formik.handleBlur}
                value={formik.values.dilution}
                onChange={formik.handleChange}
              />
              {formik.touched.dilution && formik.errors.dilution ? (
                <label className='error'>{formik.errors.dilution}</label>
              ) : null}
            </div>
            <div className='form-group my-2 col-12'>
              <label>What is your pre-money valuation?*</label>
              <input
                id='preMoneyValuation'
                name='preMoneyValuation'
                type='text'
                className='form-control ps-3'
                placeholder='Enter amount'
                onBlur={formik.handleBlur}
                value={formik.values.preMoneyValuation}
                onChange={formik.handleChange}
              />
              {formik.touched.preMoneyValuation &&
              formik.errors.preMoneyValuation ? (
                <label className='error'>
                  {formik.errors.preMoneyValuation}
                </label>
              ) : null}
            </div>
            <div className='form-group my-2 col-12'>
              <label>Post-Money valuation*</label>
              <input
                id='postMoneyValuation'
                name='postMoneyValuation'
                type='text'
                className='form-control ps-3'
                placeholder='Enter what your business does'
                onBlur={formik.handleBlur}
                value={formik.values.postMoneyValuation}
                onChange={formik.handleChange}
              />
              {formik.touched.postMoneyValuation &&
              formik.errors.postMoneyValuation ? (
                <label className='error'>
                  {formik.errors.postMoneyValuation}
                </label>
              ) : null}
            </div>
            <div className='form-group col-12'>
              <label> Do you have a lead investor for this round?* </label>
              <BntWrap>
                <button
                  className={`me-3 ${hasLeadInvestor === 'yes' && 'active'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setHasLeadInvestor('yes');
                  }}
                >
                  Yes
                </button>
                <button
                  className={hasLeadInvestor === 'no' && 'active'}
                  onClick={(e) => {
                    e.preventDefault();
                    setHasLeadInvestor('no');
                  }}
                >
                  No
                </button>
              </BntWrap>
            </div>
            <div className='sold my-3'>
              <div
                className='d-flex justify-content-center'
                data-target='#cofounder'
                onClick={() => setShowModal(true)}
              >
                <Tag
                  name='+ Add Co-founder'
                  color='#4F4F4F'
                  bg='rgba(183, 218, 231, 0.5)'
                  padding='9px 30px'
                />
              </div>
            </div>
            <div className='form-group col-12 mt-3'>
              <div className='d-flex justify-content-between'>
                <label>
                  Mention any specific terms for this round If you have term
                  sheet
                </label>
                <label style={{ color: 'rgb(130, 130, 130)' }}>
                  500 words at most
                </label>
              </div>

              <textarea
                id='terms'
                name='terms'
                cols='5'
                rows='5'
                className='form-control ps-3'
                placeholder='Enter Terms for round'
                value={formik.values.terms}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </BodyWrapper>
      </form>
    </>
  );
};
