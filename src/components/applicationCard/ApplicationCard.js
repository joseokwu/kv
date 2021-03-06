import React, { useEffect, useState } from "react";
import "./applicationCard.css";
import comment from "../../assets/icons/comment.svg";
import approvedIcon from "../../assets/icons/greenCircleCheck.svg";
import declinedIcon from "../../assets/icons/declinedIcon.svg";
import expiredIcon from "../../assets/icons/expired.svg";
import sampleCommenter from "../../assets/images/sampleCommenter.png";
import { Button, Tag, Badge } from "../index";
import { ReadMore } from "./../../mentorComponents/readMore/readMore";
import { manageStartupApplication } from "../../services";
import { useAuth } from "../../hooks/useAuth";
import { moment } from "moment";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";

export const ApplicationCard = ({ index = 0, data, status, apply }) => {
    // const date = new Date(data?.applied)
    // const [numVal, setNum] = useState(120);

    const { updatePartnerInfo } = useAuth();
    useEffect(() => {
        // console.log(status);
    }, []);

    return (
        <div className="appCard-main" role="button">
            <section
                className="appCard-title"
                data-toggle="modal"
                data-target={`#applicantModal`}
            >
                <article>
                    <section className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center mb-2">
                            <img src={data?.logo} alt="applicant logo" />
                            <h3 className="ml-2"> {data?.startupName} </h3>
                        </div>
                        <div>
                            <Badge name="Acceleration" />
                        </div>
                    </section>
                    <section className="d-flex flex-wrap appCard-tag-group">
                        <Tag name={data?.industry} color={"#E31937"} />
                    </section>
                </article>
            </section>
            <section
                className="appCard-desc"
                data-toggle="modal"
                data-target={`#applicantModal`}
            >
                <p className="appCard-text">
                    <ReadMore>{data?.description}</ReadMore>
                </p>
            </section>
            <section
                className="d-flex align-items-center justify-content-between appCard-info"
                data-toggle="modal"
                data-target={`#applicantModal`}
            >
                <div>
                    <p>Applied : {data?.date?.substr(0, 10)} </p>
                    <p>Contact Person: {data?.startupName} </p>
                </div>
                <div className="text-right">
                    <p> {data?.email} </p>
                    <p>Contact No: {data?.phone} </p>
                </div>
            </section>

            <section
                className="d-flex align-items-center justify-content-between flex-wrap"
                data-toggle="modal"
                data-target={`#applicantModal${index}`}
            >
                {data?.status === "PENDING" ? (
                    <div className="d-flex align-items-center gap-2">
                        <Button
                            label="Approve"
                            onClick={async () => {
                                console.log(data);
                                console.log({
                                    payload: {
                                        status: "APPROVED",
                                    },
                                    startupId: data?.startupId,
                                });
                                await manageStartupApplication({
                                    payload: {
                                        status: "APPROVED",
                                    },
                                    startupId: data?.startupId,
                                });
                                apply(data?.startupId, "APPROVED");
                            }}
                        />
                        <Button
                            label="Decline"
                            variant="secondary"
                            onClick={async () => {
                                console.log(data);
                                console.log({
                                    payload: {
                                        status: "DECLINED",
                                    },
                                    startupId: data?.startupId,
                                });
                                await manageStartupApplication({
                                    payload: {
                                        status: "DECLINED",
                                    },
                                    startupId: data?.startupId,
                                });
                                apply(data?.startupId, "DECLINED");
                            }}
                        />
                    </div>
                ) : data?.status === "APPROVED" ? (
                    <div
                        style={{ color: "#18A615", fontSize: "16px" }}
                        className="d-flex flex-row align-items-center gap-2"
                    >
                        <BsFillCheckCircleFill size={16} />
                        Approved
                    </div>
                ) : data?.status === "DECLINED" ? (
                    <div
                        style={{ color: "#E21919", fontSize: "16px" }}
                        className="d-flex flex-row align-items-center gap-2"
                    >
                        <IoMdCloseCircle size={16} />
                        Declined
                    </div>
                ) : (
                    <div className="d-flex align-items-center gap-2">
                        <Button
                            label="Approve"
                            onClick={async () => {
                                console.log(data);
                                console.log({
                                    payload: {
                                        status: "APPROVED",
                                    },
                                    startupId: data?.startupId,
                                });
                                await manageStartupApplication({
                                    payload: {
                                        status: "APPROVED",
                                    },
                                    startupId: data?.startupId,
                                });
                                apply(data?.startupId, "APPROVED");
                            }}
                        />
                        <Button
                            label="Decline"
                            variant="secondary"
                            onClick={async () => {
                                console.log(data);
                                console.log({
                                    payload: {
                                        status: "DECLINED",
                                    },
                                    startupId: data?.startupId,
                                });
                                await manageStartupApplication({
                                    payload: {
                                        status: "DECLINED",
                                    },
                                    startupId: data?.startupId,
                                });
                                apply(data?.startupId, "DECLINED");
                            }}
                        />
                    </div>
                )}
                <div className="d-flex align-items-center appCard-comment mb-3">
                    <p className="appCard-text">Comment</p>
                    <img src={comment} alt="comment" />
                </div>
            </section>
        </div>
    );
};

