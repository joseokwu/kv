import React, { useState } from 'react'
import { HeaderProduct, FormWrapper, VideoWrapper } from './product.styled'
import { useActivity } from '../../../../hooks/useBusiness'
import RedFile from '../../../../assets/icons/redFile.svg'
import { CustomButton } from '../../../../Startupcomponents/button/button.styled'
import BlueFile from '../../../../assets/icons/bluFile.svg'
import { product } from './../../../../services/startUpReg'
import { formatBytes } from '../../../../utils/helpers'
import  toast  from 'react-hot-toast'
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
import { upload } from '../../../../services/utils';


export const Product = () => {
  const  { stateAuth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [logoUploading, setLogoUploading] = useState(false);
  const [nextLoading, setnextLoading] = useState(false);
  const [opts, setOpts] = useState('')
  const [urls, setUrls] = useState(stateAuth?.user?.product?.youtubeDemoUrl  ?? []);
  const [youtube , setYoutube] = useState('');
  const [fileInfo, setFile] = useState(stateAuth?.user?.product?.files ?? null)

  const handleeChangeVids = (e) =>{
    setYoutube(e.target.value);
  }

  const addVid = () =>{
    const newVal = youtube.replace('https://youtu.be/', '');
   
    setUrls([...urls, newVal]);
    setYoutube('');
  }

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

  const handleChange = async(e) => {
    console.log('hello')
    const { files, name } = e.target;
    const formData = new FormData();
    formData.append('dir', 'kv');
    formData.append('ref', stateAuth.user?.userId);
    formData.append('type', 'image');
    formData.append(0, files[0]);
    try {
      setLogoUploading(true);
      const response = await upload(formData);
      console.log(response);
      console.log('uploaded');
      setFile(response?.path);
      setLogoUploading(false);
    } catch (error) {
      console.log(error);
      setLogoUploading(false);
      toast.error(error?.response?.data?.message ?? 'Unable to upload image');
    }
  }

 const deleteVid = () =>{
 
   
  setUrls([]);
 }
   
  const onSubmit = async (value) => {
  
    try {
      const product = {
        type: 'product',
        accType: 'startup',
        values: {
          ...value,
          files:fileInfo,
          youtubeDemoUrl:urls
        },
        userId:stateAuth?.user?.userId
      }
      console.log(product)
      if (opts === 'next') {
        setOpts(true)
        let result = await updateFounderProfile(product)

        if (result?.success) {
          toast.success('Product' + '   ' + result?.message)
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
        
        files: stateAuth?.user?.product?.files ?? '',
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
                  onChange={handleeChangeVids}
                  value={youtube}
                  className="form-control youtube-input ps-3"
                  placeholder="Youtube link"
                />
                <button type='button' className="button" onClick={addVid} >Upload</button>
              </div>
              <FileWrapper className="d-flex justify-content-center text-center">
              
              {fileInfo !== null ? (
                    <img style={{width:'70px', height:'70px'}} src={RedFile} alt=".#" className='mb-2' />
                  ) : (
                    logoUploading ? <CircularLoader color={'#000'} /> : 
                    <>
                    <img src={DownloadIcon} alt="#" />
                      <FileText>Drag & Drop</FileText>
                      <FileText>Drag files or click here to upload </FileText>
                    </>
                  )}
               
                <input name="files" onChange={handleChange} type="file" id="pitch-doc" hidden />
                <LabelButton for="pitch-doc">Upload Files</LabelButton>
              </FileWrapper>
            </div>
            <div className="form-group col-12">
            <VideoWrapper> 
            <label  > Product demo upload</label>
                 {
               urls.length > 0 && urls.map((item, i) =>(
                <iframe
        key={i}
        src={`https://www.youtube.com/embed/${item}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; execution-while-not-rendered 'none'"
        allowfullscreen
        title="video"
        style={{
        borderRadius:"20px",
        maxHeight:"150px",
        width:"250px"
      }}
      />
               ))       
                    }
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
