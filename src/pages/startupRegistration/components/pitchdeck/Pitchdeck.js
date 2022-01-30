import { useState } from 'react'
import {
  HeaderPitch,
  FormWrapper,
  InputWrapper,
  ImageWrapper,
  FileWrapper,
  FileText,
  FileSize,
  LabelButton,
  VideoWrapper,
} from './pitch.styled'
import DownloadIcon from '../../../../assets/icons/downloadIcon.svg'
import RedFile from '../../../../assets/icons/redFile.svg'
import BlueFile from '../../../../assets/icons/bluFile.svg'
import { DownloadOutlined } from '@ant-design/icons'
import { useActivity } from '../../../../hooks/useBusiness'
import { CustomButton } from '../../../../components/button/button.styled'

export const PitchDeck = () => {
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

  return (
    <>
      <HeaderPitch>
        <h5> Pitch Deck </h5>
        <p>Let's get to know your startup</p>
      </HeaderPitch>
      <form style={{ marginBottom: '4rem' }}>
        <FormWrapper>
          <div className="div">
            <span>Pitch Deck</span>
            <p>
              A brief presentation and overview about you startup. It can be a
              pdf, powerpoint presentation or keynote document
            </p>

            <hr />

            <div className="row">
              <div className="form-group col-12">
                <label className="py-4">Upload a Pitch deck for your startup</label>
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
                <label> Paste Youtube Link of pitch video </label>
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control youtube-input"
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
                  <label> Pitch deck uploaded</label>
                  <div className="row">
                    <div className=" col-lg-6 col-12">
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
                            style={{ marginLeft: '0.2rem', fontSize: '0.9rem' }}
                          >
                            Product Demo
                          </p>
                        </div>
                        <p className="my-n2 p">2.5 mb</p>
                      </div>
                    </div>
                    <div className=" col-lg-6 col-12">
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
                            style={{ marginLeft: '0.2rem', fontSize: '0.9rem' }}
                          >
                            Product Demo
                          </p>
                        </div>
                        <p className="my-n2 p">2.5 mb</p>
                      </div>
                    </div>
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
          <div className="col-9 d-flex justify-content-lg-end">
            <CustomButton className="mx-4" background="#00ADEF">
              Save
            </CustomButton>
            <CustomButton
              onClick={next}
              style={{ marginLeft: '0.5rem', marginRight: '7rem' }}
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
