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
import * as XLSX from 'xlsx';
import { parseFile } from '../../../../../../utils/helpers';



export const FundUtilization = ({setFundraising}) => {
  const history = useHistory();
  const { stateAuth } = useAuth();
  const [fileDoc, setFileDoc] = useState(stateAuth?.user?.fundRaising?.fundUtilization?.files ?? null);
  const [videoDoc, setVidDoc] = useState(null);
  const [logoUploading , setLogoUploading] = useState(false);
  const {
    location: { hash },
  } = history;

 



  const handleCsv = async(e) =>{
    const file = e.target.files[0];
    
    const fileData = await parseFile(file);
    const workbook = XLSX.read(fileData, { type: 'binary' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    console.log(file.type === 'text/csv')
    if (file.type === 'text/csv') {
      const data = XLSX.utils.sheet_to_json(worksheet, {
        raw: false,
      });
      console.log(data)
      if (Array.isArray(data)) {
        setFileDoc(data)
        console.log(data)
      }
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

        <div className='my-5'>
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
               onChange={handleCsv}
               accept=".csv"
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
            background='#808080'
            onClick={() => history.push('#Funding Ask')}
          >
            Back
          </CustomButton>
        </div>
        <div className='col-9 d-flex justify-content-end'>
          <OutlineButton
            type='button'
            onClick={(e) => {
              e.preventDefault();
              history.push('#Cap Table');
              onSubmit();
            }}
            className='ms-2'
            style={{ marginRight: '0rem' }}
            background='none'
            
          >
            Next
          </OutlineButton>
        </div>
      </div>
    </>
  );
};
