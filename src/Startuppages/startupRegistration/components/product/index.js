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
import { CircularLoader } from '../../../../Startupcomponents/CircluarLoader/CircularLoader'
import { useFormik } from 'formik'

export const Product = () => {
  const  { stateAuth } = useAuth();
  const [loading, setLoading] = useState(false)
  const [nextLoading, setnextLoading] = useState(false);
  const [opts, setOpts] = useState('')
  const [productInfo, setProductInfo] = useState({
    description: stateAuth?.user?.productService?.description ?? '',
    competitiveEdge: stateAuth?.user?.productService?.competitiveEdge ?? '',
    youtubeDemoUrl: stateAuth?.user?.productService?.youtubeDemoUrl ?? '',
    files: stateAuth?.user?.productService?.files ?? '',
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
      profileId: '61d5be4fb801676adafcf4f4',
    }
    // setLoading(true)
    // product(value).then((res) => {
    //   if (res?.message) {
    //     console.log(res)
    //     toast.success(res?.message)
    //     setLoading(false)
    //     next()
    //   }
    // })
    //   console.log(newFile)
  }

  const onSubmit = async (value) => {
  
    try {
      const product = {
        type: 'product',
        accType: 'startup',
        values: {
          ...value
        },
        userId:stateAuth?.user?.userId
      }
      console.log(product)
      if (opts === 'next') {
        setOpts(true)
        let result = await updateFounderProfile(product)

        if (result?.success) {
          toast.success('Product' + '' + result?.message)
          setOpts(false);
          return changePath(path + 1)
        }
      }
      setLoading(true);
      let result = await updateFounderProfile(product)

      if(!result?.success) {
        toast.error(result?.message || 'There was an error in updating product')
        setLoading(false);
        return;
      }
      toast.success('Product' + '' + result?.message)
      setLoading(false);
      return;
      } catch (err) {
        setLoading(false);
        toast.error(err?.res?.data?.message || 'There was an error updating product')
      }
    }

    const formik = useFormik({
      initialValues: {
        description: stateAuth?.user?.product?.description ?? '',
        competitiveEdge: stateAuth?.user?.product?.competitiveEdge ?? '',
        youtubeDemoUrl: stateAuth?.user?.product?.youtubeDemoUrl ?? '',
        files: stateAuth?.user?.product?.files ?? 'http://google.com',
      },
      validateOnBlur: true,
      onSubmit: (value) => onSubmit(value),
    })

  return (
    <>
      <HeaderProduct>
        <h5 className="text-nowrap"> Product / Services </h5>
        <p className="text-nowrap">Let's help you explain your product</p>
      </HeaderProduct>
      <form style={{ marginBottom: '4rem' }} onSubmit={formik.handleSubmit}>
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
                  name="description"
                  className="form-control ps-3"
                  onChange={formik.handleChange}
                  value={formik.values.description}
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
                  name="competitiveEdge"
                  onChange={formik.handleChange}
                  value={formik.values.competitiveEdge}
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
                  name="youtubeDemoUrl"
                  onChange={formik.handleChange}
                  value={formik.values.youtubeDemoUrl}
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
                <input name="files" onChange={onChange} value={productInfo.files} type="file" id="pitch-doc" hidden />
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
            <CustomButton type="submit" disabled={loading} className="mx-2" background="#00ADEF">
              { loading ? <CircularLoader /> : 'Save'}
            </CustomButton>
            <CustomButton type="submit" disabled={nextLoading} onClick={() => setOpts('next')} background="#2E3192">
              { nextLoading ? <CircularLoader /> : 'Next'}
            </CustomButton>
          </div>
        </div>
      </form>
    </>
  )
}
