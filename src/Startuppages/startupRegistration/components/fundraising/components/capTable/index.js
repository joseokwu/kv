import {
  BodyWrapper,
  DownloadableButton,
  FileWrapper,
  FileText,
  FileSize,
  LabelButton,
  VideoWrapper,
  Terms,
} from './cap.styled.js';
import { useHistory } from 'react-router-dom';
import {
  CustomButton,
  OutlineButton,
} from '../../../../../../Startupcomponents/button/button.styled';
import Download from '../../../../../../assets/icons/downloadoutline.svg';
import DownloadIcon from '../../../../../../assets/icons/download.svg';
import RedFile from '../../../../../../assets/icons/redFile.svg';
import BluFile from '../../../../../../assets/icons/bluFile.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useActivity } from '../../../../../../hooks/useBusiness';

export const CapTable = ({ setFundraising }) => {
  const history = useHistory();
  const {
    state: { fundraising },
  } = useActivity();

  const {
    location: { hash },
  } = history;

  const onSubmit = (value) => {
    setFundraising({
      capTable: {
        amountRaised: formik.getFieldProps('amountRaised').value,
        amountInvestedByFounders: formik.getFieldProps(
          'amountInvestedByFounders'
        ).value,
      },
    });
    history.push('#Previous Round');
  };

  const formik = useFormik({
    initialValues: {
      amountRaised: fundraising.capTable.amountRaised || '',
      amountInvestedByFounders:
        fundraising.capTable.amountInvestedByFounders || '',
    },
    validationSchema: Yup.object({
      amountInvestedByFounders: Yup.string().required('Required'),
    }),
    onSubmit: (value) => onSubmit(value),
  });

  return (
    <>
      <BodyWrapper>
        <p className='mx-n4 mx-lg-n0'>
          A document containing all your Cap Table and statements for your
          business.
        </p>

        <hr className='mx-n4 mx-lg-n0' />

        <div className=' row my-5'>
          <div className='col-lg-6 col-12 form-group mx-n4 mx-lg-n0'>
            <label>Total fund raised till date (if any)</label>
            <input
              id='amountRaised'
              name='amountRaised'
              type='text'
              className='form-control ps-3'
              placeholder='$100,000'
              value={
                fundraising.capTable.amountRaised || formik.values.amountRaised
              }
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>
          <div className='col-lg-6 col-12 form-group mx-n4 mx-lg-n0'>
            <label>Total Capital invested by Founders*</label>
            <input
              id='amountInvestedByFounders'
              name='amountInvestedByFounders'
              type='text'
              className='form-control ps-3'
              placeholder='$150,000'
              value={
                fundraising.capTable.amountInvestedByFounders ||
                formik.values.amountInvestedByFounders
              }
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.amountInvestedByFounders &&
            formik.errors.amountInvestedByFounders ? (
              <label className='error'>
                {formik.errors.amountInvestedByFounders}
              </label>
            ) : null}
          </div>
          <div className='col-12 my-3'>
            <DownloadableButton href='.' className='mx-n4 mx-lg-n0'>
              <img className='pr-2' src={Download} alt='' />
              Download Capital Table sample here
            </DownloadableButton>
          </div>
          <div className='col-12 my-4'>
            <FileWrapper className='d-flex justify-content-center text-center mx-n4 mx-lg-n0'>
              <img src={DownloadIcon} alt='#' />
              <FileText>Drag & Drop</FileText>
              <FileText>Drag files or click here to upload </FileText>
              <FileSize> {'(Max. File size 5mb)'} </FileSize>
              <input type='file' id='cap' hidden />
              <LabelButton for='cap'>Upload Files</LabelButton>
            </FileWrapper>
          </div>
          <div className='col-12'>
            <VideoWrapper className='mx-n4 mx-lg-n0'>
              <label> Cap Table Uploaded</label>
              <div className='div'>
                <img src={RedFile} alt='.#' />
                <div id='div' className=''>
                  <div className='d-flex' style={{ marginLeft: '-1.2rem' }}>
                    <img
                      src={BluFile}
                      alt='.#'
                      style={{
                        marginLeft: '2rem',
                        width: '10%',
                        height: '10%',
                      }}
                      className=''
                    />
                    <p
                      className=''
                      style={{ marginLeft: '0.2rem', fontSize: '0.9rem' }}
                    >
                      Cap Table Docum...
                    </p>
                  </div>
                  <p className='my-n2 p'>2.5 mb</p>
                </div>
              </div>
            </VideoWrapper>
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
            onClick={() => history.push('#Fund Utilization')}
          >
            Back
          </CustomButton>
        </div>
        <div className='col-9 d-flex justify-content-lg-end'>
          <OutlineButton
            type='button'
            onClick={(e) => {
              e.preventDefault();
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
