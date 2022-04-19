import { useState, useEffect } from 'react';
import { BodyWrapper, BntWrap, BoxBorder, Terms } from './previous.styled';
import { useHistory } from 'react-router-dom';
import {
  CustomButton,
  OutlineButton,
} from '../../../../../../Startupcomponents/button/button.styled';
import { CustomSelect } from '../../../../../../Startupcomponents/select/customSelect';
import { DatePicker } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'antd/dist/antd.css';
import { Tag } from '../../../../../../Startupcomponents/tag/Tag';
import { useActivity } from '../../../../../../hooks/useBusiness';
import { useAuth } from '../../../../../../hooks/useAuth';

export const PreviousRound = ({ setFundraising }) => {
  const history = useHistory();
  const { stateAuth , updateProfile } = useAuth();


  const optionsNumb = [
    { value: 'Seed round', label: 'Seed round' },
    { value: 'Angel round', label: 'Angel round'},
    { value: 'Series A', label: 'Series A' },
    { value: 'Series B', label: 'Series B' },
    { value: 'Series C', label: 'Series C' },
  ];
  const fundNum = [1, 2, 3, 4, 5];

  const [startDate, setStartDate] = useState(new Date());

  const [hasLeadInvestor, setHasLeadInvestor] = useState(
    stateAuth?.user?.fundRaising?.previousRound?.hasLeadInvestor ?? false
  );

  // function btn(e) {
  //  stateAuth?.user?.fundRaising?.previousRound?.dateOfFunding
  // }

  const onSubmit = (e) => {
    
    e.preventDefault();
    console.log('hello')
    updateProfile("fundRaising", {
      previousRound: {
        instrumentForRound: formik.getFieldProps('instrumentForRound').value,
        numberOfRounds: formik.getFieldProps('numberOfRounds').value,
        fundraisingAmount: formik.getFieldProps('fundraisingAmount').value,
        dilution: formik.getFieldProps('dilution').value,
        preMoneyValuation: formik.getFieldProps('preMoneyValuation').value,
        postMoneyValuation:formik.getFieldProps('postMoneyValuation').value,
        hasLeadInvestor,
        dateOfFunding:startDate.toISOString(),
       
      },
    });

    history.push('#Financial Projection');
  };

  const formik = useFormik({
    initialValues: {
      dateOfFunding:stateAuth?.startupData?.fundRaising?.previousRound?.dateOfFunding ?? startDate ,
      instrumentForRound:
        stateAuth?.startupData?.fundRaising?.previousRound?.instrumentForRound ?? '',
      numberOfRounds: stateAuth?.startupData?.fundRaising?.previousRound?.numberOfRounds ?? '',
      fundraisingAmount: stateAuth?.startupData?.fundRaising?.previousRound?.fundraisingAmount ?? '',
      dilution: stateAuth?.startupData?.fundRaising?.previousRound?.dilution ?? '',
      preMoneyValuation: stateAuth?.startupData?.fundRaising?.previousRound?.preMoneyValuation ?? '',
      postMoneyValuation:
        stateAuth?.startupData?.fundRaising?.previousRound?.postMoneyValuation ?? '',
    },
    validationSchema: Yup.object({
      instrumentForRound: Yup.string().required('Required'),
      numberOfRounds: Yup.string().required('Required'),
      fundraisingAmount: Yup.string().required('Required'),
      dilution: Yup.string().required('Required'),
      preMoneyValuation: Yup.string().required('Required'),
      postMoneyValuation: Yup.string().required('Required'),
      dateOfFunding: Yup.string().required('Required'),
   
    }),
  
  });

  

  return (
    <>
       <form >
      <BodyWrapper>
        <div className='mx-1 border-bottom pb-3'>
          <p>A brief description of your previous round</p>
        </div>
        {/* <hr /> */}

        <div className='row my-4'>
        
          <div className='form-group col-12'>
            <label>
              Which instrument did you use for your previous round?<span style={{color: "red"}}>*</span>
            </label>
            <select
              id='instrumentForRound'
              name='instrumentForRound'
              // options={optionsNumb}
              className='cust mx-3 px-2 extra'
              // placeholder='Choose your instrument for your round'
              value={
                
                formik.values.instrumentForRound
              }
              onChange={formik.handleChange}
            >
              {optionsNumb.map((item, index) => {
                return <option key={index}>{item.label}</option>;
              })}
            </select>
          </div>

          <div className='form-group my-2 col-lg-6 col-12'>
            <label>Select your previous round<span style={{color: "red"}}>*</span></label>
            <select
              id={'numberOfRounds'}
              name={'numberOfRounds'}
              // options={optionsNumb}
              className='cust mx-3 px-2 extra'
              // placeholder='Choose round'
              value={
                
                formik.values.numberOfRounds
              }
              onChange={formik.handleChange}
            >
              {fundNum.map((item, index) => {
                return <option key={index}>{item}</option>;
              })}
            </select>

            {formik.touched.numberOfRounds && formik.errors.numberOfRounds ? (
                <label className="error">{formik.errors.numberOfRounds}</label>
              ) : null}  

          </div>
          <div className='form-group my-2 col-12'>
            <label>In which month/year did you get funding?<span style={{color: "red"}}>*</span></label>
            <div>
              <DatePicker
                id='dateOfFunding'
                name='dateOfFunding'
                style={{ background: '#FAFAFC', border: 'none' }}
                selected={startDate}
                className='form-control w-lg-50 w-100 datePick mx-3'
                onBlur={formik.handleBlur}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {formik.touched.dateOfFunding && !startDate ? (
              <label className='error'>{formik.errors.dateOfFunding}</label>
            ) : null}
          </div>

          <div className='form-group my-2 col-12'>
            <label> How much did you raise in last funding round?<span style={{color: "red"}}>*</span></label>
            <input
              id='fundraisingAmount'
              name='fundraisingAmount'
              type='text'
              className='form-control ps-3'
              placeholder='Enter amount raised'
              onBlur={formik.handleBlur}
              value={
                
                formik.values.fundraisingAmount
              }
              onChange={formik.handleChange}
            />
            {formik.touched.fundraisingAmount &&
            formik.errors.fundraisingAmount ? (
              <label className='error'>{formik.errors.fundraisingAmount}</label>
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
            <label>What was your pre-money valuation in last round?<span style={{color: "red"}}>*</span></label>
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
              <label className='error'>{formik.errors.preMoneyValuation}</label>
            ) : null}
          </div>
          <div className='form-group my-2 col-12'>
            <label>Post-Money valuation for last round<span style={{color: "red"}}>*</span></label>
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
            ) : null }
          </div>
      
        </div>
      </BodyWrapper>
      <Terms className=''>
        <p>
          By clicking submit, you are agreeing to our <span>Terms of Use</span>{' '}
          and <span>Privacy Policy</span>. If you have questions, please reach
          out to privacy@knightventures.com
        </p>
      </Terms>
      <div className='row mt-4'>
        <div className='col-3'>
          <CustomButton
            className=''
            background='#808080'
            onClick={() => history.push('#Cap Table')}
          >
            Back
          </CustomButton>
        </div>
        <div className='col-9 d-flex justify-content-end'>
          <OutlineButton
            type='submit'
            onClick={(e) => {
              e.preventDefault();
              onSubmit(e);
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
