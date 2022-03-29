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
import RedFile from '../../../../assets/icons/redFile.svg'
import BlueFile from '../../../../assets/icons/bluFile.svg'
import { useActivity } from '../../../../hooks/useBusiness'
import { pitchDeck } from './../../../../services/startUpReg'
import { CustomButton } from '../../../../Startupcomponents/button/button.styled'
import { formatBytes } from '../../../../utils/helpers'
import { CircularLoader } from './../../../../Startupcomponents/CircluarLoader/CircularLoader';
import { toast } from 'react-hot-toast'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';


export const PitchDeck = () => {
  const [loading, setLoading] = useState(false)
  const [nextloading, setNextLoading] = useState(false);
  const { stateAuth } = useAuth();
  

  const [fileInfo, setFile] = useState([
    {
      file: null,
      size: null,
      name: 'infoFile',
    },
    {
      file: null,
      size: null,
      name: 'videoFile',
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
          item.file = files[0]
          item.size = formatBytes(files[0].size)
        }
        return item
      }),
    )
  }
  
  const handleSubmit = (value) => {
    const newFile = {
      pitchDeckFile: [
        {
          url: fileInfo[0].file?.name,
        },
        {
          url: fileInfo[1].file?.name,
        },
      ],
      profileId: '61d5be4fb801676adafcf4f4',
    }
    
    next();

    // pitchDeck(value).then((res) => {
    //   if (res?.message) {
    //     console.log(res)
    //     toast.success(res?.message)  
    //   }
    // })
      console.log(newFile)
  }

  console.log(fileInfo)

  // const onSubmit = (value) => {
  //   setLoading(true)
  //   pitchDeck(value).then((res) => {
  //     if (res?.message) {
  //       console.log(res)
  //       toast.success(res?.message)
  //       setLoading(false)
  //       next()
  //     }
  //   })
  // }

  return (
    <>
      <HeaderPitch>
        <h5> Pitch Deck </h5>
        <p>Let's get to know your startup</p>
      </HeaderPitch>
      <form style={{ marginBottom: '4rem' }} onSubmit={handleSubmit}>
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
                  <img src={DownloadIcon} alt="#" />
                  {fileInfo[0].file !== null ? (
                    <img src={RedFile} alt=".#" />
                  ) : (
                    <>
                      <FileText>Drag & Drop</FileText>
                      <FileText>Drag files or click here to upload </FileText>
                    </>
                  )}
                  <FileSize>
                    {' '}
                    {fileInfo[0].file !== null
                      ? `${fileInfo[0].size}`
                      : '(Max. File size 5mb)'}{' '}
                  </FileSize>
                  <input
                    type="file"
                    name="infoFile"
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
                    className="form-control youtube-input ps-3"
                    placeholder="Youtube link"
                  />
                  <button className="button">Upload</button>
                </div>
                <FileWrapper className="d-flex justify-content-center text-center">
                  <img src={DownloadIcon} alt="#" />
                  {fileInfo[1].file !== null ? (
                    <img src={RedFile} alt=".#" />
                  ) : (
                    <>
                      <FileText>Drag & Drop</FileText>
                      <FileText>Drag files or click here to upload </FileText>
                    </>
                  )}
                  <FileSize>
                    {' '}
                    {fileInfo[1].file !== null
                      ? `${fileInfo[1].size}`
                      : '(Max. File size 5mb)'}{' '}
                  </FileSize>
                  <input
                    type="file"
                    name="videoFile"
                    id="pitch-docu"
                    onChange={handleChange}
                    hidden
                  />
                  <LabelButton for="pitch-docu">Upload Files</LabelButton>
                </FileWrapper>
              </div>
              <div className="form-group col-12 mt-5">
                <VideoWrapper>
                  <label> Pitch deck uploaded</label>
                  <div className="row">
                    {fileInfo[0].file !== null ? (
                      fileInfo.map(
                        (item, i) =>
                          item.file !== null && (
                            <div key={i} className=" col-lg-6 col-12">
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
                                  <p
                                    className=""
                                    style={{
                                      marginLeft: '0.2rem',
                                      fontSize: '0.9rem',
                                    }}
                                  >
                                    {item?.file?.name}
                                  </p>
                                </div>
                                <p className="my-n2 p"> {item?.size} </p>
                              </div>
                            </div>
                          ),
                      )
                    ) : (
                      <div className="my-4 d-flex justify-content-center text-center">
                        <span>No File Uploaded</span>
                      </div>
                    )}
                  </div>
                </VideoWrapper>
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
            <CustomButton className="mx-2" background="#00ADEF">
              Save
            </CustomButton>
            <div className="">
              <CustomButton
                // onClick={handleSubmit}
                type="submit"
                disabled={loading}
                background="#2E3192"
              >
                { loading ? <CircularLoader /> : 'Next'}
              </CustomButton>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
