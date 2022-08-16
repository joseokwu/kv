import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CountryDropdown from "country-dropdown-with-flags-for-react";
import toast from "react-hot-toast";
import { css } from "styled-components//macro";
import imageRep from "../../../../assets/icons/mentorDetails.svg";
import add from "../../../../assets/icons/addFile.svg";
import { Button, PhoneInput } from "../../../../mentorComponents/index";
import { TextField } from "../../../../Startupcomponents";
import { Form, Select } from "antd";
import { CircularLoader } from "../../../../mentorComponents/CircluarLoader/CircularLoader";
import FormCard from "../../../../mentorComponents/formCard/FormCard";
import { useAuth } from "../../../../hooks/useAuth";
import { upload } from "../../../../services/utils";
import {
    whatsappRegExp,
    linkedinRegExp,
    crunchbaseRegExp,
    twitterRegExp,
    angelistRegExp,
    skypeRegExp,
    googlemeetRegExp,
} from "../../../../utils/utils";

import "./details.css";

// import { updateMentorProfile } from "../../../../services/mentor";
import { useActivity } from "../../../../hooks/useBusiness";
import { updateMentorProfile } from "../../../../services/mentor";
import { hearOption } from "../../../../utils/utils";
import { RegionDropdown } from "react-country-region-selector";

// import { toast } from "react-toastify";
const { Option } = Select;

