import React , { useState } from "react";
import "./profileOffering.css";
import edit from "../../../../assets/icons/edit.svg";
import { TextArea, Modal, Button  } from "../../../../components";
import {useAuth} from '../../../../hooks/useAuth';
import { TextareaCustom } from '../../../../components/textArea/cutstomTextarea';
import { Form } from 'antd';
import { letterOnly, months } from '../../../../utils/helpers';

const ProfileOfferings = ({data}) => {
 


  return (
    <div className="profile-offering mb-3">
      <section className="text-right pb-0">
        <img
          src={edit}
          alt="edit"
          data-toggle="modal"
          data-target="#editOffering"
          role="button"
        />
        <Modal title="Edit Offerings" id="editOffering">
          <EditOfferings data={data}  />
        </Modal>
      </section>

          <OfferContent title={'Offerings'}  className={'profile-offer-content pb-0 border-0'}
           data={data?.offerings} 
          />
          
          <OfferContent title={'Eligibility Criteria'}  className={'profile-offer-content pb-0 border-0'}
           data={data?.eligibilityCriteria} 
          />
          
          <OfferContent title={'Important Note'}  className={'profile-offer-content pb-0 border-0'}
           data={data?.importantNote} 
          />
            
          <OfferContent title={'Process'}  className={'profile-offer-content pb-0 border-0'}
           data={data?.process} 
          />
   
    </div>
  );
};

export default ProfileOfferings;

const OfferContent = ({ title,  className, data }) => {
  
  const [see, setSee] = useState(100);
  
  return (
    <section
      className={className}
    >
      <h3>{title}</h3>
      <p>
       { data && data.substr(0, see) } <span style={{
         cursor:'pointer'
       }} onClick={() => { see === 100 ? setSee(data.length) : setSee(100) }} > { see === 100 ? 'see more' : 'see less' } </span>
      </p>
    </section>
  );
};

const EditOfferings = (data) => {
  const { stateAuth, updatePartnerLocalData, updatePartnerInfo } = useAuth();

  const onFinish = async (values) => {
    // console.log(stateAuth)

    updatePartnerInfo()
  
  }

  return (
    <div className="px-4">
      <Form
        name="Edit"
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        onFinish={onFinish}
      >
      <section className="mb-4">
      <TextareaCustom
              name={'offerings'}
              label={'Offerings'}
              value={stateAuth?.partnerData?.offerings?.offerings}
              onChange={(e) =>
                updatePartnerLocalData('offerings', {
                  offerings: e.target.value,
                })
              }
              onKeyPress={letterOnly}
              placeholder={'Enter offering description (250 characters at most)'}
            />
      </section>

     
      <section className="mb-4">
      <TextareaCustom
              name={'eligibilityCriteria'}
              label={'Eligibility Criteria '}
              value={stateAuth?.partnerData?.offerings?.eligibilityCriteria}
              onChange={(e) =>
                updatePartnerLocalData('offerings', {
                  eligibilityCriteria: e.target.value,
                })
              }
              onKeyPress={letterOnly}
              placeholder={'Enter Eligibility Criteria (250 characters at most)'}
            />
      </section>

      <section className="mb-4">
      <TextareaCustom
              name={'process'}
              label={'Process '}
              value={stateAuth?.partnerData?.offerings?.process}
              onChange={(e) =>
                updatePartnerLocalData('offerings', {
                  process: e.target.value,
                })
              }
              onKeyPress={letterOnly}
              placeholder={'Enter offer process (250 characters at most)'}
            />
      </section>

      <section className="text-right mb-3">
        <Button type="submit"  label="Save" />
      </section>
      </Form>
    </div>
  );
};
