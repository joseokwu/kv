import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import twitter from "../../../../assets/icons/twtsm.svg";
import linkedIn from "../../../../assets/icons/lnkdsm.svg";
import whatsApp from "../../../../assets/icons/whtsm.svg";
import apple from "../../../../assets/images/apple.svg";
import mail from "../../../../assets/icons/mail.svg";
import blue from "../../../../assets/images/edublue.svg";
import { AvatarWrapper } from "../../../../components";

import "./team.css";
import { LargeModal, Tag, Modal } from "../../../../Startupcomponents";
import moment from "moment";
import { EmptyState } from "../../../../mentorComponents";

export const Team = ({ data }) => {
    // const count = [1, 2, 3, 4, 5, 6]
    // const {push} = useHistory();

    const [showModal, setShowModal] = useState(false);
    const [showCofounder, setCofounder] = useState(false);
    const [modalData, setModalData] = useState({});

    const displayModal = (data, i) => {
        if (showCofounder) {
            console.log(i);
            return (
                <LargeModal closeModal={setCofounder}>
                    <FounderModal data={data} />
                </LargeModal>
            );
        }
    };

    return (
        <div>
            {showModal ? (
                <LargeModal
                    id="founderModal"
                    title=""
                    closeModal={setShowModal}
                >
                    <FounderModal data={data} />
                </LargeModal>
            ) : (
                <span></span>
            )}
            <h3 className="tab-section-title">Team</h3>
            {/* <section className="d-flex justify-content-end">
  <button className="teamBtn">Add team member</button>
</section> */}
            <section>
                {/* <h4 className="team-group-title">Founder & Co-Founders</h4> */}
                <h4 className="team-group-title">Founder</h4>
                <div className="">
                    <section className="col-lg-4 mb-4">
                        <TeamMember
                            showCofounder={showModal}
                            setCofounder={setShowModal}
                            data={data}
                        />
                    </section>
                </div>
            </section>
            <section>
                <h4 className="team-group-title mt-5">Team Members</h4>
                <div className="row">
                    {data?.coFounder.length > 0 ? (
                        data?.coFounder?.map((item, i) => {
                            return (
                                <div
                                    className="col-lg-4 col-6 mb-4"
                                    key={i}
                                    onClick={() => setModalData(item)}
                                >
                                    <TeamMember
                                        showCofounder={showCofounder}
                                        setCofounder={setCofounder}
                                        modalData={modalData}
                                        data={item}
                                    />
                                </div>
                            );
                        })
                    ) : (
                        <EmptyState message="You have no team members" />
                    )}
                </div>
            </section>
        </div>
    );
};

const TeamMember = ({ data, modalData, showCofounder, setCofounder }) => {
    // console.log(data)
    return (
        <>
            {showCofounder ? (
                <LargeModal closeModal={setCofounder}>
                    <FounderModal data={data} />
                </LargeModal>
            ) : (
                <span />
            )}
            <div
                className="d-flex align-items-center flex-wrap gap-4 member-card"
                onClick={() => setCofounder(!showCofounder)}
            >
                <AvatarWrapper
                    condition={data?.avatar}
                    size={80}
                    initials={
                        data?.firstName?.slice(0, 1) +
                        data?.lastName?.slice(0, 1)
                    }
                >
                    <img
                        src={data?.avatar}
                        alt="team member"
                        className="mr-4"
                        style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "50px",
                        }}
                    />
                </AvatarWrapper>
                <section>
                    <p className="mb-1">
                        {data?.firstName + data?.lastName || "Anon Founder"}
                    </p>
                    <p className="small"> {data?.position ?? "Founder"} </p>
                    <span className="d-flex mt-3">
                        <a
                            href={data?.socialMedia?.linkedIn}
                            target="_blank"
                            onClick={(ev) => ev.stopPropagation()}
                        >
                            <img
                                src={linkedIn}
                                alt="linkedIn"
                                to={data?.socialMedia?.linkedIn}
                                width="24"
                                height="24"
                            />
                        </a>

                        <a
                            href={data?.socialMedia?.twitter}
                            target="_blank"
                            onClick={(ev) => ev.stopPropagation()}
                        >
                            <img
                                src={twitter}
                                alt="twitter"
                                className="mx-2"
                                width="24"
                                to={data?.socialMedia?.twitter}
                                height="24"
                            />
                        </a>
                        <a
                            href={`https://wa.me/${data?.mobile_number}?text=`}
                            target="_blank"
                            onClick={(ev) => ev.stopPropagation()}
                        >
                            <img
                                src={whatsApp}
                                alt="whatsapp"
                                width="24"
                                height="24"
                            />
                        </a>
                    </span>
                </section>
            </div>
        </>
    );
};

