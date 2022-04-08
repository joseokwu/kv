import {
  BodyWrapper,
  DownloadableButton,
  FileWrapper,
  FileText,
  FileSize,
  LabelButton,
  VideoWrapper,
  Terms,
} from './financial.styled';
import { useHistory } from 'react-router-dom';
import {
  CustomButton,
  OutlineButton,
} from '../../../../../../Startupcomponents/button/button.styled';
import Download from '../../../../../../assets/icons/downloadoutline.svg';
import DownloadIcon from '../../../../../../assets/icons/download.svg';
import RedFile from '../../../../../../assets/icons/redFile.svg';
import BluFile from '../../../../../../assets/icons/bluFile.svg';
import { useActivity } from '../../../../../../hooks/useBusiness';
import { updateFounderProfile } from '../../../../../../services';
import { useAuth } from '../../../../../../hooks/useAuth';
import toast from 'react-hot-toast';
import { CircularLoader } from '../../../../../../Startupcomponents/CircluarLoader/CircularLoader';
import { upload } from './../../../../../../services/utils';
import { useState } from 'react';


export const FinancialProjection = () => {
  const {
    state: { fundraising },
  } = useActivity();
  const history = useHistory();
  const { stateAuth } = useAuth();
  const [logoUploading , setLogoUploading] = useState(false);
  const [fileDoc, setFileDoc] = useState(stateAuth?.user?.fundRaising?.financialProjection?.files ?? null);
  const {
    location: { hash },
    push
  } = history;

  function btn(e) {
    e.preventDefault();
  }

  const handleChange = async(e) => {

    const { files} = e.target;
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

  const handleSubmit = async(e) =>{
    try{
      e.preventDefault();
      console.log('sending...')
      const fund = {
        type: 'fundRaising',
          accType: 'startup',
          values:{
            ...fundraising,
            financialProjection:{
              files:fileDoc
            }
          },
        userId: stateAuth?.user?.userId,
      }
      console.log(fund)
      let result = await updateFounderProfile(fund);
      toast.success(result?.message)
      // push('/startup/dashboard')
    }catch(err){
      toast.error(err?.response?.data?.message)
    }
    

  }

  return (
    <>
      <BodyWrapper>
        <div className='mt-5'>
          <p>
            A document containing all your financial plan and statements for
            your business.
          </p>
        </div>

        <hr />

        <div className='my-5'>
          <div>
            <DownloadableButton href='.'>
              <img className='pr-2' src={Download} alt='' />
              Download fund utilization template here
            </DownloadableButton>
          </div>
          <div className='col-12 my-5'>
            <FileWrapper className='d-flex justify-content-center text-center'>
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
              onChange={handleChange} 
              id='utilize' hidden />
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
            onClick={() => history.push('#Previous Round')}
          >
            Back
          </CustomButton>
        </div>
        <div className='col-9 d-flex justify-content-lg-end'>
          <CustomButton className='' background='#00ADEF'>
            Save
          </CustomButton>
          <OutlineButton
            onClick={handleSubmit}
            className='ms-2'
            style={{ marginRight: '5rem' }}
            background='none'
          >
            Submit
          </OutlineButton>
        </div>
      </div>
    </>
  );
};
