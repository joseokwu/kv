import React from "react";
import edit from "../../../../assets/icons/edit.svg";
import { Modal, Button } from "../../../../components";
import { Form, Select } from "antd";
import { industry } from "../../../../constants/domiData";
import { useAuth } from "../../../../hooks/useAuth";
import { months } from "../../../../utils/helpers";
const { Option } = Select;

const PartnerValidity = ({ data }) => {
    return (
        <section className="profile-offering">
            <span className="text-right d-block">
                <img
                    src={edit}
                    alt="edit"
                    data-toggle="modal"
                    data-target="#editValidity"
                    role="button"
                />
                <Modal title="Edit" id="editValidity">
                    <EditValidity data={data} />
                </Modal>
            </span>

            <div
                className="d-flex align-items-center justify-content-between mt-3"
                style={{ marginBottom: 39 }}
            >
                <section className="mb-4">
                    <p className="partner-cat-txt mb-3">Partnership Validity</p>
                    <span className="cat-tag">
                        {" "}
                        {data?.partnershipValidity}{" "}
                    </span>
                </section>
                <section className="mb-4">
                    <p className="partner-cat-txt mb-3">Turnaround Time</p>
                    <span className="cat-tag"> {data?.turnAroundTime} </span>
                </section>
            </div>

            <p className="partner-cat-txt mb-3">Free Credit Value Allotted</p>
            <section className="free-credit-answer d-flex align-items-center">
                <span></span>
                {!data?.freeCreditValue ? <p>No</p> : <p>Yes</p>}
            </section>
        </section>
    );
};

export default PartnerValidity;

const EditValidity = (data) => {
    const { stateAuth, updatePartnerLocalData, updatePartnerInfo } = useAuth();
    const onFinish = async () => {
        updatePartnerInfo();
    };
    return (
        <div className="px-4 pb-4">
            <Form
                name="Sign-Up"
                initialValues={{
                    remember: true,
                }}
                layout="vertical"
                onFinish={onFinish}
            >
                <section className="d-flex mb-4" style={{ columnGap: 23 }}>
                    <div style={{ flexBasis: "50%" }}>
                        <Form.Item
                            name="partnershipValidity"
                            label="Partnership Validity"
                            initialValue={
                                stateAuth?.partnerData?.offerings
                                    ?.partnershipValidity
                            }
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Please select a Partnership Validity!",
                                },
                            ]}
                        >
                            <select
                                id="partnershipValidity"
                                style={{ width: 200 }}
                                placeholder="select your Partnership Validity"
                                onChange={(e) => {
                                    updatePartnerLocalData("offerings", {
                                        partnershipValidity: e.target.value,
                                    });
                                }}
                            >
                                {industry.map((item, i) => (
                                    <option value={item} key={i}>
                                        {" "}
                                        {item}{" "}
                                    </option>
                                ))}
                            </select>
                        </Form.Item>
                    </div>
                    <div style={{ flexBasis: "50%" }}>
                        <Form.Item
                            name="turnAroundTime"
                            label="Turnaround Time"
                            initialValue={
                                stateAuth?.partnerData?.offerings
                                    ?.turnAroundTime
                            }
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Please select a Partnership Validity!",
                                },
                            ]}
                        >
                            <select
                                id="turnAroundTime"
                                style={{ width: 200 }}
                                placeholder="select your Turnaround Time"
                                onChange={(e) => {
                                    updatePartnerLocalData("offerings", {
                                        turnAroundTime: e.target.value,
                                    });
                                }}
                            >
                                {months.map((item, i) => (
                                    <option value={item} key={i}>
                                        {" "}
                                        {item}{" "}
                                    </option>
                                ))}
                            </select>
                        </Form.Item>
                    </div>
                </section>

                <section>
                    <p className="modal-free-txt">Free Credit Value Allotted</p>
                    <span
                        className="d-flex align-items-center"
                        style={{ columnGap: 16 }}
                    >
                        <button
                            type="button"
                            onClick={() => {
                                updatePartnerLocalData("offerings", {
                                    freeCreditValue: true,
                                });
                            }}
                            className={`yes-btn ${
                                stateAuth?.partnerData?.offerings
                                    ?.freeCreditValue
                                    ? "active"
                                    : ""
                            } `}
                        >
                            Yes
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                updatePartnerLocalData("offerings", {
                                    freeCreditValue: false,
                                });
                            }}
                            className={`yes-btn ${
                                !stateAuth?.partnerData?.offerings
                                    ?.freeCreditValue
                                    ? "active"
                                    : ""
                            } `}
                        >
                            No
                        </button>
                    </span>
                </section>
                <section className="text-right">
                    <Button type="submit" label="Save" />
                </section>
            </Form>
        </div>
    );
};
