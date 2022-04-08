import React, { useState } from 'react'
import {
  BodyWrapper,
  DownloadableButton,
  FileWrapper,
  FileText,
  FileSize,
  LabelButton,
  VideoWrapper,
  Terms,
} from './utilize.styled';
import { useHistory } from 'react-router-dom';
import {
  CustomButton,
  OutlineButton,
} from '../../../../../../Startupcomponents/button/button.styled';
import Download from '../../../../../../assets/icons/downloadoutline.svg';
import DownloadIcon from '../../../../../../assets/icons/download.svg';
import RedFile from '../../../../../../assets/icons/redFile.svg';
import BluFile from '../../../../../../assets/icons/bluFile.svg';
import { upload } from './../../../../../../services/utils';
import { useAuth } from './../../../../../../hooks/useAuth';
import { CircularLoader } from '../../../../../../Startupcomponents/CircluarLoader/CircularLoader';
import toast from 'react-hot-toast';



export const FundUtilization = ({setFundraising}) => {
  const history = useHistory();
  const { stateAuth } = useAuth();
  const [fileDoc, setFileDoc] = useState(stateAuth?.user?.fundRaising?.fundUtilization?.files ?? null);
  const [videoDoc, setVidDoc] = useState(null);
  const [logoUploading , setLogoUploading] = useState(false);
  const {
    location: { hash },
  } = history;

  const handleChange = async(e) => {

    const { files, name } = e.target;
    const formData = new FormData();
    formData.append("dir", "kv");
    formData.append("ref", stateAuth.user?.userId);
    formData.append("type", "image");
    formData.append(0 , files[0])

    try {
      setLogoUploading(true);
      const response = await upload(formData)
      console.log(response) 
      setFileDoc(response?.path)
      setLogoUploading(false)

    } catch(error) {
      console.log(error)
      toast.error(error?.res?.data?.message || 'The was an error updating pitch deck');
    }

  }


 const onSubmit = () =>{
   console.log(fileDoc)
   setFundraising({
    fundUtilization :{
      files:fileDoc
    }
   })
 }


  return (
    <>
      <BodyWrapper>
        <p className='mx-n5 mx-lg-n0'>
          A document containing all your financial plan and statements for your
          business.
        </p>
        <hr className='mx-n5 mx-lg-n0' />

        <div className=' my-5'>
          <div className=''>
            <DownloadableButton href='.' className='mx-n5 mx-lg-n0'>
              <img className='pr-2' src={Download} alt='' />
              Download fund utilization template here
            </DownloadableButton>
          </div>
          <div className='my-5'>
            <FileWrapper className='d-flex justify-content-center text-center mx-n5 mx-lg-n0'>
              {
                fileDoc !== null ? (
                  <img src={RedFile} alt='.' 
                  style={{width:'70px', height:'70px'}}
                   />
                ):(
                  logoUploading ? <CircularLoader color={'#000'} /> : 
                 <>
                 <img src={DownloadIcon} alt='#' />
              <FileText>Drag & Drop</FileText>
              <FileText>Drag files or click here to upload </FileText>
              <FileSize> {'(Max. File size 5mb)'} </FileSize>
              </>
                )
              }
              <input type='file'
               id='utilize'
               onChange={handleChange}
                hidden />
              <LabelButton for='utilize'>Upload Files</LabelButton>
            </FileWrapper>
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
            background='#D0D0D1'
            onClick={() => history.push('#Funding Ask')}
          >
            Back
          </CustomButton>
        </div>
        <div className='col-9 d-flex justify-content-lg-end'>
          <OutlineButton
            type='button'
            onClick={(e) => {
              e.preventDefault();
              history.push('#Cap Table');
              onSubmit();
            }}
            className='ms-2'
            style={{ marginRight: '5rem' }}
            background='none'
            
          >
            Next
          </OutlineButton>
        </div>
      </div>
    </>
  );
};
