import React, { useState } from "react";
import {
  MilestoneList,
  SmallModal,
  TextArea,
  TextField,
} from "../../../../Startupcomponents";
import { MilestoneModal } from "./milestone.styled";
import { Form , DatePicker  } from 'antd';
import { TextareaCustom } from '../../../../components/textArea/cutstomTextarea';
import { useAuth } from '../../../../hooks/useAuth';
import moment from 'moment'
import { updateFounderProfile  } from '../../../../services/startup';
import { toast } from 'react-hot-toast';


export const Milestone = ({ data = [] }) => {
  const [showModal, setShowModal] = useState(false);
  
 


  return (
    <div>
      {showModal ? (
        <SmallModal
          id="updateMilestoneModal"
          title=""
          closeModal={setShowModal}
        >
          <UpdateMilestoneModal close={setShowModal} />
        </SmallModal>
      ) : (
        <span></span>
      )}
      <section className="d-flex justify-content-end">
        <button
          className="teamBtn"
          data-target="#updateMilestoneModal"
          onClick={() => setShowModal(true)}
        >
          Update
        </button>
      </section>
      <MilestoneList data={data} />
    </div>
  );
};

export const UpdateMilestoneModal = ({close}) => {
  const {  updateStartupInfo , updateProfile  } = useAuth();
  const [date, setDate] = useState();

  const handleDate = (value) =>{
    setDate(moment(value).format('YYYY-MM-DD'))
    console.log(moment(value).format('YYYY-MM-DD'))
  }

  const onFinish = async (values) => {
  
  try{
    const res = await updateFounderProfile({
      type:'mileStone',
      values:{
       ...values,
       dateOfAchievement:date
     }
    });
   // console.log(date)
    toast.success(res?.message)
    close(false)

  }catch(err){
    toast.error(err?.response?.data?.message ?? 'Unable to update profile')
  }

  }


  return (
    <MilestoneModal>
      <div className="milestoneModal mx-3">
      <Form
        name="Mile stone"
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        onFinish={onFinish}
      >
        <div>
          <h4>Update Milestone</h4>
        </div>
        <div className="mt-5">
          <TextareaCustom 
           label="Title"
           name={'title'}
           />
        </div>
        <div className="my-3">
          <TextareaCustom 
          name={'description'}
           label="Description"  />
        </div>
        <DatePicker
          onChange={handleDate}
          label="Date of achievement"
          name={'dateOfAchievement'}
       
          
        />
        <div className="mt-5">
          <button 
          type="submit"
           >Create task</button>
        </div>
        </Form>
      </div>
    </MilestoneModal>
  );
};
