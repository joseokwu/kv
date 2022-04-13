import React, { useState } from 'react'
import demo from '../../../../assets/icons/demoImg.png'
import downloadIcon from '../../../../assets/icons/download.svg'
import founder from '../../../../assets/images/sampleFounderImg.png'
import investor from '../../../../assets/images/sampleinvestors.png'
import {
  Button,
  ModalCus,
  TextArea,
  TextField,
} from '../../../../Startupcomponents'
import {
  FileSize,
  FileText,
  FileWrapper,
  LabelButton,
} from '../../../startupRegistration/components/pitchdeck/pitch.styled'
import './product.css';
import { useAuth } from '../../../../hooks/useAuth';




export const Product = () => {
 
  const [showModal, setShowModal] = useState(false)
  const { stateAuth } = useAuth();

  return (
    <div>
      {showModal ? (
        <ModalCus id="editProductModal" title="" closeModal={setShowModal}>
          <EditProductModal />
        </ModalCus>
      ) : (
        <span></span>
      )}
      <section
        className="d-flex justify-content-end"
        data-target="#editProductModal"
        onClick={() => setShowModal(true)}
      >
        <button className="teamBtn">Edit product</button>
      </section>
      <div className="row">
        <section className="col-xl-12">
          <div className="product-wrap">
            <div className="wrap mb-5 py-5 px-5">
              <h3>Product Description</h3>
              <p className="mb-5 prod-desc">
              { stateAuth?.user?.product?.description }
              </p>
            </div>

            <h3>Product Demo</h3>

           {
          stateAuth?.user?.product?.files && (
            <video 
                      style={{
                        borderRadius:"20px",
                       maxHeight:"150px",
                        width:"250px"
                      }}
                      className='mb-3'
                     controls>
                    <source src={stateAuth?.user?.product?.files} id="video_here" />
                      Your browser does not support HTML5 video.
                     </video>
          )   
           }    
          </div>
        </section>
      </div>
    </div>
  )
}

const EditProductModal = () => {
  return (
    <div className="mx-5 my-4">
      <div className="product-desc border-bottom">
        <h1>Product / Service Description</h1>
        <p className="py-4">A brief description of your product</p>
      </div>

      <div className="row my-4 d-flex justify-content-between">
        <TextArea
          className="col-lg-12"
          label={
            'Briefly describe the users of your product or services? 250 words'
          }
          placeholder={'Enter brief bio about you'}
          rows={5}
        />
      </div>

      <div className="row my-4">
        <div className="col-lg-6">
          <TextArea
            className="col-lg-12"
            label={'Paste Youtube Link of product Demo'}
            placeholder={'Youtube link'}
            rows={1}
          />
        </div>

        <div className="col-lg-6 mt-4 pt-1 youtube">
          <button className="">Upload</button>
        </div>
      </div>

      <div className="">
        <FileWrapper className="d-flex justify-content-center text-center col-lg-12">
          <img src={downloadIcon} alt="Download Icon" />
          <FileText className="my-3 font-weight-bold">Drag & Drop</FileText>
          <FileText>Drag files or click here to upload </FileText>
          <FileSize className="my-3">{'(Max. File size 5mb)'}</FileSize>
          <input type="file" id="pitch-doc" hidden />
          <LabelButton for="pitch-doc">Upload Files</LabelButton>
        </FileWrapper>
      </div>

      <div className="my-5 product-update">
        <button>Update</button>
      </div>
    </div>
  )
}
