import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./companyOverview.css";
import imageRep from "../../../../assets/icons/image.svg";
import add from "../../../../assets/icons/addFile.svg";
import { Button } from "../../../../components/index";
import { TextField } from "../../../../Startupcomponents";
import FormCard from "../formCard/FormCard";
import { useAuth, useActivity } from "../../../../hooks";
import { upload } from "../../../../services/utils";
import { CircularLoader } from "./../../../../Startupcomponents/CircluarLoader/CircularLoader";
import toast from "react-hot-toast";
import { Input, Form, Select } from "antd";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { AiOutlineUser } from "react-icons/ai";
import { industry, category } from "../../../../constants/domiData";
import { letterOnly, onNumberOnlyChange } from "../../../../utils/helpers";
import { FormWrapper } from "./style";
import { twitterRegExp, linkedinRegExp } from "../../../../utils/utils";
import { editUser } from "../../../../services";

const { Option } = Select;
const { TextArea } = Input;

// const industry = [
//   ''
// ]

const CompanyOverview = () => {
    const {
        stateAuth,
        updatePartnerLocalData,
        updatePartnerInfo,
        updateUserObj,
    } = useAuth();
    const [logoUploading, setLogoUploading] = useState(false);
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

    //console.log(stateAuth)

    const onFinish = async (values) => {
        const uploaded = await updatePartnerInfo();
        console.log(buttonClicked);

        if (uploaded?.success) {
            toast.success("Saved Successfully");
        } else {
            toast.error("Something went wrong");
        }

        if (uploaded?.success && buttonClicked === "Next") {
            next();
            push("#offerings");
        }
        console.log(values);
    };

    const handleCountry = (value) => {
        updatePartnerLocalData("", {
            country: value,
        });

        console.log(value);
    };

    const handleChangeState = (value) => {
        updatePartnerLocalData("", {
            state: value,
        });
    };

    const onChangeImage = async (e) => {
        const { files } = e.target;
        const formData = new FormData();
        formData.append("type", "image");
        formData.append("file", files[0]);

        setLogoUploading(true);
        try {
            const response = await upload(formData);
            console.log(response?.path);

            const samplePayload = {
                payload: {
                    avatar: response?.path,
                },
            };
            console.log(samplePayload);
            const updateAvatar = await editUser(samplePayload);
            await updateUserObj({
                avatar: response?.path,
            });

            console.log(updateAvatar);
            // updatePartnerLocalData("", {
            //     logo: response?.path,
            // });
        } catch (error) {
            toast.error(
                error?.response?.data?.message ?? "Unable to upload image"
            );
        }
        setLogoUploading(false);
    };

    const handlePhoneInput = (value) => {
        updatePartnerLocalData("", {
            phoneNumber: value,
        });
    };

    return (
        <div className="register-form-wrap">
            <h3>Company Overview</h3>
            <p>Fill in partner details</p>

            <Form
                name="Sign-Up"
                initialValues={{
                    remember: true,
                }}
                layout="vertical"
                onFinish={onFinish}
                style={{ marginTop: "1.5rem" }}
            >
                <FormWrapper>
                    <div className="row mb-4">
                        <section className="col-md-3">
                            <div className="form-dp">
                                <span className="image-placeholder">
                                    {!stateAuth?.userObj?.avatar ? (
                                        logoUploading ? (
                                            <CircularLoader color={"#000"} />
                                        ) : (
                                            <AiOutlineUser
                                                size={36}
                                                color="#828282"
                                            />
                                        )
                                    ) : logoUploading ? (
                                        <div
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                display: "grid",
                                                placeItems: "center",
                                            }}
                                        >
                                            <CircularLoader
                                                color={"#000"}
                                                style={{ margin: "auto 0" }}
                                            />
                                        </div>
                                    ) : (
                                        <img
                                            className="image-placeholder"
                                            src={stateAuth?.userObj?.avatar}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                            }}
                                            alt=""
                                        />
                                    )}
                                </span>

                                <label for="dn">
                                    <img
                                        src={add}
                                        className="add-dp"
                                        alt="add"
                                    />
                                    <input
                                        type="file"
                                        onChange={onChangeImage}
                                        id="dn"
                                        hidden
                                    />
                                </label>
                            </div>
                        </section>
                    </div>
                    <div className="row">
                        <Form.Item
                            name="companyDescription"
                            label="Company Description"
                            initialValue={
                                stateAuth?.partnerData?.companyDescription
                            }
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Please input your company description.",
                                },
                                {
                                    min: 200,
                                    message:
                                        "Description must not be less down 200 characters",
                                },
                            ]}
                        >
                            <TextArea
                                rows={4}
                                style={{ height: 150 }}
                                value={
                                    stateAuth?.partnerData?.companyDescription
                                }
                                onChange={(e) =>
                                    updatePartnerLocalData("", {
                                        companyDescription: e.target.value,
                                    })
                                }
                                onKeyPress={letterOnly}
                                showCount
                                maxLength={250}
                                placeholder="250 characters at most"
                            />
                        </Form.Item>
                    </div>

                    <div className="row">
                        <section className="col-md-6 mb-4">
                            <TextField
                                label="Company Name"
                                name={"companyName"}
                                onChange={(e) =>
                                    updatePartnerLocalData("", {
                                        companyName: e.target.value,
                                    })
                                }
                                value={stateAuth?.partnerData?.companyName}
                                required={true}
                                placeholder="Enter name of partner"
                            />
                        </section>
                        <section className="col-md-6 mb-4">
                            <TextField
                                onChange={(e) =>
                                    updatePartnerLocalData("", {
                                        website: e.target.value,
                                    })
                                }
                                label="Website"
                                name={"website"}
                                type={"url"}
                                required={true}
                                value={stateAuth?.partnerData?.website}
                                placeholder="Enter website URL"
                            />
                        </section>

                        <section className="col-md-6 mb-4">
                            <Form.Item
                                name="industry"
                                label="Industry"
                                initialValue={stateAuth?.partnerData?.industry}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select an industry!",
                                    },
                                ]}
                            >
                                <Select
                                    id="industry"
                                    style={{
                                        width: 200,
                                        backgroundColor: "#959596",
                                    }}
                                    placeholder="select your categories"
                                    onChange={(value) => {
                                        updatePartnerLocalData("", {
                                            industry: value,
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
                                name="categories"
                                label="Categories"
                                initialValue={
                                    stateAuth?.partnerData?.categories
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select a category!",
                                    },
                                ]}
                            >
                                <Select
                                    style={{
                                        width: 200,
                                        backgroundColor: "#959596",
                                    }}
                                    placeholder="select your categories"
                                    onChange={(value) =>
                                        updatePartnerLocalData("", {
                                            categories: value,
                                        })
                                    }
                                >
                                    {category.map((item, i) => (
                                        <Option key={i} value={item}>
                                            {" "}
                                            {item}{" "}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </section>
                        <section className="col-md-6 mb-4">
                            <Form.Item
                                name="twitter"
                                label="Twitter"
                                initialValue={stateAuth?.partnerData?.twitter}
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
                                    type={"text"}
                                    onChange={(e) =>
                                        updatePartnerLocalData("", {
                                            twitter: e.target.value,
                                        })
                                    }
                                    value={stateAuth?.partnerData?.twitter}
                                    placeholder="Enter twitter URL"
                                />
                            </Form.Item>
                        </section>

                        <section className="col-md-6 mb-4">
                            <Form.Item
                                name="linkedin"
                                label="Linkedin"
                                initialValue={stateAuth?.partnerData?.linkedin}
                                rules={[
                                    {
                                        required: false,
                                        message:
                                            "Please enter a valid linkedin url",
                                        pattern: linkedinRegExp,
                                    },
                                ]}
                            >
                                <TextField
                                    type={"text"}
                                    value={
                                        stateAuth?.partnerData?.linkedin ?? ""
                                    }
                                    onChange={(e) =>
                                        updatePartnerLocalData("", {
                                            linkedin: e.target.value,
                                        })
                                    }
                                    placeholder="Enter Linkedin URL"
                                />
                            </Form.Item>
                        </section>
                    </div>
                </FormWrapper>

                <FormCard>
                    <div className="contact-title">
                        <h4>Contact Info</h4>
                    </div>

                    <div className="row">
                        <section className="col-md-6 mb-4">
                            <TextField
                                value={
                                    stateAuth?.partnerData?.coordinatorName ??
                                    ""
                                }
                                name={"coordinatorName"}
                                onChange={(e) =>
                                    updatePartnerLocalData("", {
                                        coordinatorName: e.target.value,
                                    })
                                }
                                onKeyPress={letterOnly}
                                label="Coordinator Name"
                                placeholder="Enter contact person"
                            />
                        </section>

                        <section className="col-md-6 mb-4">
                            <TextField
                                name={"designation"}
                                label="Designation"
                                onKeyPress={letterOnly}
                                value={
                                    stateAuth?.partnerData?.designation ?? ""
                                }
                                placeholder="Enter contact person"
                                onChange={(e) =>
                                    updatePartnerLocalData("", {
                                        designation: e.target.value,
                                    })
                                }
                            />
                        </section>
                        <section className="col-md-6 mb-4 ">
                            <Form.Item
                                name="phoneNumber"
                                label="Mobile Number"
                                initialValue={
                                    stateAuth?.partnerData?.phoneNumber
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter a mobile number",
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
                                        stateAuth?.partnerData?.phoneNumber ??
                                        ""
                                    }
                                    onChange={handlePhoneInput}
                                    maxLength={17}
                                />
                            </Form.Item>
                        </section>
                        <section className="col-md-6 mb-4">
                            <TextField
                                label="Email"
                                placeholder="Enter email address"
                                type="email"
                                value={
                                    stateAuth?.partnerData?.companyEmail ?? ""
                                }
                                name={"companyEmail"}
                                onChange={(e) =>
                                    updatePartnerLocalData("", {
                                        companyEmail: e.target.value,
                                    })
                                }
                                required={true}
                            />
                        </section>
                        <section className="col-md-4 mb-4">
                            <Form.Item
                                name="country"
                                label="Country"
                                initialValue={stateAuth?.partnerData?.country}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select a country",
                                    },
                                ]}
                            >
                                <CountryDropdown
                                    className="form-control px-5 py-1 country-bg"
                                    value={
                                        stateAuth?.partnerData?.country ?? ""
                                    }
                                    onChange={(value) => handleCountry(value)}
                                />
                            </Form.Item>
                        </section>
                        <section className="col-md-4 mb-4">
                            <Form.Item
                                name="state"
                                label="State"
                                initialValue={stateAuth?.partnerData?.state}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select a state",
                                    },
                                ]}
                            >
                                <RegionDropdown
                                    name="state"
                                    country={
                                        stateAuth?.partnerData?.country ?? ""
                                    }
                                    value={stateAuth?.partnerData?.state ?? ""}
                                    onChange={(value) =>
                                        handleChangeState(value)
                                    }
                                    className="form-control ps-3"
                                />
                            </Form.Item>
                        </section>
                        <section className="col-md-4 mb-4">
                            <TextField
                                onChange={(e) =>
                                    updatePartnerLocalData("", {
                                        city: e.target.value,
                                    })
                                }
                                value={stateAuth?.partnerData?.city ?? ""}
                                name={"city"}
                                onKeyPress={letterOnly}
                                label="City"
                                placeholder="Enter partner city"
                            />
                        </section>
                    </div>
                </FormCard>

                <section
                    className="d-flex align-items-center justify-content-end my-4"
                    style={{ columnGap: 9 }}
                >
                    <Button
                        type="submit"
                        label="Save"
                        variant="secondary"
                        onClick={() => setButtonClicked("Save")}
                    />
                    <Button
                        type="submit"
                        label="Next"
                        onClick={() => {
                            setButtonClicked("Next");
                        }}
                    />
                </section>
            </Form>
        </div>
    );
};

export default CompanyOverview;
