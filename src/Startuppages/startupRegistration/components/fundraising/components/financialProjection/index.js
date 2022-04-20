import {
  BodyWrapper,
  DownloadableButton,
  FileWrapper,
  FileText,
  FileSize,
  LabelButton,
  VideoWrapper,
  Terms,
} from './financial.styled'
import { useHistory } from 'react-router-dom'
import {
  CustomButton,
  OutlineButton,
} from '../../../../../../Startupcomponents/button/button.styled'
import Download from '../../../../../../assets/icons/downloadoutline.svg'
import DownloadIcon from '../../../../../../assets/icons/download.svg'
import RedFile from '../../../../../../assets/icons/redFile.svg'
import BluFile from '../../../../../../assets/icons/bluFile.svg'
import { useActivity } from '../../../../../../hooks/useBusiness'
import { updateFounderProfile } from '../../../../../../services'
import { useAuth } from '../../../../../../hooks/useAuth'
import toast from 'react-hot-toast'
import { CircularLoader } from '../../../../../../Startupcomponents/CircluarLoader/CircularLoader'
import { upload } from './../../../../../../services/utils'
import { useState } from 'react'
import { UploadFile } from '../../../../../../components'

export const FinancialProjection = () => {
  const {
    state: { fundraising },
  } = useActivity()
  const history = useHistory()
  const {  updateProfile, stateAuth , updateStartupInfo } = useAuth()
  const [logoUploading, setLogoUploading] = useState(false)
  const [fileDoc, setFileDoc] = useState(
    stateAuth?.startupData?.fundRaising?.financialProjection?.files ?? null,
  ) 


 

  const handleSubmit = async (e) => {
    
      e.preventDefault();
      updateStartupInfo();
      window.open('/startup/dashboard', '_self');
    
  }

  return (
    <>
      <BodyWrapper>
        <div className="mt-5">
          <p>
            A document containing all your financial plan and statements for
            your business.
          </p>
        </div>

        <hr />

        <div className="my-5">
          <div className="col-12 my-3 mx-5">
            <DownloadableButton href="." className="mx-n5 mx-lg-n0">
              <img className="pr-2" src={Download} alt="" />
              Download fund utilization template here
            </DownloadableButton>
          </div>
          <div className="col-12 my-5">
            <UploadFile
              data={{
                maxFiles: 1,
                supportedMimeTypes: ['application/pdf'],
                maxFileSize: 5,
                extension: 'MB',
              }}
              onUpload={async (filesInfo) => {
                const formData = new FormData()
                formData.append('dir', 'kv')
                formData.append('ref', stateAuth.user?.userId)
                formData.append('type', 'pdf')
                formData.append(0, filesInfo[0]?.file)

                try {
                  const response = await upload(formData)
                  console.log(response)
                  updateProfile("fundRaising",{
                    financialProjection:{
                      files:response.path
                    }
                  })
                } catch (error) {
                  console.log(error)
                }
              }}
            />
         
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
            background="#808080"
            onClick={() => history.push('#Previous Round')}
          >
            Back
          </CustomButton>
        </div>
        <div className="col-9 d-flex justify-content-end">
          <OutlineButton
            type='submit'
            onClick={(e) => handleSubmit(e)}
            className="ms-2"
            style={{ marginRight: '0rem' }}
            background="none"
          >
            Submit
          </OutlineButton>
        </div>
      </div>
    </>
  )
}
