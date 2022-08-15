import React, { useState } from "react";
import {
    HeaderStartup,
    ImageWrapper,
    InputWrapper,
    FormWrapper,
} from "./startup.styled";
import { css } from "styled-components/macro";
import "./style.css";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";
import { DatePicker, Form, Select } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { CustomButton } from "../../../../Startupcomponents/button/button.styled";
import { useActivity } from "../../../../hooks/useBusiness";
import { CircularLoader } from "./../../../../Startupcomponents/CircluarLoader/CircularLoader";
import toast from "react-hot-toast";
import { TextField } from "../../../../Startupcomponents/textField/TextField";
import { useAuth } from "./../../../../hooks/useAuth";
import { upload } from "../../../../services/utils";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import moment from "moment";
import { TextareaCustom } from "./../../../../components/textArea/cutstomTextarea";
import { letterOnly } from "../../../../utils/helpers";
import { industry } from "../../../../constants/domiData";
import { useEffect } from "react";
import { getCountryISO, getStateISO } from "../../../../utils/helpers";
import { fetchCities } from "../../../../services";

const { Option } = Select;

export const StartupProfile = () => {
    const { changePath } = useActivity();
    const startupStage = [
        { value: "Pre-seed Stage", label: "Pre-seed Stage" },
        { value: "Seed Stage", label: "Seed Stage" },
        { value: "Early Stage", label: "Early Stage" },
        { value: "Growth Stage", label: "Growth Stage" },
        { value: "Expansion Phase", label: "Expansion Phase" },
        { value: "Exit Phase", label: "Exit Phase" },
    ];
    const companySize = [
        { value: "1-2", label: "1-2" },
        { value: "2-5", label: "2-5" },
        { value: "5-10", label: "5-10" },
        { value: "11-20", label: "11-20" },
        { value: "21-30", label: "21-30" },
        { value: "Larger than 30", label: "Larger than 30" },
    ];

    const [buttonClicked, setButtonClicked] = useState("Save");

    const [logo, setLogo] = useState(
        stateAuth?.profileData?.startupRes?.startUpProfile?.logo ?? ""
    );

    const dateFormat = "YYYY-MM-DD";
    const { updateProfile, stateAuth, updateStartupInfo } = useAuth();
    const [country, setCountry] = useState(
        stateAuth?.profileData?.startupRes?.startUpProfile?.contactInfo
            ?.country ?? ""
    );
    const [region, setRegion] = useState(
        stateAuth?.profileData?.startupRes?.startUpProfile?.contactInfo
            ?.state ?? ""
    );

    const [logoUploading, setLogoUploading] = useState(false);

    const [form] = Form.useForm();

    const handlePhoneInput = (value) => {
        updateProfile("startUpProfile", {
            contactInfo: {
                ...stateAuth?.profileData?.startupRes?.startUpProfile
                    ?.contactInfo,
                phoneNumber: value,
            },
        });
    };

    const handleCountry = (value) => {
        updateProfile("startUpProfile", {
            contactInfo: {
                ...stateAuth?.profileData?.startupRes?.startUpProfile
                    ?.contactInfo,
                country: value,
            },
        });
        setCountry(value);
        console.log(value);
    };

    const handleChangeState = (value) => {
        updateProfile("startUpProfile", {
            contactInfo: {
                ...stateAuth?.profileData?.startupRes?.startUpProfile
                    ?.contactInfo,
                state: value,
            },
        });
        setRegion(value);
        console.log(value);
    };

    const handleDateInput = (value) => {
        updateProfile("startUpProfile", {
            yearFounded: value === "" ? null : value,
        });
    };
    const onChangeImage = async (e) => {
        const { files } = e.target;
        const formData = new FormData();
        formData.append("dir", "kv");
        formData.append("ref", stateAuth.user?.userId);
        formData.append("type", "image");
        formData.append(0, files[0]);
        try {
            setLogoUploading(true);
            const response = await upload(formData);
            setLogo(response?.path);
            updateProfile("startUpProfile", {
                logo: response?.path,
            });
            setLogoUploading(false);
        } catch (error) {
            setLogoUploading(false);
            toast.error(
                error?.response?.data?.message ?? "Unable to upload image"
            );
        }
    };

    const onSubmit = async (e) => {
        // e.preventDefault();
        // form.validateFieldsAndScroll((err, values) => {
        //     if (!err) {
        //         console.log("Received values of form: ", values);
        //     }
        // });
        updateStartupInfo();
        console.log(stateAuth?.profileData);
        if (buttonClicked === "Next") changePath(2);
    };

    console.log(stateAuth);
    return (
        <>
            <HeaderStartup>
                <h5>Startup Profile</h5>
                <p>Let's get to know your startup</p>
            </HeaderStartup>

            <ImageWrapper>
                <div className="start-img-p">
                    {stateAuth?.profileData?.startupRes?.startUpProfile
                        ?.logo === null ? (
                        logoUploading ? (
                            <CircularLoader color={"#000"} />
                        ) : (
                            <AiOutlineUser size={36} color="#828282" />
                        )
                    ) : (
                        <img
                            className=""
                            src={
                                stateAuth?.profileData?.startupRes
                                    ?.startUpProfile?.logo
                            }
                            style={{
                                borderRadius: "70px",
                                width: "90px",
                                height: "90px",
                            }}
                            alt=""
                        />
                    )}
                </div>
                <InputWrapper for="dp">
                    <input
                        type="file"
                        onChange={onChangeImage}
                        id="dp"
                        hidden
                    />
                    <div>
                        <IoAdd style={{ color: "#858585" }} size="14" />
                    </div>
                </InputWrapper>
            </ImageWrapper>

            <Form
                name="Startup-Profile"
                initialValues={{
                    remember: true,
                }}
                layout="vertical"
                onFinish={onSubmit}
                // onSubmit={onSubmit}
                // onFinishFailed={({ errorFields }) => {
                //     form.scrollToField(errorFields[0].name);
                // }}
                // onFin
                className="px-3"
                form={form}
                validateTrigger="onFinish"
            >
                <FormWrapper className="pe-5">
                    <div className="div border-bottom pb-3">
                        <span className="">Startup profile</span>
                    </div>

                    <div className="row fields">
                        <div className="form-group form-group-spacee col-12">
                            <TextareaCustom
                                name={"elevatorPitch"}
                                label={"Elevator Pitch"}
                                value={
                                    stateAuth?.profileData?.startupRes
                                        ?.startUpProfile?.elevatorPitch
                                }
                                onChange={(e) =>
                                    updateProfile("startUpProfile", {
                                        elevatorPitch: e.target.value,
                                    })
                                }
                                min={100}
                                maxLength={150}
                                onKeyPress={letterOnly}
                                placeholder="One line pitch 150 words maximum"
                            />
                        </div>
                        <div className="form-group form-group-spacee col-lg-6 col-12">
                            <TextField
                                label="Startup Name"
                                name={"startupName"}
                                value={
                                    stateAuth?.profileData?.startupRes
                                        ?.startUpProfile?.startupName ??
                                    stateAuth?.startupname
                                }
                                required={true}
                                disabled={true}
                            />
                        </div>
                        <div className="form-group form-group-spacee col-lg-6 col-12">
                            <TextField
                                label="Brand"
                                name={"brand"}
                                onChange={(e) =>
                                    updateProfile("startUpProfile", {
                                        brand: e.target.value,
                                    })
                                }
                                value={
                                    stateAuth?.profileData?.startupRes
                                        ?.startUpProfile?.brand
                                }
                                required={true}
                                placeholder="eg; Knight Ventures"
                            />
                        </div>
                        <div className="form-group form-group-spacee col-lg-6 col-12">
                            <Form.Item
                                name="yearFounded"
                                label="Year Founded"
                                initialValue={
                                    stateAuth?.profileData?.startupRes
                                        ?.startUpProfile?.yearFounded
                                        ? moment(
                                              stateAuth?.profileData?.startupRes
                                                  ?.startUpProfile?.yearFounded
                                          )
                                        : undefined
                                }
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please select the year founded",
                                    },
                                ]}
                            >
                                <DatePicker
                                    className="col-md-12 py-2 px-2"
                                    id="yearFounded"
                                    name="yearFounded"
                                    defaultValue={
                                        stateAuth?.profileData?.startupRes
                                            ?.startUpProfile?.yearFounded
                                            ? moment(
                                                  stateAuth?.profileData
                                                      ?.startupRes
                                                      ?.startUpProfile
                                                      ?.yearFounded
                                              )
                                            : undefined
                                    }
                                    format={dateFormat}
                                    onChange={(_, dateString) => {
                                        console.log(dateString);
                                        return dateString;
                                    }}
                                    handleDateInput
                                />
                            </Form.Item>
                        </div>

                        <div className="form-group form-group-spacee col-lg-6 col-12">
                            <TextField
                                label="Business Registration Number"
                                name={"registrationNumber"}
                                onChange={(e) =>
                                    updateProfile("startUpProfile", {
                                        registrationNumber: e.target.value,
                                    })
                                }
                                value={
                                    stateAuth?.profileData?.startupRes
                                        ?.startUpProfile?.registrationNumber ||
                                    stateAuth?.phone
                                }
                                required={true}
                                placeholder="eg; 1234567890"
                            />
                        </div>

                        <div className="form-group form-group-spacee col-lg-6 col-12">
                            <Form.Item
                                name="companySize"
                                label="Company Size"
                                initialValue={
                                    stateAuth?.profileData?.startupRes
                                        ?.startUpProfile?.companySize
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select a Company Size",
                                    },
                                ]}
                            >
                                <Select
                                    id="companySize"
                                    style={{ width: 200 }}
                                    placeholder="Enter company size"
                                    onChange={(e) =>
                                        updateProfile("startUpProfile", {
                                            companySize: e,
                                        })
                                    }
                                >
                                    {companySize.map((item, i) => (
                                        <Option value={item.value} key={i}>
                                            {" "}
                                            {item.label}{" "}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>

                        <div className="form-group form-group-spacee col-lg-6 col-12">
                            <Form.Item
                                name="businessSector"
                                label="Which sector does your business operate in?"
                                initialValue={
                                    stateAuth?.profileData?.startupRes
                                        ?.startUpProfile?.businessSector
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select a sector",
                                    },
                                ]}
                            >
                                <Select
                                    id="businessSector"
                                    style={{ width: 200 }}
                                    onChange={(e) =>
                                        updateProfile("startUpProfile", {
                                            businessSector: e,
                                        })
                                    }
                                >
                                    {industry.map((item, i) => (
                                        <Option value={item} key={i}>
                                            {" "}
                                            {item}{" "}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>

                        <div className="form-group form-group-spacee col-lg-6 col-12">
                            <Form.Item
                                name="startupStage"
                                label="What stage is your startup in ?"
                                initialValue={
                                    stateAuth?.profileData?.startupRes
                                        ?.startUpProfile?.startupStage
                                }
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please select a startup stage",
                                    },
                                ]}
                            >
                                <Select
                                    id="startupStage"
                                    style={{ width: 200 }}
                                    placeholder="Enter business stage"
                                    onChange={(e) =>
                                        updateProfile("startUpProfile", {
                                            startupStage: e,
                                        })
                                    }
                                >
                                    {startupStage.map((item, i) => (
                                        <Option value={item.value} key={i}>
                                            {" "}
                                            {item.label}{" "}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>

                        <div className="form-group col-12">
                            <TextField
                                label="Enter the name of Accelerator / Incubator in case you've worked
                with any"
                                name={"acceleratorName"}
                                onChange={(e) =>
                                    updateProfile("startUpProfile", {
                                        acceleratorName: e.target.value,
                                    })
                                }
                                value={
                                    stateAuth?.profileData?.startupRes
                                        ?.startUpProfile?.acceleratorName
                                }
                                required={false}
                                placeholder="Enter Accelerator name"
                            />
                        </div>
                    </div>
                </FormWrapper>

                <FormWrapper height="70%">
                    <div className="div border-bottom pb-3">
                        <span>Contact info</span>
                    </div>

                    <div className="row fields">
                        <div
                            className="form-group form-group-spacee col-12"
                            style={{ marginBottom: "42px" }}
                        >
                            <TextField
                                label=" Registered Address"
                                name={"registeredAddress"}
                                onChange={(e) =>
                                    updateProfile("startUpProfile", {
                                        contactInfo: {
                                            ...stateAuth?.profileData
                                                ?.startupRes?.startUpProfile
                                                ?.contactInfo,
                                            registeredAddress: e.target.value,
                                        },
                                    })
                                }
                                value={
                                    stateAuth?.profileData?.startupRes
                                        ?.startUpProfile?.contactInfo
                                        ?.registeredAddress
                                }
                                required={true}
                                placeholder="Enter your registered address"
                            />
                        </div>
                        <div className="form-group form-group-spacee col-lg-4 col-12 select-field">
                            <Form.Item
                                name="country"
                                label="Country"
                                initialValue={
                                    stateAuth?.profileData?.startupRes
                                        ?.startUpProfile?.contactInfo?.country
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select a country",
                                    },
                                ]}
                            >
                                <CountryDropdown
                                    name="country"
                                    className="form-control px-5 py-1 country-bg"
                                    value={country}
                                    onChange={(value) => handleCountry(value)}
                                />
                            </Form.Item>
                        </div>
                        <div className="form-group form-group-spacee col-lg-4 col-12 select-field">
                            <Form.Item
                                name="state"
                                label="State"
                                initialValue={
                                    stateAuth?.profileData?.startupRes
                                        ?.startUpProfile?.contactInfo?.state
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select a state",
                                    },
                                ]}
                            >
                                <RegionDropdown
                                    name="state"
                                    country={country}
                                    value={
                                        stateAuth?.profileData?.startupRes
                                            ?.startUpProfile?.contactInfo
                                            ?.state ?? ""
                                    }
                                    onChange={(value) =>
                                        handleChangeState(value)
                                    }
                                    className="form-control ps-3"
                                />
                            </Form.Item>
                        </div>
                        <div className="form-group form-group-spacee col-lg-4 col-12">
                            <TextField
                                label="City"
                                name={"city"}
                                onChange={(e) =>
                                    updateProfile("startUpProfile", {
                                        contactInfo: {
                                            ...stateAuth?.profileData
                                                ?.startupRes?.startUpProfile
                                                ?.contactInfo,
                                            city: e.target.value,
                                        },
                                    })
                                }
                                value={
                                    stateAuth?.profileData?.startupRes
                                        ?.startUpProfile?.contactInfo?.city
                                }
                                required={true}
                                placeholder="Enter your registered address"
                            />
                        </div>
                        <div className="form-group form-group-spacee col-lg-6 col-12 field">
                            <Form.Item
                                name="phoneNumber"
                                label="Mobile Number"
                                initialValue={
                                    stateAuth?.profileData?.startupRes
                                        ?.startUpProfile?.contactInfo
                                        ?.phoneNumber || stateAuth?.phone
                                }
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please enter a mobile number.",
                                    },
                                ]}
                            >
                                <PhoneInput
                                    id="phoneNumber"
                                    international
                                    name="phoneNumber"
                                    countryCallingCodeEditable={true}
                                    className="custs ps-3 py-2"
                                    value={
                                        stateAuth?.profileData?.startupRes
                                            ?.startUpProfile?.contactInfo
                                            ?.phoneNumber || stateAuth?.phone
                                    }
                                    onChange={handlePhoneInput}
                                    MaxLength={17}
                                    css={css`
                                        padding-top: 0 !important;
                                        padding-bottom: 0 !important;
                                    `}
                                />
                            </Form.Item>
                        </div>
                        <div className="form-group col-lg-6 col-12">
                            <TextField
                                label="Company Email"
                                name={"companyEmail"}
                                onChange={(e) =>
                                    updateProfile("startUpProfile", {
                                        contactInfo: {
                                            ...stateAuth?.profileData
                                                ?.startupRes?.startUpProfile
                                                ?.contactInfo,
                                            companyEmail: e.target.value,
                                        },
                                    })
                                }
                                value={
                                    stateAuth?.profileData?.startupRes
                                        ?.startUpProfile?.contactInfo
                                        ?.companyEmail || stateAuth?.email
                                }
                                required={true}
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                </FormWrapper>

                <FormWrapper height="70%">
                    <div className="div border-bottom pb-3">
                        <span>Web & Social Media</span>
                    </div>

                    <div className="row fields">
                        <div className="form-group form-group-spacee col-lg-6 col-12">
                            <TextField
                                id="profileHandle"
                                label="What should be your startup profile handle?"
                                type="text"
                                name="profileHandle"
                                value={`knight.venture/${
                                    stateAuth?.user?.businessname ||
                                    stateAuth?.startupName
                                }`}
                                disabled={true}
                                required={true}
                                placeholder="Enter your startup profile handle"
                            />
                        </div>
                        <div className="form-group form-group-spacee col-lg-6 col-12">
                            <TextField
                                label="Company Website"
                                type={"url"}
                                name={"companyWebsite"}
                                onChange={(e) =>
                                    updateProfile("startUpProfile", {
                                        contactInfo: {
                                            ...stateAuth?.profileData
                                                ?.startupRes?.startUpProfile
                                                ?.contactInfo,
                                            companyWebsite: e.target.value,
                                        },
                                    })
                                }
                                value={
                                    stateAuth?.profileData?.startupRes
                                        ?.startUpProfile?.contactInfo
                                        ?.companyWebsite
                                }
                                required={true}
                                placeholder="Enter your website url"
                            />
                        </div>
                        <div className="form-group form-group-spacee col-lg-6 col-12">
                            <TextField
                                label="Linkedin"
                                name={"linkedInHandle"}
                                onChange={(e) =>
                                    updateProfile("startUpProfile", {
                                        contactInfo: {
                                            ...stateAuth?.profileData
                                                ?.startupRes?.startUpProfile
                                                ?.contactInfo,
                                            linkedInHandle: e.target.value,
                                        },
                                    })
                                }
                                value={
                                    stateAuth?.profileData?.startupRes
                                        ?.startUpProfile?.contactInfo
                                        ?.linkedInHandle
                                }
                                required={true}
                                type={"url"}
                                placeholder="Enter your Linkedin profile name"
                            />
                        </div>
                        <div className="form-group form-group-spacee col-lg-6 col-12">
                            <TextField
                                label="Twitter"
                                type={"url"}
                                name={"twitterHandle"}
                                onChange={(e) =>
                                    updateProfile("startUpProfile", {
                                        contactInfo: {
                                            ...stateAuth?.profileData
                                                ?.startupRes?.startUpProfile
                                                ?.contactInfo,
                                            twitterHandle: e.target.value,
                                        },
                                    })
                                }
                                value={
                                    stateAuth?.profileData?.startupRes
                                        ?.startUpProfile?.contactInfo
                                        ?.twitterHandle
                                }
                                required={true}
                                placeholder="Enter your Twitter profile name"
                            />
                        </div>
                    </div>
                    <div className="d-flex my-4 justify-content-end">
                        <div>
                            <CustomButton
                                type="submit"
                                background="#06ADEF"
                                onClick={() => {
                                    setButtonClicked("Save");
                                }}
                            >
                                Save
                            </CustomButton>
                        </div>
                        <div className="mx-2">
                            <CustomButton
                                type="submit"
                                onClick={() => {
                                    console.log(
                                        "nextttttttttttttttttttttttttttttt"
                                    );
                                    // updateStartupInfo();

                                    setButtonClicked("Next");
                                    // if (validated) {

                                    //     changePath(2);
                                    // }
                                }}
                                background="#2E3192"
                            >
                                Next
                            </CustomButton>
                        </div>
                    </div>
                </FormWrapper>
            </Form>
        </>
    );
};
