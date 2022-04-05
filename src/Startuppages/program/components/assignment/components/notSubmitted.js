import React, { useState } from 'react'
import { SmallModal, Tag } from '../../../../../Startupcomponents'
import { SubmitAssignment, TodoCard } from '../styled'
import {
  FileSize,
  FileText,
  FileWrapper,
  LabelButton,
} from '../../../../startupRegistration/components/pitchdeck/pitch.styled'
import downloadIcon from '../../../../../assets/icons/download.svg'
import doc from '../../../../../assets/icons/assdoc.svg'
import { months } from '../../../../../utils/helpers'

export const NotSubmitted = ({ data }) => {
  const assArr = [1, 2, 3, 4]
  const [showModal, setShowModal] = useState(false)
  const [openModal, setOpenModal] = useState(false)


  return (
    <div>
      <div className="row mt-3">
        {data && data.map((info, i) => (
          <TodoCard key={i} className="col-lg-6 col-md-6 col-12 mx-3 px-4 mt-3">
            {showModal ? (
              <SmallModal id={i} title="" closeModal={setShowModal}>
                <SubmitAssignmentModal data={info} />
              </SmallModal>
            ) : (
              <span></span>
            )}
            {openModal ? (
              <SmallModal id={i} title="" closeModal={setOpenModal}>
                <DownloadAssignmentModal data={info} />
              </SmallModal>
            ) : (
              <span></span>
            )}
            <div className="d-flex justify-content-between head">
              <div className="d-flex">
                <h6 className="mr-3">Assignment</h6>
              </div>
            </div>

            <div className="d-flex justify-content-between my-2 date">
              <h6>
                {new Date(info?.date).getDate()} |{' '}
                {months[new Date(info?.date).getMonth()]}
              </h6>
              <Tag
                name="Not Submitted"
                bg="#F8F8F8"
                color="#464646"
                fz="12px"
              />
            </div>

            <div className="my-2 body">
              <p>
                {info?.description}
              </p>
            </div>

            <div className="my-4 notSubAssbtn justify-content-between d-flex">
              <button data-target={i} onClick={() => setShowModal(true)}>
                Submit
              </button>
              <button className="download-ass" data-target={i} onClick={() => setOpenModal(true)}>
                Download
              </button>
            </div>
          </TodoCard>
        ))}
      </div>
    </div>
  )
}

export const SubmitAssignmentModal = () => {
  return (
    <SubmitAssignment>
      <div className="mx-4">
        <div className="mt-4 pb-4 border-bottom">
          <h2>Submit Assignment</h2>
          <span>Upload your completed assignment</span>
        </div>

        <div className="mt-5">
          <FileWrapper className="d-flex justify-content-center text-center col-lg-12">
            <img src={downloadIcon} alt="Download Icon" />
            <FileText className="my-3 font-weight-bold">Drag & Drop</FileText>
            <FileText>Drag files or click here to upload </FileText>
            <FileSize className="my-3">{'(Max. File size 5mb)'}</FileSize>
            <input type="file" id="pitch-doc" hidden />
            <LabelButton for="pitch-doc">Upload Files</LabelButton>
          </FileWrapper>
        </div>
        <div className="mt-5">
          <button>Submit</button>
        </div>
      </div>
    </SubmitAssignment>
  )
}

export const DownloadAssignmentModal = () => {
  return (
    <SubmitAssignment>
      <div className="mx-4">
        <div className="mt-4 pb-4 border-bottom">
          <h2>Download Assignment</h2>
          <span>Download your complete assignment</span>
        </div>

        <div className="mt-5">
          <FileWrapper className="d-flex justify-content-center text-center col-lg-12">
            <FileText>Click the button below to <br/> download your assignment </FileText>
            <img className="my-3" src={doc} alt="Download Icon" />
            <LabelButton className="download mt-2" style={{cursor: 'pointer'}} for="download">Download Files</LabelButton>
          </FileWrapper>
        </div>
      </div>
    </SubmitAssignment>
  )
}
