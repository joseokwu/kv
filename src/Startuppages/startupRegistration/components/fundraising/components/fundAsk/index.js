import React, { useState } from "react";
import { css } from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { BodyWrapper, BntWrap, Terms } from "./fundAsk.styled";
import {
    CustomButton,
    OutlineButton,
} from "../../../../../../Startupcomponents/button/button.styled";
import { useFormik } from "formik";
import * as Yup from "yup";
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
    const { stateAuth, updateProfile } = useAuth();

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
    const fundNum = [1, 2, 3, 4, 5];

    const [showModal, setShowModal] = useState(false);
    const [hasPreviousFundraising, setHasPreviousFundraising] = useState(
        stateAuth?.startupData?.fundraising?.hasPreviousFundraising ?? false
    );
    // const [hasLeadInvestor, setHasLeadInvestor] = useState(
    //   stateAuth?.user?.fundraising?.hasPreviousFundraising ?? 'no'
    // );

    // function btn(e) {
    //   e.preventDefault();
    //   setHasPreviousFundraising(e.target.dataset.id);
    // }

    const onSubmit = (e) => {
        e.preventDefault();

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
                onFinish={onSubmit}
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
                                <label>
                                    Have you fundraised before?
                                    <span style={{ color: "red" }}>*</span>
                                </label>
                                <BntWrap>
                                    <button
                                        className={`me-3 ${
                                            stateAuth?.startupData?.fundRaising
                                                ?.fundingAsk
                                                ?.hasPreviousFundraising
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            updateProfile("fundRaising", {
                                                fundingAsk: {
                                                    ...stateAuth?.startupData
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
                                            !stateAuth?.startupData?.fundRaising
                                                ?.fundingAsk
                                                ?.hasPreviousFundraising
                                                ? "active"
                                                : ""
                                        }
                                        onClick={(e) => {
                                            e.preventDefault();
                                            updateProfile("fundRaising", {
                                                fundingAsk: {
                                                    ...stateAuth?.startupData
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
                                <label>
                                    {stateAuth?.startupData?.fundRaising
                                        ?.fundingAsk?.hasPreviousFundraising
                                        ? "What was the instrument for your previous round"
                                        : "Which instrument would you prefer to use for your current round?"}
                                    <span style={{ color: "red" }}>*</span>
                                </label>
                                <Form.Item
                                    name="instrumentForRound"
                                    initialValue={
                                        stateAuth?.startupData?.fundRaising
                                            ?.fundingAsk?.instrumentForRound
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please select a instrument for round",
                                        },
                                    ]}
                                >
                                    <TextField
                                        id="instrumentForRound"
                                        name="instrumentForRound"
                                        // options={optionsNumb}
                                        className="cust extra"
                                        value={
                                            stateAuth?.startupData?.fundRaising
                                                ?.fundingAsk?.instrumentForRound
                                        }
                                        onChange={(e) => {
                                            updateProfile("fundRaising", {
                                                fundingAsk: {
                                                    ...stateAuth?.startupData
                                                        ?.fundRaising
                                                        ?.fundingAsk,
                                                    instrumentForRound: e,
                                                },
                                            });
                                        }}
                                        css={css`
                                            input {
                                                margin-left: 0.5rem;
                                            }
                                        `}
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-group my-2 col-12">
                                <Form.Item
                                    name="numberOfRounds"
                                    label="Select your round?"
                                    initialValue={
                                        stateAuth?.startupData?.fundRaising
                                            ?.fundingAsk?.numberOfRounds
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
                                                    ...stateAuth?.startupData
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
                                <label>
                                    How much investment is your company looking
                                    to raise?
                                    <span style={{ color: "red" }}>*</span>
                                </label>

                                <CurrencyInput
                                    id="fundraisingAmount"
                                    name="fundraisingAmount"
                                    type="text"
                                    value={
                                        stateAuth?.startupData?.fundRaising
                                            ?.fundingAsk?.fundraisingAmount
                                    }
                                    style={{ marginLeft: "8px" }}
                                    className="form-control ps-3"
                                    placeholder="Enter amount"
                                    intlConfig={{
                                        locale: "en-US",
                                        currency: "USD",
                                    }}
                                    required
                                    onValueChange={(value) => {
                                        updateProfile("fundRaising", {
                                            fundingAsk: {
                                                ...stateAuth?.startupData
                                                    ?.fundRaising?.fundingAsk,
                                                fundraisingAmount: value,
                                            },
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group my-2 col-12">
                                <TextField
                                    label="Dilution (%)"
                                    name={"dilution"}
                                    onChange={(e) => {
                                        updateProfile("fundRaising", {
                                            fundingAsk: {
                                                ...stateAuth?.startupData
                                                    ?.fundRaising?.fundingAsk,
                                                dilution: e.target.value,
                                            },
                                        });
                                    }}
                                    value={
                                        stateAuth?.startupData?.fundRaising
                                            ?.fundingAsk?.dilution
                                    }
                                    required={true}
                                    placeholder="Enter what your business does"
                                />
                            </div>
                            <div className="form-group my-2 col-12">
                                <label>
                                    What is your pre-money valuation?
                                    <span style={{ color: "red" }}>*</span>
                                </label>

                                <CurrencyInput
                                    id="preMoneyValuation"
                                    name="preMoneyValuation"
                                    type="text"
                                    value={
                                        stateAuth?.startupData?.fundRaising
                                            ?.fundingAsk?.preMoneyValuation
                                    }
                                    className="form-control ps-3"
                                    placeholder="Pre money = Post money - investment amount."
                                    intlConfig={{
                                        locale: "en-US",
                                        currency: "USD",
                                    }}
                                    required
                                    onValueChange={(value) => {
                                        updateProfile("fundRaising", {
                                            fundingAsk: {
                                                ...stateAuth?.startupData
                                                    ?.fundRaising?.fundingAsk,
                                                preMoneyValuation: value,
                                            },
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group my-2 col-12">
                                <label>
                                    Post-Money valuation
                                    <span style={{ color: "red" }}>*</span>
                                </label>

                                <CurrencyInput
                                    id="postMoneyValuation"
                                    name="postMoneyValuation"
                                    type="text"
                                    value={
                                        stateAuth?.startupData?.fundRaising
                                            ?.fundingAsk?.postMoneyValuation
                                    }
                                    className="form-control ps-3"
                                    placeholder="Post-money valuation = Investment dollar amount ÷ percent investor receives."
                                    intlConfig={{
                                        locale: "en-US",
                                        currency: "USD",
                                    }}
                                    required
                                    onValueChange={(value) => {
                                        updateProfile("fundRaising", {
                                            fundingAsk: {
                                                ...stateAuth?.startupData
                                                    ?.fundRaising?.fundingAsk,
                                                postMoneyValuation: value,
                                            },
                                        });
                                    }}
                                />
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
                            type="button"
                            // onClick={(e) => {
                            //   e.preventDefault();
                            //   history.push(forwardHash());
                            // }}
                            onClick={(e) => {
                                e.preventDefault();
                                onSubmit(e);
                            }}
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
