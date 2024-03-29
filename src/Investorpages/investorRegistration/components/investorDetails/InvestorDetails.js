import React, { useState } from "react";
import { RowOption, Button, MultipleRowOption } from "../../../../components";
import { TextField } from "../../../../Startupcomponents";
import FormCard from "../../../partnerRegisteration/components/formCard/FormCard";
import { useHistory } from "react-router";
import { Form, Select } from "antd";
import { useAuth, useActivity } from "../../../../hooks";
import toast from "react-hot-toast";

const { Option } = Select;

export const InvestorDetails = () => {
    const investorTypes = [
        "Angel Investor",
        "Corporation",
        "VC Fund",
        "PE Fund",
        "CXO",
        "Business Owner",
        "VC / PE Professional",
        "Family Office",
        "Startup Founder",
        "Angel Network",
        "Accelerator / Incubator",
    ];

    const accountType = ["Current Account", "Savings Account"];

    const [taxOutsideEligible, setTaxOutsideEligible] = useState("");
    const [selectedInvestorType, setSelectedInvestorType] = useState("");
    const [buttonClicked, setButtonClicked] = useState("Save");

    const taxOutside = (input) => {
        switch (input) {
            case "yes":
                return true;
            case "no":
                return false;
            default:
                return "";
        }
    };

    const { updateInvestorProfileData, stateAuth, updateInvestorInfo } =
        useAuth();
    const {
        changePath,
        state: { path },
    } = useActivity();
    const { push } = useHistory();

    const back = () => {
        changePath(path - 1);
    };
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
            // next();
            push("#investor2");
        }
    };

    const letterOnly = (e) => {
        const charCode = e.charCode || e.which;
        const keyValue = String.fromCharCode(charCode);
        const isValid = new RegExp(/^[a-zA-Z,.\s]*$/).test(keyValue);
        if (!isValid) {
            e.preventDefault();
            return;
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
            <p>Create a profile for your investment</p>
            <Form
                onFinish={onFinish}
                initialValues={{ remember: true }}
                layout="vertical"
            >
                <FormCard>
                    <div className="row">
                        <section className="col-12 mb-4">
                            <TextField
                                label="Nationality"
                                required={true}
                                onKeyPress={letterOnly}
                                value={
                                    stateAuth?.investorData?.personalDetail
                                        ?.nationality
                                }
                                placeholder="Enter your nationality"
                                className="edit_input"
                                name="nationality"
                                onChange={(e) =>
                                    updateInvestorProfileData(
                                        "personalDetail",
                                        {
                                            nationality: e.target.value,
                                        }
                                    )
                                }
                            />
                        </section>
                        <section className="col-12 mb-4">
                            <p
                                className="mb-3"
                                style={{
                                    color: "black",
                                    fontSize: 16,
                                    lineHeight: "13px",
                                }}
                            >
                                Are you a Tax resident of any other country
                                other than Nigeria
                            </p>
                            <RowOption
                                options={["yes", "no"]}
                                currentSelected={
                                    stateAuth?.investorData?.personalDetail
                                        ?.taxResidentOutsideNigeria === true
                                        ? "yes"
                                        : "no"
                                }
                                getSelected={(value) => {
                                    updateInvestorProfileData(
                                        "personalDetail",
                                        {
                                            taxResidentOutsideNigeria:
                                                value === "yes" ? true : false,
                                        }
                                    );
                                }}
                            />
                        </section>

                        <section className="col-12 mb-4">
                            <TextField
                                label="Taxation Number"
                                required={true}
                                value={
                                    stateAuth?.investorData?.personalDetail
                                        ?.taxNumber
                                }
                                placeholder="Enter Tax Number"
                                className="edit_input"
                                name="taxNumber"
                                type="text"
                                onChange={(e) =>
                                    updateInvestorProfileData(
                                        "personalDetail",
                                        {
                                            taxNumber: e.target.value,
                                        }
                                    )
                                }
                            />
                        </section>

                        <section className="col-12 mb-4">
                            <Form.Item
                                style={{ background: "#f8f8f8" }}
                                name="individualHaving"
                                label="I am an individual having"
                                initialValue={
                                    stateAuth?.investorData?.personalDetail
                                        ?.individualHaving
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select who you are",
                                    },
                                ]}
                            >
                                <Select
                                    id="individualHaving"
                                    placeholder="Choose option"
                                    // label="I am an individual having"
                                    className="edit_input "
                                    onChange={(value) => {
                                        updateInvestorProfileData(
                                            "personalDetail",
                                            {
                                                individualHaving: value,
                                            }
                                        );
                                    }}
                                >
                                    {investorTypes.map((item, i) => (
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

                <FormCard title="Bank Details">
                    <div className="row">
                        <section className="col-lg-6 mb-4">
                            <TextField
                                placeholder="Enter bank"
                                label="Bank Name"
                                onKeyPress={letterOnly}
                                className="edit_input"
                                value={
                                    stateAuth?.investorData?.personalDetail
                                        ?.bankName
                                }
                                name="bankName"
                                onChange={(e) =>
                                    updateInvestorProfileData(
                                        "personalDetail",
                                        {
                                            bankName: e.target.value,
                                        }
                                    )
                                }
                                required={true}
                            />
                        </section>

                        <section className="col-lg-6 mb-4">
                            <TextField
                                placeholder="Enter bank branch"
                                label="Bank Branch"
                                onKeyPress={letterOnly}
                                className="edit_input"
                                value={
                                    stateAuth?.investorData?.personalDetail
                                        ?.bankBranch
                                }
                                name="bankBranch"
                                onChange={(e) =>
                                    updateInvestorProfileData(
                                        "personalDetail",
                                        {
                                            bankBranch: e.target.value,
                                        }
                                    )
                                }
                            />
                        </section>

                        <section className="col-lg-6 mb-4">
                            <TextField
                                label="Account Number"
                                required={true}
                                placeholder="Enter your account"
                                className="edit_input"
                                value={
                                    stateAuth?.investorData?.personalDetail
                                        ?.bankAccountNumber
                                }
                                onKeyPress={onNumberOnlyChange}
                                name="bankAccountNumber"
                                type={"text"}
                                onChange={(e) =>
                                    updateInvestorProfileData(
                                        "personalDetail",
                                        {
                                            bankAccountNumber: e.target.value,
                                        }
                                    )
                                }
                            />
                        </section>

                        <section className="col-lg-6 mb-4">
                            {/* <TextField
              label="Account Type"
              required={true}
              placeholder="Enter your account type"
              className="edit_input"
              value={stateAuth?.investorData?.personalDetail?.bankAccountType}
              name="bankAccountType"
              onChange={(e) => updateInvestorProfileData("personalDetail", { bankAccountType: e.target.value })}
            /> */}
                            <label className="mb-2">
                                <span style={{ color: "red" }}>*</span> Account
                                Type
                            </label>
                            <Form.Item
                                style={{ background: "#f8f8f8" }}
                                // label="Account Type"
                                name="bankAccountType"
                                initialValue={
                                    stateAuth?.investorData?.personalDetail
                                        ?.bankAccountType
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select a bank type",
                                    },
                                ]}
                            >
                                <Select
                                    id="bankAccountType"
                                    placeholder="Enter your account type"
                                    className="edit_input"
                                    onChange={(value) =>
                                        updateInvestorProfileData(
                                            "personalDetail",
                                            {
                                                bankAccountType: value,
                                            }
                                        )
                                    }
                                >
                                    {accountType.map((item, i) => (
                                        <Option value={item} key={i}>
                                            {item}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </section>
                    </div>
                </FormCard>

                <FormCard>
                    <div className="row">
                        <p
                            className="mb-3"
                            style={{
                                color: "black",
                                fontSize: 16,
                                lineHeight: "13px",
                            }}
                        >
                            <span style={{ color: "red" }}>*</span> Investor
                            Type
                        </p>
                        {/* <RowOption
              currentSelected={
                stateAuth?.investorData?.personalDetail?.investorType
              }
              options={investorTypes}
              getSelected={(e) => {
                updateInvestorProfileData('personalDetail', { investorType: e })
              }}
            /> */}
                        <MultipleRowOption
                            currentSelected={
                                stateAuth?.investorData?.personalDetail
                                    ?.investorType
                            }
                            options={investorTypes}
                            getSelected={(e) => {
                                updateInvestorProfileData("personalDetail", {
                                    investorType: [
                                        ...stateAuth?.investorData
                                            ?.personalDetail?.investorType,
                                        e,
                                    ],
                                });
                            }}
                            unSelect={(e) => {
                                updateInvestorProfileData("personalDetail", {
                                    investorType:
                                        stateAuth?.investorData?.personalDetail?.investorType?.filter(
                                            (item) => item !== e
                                        ),
                                });
                            }}
                        />
                    </div>
                </FormCard>

                <section className="d-flex align-items-center justify-content-between">
                    <button
                        style={{ color: "white", background: "#808080" }}
                        className="back-btn"
                        type="button"
                        onClick={() => {
                            back();
                            push("#details");
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
                            type="submit"
                            onClick={() => {
                                setButtonClicked("Save");
                            }}
                        />
                        <Button
                            label="Next"
                            type="submit"
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
