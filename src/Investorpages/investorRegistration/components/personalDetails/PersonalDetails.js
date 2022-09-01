import React, { useState } from "react";
import imageRep from "../../../../assets/icons/avatar.svg";
import add from "../../../../assets/icons/addFile.svg";
import FormCard from "../../../partnerRegisteration/components/formCard/FormCard";
import { RowOption, Button } from "../../../../components";
import { TextField } from "../../../../Startupcomponents";
import { useHistory } from "react-router-dom";
import { Input, Form, Select, DatePicker } from "antd";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { AiOutlineUser } from "react-icons/ai";
import { useAuth, useActivity } from "../../../../hooks";
import { upload } from "../../../../services/utils";
import { CircularLoader } from "../../../../components/CircluarLoader/CircularLoader";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import moment from "moment";
import "./PersonalDetails.css";
import { twitterRegExp, linkedinRegExp } from "../../../../utils/utils";
import { editUser } from "../../../../services";

export const PersonalDetails = () => {
    const hearOption = [
        "news",
        "social media",
        "internet search",
        "referral from startup",
        "referral from investor",
    ];

    const {
        updateInvestorProfileData,
        stateAuth,
        updateInvestorInfo,
        updateUserObj,
    } = useAuth();
    const { push } = useHistory();
    const {
        changePath,
        state: { path },
    } = useActivity();
    // const [loading, setLoading] = useState(false);
    const [logoUploading, setLogoUploading] = useState(false);
    const [buttonClicked, setButtonClicked] = useState("Save");
    // const [nextLoading, setNextLoading] = useState(false);
    const [avatar, setAvatar] = useState(
        stateAuth?.investorData?.profile?.avatar ?? imageRep
    );

    const next = () => {
        changePath(path + 1);
    };

    const onFinish = async () => {
        const uploaded = updateInvestorInfo();

        if (uploaded) {
            toast.success("Saved Successfully");
        } else {
            toast.error("Something went wrong");
        }

        if (uploaded && buttonClicked === "Next") {
            next();
            push("#investor");
        }
    };

    const onChangeImage = async (e) => {
        const { files } = e.target;
        const formData = new FormData();
        formData.append("type", "image");
        formData.append("file", files[0]);
        setLogoUploading(true);
        try {
            const response = await upload(formData);
            setAvatar(response?.path);

            const samplePayload = {
                payload: {
                    avatar: response?.path,
                },
            };
            console.log(samplePayload);
            const updateAvatar = await editUser(samplePayload);
            await updateUserObj({ avatar: response?.path });
        } catch (error) {
            toast.error(
                error?.response?.data?.message ?? "Unable to upload image"
            );
        }
        setLogoUploading(false);
    };

    const handleSocialInput = (e, name) => {
        const { value } = e.target;
        console.log(name, value);
        updateInvestorProfileData("profile", {
            socialMedia: {
                ...stateAuth?.investorData?.profile.socialMedia,
                [name]: value,
            },
        });
    };

    const handleMobileInput = (value) => {
        updateInvestorProfileData("profile", {
            mobile_number: value,
        });
    };

    const [country, setCountry] = useState(
        stateAuth?.investorData?.profile?.country ?? ""
    );
    const [region, setRegion] = useState(
        stateAuth?.investorData?.profile?.state ?? ""
    );

    const handleCountry = (value) => {
        updateInvestorProfileData("profile", {
            ...stateAuth?.investorData?.profile?.country,
            country: value,
        });
        setCountry(value);
        console.log(value);
    };

    const handleChangeState = (value) => {
        updateInvestorProfileData("profile", {
            ...stateAuth?.investorData?.profile?.state,
            state: value,
        });
        setRegion(value);
        console.log(value);
    };

    const handleDateInput = (value) => {
        updateInvestorProfileData("profile", {
            dob: value,
        });
    };

    const dateFormat = "YYYY-MM-DD";

    // console.log(stateAuth?.investorData);

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
            <h3 style={{ color: "#2e3192" }}>Personal Details</h3>
            <p>Let’s get to know you</p>
            {/* <form onSubmit={formik.handleSubmit}> */}
            <Form
                onFinish={onFinish}
                layout="vertical"
                initialValues={{ remember: true }}
                className="px-3"
                style={{ marginTop: "1.5rem" }}
            >
                <div className="form-dp mb-4 bg-white">
                    {!stateAuth?.userObj?.avatar ? (
                        logoUploading ? (
                            <CircularLoader color={"#000"} />
                        ) : (
                            <AiOutlineUser size={36} color="#828282" />
                        )
                    ) : logoUploading ? (
                        <CircularLoader color={"#000"} />
                    ) : (
                        <span className={"image-placeholder"}>
                            <img
                                src={stateAuth?.userObj?.avatar}
                                alt="placeholder"
                            />
                        </span>
                    )}
                    <span className="add-dp">
                        <input
                            type="file"
                            id="dp"
                            onChange={onChangeImage}
                            accept="image/*"
                        />
                        <img src={add} alt="add" />
                    </span>
                </div>
                <FormCard title="Personal Information">
                    <div className="row">
                        <section className="col-12 mb-4">
                            <TextField
                                label="Brief Introduction"
                                id={"briefIntroduction"}
                                name={"briefIntroduction"}
                                onKeyPress={letterOnly}
                                type={"text"}
                                value={
                                    stateAuth?.investorData?.profile
                                        ?.briefIntroduction
                                }
                                required={true}
                                placeholder={"Enter brief bio about you"}
                                className={"edit_input"}
                                onChange={(e) =>
                                    updateInvestorProfileData("profile", {
                                        briefIntroduction: e.target.value,
                                    })
                                }
                            />
                        </section>
                        <section className="col-md-6 mb-4">
                            <TextField
                                label="First Name"
                                id={"firstName"}
                                name={"firstName"}
                                onKeyPress={letterOnly}
                                type={"text"}
                                value={
                                    stateAuth?.investorData?.profile?.firstName
                                }
                                placeholder={"Enter first name"}
                                className={"edit_input text-black"}
                                onChange={(e) =>
                                    updateInvestorProfileData("profile", {
                                        firstName: e.target.value,
                                    })
                                }
                                required={true}
                            />
                        </section>

                        <section className="col-md-6 mb-4">
                            <TextField
                                label="Last Name"
                                id={"lastName"}
                                name={"lastName"}
                                onKeyPress={letterOnly}
                                type={"text"}
                                value={
                                    stateAuth?.investorData?.profile?.lastName
                                }
                                placeholder={"Enter last name"}
                                className={"edit_input text-black"}
                                onChange={(e) =>
                                    updateInvestorProfileData("profile", {
                                        lastName: e.target.value,
                                    })
                                }
                                required={true}
                            />
                        </section>

                        <section className="col-md-6 mb-4">
                            <TextField
                                label="Email"
                                id={"email"}
                                name={"email"}
                                value={stateAuth?.investorData?.profile?.email}
                                placeholder={"Enter email"}
                                type={"email"}
                                className={"edit_input text-black"}
                                onChange={(e) =>
                                    updateInvestorProfileData("profile", {
                                        email: e.target.value,
                                    })
                                }
                                required={true}
                            />
                        </section>

                        <section className="col-md-6 mb-4">
                            <Form.Item
                                // name="dob"
                                label="Date of Birth"
                                initialValue={
                                    stateAuth?.investorData?.profile?.dob
                                        ? moment(
                                              stateAuth?.investorData?.profile
                                                  ?.dob
                                          )
                                        : undefined
                                }
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please select your date of birth.",
                                    },
                                ]}
                            >
                                <DatePicker
                                    // label="Date of Birth"
                                    style={{
                                        border: "none",
                                        background: "#f8f8f8",
                                    }}
                                    id={"dob"}
                                    name={"dob"}
                                    required={true}
                                    defaultValue={
                                        stateAuth?.investorData?.profile?.dob
                                            ? moment(
                                                  stateAuth?.investorData
                                                      ?.profile?.dob
                                              )
                                            : undefined
                                    }
                                    placeholder="yyyy-mm-dd"
                                    className={"edit_input py-2"}
                                    format={dateFormat}
                                    onChange={(_, dateString) => {
                                        console.log(_, dateString);
                                        handleDateInput(dateString);
                                    }}
                                />
                            </Form.Item>
                        </section>
                    </div>
                </FormCard>

                <FormCard title="Contact Info">
                    <div className="row mb-4">
                        <section className="col-12 mb-4">
                            <TextField
                                label="Registered Address"
                                id={"address"}
                                name={"address"}
                                type={"text"}
                                required={true}
                                placeholder={"Enter your registered address"}
                                className={"edit_input"}
                                onChange={(e) =>
                                    updateInvestorProfileData("profile", {
                                        address: e.target.value,
                                    })
                                }
                                value={
                                    stateAuth?.investorData?.profile?.address
                                }
                            />
                        </section>

                        <section className="col-lg-4 mb-4">
                            <Form.Item
                                name="country"
                                label="Country"
                                initialValue={
                                    stateAuth?.investorData?.profile?.country
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select a country",
                                    },
                                ]}
                            >
                                <CountryDropdown
                                    id={"country"}
                                    name={"country"}
                                    className="form-control ps-3 py-1 investor-country"
                                    value={country}
                                    onChange={(value) => handleCountry(value)}
                                />
                            </Form.Item>
                        </section>

                        <section className="col-lg-4 mb-4">
                            <Form.Item
                                name="state"
                                label="State"
                                initialValue={
                                    stateAuth?.investorData?.profile?.state
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select a state",
                                    },
                                ]}
                            >
                                <RegionDropdown
                                    id={"state"}
                                    name={"state"}
                                    country={country}
                                    value={region}
                                    onChange={(value) =>
                                        handleChangeState(value)
                                    }
                                    className="form-control ps-3"
                                />
                            </Form.Item>
                        </section>

                        <section className="col-lg-4 mb-4">
                            <TextField
                                label="City"
                                id={"city"}
                                name={"city"}
                                type={"text"}
                                onKeyPress={letterOnly}
                                required={true}
                                value={stateAuth?.investorData?.profile?.city}
                                placeholder={"Enter your city"}
                                className={"edit_input"}
                                onChange={(e) =>
                                    updateInvestorProfileData("profile", {
                                        city: e.target.value,
                                    })
                                }
                            />
                        </section>

                        <section className="col-lg-6 mb-4">
                            <Form.Item
                                name="mobile_number"
                                label="Mobile Number"
                                initialValue={
                                    stateAuth?.investorData?.profile
                                        ?.mobile_number
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter a mobile number",
                                    },
                                ]}
                            >
                                <PhoneInput
                                    id={"mobile_number"}
                                    international
                                    name={"mobile_number"}
                                    className={"in-reg-no py-1"}
                                    countryCallingCodeEditable={true}
                                    placeholder={"+234 000 0000 000"}
                                    maxLength={17}
                                    value={
                                        stateAuth?.investorData?.profile
                                            ?.mobile_number
                                    }
                                    onChange={(e) => handleMobileInput(e)}
                                />
                            </Form.Item>
                        </section>
                        <section className="col-lg-6 mb-4">
                            {/* <label>
                Company Email<span style={{ color: 'red' }}>*</span>
              </label> */}
                            <TextField
                                label="Company Email"
                                id={"companyEmail"}
                                name={"companyEmail"}
                                value={
                                    stateAuth?.investorData?.profile
                                        ?.companyEmail
                                }
                                required={true}
                                placeholder={"E.g. info@knight.ventures"}
                                className={"edit_input"}
                                type={"email"}
                                onChange={(e) =>
                                    updateInvestorProfileData("profile", {
                                        companyEmail: e.target.value,
                                    })
                                }
                            />
                        </section>
                    </div>
                </FormCard>

                <FormCard title="Web & Social Media">
                    <div className="row mb-4">
                        <section className="col-lg-6 mb-4">
                            {/* <label>
                Profile Link<span style={{ color: 'red' }}>*</span>
              </label> */}
                            <TextField
                                label="Profile Link"
                                id={"profileLink"}
                                name={"profileLink"}
                                type={"url"}
                                // value={stateAuth?.investorData?.profile.socialMedia?.profileLink}
                                value={`https://www.knight.ventures/${stateAuth?.firstname}${stateAuth?.lastname}`}
                                disabled
                                placeholder={"Enter linkedin link"}
                                className={"edit_input text-black"}
                                // onChange={(e) =>  handleSocialInput(e , 'profileLink')}
                            />
                        </section>

                        <section className="col-lg-6 mb-4">
                            {/* <label>
                Website<span style={{ color: 'red' }}>*</span>
              </label> */}
                            <TextField
                                label="Website"
                                id={"website"}
                                name={"website"}
                                type={"url"}
                                required={true}
                                placeholder={"Enter website"}
                                value={
                                    stateAuth?.investorData?.profile.socialMedia
                                        ?.website
                                }
                                className={"edit_input"}
                                onChange={(e) =>
                                    handleSocialInput(e, "website")
                                }
                            />
                        </section>

                        <section className="col-lg-6 mb-4">
                            <Form.Item
                                name="linkedIn"
                                label="LinkedIn"
                                initialValue={
                                    stateAuth?.investorData?.profile.socialMedia
                                        ?.linkedIn
                                }
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please enter a valid LinkedIn url",
                                        pattern: linkedinRegExp,
                                    },
                                ]}
                            >
                                <TextField
                                    // label="LinkedIn"
                                    id={"linkedIn"}
                                    // name={"linkedIn"}
                                    type={"text"}
                                    value={
                                        stateAuth?.investorData?.profile
                                            .socialMedia?.linkedIn
                                    }
                                    required={true}
                                    placeholder={"Enter linkedin link"}
                                    className={"edit_input"}
                                    onChange={(e) =>
                                        handleSocialInput(e, "linkedIn")
                                    }
                                />
                            </Form.Item>
                        </section>

                        <section className="col-lg-6 mb-4">
                            <Form.Item
                                name="twitter"
                                label="Twitter"
                                initialValue={
                                    stateAuth?.investorData?.profile.socialMedia
                                        ?.twitter
                                }
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please enter a valid twitter url",
                                        pattern: twitterRegExp,
                                    },
                                ]}
                            >
                                <TextField
                                    // label="Twitter"
                                    id={"twitter"}
                                    // name={"twitter"}
                                    type={"text"}
                                    value={
                                        stateAuth?.investorData?.profile
                                            .socialMedia?.twitter
                                    }
                                    required={true}
                                    placeholder={"Enter twitter link"}
                                    className={"edit_input"}
                                    onChange={(e) =>
                                        handleSocialInput(e, "twitter")
                                    }
                                />
                            </Form.Item>
                        </section>
                    </div>
                </FormCard>

                <FormCard title="Referral">
                    <div className="row mb-4">
                        <section className="col-12 mb-4">
                            {/* <label>
                Referral<span style={{ color: 'red' }}>*</span>
              </label> */}
                            <TextField
                                label="Referral"
                                id={"referral"}
                                name={"referral"}
                                type={"text"}
                                onKeyPress={letterOnly}
                                value={
                                    stateAuth?.investorData?.profile.referral
                                }
                                placeholder="Enter a user in knight ventures"
                                className="edit_input"
                                onChange={(e) =>
                                    updateInvestorProfileData("profile", {
                                        referral: e.target.value,
                                    })
                                }
                            />
                        </section>

                        <section className="col-12 mb-4">
                            <p className="mb-3">
                                How did you hear about Knight Venture?
                            </p>
                            <div>
                                <RowOption
                                    currentSelected={
                                        stateAuth?.investorData?.profile
                                            ?.howDidYouAboutUs
                                    }
                                    getSelected={(value) =>
                                        updateInvestorProfileData("profile", {
                                            howDidYouAboutUs: value,
                                        })
                                    }
                                    options={hearOption}
                                />
                            </div>
                        </section>
                    </div>
                </FormCard>

                <section
                    className="d-flex align-items-center justify-content-end my-4"
                    style={{ columnGap: 9 }}
                >
                    <Button
                        type={"submit"}
                        label={"Save"}
                        variant="secondary"
                        onClick={() => {
                            setButtonClicked("Save");
                        }}
                    />
                    <Button
                        type={"submit"}
                        label={"Next"}
                        variant="primary"
                        // disabled={nextLoading}
                        onClick={() => {
                            setButtonClicked("Next");
                        }}
                    />
                    {/* <Button
          label={nextLoading ? <CircularLoader /> : "Next"} 
          variant="primary"
          disabled={nextLoading}
          onClick={() => changePath(2)}
          type="button"
        /> */}
                </section>
            </Form>
        </div>
    );
};
