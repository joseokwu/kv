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
            <h3 className="tab-section-title">Milestone/timeline</h3>
            <section className="d-flex justify-content-end">
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
    const { callUpdateStartupData } = useAuth();
    const [date, setDate] = useState();

    const handleDate = (value) => {
        setDate(moment(value).format("YYYY-MM-DD"));
        console.log(moment(value).format("YYYY-MM-DD"));
    };

    const onFinish = async (values) => {
        const updateValue = {
            ...values,
            dateOfAchievement: date,
        };
        // console.log({

        // })
        callUpdateStartupData({
            values: {
                mileStone: updateValue,
            },
        });
        close(false);
    };

    return (
        <MilestoneModal>
            <div className="milestoneModal mx-3">
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
                        />
                    </div>
                    <div className="my-3">
                        <TextareaCustom
                            name={"description"}
                            label="Description"
                            required={false}
                            min={0}
                            showCount={false}
                        />
                    </div>
                    <DatePicker
                        onChange={handleDate}
                        label="Date of achievement"
                        name={"dateOfAchievement"}
                    />
                    <div className="mt-5">
                        <button type="submit">Create task</button>
                    </div>
                </Form>
            </div>
        </MilestoneModal>
    );
};
