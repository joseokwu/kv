import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import left from "../../../assets/icons/chervonLeft.svg";
import scaleIcon from "../../../assets/icons/scaleIcon.svg";
import { Button, Modal, Select, TextField } from "../../../components";
import styles from "./CreateNewCriteriaCard.module.css";
import { Form } from "antd";
import { useAdmin } from "../../../hooks";
import { useSelector } from "react-redux";

export const CreateNewCriteriaCard = () => {
    const { setCriteria } = useAdmin();
    const [select, setSelect] = useState("");
    const onFinish = async (values) => {
        console.log({
            ...values,
            evaluationType: select,
        });
        setCriteria({
            ...values,
            evaluationType: select,
        });
        // close(false);
    };

    return (
        <div className={styles.card}>
            <h4 className="blue-title">Create New Criteria</h4>
            <hr />
            <Form
                name="Criteria"
                initialValues={{
                    remember: true,
                }}
                layout="vertical"
                onFinish={onFinish}
            >
                <div>
                    <TextField
                        label="Criteria Title"
                        name={"title"}
                        placeholder="Enter criteria title"
                        className="max_fill mb-4"
                    />

                    <Select
                        id="type"
                        name="evaluationType"
                        label="Evaluation Type"
                        onChange={(e) => setSelect(e.target.value)}
                        placeholder="Choose evaluation type"
                        options={["KV Member", "Mentors"]}
                        className="max_fill mb-4"
                    />

                    <TextField
                        name={"evaluationDate"}
                        label="Evaluation Date"
                        placeholder="yyyy-mm-dd"
                        type="date"
                        className="max_fill mb-4"
                    />

                    <section className="row">
                        <div className="col-lg-6">
                            <TextField
                                type="time"
                                name={"startDate"}
                                label="Start time"
                                className="max_fill mb-4"
                            />
                        </div>
                        <div className="col-lg-6">
                            <TextField
                                name={"endDate"}
                                type="time"
                                label="End time"
                                className="max_fill mb-4"
                            />
                        </div>
                    </section>

                    {/* <section className="d-flex align-items-center justify-content-end space-out mb-4">
                        <Button
                            label="Cancel"
                            variant="trans"
                            data-dismiss="modal"
                        />

                        <Button
                            label="Continue"
                            data-dismiss="modal"
                            // loading={loading}
                            type={"submit"}
                        />
                    </section> */}
                </div>
            </Form>
        </div>
    );
};
