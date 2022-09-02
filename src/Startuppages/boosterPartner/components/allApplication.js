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
import APPROVED from "../../../assets/icons/approved.svg";
import DECLINED from "../../../assets/icons/declinedIcon.svg";
import PENDING from "../../../assets/icons/expired.svg";
import "../boosterPartner.css";
import { EmptyState } from "../../../mentorComponents";

export const AllApplication = ({ data }) => {
    console.log(data.data);

    if (data?.length === 0) return <EmptyState message="No applications" />;

    return (
        <div className="row" style={{ columnGap: 10 }}>
            {data?.data?.length > 0 &&
                data?.data.map((item, i) => (
                    <ApplicationCard
                        key={i}
                        className="col-lg-4 col-12 col-md-6 mb-4"
                    >
                        <Modal id={`approved${i}`} withHeader={false}>
                            <ApprovedModal data={item} />
                        </Modal>
                        <div>
                            <img
                                className=""
                                src={item.logo}
                                alt="company logo"
                            />
                        </div>
                        <div className="my-2">
                            <h3> {item?.startupName} </h3>
                        </div>
                        <Tag
                            name={item?.industry}
                            bg="#F5FFDE"
                            color="#f5a114"
                            fz="12px"
                        />
                        <div className="my-3">
                            <p>
                                {data?.description}
                                <span
                                    data-target={`#approved${i}`}
                                    data-toggle="modal"
                                >
                                    Read More
                                </span>
                            </p>
                        </div>
                        <div>
                            <button
                                className={` ${
                                    item?.status === "APPROVED"
                                        ? "approvedBtn"
                                        : item?.status === "PENDING"
                                        ? "cancelApp"
                                        : item?.status === "DECLINED"
                                        ? "declinedBtn"
                                        : ""
                                }  mt-2 `}
                            >
                                <img
                                    className="mr-2 mb-1"
                                    src={
                                        item?.status === "APPROVED"
                                            ? APPROVED
                                            : item?.status === "PENDING"
                                            ? PENDING
                                            : item?.status === "DECLINED"
                                            ? DECLINED
                                            : ""
                                    }
                                    alt="approved icon"
                                />
                                {item?.status === "APPROVED"
                                    ? "APPROVED"
                                    : item?.status === "PENDING"
                                    ? "PENDING"
                                    : item?.status === "DECLINED"
                                    ? "DECLINED"
                                    : ""}
                            </button>
                        </div>
                    </ApplicationCard>
                ))}
        </div>
    );
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
                    <img
                        className=""
                        key={i}
                        src={comp.logo}
                        alt="company logo"
                    />
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
                    name="Bike Rental"
                    bg="#EDDEFF"
                    color="#1405C1"
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
                <img
                    className="rounded-circle"
                    src={data?.data?.logo}
                    alt="company logo"
                />
            </div>
            <div className="mt-3 d-flex justify-content-between">
                <div>
                    <h3>{data?.data?.companyName}</h3>
                </div>

                <h6 className="mt-2"> {data?.data?.coordinatorName} </h6>
            </div>
            <div className="mb-4">
                <Tag
                    name={data?.data?.categories}
                    bg="#EDDEFF"
                    color="#1405C1"
                    fz="12px"
                />
            </div>
            <div className="">
                <div>
                    <p>{data?.data?.companyDescription}</p>
                </div>
            </div>

            <div></div>
            <div className="border-bottom pb-4">
                <div>
                    <h4 className="mt-5 mb-3">{data?.data?.designation}</h4>
                    <p>{data?.data?.categories}</p>
                </div>
            </div>

            <div className="d-flex justify-content-between my-5">
                <button className="applyModalback">Back</button>
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
                    <img
                        className=""
                        key={i}
                        src={comp.logo}
                        alt="company logo"
                    />
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
                            <img
                                className="mr-2 mb-1"
                                src={APPROVED}
                                alt="approved icon"
                            />
                        )}
                        {data?.status === "declined"
                            ? "Re-apply"
                            : data?.status}
                    </button>
                </div>
            </div>
        </div>
    );
};
