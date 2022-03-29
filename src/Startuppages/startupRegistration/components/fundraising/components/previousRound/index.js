import { useState } from 'react';
import { BodyWrapper, BntWrap, BoxBorder } from './previous.styled';
import { CustomSelect } from '../../../../../../Startupcomponents/select/customSelect';
import { DatePicker } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'antd/dist/antd.css';
import { Tag } from '../../../../../../Startupcomponents/tag/Tag';

export const PreviousRound = () => {
  const optionsNumb = [
    { value: 'Fund 1', label: 'Fund 1' },
    { value: 'Fund 2', label: 'Fund 2' },
    { value: 'Fund 3', label: 'Fund 3' },
  ];

  const [startDate, setStartDate] = useState();

  const [hasLeadInvestor, setHasLeadInvestor] = useState('no');

  // function btn(e) {
  //   e.preventDefault();
  // }

  const onSubmit = (value) => {
    // fundraising(value).then((res) => {
    //   if (res?.message) {
    //     console.log(res);
    //     toast.success(res?.message);
    //   }
    // });
  };

  const formik = useFormik({
    initialValues: {
      fundraisingAmount: '',
      dilution: '',
      preMoneyValuation: '',
      postMoneyValuation: '',
      timeOfFunding: '',
    },
    validationSchema: Yup.object({
      fundraisingAmount: Yup.string().required('Required'),
      dilution: Yup.string().required('Required'),
      preMoneyValuation: Yup.string().required('Required'),
      postMoneyValuation: Yup.string().required('Required'),
      timeOfFunding: Yup.string().required('Required'),
    }),
    onSubmit: (value) => onSubmit(value),
  });

  return (
    <>
      <BodyWrapper>
        <div className='mx-2 border-bottom pb-3'>
          <p>A brief description of your previous round</p>
        </div>
        {/* <hr /> */}

        <div className='row my-4'>
          <div className='form-group col-12'>
            <label>
              Which instrument did you use for your previous round?*
            </label>
            <select
              id='instrumentForRound'
              name='instrumentForRound'
              // options={optionsNumb}
              className='cust mx-3 extra'
              // placeholder='Choose your instrument for your round'
              value={formik.values.instrumentForRound}
              onChange={formik.handleChange}
            >
              {optionsNumb.map((item, index) => {
                return <option key={index}>{item.label}</option>;
              })}
            </select>
          </div>
          <div className='form-group my-2 col-lg-6 col-12'>
            <label>Select your previous round*</label>
            <select
              id={'numberOfRounds'}
              name={'numberOfRounds'}
              // options={optionsNumb}
              className='cust mx-3 extra'
              // placeholder='Choose round'
              value={formik.values.numberOfRounds}
              onChange={formik.handleChange}
            >
              {optionsNumb.map((item, index) => {
                return <option key={index}>{item.label}</option>;
              })}
            </select>
          </div>
          <div className='form-group my-2 col-12'>
            <label>In which month/year did you get funding?*</label>
            <div>
              <DatePicker
                id='timeOfFunding'
                name='timeOfFunding'
                style={{ background: '#FAFAFC', border: 'none' }}
                className='form-control w-lg-50 w-100 datePick mx-3'
                onBlur={formik.handleBlur}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {formik.touched.timeOfFunding && !startDate ? (
              <label className='error'>{formik.errors.timeOfFunding}</label>
            ) : null}
          </div>

          <div className='form-group my-2 col-12'>
            <label> How much did you raise in last funding round?* </label>
            <input
              id='fundraisingAmount'
              name='fundraisingAmount'
              type='text'
              className='form-control ps-3'
              placeholder='Enter amount raised'
              onBlur={formik.handleBlur}
              value={formik.values.fundraisingAmount}
              onChange={formik.handleChange}
            />
            {formik.touched.fundraisingAmount &&
            formik.errors.fundraisingAmount ? (
              <label className='error'>{formik.errors.fundraisingAmount}</label>
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
            <label>What was your pre-money valuation in last round?*</label>
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
              <label className='error'>{formik.errors.preMoneyValuation}</label>
            ) : null}
          </div>
          <div className='form-group my-2 col-12'>
            <label>Post-Money valuation for last round*</label>
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
            <label>Did you have a lead investor for last round?*</label>
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

          <label>Investors who participated in last funding round*</label>
          <div className='row'>
            <div className='sold my-3 col-lg-12 d-flex justify-content-center'>
              <Tag
                name='+ Add Lead Investor'
                color='#4F4F4F'
                bg='rgba(183, 218, 231, 0.5)'
                padding='10px 32px'
              />
            </div>
          </div>

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
    </>
  );
};
