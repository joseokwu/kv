import React, { useState } from "react";
import { TextField, TextArea, Button } from "../../components/index";
import map from "../../assets/images/mapBlue.svg";
import phone from "../../assets/icons/phoneBlue.svg";
import mail from "../../assets/icons/mailIcon.svg";
import twitter from "../../assets/icons/twitterLogo.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedIn from "../../assets/icons/linkedInLogo.svg";
import "./contactUs.css";
import { Form } from "antd";
import { sendFeedBack } from "../../services";
import toast from "react-hot-toast";

export const InvestorContactUs = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [form] = Form.useForm();

    const onFinish = async (value) => {
        try {
            setLoading(true);
            const res = await sendFeedBack({ ...value, message: message });
            console.log(res);
            setLoading(false);
            toast.success(res?.message);
            form.resetFields(["fullName", "emailAddress"]);
            setMessage("");
        } catch (err) {
            console.log(err);
            setLoading(false);
            toast.error(err?.response?.data?.message);
        }
    };

    const onChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div className="wrapper">
            <section>
                <h1 className="contact-header">Contact Us</h1>
                <p className="contact-txt">
                    Fill up the form and our team would get in touch with you
                    within 2 hours
                </p>
            </section>

            <section className="row mt-5">
                <article className="col-lg-6 mt-2">
                    <div className="d-flex align-items-center contact-us-info">
                        <img src={map} alt="location" />
                        <p>274, Ikorodu Road, Anthony, Lagos State, Nigeria.</p>
                    </div>

                    <div className="d-flex align-items-center contact-us-info">
                        <img src={map} alt="location" />
                        <p>4652 Ripley Manor Terr, Olney MD 20832 USA</p>
                    </div>

                    <div className="d-flex align-items-center contact-us-info">
                        <img src={phone} alt="phone" />
                        <p>
                            <a
                                style={{
                                    textDecoration: "none",
                                    color: "#2e3192",
                                }}
                                href="tel:+234 913 4444 859"
                            >
                                +234 913 4444 859
                            </a>
                        </p>
                    </div>

                    <div className="d-flex align-items-center contact-us-info">
                        <img src={mail} alt="web" />
                        <p>
                            <a
                                style={{
                                    textDecoration: "none",
                                    color: "#2e3192",
                                }}
                                href="mailto:info@knight.ventures"
                            >
                                info@knight.ventures
                            </a>{" "}
                        </p>
                    </div>

                    <div className="d-flex align-items-center social-links mb-3">
                        <img src={twitter} alt="twitter" />

                        <a
                            href="https://www.instagram.com/knightventures/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={instagram} alt="instagram" />
                        </a>

                        <a
                            href="https://www.linkedin.com/company/knightnbishopventures/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={linkedIn} alt="linkedIn" />
                        </a>
                    </div>
                </article>

                <article className="col-lg-6">
                    <section className="message-card">
                        <header className="message-header">
                            Send a message
                        </header>
                        <Form
                            name="contact"
                            form={form}
                            initialValues={{
                                remember: true,
                            }}
                            layout="vertical"
                            onFinish={onFinish}
                        >
                            <div className="mb-4">
                                <label>Full Name</label>
                                <TextField
                                    placeholder=""
                                    type={"text"}
                                    name={"fullName"}
                                    className={"message-input"}
                                />
                            </div>

                            <div className="mb-4">
                                <label>Email Address</label>
                                <TextField
                                    placeholder=""
                                    type={"email"}
                                    name={"emailAddress"}
                                    className={"message-input"}
                                />
                            </div>

                            <div className="mb-4">
                                <TextArea
                                    label={"Message"}
                                    placeholder={"Enter Message"}
                                    value={message}
                                    onChange={onChange}
                                    rows={"5"}
                                />
                            </div>

                            <div className="text-right">
                                <Button
                                    label={"Send"}
                                    loading={loading}
                                    type={"submit"}
                                />
                            </div>
                        </Form>
                    </section>
                </article>
            </section>
        </div>
    );
};
