import { useState } from "react";
import { BodyWrapper, BntWrap, BoxBorder } from './fundAsk.styled';
import { CustomSelect } from "../../../../../../components/select/customSelect";
import {  PlusOutlined } from '@ant-design/icons'
import {Tag} from '../../../../../../components/tag/Tag';

export const FundAsk = () =>{

    const optionsNumb = [
        { value: 'Fund 1', label: 'Fund 1' },
        { value: 'Fund 2', label: 'Fund 2' },
        { value: 'Fund 3', label: 'Fund 3' }
      ]

        return (

            <>
            <BodyWrapper className='' >
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
                    <div className='form-group my-2 col-lg-6 col-12' >
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
                    <BoxBorder className=' my-3 ' >
                    <Tag name='+ Add Co-founder' color='#646464' bg='#00a0ff' padding="8px 14px"  />
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