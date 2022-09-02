import React, { useState } from "react";
import { css } from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { BodyWrapper, BntWrap, Terms } from "./fundAsk.styled";
import {
    CustomButton,
    OutlineButton,
} from "../../../../../../Startupcomponents/button/button.styled";
import { LargeModal } from "../../../../../../Startupcomponents";
import { CoFounder } from "../../../teams/coFounder";
import { Form, Select } from "antd";
import { useAuth } from "../../../../../../hooks/useAuth";
import CurrencyInput from "react-currency-input-field";
import { TextField } from "./../../../../../../mentorComponents/textField/TextField";
import { TextareaCustom } from "./../../../../../../components/textArea/cutstomTextarea";

const { Option } = Select;

export const FundAsk = ({ setFundraising, back }) => {
    const history = useHistory();
    const { stateAuth, updateProfile, updateStartupInfo } = useAuth();

    const {
        location: { hash },
    } = history;

    const optionsNumb = [
        { value: "Seed round", label: "Seed round" },
        { value: "Angel round", label: "Angel round" },
        { value: "Series A", label: "Series A" },
        { value: "Series B", label: "Series B" },
        { value: "Series C", label: "Series C" },
    ];
    const optionsInstrument = [
        { value: "Debt", label: "Debt" },
        { value: "Equity", label: "Equity" },
        { value: "Other", label: "Other" },
    ];
    const fundNum = [1, 2, 3, 4, 5];

    const [showModal, setShowModal] = useState(false);
    const [hasPreviousFundraising, setHasPreviousFundraising] = useState(
        stateAuth?.profileData?.startupRes?.fundraising
            ?.hasPreviousFundraising ?? false
    );
    // const [hasLeadInvestor, setHasLeadInvestor] = useState(
    //   stateAuth?.user?.fundraising?.hasPreviousFundraising ?? 'no'
    // );

    // function btn(e) {
    //   e.preventDefault();
    //   setHasPreviousFundraising(e.target.dataset.id);
    // }

    const onFinish = (values) => {
        console.log(values);
        updateStartupInfo();
        history.push("#Fund Utilization");
    };

    return (
        <>
            {showModal ? (
                // <LargeModal id="cofounder" title="" closeModal={setShowModal}>
                //   <CoFounder />
                // </LargeModal>
                <LargeModal id="cofounder" title="" closeModal={setShowModal}>
                    <CoFounder />
                </LargeModal>
            ) : (
                <span></span>
            )}
            <Form
                name="Fund Ask"
                initialValues={{
                    remember: true,
                }}
                layout="vertical"
                onFinish={onFinish}
                className="px-3"
            >
                <BodyWrapper className="">
                    <div className="div">
                        <span className="mini-title">Fund Ask</span>
                        <p className="pt-3">
                            A brief description of funding ask
                        </p>
                        <hr />
                        <div className="row mt-4">
                            <div className="form-group col-12">
                                <p>
                                    Have you fundraised before?
                                    <span style={{ color: "red" }}>*</span>
                                </p>
                                <BntWrap>
                                    <button
                                        className={`me-3 ${
                                            stateAuth?.profileData?.startupRes
                                                ?.fundRaising?.fundingAsk
                                                ?.hasPreviousFundraising
                                                ? "active"
                                                : ""
                                        }`}
                                        type="button"
                                        onClick={() => {
                                            updateProfile("fundRaising", {
                                                fundingAsk: {
                                                    ...stateAuth?.profileData
                                                        ?.startupRes
                                                        ?.fundRaising
                                                        ?.fundingAsk,
                                                    hasPreviousFundraising: true,
                                                },
                                            });
                                        }}
                                    >
                                        Yes
                                    </button>
                                    <button
                                        className={
                                            !stateAuth?.profileData?.startupRes
                                                ?.fundRaising?.fundingAsk
                                                ?.hasPreviousFundraising
                                                ? "active"
                                                : ""
                                        }
                                        type="button"
                                        onClick={() => {
                                            updateProfile("fundRaising", {
                                                fundingAsk: {
                                                    ...stateAuth?.profileData
                                                        ?.startupRes
                                                        ?.fundRaising
                                                        ?.fundingAsk,
                                                    hasPreviousFundraising: false,
                                                },
                                            });
                                        }}
                                    >
                                        No
                                    </button>
                                </BntWrap>
                            </div>
                            <div className="form-group my-2 col-12">
                                <Form.Item
                                    name="instrumentForRound"
                                    label={
                                        stateAuth?.profileData?.startupRes
                                            ?.fundRaising?.fundingAsk
                                            ?.hasPreviousFundraising
                                            ? "What was the instrument for your previous round"
                                            : "Which instrument would you prefer to use for your current round?"
                                    }
                                    initialValue={
                                        stateAuth?.profileData?.startupRes
                                            ?.fundRaising?.fundingAsk
                                            ?.instrumentForRound
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please select a Number of Rounds",
                                        },
                                    ]}
                                >
                                    <Select
                                        id="instrumentForRound"
                                        style={{
                                            width: 200,
                                            marginLeft: "0.5rem",
                                        }}
                                        placeholder="--Select--"
                                        onChange={(e) => {
                                            updateProfile("fundRaising", {
                                                fundingAsk: {
                                                    ...stateAuth?.profileData
                                                        ?.startupRes
                                                        ?.fundRaising
                                                        ?.fundingAsk,
                                                    instrumentForRound: e,
                                                },
                                            });
                                        }}
                                    >
                                        {optionsInstrument.map(
                                            (item, index) => {
                                                return (
                                                    <Option
                                                        value={item.value}
                                                        key={index}
                                                    >
                                                        {item.label}
                                                    </Option>
                                                );
                                            }
                                        )}
                                    </Select>
                                </Form.Item>
                                {/* <TextField
                                    id="instrumentForRound"
                                    name="instrumentForRound"
                                    errName="instrument for round"
                                    // options={optionsNumb}
                                    className="cust extra"
                                    label={
                                        stateAuth?.profileData?.startupRes
                                            ?.fundRaising?.fundingAsk
                                            ?.hasPreviousFundraising
                                            ? "What was the instrument for your previous round"
                                            : "Which instrument would you prefer to use for your current round?"
                                    }
                                    value={
                                        stateAuth?.profileData?.startupRes
                                            ?.fundRaising?.fundingAsk
                                            ?.instrumentForRound
                                    }
                                    onChange={(e) => {
                                        updateProfile("fundRaising", {
                                            fundingAsk: {
                                                ...stateAuth?.profileData
                                                    ?.startupRes?.fundRaising
                                                    ?.fundingAsk,
                                                instrumentForRound:
                                                    e.target.value,
                                            },
                                        });
                                    }}
                                    css={css`
                                        input {
                                            margin-left: 0.5rem;
                                        }
                                    `}
                                /> */}
                            </div>
                            {stateAuth?.profileData?.startupRes?.fundRaising
                                ?.fundingAsk?.instrumentForRound ===
                                "Other" && (
                                <div className="form-group my-2 col-12">
                                    <TextField
                                        label="Dilution (%)"
                                        name={"dilution"}
                                        value={
                                            stateAuth?.profileData?.startupRes
                                                ?.fundRaising?.fundingAsk
                                                ?.instrumentForRound
                                        }
                                        onChange={(e) => {
                                            updateProfile("fundRaising", {
                                                fundingAsk: {
                                                    ...stateAuth?.profileData
                                                        ?.startupRes
                                                        ?.fundRaising
                                                        ?.fundingAsk,
                                                    instrumentForRound:
                                                        e.target.value,
                                                },
                                            });
                                        }}
                                        required={true}
                                        placeholder="Enter your dilution"
                                    />
                                </div>
                            )}
                            <div className="form-group my-2 col-12">
                                <Form.Item
                                    name="numberOfRounds"
                                    label="Select your round"
                                    initialValue={
                                        stateAuth?.profileData?.startupRes
                                            ?.fundRaising?.fundingAsk
                                            ?.numberOfRounds
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please select a Number of Rounds",
                                        },
                                    ]}
                                >
                                    <Select
                                        id="numberOfRounds"
                                        style={{
                                            width: 200,
                                            marginLeft: "0.5rem",
                                        }}
                                        placeholder="--Select--"
                                        onChange={(e) => {
                                            updateProfile("fundRaising", {
                                                fundingAsk: {
                                                    ...stateAuth?.profileData
                                                        ?.startupRes
                                                        ?.fundRaising
                                                        ?.fundingAsk,
                                                    numberOfRounds: e,
                                                },
                                            });
                                        }}
                                    >
                                        {optionsNumb.map((item, index) => {
                                            return (
                                                <Option
                                                    value={item.value}
                                                    key={index}
                                                >
                                                    {item.label}
                                                </Option>
                                            );
                                        })}
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className="form-group my-2 col-12">
                                <Form.Item
                                    // name="fundraisingAmount"
                                    label="How much investment is your company looking
                                    to raise?"
                                    initialValue={
                                        stateAuth?.profileData?.startupRes
                                            ?.fundRaising?.fundingAsk
                                            ?.fundraisingAmount
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter a fundraising amount",
                                        },
                                    ]}
                                >
                                    <CurrencyInput
                                        id="fundraisingAmount"
                                        name="fundraisingAmount"
                                        value={
                                            stateAuth?.profileData?.startupRes
                                                ?.fundRaising?.fundingAsk
                                                ?.fundraisingAmount
                                        }
                                        intlConfig={{
                                            locale: "en-US",
                                            currency: "USD",
                                        }}
                                        style={{ marginLeft: "8px" }}
                                        className="form-control ps-3"
                                        placeholder="Enter amount"
                                        onValueChange={(value) => {
                                            if (!Number.isNaN(Number(value))) {
                                                updateProfile("fundRaising", {
                                                    fundingAsk: {
                                                        ...stateAuth
                                                            ?.profileData
                                                            ?.startupRes
                                                            ?.fundRaising
                                                            ?.fundingAsk,
                                                        fundraisingAmount:
                                                            Number(value),
                                                    },
                                                });
                                                console.log(value);
                                            }
                                        }}
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-group my-2 col-12">
                                <TextField
                                    label="Dilution (%)"
                                    name={"dilution"}
                                    value={
                                        stateAuth?.profileData?.startupRes
                                            ?.fundRaising?.fundingAsk?.dilution
                                    }
                                    onChange={(e) => {
                                        updateProfile("fundRaising", {
                                            fundingAsk: {
                                                ...stateAuth?.profileData
                                                    ?.startupRes?.fundRaising
                                                    ?.fundingAsk,
                                                dilution: e.target.value,
                                            },
                                        });
                                    }}
                                    required={true}
                                    placeholder="Enter your dilution"
                                />
                            </div>

                            <div className="form-group my-2 col-12">
                                <Form.Item
                                    // name="preMoneyValuation"
                                    label="What is your pre-money valuation?"
                                    initialValue={
                                        stateAuth?.profileData?.startupRes
                                            ?.fundRaising?.fundingAsk
                                            ?.preMoneyValuation
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter a pre-money valuation",
                                        },
                                    ]}
                                >
                                    <CurrencyInput
                                        id="preMoneyValuation"
                                        name="preMoneyValuation"
                                        type="text"
                                        value={
                                            stateAuth?.profileData?.startupRes
                                                ?.fundRaising?.fundingAsk
                                                ?.preMoneyValuation
                                        }
                                        className="form-control ps-3"
                                        placeholder="Pre money = Post money - investment amount."
                                        intlConfig={{
                                            locale: "en-US",
                                            currency: "USD",
                                        }}
                                        onValueChange={(value) => {
                                            updateProfile("fundRaising", {
                                                fundingAsk: {
                                                    ...stateAuth?.profileData
                                                        ?.startupRes
                                                        ?.fundRaising
                                                        ?.fundingAsk,
                                                    preMoneyValuation: value,
                                                },
                                            });
                                        }}
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-group my-2 col-12">
                                <Form.Item
                                    // name="postMoneyValuation"
                                    label="What is your post-money valuation?"
                                    initialValue={
                                        stateAuth?.profileData?.startupRes
                                            ?.fundRaising?.fundingAsk
                                            ?.postMoneyValuation
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter a post-money valuation",
                                        },
                                    ]}
                                >
                                    <CurrencyInput
                                        id="postMoneyValuation"
                                        name="postMoneyValuation"
                                        type="text"
                                        value={
                                            stateAuth?.profileData?.startupRes
                                                ?.fundRaising?.fundingAsk
                                                ?.postMoneyValuation
                                        }
                                        className="form-control ps-3"
                                        placeholder="Post-money valuation = Investment dollar amount ÷ percent investor receives."
                                        intlConfig={{
                                            locale: "en-US",
                                            currency: "USD",
                                        }}
                                        onValueChange={(value) => {
                                            updateProfile("fundRaising", {
                                                fundingAsk: {
                                                    ...stateAuth?.profileData
                                                        ?.startupRes
                                                        ?.fundRaising
                                                        ?.fundingAsk,
                                                    postMoneyValuation: value,
                                                },
                                            });
                                        }}
                                    />
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                </BodyWrapper>
                <Terms className="">
                    <p>
                        By clicking submit, you are agreeing to our{" "}
                        <span>Terms of Use</span> and{" "}
                        <span>Privacy Policy</span>. If you have questions,
                        please reach out to privacy@knightventures.com
                    </p>
                </Terms>
                <div className="row mt-4">
                    <div className="col-3">
                        <CustomButton
                            className=""
                            background="#808080"
                            onClick={() => back()}
                        >
                            Back
                        </CustomButton>
                    </div>
                    <div className="col-9 d-flex justify-content-end">
                        <OutlineButton
                            type="submit"
                            // onClick={(e) => {
                            //   e.preventDefault();
                            //   history.push(forwardHash());
                            // }}
                            className="ms-2"
                            style={{ marginRight: "0rem" }}
                            background="none"
                        >
                            Next
                        </OutlineButton>
                    </div>
                </div>
            </Form>
        </>
    );
};
