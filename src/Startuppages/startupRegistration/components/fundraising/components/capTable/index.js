import {
  BodyWrapper,
  DownloadableButton,
  FileWrapper,
  FileText,
  FileSize,
  LabelButton,
  VideoWrapper,
} from './cap.styled.js'
import Download from '../../../../../../assets/icons/downloadoutline.svg'
import DownloadIcon from '../../../../../../assets/icons/download.svg'
import RedFile from '../../../../../../assets/icons/redFile.svg'
import BluFile from '../../../../../../assets/icons/bluFile.svg'

export const CapTable = () => {
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
            <input
              type="text"
              className="form-control ps-3"
              placeholder="$100,000"
            />
          </div>
          <div className="col-lg-6 col-12 form-group mx-n4 mx-lg-n0">
            <label>Total Capital invested by Founders*</label>
            <input
              type="text"
              className="form-control ps-3"
              placeholder="$150,000"
            />
          </div>
          <div className="col-12 my-3">
            <DownloadableButton href="." className="mx-n4 mx-lg-n0">
              <img className="pr-2" src={Download} alt="" />
              Download Capital Table sample here
            </DownloadableButton>
          </div>
          <div className="col-12 my-4">
            <FileWrapper className="d-flex justify-content-center text-center mx-n4 mx-lg-n0">
              <img src={DownloadIcon} alt="#" />
              <FileText>Drag & Drop</FileText>
              <FileText>Drag files or click here to upload </FileText>
              <FileSize> {'(Max. File size 5mb)'} </FileSize>
              <input type="file" id="cap" hidden />
              <LabelButton for="cap">Upload Files</LabelButton>
            </FileWrapper>
          </div>
          <div className="col-12">
            <VideoWrapper className="mx-n4 mx-lg-n0">
              <label> Cap Table Uploaded</label>
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
                      Cap Table Docum...
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
