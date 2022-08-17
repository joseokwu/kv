import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import { Button, TextArea } from "../../../../mentorComponents/index";
import { Select, Form, DatePicker } from "antd";
import { TextField } from "../../../../Startupcomponents";
import moment from "moment";
import FormCard from "../../../../mentorComponents/formCard/FormCard";
import imageRep from "../../../../assets/icons/plus.svg";
import "./workExperience.css";
import { useActivity } from "../../../../hooks/useBusiness";
import { postMentorProfile } from "../../../../services/mentor";
import { useFormik } from "formik";
import { useAuth } from "../../../../hooks/useAuth";
import { CircularLoader } from "../../../../mentorComponents/CircluarLoader/CircularLoader";
import { sectors } from "../../../../utils/utils";

const { Option } = Select;

const WorkExperience = () => {
    const { goBack, push } = useHistory();
    const { stateAuth, updateMentorProfileState, updateMentorInfo } = useAuth();
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

    const [loading, setLoading] = useState(false);
    const [opts, setOpts] = useState("");
    const [nextloading, setNextLoading] = useState(false);
    const [buttonClicked, setButtonClicked] = useState("Save");
    const [startDate, setStartDate] = useState();
    const [data, setData] = useState(
        stateAuth?.mentorData?.workExperience ?? ""
    );

    useEffect(() => {
        setData(stateAuth?.mentorData?.workExperience);
    }, [stateAuth?.mentorData?.workExperience]);

    console.log(stateAuth?.mentorData?.workExperience);

    const onSubmit = async () => {
        setLoading(true);
        const uploaded = await updateMentorInfo();

        if (uploaded) {
            toast.success("Saved Successfully");
        } else {
            toast.error("Something went wrong");
        }

        if (uploaded && buttonClicked === "Next") {
            push("#area_of_interest");
            next();
        }
        setLoading(false);
    };

    const handleChange = (e, name, prefix = "") => {
        const { value } = e.target;

        console.log(name);

        // setData({ ...data, [name]: value });

        updateMentorProfileState("workExperience", {
            [name]: value,
        });

        // formik.handleChange(e);
    };

    const onNotCurrent = () => {
        handleChange({ target: { value: "N/A" } }, "position");
        handleChange({ target: { value: "N/A" } }, "start");
        handleChange({ target: { value: "N/A" } }, "end");
        handleChange({ target: { value: "N/A" } }, "amountRaised");
    };

    const onCurrent = () => {
        handleChange(
            {
                target: {
                    value: data?.position ?? "",
                },
            },
            "position"
        );
        handleChange(
            {
                target: {
                    value: data?.start ?? "",
                },
            },
            "start"
        );
        handleChange(
            {
                target: {
                    value: data?.end ?? "",
                },
            },
            "end"
        );
        handleChange(
            {
                target: {
                    value: data?.amountRaised ?? "",
                },
            },
            "amountRaised"
        );
    };

    return (
        <div className="mentor_details_form_wrap">
            <h3>Work Experience</h3>
            <p>You are required to add a current experience.</p>

            <Form
                name="Personal-Details"
                initialValues={{
                    remember: true,
                }}
                layout="vertical"
                onFinish={onSubmit}
                className="px-3"
            >
                <FormCard>
                    <div className="mb-4">
                        <p className="offer-text pt-2 pb-2">
                            Are you a past or current founder of a company?
                        </p>
                        <section className="free-choice">
                            <button
                                className="yes-btn"
                                type="button"
                                style={
                                    stateAuth?.mentorData?.workExperience
                                        ?.currentFounder === "Yes"
                                        ? {
                                              color: "#2e3192",
                                              background: "#dcebff",
                                          }
                                        : {}
                                }
                                onClick={() => {
                                    onCurrent();
                                    handleChange(
                                        {
                                            target: {
                                                value: "Yes",
                                            },
                                        },
                                        "currentFounder"
                                    );
                                }}
                            >
                                Yes
                            </button>
                            <button
                                className="no-btn"
                                type="button"
                                style={
                                    stateAuth?.mentorData?.workExperience
                                        ?.currentFounder === "No"
                                        ? {
                                              color: "#2e3192",
                                              background: "#dcebff",
                                          }
                                        : {}
                                }
                                onClick={() => {
                                    onNotCurrent();
                                    handleChange(
                                        {
                                            target: {
                                                value: "No",
                                            },
                                        },
                                        "currentFounder"
                                    );
                                }}
                            >
                                No
                            </button>
                        </section>
                    </div>

                    <div className="row">
                        <section className="col-md-12 mb-4">
                            <Form.Item
                                name="industry"
                                label="Industry"
                                initialValue={
                                    stateAuth?.mentorData?.workExperience
                                        ?.industry
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select an industry",
                                    },
                                ]}
                            >
                                <Select
                                    id="industry"
                                    value={
                                        stateAuth?.mentorData?.workExperience
                                            ?.industry
                                    }
                                    onChange={(e) =>
                                        handleChange(
                                            { target: { value: e } },
                                            "industry"
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

                        {stateAuth?.mentorData?.workExperience
                            ?.currentFounder === "Yes" && (
                            <>
                                <section className="col-md-12 mb-4">
                                    <TextField
                                        label={"Position"}
                                        placeholder={"Ex. Managing Director"}
                                        required={true}
                                        rows={"1"}
                                        name="position"
                                        value={
                                            stateAuth?.mentorData
                                                ?.workExperience?.position
                                        }
                                        onChange={(e) =>
                                            handleChange(e, "position")
                                        }
                                    />
                                </section>
                                <section className="col-md-6 mb-4">
                                    <Form.Item
                                        name="start"
                                        label="Start Date"
                                        initialValue={
                                            stateAuth?.mentorData
                                                ?.workExperience?.start
                                                ? moment(
                                                      stateAuth?.mentorData
                                                          ?.workExperience
                                                          ?.start
                                                  )
                                                : undefined
                                        }
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Please select the date you started",
                                            },
                                        ]}
                                    >
                                        <DatePicker
                                            className="col-md-12 py-2 px-2"
                                            id="start"
                                            name="start"
                                            defaultValue={
                                                stateAuth?.mentorData
                                                    ?.workExperience?.start
                                                    ? moment(
                                                          stateAuth?.mentorData
                                                              ?.workExperience
                                                              ?.start
                                                      )
                                                    : undefined
                                            }
                                            format={"YYYY-MM-DD"}
                                            onChange={(_, dateString) => {
                                                console.log(dateString);
                                                updateMentorProfileState(
                                                    "workExperience",
                                                    {
                                                        start: new Date(
                                                            dateString
                                                        ).toISOString(),
                                                    }
                                                );
                                                return dateString;
                                            }}
                                            handleDateInput
                                        />
                                    </Form.Item>
                                </section>
                                <section className="col-md-6 mb-4">
                                    <Form.Item
                                        name="end"
                                        label="End Date"
                                        initialValue={
                                            stateAuth?.mentorData
                                                ?.workExperience?.end
                                                ? moment(
                                                      stateAuth?.mentorData
                                                          ?.workExperience?.end
                                                  )
                                                : undefined
                                        }
                                        rules={[
                                            {
                                                required: false,
                                                message:
                                                    "Please select the date you left",
                                            },
                                        ]}
                                    >
                                        <DatePicker
                                            className="col-md-12 py-2 px-2"
                                            id="end"
                                            name="end"
                                            defaultValue={
                                                stateAuth?.mentorData
                                                    ?.workExperience?.end
                                                    ? moment(
                                                          stateAuth?.mentorData
                                                              ?.workExperience
                                                              ?.end
                                                      )
                                                    : undefined
                                            }
                                            format={"YYYY-MM-DD"}
                                            onChange={(_, dateString) => {
                                                console.log(dateString);
                                                updateMentorProfileState(
                                                    "workExperience",
                                                    {
                                                        end: new Date(
                                                            dateString
                                                        ).toISOString(),
                                                    }
                                                );
                                                return dateString;
                                            }}
                                            handleDateInput
                                        />
                                    </Form.Item>
                                </section>
                            </>
                        )}

                        <section className="col-md-12 mb-4">
                            <TextField
                                label={"Company Name"}
                                placeholder={"Enter company name"}
                                rows={"1"}
                                required={true}
                                name="companyName"
                                value={
                                    stateAuth?.mentorData?.workExperience
                                        ?.companyName
                                }
                                onChange={(e) => handleChange(e, "companyName")}
                            />
                        </section>

                        <section className="col-md-12 mb-4">
                            <TextField
                                label={"What are your top  achievements?"}
                                placeholder={
                                    "e.g I was made a managing director...."
                                }
                                rows={"6"}
                                name="achievements"
                                onChange={(e) =>
                                    handleChange(e, "achievements")
                                }
                                value={
                                    stateAuth?.mentorData?.workExperience
                                        ?.achievements
                                }
                            />
                        </section>

                        {stateAuth?.mentorData?.currentFounder === "Yes" && (
                            <div className="mb-4">
                                <p className="offer-text pt-2 pb-2">
                                    Have you ever been among the first set of
                                    employees in a company that was valued or
                                    exited at $5M?
                                </p>
                                <section className="free-choice">
                                    <button
                                        className="yes-btn"
                                        type="button"
                                        style={
                                            stateAuth?.mentorData
                                                ?.workExperience
                                                ?.amountRaised === "Yes"
                                                ? {
                                                      color: "#2e3192",
                                                      background: "#dcebff",
                                                  }
                                                : {}
                                        }
                                        onClick={() => {
                                            handleChange({
                                                target: {
                                                    name: "amountRaised",
                                                    value: "Yes",
                                                },
                                            });
                                        }}
                                    >
                                        Yes
                                    </button>
                                    <button
                                        className="no-btn"
                                        type="button"
                                        style={
                                            stateAuth?.mentorData
                                                ?.workExperience
                                                ?.amountRaised === "No"
                                                ? {
                                                      color: "#2e3192",
                                                      background: "#dcebff",
                                                  }
                                                : {}
                                        }
                                        onClick={() => {
                                            handleChange({
                                                target: {
                                                    name: "amountRaised",
                                                    value: "No",
                                                },
                                            });
                                        }}
                                    >
                                        No
                                    </button>
                                </section>
                            </div>
                        )}
                    </div>
                </FormCard>

                {/* <section className="col-md-12 mb-4">
          <p className="add_another_experience">
            <img className="mr-2" src={imageRep} alt="plus" />
            Add Another Experience
          </p>
        </section> */}

                <section className="d-flex align-items-center justify-content-between mt-5">
                    <button
                        style={{ background: "#c4c4c4" }}
                        className="back-btn"
                        onClick={() => {
                            updateMentorProfileState("workExperience", [data]);
                            push("#personal_details");
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
                            type="submit"
                            label={"Save"}
                            disabled={loading}
                            variant="secondary"
                            onClick={() => {
                                setButtonClicked("Save");
                            }}
                        />

                        <Button
                            label={"Next"}
                            background="#2E3192"
                            type="submit"
                            disabled={nextloading}
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

export default WorkExperience;
