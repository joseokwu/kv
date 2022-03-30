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

export const FinancialProjection = () => {
  const history = useHistory();

  const {
    location: { hash },
  } = history;

  function btn(e) {
    e.preventDefault();
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
              <img src={DownloadIcon} alt='#' />
              <FileText>Drag & Drop</FileText>
              <FileText>Drag files or click here to upload </FileText>
              <FileSize> {'(Max. File size 5mb)'} </FileSize>
              <input type='file' id='utilize' hidden />
              <LabelButton for='utilize'>Upload Files</LabelButton>
            </FileWrapper>
          </div>
          <div className='my-5'>
            <VideoWrapper>
              <label> Financial plan uploaded</label>
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
                      Fund Utilization Summary
                    </p>
                  </div>
                  <p className='my-n2 px-5 p'>2.5 mb</p>
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
            onClick={() => history.push('/startup/dashboard')}
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
