import React , { useState } from "react";
import "./profileOffering.css";
import edit from "../../../../assets/icons/edit.svg";
import { TextArea, Modal, Button } from "../../../../components";

const ProfileOfferings = ({data}) => {
 

  return (
    <div className="profile-offering">
      <section className="text-right pb-0">
        <img
          src={edit}
          alt="edit"
          data-toggle="modal"
          data-target="#editOffering"
          role="button"
        />
        <Modal title="Edit Offerings" id="editOffering">
          <EditOfferings  />
        </Modal>
      </section>

          <OfferContent title={'Offerings'}  className={'profile-offer-content pb-0 border-0'}
           data={data?.offerings} 
          />
            <OfferContent title={'Eligibility Criteria'}  className={'profile-offer-content pb-0 border-0'}
           data={data?.eligibility} 
          />
            <OfferContent title={'Important Note'}  className={'profile-offer-content pb-0 border-0'}
           data={data?.note} 
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

const EditOfferings = () => {
  return (
    <div className="px-4">
      <section className="mb-4">
        <TextArea
          label="Offerings"
          placeholder="Enter offering description"
          rows="6"
        />
      </section>

      <section className="mb-4">
        <TextArea
          label="Eligibility Criteria "
          placeholder="Eligibility Criteria "
          rows="6"
        />
      </section>

      <section className="mb-4">
        <TextArea
          label="Important Note"
          placeholder="Enter your terms and conditions"
          rows="6"
        />
      </section>

      <section className="mb-4">
        <TextArea label="Process" placeholder="Enter offer process" rows="6" />
      </section>

      <section className="text-right mb-3">
        <Button label="Save" />
      </section>
    </div>
  );
};
