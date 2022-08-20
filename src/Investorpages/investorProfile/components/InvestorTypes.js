import React from "react";
import edit from "../../../assets/icons/edit.svg";
import { Button, Modal, RowOption } from "../../../components";
import { useAuth } from "../../../hooks";
import { Form, Select } from "antd";

export const InvestorTypes = ({ data }) => {
    const renderAngelInvestorOrSyndicateInvestor = () => {
        switch (data?.personalDetail?.angelInvestorOrSyndicateInvestor) {
            case "solo":
                return "Solo Investor";
                break;
            case "Syndicate":
                return "Syndicate Investor";
                break;

            case "Both":
                return "Solo / Syndicate Investor";
                break;

            default:
                return "Solo Investor";
                break;
        }
    };

    return (
        <section className="profile-offering">
            <span className="text-right d-block">
                <img
                    src={edit}
                    alt="edit"
                    data-toggle="modal"
                    data-target="#editInfo"
                    role="button"
                />
                <Modal title="Edit Investor Information" id="editInfo">
                    <EditInfo />
                </Modal>
            </span>

            <article
                className="d-flex my-4 justify-content-between"
                style={{ columnGap: 16 }}
            >
                <div>
                    <p className="partner-cat-txt mb-3">Angel Network</p>
                    <section className="free-credit-answer d-flex align-items-center">
                        <span></span>
                        <p>
                            {data?.personalDetail?.angelInvestedBefore === true
                                ? "Yes"
                                : "No"}
                        </p>
                    </section>
                </div>
                <span className="cat-tag" style={{ width: "fit-content" }}>
                    {renderAngelInvestorOrSyndicateInvestor()}
                </span>
            </article>

            <div className="mb-4">
                <p className="partner-cat-txt mb-3">Lead investor</p>
                <section className="free-credit-answer d-flex align-items-center">
                    <span></span>
                    <p>
                        {data?.personalDetail?.isLeadInvestor === true
                            ? "Yes"
                            : "No"}
                    </p>
                </section>
            </div>

            <div>
                <p className="partner-cat-txt mb-3">Mentor</p>
                <section className="free-credit-answer d-flex align-items-center">
                    <span></span>
                    <p>
                        {data?.personalDetail?.mentorsStartups === true
                            ? "Yes"
                            : "No"}
                    </p>
                </section>
            </div>
        </section>
    );
};

const EditInfo = () => {
    const { updateInvestorProfileData, stateAuth, updateInvestorInfo } =
        useAuth();

    const onFinish = async () => {
        updateInvestorInfo();
    };

    return (
        <div className="px-4">
            <Form onFinish={onFinish} initialValues={{ remember: true }}>
                <section className="mb-4">
                    <label className="mb-3">Are you a Lead investor</label>
                    <RowOption
                        currentSelected={
                            stateAuth?.investorData?.personalDetail
                                ?.isLeadInvestor === true
                                ? "yes"
                                : "no"
                        }
                        getSelected={(value) => {
                            updateInvestorProfileData("personalDetail", {
                                isLeadInvestor: value === "yes" ? true : false,
                            });
                        }}
                        options={["yes", "no"]}
                    />
                </section>

                <section className="mb-4">
                    <label className="mb-3">
                        {" "}
                        Have you angel invested before?
                    </label>
                    <RowOption
                        currentSelected={
                            stateAuth?.investorData?.personalDetail
                                ?.angelInvestedBefore === true
                                ? "yes"
                                : "no"
                        }
                        getSelected={(value) => {
                            updateInvestorProfileData("personalDetail", {
                                angelInvestedBefore:
                                    value === "yes" ? true : false,
                            });
                        }}
                        options={["yes", "no"]}
                    />
                </section>

                <section className="mb-4">
                    <label className="mb-3">
                        {" "}
                        Have you angel invested before?
                    </label>
                    <RowOption
                        currentSelected={
                            stateAuth?.investorData?.personalDetail
                                ?.angelInvestorOrSyndicateInvestor
                        }
                        getSelected={(value) => {
                            updateInvestorProfileData("personalDetail", {
                                angelInvestorOrSyndicateInvestor: value,
                            });
                        }}
                        options={["Solo", "Syndicate", "Both"]}
                    />
                </section>

                <section className="mb-4">
                    <label className="mb-3">
                        {" "}
                        Would you like to mentor startups?
                    </label>
                    {/* <RowOption options={['yes', 'no']} /> */}
                    <RowOption
                        currentSelected={
                            stateAuth?.investorData?.personalDetail
                                ?.mentorsStartups === true
                                ? "yes"
                                : "no"
                        }
                        getSelected={(value) => {
                            updateInvestorProfileData("personalDetail", {
                                mentorsStartups: value === "yes" ? true : false,
                            });
                        }}
                        options={["yes", "no"]}
                    />
                </section>

                <section className="text-right">
                    <Button label="Save" type={"submit"} />
                </section>
            </Form>
        </div>
    );
};
