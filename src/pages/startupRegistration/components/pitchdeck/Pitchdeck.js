import {useState} from 'react';
import { HeaderPitch, FormWrapper,
     InputWrapper, ImageWrapper,
     FileWrapper , FileText,
     FileSize , LabelButton , VideoWrapper
    } from './pitch.styled';
    import DownloadIcon from '../../../../assets/icons/downloadIcon.svg';
    import RedFile from '../../../../assets/icons/redFile.svg';
    import BlueFile from '../../../../assets/icons/bluFile.svg';
    import { DownloadOutlined } from "@ant-design/icons";
    import { useActivity } from '../../../../hooks/useBusiness';
    import {CustomButton} from '../../../../components/button/button.styled';

export const PitchDeck = () =>{

    const {changePath , state :{ path}} = useActivity()
    
const next = ()=>{
    changePath(path + 1)
}

const back  = () =>{

    changePath(path - 1)
}

    return (
        <>
            <HeaderPitch>
            <h5> Pitch Deck </h5>
        <p>Let's get to know your startup</p> 
            </HeaderPitch>
            <form style={{marginBottom:'4rem'}} >
                <FormWrapper>
                <div className='div'>
                    <span>Pitch Deck</span>
                    <p>
                    A brief presentation and overview about you startup. It can be a pdf, powerpoint presentation or keynote document
                    </p>

                    <hr />

                        <div className='row' >
                        <div className='form-group col-12'>
                    <label>Upload a Pitch deck for your startup</label>
                        <FileWrapper className='d-flex justify-content-center text-center' >
                            <img src={DownloadIcon} alt='#'  />
                            <FileText>Drag & Drop</FileText>
                            <FileText >Drag files or click here to upload </FileText>
                            <FileSize> { '(Max. File size 5mb)' } </FileSize>
                                <input type='file' id='pitch-doc'  hidden />
                                <LabelButton for='pitch-doc' >Upload Files</LabelButton>
                        </FileWrapper>
                </div>
                <div className='form-group col-12'>
                <label> Paste Youtube Link of pitch video </label>
                    <div className='d-flex' >
                    <input type='text' 
                      className='form-control ' />
                    <button className='button' >Upload</button>
                    </div>
                    <FileWrapper className='d-flex justify-content-center text-center'  >
                            <img src={DownloadIcon} alt='#' />
                            <FileText>Drag & Drop</FileText>
                            <FileText  >Drag files or click here to upload </FileText>
                            <FileSize> { '(Max. File size 5mb)' } </FileSize>
                                <input type='file' id='pitch-doc'  hidden />
                                <LabelButton for='pitch-doc' >Upload Files</LabelButton>
                        </FileWrapper>
                </div>
                <div className='form-group col-12'>
                        <VideoWrapper>
                        <label> Pitch deck uploaded</label>
                            <div style={{display:'flex'}} >
                               <div className='div' >
                                    
                    <img src={ DownloadOutlined } alt='.'/>
                               
                                   <div id='div' >
                                   
                                   </div>
                               </div>
                               <div className='div' >

                                   <div id='div'>

                                   </div>
                               </div>  
                            </div>
                        </VideoWrapper>
                    </div>
            
            
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


