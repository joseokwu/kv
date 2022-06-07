import React, { useEffect } from "react";
import styles from "../viewInvestor.module.css";
import apple from "../../../assets/images/apple.svg";
import { Badge, Tag, ReuseableDropdownMenu } from "../../../components";
import { manageCommitment } from "../../../services";

export const PortfolioCard = ({ data = {}, refetch, setRefetch, ...rest }) => {
    console.log(data);

    return (
        <div className={styles.portfolioCard} {...rest}>
            <section className="d-flex justify-content-between mb-2">
                <img
                    src={data?.startupCommitted?.startUpProfile?.logo}
                    alt="startup logo"
                />
                {/* <p>Transaction type: Round</p> */}
                {/* <Badge
                    name={data?.status ? "Active" : "Inactive"}
                    color={
                        statusList[
                            (data?.status ? "Active" : "Inactive").toLowerCase()
                        ]
                    }
                /> */}
                <ReuseableDropdownMenu
                    value={data?.status}
                    list={["Active", "Inactive"]}
                    valueList={[true, false]}
                    onChange={(val) => {
                        manageCommitment({
                            _id: data?._id,
                            payload: {
                                status: val,
                                comments: data?.comments,
                            },
                        });
                        setRefetch(!refetch);
                        console.log(refetch);
                    }}
                />
            </section>

            <section>
                <h4>{data?.startupCommitted?.startUpProfile?.startupName}</h4>
                <div className="d-flex flex-wrap space-out mb-2">
                    <Tag
                        name={
                            data?.startupCommitted?.startUpProfile
                                ?.businessSector
                        }
                    />
                </div>

                <p className={`border-bottom ${styles.portDesc}`}>
                    {data?.startupCommitted?.startUpProfile?.elevatorPitch}
                </p>
            </section>

            <section className="row">
                <div className="col-md-6">
                    <p>
                        {data?.startupCommitted?.startUpProfile?.startupStage}
                    </p>
                    <p>
                        Funding amount: $
                        {
                            data?.startupCommitted?.fundRaising?.fundingAsk
                                ?.fundraisingAmount
                        }
                    </p>
                </div>
                <div className="col-md-6 text-right">
                    <p>
                        Last funding date:{" "}
                        {new Date(
                            data?.startupCommitted?.fundRaising?.previousRound?.dateOfFunding
                        ).toLocaleDateString("en-gb")}
                    </p>
                    <p>Invest. requirement: $21</p>
                </div>
            </section>
        </div>
    );
};
