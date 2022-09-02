import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import FormCard from "../../../../mentorComponents/formCard/FormCard";
import { Button } from "../../../../mentorComponents/index";
import imageRep from "../../../../assets/icons/blackPlus.svg";
import { Select, Form } from "antd";
import "./interest.css";
import { SkillTab } from "../../../../Startupcomponents";
import { useAuth } from "../../../../hooks";
import { sectors, kvRoles, founderType } from "../../../../utils/utils";
import { CircularLoader } from "../../../../mentorComponents/CircluarLoader/CircularLoader";
import { TextField } from "../../../../Startupcomponents";
import { TextArea } from "../../../../Startupcomponents";
import { useActivity } from "../../../../hooks";

const { Option } = Select;

const Interest = () => {
    const { goBack, push } = useHistory();

    const { stateAuth, updateMentorProfileState, updateMentorInfo } = useAuth();

    const {
        changePath,
        state: { path },
    } = useActivity();

    const [inVal, setVal] = useState("");
    const [loading, setLoading] = useState(false);
    const [buttonClicked, setButtonClicked] = useState("Save");

    const handleChangeVal = (e) => {
        setVal(e.target.value);
    };

    const back = () => {
        changePath(path - 1);
    };

    const next = () => {
        changePath(path + 1);
    };

    console.log(stateAuth?.mentorData?.areaOfInterest);
    const handleKey = (e) => {
        if (e.keyCode === 13 || e.keyCode === 32) {
            e.preventDefault();
            if (
                inVal.trim() === "" ||
                stateAuth.mentorData.areaOfInterest.skills.indexOf(
                    inVal.trim()
                ) !== -1
            )
                return;
            setVal("");
            updateMentorProfileState("areaOfInterest", {
                skills: [...stateAuth.mentorData.areaOfInterest.skills, inVal],
            });
        }
    };

    const onDelete = (value) => {
        updateMentorProfileState("areaOfInterest", {
            skills: stateAuth.mentorData.areaOfInterest.skills.filter(
                (item) => item !== value
            ),
        });
    };

    const handleSubmit = async () => {
        setLoading(true);

        const uploaded = await updateMentorInfo();

        if (uploaded) {
            toast.success("Saved Successfully");
        } else {
            toast.error("Something went wrong");
        }
        if (uploaded && buttonClicked === "Next") {
            push("#consulting");
            next();
        }
        setLoading(false);
    };

    const handleChange = (e, name, prefix = "") => {
        const { value } = e.target;
        if (prefix !== "") {
            updateMentorProfileState("areaOfInterest", {
                [prefix]: {
                    ...stateAuth?.mentorData?.areaOfInterest[prefix],
                    [name]: value,
                },
            });
            return;
        }

        updateMentorProfileState("areaOfInterest", {
            [name]: value,
        });
    };

    return (
        <Form
            className="mentor_details_form_wrap"
            // onSubmit={formik.handleSubmit}
            name="Interest"
            initialValues={{
                remember: true,
            }}
            layout="vertical"
            onFinish={handleSubmit}
            // className="px-3"
        >
            <h3>Area of Interest </h3>
            <p>
                This will help us provide startups, personalised for your
                preferences
            </p>

            <FormCard>
                <div className="row">
                    <section className="col-md-12 mb-4">
                        <Form.Item
                            name="industryExpertise"
                            label="What industry do you have expertise in?"
                            initialValue={
                                stateAuth?.mentorData?.areaOfInterest
                                    ?.industryExpertise
                            }
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Please select an industry expertise",
                                },
                            ]}
                        >
                            <Select
                                id="industryExpertise"
                                value={
                                    stateAuth?.mentorData?.areaOfInterest
                                        ?.industryExpertise
                                }
                                onChange={(e) =>
                                    handleChange(
                                        { target: { value: e } },
                                        "industryExpertise"
                                    )
                                }
                            >
                                {sectors.map((item, i) => (
                                    <Option value={item} key={i}>
                                        {item}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </section>

                    <section className="col-md-12 mb-4">
                        <label>
                            {"Please list your skills or areas of expertise"}
                        </label>
                        <input
                            onChange={handleChangeVal}
                            style={{
                                width: "100%",
                                outline: "none",
                                color: "purple",
                            }}
                            value={inVal}
                            type="text"
                            placeholder="Enter your skills and press the space button to add "
                            className="py-2 px-3 mb-1"
                            // className='form-control ps-3'
                            onKeyDown={handleKey}
                        />

                        {stateAuth?.mentorData?.areaOfInterest?.skills &&
                            stateAuth?.mentorData?.areaOfInterest?.skills.map(
                                (item, i) => (
                                    <SkillTab
                                        key={i}
                                        skill={item}
                                        onClick={() => onDelete(item)}
                                    />
                                )
                            )}
                    </section>

                    <section className="col-md-12 mb-4">
                        <Form.Item
                            name="roleInKv"
                            label="What role would you like to play within the Knight Ventures Network?"
                            initialValue={
                                stateAuth?.mentorData?.areaOfInterest?.roleInKv
                            }
                            rules={[
                                {
                                    required: true,
                                    message: "Please select an industry",
                                },
                            ]}
                        >
                            <Select
                                id="roleInKv"
                                value={
                                    stateAuth?.mentorData?.areaOfInterest
                                        ?.roleInKv
                                }
                                onChange={(e) =>
                                    handleChange(
                                        { target: { value: e } },
                                        "roleInKv"
                                    )
                                }
                            >
                                {kvRoles.map((item, i) => (
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
                <section className="col-md-12 mb-4">
                    <p className="gender_title mb-3">
                        What mentor type would you prefer?
                    </p>
                    <section className="gender_choice">
                        <button
                            className="col-md-6 male_btn"
                            type="button"
                            style={
                                stateAuth?.mentorData?.areaOfInterest
                                    ?.mentorType === "Regular mentor"
                                    ? {
                                          color: "#2e3192",
                                          background: "#dcebff",
                                      }
                                    : {}
                            }
                            onClick={() =>
                                handleChange(
                                    {
                                        target: {
                                            value: "Regular mentor",
                                        },
                                    },
                                    "mentorType"
                                )
                            }
                        >
                            Regular mentor - Dedicated office hours{" "}
                        </button>
                        <button
                            className="col-md-5 pl-2 female_btn"
                            type="button"
                            style={
                                stateAuth?.mentorData?.areaOfInterest
                                    ?.mentorType === "Directory listing"
                                    ? {
                                          color: "#2e3192",
                                          background: "#dcebff",
                                      }
                                    : {}
                            }
                            onClick={() =>
                                handleChange(
                                    {
                                        target: {
                                            value: "Directory listing",
                                        },
                                    },
                                    "mentorType"
                                )
                            }
                        >
                            Directory listing - By approval{" "}
                        </button>
                    </section>
                </section>

                <section className="col-md-12 mb-4">
                    <Form.Item
                        name="roleAsFounder"
                        label="What founder type roles are you interested in?"
                        initialValue={
                            stateAuth?.mentorData?.areaOfInterest?.roleAsFounder
                        }
                        rules={[
                            {
                                required: true,
                                message: "Please select an industry",
                            },
                        ]}
                    >
                        <Select
                            id="roleAsFounder"
                            value={
                                stateAuth?.mentorData?.areaOfInterest
                                    ?.roleAsFounder
                            }
                            onChange={(e) =>
                                handleChange(
                                    { target: { value: e } },
                                    "roleAsFounder"
                                )
                            }
                        >
                            {founderType.map((item, i) => (
                                <Option value={item} key={i}>
                                    {item}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </section>

                <section className="col-md-12 mb-4">
                    <TextField
                        label={
                            "In clear terms, please share your mentoring experience, and how that would come to bear as a Mentor in the Knight Ventures network?"
                        }
                        rows={"6"}
                        name="mentorExperience"
                        onChange={(e) => handleChange(e, "mentorExperience")}
                        value={
                            stateAuth?.mentorData?.areaOfInterest
                                ?.mentorExperience
                        }
                    />
                </section>

                <div className="col-md-12 mb-4">
                    <p className="offer-text pt-2">
                        Have you worked in growth marketing with Startups or
                        Tech Companies?
                    </p>
                    <section className="free-choice">
                        <button
                            type="button"
                            className="yes-btn"
                            style={
                                stateAuth?.mentorData?.areaOfInterest
                                    ?.growthInStartup === "Yes"
                                    ? {
                                          color: "#2e3192",
                                          background: "#dcebff",
                                      }
                                    : {}
                            }
                            onClick={() =>
                                handleChange(
                                    {
                                        target: {
                                            value: "Yes",
                                        },
                                    },
                                    "growthInStartup"
                                )
                            }
                        >
                            Yes
                        </button>
                        <button
                            type="button"
                            className="no-btn"
                            style={
                                stateAuth?.mentorData?.areaOfInterest
                                    ?.growthInStartup === "No"
                                    ? {
                                          color: "#2e3192",
                                          background: "#dcebff",
                                      }
                                    : {}
                            }
                            onClick={() =>
                                handleChange(
                                    {
                                        target: {
                                            value: "No",
                                        },
                                    },
                                    "growthInStartup"
                                )
                            }
                        >
                            No
                        </button>
                    </section>
                </div>

                <section className="col-md-12 mb-4">
                    <Form.Item
                        name="companyInterest"
                        label="Are you interested in joining a company at a particular stage?"
                        initialValue={
                            stateAuth?.mentorData?.areaOfInterest
                                ?.companyInterest
                        }
                    >
                        <TextArea
                            // label={
                            //     "Are you interested in joining a company at a particular stage?"
                            // }
                            rows={"6"}
                            name="companyInterest"
                            onChange={(e) => handleChange(e, "companyInterest")}
                            value={
                                stateAuth?.mentorData?.areaOfInterest
                                    ?.companyInterest
                            }
                        />
                    </Form.Item>
                </section>

                <section className="col-md-12 mb-4">
                    <Form.Item
                        name="criterion"
                        label="What is your most important criterion in selecting a company to join?"
                        initialValue={
                            stateAuth?.mentorData?.areaOfInterest?.criterion
                        }
                    >
                        <TextArea
                            // label={
                            //     "What is your most important criterion in selecting a company to join?"
                            // }

                            rows={"6"}
                            name="criterion"
                            onChange={(e) => handleChange(e, "criterion")}
                            value={
                                stateAuth?.mentorData?.areaOfInterest?.criterion
                            }
                        />
                    </Form.Item>
                </section>

                <section className="col-md-12 mb-4">
                    <TextArea
                        label={"Please include any additional information"}
                        rows={"6"}
                        name="additionalInfo"
                        onChange={(e) => handleChange(e, "additionalInfo")}
                        value={
                            stateAuth?.mentorData?.areaOfInterest
                                ?.additionalInfo
                        }
                    />
                </section>
            </FormCard>

            {/* <FormCard>
        <section className="upload_resume text-center mb-4">
          <button type="button">
            <img className="mr-2" src={imageRep} alt={"upload_resume"} /> Upload
            Resume
          </button>
        </section>

        <section className="text-center mb-4">
          <p>Drag and drop file here</p>
        </section>

        <section className="upload_resume_size text-center mb-4">
          <p>File must be less than 5mb</p>
        </section>
      </FormCard> */}

            <section className="d-flex align-items-center justify-content-between mt-5">
                <button
                    className="back-btn"
                    type="button"
                    onClick={() => {
                        push("#work_experience");
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
                        label={"Save"}
                        variant="secondary"
                        type="submit"
                        onClick={() => {
                            setButtonClicked("Save");
                        }}
                    />
                    <Button
                        label="Next"
                        type="submit"
                        // onClick={() => {
                        //     push("#consulting");
                        // }}
                        onClick={() => {
                            setButtonClicked("Next");
                        }}
                    />
                </div>
            </section>
        </Form>
    );
};

export default Interest;