const FounderModal = ({ data }) => {
    console.log(data);
    return (
        <section className="container dashboard_profle mt-4">
            <div className="row founder_profile">
                <div className="col-lg-2 me-5">
                    <AvatarWrapper
                        condition={data?.avatar}
                        size={150}
                        initials={
                            data?.firstName?.slice(0, 1) +
                            data?.lastName?.slice(0, 1)
                        }
                    >
                        <img
                            src={data?.avatar}
                            style={{
                                width: "150px",
                                height: "150px",
                                borderRadius: "60px",
                            }}
                            alt=""
                        />
                    </AvatarWrapper>
                </div>
                <div className="col-lg-9 mt-3">
                    <div className="d-flex justify-content-between ">
                        <div>
                            <h1>
                                {data?.firstName + " " + data?.lastName ||
                                    "Anon Founder"}
                            </h1>
                            <p> {data?.position ?? "Founder"} </p>
                        </div>
                        <div className="">
                            <a
                                href={data?.socialMedia?.linkedIn}
                                target="_blank"
                                className="icon"
                            >
                                <img src={linkedIn} alt="linkedIn" />
                            </a>
                            <a
                                href={data?.socialMedia?.twitter}
                                target="_blank"
                                className="icon"
                            >
                                <img
                                    className="px-3"
                                    src={twitter}
                                    alt="twitter"
                                />
                            </a>
                            <a
                                href={data?.socialMedia?.whatsApp}
                                target="_blank"
                                className="icon"
                            >
                                <img src={whatsApp} alt="whatsApp" />
                            </a>
                        </div>
                    </div>

                    <div className="my-2">
                        <p>
                            <img className="pr-2" src={mail} alt="mail" />
                            {data?.email}
                        </p>
                    </div>
                </div>
            </div>

            <div className="col">
                {/* <div className="dashboard_profile_banner"></div> */}
                <div className="dashboard_profile_info">
                    <section className="row founder_main mt-5 pb-5 mb-5 py-5">
                        <div className="col-lg-11 founder_card">
                            <div className="p-4">
                                <h3 className="pb-3">About </h3>
                                <p>{data?.briefIntroduction}</p>
                            </div>

                            <div className="p-4 industry border-bottom">
                                <h3>Experience</h3>
                                <div className="mt-4 mb-4 d-flex">
                                    {data?.experience?.map((item, i) => (
                                        <div key={i}>
                                            <div className="founder_experience ml-4">
                                                <h3 className="">
                                                    {" "}
                                                    {item?.companyName}{" "}
                                                </h3>
                                                <p className="pt-2 pb-2">
                                                    {" "}
                                                    {item?.position}{" "}
                                                </p>
                                                <p className="pb-4">
                                                    {item?.location}{" "}
                                                </p>

                                                <h4>
                                                    {" "}
                                                    {`${moment(
                                                        item?.startDate
                                                    ).format("YYYY")} - ${
                                                        item?.endDate ===
                                                        "present"
                                                            ? item?.endDate
                                                            : moment(
                                                                  item?.endDate
                                                              ).format("YYYY")
                                                    }`}
                                                </h4>
                                                <p className="pt-3">
                                                    {item?.responsibility}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="row p-4 education mt-4">
                                <h3>Education</h3>
                                {data?.education.map((item, i) => (
                                    <div
                                        key={i}
                                        className="col-lg-8 d-flex mt-4"
                                    >
                                        <div className="mx-4">
                                            <h6> {item?.schoolName} </h6>
                                            <p className="py-2">
                                                {item?.course}{" "}
                                            </p>
                                            <article>
                                                {item?.degreeType ?? ""}
                                            </article>
                                            <article className="py-2">{`${moment(
                                                item?.startDate
                                            ).format("YYYY")} - ${
                                                item?.endDate === "present"
                                                    ? item?.endDate
                                                    : moment(
                                                          item?.endDate
                                                      ).format("YYYY")
                                            }`}</article>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <section className="p-4 col-lg mt-4 mb-5">
                                <h3 className="pb-3">Skills</h3>
                                <span
                                    className="d-flex align-items-center flex-wrap"
                                    style={{ columnGap: 10, rowGap: 10 }}
                                >
                                    {data?.skills.map((item, i) => (
                                        <Tag
                                            name={item}
                                            key={i}
                                            color="#E31937"
                                            bg="#FFF1F3"
                                        />
                                    ))}
                                </span>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};
