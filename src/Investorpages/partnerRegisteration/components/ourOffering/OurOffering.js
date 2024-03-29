import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FormCard from "../formCard/FormCard";
import { Button } from "../../../../components/index";
import { useAuth, useActivity } from "../../../../hooks";
import "./outOffering.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { Input, Form, Select } from "antd";
import { TextareaCustom } from "../../../../components/textArea/cutstomTextarea";
import { industry } from "../../../../constants/domiData";
import { letterOnly, months } from "../../../../utils/helpers";
import toast from "react-hot-toast";

const { Option } = Select;
const { TextArea } = Input;

const OurOffering = () => {
    const [buttonClicked, setButtonClicked] = useState("Save");
    const { goBack, push } = useHistory();
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

    const { stateAuth, updatePartnerLocalData, updatePartnerInfo } = useAuth();
    const onFinish = async (values) => {
        const uploaded = await updatePartnerInfo();

        if (uploaded?.success) {
            toast.success("Saved Successfully");
            push("/boosterpartner/dashboard");
        } else {
            toast.error("Something went wrong");
        }

        // if (uploaded?.success && buttonClicked === "Next") {
        // next();
        // push("#offerings");
        // }
        console.log(values);
    };

    useEffect(() => {
        // changePath(2);
    }, []);

    return (
        <div className="register-form-wrap">
            <h3>Our Offerings</h3>
            <p>Fill in the offers you want to display to start-ups</p>

            <Form
                name="Sign-Up"
                initialValues={{
                    remember: true,
                }}
                layout="vertical"
                onFinish={onFinish}
                style={{ marginTop: "1.5rem" }}
            >
                <FormCard>
                    <section className="mb-4">
                        <TextareaCustom
                            name={"offerings"}
                            label={"Offerings"}
                            value={stateAuth?.partnerData?.offerings?.offerings}
                            onChange={(e) =>
                                updatePartnerLocalData("offerings", {
                                    offerings: e.target.value,
                                })
                            }
                            onKeyPress={letterOnly}
                            placeholder={
                                "Enter offering description (250 characters at most)"
                            }
                        />
                    </section>

                    <section className="mb-4">
                        <TextareaCustom
                            name={"eligibilityCriteria"}
                            label={"Eligibility Criteria "}
                            value={
                                stateAuth?.partnerData?.offerings
                                    ?.eligibilityCriteria
                            }
                            onChange={(e) =>
                                updatePartnerLocalData("offerings", {
                                    eligibilityCriteria: e.target.value,
                                })
                            }
                            onKeyPress={letterOnly}
                            placeholder={
                                "Enter Eligibility Criteria (250 characters at most)"
                            }
                        />
                    </section>

                    <section className="mb-4">
                        <TextareaCustom
                            name={"importantNote"}
                            label={"Important Notes"}
                            value={
                                stateAuth?.partnerData?.offerings?.importantNote
                            }
                            onChange={(e) =>
                                updatePartnerLocalData("offerings", {
                                    importantNote: e.target.value,
                                })
                            }
                            onKeyPress={letterOnly}
                            placeholder={
                                "Enter your terms and conditions (250 characters at most)"
                            }
                        />
                    </section>

                    <section className="mb-4">
                        <TextareaCustom
                            name={"process"}
                            label={"Process "}
                            value={stateAuth?.partnerData?.offerings?.process}
                            onChange={(e) =>
                                updatePartnerLocalData("offerings", {
                                    process: e.target.value,
                                })
                            }
                            onKeyPress={letterOnly}
                            placeholder={
                                "Enter offer process (250 characters at most)"
                            }
                        />
                    </section>

                    <div className="row">
                        <section className="col-md-6 mb-4">
                            <Form.Item
                                name="partnershipValidity"
                                label="Partnership Validity"
                                initialValue={
                                    stateAuth?.partnerData?.offerings
                                        ?.partnershipValidity
                                }
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please select a Partnership Validity!",
                                    },
                                ]}
                            >
                                <Select
                                    id="partnershipValidity"
                                    style={{
                                        width: 200,
                                        backgroundColor: "#959596",
                                    }}
                                    placeholder="select your Partnership Validity"
                                    onChange={(value) => {
                                        updatePartnerLocalData("offerings", {
                                            partnershipValidity: value,
                                        });
                                    }}
                                >
                                    {industry.map((item, i) => (
                                        <Option value={item} key={i}>
                                            {" "}
                                            {item}{" "}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </section>
                        <section className="col-md-6 mb-4">
                            <Form.Item
                                name="turnAroundTime"
                                label="Turnaround Time"
                                initialValue={
                                    stateAuth?.partnerData?.offerings
                                        ?.turnAroundTime
                                }
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please select a Partnership Validity!",
                                    },
                                ]}
                            >
                                <Select
                                    id="turnAroundTime"
                                    style={{
                                        width: 200,
                                        backgroundColor: "#959596",
                                    }}
                                    placeholder="select your Turnaround Time"
                                    onChange={(value) => {
                                        updatePartnerLocalData("offerings", {
                                            turnAroundTime: value,
                                        });
                                    }}
                                >
                                    {months.map((item, i) => (
                                        <Option value={item} key={i}>
                                            {" "}
                                            {item}{" "}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </section>
                    </div>

                    <div>
                        <p className="offer-text pt-2">
                            Free Credit Value Allotted
                        </p>
                        <section className="free-choice">
                            <button
                                type="button"
                                onClick={() => {
                                    updatePartnerLocalData("offerings", {
                                        freeCreditValue: true,
                                    });
                                }}
                                className={`yes-btn ${
                                    stateAuth?.partnerData?.offerings
                                        ?.freeCreditValue
                                        ? "active"
                                        : ""
                                } `}
                            >
                                Yes
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    updatePartnerLocalData("offerings", {
                                        freeCreditValue: false,
                                    });
                                }}
                                className={`no-btn ${
                                    !stateAuth?.partnerData?.offerings
                                        ?.freeCreditValue
                                        ? "active"
                                        : ""
                                } `}
                            >
                                No
                            </button>
                        </section>
                    </div>
                </FormCard>

                <section className="d-flex align-items-center justify-content-between">
                    <button
                        type="button"
                        className="back-btn"
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
                        <Button type="submit" label="Done" />
                    </div>
                </section>
            </Form>
        </div>
    );
};

export default OurOffering;
