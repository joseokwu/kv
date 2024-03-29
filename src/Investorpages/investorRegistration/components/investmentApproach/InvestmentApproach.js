import React, { useState } from "react";
import { RowOption, Button } from "../../../../components";
import { TextField } from "../../../../Startupcomponents";
import FormCard from "../../../partnerRegisteration/components/formCard/FormCard";
import { useHistory } from "react-router";
import { sectors } from "../../../../utils/utils";
import { Form, Select } from "antd";
import { useAuth, useActivity } from "../../../../hooks";
import { TextareaCustom } from "../../../../components/textArea/cutstomTextarea";
import { CountryDropdown } from "react-country-region-selector";
import toast from "react-hot-toast";

const { Option } = Select;

export const InvestmentApproach = () => {
    const { push } = useHistory();

    const { updateInvestorProfileData, stateAuth, updateInvestorInfo } =
        useAuth();
    const [buttonClicked, setButtonClicked] = useState("Save");

    const {
        changePath,
        state: { path },
    } = useActivity();

    const back = () => {
        changePath(path - 1);
    };
    const next = () => {
        changePath(path + 1);
    };

    const investmentStages = [
        "Pre-Seed",
        "Seed",
        "Angel",
        "Accelerator",
        "MVP",
        "Pre Series A",
        "Series A",
    ];

    const expBetter = [
        "You have invested in startups before",
        "You come from an entrepreneurial family or have been a founder/co-founder of a business venture family",
        "You have at least 10 years of work experience",
        "I have not made any investments before, but I'm excited to get started",
        "I have invested in one or two businesses and would like to find more opportunities",
        "I am an angel investor / high net worth individual making regular investments",
        "I am an institutional investor, working in Venture Capital / Private Equity",
        "None of the above",
    ];

    const onFinish = async (values) => {
        const uploaded = updateInvestorInfo();

        if (uploaded) {
            toast.success("Saved Successfully");
        } else {
            toast.error("Something went wrong");
        }

        if (uploaded && buttonClicked === "Next") {
            next();
            push("#portfolio");
        }
    };

    const region = [
        "Africa - the whole continent",
        "North Africa",
        "East Africa",
        "West Africa",
        "Central Africa",
        "Southern Africa",
    ];

    const funding = [
        "Less than $1,000",
        "$1,000 - $5,000",
        "$5,000 - $10,000",
        "$10,000 - $25,000",
        "$25,000 - $50,000",
        "$50,000 - $100,000",
        "More than $100,000",
        "Less than $10,000",
        "$10,000 - $40,000",
        "$40,000 - $100,000",
        "$100,000 - $300,000",
        "More than $300,000",
    ];

    const letterOnly = (e) => {
        const charCode = e.charCode || e.which;
        const keyValue = String.fromCharCode(charCode);
        const isValid = new RegExp(/^[a-zA-Z,.\s]*$/).test(keyValue);
        if (!isValid) {
            e.preventDefault();
            return;
        }
    };

    return (
        <div className="register-form-wrap">
            <h3 style={{ color: "#2e3192" }}>Investment Approach</h3>
            <p>
                This helps us provide startups, personalised for your
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
                            <label className="mb-3">
                                Are you interested in any sectors or
                                technologies in particular?
                            </label>
                            <Form.Item
                                className=""
                                name="techSector"
                                // label="Choose the sectors you have expertise in?"
                                initialValue={
                                    stateAuth?.investorData?.investorApproach
                                        ?.techSector
                                }
                                rules={[{ message: "Please select a sector" }]}
                            >
                                <Select
                                    placeholder="Choose sectors you are interested in"
                                    className="edit_input"
                                    style={{ backgroundColor: "#f8f8f8" }}
                                    onChange={(e) =>
                                        updateInvestorProfileData(
                                            "investorApproach",
                                            {
                                                techSector: e,
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

                        <section className="col-12 mb-4">
                            <Form.Item
                                style={{ background: "#f8f8f8" }}
                                name="investmentExperience"
                                label="Help us understand your experience better:"
                                initialValue={
                                    stateAuth?.investorData?.investorApproach
                                        ?.investmentExperience
                                }
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please select your experience",
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Choose option"
                                    // label="Help us understand your experience better:"
                                    className="edit_input"
                                    style={{
                                        width: 200,
                                        backgroundColor: "#fafafc",
                                    }}
                                    onChange={(e) =>
                                        updateInvestorProfileData(
                                            "investorApproach",
                                            {
                                                investmentExperience: e,
                                            }
                                        )
                                    }
                                >
                                    {expBetter.map((item, i) => (
                                        <Option value={item} key={i}>
                                            {" "}
                                            {item}{" "}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </section>

                        <section className="col-12 mb-4">
                            <label className="mb-3">
                                I Prefer to invest in
                            </label>
                            <RowOption
                                currentSelected={
                                    stateAuth?.investorData?.investorApproach
                                        ?.investmentPreference
                                }
                                getSelected={(value) => {
                                    updateInvestorProfileData(
                                        "investorApproach",
                                        {
                                            investmentPreference: value,
                                        }
                                    );
                                }}
                                options={["B2B", "B2C", "Marketplace"]}
                            />
                        </section>

                        <section className="col-12 mb-4">
                            <label className="mb-3">Investment Thesis</label>
                            <TextareaCustom
                                name={"investmentThesis"}
                                onKeyPress={letterOnly}
                                value={
                                    stateAuth?.investorData?.investorApproach
                                        ?.investmentThesis
                                }
                                onChange={(e) =>
                                    updateInvestorProfileData(
                                        "investorApproach",
                                        {
                                            investmentThesis: e.target.value,
                                        }
                                    )
                                }
                                // label="Investment Thesis"
                                placeholder="e.g i want to invest in start-ups which have global potential and have validated traction"
                            />
                        </section>
                    </div>
                </FormCard>

                <FormCard>
                    <div className="row">
                        <section className="col-12 mb-4">
                            <label className="mb-3">
                                What is your Preferred Stage
                            </label>
                            <RowOption
                                currentSelected={
                                    stateAuth?.investorData?.investorApproach
                                        ?.stage
                                }
                                getSelected={(value) => {
                                    updateInvestorProfileData(
                                        "investorApproach",
                                        {
                                            stage: value,
                                        }
                                    );
                                }}
                                options={investmentStages}
                            />
                        </section>

                        <section className="col-12 mb-4">
                            <label className="mb-3">
                                What regions are you interested in investing in?
                            </label>
                            <CountryDropdown
                                id={"region"}
                                name={"region"}
                                className="form-control ps-3 py-1 "
                                value={
                                    stateAuth?.investorData?.investorApproach
                                        ?.region
                                }
                                onChange={(value) =>
                                    updateInvestorProfileData(
                                        "investorApproach",
                                        {
                                            region: value,
                                        }
                                    )
                                }
                            />
                        </section>

                        <section className="col-12 mb-4">
                            <label className="mb-3">
                                I prefer start-ups founders with the following
                                backgrounds
                            </label>
                            <RowOption
                                currentSelected={
                                    stateAuth?.investorData?.investorApproach
                                        ?.preferredStage
                                }
                                getSelected={(value) => {
                                    updateInvestorProfileData(
                                        "investorApproach",
                                        {
                                            preferredStage: value,
                                        }
                                    );
                                }}
                                options={[
                                    "Top College Graduates",
                                    "Prior Start-up experience",
                                    "Doesn't matter",
                                ]}
                            />
                        </section>

                        <section className="col-12 mb-4">
                            <Form.Item
                                label="On average, how much would you like to invest in
                            each business you choose to fund (in USD)?"
                                style={{ background: "#f8f8f8" }}
                                name="averageInvestment"
                                placeholder="Choose the sectors you have expertise in?"
                                initialValue={
                                    stateAuth?.investorData?.investorApproach
                                        ?.averageInvestment
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select a sector",
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Choose option"
                                    // label="On average, how much would you like to invest in each business you choose to fund (in USD)?"
                                    className="edit_input"
                                    onChange={(e) =>
                                        updateInvestorProfileData(
                                            "investorApproach",
                                            {
                                                averageInvestment: e,
                                            }
                                        )
                                    }
                                >
                                    {funding.map((item, i) => (
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

                <section className="d-flex align-items-center justify-content-between">
                    <button
                        style={{ color: "white", background: "#808080" }}
                        className="back-btn"
                        onClick={() => {
                            back();
                            push("#investor2");
                        }}
                    >
                        Go Back
                    </button>

                    <div
                        className="d-flex align-items-center"
                        style={{ columnGap: 9 }}
                    >
                        <Button
                            label="Save"
                            variant="secondary"
                            onClick={() => {
                                setButtonClicked("Save");
                            }}
                        />
                        <Button
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
