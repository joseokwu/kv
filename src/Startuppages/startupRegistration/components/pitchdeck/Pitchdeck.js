import React, { useState } from 'react'
import {
  HeaderPitch,
  FormWrapper,
  FileWrapper,
  FileText,
  FileSize,
  LabelButton,
  VideoWrapper,
} from './pitch.styled'
import DownloadIcon from '../../../../assets/icons/download.svg'
import { useFormik } from 'formik'
import RedFile from '../../../../assets/icons/redFile.svg'
import BlueFile from '../../../../assets/icons/bluFile.svg'
import { useActivity } from '../../../../hooks/useBusiness'
import { pitchDeck } from './../../../../services/startUpReg'
import { CustomButton } from '../../../../Startupcomponents/button/button.styled'
import { formatBytes } from '../../../../utils/helpers'
import { CircularLoader } from '../../../../Startupcomponents/CircluarLoader/CircularLoader';
import { toast } from 'react-hot-toast'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';
import { updateFounderProfile } from '../../../../services'
import axios  from 'axios';
import { upload }  from '../../../../services/utils';


export const PitchDeck = () => {
  const { stateAuth } = useAuth();
  const [loading, setLoading] = useState(false)
  const [nextloading, setNextLoading] = useState(false);
  const [opts, setOpts] = useState('')
  const [logoUploading , setLogoUploading] = useState(false);
  
  const [fileDoc, setFileDoc] = useState(stateAuth?.user?.pitchDeck?.pitchDeckFile ?? null);
  const [videoDoc, setVidDoc] = useState(stateAuth?.user?.pitchDeck?.pitchDeckVideo ?? null);

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
    const { files } = e.target;
    const formData = new FormData();
    formData.append("dir", "kv");
    formData.append("ref", stateAuth.user?.userId);
    formData.append("type", "pdf");
    formData.append(0 , files[0])

    try {
      setLogoUploading(true);
      const response = await upload(formData)
      console.log(response) 
      setFileDoc(response?.path)
      setLogoUploading(false)

    } catch(error) {
      setLogoUploading(false)
      console.log(error)
    }
  }

  
  const handleChangeVid = async(e) => {
    const { files } = e.target;
    const formData = new FormData();
    formData.append("dir", "kv");
    formData.append("ref", stateAuth.user?.userId);
    formData.append("type", "video");
    formData.append(0 , files[0])

    try {
      setLogoUploading(true);
      const response = await upload(formData)
      console.log(response) 
      setVidDoc(response?.path);
      setLogoUploading(false)
     
    } catch(error) {
      setLogoUploading(false)
      console.log(error)
    }
  }
  

 

  const onSubmit = async(e) => {
    
     try {
     e.preventDefault();
      const pitchDeck = {
        type: 'pitchDeck',
        accType: 'startup',
        values: {
          pitchDeckFile:fileDoc,
          pitchDeckVideo:videoDoc
        },
        userId: stateAuth?.user?.userId
      }
      console.log(pitchDeck)

      if (opts === 'next') {
        setOpts(true)
        let result = await updateFounderProfile(pitchDeck)

        if (result?.success) {
          toast.success('Pitch Deck' + '     ' + result?.message)
          setOpts(false);
          return changePath(path + 1)
        }
      }
      setLoading(true);
      let result = await updateFounderProfile(pitchDeck)

      if (!result?.success) {
        toast.error(result?.message || 'There was an error updating the pitchDeck')
        setLoading(false);
        return;
      }
      toast.success('Pitch Deck' + ' ' + result?.message)
      setLoading(false);
      return;
     } catch (err) {
       setLoading(false);
       toast.error(err?.res?.data?.message || 'The was an error updating pitch deck')
     }
  }

  

  return (
    <>
      <HeaderPitch>
        <h5> Pitch Deck </h5>
        <p>Let's get to know your startup</p>
      </HeaderPitch>
      <form style={{ marginBottom: '4rem' }} onSubmit={onSubmit}>
        <FormWrapper>
          <div className="div">
            <span>Pitch Deck</span>
            <p className="pt-3">
              A brief presentation and overview about you startup. It can be a
              pdf, powerpoint presentation or keynote document
            </p>

            <hr />

            <div className="row">
              <div className="form-group col-12">
                <label className="pt-4 pb-3">
                  Upload a Pitch deck for your startup
                </label>
                <FileWrapper className="d-flex justify-content-center text-center">
                  
                  {fileDoc !== null ? (
                    <img style={{width:'70px', height:'70px'}} src={RedFile} alt=".#" className='mb-2' />
                  ) : (
                    logoUploading ? <CircularLoader color={'#000'} /> : 
                    <>
                    <img src={DownloadIcon} alt="#" />
                      <FileText>Drag & Drop</FileText>
                      <FileText>Drag files or click here to upload </FileText>
                    </>
                  )}
                    
                  <input
                    type="file"
                    name="pitchDeckFile"
                    id="pitch-doc"
                    onChange={handleChange}
                    hidden
                  />
                  <LabelButton for="pitch-doc">Upload Files</LabelButton>
                </FileWrapper>
              </div>
              <div className="form-group col-12 mt-3">
                <label> Paste Youtube Link of pitch video </label>
                <div className="d-flex my-2">
                  <input
                    type="text"
                    name="pitchDeckVideo"
                    onChange={handleChangeVid}
                    className="form-control youtube-input ps-3"
                    placeholder="Youtube link"
                    
                  />
                  <button className="button">Upload</button>
                </div>
                <FileWrapper className="d-flex justify-content-center text-center">
                 
                  {videoDoc !== null ? (
                
                  <video 
                      style={{
                        borderRadius:"20px",
                       maxHeight:"150px",
                        width:"250px"
                      }}
                      className='mb-3'
                     controls>
                    <source src={videoDoc} id="video_here" />
                      Your browser does not support HTML5 video.
                     </video>
              
                    
                  ) : (
                    
                    logoUploading ? <CircularLoader color={'#000'} /> : 
                    <>
                    <img src={DownloadIcon} alt="#" />
                      <FileText>Drag & Drop</FileText>
                      <FileText>Drag files or click here to upload </FileText>
                    </>
                  
                  )}
                
                  <input
                    type="file"
                    name="pitchDeckVideo"
                    id="pitch-docu"
                    onChange={handleChangeVid}
                    accept="video/*"
                    hidden
                  />
                  <LabelButton for="pitch-docu">Upload Files</LabelButton>
                </FileWrapper>
              </div>
            </div>
          </div>
        </FormWrapper>
        <div className="row ">
          <div className="col-3">
            <CustomButton className="" background="#D0D0D1" onClick={back}>
              Back
            </CustomButton>
          </div>
          <div className="col-9 d-flex justify-content-end">
            <CustomButton type="submit" disabled={loading} className="mx-2" background="#00ADEF">
              {loading ? <CircularLoader /> : 'Save'}
            </CustomButton>
            <div className="">
              <CustomButton
                onClick={() => setOpts('next')}
                type="submit"
                disabled={nextloading}
                background="#2E3192"
              >
                { nextloading ? <CircularLoader /> : 'Next'}
              </CustomButton>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
