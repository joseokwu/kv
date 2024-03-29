import React, { useState } from "react";
import { RowOption, Button } from "../../../../components";
import { TextField } from "../../../../Startupcomponents";
import FormCard from "../../../partnerRegisteration/components/formCard/FormCard";
import { useHistory } from "react-router";
import { sectors } from "../../../../utils/utils";
import { Form, Select } from "antd";
import { useAuth, useActivity } from "../../../../hooks";
import toast from "react-hot-toast";

const { Option } = Select;

export const InvestorDetails2 = () => {
    const [buttonClicked, setButtonClicked] = useState("Save");

    const { push } = useHistory();
    const { updateInvestorProfileData, stateAuth, updateInvestorInfo } =
        useAuth();
    const {
        changePath,
        state: { path },
    } = useActivity();

    const next = () => {
        changePath(path + 1);
    };

    const onFinish = async (values) => {
        const uploaded = updateInvestorInfo();

        if (uploaded) {
            toast.success("Saved Successfully");
        } else {
            toast.error("Something went wrong");
        }

        if (uploaded && buttonClicked === "Next") {
            next();
            push("#approach");
        }
    };
    console.log(stateAuth);

    const onNumberOnlyChange = (e) => {
        const keyCode = e.keyCode || e.which;
        const keyValue = String.fromCharCode(keyCode);
        const isValid = new RegExp("[0-9]").test(keyValue);
        if (!isValid) {
            e.preventDefault();
            return;
        }
    };

    return (
        <div className="register-form-wrap">
            <h3 style={{ color: "#2e3192" }}>Investor Details</h3>
            <p>
                This will help us provide startups, personalised for your
                preferences
            </p>
            <Form
                onFinish={onFinish}
                initialValues={{ remember: true }}
                layout="vertical"
            >
                <FormCard>
                    <div className="row">
                        <section className="col-12 mb-4">
                            <p className="mb-3">Are you a Lead investor</p>
                            <RowOption
                                currentSelected={
                                    stateAuth?.investorData?.personalDetail
                                        ?.isLeadInvestor === true
                                        ? "yes"
                                        : "no"
                                }
                                getSelected={(value) => {
                                    updateInvestorProfileData(
                                        "personalDetail",
                                        {
                                            isLeadInvestor:
                                                value === "yes" ? true : false,
                                        }
                                    );
                                }}
                                options={["yes", "no"]}
                            />
                        </section>

                        <section className="col-12 mb-4">
                            <p className="mb-3">
                                {" "}
                                Have you angel invested before?
                            </p>
                            <RowOption
                                currentSelected={
                                    stateAuth?.investorData?.personalDetail
                                        ?.angelInvestedBefore === true
                                        ? "yes"
                                        : "no"
                                }
                                getSelected={(value) => {
                                    updateInvestorProfileData(
                                        "personalDetail",
                                        {
                                            angelInvestedBefore:
                                                value === "yes" ? true : false,
                                        }
                                    );
                                }}
                                options={["yes", "no"]}
                            />
                        </section>

                        {stateAuth?.investorData?.personalDetail
                            ?.angelInvestedBefore ? (
                            <section className="col-12 mb-4">
                                <p className="mb-3">
                                    Do you invest as an Angel or via Syndicate?
                                </p>
                                <RowOption
                                    currentSelected={
                                        stateAuth?.investorData?.personalDetail
                                            ?.angelInvestorOrSyndicateInvestor
                                    }
                                    getSelected={(value) => {
                                        updateInvestorProfileData(
                                            "personalDetail",
                                            {
                                                angelInvestorOrSyndicateInvestor:
                                                    value,
                                            }
                                        );
                                    }}
                                    options={["Solo", "Syndicate", "Both"]}
                                />
                            </section>
                        ) : (
                            <section className="col-12 mb-4">
                                <p className="mb-3">
                                    Do you have any experience in investing as
                                    an Angel investors
                                </p>
                                <RowOption
                                    currentSelected={
                                        stateAuth?.investorData?.personalDetail
                                            ?.angelInvestedExperience
                                    }
                                    getSelected={(value) => {
                                        updateInvestorProfileData(
                                            "personalDetail",
                                            {
                                                angelInvestedExperience: value,
                                            }
                                        );
                                    }}
                                    options={[
                                        "First time investor",
                                        "Experience angel investor",
                                    ]}
                                />
                            </section>
                        )}

                        <section className="col-12 mb-4">
                            <label className="mb-3">
                                Choose the sectors you have expertise in?
                            </label>
                            <Form.Item
                                style={{ background: "#f8f8f8" }}
                                name="sectorOfExpertise"
                                // label="Choose the sectors you have expertise in?"
                                initialValue={
                                    !stateAuth?.investorData?.personalDetail?.sectorOfExpertise?.includes(
                                        ""
                                    )
                                        ? stateAuth?.investorData
                                              ?.personalDetail
                                              ?.sectorOfExpertise
                                        : []
                                }
                            >
                                <Select
                                    placeholder="Choose sector"
                                    className="edit_input"
                                    mode="tags"
                                    onChange={(e) =>
                                        updateInvestorProfileData(
                                            "personalDetail",
                                            {
                                                sectorOfExpertise: e,
                                            }
                                        )
                                    }
                                >
                                    {sectors.map((item, i) => (
                                        <Option value={item} key={i}>
                                            {" "}
                                            {item}{" "}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </section>
                    </div>
                </FormCard>

                <FormCard>
                    <div className="row">
                        <section className="col-12 mb-4">
                            <p className="mb-3">
                                Would you like to mentor startups?
                            </p>
                            <RowOption
                                currentSelected={
                                    stateAuth?.investorData?.personalDetail
                                        ?.mentorsStartups === true
                                        ? "yes"
                                        : "no"
                                }
                                getSelected={(value) => {
                                    updateInvestorProfileData(
                                        "personalDetail",
                                        {
                                            mentorsStartups:
                                                value === "yes" ? true : false,
                                        }
                                    );
                                }}
                                options={["yes", "no"]}
                            />
                        </section>

                        <section className="col-12 mb-4">
                            <p className="mb-3">
                                Are you interested in online pitching sessions?
                            </p>
                            <RowOption
                                currentSelected={
                                    stateAuth?.investorData?.personalDetail
                                        ?.interestedInOnlinePitching === true
                                        ? "yes"
                                        : "no"
                                }
                                getSelected={(value) => {
                                    updateInvestorProfileData(
                                        "personalDetail",
                                        {
                                            interestedInOnlinePitching:
                                                value === "yes" ? true : false,
                                        }
                                    );
                                }}
                                options={["yes", "no"]}
                            />
                        </section>
                    </div>
                </FormCard>

                <FormCard>
                    <div className="row">
                        <section className="col-12 mb-4">
                            <p className="mb-3">
                                Where are you investing from?
                            </p>
                            <RowOption
                                currentSelected={
                                    stateAuth?.investorData?.personalDetail
                                        ?.investingFrom
                                }
                                getSelected={(value) => {
                                    updateInvestorProfileData(
                                        "personalDetail",
                                        {
                                            investingFrom: value,
                                        }
                                    );
                                }}
                                options={["Personal Fund", "Family Fund"]}
                            />
                        </section>

                        <section className="col-lg-6">
                            <TextField
                                label="Investing budget per year"
                                placeholder="$"
                                type={"text"}
                                name={"budgetPerYear"}
                                maxLength={10}
                                onKeyPress={onNumberOnlyChange}
                                value={
                                    stateAuth?.investorData?.personalDetail
                                        ?.budgetPerYear
                                }
                                onChange={(e) =>
                                    updateInvestorProfileData(
                                        "personalDetail",
                                        {
                                            budgetPerYear: e.target.value,
                                        }
                                    )
                                }
                                className="edit_input"
                            />
                        </section>
                        <section className="col-lg-6">
                            <TextField
                                label="Amount"
                                type={"text"}
                                placeholder="Enter amount"
                                className="edit_input"
                                name={"budgetAmount"}
                                maxLength={10}
                                onKeyPress={onNumberOnlyChange}
                                onChange={(e) =>
                                    updateInvestorProfileData(
                                        "personalDetail",
                                        {
                                            budgetAmount: e.target.value,
                                        }
                                    )
                                }
                                value={
                                    stateAuth?.investorData?.personalDetail
                                        ?.budgetAmount
                                }
                            />
                        </section>
                        <section className="col-12 mb-4 mt-2">
                            <input
                                type="checkbox"
                                onChange={() =>
                                    updateInvestorProfileData(
                                        "personalDetail",
                                        {
                                            yetToInvest:
                                                !stateAuth?.investorData
                                                    ?.personalDetail
                                                    ?.yetToInvest,
                                        }
                                    )
                                }
                                checked={
                                    stateAuth?.investorData?.personalDetail
                                        ?.yetToInvest
                                }
                                id="yet-to"
                            />
                            <label htmlFor="yet-to" className="ml-2">
                                Yet to invest
                            </label>
                        </section>

                        <section className="col-12 mb-4">
                            <TextField
                                label="Typical number of investment per year"
                                placeholder="Enter number of start-ups invested in"
                                className="edit_input"
                                type={"tel"}
                                maxLength={5}
                                onKeyPress={onNumberOnlyChange}
                                value={
                                    stateAuth?.investorData?.personalDetail
                                        ?.numberOfInvestmentPerYear
                                }
                                name={"numberOfInvestmentPerYear"}
                                onChange={(e) =>
                                    updateInvestorProfileData(
                                        "personalDetail",
                                        {
                                            numberOfInvestmentPerYear:
                                                e.target.value,
                                        }
                                    )
                                }
                            />
                        </section>

                        {/* <section className="col-lg-6">
            <TextField
              label="Typical investment amount per year"
              placeholder="$"
              className="edit_input"
              onChange={(e) => updateInvestorProfileData("personalDetail", {})}
            />
          </section>
          <section className="col-lg-6">
            <TextField
              label="Amount"
              placeholder="Select amount"
              className="edit_input"
            />
          </section> */}
                        <section className="col-12 mb-4 mt-2">
                            <input
                                type="checkbox"
                                onChange={() =>
                                    updateInvestorProfileData(
                                        "personalDetail",
                                        {
                                            isPublic:
                                                !stateAuth?.investorData
                                                    ?.personalDetail?.isPublic,
                                        }
                                    )
                                }
                                checked={
                                    stateAuth?.investorData?.personalDetail
                                        ?.isPublic
                                }
                                id="make-public"
                            />
                            <label htmlFor="make-public" className="ml-2">
                                Make it public
                            </label>
                        </section>
                    </div>
                </FormCard>

                <section className="d-flex align-items-center justify-content-between">
                    <button
                        style={{ color: "white", background: "#808080" }}
                        className="back-btn"
                        onClick={() => {
                            push("#investor");
                        }}
                    >
                        Go Back
                    </button>

                    <div
                        className="d-flex align-items-center"
                        style={{ columnGap: 9 }}
                    >
                        <Button
                            type="submit"
                            label="Save"
                            variant="secondary"
                            onClick={() => {
                                setButtonClicked("Save");
                            }}
                        />
                        <Button
                            type="submit"
                            label="Next"
                            onClick={() => {
                                setButtonClicked("Next");
                            }}
                        />
                    </div>
                </section>
            </Form>
        </div>
    );
};
