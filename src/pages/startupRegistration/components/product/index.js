import { useState } from "react";
import { HeaderProduct, FormWrapper,
    InputWrapper, ImageWrapper,
    FileWrapper , FileText,
    FileSize , LabelButton , VideoWrapper
   } from './product.styled';
   import { useActivity } from '../../../../hooks/useBusiness';
   import RedFile from '../../../../assets/icons/redFile.svg';
   import {CustomButton} from '../../../../components/button/button.styled';
   import BlueFile from '../../../../assets/icons/bluFile.svg';

export const Product = ()=>{

    const {changePath , state :{ path}} = useActivity()
    
    const next = ()=>{
        changePath(path + 1)
    }
    
    const back  = () =>{
    
        changePath(path - 1)
    }

    return (
        <>
        <HeaderProduct>
        <h5 className='text-nowrap' > Product / Services </h5>
        <p className='text-nowrap' >Let's help you explain your product</p>   
        </HeaderProduct>
        <form style={{marginBottom:'4rem'}}   >
        <FormWrapper>
        <div className='div'>
                    <span>Product / Service Description</span>
                    <p>
                    A brief description of your product
                    </p>

                    <hr />

                    <div className='row' >
                        <div className='form-group col-12'>
                            <label>Briefly describe the users of your product or services? 250 words</label>
                            <textarea cols='5' rows='6' classNam='form-control' placeholder='Enter Brief info about your product' ></textarea>
                        </div>
                        <div className='form-group col-12'>
                            <label>What makes your solution unique from others in the market? * 250 words</label>
                            <textarea cols='5' rows='6' classNam='form-control' placeholder='Enter your uniqueness ' ></textarea>
                        </div>
                        </div>

                        <div className='form-group col-12'>
                        <VideoWrapper>
                        <label> Product demo upload</label>
                            <div style={{display:'flex'}} >
                            
                               <div className='div'  >
                               <img src={RedFile} alt='.#'  />
                                <div id='div' className='' >
                                <div className='d-flex' style={{marginLeft:'-1rem'}} >
                                <img src={BlueFile} alt='.#' style={{marginLeft:'2rem',  width:'10%', height:'10%'}} className=''  />
                                <p className='text-nowrap' style={{marginLeft:'0.2rem'}} >Product Demo</p>
                                
                                </div>
                                <div className='mx-5' >
                                    <p>2.5 mb</p>
                                </div>
                                </div>
                               </div>
                                                  
                               <div className='div'  >
                               <img src={RedFile} alt='.#'  />
                                <div id='div' className='' >
                                <div className='d-flex' style={{marginLeft:'-1rem'}} >
                                <img src={BlueFile} alt='.#' style={{marginLeft:'2rem',  width:'10%', height:'10%'}} className=''  />
                                <p className='text-nowrap' style={{marginLeft:'0.2rem'}} >Product Demo</p>
                                
                                </div>
                                <div className='mx-5' >
                                    <p>2.5 mb</p>
                                </div>
                                </div>
                               </div>
                               <div  >

       
                               </div>  
                            </div>
                        </VideoWrapper>
                    </div>

                    </div>
        </FormWrapper>
        <div className='d-flex justify-content-between' >
                    <div >
            <CustomButton background='#D0D0D1'  onClick={back} >Back</CustomButton>

                </div>
               <div>
                                <CustomButton background='#00ADEF' >Save</CustomButton>
                                <CustomButton onClick={next}   style={{marginLeft:'0.5rem', marginRight:'7rem'}}  background='#2E3192' >Next</CustomButton>
                            
                        </div>
                        </div>
        </form>
        </>
    )
}