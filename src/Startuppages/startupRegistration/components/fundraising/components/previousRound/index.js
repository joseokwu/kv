import { css } from "styled-components/macro";
import { useState, useEffect } from "react";
import { BodyWrapper, Terms } from "./previous.styled";
import { useHistory } from "react-router-dom";
import {
    CustomButton,
    OutlineButton,
} from "../../../../../../Startupcomponents/button/button.styled";
import { CustomSelect } from "../../../../../../Startupcomponents/select/customSelect";
import { DatePicker, Form, Select } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField } from "../../../../../../Startupcomponents";
import "antd/dist/antd.css";
import moment from "moment";
import { useAuth } from "../../../../../../hooks/useAuth";
import CurrencyInput from "react-currency-input-field";

const { Option } = Select;

export const PreviousRound = ({ setFundraising }) => {
    const history = useHistory();
    const { stateAuth, updateProfile, updateStartupInfo } = useAuth();

    const optionsNumb = [
        { value: "Seed round", label: "Seed round" },
        { value: "Angel round", label: "Angel round" },
        { value: "Series A", label: "Series A" },
        { value: "Series B", label: "Series B" },
        { value: "Series C", label: "Series C" },
    ];
    const fundNum = [1, 2, 3, 4, 5];

    const [startDate, setStartDate] = useState(new Date());

    const [hasLeadInvestor, setHasLeadInvestor] = useState(
        stateAuth?.user?.fundRaising?.previousRound?.hasLeadInvestor ?? false
    );

    const [amount, setAmount] = useState(
        stateAuth?.profileData?.startupRes?.fundRaising?.previousRound?.fundraisingAmount ??
            ""
    );
    const [preMoney, setPreMoney] = useState(
        stateAuth?.profileData?.startupRes?.fundRaising?.previousRound?.preMoneyValuation ??
            ""
    );
    const [postMoney, setPostMoney] = useState(
        stateAuth?.profileData?.startupRes?.fundRaising?.previousRound
            ?.postMoneyValuation ?? ""
    );

    console.log(stateAuth?.profileData?.startupRes?.fundRaising?.previousRound);

    // function btn(e) {
    //  stateAuth?.user?.fundRaising?.previousRound?.dateOfFunding
    // }

    const onFinish = () => {
        // console.log('hello')
        console.log(stateAuth);
        updateStartupInfo();
        history.push("#Financial Projection");
    };

    return (
        <>
            <Form
                name="Previous Round"
                initialValues={{
                    remember: true,
                }}
                layout="vertical"
                onFinish={onFinish}
            >
                <BodyWrapper>
                    <div>
                        <span
                            css={css`
                                font-family: DM Sans;
                                font-weight: 500;
                                font-size: 24px;
                                line-height: 30.83px;
                                color: #2e3192;
                            `}
                        >
                            Previous Round
                        </span>
                        <div className="mx-1 border-bottom pb-3 pt-3">
                            <p>A brief description of your previous round</p>
                        </div>
                        {/* <hr /> */}

                        <div className="row my-4">
                            <div className="form-group col-12 mb-0">
                                <TextField
                                    id="instrumentForRound"
                                    label="Which instrument did you use for your previous round?"
                                    // errName="instrument"
                                    style={{ width: 200 }}
                                    value={
                                        stateAuth?.profileData?.startupRes?.fundRaising
                                            ?.previousRound?.instrumentForRound
                                    }
                                    onChange={(e) =>
                                        updateProfile("fundRaising", {
                                            previousRound: {
                                                ...stateAuth?.profileData?.startupRes
                                                    ?.fundRaising
                                                    ?.previousRound,
                                                instrumentForRound:
                                                    e.target.value,
                                            },
                                        })
                                    }
                                    required={false}
                                />
                            </div>

                            <div className="form-group my-2 col-12">
                                <Form.Item
                                    name="numberOfRounds"
                                    label="Select your previous round"
                                    initialValue={
                                        stateAuth?.profileData?.startupRes?.fundRaising
                                            ?.previousRound?.numberOfRounds
                                    }
                                    rules={[
                                        {
                                            required: false,
                                            message:
                                                "Please select number of round",
                                        },
                                    ]}
                                >
                                    <Select
                                        id="numberOfRounds"
                                        style={{ width: 200 }}
                                        onChange={(e) =>
                                            updateProfile("fundRaising", {
                                                previousRound: {
                                                    ...stateAuth?.profileData?.startupRes
                                                        ?.fundRaising
                                                        ?.previousRound,
                                                    numberOfRounds: e,
                                                },
                                            })
                                        }
                                    >
                                        {optionsNumb.map((item, i) => (
                                            <Option value={item.value} key={i}>
                                                {" "}
                                                {item.label}{" "}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className="form-group my-2 col-12">
                                <label>
                                    In which month/year did you get funding?
                                    {/* <span style={{ color: "red" }}>*</span> */}
                                </label>
                                <div>
                                    <DatePicker
                                        id="dateOfFunding"
                                        name="dateOfFunding"
                                        style={{
                                            background: "#FAFAFC",
                                            border: "none",
                                        }}
                                        defaultValue={
                                            moment(
                                                stateAuth?.profileData?.startupRes
                                                    ?.fundRaising?.previousRound
                                                    ?.dateOfFunding
                                            ) ?? moment()
                                        }
                                        className="form-control w-lg-50 w-100 datePick mx-3"
                                        onChange={(date) =>
                                            updateProfile("fundRaising", {
                                                previousRound: {
                                                    ...stateAuth?.profileData?.startupRes
                                                        ?.fundRaising
                                                        ?.previousRound,
                                                    dateOfFunding: date,
                                                },
                                            })
                                        }
                                    />
                                </div>
                            </div>

                            <div className="form-group my-2 col-12">
                                <label>
                                    {" "}
                                    How much did you raise in last funding
                                    round?
                                    {/* <span style={{ color: "red" }}>*</span> */}
                                </label>

                                <CurrencyInput
                                    id="fundraisingAmount"
                                    name="fundraisingAmount"
                                    type="text"
                                    value={
                                        stateAuth?.profileData?.startupRes?.fundRaising
                                            ?.previousRound?.fundraisingAmount
                                    }
                                    className="form-control ps-3"
                                    placeholder="Enter amount"
                                    intlConfig={{
                                        locale: "en-US",
                                        currency: "USD",
                                    }}
                                    onValueChange={(value) =>
                                        updateProfile("fundRaising", {
                                            previousRound: {
                                                ...stateAuth?.profileData?.startupRes
                                                    ?.fundRaising
                                                    ?.previousRound,
                                                fundraisingAmount: value,
                                            },
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group my-2 col-12">
                                <TextField
                                    name="dilution"
                                    label="Dilution (%)"
                                    errName="dilution percentage"
                                    style={{ width: 200 }}
                                    value={
                                        stateAuth?.profileData?.startupRes?.fundRaising
                                            ?.previousRound?.dilution
                                    }
                                    required={true}
                                    onChange={(e) => {
                                        updateProfile("fundRaising", {
                                            previousRound: {
                                                ...stateAuth?.profileData?.startupRes
                                                    ?.fundRaising
                                                    ?.previousRound,
                                                dilution: e.target.value,
                                            },
                                        });
                                    }}
                                    placeholder=""
                                />
                            </div>
                            <div className="form-group my-2 col-12">
                                <label>
                                    What was your pre-money valuation in last
                                    round?
                                    {/* <span style={{ color: "red" }}>*</span> */}
                                </label>

                                <CurrencyInput
                                    id="preMoneyValuation"
                                    name="preMoneyValuation"
                                    type="text"
                                    value={
                                        stateAuth?.profileData?.startupRes?.fundRaising
                                            ?.previousRound?.preMoneyValuation
                                    }
                                    className="form-control ps-3"
                                    placeholder="Pre money = Post money - investment amount."
                                    intlConfig={{
                                        locale: "en-US",
                                        currency: "USD",
                                    }}
                                    onValueChange={(value) =>
                                        updateProfile("fundRaising", {
                                            previousRound: {
                                                ...stateAuth?.profileData?.startupRes
                                                    ?.fundRaising
                                                    ?.previousRound,
                                                preMoneyValuation: value,
                                            },
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group my-2 col-12">
                                <label>
                                    Post-Money valuation for last round
                                    {/* <span style={{ color: "red" }}>*</span> */}
                                </label>

                                <CurrencyInput
                                    id="postMoneyValuation"
                                    name="postMoneyValuation"
                                    type="text"
                                    value={
                                        stateAuth?.profileData?.startupRes?.fundRaising
                                            ?.previousRound?.postMoneyValuation
                                    }
                                    className="form-control ps-3"
                                    placeholder="Post-money valuation = Investment dollar amount ÷ percent investor receives."
                                    intlConfig={{
                                        locale: "en-US",
                                        currency: "USD",
                                    }}
                                    onValueChange={(value) =>
                                        updateProfile("fundRaising", {
                                            previousRound: {
                                                ...stateAuth?.profileData?.startupRes
                                                    ?.fundRaising
                                                    ?.previousRound,
                                                postMoneyValuation: value,
                                            },
                                        })
                                    }
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
                            onClick={() => history.push("#Cap Table")}
                        >
                            Back
                        </CustomButton>
                    </div>
                    <div className="col-9 d-flex justify-content-end">
                        <OutlineButton
                            type="submit"
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
