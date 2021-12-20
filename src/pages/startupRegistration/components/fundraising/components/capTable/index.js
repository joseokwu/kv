import { BodyWrapper, DownloadableButton, 
    FileWrapper, FileText , FileSize , LabelButton,
    VideoWrapper
    }  from './cap.styled.js';

import { CloudUploadOutlined } from '@ant-design/icons';
import DownloadIcon from '../../../../../../assets/icons/downloadIcon.svg';
import RedFile from '../../../../../../assets/icons/redFile.svg';
import BluFile from '../../../../../../assets/icons/bluFile.svg';

export const CapTable = () =>{

    return(
        <>

        <BodyWrapper>
        <span className='span' > Cap Table </span>
                <p>A document containing all your Cap Table and statements for your business.  </p>

            <hr />

            <div className=' row my-5'  >
                <div className='col-6 form-group' >
                <label>Total fund raised till date (if any)</label>
                <input type='text' className='form-control' placeholder='Enter Amount raised' />
                </div>
                <div className='col-6 form-group' >
                <label>Total capital raised by founders *</label>
                <input type='text' className='form-control' placeholder='Enter Amount raised by founders' />
                </div>
                <div className='col-12 my-3' >
                <DownloadableButton href='.' > 
            <CloudUploadOutlined className='mx-2' /> Download Capital table sample here
             </DownloadableButton>
                </div>
                <div className='col-12 my-5' >
    <FileWrapper className='d-flex justify-content-center text-center'  >
    <img src={DownloadIcon} alt='#' />
                     <FileText>Drag & Drop</FileText>
                     <FileText  >Drag files or click here to upload </FileText>
                    <FileSize> { '(Max. File size 5mb)' } </FileSize>
                         <input type='file' id='cap'  hidden />
                         <LabelButton for='cap' >Upload Files</LabelButton>

        </FileWrapper>
        </div>
        <div className='col-12 my-5' >
            <VideoWrapper>
            <label> Cap table uploaded</label>
            <div className='div'  >
                               <img src={RedFile} alt='.#'  />
                                <div id='div' className='' >
                                <div className='d-flex' style={{marginLeft:'-1.2rem'}} >
                                <img src={BluFile} alt='.#' style={{marginLeft:'2rem',  width:'10%', height:'10%'}} className=''  />
                                <p className='' style={{marginLeft:'0.2rem', fontSize:'0.9rem'}} >Product Demo</p>
                                
                                </div>
                                <p className='my-n2 p' >2.5 mb</p>
                                
                                </div>
                 </div>
            </VideoWrapper>
        </div>
            </div>

        </BodyWrapper>

        </>
    )
}



