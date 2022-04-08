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
import toast from 'react-hot-toast';
import { upload } from './../../../../../../services/utils';

export const CapTable = ({ setFundraising }) => {
  const history = useHistory();
  const { stateAuth } = useAuth();
  const [logoUploading , setLogoUploading] = useState(false);

  const {
    state: { fundraising },
  } = useActivity();
  const [fileDoc, setFileDoc] = useState(stateAuth?.user?.fundRaising?.capTable?.files ?? null);
  const {
    location: { hash },
  } = history

  const onSubmit = (value) => {
    setFundraising({
      capTable: {
        amountRaised: formik.getFieldProps('amountRaised').value,
        amountInvestedByFounders: formik.getFieldProps(
          'amountInvestedByFounders',
        ).value,
        files:fileDoc
      },
    })
    history.push('#Previous Round')
  }

  // const onNumberOnlyChange = (e) => {
  //   const keyCode = e.keyCode || e.which
  //   const keyValue = String.fromCharCode(keyCode)
  //   const isValid = new RegExp('[0-9]').test(keyValue)
  //   if (!isValid) {
  //     e.preventDefault()
  //     return
  //   }
  // }

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

  const formik = useFormik({
    initialValues: {
      amountRaised: stateAuth?.user?.fundRaising?.capTable?.amountRaised ?? '',
      amountInvestedByFounders:
        stateAuth?.user?.fundRaising?.capTable?.amountInvestedByFounders ?? '',
    },
    validationSchema: Yup.object({
      amountInvestedByFounders: Yup.string().required('Required'),
      // amountRaised: Yup.string().required('Required'),
    }),
    onSubmit: (value) => onSubmit(value),
  })

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
              className='form-control ps-3'
              placeholder='$100,000'
              intlConfig={{ locale: 'en-US', currency: 'USD', }}
              // onKeyPress={onNumberOnlyChange}
              // value={formik.values.amountRaised}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />

            {/* {formik.touched.amountRaised &&
            formik.errors.amountRaised ? (
              <label className='error'>
                {formik.errors.amountRaised}
              </label>
            ) : null} */}
          </div>
          <div className="col-lg-6 col-12 form-group mx-n4 mx-lg-n0">
            <label>Total Capital invested by Founders*</label>
            <CurrencyInput
              id="amountInvestedByFounders"
              name="amountInvestedByFounders"
              type="text"
              className="form-control ps-3"
              placeholder="$150,000"
              intlConfig={{ locale: 'en-US', currency: 'USD', }}
              // onKeyPress={onNumberOnlyChange}
              // value={formik.values.amountInvestedByFounders}
              required
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.amountInvestedByFounders &&
            formik.errors.amountInvestedByFounders ? (
              <label className="error">
                {formik.errors.amountInvestedByFounders}
              </label>
            ) : null}
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
              <input type='file' id='cap' onChange={handleChange} hidden />
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
        <div className="col-9 d-flex justify-content-lg-end">
          <OutlineButton
            type="button"
            onClick={(e) => {
              e.preventDefault()
              onSubmit()
            }}
            className="ms-2"
            style={{ marginRight: '5rem' }}
            background="none"
          >
            Next
          </OutlineButton>
        </div>
      </div>
    </>
  )
}
