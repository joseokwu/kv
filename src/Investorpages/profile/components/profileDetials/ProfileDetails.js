import React, { useState } from "react";
import edit from "../../../../assets/icons/edit.svg";
import twitter from "../../../../assets/images/profileTwitter.svg";
import linkedIn from "../../../../assets/images/profileLinkedIn.svg";
import location from "../../../../assets/icons/locationSm.svg";
import phone from "../../../../assets/icons/phoneSm.svg";
import web from "../../../../assets/icons/webSm.svg";
import { Modal, TextField, Button, Select } from "../../../../components";
import { AvatarWrapper } from "../../../../components";
import add from "../../../../assets/icons/addFile.svg";
import imageRep from "../../../../assets/icons/image.svg";
import FormCard from "../../../partnerRegisteration/components/formCard/FormCard";
import { useAuth } from "../../../../hooks";
import { Form, Input } from "antd";
import { CircularLoader } from "../../../../Startupcomponents/CircluarLoader/CircularLoader";
import { upload } from "../../../../services";
import toast from "react-hot-toast";
import { letterOnly } from "../../../../utils/helpers";
import { category, industry } from "../../../../constants/domiData";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const { TextArea } = Input;
const { Option } = Select;

const ProfileDetails = ({ data }) => {
    const { stateAuth } = useAuth();

    return (
        <section className="profile-info">
            <div className="profile-banner">
                {/* <span className="edit-banner">
          <img src={edit} alt="edit" />
        </span> */}
            </div>

            <div className="profile-contact-info">
                <Modal title="Edit  Intro" id="profileEditModal">
                    <EditProfileInfo />
                </Modal>
                <span className="edit-info">
                    {/* <AvatarWrapper
                        condition={item?.startUpProfile?.logo}
                        initials={item?.startUpProfile?.startupName?.slice(
                            0,
                            1
                        )}
                        size={31}
                    >
                        <img
                            src={edit}
                            alt="edit"
                            data-toggle="modal"
                            data-target="#profileEditModal"
                            role="button"
                        />
                    </AvatarWrapper> */}
                </span>
                <span className="profile-image">
                    <img
                        src={stateAuth?.userObj?.avatar}
                        alt="sample company"
                    />
                </span>

                <article className="row">
                    <div className="col-lg-12">
                        <h1 className="mb-4 profile-name">
                            {" "}
                            {data?.companyName}{" "}
                        </h1>
                    </div>

                    <div className="col-lg-12 d-flex justify-content-between mb-3">
                        <div className="d-flex" style={{ color: "#2E3192" }}>
                            <div>
                                <span>CONTACT: {data?.coordinatorName}</span>
                            </div>
                            <div className="mx-5">
                                <p> {data?.designation} </p>
                            </div>
                        </div>

                        <div className=" d-flex ">
                            <a
                                href={`${data?.twitter}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={twitter} alt="twitter" className="" />
                            </a>
                            <a
                                href={`${data?.linkedin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ps-2"
                            >
                                <img src={linkedIn} alt="linkedIn" />
                            </a>
                        </div>
                    </div>

                    {/* <div className="row mb-3"> */}
                    <div
                        className="row mb-3 d-flex"
                        style={{ color: "#828282" }}
                    >
                        <div className="col-lg-3">
                            <p className="text-decoration-none">
                                <img
                                    className="pe-1"
                                    src={location}
                                    alt="location"
                                />{" "}
                                {`${data?.city} ${data?.state} ${data?.country}`}
                            </p>
                        </div>

                        <div className="col-lg-3">
                            <p className="text-decoration-none">
                                <img src={phone} alt="phone" />{" "}
                                {data?.phoneNumber}
                            </p>
                        </div>

                        <div className="col-lg-3">
                            <a
                                className="text-decoration-none"
                                style={{ color: "#828282" }}
                                href={data?.website}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="pe-1" src={web} alt="web" />
                                {data?.website}
                            </a>
                        </div>
                    </div>
                    {/* </div> */}

                    <div className="profile-bio pb-5">
                        <p>{data?.companyDescription}</p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default ProfileDetails;

const EditProfileInfo = () => {
    const { updatePartnerInfo, updatePartnerLocalData, stateAuth } = useAuth();
    const [logoUploading, setLogoUploading] = useState(false);

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
            console.log(response?.path);
            updatePartnerLocalData("", {
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

    const onFinish = async (values) => {
        updatePartnerInfo();
        console.log(values);
    };

    const handlePhoneInput = (value) => {
        updatePartnerLocalData("", {
            phoneNumber: value,
        });
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

    return (
        <div>
            <Form
                initialValues={{ remember: true }}
                layout="vertical"
                onFinish={onFinish}
            >
                <FormCard>
                    <div className="row mb-4">
                        <section className="col-md-3">
                            <div className="form-dp">
                                <span className="image-placeholder">
                                    {stateAuth?.userObj?.avatar === null ? (
                                        logoUploading ? (
                                            <CircularLoader color={"#000"} />
                                        ) : (
                                            <>
                                                <img
                                                    src={imageRep}
                                                    style={{
                                                        width: "40px",
                                                        height: "40px",
                                                    }}
                                                    alt="placeholder"
                                                />
                                                <p>
                                                    Company
                                                    <br />
                                                    logo
                                                </p>
                                            </>
                                        )
                                    ) : (
                                        <img
                                            src={stateAuth?.userObj?.avatar}
                                            alt="add"
                                            className="image-placeholder"
                                        />
                                    )}
                                </span>
                                <label for="op">
                                    <img
                                        src={add}
                                        className="add-dp"
                                        alt="add"
                                    />
                                    <input
                                        type="file"
                                        onChange={onChangeImage}
                                        id="op"
                                        hidden
                                    />
                                </label>
                            </div>
                        </section>
                        <section className="col-md-9 pl-5">
                            <Form.Item
                                name="companyDescription"
                                initialValue={
                                    stateAuth?.partnerData?.companyDescription
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input Intro",
                                    },
                                    {
                                        min: 200,
                                        message:
                                            "Description must not be less down 200 characters",
                                    },
                                ]}
                            >
                                <TextArea
                                    rows={6}
                                    label="Company Description"
                                    placeholder="250 characters at most"
                                    value={
                                        stateAuth?.partnerData
                                            ?.companyDescription
                                    }
                                    onKeyPress={letterOnly}
                                    showCount
                                    maxLength={250}
                                    onChange={(e) =>
                                        updatePartnerLocalData("", {
                                            companyDescription: e.target.value,
                                        })
                                    }
                                />
                            </Form.Item>
                        </section>
                    </div>

                    <div className="row">
                        <section className="col-md-6 mb-4">
                            <TextField
                                label="Company Name"
                                name={"companyName"}
                                required={true}
                                value={stateAuth?.partnerData?.companyName}
                                onChange={(e) =>
                                    updatePartnerLocalData("", {
                                        companyName: e.target.value,
                                    })
                                }
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
                            <Select
                                label="Categories"
                                name="categories"
                                placeholder="Select your categories"
                                initialValue={
                                    stateAuth?.partnerData?.categories
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select categories!",
                                    },
                                ]}
                                onChange={(value) => {
                                    updatePartnerLocalData("", {
                                        categories: value,
                                    });
                                }}
                                options={category}
                            />
                        </section>
                        <section className="col-md-6 mb-4">
                            <Select
                                label="Industry"
                                name="industry"
                                placeholder="Select your industry"
                                initialValue={stateAuth?.partnerData?.industry}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select an industry!",
                                    },
                                ]}
                                onChange={(value) => {
                                    updatePartnerLocalData("", {
                                        industry: value,
                                    });
                                }}
                                options={industry}
                            />
                        </section>
                        <section className="col-md-6 mb-4">
                            <TextField
                                label="Twitter"
                                name={"twitter"}
                                type={"url"}
                                placeholder="Enter twitter URL"
                                value={stateAuth?.partnerData?.twitter ?? ""}
                                onChange={(e) =>
                                    updatePartnerLocalData("", {
                                        twitter: e.target.value,
                                    })
                                }
                            />
                        </section>

                        <section className="col-md-6 mb-4">
                            <TextField
                                label="Linkedin"
                                name={"linkedin"}
                                type={"url"}
                                value={stateAuth?.partnerData?.linkedin ?? ""}
                                onChange={(e) =>
                                    updatePartnerLocalData("", {
                                        linkedin: e.target.value,
                                    })
                                }
                                placeholder="Enter Linkedin URL"
                            />
                        </section>
                    </div>
                </FormCard>

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
                        <section className="col-md-6 mb-4">
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
                                    stateAuth?.partnerData?.phoneNumber ?? ""
                                }
                                onChange={handlePhoneInput}
                                maxLength={17}
                            />
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
                            <label>
                                Country<span style={{ color: "red" }}>*</span>
                            </label>
                            <CountryDropdown
                                className="form-control px-5 py-1 country-bg"
                                value={stateAuth.partnerData.country ?? ""}
                                onChange={(value) => handleCountry(value)}
                            ></CountryDropdown>
                        </section>
                        <section className="col-md-4 mb-4">
                            <label>
                                State<span style={{ color: "red" }}>*</span>
                            </label>
                            <RegionDropdown
                                name="state"
                                country={stateAuth.partnerData.country ?? ""}
                                value={stateAuth.partnerData.state ?? ""}
                                onChange={(value) => handleChangeState(value)}
                                className="form-control ps-3"
                            />
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
                <section className="text-right mb-3">
                    <Button label="Save" type={"submit"} />
                </section>
            </Form>
        </div>
    );
};
