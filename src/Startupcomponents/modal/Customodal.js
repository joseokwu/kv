import React, { useState } from 'react'
import './modal.css'
import {
  BootModal,
  CustoModal,
  ModalWrapper,
  CloseModal,
  ModalHeader,
} from './custom.styled'
import Close from '../../assets/icons/close.svg'

export const CustomModal = ({ children, handleClose, title }) => {
  return (
    <div>
      <CustomModal onClick={() => handleClose(false)}> </CustomModal>
      <ModalWrapper>
        <ModalHeader>
          <div style={{ marginLeft: '20px' }}>
            <span className="text-nowrap" style={{ fontWeight: '700' }}>
              {title}
            </span>
          </div>
          <CloseModal onClick={() => handleClose(false)} src={Close} alt={''} />
        </ModalHeader>
        {children}
      </ModalWrapper>
    </div>
  )
}

export const Modal = ({
  title = '',
  children,
  position = '',
  id = '',
  subTitle = '',
  withHeader = true,
}) => {
  return (
    <div className="modal fade" tabIndex="-1" role="dialog" id={id}>
      <div
        className={`modal-dialog ${
          position === 'center' && 'modal-dialog-centered'
        }`}
        role="document"
        style={{ maxWidth: 723, marginTop: 200 }}
      >
        <div className="modal-content kv-modal-content">
          {withHeader && (
            <header>
              <div className="w-100">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p className="kv-modal-title">{title}</p>
              {subTitle.length > 0 && <p className="mt-3">{subTitle}</p>}
            </header>
          )}
          <section className="modal-body text-left">{children}</section>
        </div>
      </div>
    </div>
  )
}