// const ApplicantModal = ({ logo = "", status = "", id = "" , data }) => {

//   const date = new Date(data?.applied)

//   const statusRender = () => {
//     switch (data?.status) {
//       case "pending":
//         return (
//           <div className="d-flex align-items-center appCard-btn-group mb-3">
//             <Button label="Approve" />
//             <Button label="Decline" variant="secondary" />
//           </div>
//         );
//       case "approved":
//         return (
//           <div className="d-flex align-items-center mb-3">
//             <img src={approvedIcon} alt="approved" />
//             <p className="approved-txt">Approved</p>
//           </div>
//         );

//       case "declined":
//         return (
//           <div className="d-flex align-items-center mb-3">
//             <img src={declinedIcon} alt="declined" />
//             <p className="declined-txt">Declined</p>
//           </div>
//         );
//       case "expired":
//         return (
//           <div className="d-flex align-items-center mb-3">
//             <img src={expiredIcon} alt="expired" />
//             <p className="expired-txt">Expired</p>
//           </div>
//         );
//       case "re-applied":
//         return (
//           <div className="d-flex align-items-center appCard-btn-group mb-3">
//             <Button label="Accept" />
//             <Button label="Ignore" variant="secondary" />
//           </div>
//         );

//       default:
//         return (
//           <div className="d-flex align-items-center appCard-btn-group mb-3">
//             <Button label="Approve" />
//             <Button label="Decline" variant="secondary" />
//           </div>
//         );
//     }
//   };
//   return (
//     <div
//       className="modal fade"
//       id={id}
//       tabIndex="-1"
//       role="dialog"
//       aria-labelledby="exampleModalLabel"
//       aria-hidden="true"
//     >
//       <div
//         className="modal-dialog"
//         role="document"
//         style={{ marginTop: 120, maxWidth: 847 }}
//       >
//         <div className="modal-content" style={{ padding: 35 }}>
//           <div className="modal-body d-block">
//             <section style={{ height: 20, marginBottom: 20 }}>
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </section>

//             <section className="row applicant-modal-content">
//               <div className="col-3">
//                 <section className="applicant-logo">
//                   <img src={logo} alt="logo" className="" />
//                 </section>
//                 <h1 className="applicant-modal-header"> { data?.name} </h1>
//                 <div>
//                   <span className="d-flex flex-wrap appCard-tag-group">
//                   {
//               data?.industry?.map((item, i) =>{
//                   return (
//                     <Tag name={item} color={item === 'Engineering' ? '#40439A' : item === 'Career' ? '#E31937' : '#ACACAC' }  />
//                    )
//               })
//             }
//                   </span>
//                 </div>
//               </div>
//               <div className="col-9">
//                 <section
//                   className="d-flex justify-content-between"
//                   style={{ marginBottom: 34 }}
//                 >
//                   <div>
//                     <Badge name="Acceleration" />
//                   </div>
//                 </section>

//                 <section
//                   className="d-flex align-items-center justify-content-between appCard-info modal-applicant-info"
//                   style={{ color: "#6466AA" }}
//                 >
//                   <div>
//                     <p>Applied : </p>
//                     <p>Contact Person:  { data?.startupName }</p>
//                   </div>
//                   <div className="text-right">
//                     <p>Applied </p>
//                     <p>Contact Person: { data?.contact }</p>
//                   </div>
//                 </section>

//                 <section className="appCard-desc border-0">
//                   <p className="appCard-text">
//                   {
//                       data?.description ?? ''
//                     }
//                   </p>
//                 </section>
//                 <section className="d-flex align-items-center justify-content-between flex-wrap">

//                   <div className="d-flex align-items-center appCard-comment mb-3">
//                     <p className="appCard-text">Comment</p>
//                     <img src={comment} alt="comment" />
//                   </div>
//                 </section>
//               </div>

//               <div className="col-12 applicant-modal-comment-section px-0">
//                 <section>
//                   <textarea
//                     name=""
//                     id=""
//                     rows="3"
//                     className="comment-textarea"
//                     placeholder="Add Note"
//                   ></textarea>
//                 </section>
//                 <section className="d-flex justify-content-end">
//                   <span className="comment-send" role="button">
//                     Send
//                   </span>
//                 </section>
//                 <section className="mb-2">
//                   <div className="d-flex align-items-center">
//                     <img
//                       src={sampleCommenter}
//                       alt="commenter"
//                       className="commenter-img"
//                     />
//                     <p className="ml-3 commenter-name">Kenyatta Laurence</p>
//                   </div>
//                   <div className="commenter-comment">
//                     <p>
//                     {
//                         data?.comment
//                       }
//                     </p>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <span role="button" className="replay-cbt">
//                       Reply
//                     </span>
//                     <p className="comment-time">  { date.toISOString().substring(0,10) } </p>
//                   </div>
//                 </section>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
