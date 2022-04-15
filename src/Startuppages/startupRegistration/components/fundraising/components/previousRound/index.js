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
  const { stateAuth } = useAuth();

  const {
    state: { fundraising },
  } = useActivity();

  const {
    location: { hash },
  } = history;
  const optionsNumb = [
    { value: 'Fund 1', label: 'Fund 1' },
    { value: 'Fund 2', label: 'Fund 2' },
    { value: 'Fund 3', label: 'Fund 3' },
  ];


  const [startDate, setStartDate] = useState(new Date());

  const [hasLeadInvestor, setHasLeadInvestor] = useState(
    stateAuth?.user?.fundRaising?.previousRound?.hasLeadInvestor ?? false
  );

  // function btn(e) {
  //  stateAuth?.user?.fundRaising?.previousRound?.dateOfFunding
  // }

  const onSubmit = () => {
    console.log({
      instrumentForRound: formik.getFieldProps('instrumentForRound').value,
      numberOfRounds: formik.getFieldProps('numberOfRounds').value,
      fundraisingAmount: formik.getFieldProps('fundraisingAmount').value,
      dilution: formik.getFieldProps('dilution').value,
      preMoneyValuation: formik.getFieldProps('preMoneyValuation').value,
      postMoneyValuation:formik.getFieldProps('postMoneyValuation').value,
      hasLeadInvestor,
      terms: formik.getFieldProps('terms').value,
      dateOfFunding:startDate.toISOString(),
    })
    setFundraising({
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
      instrumentForRound:
        stateAuth?.user?.fundRaising?.previousRound?.instrumentForRound ?? 'Fund1',
      numberOfRounds: stateAuth?.user?.fundRaising?.previousRound?.numberOfRounds ?? 'Fund1',
      fundraisingAmount: stateAuth?.user?.fundRaising?.previousRound?.fundraisingAmount ?? '',
      dilution: stateAuth?.user?.fundRaising?.previousRound?.dilution ?? '',
      preMoneyValuation: stateAuth?.user?.fundRaising?.previousRound?.preMoneyValuation ?? '',
      postMoneyValuation:
        stateAuth?.user?.fundRaising?.previousRound?.postMoneyValuation ?? '',
     
    },
    validationSchema: Yup.object({
      fundraisingAmount: Yup.string().required('Required'),
      dilution: Yup.string().required('Required'),
      preMoneyValuation: Yup.string().required('Required'),
      postMoneyValuation: Yup.string().required('Required'),
      dateOfFunding: Yup.string().required('Required'),
    }),
    onSubmit: (value) => onSubmit(value),
  });

  

  return (
    <>
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
              {optionsNumb.map((item, index) => {
                return <option key={index}>{item.label}</option>;
              })}
            </select>
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
            ) : null}
          </div>
          <div className='form-group col-12'>
            <label>Did you have a lead investor for last round?<span style={{color: "red"}}>*</span></label>
            <BntWrap>
              <button
                className={`me-3 ${hasLeadInvestor === true ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setHasLeadInvestor(true);
                }}
              >
                Yes
              </button>
              <button
                className={hasLeadInvestor === false ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  setHasLeadInvestor(false);
                }}
              >
                No
              </button>
            </BntWrap>
          </div>

          {/* <label>Investors who participated in last funding round*</label>
          <div className='row'>
            <div className='sold my-3 col-lg-12 d-flex justify-content-center'>
              <Tag
                name='+ Add Lead Investor'
                color='#4F4F4F'
                bg='rgba(183, 218, 231, 0.5)'
                padding='10px 32px'
              />
            </div>
          </div> */}

          <div className='col-12 my-5'>
            <span
              style={{
                color: '#120297',
                borderBottom: '1px solid #120297',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Add previous founding round +
            </span>
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
            type='button'
            onClick={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            className='ms-2'
            style={{ marginRight: '0rem' }}
            background='none'
          >
            Next
          </OutlineButton>
        </div>
      </div>
    </>
  );
};
