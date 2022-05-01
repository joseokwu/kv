import React, { useState } from "react";
import { ApplicationCard } from "../boosterPartner.styled";
import {
  compImage,
  Map,
  applicationCardData,
  cardDataModal,
  compdetailModal,
} from "../../../constants/domiData";
import { Modal, Tag } from "../../../Startupcomponents";
import approved from "../../../assets/icons/approved.svg";
import expired from "../../../assets/icons/ex.svg";
import cancel from "../../../assets/icons/cancel.svg";
import "../boosterPartner.css";
import { EmptyState } from "../../../mentorComponents";



export const AllApplication = ({ data }) => {

const approvedReq = data && data.filter(item => item.approvedRequests.length > 0)
const pending = data && data.filter(item => item.pendingRequests.length > 0)  
const declined = data && data.filter(item => item.declinedRequests.length > 0)

console.log(pending)
console.log(approvedReq)

  return (
    <div className="row" style={{ columnGap: 10 }}>
      
      {
        approvedReq === null && (<EmptyState />)
      }

      {
        approvedReq && approvedReq.length > 0 ? (
          
          approvedReq.map((item, i) => (
          <ApplicationCard key={i} className="col-lg-4 col-12 col-md-6 mb-4">
          <Modal id={`approved${i}`} withHeader={false}>
        <ApprovedModal data={item} />
           </Modal>
            <div>
             
            <img className=""  src={item.logo} alt="company logo" />
              
            </div>
            <div className="my-2">
              <h3> {item?.companyName} </h3>
            </div>
            <Tag name="Analytics" bg="#F5FFDE" color="#05C118" fz="12px" />
            <div className="my-3">
              <p>
                {data?.companyDescription}
                <span
                  data-target={`#approved${i}`}
                  data-toggle="modal"
                  
                >
                  Read More
                </span>
              </p>
            </div>
            <div>
              
                <button className="approvedBtn mt-2">
                  <img
                    className="mr-2 mb-1"
                    src={approved}
                    alt="approved icon"
                  />
                  Approved
                </button>
            </div>
          </ApplicationCard>
        
        ))) : (
          <EmptyState message={"No Applications yet"} />
        )
      }

      {
        declined.length > 0 && (
          
          declined.map((item, i) => (
          <ApplicationCard key={i} className="col-lg-4 col-12 col-md-6 mb-4">
          <Modal id={`approved${i}`} withHeader={false}>
        <ApprovedModal data={item} />
      </Modal>
            <div>
             
            <img className=""  src={item.logo} alt="company logo" />
              
            </div>
            <div className="my-2">
              <h3> {item?.companyName} </h3>
            </div>
            <Tag name="Analytics" bg="#F5FFDE" color="#05C118" fz="12px" />
            <div className="my-3">
              <p>
                {data?.companyDescription}
                <span
                  data-target={`#approved${i}`}
                  data-toggle="modal"
                  
                >
                  Read More
                </span>
              </p>
            </div>
            <div>
            <button className="declinedBtn mt-2">
            <img className="mr-2 mb-1" src={cancel} alt="declined icon" />
            Declined
          </button>
            </div>
          </ApplicationCard>
        
        )))
      }

      {
        pending.length > 0 && ( 

          pending.map((item, i) => (
          <ApplicationCard key={i} className="col-lg-4 col-12 col-md-6 mb-4">
          <Modal id={`approved${i}`} withHeader={false}>
        <ApprovedModal data={item} />
      </Modal>
            <div>
             
            <img className=""  src={item.logo} alt="company logo" />
              
            </div>
            <div className="my-2">
              <h3> {item?.companyName} </h3>
            </div>
            <Tag name="Analytics" bg="#F5FFDE" color="#05C118" fz="12px" />
            <div className="my-3">
              <p>
                {data?.companyDescription}
                <span
                  data-target={`#approved${i}`}
                  data-toggle="modal"
                  
                >
                  Read More
                </span>
              </p>
            </div>
            <div>
            <button className="declinedBtn mt-2">
            <img className="mr-2 mb-1" src={cancel} alt="declined icon" />
            Declined
          </button>
            </div>
          </ApplicationCard>
        
        )))
      }

    </div>
  )
};

