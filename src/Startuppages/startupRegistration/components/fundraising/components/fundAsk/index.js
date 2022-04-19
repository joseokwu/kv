import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BodyWrapper, BntWrap, Terms } from './fundAsk.styled';
import {
  CustomButton,
  OutlineButton,
} from '../../../../../../Startupcomponents/button/button.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CustomSelect } from '../../../../../../Startupcomponents/select/customSelect';
import { Tag } from '../../../../../../Startupcomponents/tag/Tag';
import { fundraising } from '../../../../../../services/startUpReg';
import { LargeModal } from '../../../../../../Startupcomponents';
import { CoFounder } from '../../../teams/coFounder';
import { toast } from 'react-hot-toast';
import { useActivity } from '../../../../../../hooks/useBusiness';
import { useAuth } from '../../../../../../hooks/useAuth';

export const FundAsk = ({ setFundraising, back }) => {
  const history = useHistory();
  const { stateAuth ,  updateProfile } = useAuth();

 

  const {
    location: { hash },
  } = history;

  const optionsNumb = [
    { value: 'Seed round', label: 'Seed round' },
    { value: 'Angel round', label: 'Angel round'},
    { value: 'Series A', label: 'Series A' },
    { value: 'Series B', label: 'Series B' },
    { value: 'Series C', label: 'Series C' },
  ];
  const fundNum = [1, 2, 3, 4, 5];

  const [showModal, setShowModal] = useState(false);
  const [hasPreviousFundraising, setHasPreviousFundraising] = useState(
    stateAuth?.user?.fundraising?.hasPreviousFundraising ?? false
  );
  // const [hasLeadInvestor, setHasLeadInvestor] = useState(
  //   stateAuth?.user?.fundraising?.hasPreviousFundraising ?? 'no'
  // );

  // function btn(e) {
  //   e.preventDefault();
  //   setHasPreviousFundraising(e.target.dataset.id);
  // }

  const onSubmit = (e) => {

    e.preventDefault();

    updateProfile( "fundRaising", {
      fundingAsk: {
        hasPreviousFundraising,
        instrumentForRound: formik.getFieldProps('instrumentForRound').value,
        numberOfRounds: formik.getFieldProps('numberOfRounds').value,
        fundraisingAmount: formik.getFieldProps('fundraisingAmount').value,
        dilution: formik.getFieldProps('dilution').value,
        preMoneyValuation: formik.getFieldProps('preMoneyValuation').value,
        postMoneyValuation: formik.getFieldProps('postMoneyValuation').value,
        terms: formik.getFieldProps('terms').value,
      },
    });
   
    console.log({hasPreviousFundraising,
      instrumentForRound: formik.getFieldProps('instrumentForRound').value,
      numberOfRounds: formik.getFieldProps('numberOfRounds').value,
      fundraisingAmount: formik.getFieldProps('fundraisingAmount').value,
      dilution: formik.getFieldProps('dilution').value,
      preMoneyValuation: formik.getFieldProps('preMoneyValuation').value,
      postMoneyValuation: formik.getFieldProps('postMoneyValuation').value,
      terms: formik.getFieldProps('terms').value,})

   // history.push('#Fund Utilization');
  };
  

  const formik = useFormik({
    initialValues: {
      hasPreviousFundraising:
        stateAuth?.startupData?.fundRaising?.fundingAsk?.hasPreviousFundraising ?? false,
      description: stateAuth?.startupData?.fundRaising?.fundingAsk?.description ?? '',
      instrumentForRound: stateAuth?.startupData?.fundRaising?.fundingAsk?.instrumentForRound ?? 'Fund1',
      numberOfRounds: stateAuth?.startupData?.fundRaising?.fundingAsk?.numberOfRounds ?? 'Fund1',
      fundraisingAmount: stateAuth?.startupData?.fundRaising?.fundingAsk?.fundraisingAmount ?? '',
      dilution: stateAuth?.startupData?.fundRaising?.fundingAsk?.dilution ?? '',
      preMoneyValuation: stateAuth?.startupData?.fundRaising?.fundingAsk?.preMoneyValuation ?? '',
      postMoneyValuation:
        stateAuth?.startupData?.fundRaising?.fundingAsk?.postMoneyValuation ?? '',
      hasLeadInvestor: stateAuth?.startupData?.fundRaising?.fundingAsk?.hasLeadInvestor ?? '',
      terms: stateAuth?.startupData?.fundRaising?.fundingAsk?.terms ?? [],
    },
    validationSchema: Yup.object({
      instrumentForRound: Yup.string().required('Required'),
      fundraisingAmount: Yup.string().required('Required'),
      dilution: Yup.string().required('Required'),
      preMoneyValuation: Yup.string().required('Required'),
      postMoneyValuation: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      
    }),
   // onSubmit: (value) => onSubmit(value),
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
      <form >
        <BodyWrapper className=''>
          <p>A brief description of funding ask</p>
          <hr />
          <div className='row mt-4'>
            <div className='form-group col-12'>
              <label>Have you fundraised before?<span style={{color: "red"}}>*</span></label>
              <BntWrap>
                <button
                  className={`me-3 ${
                    hasPreviousFundraising === true ? 'active' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setHasPreviousFundraising(true);
                  }}
                >
                  Yes
                </button>
                <button
                  className={hasPreviousFundraising === false ? 'active' : '' }
                  onClick={(e) => {
                    e.preventDefault();
                    setHasPreviousFundraising(false);
                  }}
                >
                  No
                </button>
              </BntWrap>
            </div>
            <div className='form-group my-3 col-12'>
              <label>
              { hasPreviousFundraising ? 'What was the instrument for your previous round' : 'Which instrument would you prefer to use for your current round?' }
             <span style={{color: "red"}}>*</span>
              </label>
              <select
                id='instrumentForRound'
                name='instrumentForRound'
                // options={optionsNumb}
                className='cust extra'
                value={
                 
                  formik.values.instrumentForRound
                }
                onChange={formik.handleChange}
              >
                {optionsNumb.map((item, index) => {
                  return <option key={index}>{item.label}</option>;
                })}
              </select>
              {formik.touched.instrumentForRound && formik.errors.instrumentForRound ? (
                <label className="error">{formik.errors.instrumentForRound}</label>
              ) : null}
            </div>
            <div className='form-group my-2 col-lg-6 col-12'>
              <label>Select your round?<span style={{color: "red"}}>*</span></label>
              <select
                id={'numberOfRounds'}
                name={'numberOfRounds'}
                // options={optionsNumb}
                className='cust extra'
                value={
                  
                  formik.values.numberOfRounds
                }
                onChange={formik.handleChange}
              >
                {fundNum.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
            </div>
            <div className='form-group my-2 col-12'>
              <label>
                How much investment is your company looking to raise?<span style={{color: "red"}}>*</span>
              </label>
              <input
                id='fundraisingAmount'
                name='fundraisingAmount'
                type='text'
                className='form-control ps-3'
                placeholder='Enter amount'
                onBlur={formik.handleBlur}
                value={
                 formik.values.fundraisingAmount
                }
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
              <label>Dilution (%)<span style={{color: "red"}}>*</span></label>
              <input
                id='dilution'
                name='dilution'
                type='text'
                className='form-control ps-3'
                placeholder='Enter what your business does'
                onBlur={formik.handleBlur}
                value={
                 
                  formik.values.dilution
                }
                onChange={formik.handleChange}
              />
              {formik.touched.dilution && formik.errors.dilution ? (
                <label className='error'>{formik.errors.dilution}</label>
              ) : null}
            </div>
            <div className='form-group my-2 col-12'>
              <label>What is your pre-money valuation?<span style={{color: "red"}}>*</span></label>
              <input
                id='preMoneyValuation'
                name='preMoneyValuation'
                type='text'
                className='form-control ps-3'
                placeholder='Enter amount'
                onBlur={formik.handleBlur}
                value={
                  
                  formik.values.preMoneyValuation
                }
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
              <label>Post-Money valuation<span style={{color: "red"}}>*</span></label>
              <input
                id='postMoneyValuation'
                name='postMoneyValuation'
                type='text'
                className='form-control ps-3'
                placeholder='Enter what your business does'
                onBlur={formik.handleBlur}
                value={
                  
                  formik.values.postMoneyValuation
                }
                onChange={formik.handleChange}
              />
              {formik.touched.postMoneyValuation &&
              formik.errors.postMoneyValuation ? (
                <label className='error'>
                  {formik.errors.postMoneyValuation}
                </label>
              ) : null}
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
                value={
                  formik.values.terms
                }
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </BodyWrapper>
        <Terms className=''>
          <p>
            By clicking submit, you are agreeing to our{' '}
            <span>Terms of Use</span> and <span>Privacy Policy</span>. If you
            have questions, please reach out to privacy@knightventures.com
          </p>
        </Terms>
        <div className='row mt-4'>
          <div className='col-3'>
            <CustomButton
              className=''
              background='#808080'
              onClick={() => back()}
            >
              Back
            </CustomButton>
          </div>
          <div className='col-9 d-flex justify-content-end'>
            <OutlineButton
              type='submit'
              // onClick={(e) => {
              //   e.preventDefault();
              //   history.push(forwardHash());
              // }}
              onClick={(e) => {
                e.preventDefault();
                onSubmit(e)
              }}
              className='ms-2'
              style={{ marginRight: '0rem' }}
              background='none'
            >
              Next
            </OutlineButton>
          </div>
        </div>
      </form>
    </>
  );
};
