import React, { useState } from "react";
import { YesNo } from "../../../adminComponents";
import { RowOption, Tag } from "../../../components";
import styles from "../viewPartner.module.css";

export const Offerings = ({ partner }) => {
    const offerItems = [
        {
            title: "Offerings",
            desc: partner?.offerings?.offerings,
        },
        {
            title: "Eligibility Criteria ",
            desc: partner?.offerings?.eligibilityCriteria,
        },
        {
            title: "Important Note",
            desc: partner?.offerings?.importantNote,
        },
        {
            title: "Process",
            desc: partner?.offerings?.process,
        },
    ];
    return (
        <div>
            <section className="row">
                <div className="col-lg-7">
                    <ul className={styles.offerCard}>
                        {offerItems?.length > 0 &&
                            offerItems?.map(({ title, desc }, i) => (
                                <ListItem
                                    title={title}
                                    desc={desc}
                                    key={`list-offer-${i}`}
                                />
                            ))}
                    </ul>
                </div>

                <div className="col-lg-5">
                    <section className={`mb-4 ${styles.offerCard}`}>
                        <div className="mb-5">
                            <h6 className="mb-4">Partner Category</h6>
                            <RowOption
                                options={[partner?.categories]}
                                selectAll={true}
                            />
                        </div>

                        <div>
                            <h6 className="mb-4">Industry</h6>
                            <section className="d-flex flex-wrap space-out">
                                <Tag name={partner?.industry} />
                                {/* <Tag name="Engineering" color="#40439A" />
                                <Tag name="Career" color="#E31937" />
                                <Tag name="Engineering" color="#40439A" />
                                <Tag name="Career" color="#E31937" /> */}
                            </section>
                        </div>
                    </section>

                    <section className={`${styles.offerCard}`}>
                        <div className="d-flex mb-45">
                            <article>
                                <h6 className="mb-3">Partnership Validity</h6>
                                <RowOption
                                    options={[
                                        partner?.offerings?.partnershipValidity,
                                    ]}
                                    selectAll={true}
                                />
                            </article>
                            <article className="ml-5">
                                <h6 className="mb-3">Turnaround Time</h6>
                                <RowOption
                                    options={[
                                        partner?.offerings?.turnAroundTime,
                                    ]}
                                    selectAll={true}
                                />
                            </article>
                        </div>

                        <div>
                            <h6 className="mb-3">Free Credit Value Allotted</h6>
                            <YesNo
                                text={
                                    partner?.offerings?.freeCreditValue
                                        ? "Yes"
                                        : "No"
                                }
                            />
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

const ListItem = ({ title = "", desc = "" }) => {
    const [more, setMore] = useState(false);
    const lessCount = 174;
    return (
        <li className={styles.offerItem}>
            <h6>{title}</h6>
            <p>
                {desc.substring(0, more ? desc?.length - 1 : lessCount)}
                {desc?.length > 0 && (
                    <span className="ml-2" onClick={() => setMore(!more)}>
                        {more ? "see less" : "see more"}
                    </span>
                )}
            </p>
        </li>
    );
};
