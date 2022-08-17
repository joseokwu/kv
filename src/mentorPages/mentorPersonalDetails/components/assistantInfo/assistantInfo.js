import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, PhoneInput } from "../../../../mentorComponents/index";
import { TextField, TextArea } from "../../../../Startupcomponents";
import { Form } from "antd";
import "./assistantInfo.css";
import FormCard from "../../../../mentorComponents/formCard/FormCard";
import { useAuth, useActivity } from "../../../../hooks";
import { CircularLoader } from "../../../../mentorComponents/CircluarLoader/CircularLoader";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const AssistantInfo = () => {
    const { goBack, push } = useHistory();

    const [loading, setLoading] = useState(false);
    const { stateAuth, updateMentorProfileState, updateMentorInfo } = useAuth();

    const [country, setCountry] = useState(
        stateAuth?.mentorData?.assistantInfo?.assistantCountry ?? ""
    );

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

    const handleSubmit = async () => {
        setLoading(true);

        const uploaded = await updateMentorInfo(true);

        if (uploaded) {
            toast.success("Submitted Successfully");
        } else {
            toast.error("Something went wrong");
        }
        if (uploaded) {
            push("/mentor/dashboard");
            // next();
        }
        setLoading(false);
    };

    // const formik = useFormik({
    //     enableReinitialize: true,
    //     initialValues: {
    //         assistantFirstname:
    //             stateAuth?.mentorData?.assistantInfo?.assistantFirstname ?? "",
    //         assistantLastname:
    //             stateAuth?.mentorData?.assistantInfo?.assistantLastname ?? "",
    //         assistantEmail:
    //             stateAuth?.mentorData?.assistantInfo?.assistantEmail ?? "",
    //         assistantPhone:
    //             stateAuth?.mentorData?.assistantInfo?.assistantPhone ?? "",
    //         assistantAddress:
    //             stateAuth?.mentorData?.assistantInfo?.assistantAddress ?? "",
    //         assistantCountry:
    //             stateAuth?.mentorData?.assistantInfo?.assistantCountry ??
    //             "Nigeria",
    //         assistantState:
    //             stateAuth?.mentorData?.assistantInfo?.assistantState ?? "",
    //         assistantCity:
    //             stateAuth?.mentorData?.assistantInfo?.assistantCity ?? "",
    //     },

    //     validationSchema: Yup.object({
    //         assistantFirstname: Yup.string()
    //             .matches(
    //                 /^[A-Za-z ]+$/,
    //                 "Numbers or special characters not allowed"
    //             )
    //             .required("This field is required"),
    //         assistantLastname: Yup.string()
    //             .matches(
    //                 /^[A-Za-z ]+$/,
    //                 "Numbers or special characters not allowed"
    //             )
    //             .required("This field is required"),
    //         assistantEmail: Yup.string()
    //             .email("Invalid email address")
    //             .required("This field is required"),
    //         assistantPhone: Yup.string().required("This field is required"),
    //         assistantAddress: Yup.string().required("This field is required"),
    //         assistantCountry: Yup.string().required("This field is required"),
    //         assistantCity: Yup.string()
    //             .matches(
    //                 /^[A-Za-z ]+$/,
    //                 "Numbers or special characters not allowed"
    //             )
    //             .required("This field is required"),
    //         assistantState: Yup.string().required("This field is required"),
    //     }),
    //     onSubmit: (values) => handleSubmit(),
    // });

    const handleChange = (e, name, prefix = "") => {
        const { value } = e.target;
        if (prefix !== "") {
            updateMentorProfileState("assistantInfo", {
                [prefix]: {
                    ...stateAuth?.mentorData?.assistantInfo[prefix],
                    [name]: value,
                },
            });
            return;
        }

        updateMentorProfileState("assistantInfo", {
            [name]: value,
        });
    };

    return (
        <Form
            className="mentor_details_form_wrap"
            // onSubmit={formik.handleSubmit}
            name="Assistant-Info"
            initialValues={{
                remember: true,
            }}
            layout="vertical"
            onFinish={handleSubmit}
            // className="px-3"
        >
            <h3>Assistant Info</h3>
            <p>This will help us personalise your preferences</p>
            <FormCard>
                <div className="personal_info">
                    <h4>Provide your assistant’s contact info</h4>
                </div>

                <div className="row">
                    <section className="col-md-6 mb-4">
                        <TextField
                            label="First Name"
                            placeholder={"Micheal"}
                            // required={true}
                            name="assistantFirstname"
                            onChange={(e) =>
                                handleChange(e, "assistantFirstname")
                            }
                            value={
                                stateAuth?.mentorData?.assistantInfo
                                    ?.assistantFirstname
                            }
                        />
                    </section>
                    <section className="col-md-6 mb-4">
                        <TextField
                            label="Last Name"
                            placeholder={"Smith"}
                            // required={true}
                            name="assistantLastname"
                            onChange={(e) =>
                                handleChange(e, "assistantLastname")
                            }
                            value={
                                stateAuth?.mentorData?.assistantInfo
                                    ?.assistantLastname
                            }
                        />
                    </section>

                    <section className="col-md-4 mb-4">
                        <label>Country</label>
                        <CountryDropdown
                            id="country"
                            type="text"
                            name="country"
                            className="form-control px-5 py-1 country-bg"
                            // preferredCountries={["ng"]}
                            value={country}
                            // value={stateAuth?.mentorData?.assistantInfo?.country}

                            onChange={(value) => {
                                handleChange(
                                    {
                                        target: {
                                            value: value,
                                        },
                                    },
                                    "country"
                                );
                                setCountry(value);
                            }}
                        />
                    </section>
                    <section className="col-md-4 mb-4">
                        <label style={{ fontSize: "16px" }}>State</label>
                        <RegionDropdown
                            id={"assistantState"}
                            name={"assistantState"}
                            country={country}
                            value={
                                stateAuth?.mentorData?.assistantInfo
                                    ?.assistantState
                            }
                            onChange={(value) =>
                                handleChange(
                                    {
                                        target: {
                                            value: value,
                                        },
                                    },
                                    "assistantState"
                                )
                            }
                            className="form-control ps-3"
                        />
                    </section>
                    <section className="col-md-4 mb-4">
                        <TextField
                            label={"City"}
                            placeholder={"Enter your city"}
                            name="assistantCity"
                            onChange={(e) => handleChange(e, "assistantCity")}
                            value={
                                stateAuth?.mentorData?.assistantInfo
                                    ?.assistantCity
                            }
                        />
                    </section>

                    <section className="col-md-12 mb-4">
                        <Form.Item
                            name="assistantAddress"
                            label="Address"
                            initialValue={
                                stateAuth?.mentorData?.assistantInfo
                                    ?.assistantAddress
                            }
                            rules={[
                                {
                                    required: false,
                                    message:
                                        "Please enter your permanent address",
                                },
                            ]}
                        >
                            <TextArea
                                placeholder={"Enter your permanent address"}
                                rows={"1"}
                                onChange={(e) =>
                                    handleChange(e, "assistantAddress")
                                }
                                name="assistantAddress"
                                value={
                                    stateAuth?.mentorData?.assistantInfo
                                        ?.assistantAddress
                                }
                            />
                        </Form.Item>
                    </section>

                    <section className="col-md-6 mb-4">
                        <TextField
                            label="Email"
                            placeholder={"Michealsmith@gmail.com"}
                            type="email"
                            // required={true}
                            onChange={(e) => handleChange(e, "assistantEmail")}
                            name="assistantEmail"
                            value={
                                stateAuth?.mentorData?.assistantInfo
                                    ?.assistantEmail
                            }
                        />
                    </section>
                    <section className="col-md-6 mb-4">
                        <PhoneInput
                            label="Mobile Number"
                            name="assistantPhone"
                            value={
                                stateAuth?.mentorData?.assistantInfo
                                    ?.assistantPhone
                            }
                            onChange={(e) =>
                                handleChange(
                                    {
                                        target: {
                                            value: e.id,
                                        },
                                    },
                                    "assistantPhone"
                                )
                            }
                        />
                    </section>
                </div>
            </FormCard>

            <section className="d-flex align-items-center justify-content-between mt-5">
                <button
                    className="back-btn"
                    onClick={() => {
                        push("#consulting");
                        back();
                    }}
                >
                    Go Back
                </button>

                <div
                    className="d-flex align-items-center"
                    style={{ columnGap: 9 }}
                >
                    <Button
                        label={loading ? <CircularLoader /> : "Submit"}
                        type="submit"
                    />
                </div>
            </section>
        </Form>
    );
};

export default AssistantInfo;
