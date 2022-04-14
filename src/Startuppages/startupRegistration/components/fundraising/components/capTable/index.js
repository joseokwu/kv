import {
  BodyWrapper,
  DownloadableButton,
  FileWrapper,
  FileText,
  FileSize,
  LabelButton,
  VideoWrapper,
  Terms,
} from './cap.styled.js'
import { useHistory } from 'react-router-dom'
import {
  CustomButton,
  OutlineButton,
} from '../../../../../../Startupcomponents/button/button.styled'
import Download from '../../../../../../assets/icons/downloadoutline.svg'
import DownloadIcon from '../../../../../../assets/icons/download.svg'
import RedFile from '../../../../../../assets/icons/redFile.svg'
import BluFile from '../../../../../../assets/icons/bluFile.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useActivity } from '../../../../../../hooks/useBusiness'
import { useAuth } from '../../../../../../hooks/useAuth'
import CurrencyInput from 'react-currency-input-field'
import { CircularLoader } from '../../../../../../Startupcomponents/CircluarLoader/CircularLoader';
import { useState } from 'react';
import * as XLSX from 'xlsx';
import { parseFile } from '../../../../../../utils/helpers';




export const CapTable = ({ setFundraising }) => {
  const history = useHistory();
  const { stateAuth } = useAuth();
  const [logoUploading , setLogoUploading] = useState(false);
  const [amnt, setAmnt] = useState(stateAuth?.user?.fundRaising?.capTable?.amountRaised ?? '');
  const [amntInvested , setAmntInvested] = useState(stateAuth?.user?.fundRaising?.capTable?.amountInvestedByFounders ?? '');

  const {
  state: { fundraising },
  } = useActivity();
  const [fileDoc, setFileDoc] = useState(stateAuth?.user?.fundRaising?.capTable?.files ?? null);
  const { location  } = history;

  const onSubmit = (value) => {
    setFundraising({
      capTable: {
        amountRaised: amnt,
        amountInvestedByFounders:amntInvested ,
        files:fileDoc
      },
    })
    history.push('#Previous Round')
  }

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



  return (
    <>
      <BodyWrapper>
        <p className="mx-n4 mx-lg-n0">
          A document containing all your Cap Table and statements for your
          business.
        </p>

        <hr className="mx-n4 mx-lg-n0" />

        <div className=" row my-5">
          <div className="col-lg-6 col-12 form-group mx-n4 mx-lg-n0">
            <label>Total fund raised till date (if any)</label>
            <CurrencyInput
              id='amountRaised'
              name='amountRaised'
              type='text'
              value={amnt}
              className='form-control ps-3'
              placeholder='$100,000'
              intlConfig={{ locale: 'en-US', currency: 'USD', }}
              onValueChange={(value) => setAmnt(value) }  
            />

           
          </div>
          <div className="col-lg-6 col-12 form-group mx-n4 mx-lg-n0">
            <label>Total Capital invested by Founders*</label>
            <CurrencyInput
              id="amountInvestedByFounders"
              name="amountInvestedByFounders"
              type="text"
              value={amntInvested}
              className="form-control ps-3"
              placeholder="$150,000"
              intlConfig={{ locale: 'en-US', currency: 'USD', }}
              required
              onValueChange={(value) => setAmntInvested(value)}
            />
         
          </div>
          <div className="col-12 my-3">
            <DownloadableButton href="." className="mx-n4 mx-lg-n0">
              <img className="pr-2" src={Download} alt="" />
              Download Capital Table sample here
            </DownloadableButton>
          </div>
          <div className='col-12 my-4'>
            <FileWrapper className='d-flex justify-content-center text-center mx-n4 mx-lg-n0'>
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
              <input type='file' id='cap'
               onChange={handleCsv}
               accept=".csv"
               hidden />
              <LabelButton for='cap'>Upload Files</LabelButton>
            </FileWrapper>
          </div>
        </div>
      </BodyWrapper>
      <Terms className="">
        <p>
          By clicking submit, you are agreeing to our <span>Terms of Use</span>{' '}
          and <span>Privacy Policy</span>. If you have questions, please reach
          out to privacy@knightventures.com
        </p>
      </Terms>
      <div className="row mt-4">
        <div className="col-3">
          <CustomButton
            className=""
            background="#D0D0D1"
            onClick={() => history.push('#Fund Utilization')}
          >
            Back
          </CustomButton>
        </div>
        <div className="col-9 d-flex justify-content-end">
          <OutlineButton
            type="button"
            onClick={(e) => {
              e.preventDefault()
              onSubmit()
            }}
            className="ms-2"
            style={{ marginRight: '0rem' }}
            background="none"
          >
            Next
          </OutlineButton>
        </div>
      </div>
    </>
  )
}
