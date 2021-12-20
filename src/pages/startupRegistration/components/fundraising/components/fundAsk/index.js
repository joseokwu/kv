import { useState } from "react";
import { BodyWrapper, BntWrap, BoxBorder } from './fundAsk.styled';
import { CustomSelect } from "../../../../../../components/select/customSelect";
import {  PlusOutlined } from '@ant-design/icons'

export const FundAsk = () =>{

    const optionsNumb = [
        { value: 'Fund 1', label: 'Fund 1' },
        { value: 'Fund 2', label: 'Fund 2' },
        { value: 'Fund 3', label: 'Fund 3' }
      ]

        return (

            <>
            <BodyWrapper className='container' >
                <span className='span' > Fund Ask </span>
                <p>A brief description of funding ask</p>
                <hr />
                <div className='row' >
                    <div className='form-group col-12' >
                    <label >Have you raise fund before ? *</label>
                    <BntWrap>
                 <button className='text-primary bg-info' >Yes</button> <button className='text-muted' >No</button>
                 </BntWrap>
                    </div>
                    <div className='form-group my-3 col-12' >
                    <label >Which instrument would you prefer to use for your current round?*</label>
                    <CustomSelect options={optionsNumb} 
                     className='cust' />
                    </div>
                    <div className='form-group my-2 col-6' >
                    <label >Select your round?*</label>
                    <CustomSelect options={optionsNumb} 
                     className='cust ' />
                    </div>
                    <div className='form-group my-2 col-12' >
                    <label > How much investment is your company looking to raise?* </label>
                        <input type='text' className='form-control' placeholder='Enter Amount' />
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
                    <BoxBorder className='form-group my-3 col-12' >
                    <input type='file'  id='add' hidden />
                    <label className='' style={{background:'#B7DAE7', width:'46%', padding:'0.7rem', borderRadius:'12px'}} for='add' > <PlusOutlined />  Add Lead Investor</label>
                    </BoxBorder>
                    <div className='form-group col-12' >
                    <label > Mention any specific terms for this round If you have term sheet 500 words at most </label>
                    <textarea cols='5' rows='6' className='form-control' placeholder='Enter Terms for round' ></textarea>
                    </div>
                </div>
            </BodyWrapper>
            </>
        )

}