const Details = () => {
    const { updateMentorProfileState, updateMentorInfo } = useAuth();
    const {
        changePath,
        state: { path },
    } = useActivity();
    const { goBack, push } = useHistory();
    const { stateAuth } = useAuth();
    const [opts, setOpts] = useState("");
    const [loading, setLoading] = useState(false);
    const [buttonClicked, setButtonClicked] = useState("Save");
    const [logoUploading, setLogoUploading] = useState(false);

    const [nextloading, setNextLoading] = useState(false);
    const [logo, setLogo] = useState(
        stateAuth?.mentorData?.personalDetail?.logo !== ""
            ? stateAuth?.mentorData?.personalDetail?.logo
            : imageRep
    );
    const [phone, setPhone] = useState(
        stateAuth?.mentorData?.personalDetail?.contactInfo?.mobilenumber ?? ""
    );
    const [contacts, setContacts] = useState({
        country: stateAuth?.mentorData?.personalDetail?.country ?? "",
    });

    useEffect(() => {
        if (stateAuth?.mentorData?.personalDetail?.mobilenumber.length <= 4)
            updateMentorProfileState("personalDetail", {
                mobilenumber: "",
            });
    }, [stateAuth?.mentorData?.personalDetail?.mobilenumber]);

    const gender = [
        // { label: "--Select-gender--", value: "" },
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
    ];

    const next = () => {
        changePath(path + 1);
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
            next();
            push("#work_experience");
        }
        setLoading(false);
    };

    console.log(stateAuth?.mentorData?.personalDetail);

    const handleChange = (e, name, prefix = "") => {
        const { value } = e.target;
        // if (prefix !== "") {
        //     updateMentorProfileState("personalDetail", {
        //         [prefix]: {
        //             ...stateAuth?.mentorData?.personalDetail[prefix],
        //             [name]: value,
        //         },
        //     });
        //     return;
        // }

        updateMentorProfileState("personalDetail", {
            [name]: value,
        });
    };

    const onChangeImage = async (e) => {
        const { files } = e.target;
        const file = files[0];
        const formData = new FormData();
        formData.append("type", "image");
        formData.append("file", file);

        console.log(formData.get("file"));
        setLogoUploading(true);
        try {
            const response = await upload(formData);
            setLogo(response?.path);
            updateMentorProfileState("personalDetail", {
                logo: response?.path,
            });
        } catch (error) {
            toast.error(
                error?.response?.data?.message ?? "Unable to upload image"
            );
        }
        setLogoUploading(false);
    };

    return (
        <div className="mentor_details_form_wrap">
            <h3>Personal Details</h3>
            <p>Let’s get to know you</p>
            <Form
                name="personal-details"
                initialValues={{
                    remember: true,
                }}
                layout="vertical"
                onFinish={handleSubmit}
                className="px-3"
            >
                <div className="row mb-4">
                    <section className="col-md">
                        <div className="form-dp">
                            {logoUploading ? (
                                <CircularLoader color={"#000"} />
                            ) : (
                                <span
                                    className={
                                        logo === imageRep
                                            ? ""
                                            : "image-placeholder"
                                    }
                                >
                                    <img src={logo} alt="placeholder" />
                                </span>
                            )}

                            <span className="add-dp">
                                <input
                                    type="file"
                                    id="dp"
                                    onChange={onChangeImage}
                                />
                                <img src={add} alt="add" />
                            </span>
                        </div>
                    </section>
                </div>

                <FormCard>
                    <div className="personal_info">
                        <h4>Personal Infomation</h4>
                    </div>

                    <div className="row">
                        <section className="col-md-6 mb-4">
                            <TextField
                                label={"First Name"}
                                id="firstname"
                                type="text"
                                name="firstname"
                                errName="First Name"
                                value={
                                    stateAuth?.mentorData?.personalDetail
                                        ?.firstname
                                }
                                onChange={(e) => handleChange(e, "firstname")}
                                placeholder={"Micheal"}
                                required={true}
                            />
                        </section>
                        <section className="col-md-6 mb-4">
                            <TextField
                                label={"Last Name"}
                                id="lastname"
                                type="text"
                                name="lastname"
                                errName="Last Name"
                                value={
                                    stateAuth?.mentorData?.personalDetail
                                        ?.lastname
                                }
                                onChange={(e) => handleChange(e, "lastname")}
                                placeholder={"Smith"}
                                required={true}
                            />
                        </section>

                        <section className="col-md-6 mb-4">
                            <Form.Item
                                name="gender"
                                label="Gender"
                                initialValue={
                                    stateAuth?.mentorData?.personalDetail
                                        ?.gender
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select a gender",
                                    },
                                ]}
                            >
                                <Select
                                    id="gender"
                                    style={{
                                        width: 200,
                                        backgroundColor: "#f8f8f8",
                                    }}
                                    onChange={(e) => {
                                        handleChange(
                                            { target: { value: e } },
                                            "gender"
                                        );
                                    }}
                                >
                                    {gender.map((item, i) => (
                                        <Option value={item.value} key={i}>
                                            {item.label}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </section>

                        <section className="col-md-6 mb-4">
                            <TextField
                                label={"Designation"}
                                type="text"
                                name="designation"
                                value={
                                    stateAuth?.mentorData?.personalDetail
                                        ?.designation
                                }
                                onChange={(e) => handleChange(e, "designation")}
                                placeholder={"Ex. Engr"}
                            />
                        </section>

                        <section className="col-md-12 mb-4">
                            <TextField
                                type="email"
                                name="email"
                                value={
                                    stateAuth?.mentorData?.personalDetail?.email
                                }
                                onChange={(e) => handleChange(e, "email")}
                                label={"Email"}
                                placeholder={"michealsmith@gmail.com"}
                                required={true}
                                rows={"1"}
                            />
                        </section>
                    </div>
                </FormCard>

                <FormCard>
                    <div className="personal_info">
                        <h4>Social Media</h4>
                    </div>

                    <div className="row">
                        <section className="col-md-6 mb-4">
                            <Form.Item
                                name="linkedin"
                                label="Linkedin"
                                initialValue={
                                    stateAuth?.mentorData?.personalDetail
                                        ?.linkedin
                                }
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please enter a valid linkedin url",
                                        pattern: linkedinRegExp,
                                    },
                                ]}
                            >
                                <TextField
                                    type="text"
                                    value={
                                        stateAuth?.mentorData?.personalDetail
                                            ?.linkedin
                                    }
                                    onChange={(e) =>
                                        handleChange(e, "linkedin")
                                    }
                                    placeholder={"Enter LinkdIn link"}
                                    required={true}
                                />
                            </Form.Item>
                        </section>
                        <section className="col-md-6 mb-4">
                            <Form.Item
                                name="twitter"
                                label="Twitter"
                                initialValue={
                                    stateAuth?.mentorData?.personalDetail
                                        ?.twitter
                                }
                                rules={[
                                    {
                                        required: false,
                                        message:
                                            "Please enter a valid twitter url",
                                        pattern: twitterRegExp,
                                    },
                                ]}
                            >
                                <TextField
                                    // label={"Twitter"}
                                    type="text"
                                    // name="twitter"
                                    value={
                                        stateAuth?.mentorData?.personalDetail
                                            ?.twitter
                                    }
                                    onChange={(e) => handleChange(e, "twitter")}
                                    placeholder={"Enter Twitter link"}
                                />
                            </Form.Item>
                        </section>

                        <section className="col-md-6 mb-4">
                            <Form.Item
                                name="angelist"
                                label="AngelList"
                                initialValue={
                                    stateAuth?.mentorData?.personalDetail
                                        ?.angelist
                                }
                                rules={[
                                    {
                                        required: false,
                                        message:
                                            "Please enter a valid angelList url",
                                        pattern: angelistRegExp,
                                    },
                                ]}
                            >
                                <TextField
                                    // label={"Angelist"}
                                    type="text"
                                    // name="angelist"
                                    value={
                                        stateAuth?.mentorData?.personalDetail
                                            ?.angelist
                                    }
                                    onChange={(e) =>
                                        handleChange(e, "angelist")
                                    }
                                    placeholder={"Enter AngelList link"}
                                />
                            </Form.Item>
                        </section>
                        <section className="col-md-6 mb-4">
                            <Form.Item
                                name="crunchbase"
                                label="Crunchbase"
                                initialValue={
                                    stateAuth?.mentorData?.personalDetail
                                        ?.crunchbase
                                }
                                rules={[
                                    {
                                        required: false,
                                        message:
                                            "Please enter a valid Crunchbase url",
                                        pattern: crunchbaseRegExp,
                                    },
                                ]}
                            >
                                <TextField
                                    // label={"Crunchbase"}
                                    type="text"
                                    // name="crunchbase"
                                    value={
                                        stateAuth?.mentorData?.personalDetail
                                            ?.crunchbase
                                    }
                                    onChange={(e) =>
                                        handleChange(e, "crunchbase")
                                    }
                                    placeholder={"Enter Crunchbase link"}
                                />
                            </Form.Item>
                        </section>

                        <section className="col-md-6 mb-4">
                            <Form.Item
                                name="whatsapp"
                                label="Whatsapp"
                                initialValue={
                                    stateAuth?.mentorData?.personalDetail
                                        ?.whatsapp
                                }
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please enter a valid whatsapp url",
                                        pattern: whatsappRegExp,
                                    },
                                ]}
                            >
                                <TextField
                                    // label={"Whatsapp"}
                                    type="text"
                                    // name="whatsapp"
                                    value={
                                        stateAuth?.mentorData?.personalDetail
                                            ?.whatsapp
                                    }
                                    onChange={(e) =>
                                        handleChange(e, "whatsapp")
                                    }
                                    placeholder={"Enter Whatsapp number"}
                                    required={true}
                                />
                            </Form.Item>
                        </section>
                        <section className="col-md-6 mb-4">
                            <TextField
                                label={"Website"}
                                type="url"
                                name="website"
                                value={
                                    stateAuth?.mentorData?.personalDetail
                                        ?.website
                                }
                                onChange={(e) => handleChange(e, "website")}
                                placeholder={"Enter Webiste link"}
                                // wid
                            />
                        </section>
                    </div>
                </FormCard>

                <FormCard>
                    <div className="personal_info">
                        <h4>Contact Info</h4>
                    </div>

                    <div className="row">
                        <section className="col-md-6 mb-4">
                            <Form.Item
                                name="skypeid"
                                label="Skype Id"
                                initialValue={
                                    stateAuth?.mentorData?.personalDetail
                                        ?.skypeid
                                }
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please enter a valid skype id",
                                        pattern: skypeRegExp,
                                    },
                                ]}
                            >
                                <TextField
                                    // label={"Skype Id"}
                                    type="text"
                                    // name="skypeid"
                                    id="skypeid"
                                    value={
                                        stateAuth?.mentorData?.personalDetail
                                            ?.skypeid
                                    }
                                    onChange={(e) => handleChange(e, "skypeid")}
                                    placeholder={"live:myusername"}
                                    // required={true}
                                />
                            </Form.Item>
                        </section>
                        <section className="col-md-6 mb-4">
                            <Form.Item
                                name="googlemeet"
                                label="Google Meet"
                                initialValue={
                                    stateAuth?.mentorData?.personalDetail
                                        ?.googlemeet
                                }
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please enter a valid google meet link",
                                        pattern: googlemeetRegExp,
                                    },
                                ]}
                            >
                                <TextField
                                    // label={"Google Meet"}
                                    type="text"
                                    // name="googlemeet"
                                    id="googlemeet"
                                    value={
                                        stateAuth?.mentorData?.personalDetail
                                            ?.googlemeet
                                    }
                                    onChange={(e) =>
                                        handleChange(e, "googlemeet")
                                    }
                                    placeholder={"Enter Google Meet Link"}
                                    // required={true}
                                />
                            </Form.Item>
                        </section>
                        <section className="col-md-4 mb-4">
                            <Form.Item
                                name="country"
                                label="Country"
                                initialValue={
                                    stateAuth?.mentorData?.personalDetail
                                        ?.country
                                }
                                rules={[
                                    {
                                        // required: true,
                                        message: "Please select a country",
                                    },
                                ]}
                            >
                                <CountryDropdown
                                    id="country"
                                    type="text"
                                    name="country"
                                    className="form-control px-5 py-1 country-bg"
                                    preferredCountries={["ng"]}
                                    value={contacts.country}
                                    handleChange={(e) => {
                                        setContacts({
                                            ...contacts,
                                            country: e.target.value,
                                        });
                                        handleChange({
                                            target: {
                                                name: "country",
                                                value: e.target.value,
                                            },
                                        });
                                    }}
                                ></CountryDropdown>
                            </Form.Item>
                        </section>
                        <section className="col-md-4 mb-4">
                            <Form.Item
                                name="state"
                                label="State"
                                initialValue={
                                    stateAuth?.mentorData?.personalDetail?.state
                                }
                                rules={[
                                    {
                                        // required: true,
                                        message: "Please select a state",
                                    },
                                ]}
                            >
                                <RegionDropdown
                                    id={"state"}
                                    name={"state"}
                                    country={
                                        stateAuth?.mentorData?.personalDetail
                                            ?.country
                                    }
                                    value={
                                        stateAuth?.mentorData?.personalDetail
                                            ?.state
                                    }
                                    onChange={(e) =>
                                        handleChange({
                                            target: { name: "state", value: e },
                                        })
                                    }
                                    className="form-control ps-3"
                                />
                            </Form.Item>
                        </section>
                        <section className="col-md-4 mb-4">
                            <TextField
                                label={"City"}
                                name="city"
                                id="city"
                                type="text"
                                value={
                                    stateAuth?.mentorData?.personalDetail?.city
                                }
                                onChange={(e) => handleChange(e)}
                                placeholder={"Enter your city"}
                                // required={true}
                            />
                        </section>

                        {/* <section className="col-md-12 mb-4">
                            <TextField
                                label={"Permanent Address"}
                                type="text"
                                name="permanentaddress"
                                value={
                                    stateAuth?.mentorData?.personalDetail
                                        ?.permanentaddress
                                }
                                onChange={(e) =>
                                    handleChange(e, "permanentaddress")
                                }
                                placeholder={"Enter your permanent address"}
                                rows={"1"}
                                required={true}
                            />
                        </section> */}

                        <section
                            className="col-md-12 mb-4"
                            css={css`
                                label {
                                    display: none;
                                }
                                .ant-form-item-label > label {
                                    display: block;
                                }
                            `}
                        >
                            <Form.Item
                                name="mobilenumber"
                                label="Mobile Number"
                                initialValue={
                                    stateAuth?.mentorData?.personalDetail
                                        ?.mobilenumber
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter a mobile number",
                                    },
                                ]}
                            >
                                <PhoneInput
                                    id="mobilenumber"
                                    name="mobilenumber"
                                    value={
                                        stateAuth?.mentorData?.personalDetail
                                            ?.mobilenumber
                                    }
                                    onChange={(e) => {
                                        console.log(e.id);
                                        handleChange(
                                            {
                                                target: {
                                                    value: e.id,
                                                },
                                            },
                                            "mobilenumber"
                                        );
                                    }}
                                />
                            </Form.Item>
                        </section>
                    </div>
                </FormCard>

                <FormCard>
                    <div className="personal_info">
                        <h4>Referral</h4>
                    </div>

                    <div className="row">
                        <section className="col-md-12 mb-4">
                            <TextField
                                id="referral"
                                type="text"
                                name="referral"
                                value={
                                    stateAuth?.mentorData?.personalDetail
                                        ?.referral
                                }
                                onChange={(e) => handleChange(e)}
                                label={"Knight Ventures Referral"}
                                placeholder={"Select a user in knight ventures"}
                                rows={"1"}
                            />
                        </section>
                    </div>
                </FormCard>

                <section className="d-flex align-items-center justify-content-between">
                    {/* <button
          className="back-btn"
          onClick={() => {
            goBack()
          }}
        >
          Go Back
        </button> */}

                    <div
                        className="w-100 d-flex align-items-center justify-content-end"
                        style={{ columnGap: 9 }}
                    >
                        <Button
                            type="submit"
                            // label={loading ? <CircularLoader /> : "Save"}
                            label={"Save"}
                            disabled={loading}
                            variant="secondary"
                            onClick={() => {
                                setButtonClicked("Save");
                            }}
                        />

                        <Button
                            label={"Next"}
                            type="submit"
                            variant="primary"
                            disabled={loading}
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

export default Details;
