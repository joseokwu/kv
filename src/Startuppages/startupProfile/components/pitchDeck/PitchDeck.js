import React, { useState } from 'react'
import doc from '../../../../assets/icons/document.svg'
import docIcon from '../../../../assets/icons/docIcon.svg'
import videoDemo from '../../../../assets/icons/demoImg.png'
import videoIcon from '../../../../assets/icons/videoIcon.svg'
import plus from '../../../../assets/icons/addPlus.svg'
import downloadIcon from '../../../../assets/icons/download.svg'
import {
  FileSize,
  FileText,
  FileWrapper,
  LabelButton,
} from '../../../startupRegistration/components/pitchdeck/pitch.styled'
import './pitchDeck.css'
import { SmallModal, TextArea } from '../../../../Startupcomponents'

export const PitchDeck = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="">
      {showModal ? (
        <SmallModal id="addPitchDeckModal" title="" closeModal={setShowModal}>
          <AddPickDeckModal />
        </SmallModal>
      ) : (
        <span></span>
      )}
      <section className="row pt-3">
        <div className="col-xl-3 col-lg-4 mb-4">
          <article className="deck-card">
            <div className="deck-card-img">
              <img src={doc} alt="document" />
            </div>
            <div className="d-flex align-items-start p-3">
              <img src={docIcon} alt="document icon" className="mr-2" />
              <span>
                <p>Pitch Deck Document</p>
                <small>21MB</small>
              </span>
            </div>
          </article>
        </div>

        <div className="col-xl-3 col-lg-4 mb-4">
          <article className="deck-card">
            <div className="deck-card-img">
              <img src={videoDemo} alt="video demo" />
            </div>
            <div className="d-flex align-items-start p-3">
              <img src={videoIcon} alt="video icon" className="mr-2" />
              <span>
                <p>Pitch Video</p>
                <small>100MB</small>
              </span>
            </div>
          </article>
        </div>

        <div className="col-lg-4 create_pitch my-5 ms-5">
          <img
            src={plus}
            alt="add"
            data-target="#addPitchDeckModal"
            onClick={() => setShowModal(true)}
          />
        </div>
      </section>
    </div>
  )
}

export const AddPickDeckModal = () => {
  return (
    <div className="mx-4 addPitchDeck">
      <div className="mt-4 pb-3 border-bottom">
        <h2>Pitch Deck</h2>
        <span>Upload your pitch deck and document</span>
      </div>
      <div className="mt-4">
        <p>Paste Youtube Link of Video pitch</p>
      </div>
      <div className="row me-5">
        <div className="w-75">
          <TextArea rows={1} placeholder={'Youtube link'} />
        </div>
        <div className="w-25 mt-2">
          <button>Upload</button>
        </div>
      </div>
      <div className="mt-3">
        <FileWrapper className="d-flex justify-content-center text-center col-lg-12">
          <img src={downloadIcon} alt="Download Icon" />
          <FileText className="my-3 font-weight-bold">Drag & Drop</FileText>
          <FileText>Drag files or click here to upload </FileText>
          <FileSize className="my-3">{'(Max. File size 5mb)'}</FileSize>
          <input type="file" id="pitch-doc" hidden />
          <LabelButton for="pitch-doc">Upload Files</LabelButton>
        </FileWrapper>
      </div>
      <div className="my-5">
        <button>Update</button>
      </div>
    </div>
  )
}
