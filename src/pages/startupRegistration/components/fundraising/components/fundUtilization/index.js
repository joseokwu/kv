import {
  BodyWrapper,
  DownloadableButton,
  FileWrapper,
  FileText,
  FileSize,
  LabelButton,
  VideoWrapper,
} from './utilize.styled'
import { CloudUploadOutlined } from '@ant-design/icons'
// import DownloadIcon from '../../../../../../assets/icons/downloadIcon.svg'
import DownloadIcon from '../../../../../../assets/icons/download.svg'
import RedFile from '../../../../../../assets/icons/redFile.svg'
import BluFile from '../../../../../../assets/icons/bluFile.svg'

export const FundUtilization = () => {
  return (
    <>
      <BodyWrapper>
        {/* <span className="span mx-n5 mx-lg-n0"> Fund Utilization </span> */}
        <p className="mx-n5 mx-lg-n0">
          {' '}
          A document containing all your financial plan and statements for your
          business.{' '}
        </p>
        <hr className="mx-n5 mx-lg-n0" />

        <div className=" my-5">
          <div className="">
            <DownloadableButton href="." className="mx-n5 mx-lg-n0">
              <CloudUploadOutlined className="mx-2" /> Download fund utilization
              template here
            </DownloadableButton>
          </div>
          <div className="my-5">
            <FileWrapper className="d-flex justify-content-center text-center mx-n5 mx-lg-n0">
              <img src={DownloadIcon} alt="#" />
              <FileText>Drag & Drop</FileText>
              <FileText>Drag files or click here to upload </FileText>
              <FileSize> {'(Max. File size 5mb)'} </FileSize>
              <input type="file" id="utilize" hidden />
              <LabelButton for="utilize">Upload Files</LabelButton>
            </FileWrapper>
          </div>

          <div className="my-5">
            <VideoWrapper className="mx-n5 mx-lg-n0">
              <label> Financial Plan Uploaded</label>
              <div className="div">
                <img src={RedFile} alt=".#" />
                <div id="div" className="">
                  <div className="d-flex" style={{ marginLeft: '-1.2rem' }}>
                    <img
                      src={BluFile}
                      alt=".#"
                      style={{
                        marginLeft: '2rem',
                        width: '10%',
                        height: '10%',
                      }}
                      className=""
                    />
                    <p
                      className=""
                      style={{ marginLeft: '0.2rem', fontSize: '0.9rem' }}
                    >
                      Product Demo
                    </p>
                  </div>
                  <p className="my-n2 p">2.5 mb</p>
                </div>
              </div>
            </VideoWrapper>
          </div>
        </div>
      </BodyWrapper>
    </>
  )
}
