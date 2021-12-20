
import { BodyWrapper, DownloadableButton, 
FileWrapper, FileText , FileSize , LabelButton,
VideoWrapper
}  from './utilize.styled';
import { CloudUploadOutlined } from '@ant-design/icons';
import DownloadIcon from '../../../../../../assets/icons/downloadIcon.svg';
import RedFile from '../../../../../../assets/icons/redFile.svg';
import BluFile from '../../../../../../assets/icons/bluFile.svg';


export const FundUtilization = () =>{

    return (
        <>
    <BodyWrapper>
    <span className='span' > Fund Utilization </span>
                <p>  A document containing all your financial plan and statements for your business.  </p>
                <hr />

        <div className=' my-5' >

        <div>
            <DownloadableButton href='.' > 
            <CloudUploadOutlined className='mx-2' /> Download fund utilization template here
             </DownloadableButton>
        </div>
        <div className='my-5' >
    <FileWrapper className='d-flex justify-content-center text-center'  >
    <img src={DownloadIcon} alt='#' />
                     <FileText>Drag & Drop</FileText>
                     <FileText  >Drag files or click here to upload </FileText>
                    <FileSize> { '(Max. File size 5mb)' } </FileSize>
                         <input type='file' id='utilize'  hidden />
                         <LabelButton for='utilize' >Upload Files</LabelButton>

        </FileWrapper>
        </div>

        <div className='my-5' >
            <VideoWrapper>
            <label> Financial plan uploaded</label>
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


