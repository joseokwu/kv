import React , {useState} from "react";

import { BootModal, 
    CustoModal, ModalWrapper,
    CloseModal, ModalHeader,
} from './custom.styled';
import Close from '../../assets/icons/Close.svg';


export const CustomModal = ({children,  handleClose, title}) =>{

  
  
  
    return (
      <div>

<CustomModal onClick={() => handleClose(false)} >  </CustomModal>
      <ModalWrapper  >
        <ModalHeader >
          <div style={{marginLeft:'20px'}} > 
          <span className='text-nowrap' style={{fontWeight:'700'}} >{title}</span>
           </div>
 <CloseModal onClick={() => handleClose(false)} src={Close} alt={""} /> 
        </ModalHeader>
        {
          children 
        }
      </ModalWrapper>

      </div>
    )
  }
  
  