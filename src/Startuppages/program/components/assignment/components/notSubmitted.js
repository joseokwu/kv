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

export const NotSubmitted = () => {
  const assArr = [1, 2, 3, 4]
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      {showModal ? (
        <SmallModal id="submitAssignment" title="" closeModal={setShowModal}>
          <SubmitAssignmentModal />
        </SmallModal>
      ) : (
        <span></span>
      )}
      <div className="row mt-3">
        {assArr.map((i) => (
          <TodoCard key={i} className="col-lg-6 col-md-6 col-12 mx-3 px-4 mt-3">
            <div className="d-flex justify-content-between head">
              <div className="d-flex">
                <h6 className="mr-3">Assignment</h6>
              </div>
            </div>

            <div className="d-flex justify-content-between my-2 date">
              <h6>05 | September</h6>
              <Tag
                name="Not Submitted"
                bg="#F8F8F8"
                color="#464646"
                fz="12px"
              />
            </div>

            <div className="my-2 body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lectus morbi elementum eu.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>

            <div className="my-4 notSubAssbtn">
              <button
                data-target="#submitAssignment"
                onClick={() => setShowModal(true)}
              >
                Submit
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
