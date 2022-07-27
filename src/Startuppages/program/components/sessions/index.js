import React, { useState, useEffect } from "react";
import { TodoCard, TabFilterWrapper, InProgress } from "./session.styled";
import person3 from "../../../../assets/icons/person3.svg";
import clock from "../../../../assets/icons/clocksm.svg";
import down from "../../../../assets/icons/downArrow.svg";
import {
    CustomThreeDots,
    RowOption,
    Select,
} from "../../../../Startupcomponents";
import { Tag } from "../../../../Startupcomponents/tag/Tag";
import { SmallModal } from "../../../../Startupcomponents";
import lady from "../../../../assets/images/smileLady.svg";
import question from "../../../../assets/icons/que.svg";
import { months, formatAMPM } from "../../../../utils/helpers";
import { getPrograms } from "../../../../services";
import { industry } from "../../../../constants/domiData";
import { PageLoader } from "../../../../components";
import { useAuth } from "../../../../hooks/useAuth";
import { EmptyState } from "../../../../mentorComponents";

export const Session = () => {
    const [programInfo, setProgramInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const res = await getPrograms({
                    page: currentPage,
                    limit: 5,
                });
                // console.log(res?.data?.data)
                setProgramInfo(res?.data?.data);
            } catch {
                setProgramInfo(null);
            }
            setLoading(false);
        };

        getData();
    }, [currentPage]);

    if (loading) {
        return <PageLoader num={[1, 2, 3, 4, 5]} />;
    }

    return (
        <div>
            {showModal ? (
                <SmallModal
                    id="inProgressModal"
                    title=""
                    closeModal={setShowModal}
                >
                    <InProgressModal />
                </SmallModal>
            ) : (
                <span></span>
            )}

            {openModal ? (
                <SmallModal
                    id="completeModal"
                    title=""
                    closeModal={setOpenModal}
                >
                    <CompleteModal />
                </SmallModal>
            ) : (
                <span></span>
            )}

            {displayModal ? (
                <SmallModal
                    id="upcomingModal"
                    title=""
                    closeModal={setDisplayModal}
                >
                    <UpcomingModal />
                </SmallModal>
            ) : (
                <span></span>
            )}

            <div className="me-3 d-flex justify-content-end">
                {/* <button
          className="d-flex align-items-center sort-btn"
          style={{ columnGap: 7 }}
          data-toggle="dropdown"
        > */}
                <Select
                    placeholder={"Sort by: Industry"}
                    // style={{background: "#FFFFFF"}}
                    options={industry}
                />
                {/* <span>
            <span>Sort by: </span> Industry
          </span> */}
                {/* <img src={down} alt="down" /> */}
                {/* </button> */}
            </div>

            <div className="row mt-2">
                {/* <TabFilterWrapper>
      <div className="me-3 my-3 d-flex justify-content-end">
          <button
            className="d-flex align-items-center sort-btn"
            style={{ columnGap: 7 }}
            data-toggle="dropdown"
          >
            <span>
              <span>Sort by: </span> Industry
            </span>
            <img src={down} alt="down" />
          </button>
        </div>
      </TabFilterWrapper> */}

                {programInfo?.length < 1 && <EmptyState />}
                {programInfo && programInfo?.length > 0 ? (
                    programInfo.map((info, i) => {
                        let date =
                            new Date(
                                "Fri May 13 2022 20:00:00 GMT+0100 (West Africa Standard Time)"
                            ).getHours() % 12;
                        let strt = new Date(info?.startTime).getHours() % 12;

                        const dateToCompare =
                            new Date(info?.endTime).getHours() % 12;
                        console.log(dateToCompare < date);
                        console.log(strt, dateToCompare);
                        const checkEqual = dateToCompare - strt;
                        console.log(checkEqual);
                        return (
                            <div key={i}>
                                {showModal && (
                                    <SmallModal
                                        id={`${i}`}
                                        title=""
                                        closeModal={setShowModal}
                                    >
                                        <InProgressModal data={info} />
                                    </SmallModal>
                                )}
                                <TodoCard
                                    key={i}
                                    className="col-6 mx-3 px-4"
                                    // data-target="#upcomingModal"
                                    onClick={() => setShowModal(true)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div className="d-flex justify-content-between head">
                                        <div className="d-flex">
                                            <h6 className="mr-5">
                                                {info?.topic}
                                            </h6>
                                            <Tag
                                                name={
                                                    dateToCompare < date
                                                        ? "completed"
                                                        : date - strt > -1
                                                        ? "on-going"
                                                        : "in-progress"
                                                }
                                                bg={
                                                    date < dateToCompare
                                                        ? "#F0F1FF"
                                                        : date - dateToCompare >
                                                          -1
                                                        ? "#DEF6FF"
                                                        : date > dateToCompare
                                                        ? "#D1FFD3"
                                                        : ""
                                                }
                                                fz="12px"
                                                color={
                                                    date > dateToCompare
                                                        ? "#337808"
                                                        : dateToCompare - date >
                                                          checkEqual
                                                        ? "#058DC1"
                                                        : "#2E3192"
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="d-flex my-2 date">
                                        <h6>
                                            {new Date(
                                                info?.startTime
                                            ).getDate()}{" "}
                                            |{" "}
                                            {
                                                months[
                                                    new Date(
                                                        info?.startTime
                                                    ).getMonth()
                                                ]
                                            }
                                        </h6>
                                        <article className="pt-1 mx-4">
                                            {" "}
                                            {`${info?.duration} Hours`}{" "}
                                        </article>

                                        <div>
                                            <img src={clock} alt="clock" />
                                            <span className="ps-1">
                                                {" "}
                                                {`${formatAMPM(
                                                    new Date(info?.startTime)
                                                )} - ${formatAMPM(
                                                    new Date(info?.endTime)
                                                )}`}{" "}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="my-4 body">
                                        <p>{info?.description}</p>
                                    </div>

                                    <div className="my-2 foot d-flex justify-content-between ">
                                        <button>View Session</button>
                                        <div className="d-flex mx-4">
                                            <div
                                                style={{
                                                    width: "50px",
                                                    height: "50px",
                                                }}
                                            >
                                                <img
                                                    className="rounded-circle"
                                                    style={{
                                                        width: "50px",
                                                        borderRadius: "60px",
                                                        height: "50px",
                                                    }}
                                                    src={
                                                        info?.guest?.logo ??
                                                        `https://ui-avatars.com/api/?name=${info?.guest?.name}`
                                                    }
                                                    alt=""
                                                />
                                            </div>
                                            <div className="d-block ms-2 mt-2">
                                                <p className="p">
                                                    {info?.guest?.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </TodoCard>
                            </div>
                        );
                    })
                ) : (
                    <EmptyState message={"No Session at the moment"} />
                )}
            </div>
        </div>
    );
};

export const InProgressModal = ({ data }) => {
    let date =
        new Date(
            "Fri May 13 2022 20:00:00 GMT+0100 (West Africa Standard Time)"
        ).getHours() % 12;
    let strt = new Date(data?.startTime).getHours() % 12;

    const dateToCompare = new Date(data?.endTime).getHours() % 12;
    console.log(dateToCompare < date);
    console.log(strt, dateToCompare);
    const checkEqual = dateToCompare - strt;
    console.log(checkEqual);

    return (
        <InProgress>
            <div className="mx-3">
                <div className="d-flex">
                    <div>
                        <h2>{data?.topic}</h2>
                    </div>
                    <div className="mt-1 ms-4">
                        <Tag
                            name={
                                dateToCompare < date
                                    ? "completed"
                                    : date - strt > -1
                                    ? "on-going"
                                    : "in-progress"
                            }
                            bg={
                                date < dateToCompare
                                    ? "#F0F1FF"
                                    : date - dateToCompare > -1
                                    ? "#DEF6FF"
                                    : date > dateToCompare
                                    ? "#D1FFD3"
                                    : ""
                            }
                            fz="12px"
                            color={
                                date > dateToCompare
                                    ? "#337808"
                                    : dateToCompare - date > checkEqual
                                    ? "#058DC1"
                                    : "#2E3192"
                            }
                        />
                    </div>
                </div>

                <div className="workshop mt-2">
                    <article>
                        <span>Workshop - </span> {data?.sector}
                    </article>
                </div>

                <div className="d-flex mt-3 date">
                    <h6>05 | September</h6>
                    <article className="pt-1 mx-4">
                        Duration - {data?.duration}{" "}
                    </article>

                    <div>
                        <img src={clock} alt="clock" />
                        <span className="ps-1">
                            {" "}
                            {`${formatAMPM(
                                new Date(data?.startTime)
                            )} - ${formatAMPM(new Date(data?.endTime))}`}{" "}
                        </span>
                    </div>
                </div>

                <div className="mt-4 mentor">
                    <h3 className="pb-2">Mentor</h3>
                    <div className="d-flex">
                        <img
                            className="rounded-circle"
                            src={
                                data?.guest?.logo ??
                                `https://ui-avatars.com/api/?name=${data?.guest}`
                            }
                            style={{ width: "60px", height: "60px" }}
                            alt="mentor pic"
                        />
                        <div className="ms-3">
                            <p> {data?.guest?.name} </p>
                        </div>
                        <div className="ms-5">
                            <Tag
                                name="Available"
                                bg="#F0F1FF"
                                fz="12px"
                                color="#2E3192"
                            />
                        </div>
                    </div>
                </div>

                <div className="sesDesc my-4">
                    <h6 className="pb-2">Session Description</h6>
                    <p>{data?.description}. </p>
                </div>

                <div className="mb-5">
                    <button type="button">
                        {" "}
                        <a
                            href={data?.joinWith}
                            style={{ textDecoration: "none", color: "#fff" }}
                        >
                            {" "}
                            Join Session{" "}
                        </a>{" "}
                    </button>
                </div>
            </div>
        </InProgress>
    );
};

export const CompleteModal = () => {
    return (
        <InProgress>
            <div className="mx-3">
                <div className="d-flex">
                    <div>
                        <h2>Legal Frame Work</h2>
                    </div>
                    <div className="mt-1 ms-4">
                        <Tag
                            name="Complete"
                            bg="#D1FFD3"
                            fz="12px"
                            color="#337808"
                        />
                    </div>
                </div>

                <div className="workshop mt-2">
                    <article>
                        <span>Workshop - </span> Legal Sessions
                    </article>
                </div>

                <div className="d-flex mt-3 date">
                    <h6>05 | September</h6>
                    <article className="pt-1 mx-4">
                        Duration - 45minutes
                    </article>

                    <div>
                        <img src={clock} alt="clock" />
                        <span className="ps-1">10am - 12pm</span>
                    </div>
                </div>

                <div className="mt-4 mentor">
                    <h3 className="pb-2">Mentor</h3>
                    <div className="d-flex">
                        <img src={lady} alt="mentor pic" />
                        <div className="ms-3">
                            <p>Prima Jakatar</p>
                            <span>Partner at Apple Inc. Canada</span>
                        </div>
                        <div className="ms-5">
                            <Tag
                                name="Available"
                                bg="#F0F1FF"
                                fz="12px"
                                color="#2E3192"
                            />
                        </div>
                    </div>
                </div>

                <div className="sesDesc mt-5 mb-3">
                    <h6 className="pb-2">Session Description</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Enim lectus morbi elementum eu.Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Enim lectus morbi
                        elementum eu.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </p>
                </div>

                <div className="sesDesc mb-5">
                    <h6 className="pb-2">Assignment</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Enim lectus morbi elementum eu.Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Enim lectus morbi
                        elementum eu.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </p>
                    <h6 className="pt-4">Task Link</h6>
                    <a href="">https://example.net/airplane?bridge=board</a>

                    <div className="d-flex mt-3 date">
                        <article className="">
                            Due Date - 10 September, 2021
                        </article>
                    </div>
                </div>

                <div className="mb-5 completeScore">
                    <h4>
                        How was the session with your mentor?{" "}
                        <img src={question} alt="" />
                    </h4>
                    <div className="d-flex">
                        <button className="me-4">0</button>
                        <button className="me-4">1</button>
                        <button className="me-4">2</button>
                        <button className="me-4">3</button>
                        <button className="me-4">4</button>
                        <button>5</button>
                    </div>
                </div>
            </div>
        </InProgress>
    );
};

export const UpcomingModal = () => {
    return (
        <InProgress>
            <div className="mx-3">
                <div className="d-flex">
                    <div>
                        <h2>Legal Frame Work</h2>
                    </div>
                    <div className="mt-1 ms-4">
                        <Tag
                            name="Upcoming"
                            bg="#DEF6FF"
                            fz="12px"
                            color="#058DC1"
                        />
                    </div>
                </div>

                <div className="workshop mt-2">
                    <article>
                        <span>Workshop - </span> Legal Sessions
                    </article>
                </div>

                <div className="d-flex mt-3 date">
                    <h6>05 | September</h6>
                    <article className="pt-1 mx-4">
                        Duration - 45minutes
                    </article>

                    <div>
                        <img src={clock} alt="clock" />
                        <span className="ps-1">10am - 12pm</span>
                    </div>
                </div>

                <div className="mt-4 mentor">
                    <h3 className="pb-2">Mentor</h3>
                    <div className="d-flex">
                        <img src={lady} alt="mentor pic" />
                        <div className="ms-3">
                            <p>Prima Jakatar</p>
                            <span>Partner at Apple Inc. Canada</span>
                        </div>
                        <div className="ms-5">
                            <Tag
                                name="Available"
                                bg="#F0F1FF"
                                fz="12px"
                                color="#2E3192"
                            />
                        </div>
                    </div>
                </div>

                <div className="sesDesc my-4">
                    <h6 className="pb-2">Session Description</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Enim lectus morbi elementum eu.Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Enim lectus morbi
                        elementum eu.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.{" "}
                    </p>
                </div>

                <div className="mb-5 upEvt">
                    <button>Join Event</button>
                </div>
            </div>
        </InProgress>
    );
};
