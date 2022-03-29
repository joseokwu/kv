import React, { useState } from 'react'
import { HeaderProduct, FormWrapper, VideoWrapper } from './product.styled'
import { useActivity } from '../../../../hooks/useBusiness'
import RedFile from '../../../../assets/icons/redFile.svg'
import { CustomButton } from '../../../../Startupcomponents/button/button.styled'
import BlueFile from '../../../../assets/icons/bluFile.svg'
import { product } from './../../../../services/startUpReg'
import { formatBytes } from '../../../../utils/helpers'
import { toast } from 'react-hot-toast'
import { useAuth } from '../../../../hooks/useAuth';
import { updateFounderProfile } from '../../../../services';


import {
  FileWrapper,
  FileText,
  FileSize,
  LabelButton,
} from '../pitchdeck/pitch.styled'
import DownloadIcon from '../../../../assets/icons/download.svg'

export const Product = () => {
  const  { stateAuth } = useAuth();
  const [loading, setLoading] = useState(false)
  const [nextLoading, setnextLoading] = useState(false);
  const [opts, setOpts] = useState('')
  const [productInfo, setProductInfo] = useState({
    product: stateAuth?.user?.product?.product,
    market: stateAuth?.user?.product?.market,
  })

  const onChange = (e) => {
    setProductInfo({...productInfo, [e.target.name] : e.target.value})
  }

  const [fileInfo, setFile] = useState([
    {
      file: null,
      size: null,
      name: 'infoFile',
    },
  ])

  const {
    changePath,
    state: { path },
  } = useActivity()

  const next = () => {
    changePath(path + 1)
  }

  const back = () => {
    changePath(path - 1)
  }

  const handleChange = (e) => {
    console.log('hello')
    const { files, name } = e.target
    setFile(
      fileInfo.map((item) => {
        if (name === item?.name) {
          item.file = files
          item.size = formatBytes(files.size)
        }
        return item
      }),
    )
  }

  const handleSubmit = (value) => {
    const newFile = {
      pitchDeckFile: [
        {
          url: fileInfo.file?.name,
        },
      ],
      // profileId: '61d5be4fb801676adafcf4f4',
    }
    setLoading(true)
    product(value).then((res) => {
      if (res?.message) {
        console.log(res)
        toast.success(res?.message)
        setLoading(false)
        next()
      }
    })
      console.log(newFile)
  }

  return (
    <>
      <HeaderProduct>
        <h5 className="text-nowrap"> Product / Services </h5>
        <p className="text-nowrap">Let's help you explain your product</p>
      </HeaderProduct>
      <form style={{ marginBottom: '4rem' }} onSubmit={handleSubmit}>
        <FormWrapper>
          <div className="div">
            <span>Product / Service Description</span>
            <p className="pt-3">A brief description of your product</p>

            <hr />

            <div className="row mt-4">
              <div className="form-group col-12">
                <div className="d-flex justify-content-between mt-2">
                  <label>
                    Briefly describe the users of your product or services?
                  </label>
                  <label style={{ color: '#828282' }}>250 words</label>
                </div>
                <textarea
                  cols="5"
                  rows="5"
                  classNam="form-control ps-3"
                  placeholder="Enter Brief info about your product"
                ></textarea>
              </div>
              <div className="form-group col-12">
                <div className="d-flex justify-content-between">
                  <label>
                    What makes your solution unique from others in the market? *
                  </label>
                  <label style={{ color: '#828282' }}>250 words</label>
                </div>

                <textarea
                  cols="5"
                  rows="5"
                  className="form-control ps-3"
                  placeholder="Enter your uniqueness "
                />
              </div>
            </div>
            <div className="form-group col-12 mt-3">
              <label> Paste Youtube Link of product Demo </label>
              <div className="d-flex my-2">
                <input
                  type="text"
                  className="form-control youtube-input ps-3"
                  placeholder="Youtube link"
                />
                <button className="button">Upload</button>
              </div>
              <FileWrapper className="d-flex justify-content-center text-center">
                <img src={DownloadIcon} alt="#" />
                <FileText>Drag & Drop</FileText>
                <FileText>Drag files or click here to upload </FileText>
                <FileSize> {'(Max. File size 5mb)'} </FileSize>
                <input type="file" id="pitch-doc" hidden />
                <LabelButton for="pitch-doc">Upload Files</LabelButton>
              </FileWrapper>
            </div>
            <div className="form-group col-12">
              <VideoWrapper>
                <label> Product demo upload</label>
                <div className="row">
                  <div className=" col-lg-8 col-12">
                    <div className="div p-5">
                      <img src={RedFile} alt=".#" />
                    </div>
                    <div id="div" className="p-2">
                      <div className="d-flex mt-n2">
                        <img
                          src={BlueFile}
                          alt=".#"
                          style={{ width: '10%', height: '10%' }}
                          className="mt-3"
                        />
                        <p className="px-4">Product Demo</p>
                      </div>
                      <p className="my-n2 px-5 p">2.5 mb</p>
                    </div>
                  </div>
                </div>
              </VideoWrapper>
            </div>
          </div>
        </FormWrapper>
        <div className="row mt-4">
          <div className="col-3">
            <CustomButton className="" background="#D0D0D1" onClick={back}>
              Back
            </CustomButton>
          </div>
          <div className="col-9 d-flex justify-content-lg-end">
            <CustomButton className="mx-2" background="#00ADEF">
              Save
            </CustomButton>
            <CustomButton
              onClick={next}
              // style={{ marginLeft: '0.5rem', marginRight: '7rem' }}
              background="#2E3192"
            >
              Next
            </CustomButton>
          </div>
        </div>
      </form>
    </>
  )
}