//Applied Modal
export const AppliedModal = (data) => {
  return (
    <div className="applyModal px-4">
      <section className="pt-2">
        <button
          type="button"
          className="close close-founder-modal px-4"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </section>

      <div className="mt-5">
        {compImage.map((comp, i) => (
          <img className="" key={i} src={comp.logo} alt="company logo" />
        ))}
      </div>
      <div className="mt-3 d-flex justify-content-between">
        {cardDataModal.map((data, i) => (
          <div>
            <h3 key={i}>{data.header}</h3>
          </div>
        ))}
        <h6 className="mt-2">flutter.co</h6>
      </div>
      <div className="mb-4">
        <Tag name="Bike Rental" bg="#EDDEFF" color="#1405C1" fz="12px" />
      </div>
      <div className="">
        {compdetailModal.map((data, i) => (
          <div>
            <p key={i}>{data.detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-5">
        {Map.map((applied, i) => (
          <div>
            <h2>{applied.title}</h2>

            <div className="text-center">
              <img
                className="w-75"
                key={i}
                src={applied.appliedMap}
                alt="applied map"
              />
              <div className="d-flex justify-content-around">
                <span className="appliedGreen">Applied</span>
                <span className="appliedBlur">Approved</span>
                <span className="appliedBlur">Success</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
      <div className="border-bottom pb-4">
        {cardDataModal.map((data, i) => (
          <div>
            <h4 className="mt-5 mb-3">{data.subtitle}</h4>
            <p key={i}>{data.body}</p>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between my-5">
        <button className="applyModalback">Back</button>
        <button className="cancelApp">Cancel Application</button>
      </div>
    </div>
  );
};

//Declined Modal
const DeclinedModal = () => {
  return (
    <div className="applyModal px-4">
      <section className="pt-2">
        <button
          type="button"
          className="close close-founder-modal px-4"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </section>

      <div className="mt-5">
        {compImage.map((comp, i) => (
          <img className="" key={i} src={comp.logo} alt="company logo" />
        ))}
      </div>
      <div className="mt-3 d-flex justify-content-between">
        {cardDataModal.map((data, i) => (
          <div>
            <h3 key={i}>{data.header}</h3>
          </div>
        ))}
        <h6 className="mt-2">flutter.co</h6>
      </div>
      <div className="mb-4">
        <Tag name="Cloud Computing" bg="#DEF6FF" color="#058DC1" fz="12px" />
      </div>
      <div className="">
        {compdetailModal.map((data, i) => (
          <div>
            <p key={i}>{data.detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-5">
        {Map.map((declined, i) => (
          <div>
            <h2>{declined.title}</h2>

            <div className="text-center">
              <img
                className="w-75"
                key={i}
                src={declined.declinedMap}
                alt="applied map"
              />
              <div className="d-flex justify-content-around">
                <span className="appliedGreen">Applied</span>
                <span className="appliedBlur">Approved</span>
                <span className="appliedBlur">Success</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
      <div className="border-bottom pb-4">
        {cardDataModal.map((data, i) => (
          <div>
            <h4 className="mt-5 mb-3">{data.subtitle}</h4>
            <p key={i}>{data.body}</p>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between my-5">
        <button className="applyModalback">Back</button>
        <button className="reapplyBtn mt-2 me-2">Re-Apply</button>
      </div>
    </div>
  );
};




export const YetToApplyModal = (data) => {

  return (
    <div className="applyModal px-4">
      <section className="pt-2">
        <button
          type="button"
          className="close close-founder-modal px-4"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </section>

      <div className="mt-5">
      
      <img className="rounded-circle"  src={data?.data?.logo} alt="company logo" />
        
      </div>
      <div className="mt-3 d-flex justify-content-between">
      
          <div>
            <h3 >{data?.data?.companyName}</h3>  
          </div>
        
        <h6 className="mt-2"> { data?.data?.coordinatorName} </h6>
      </div>
      <div className="mb-4">
        <Tag name={data?.data?.categories} bg="#EDDEFF" color="#1405C1" fz="12px" />
      </div>
      <div className="">
       
          <div>
            <p >{data?.data?.companyDescription}</p>
          </div>
       
      </div>
     
      <div></div>
      <div className="border-bottom pb-4">
        
          <div>
            <h4 className="mt-5 mb-3">{data?.data?.designation}</h4>
            <p >{data?.data?.categories}</p>
          </div>
     
      </div>

      <div className="d-flex justify-content-between my-5">
        <button className="applyModalback">Back</button>
        
      </div>
    </div>
  );
};




//Expired Modal
const ExpiredModal = () => {
  return (
    <div className="applyModal px-4">
      <section className="pt-2">
        <button
          type="button"
          className="close close-founder-modal px-4"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </section>

      <div className="mt-5">
        {compImage.map((comp, i) => (
          <img className="" key={i} src={comp.logo} alt="company logo" />
        ))}
      </div>
      <div className="mt-3 d-flex justify-content-between">
        {cardDataModal.map((data, i) => (
          <div>
            <h3 key={i}>{data.header}</h3>
          </div>
        ))}
        <h6 className="mt-2">flutter.co</h6>
      </div>
      <div className="mb-4">
        <Tag name="Customer Support" bg="#FFFCDE" color="#C17605" fz="12px" />
      </div>
      <div className="">
        {compdetailModal.map((data, i) => (
          <div>
            <p key={i}>{data.detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-5">
        {Map.map((expired, i) => (
          <div>
            <h2>{expired.title}</h2>

            <div className="text-center">
              <img
                className="w-75"
                key={i}
                src={expired.expiredMap}
                alt="applied map"
              />
              <div className="d-flex justify-content-around">
                <span className="appliedGreen">Applied</span>
                <span className="appliedBlur">Approved</span>
                <span className="appliedBlur">Success</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
      <div className="border-bottom pb-4">
        {cardDataModal.map((data, i) => (
          <div>
            <h4 className="mt-5 mb-3">{data.subtitle}</h4>
            <p key={i}>{data.body}</p>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between my-5">
        <button className="applyModalback">Back</button>
        <button className="reapplyBtn mt-2 me-2">Re-Apply</button>
      </div>
    </div>
  );
};

//Approved Modal
const ApprovedModal = ({ data = {} }) => {
  return (
    <div className="applyModal px-4">
      <section className="pt-2">
        <button
          type="button"
          className="close close-founder-modal px-4"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </section>

      <div className="mt-5">
        {compImage.map((comp, i) => (
          <img className="" key={i} src={comp.logo} alt="company logo" />
        ))}
      </div>
      <div className="mt-3 d-flex justify-content-between">
        <div>
          <h3>{data.name}</h3>
        </div>
        <h6 className="mt-2">flutter.co</h6>
      </div>
      <div className="mb-4">
        <Tag name="Analytics" bg="#F5FFDE" color="#05C118" fz="12px" />
      </div>
      <div className="">
        <div>
          <p>{data.description}</p>
        </div>
      </div>
      <div className="mt-5">
        {Map.map((approved, i) => (
          <div>
            <h2>{approved.title}</h2>

            <div className="text-center">
              <img
                className="w-75"
                key={i}
                src={approved.approvedMap}
                alt="applied map"
              />
              <div className="d-flex justify-content-around">
                <span className="appliedGreen">Applied</span>
                <span className="appliedBlur">Approved</span>
                <span className="appliedBlur">Success</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
      <div className="border-bottom pb-4">
        {cardDataModal.map((data, i) => (
          <div>
            <h4 className="mt-5 mb-3">{data.subtitle}</h4>
            <p key={i}>{data.body}</p>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between my-5">
        <button className="applyModalback">Back</button>
        <div>
          {/* <button className="cancelApp">Cancel Application</button> */}
          <button
            className={`${data?.status}Btn mt-2`}
            disabled={data?.status === "applied"}
          >
            {data?.status === "approved" && (
              <img className="mr-2 mb-1" src={approved} alt="approved icon" />
            )}
            {data?.status === "declined" ? "Re-apply" : data?.status}
          </button>
        </div>
      </div>
    </div>
  );
};

const ApplyModal = () => {
  return (
    <div className="applyModal px-4">
      <section className="pt-2">
        <button
          type="button"
          className="close close-founder-modal px-4 py-2"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </section>

      <div className="mt-5">
        {compImage.map((comp, i) => (
          <img className="" key={i} src={comp.logo} alt="company logo" />
        ))}
      </div>
      <div className="mt-3 d-flex justify-content-between">
        {cardDataModal.map((data, i) => (
          <div>
            <h3 key={i}>{data.header}</h3>
          </div>
        ))}
        <h6 className="mt-2">flutter.co</h6>
      </div>
      <div className="mb-4">
        <Tag
          className=""
          name="Analytics"
          bg="#F5FFDE"
          color="#05C118"
          fz="12px"
        />
      </div>
      <div className="">
        {compdetailModal.map((data, i) => (
          <div>
            <p key={i}>{data.detail}</p>
          </div>
        ))}
      </div>
      <div className="border-bottom pb-4">
        {cardDataModal.map((data, i) => (
          <div>
            <h4 className="mt-5 mb-3">{data.subtitle}</h4>
            <p key={i}>{data.body}</p>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between my-5">
        <button className="applyModalback">Back</button>
        <button className="applyModalapply">Apply</button>
      </div>
    </div>
  )
}