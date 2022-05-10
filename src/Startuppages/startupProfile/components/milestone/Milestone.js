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
import moment from 'moment';



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
  const { callUpdateStartupData  } = useAuth();
  const [date, setDate] = useState();

  const handleDate = (value) =>{
    setDate(moment(value).format('YYYY-MM-DD'))
    console.log(moment(value).format('YYYY-MM-DD'))
  }

  const onFinish = async (values) => {
  
   callUpdateStartupData({
      type:'mileStone',
      values:{
       ...values,
       dateOfAchievement:date
     }
    });
    close(false)
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
