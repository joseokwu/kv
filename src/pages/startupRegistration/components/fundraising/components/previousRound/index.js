import { useState } from 'react';
import { BodyWrapper, BntWrap, BoxBorder } from './previous.styled';
import { CustomSelect } from "../../../../../../components/select/customSelect";
import {  PlusOutlined } from '@ant-design/icons';
import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';

export const PreviousRound = () =>{
    
    const optionsNumb = [
        { value: 'Fund 1', label: 'Fund 1' },
        { value: 'Fund 2', label: 'Fund 2' },
        { value: 'Fund 3', label: 'Fund 3' }
      ]

      const [stateDate, setStartDate] = useState(new Date())

    return (
        <>
        <BodyWrapper>
        <span className='span' > Previous Round </span>
                <p>A brief description of your previous round</p>
                <hr /> 

            <div className='row' >

            <div className='form-group col-12' >
                <label>Which instrument did you use for your previous round?*</label>
                <CustomSelect options={optionsNumb} 
                     className='cust ' placeholder='Choose your instrument for your round'  />
            </div>

            <div  className='form-group col-6' >
            <label>Select your previous round</label>
            <CustomSelect options={optionsNumb} 
                     className='cust ' placeholder='Choose round'  />
            </div>
            <div className='form-group col-12' >
                <label>In which month/year did you get funding </label>
                    <div>
                    <DatePicker className='form-control w-50 datePick' onChange={(date) => setStartDate(date)}  />
                    </div>
            
            </div>

            <div className='form-group col-12' >
                <label> How much did you raise in last funding year * </label>
                <input type='text' className='form-control' placeholder='Enter amount raised'  />
            </div>
            <div className='form-group my-2 col-12' >
                    <label > Duration (%) * </label>
                        <input type='text' className='form-control' placeholder='Enter duration for investment' />
                    </div>
                    <div className='form-group my-2 col-12' >
                    <label > What is your pre-money valuation?* </label>
                        <input type='text' className='form-control' placeholder='Enter pre-money Valuation' />
                    </div>
                    <div className='form-group my-2 col-12' >
                    <label > What is your post-money valuation?* </label>
                        <input type='text' className='form-control' placeholder='Enter post-money Valuation' />
                    </div>
                    <div className='form-group col-12' >
                    <label > Do you have a lead investor for this round?* </label>
                    <BntWrap>
                 <button className='text-primary bg-info' >Yes</button> <button className='text-muted' >No</button>
                 </BntWrap>
                    </div>
                    <label>Did you participate in last funding year ?</label>
                    <BoxBorder className='form-group my-3 col-12' >
                    <input type='file'  id='round' hidden />
                    <label className='' style={{background:'#B7DAE7', width:'46%', padding:'0.7rem', borderRadius:'12px'}} for='add' > <PlusOutlined />  Add Lead Investor</label>
                    </BoxBorder>

                    <div className='col-12 my-5' >
                    <span
                   
                    style={{color:'#120297', borderBottom:'1px solid #120297',
                        fontWeight:'600'
                    }}
                >Add previous founding round + </span>
            </div>
                    

            </div>

        </BodyWrapper>

        </>
    )
}




