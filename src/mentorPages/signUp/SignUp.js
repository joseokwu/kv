import React, { useState } from "react";
import "./signUp.css";
import {
    AuthSide,
    AuthButton,
    AuthTextField,
    AuthPasswordField,
} from "../../mentorComponents/index";
import { useLocation } from "react-router-dom";
import check from "../../assets/icons/checkmark.svg";
import { Form, Select } from "antd";
import { useAuth } from "../../hooks";
import { setType, getType } from "../../utils/helpers";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import { PhoneInput } from '../../components'

const { Option } = Select;

export const SignUp = ({ history }) => {
    const [checkSat, setCheckSat] = useState(false);
    const { stateAuth, register } = useAuth();
    const userType = getType();
    const [industry, setIndustry] = useState("");
    const [phone, setPhone] = useState("");
    const search = useLocation().search;
    const name = new URLSearchParams(search).get("name");
    function handleChange(value) {
        setIndustry(value);
    }

    const changePhone = (value) => {
        setPhone(value);
        console.log(value);
    };

    const onFinish = (values) => {
        console.log({
            ...values,
            type: stateAuth?.signUpStatus,
            phone: phone,
            origin: window.location.origin,
        });
        localStorage.setItem("KV-signupEmail", values.email);
        register({
            ...values,
            type: stateAuth?.signUpStatus,
            phone: phone,
            origin: window.location.origin,
        });
    };

    const [eye, setEye] = useState(false);

    // console.log(name)

    return (
        <div className="row mx-0 mentor_auth_wrap">
            <section className="col-md-6">
                <AuthSide />
            </section>
            <section className="col-md-6">
                <div className="mentor_gray_card">
                    <Form
                        name="Sign-Up"
                        className="row"
                        initialValues={{
                            remember: true,
                        }}
                        layout="vertical"
                        onFinish={onFinish}
                    >
                        <div className="col-md-6 col-12 mb-2">
                            <AuthTextField
                                name={
                                    name === "startup" || userType === "startup"
                                        ? "startupname"
                                        : "firstname"
                                }
                                label={
                                    name === "startup" || userType === "startup"
                                        ? "Startup Name"
                                        : "First name"
                                }
                                placeholder={
                                    name === "startup" || userType === "startup"
                                        ? "Enter your Startup name"
                                        : "Enter your first name"
                                }
                                className="mentor_gray_card_input"
                            />
                        </div>
                        <div className="col-md-6 col-12 mb-2">
                            {name === "startup" || userType === "startup" ? (
                                <div className="inputContainer">
                                    <div className="select">
                                        <Form.Item
                                            name="industry"
                                            label="Industry"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please select an industry!",
                                                },
                                            ]}
                                        >
                                            <Select
                                                onChange={handleChange}
                                                id="industry1"
                                                style={{
                                                    width: "fit-content",
                                                    backgroundColor:
                                                        "transparent",
                                                    color: "rgb(249, 249, 252)",
                                                }}
                                                placeholder="Select your industry"
                                            >
                                                <Option disabled selected>
                                                    Select your industry
                                                </Option>
                                                <Option value="Advanced manufacturing and materials">
                                                    Advanced manufacturing and
                                                    materials
                                                </Option>
                                                <Option value="Agriculture, food and beverages">
                                                    Agriculture, food and
                                                    beverages
                                                </Option>
                                                <Option value="Energy">
                                                    Energy
                                                </Option>
                                                <Option value="Engineering and Technology">
                                                    Engineering and Technology
                                                </Option>
                                                <Option value="Finance">
                                                    Finance
                                                </Option>
                                                <Option value="Health: Pharmaceuticals and Biotechnology">
                                                    Health: Pharmaceuticals and
                                                    Biotechnology
                                                </Option>
                                                <Option value="Healthcare: Devices and Supplies">
                                                    Healthcare Devices and
                                                    Supplies
                                                </Option>
                                                <Option value="Healthcare: Other services and Technologies">
                                                    Healthcare: Other services
                                                    and Technologies
                                                </Option>
                                                <Option value="Information and Communication Technology(ICT)">
                                                    Information and
                                                    Communication
                                                    Technology(ICT)
                                                </Option>
                                                <Option value="Life-science Technologies">
                                                    Life-science Technologies
                                                </Option>
                                                <Option value="Micro/name-electronic and photonics">
                                                    Micro/name-electronic and
                                                    photonics
                                                </Option>
                                                <Option value="Security and Connectivity">
                                                    Security and Connectivity
                                                </Option>
                                                <Option value="Space and Aerospace">
                                                    Space and Aerospace
                                                </Option>
                                                <Option value="Sustainability and circular economy">
                                                    Sustainability and circular
                                                    economy
                                                </Option>
                                                <Option value="Transportation">
                                                    Transportation
                                                </Option>
                                                <Option value="Others">
                                                    Others
                                                </Option>
                                                <Option value="Financial Services">
                                                    Financial Services
                                                </Option>
                                                <Option value="Education">
                                                    Education
                                                </Option>
                                                <Option value="Health">
                                                    Health
                                                </Option>
                                                <Option value="Agriculture">
                                                    Agriculture
                                                </Option>
                                                <Option value="Insurance">
                                                    Insurance
                                                </Option>
                                                <Option value="Clean Energy">
                                                    Clean Energy
                                                </Option>
                                                <Option value="Construction">
                                                    Construction
                                                </Option>
                                                <Option value="Mobility/Logistics">
                                                    Mobility/Logistics
                                                </Option>
                                                <Option value="Social Impact">
                                                    Social Impact
                                                </Option>
                                                <Option value="Artificial Intelligence">
                                                    Artificial Intelligence
                                                </Option>
                                                <Option value="Blockchain">
                                                    Blockchain
                                                </Option>
                                                <Option value="Internet of Things">
                                                    Internet of Things
                                                </Option>
                                                <Option value="Mobile">
                                                    Mobile
                                                </Option>
                                                <Option value="Software as a Service">
                                                    Software as a Service
                                                </Option>
                                                <Option value="Sports">
                                                    Sports
                                                </Option>
                                                <Option value="B2B">B2B</Option>
                                                <Option value="B2C">B2C</Option>
                                                <Option value="D2C">D2C</Option>
                                                <Option value="Marketplace">
                                                    Marketplace
                                                </Option>
                                            </Select>
                                        </Form.Item>
                                    </div>
                                </div>
                            ) : (
                                <AuthTextField
                                    name="lastname"
                                    label="Last Name"
                                    placeholder="Enter your last name"
                                    className="mentor_gray_card_input"
                                />
                            )}
                        </div>

                        <div className="col-12 mb-2 email">
                            <AuthTextField
                                name="email"
                                label="Email"
                                placeholder="Enter email address"
                                className="mentor_gray_card_input"
                            />
                        </div>

                        <div className="col-12 mb-2 position-relative">
                            <i
                                onClick={() => setEye(!eye)}
                                className={`pass-eye fa ${
                                    eye ? "fa-eye-slash" : "fa-eye"
                                }`}
                            ></i>
                            <AuthPasswordField
                                numb={8}
                                name="password"
                                message="Password must be 8 digits"
                                label="Password"
                                id={"password"}
                                placeholder="Password must be at least 8 characters"
                                className="mentor_gray_card_input"
                                type={eye ? "text" : "password"}
                            />
                        </div>

                        <div className="numsign col-12 mb-4">
                            <Form.Item
                                name="phoneNumber"
                                label={
                                    <span style={{ color: "#d5d6f4" }}>
                                        Mobile Number
                                    </span>
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter a mobile number",
                                    },
                                ]}
                                style={{ color: "#fff" }}
                            >
                                <PhoneInput
                                    id="phoneNumber"
                                    placeholder={"+234 000 0000 000"}
                                    name="phone"
                                    international
                                    countryCallingCodeEditable={true}
                                    className="signup_num ps-3"
                                    value={phone}
                                    onChange={(value) => changePhone(value)}
                                    maxLength={17}
                                />
                            </Form.Item>
                        </div>

                        <div className="col-12 mb-4">
                            <section className="d-flex align-items-start mentor_auth_agree">
                                <span className="mentor_checkbox_input">
                                    <input
                                        type="checkbox"
                                        name=""
                                        onChange={() => setCheckSat(!checkSat)}
                                        id="agreement"
                                        checked={checkSat}
                                    />
                                    <div>
                                        <img src={check} alt="check" />
                                    </div>
                                </span>
                                <label htmlFor="agreement">
                                    I certify that all the information provided
                                    by me is accurate and I am willing to
                                    provide evidence for the same for KYC
                                    purposes when requested.
                                </label>
                            </section>
                        </div>

                        <div className="col-12 mb-4">
                            <AuthButton
                                label="Create Account"
                                loading={stateAuth.loading}
                                disabled={stateAuth.loading}
                            />
                        </div>

                        <div className="col-12 mb-3">
                            <section
                                className="d-flex align-items-center mentor_switch_auth"
                                style={{ columnGap: 6 }}
                            >
                                <p>Already have an account?</p>{" "}
                                <span
                                    style={{
                                        color: "#00ADEF",
                                        fontWeight: "bold",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => history.push("/")}
                                >
                                    Sign In
                                </span>
                            </section>
                        </div>
                    </Form>
                </div>
            </section>
        </div>
    );
};
