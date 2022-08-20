import React, { useState } from "react";
import {
    MilestoneList,
    SmallModal,
    TextArea,
    TextField,
} from "../../../../Startupcomponents";
import { MilestoneModal } from "./milestone.styled";
import { Form, DatePicker } from "antd";
import { TextareaCustom } from "../../../../components/textArea/cutstomTextarea";
import { useAuth } from "../../../../hooks/useAuth";
import moment from "moment";

export const Milestone = ({ data = [] }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            {showModal ? (
                <SmallModal
                    id="updateMilestoneModal"
                    title=""
                    closeModal={setShowModal}
                >
                    <UpdateMilestoneModal close={setShowModal} />
                </SmallModal>
            ) : (
                <span></span>
            )}
            <section className="d-flex align-items-center justify-content-between">
                <h3 className="tab-section-title">Milestone/timeline</h3>
                <button
                    className="teamBtn"
                    data-target="#updateMilestoneModal"
                    onClick={() => setShowModal(true)}
                >
                    Update
                </button>
            </section>
            <MilestoneList data={data} />
        </div>
    );
};

export const UpdateMilestoneModal = ({ close }) => {
    const { stateAuth, callUpdateStartupData, updateStartupInfo } = useAuth();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dateOfAchievement: "",
    });

    const onFinish = async (values) => {
        console.log(stateAuth?.profileData?.startupRes?.mileStone);

        await callUpdateStartupData({
            ...stateAuth?.profileData?.startupRes,
            mileStone: [
                ...stateAuth?.profileData?.startupRes?.mileStone,
                formData,
            ],
        });
        await updateStartupInfo();
        close(false);
    };

    console.log(stateAuth?.profileData?.startupRes);
    return (
        <MilestoneModal>
            <div className="milestoneModal px-3">
                <Form
                    name="Mile stone"
                    initialValues={{
                        remember: true,
                    }}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <div>
                        <h4>Update Milestone</h4>
                    </div>
                    <div className="mt-5">
                        <TextField
                            label="Title"
                            name={"title"}
                            required={true}
                            placeholder="Enter name of Title"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    title: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <div className="my-3">
                        <TextareaCustom
                            name={"description"}
                            label="Description"
                            required={false}
                            min={0}
                            showCount={false}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    description: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <Form.Item
                        name="dateOfAchievement"
                        label="Date of achievement"
                        initialValue={
                            formData?.dateOfAchievement
                                ? moment(formData?.dateOfAchievement)
                                : undefined
                        }
                        rules={[
                            {
                                required: true,
                                message:
                                    "Please select the Date of achievement",
                            },
                        ]}
                    >
                        <DatePicker
                            name={"dateOfAchievement"}
                            defaultValue={
                                formData?.dateOfAchievement
                                    ? moment(formData?.dateOfAchievement)
                                    : undefined
                            }
                            onChange={(dateString) => {
                                setFormData({
                                    ...formData,
                                    dateOfAchievement: new Date(
                                        dateString
                                    ).toISOString(),
                                });
                            }}
                        />
                    </Form.Item>
                    <div className="mt-5">
                        <button type="submit">Create task</button>
                    </div>
                </Form>
            </div>
        </MilestoneModal>
    );
};
