import React, { useState } from "react";
import { TextField, TextArea, Button } from "../../Startupcomponents/index";
import map from "../../assets/images/mapBlue.svg";
import phone from "../../assets/icons/phoneBlue.svg";
import toast from "react-hot-toast";
import mail from "../../assets/icons/mailIcon.svg";
import twitter from "../../assets/icons/twitterLogo.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedIn from "../../assets/icons/linkedInLogo.svg";
import "./contactUs.css";
import { Form } from "antd";
import { sendFeedBack } from "../../services";
import { Link } from "react-router-dom";

export const StartupContactUs = () => {
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
        <div className="wrapper" style={{ minHeight: "calc(100vh - 60px)" }}>
            <section>
                <h1 className="contact-header">Contact Us</h1>
                <p className="contact-txt">
                    Fill up the form and our team would get in touch with you
                    within 2 hours
                </p>
            </section>

            <section className="row mt-5">
                <article className="col-lg-6 mt-2 mb-4">
                    <div className="d-flex align-items-center contact-us-info">
                        <img src={map} alt="location" />
                        <a
                            href="https://goo.gl/maps/r9J3b9dEGzVzUJ7i6"
                            target="_blank"
                        >
                            <p>
                                274, Ikorodu Road, Anthony, Lagos State,
                                Nigeria.
                            </p>
                        </a>
                    </div>

                    <div className="d-flex align-items-center contact-us-info">
                        <img src={map} alt="location" />
                        <a
                            href="https://goo.gl/maps/3JJytmv6zeBqzLiR8"
                            target="_blank"
                        >
                            <p>4652 Ripley Manor Terr, Olney MD 20832 USA</p>
                        </a>
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

                    <div className="d-flex align-items-center social-links">
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
                                <TextField
                                    placeholder=""
                                    type="text"
                                    name={"fullName"}
                                    className="message-input"
                                    label="Full Name"
                                    required={true}
                                />
                            </div>

                            <div className="mb-4">
                                <TextField
                                    placeholder=""
                                    type="email"
                                    name={"emailAddress"}
                                    className="message-input"
                                    required={true}
                                    label="Email Address"
                                />
                            </div>

                            <div className="mb-4">
                                <Form.Item
                                    name="message"
                                    label="Message"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter a message",
                                        },
                                    ]}
                                >
                                    <TextArea
                                        name={"message"}
                                        placeholder="Enter Message"
                                        value={message}
                                        onChange={onChange}
                                        rows="5"
                                    />
                                </Form.Item>
                            </div>

                            <div className="text-right">
                                <Button
                                    variant="secondary"
                                    loading={loading}
                                    type="submit"
                                    label="Send"
                                />
                            </div>
                        </Form>
                    </section>
                </article>
            </section>
        </div>
    );
};
