import React from "react";
import { Tag, Modal, Select, Button } from "../../../../components";
import edit from "../../../../assets/icons/edit.svg";

const ProfileCategory = ({data}) => {
  return (
    <section className="profile-offering mb-3">
      <span className="text-right d-block">
        <img
          src={edit}
          alt="edit"
          data-toggle="modal"
          data-target="#editCategoryModal"
          role="button"
        />
        <Modal title="Edit" id="editCategoryModal">
          <EditCategory />
        </Modal>
      </span>

      <div>
        <section className="mb-5">
          <p className="partner-cat-header mb-4">Partner Category</p>
          <span className="cat-tag"> { data?.category } </span> 
        </section>

        <section>
          <p className="partner-cat-header mb-4">Industry</p>
          <span
            className="d-flex align-items-center flex-wrap"
            style={{ columnGap: 10, rowGap: 10 }}
          >
             {
              data?.industry?.map((item, i) =>{
                  return (
                    <Tag name={item} color={item === 'Engineering'  ? '#40439A' : item === 'Career' ? '#E31937' : '#ACACAC' }  />
                   )
              })
            }
           
          </span>
        </section>
      </div>
    </section>
  );
};

export default ProfileCategory;

const EditCategory = () => {
  return (
    <div className="px-4 pb-4">
      <section className="d-flex mb-4" style={{ columnGap: 23 }}>
        <div style={{ flexBasis: "50%" }}>
          <Select label="Partners Category" className="modal-select" />
        </div>
        <div style={{ flexBasis: "50%" }}>
          <Select label="Industry" className="modal-select" />
        </div>
      </section>
      <section className="text-right">
        <Button label="Save" />
      </section>
    </div>
  );
};
