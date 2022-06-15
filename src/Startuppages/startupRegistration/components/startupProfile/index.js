import React, { useState } from "react";
import {
    HeaderStartup,
    ImageWrapper,
    InputWrapper,
    FormWrapper,
} from "./startup.styled";
import "./style.css";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";
import { DatePicker, Form, Select } from "antd";
import { AiOutlineUser } from "react-icons/ai";
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

    const dateFormat = "YYYY-MM-DD";
    const { updateProfile, stateAuth, updateStartupInfo } = useAuth();
    const [country, setCountry] = useState(
        stateAuth?.startupData?.startUpProfile?.contactInfo?.country ?? ""
    );
    const [region, setRegion] = useState(
        stateAuth?.startupData?.startUpProfile?.contactInfo?.state ?? ""
    );

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [logo, setLogo] = useState(
        stateAuth?.startupData?.startUpProfile?.logo
    );

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [logoUploading, setLogoUploading] = useState(false);

    console.log(stateAuth);

    const handlePhoneInput = (value) => {
        updateProfile("startUpProfile", {
            contactInfo: {
                ...stateAuth?.startupData?.startUpProfile?.contactInfo,
                phoneNumber: value,
            },
        });
    };

    const handleCountry = (value) => {
        updateProfile("startUpProfile", {
            contactInfo: {
                ...stateAuth?.startupData?.startUpProfile?.contactInfo,
                country: value,
            },
        });
        setCountry(value);
        console.log(value);
    };

    console.log(stateAuth?.startupData);

    const handleChangeState = (value) => {
        updateProfile("startUpProfile", {
            contactInfo: {
                ...stateAuth?.startupData?.startUpProfile?.contactInfo,
                state: value,
            },
        });
        setRegion(value);
        console.log(value);
    };

    const handleDateInput = (value) => {
        updateProfile("startUpProfile", {
            yearFounded: value,
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
        updateStartupInfo();
        console.log(stateAuth?.startupData);
    };
    //console.log(stateAuth)
    return (
        <>
            <HeaderStartup>
                <h5>Startup Profile</h5>
                <p>Let's get to know your startup</p>
            </HeaderStartup>

            <ImageWrapper>
                <div className="start-img-p">
                    {stateAuth?.startupData?.startUpProfile?.logo === null ? (
                        logoUploading ? (
                            <CircularLoader color={"#000"} />
                        ) : (
                            <AiOutlineUser size={36} />
                        )
                    ) : (
                        <img
                            className=""
                            src={stateAuth?.startupData?.startUpProfile?.logo}
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
                    <PlusOutlined style={{ color: "white" }} />
                </InputWrapper>
            </ImageWrapper>

            <Form
                name="Startup-Profile"
                initialValues={{
                    remember: true,
                }}
                layout="vertical"
                onFinish={onSubmit}
            >
                <FormWrapper className="pe-5">
                    <div className="div border-bottom pb-3">
                        <span className="">Startup profile</span>
                    </div>

                    <div className="row fields">
                        <div className="form-group form-group-spacee col-12">
                            <TextareaCustom
                                name={"elevatorPitch"}
                                label={" Elevator Pitch"}
                                value={
                                    stateAuth?.startupData?.startUpProfile
                                        ?.elevatorPitch
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
                                    stateAuth?.startupData?.startUpProfile
                                        ?.startupName ?? stateAuth?.startupname
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
                                    stateAuth?.startupData?.startUpProfile
                                        ?.brand
                                }
                                required={true}
                                placeholder="eg; Knight Ventures"
                            />
                        </div>
                        <div className="form-group form-group-spacee col-lg-6 col-12">
                            <label>
                                Year Founded
                                <span style={{ color: "red" }}>*</span>
                            </label>
                            <DatePicker
                                className="col-md-12 py-2 px-2"
                                id="yearFounded"
                                name="yearFounded"
                                defaultValue={
                                    stateAuth?.startupData?.startUpProfile
                                        ?.yearFounded !== null
                                        ? moment(
                                              stateAuth?.startupData
                                                  ?.startUpProfile?.yearFounded
                                          )
                                        : moment()
                                }
                                format={dateFormat}
                                onChange={(_, dateString) =>
                                    handleDateInput(dateString)
                                }
                            />
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
                                    stateAuth?.startupData?.startUpProfile
                                        ?.registrationNumber
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
                                    stateAuth?.startupData?.startUpProfile
                                        ?.companySize
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
                                    stateAuth?.startupData?.startUpProfile
                                        ?.businessSector
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
                                    stateAuth?.startupData?.startUpProfile
                                        ?.startupStage
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
                                    stateAuth?.startupData?.startUpProfile
                                        ?.acceleratorName
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
                                            ...stateAuth?.startupData
                                                ?.startUpProfile?.contactInfo,
                                            registeredAddress: e.target.value,
                                        },
                                    })
                                }
                                value={
                                    stateAuth?.startupData?.startUpProfile
                                        ?.contactInfo?.registeredAddress
                                }
                                required={true}
                                placeholder="Enter your registered address"
                            />
                        </div>
                        <div className="form-group form-group-spacee col-lg-4 col-12">
                            <label>
                                Country<span style={{ color: "red" }}>*</span>
                            </label>
                            <CountryDropdown
                                name="country"
                                className="form-control px-5 py-1 country-bg"
                                value={country}
                                onChange={(value) => handleCountry(value)}
                            ></CountryDropdown>
                        </div>
                        <div className="form-group form-group-spacee col-lg-4 col-12">
                            <label>
                                State<span style={{ color: "red" }}>*</span>
                            </label>
                            <RegionDropdown
                                name="state"
                                country={country}
                                value={
                                    stateAuth?.startupData?.startUpProfile
                                        ?.contactInfo?.state ?? ""
                                }
                                onChange={(value) => handleChangeState(value)}
                                className="form-control ps-3"
                            />
                        </div>
                        <div className="form-group form-group-spacee col-lg-4 col-12">
                            <TextField
                                label="City"
                                name={"city"}
                                onChange={(e) =>
                                    updateProfile("startUpProfile", {
                                        contactInfo: {
                                            ...stateAuth?.startupData
                                                ?.startUpProfile?.contactInfo,
                                            city: e.target.value,
                                        },
                                    })
                                }
                                value={
                                    stateAuth?.startupData?.startUpProfile
                                        ?.contactInfo?.city
                                }
                                required={true}
                                placeholder="Enter your registered address"
                            />
                        </div>
                        <div className="form-group form-group-spacee col-lg-6 col-12 ">
                            <label>
                                Mobile Number
                                <span style={{ color: "red" }}>*</span>
                            </label>
                            <PhoneInput
                                id="phoneNumber"
                                international
                                name="phoneNumber"
                                countryCallingCodeEditable={true}
                                className="custs ps-3 py-2"
                                value={
                                    stateAuth?.startupData?.startUpProfile
                                        ?.contactInfo?.phoneNumber
                                }
                                onChange={handlePhoneInput}
                                MaxLength={17}
                            />
                        </div>
                        <div className="form-group col-lg-6 col-12">
                            <TextField
                                label="Company Email"
                                name={"companyEmail"}
                                onChange={(e) =>
                                    updateProfile("startUpProfile", {
                                        contactInfo: {
                                            ...stateAuth?.startupData
                                                ?.startUpProfile?.contactInfo,
                                            companyEmail: e.target.value,
                                        },
                                    })
                                }
                                value={
                                    stateAuth?.startupData?.startUpProfile
                                        ?.contactInfo?.companyEmail
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
                                defaultValue={`knight.venture/${stateAuth?.user?.businessname}`}
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
                                            ...stateAuth?.startupData
                                                ?.startUpProfile?.contactInfo,
                                            companyWebsite: e.target.value,
                                        },
                                    })
                                }
                                value={
                                    stateAuth?.startupData?.startUpProfile
                                        ?.contactInfo?.companyWebsite
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
                                            ...stateAuth?.startupData
                                                ?.startUpProfile?.contactInfo,
                                            linkedInHandle: e.target.value,
                                        },
                                    })
                                }
                                value={
                                    stateAuth?.startupData?.startUpProfile
                                        ?.contactInfo?.linkedInHandle
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
                                            ...stateAuth?.startupData
                                                ?.startUpProfile?.contactInfo,
                                            twitterHandle: e.target.value,
                                        },
                                    })
                                }
                                value={
                                    stateAuth?.startupData?.startUpProfile
                                        ?.contactInfo?.twitterHandle
                                }
                                required={true}
                                placeholder="Enter your Twitter profile name"
                            />
                        </div>
                    </div>
                    <div className="d-flex my-4 justify-content-end">
                        <div>
                            <CustomButton type="submit" background="#06ADEF">
                                Save
                            </CustomButton>
                        </div>
                        <div className="mx-2">
                            <CustomButton
                                type="button"
                                onClick={() => changePath(2)}
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
