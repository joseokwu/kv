import React from "react";
import "./createAssignment.css";
import { AuthButton } from "../../../../mentorComponents";
import { TextField, TextArea } from "../../../../Startupcomponents";
import { Form, Select, DatePicker, TimePicker } from "antd";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import compLogo from "../../../../assets/images/compLogo.svg";
import Upload from "../../../../mentorComponents/upload";
import left from "../../../../assets/icons/chervonLeft.svg";
import { useHistory } from "react-router-dom";
import { industry } from "../../../../constants/domiData";

const { Option } = Select;

export const MentorCreateAssignment = ({ history }) => {
    const { goBack } = history;
    const onFileChange = (files) => {
        console.log(files);
    };

    const onSubmit = () => {
        push();
    };

    const { push } = useHistory();
    return (
        <div className="assignment_main">
            <section
                className="d-flex align-items-center mb-5"
                role="button"
                onClick={goBack}
            >
                <img
                    src={left}
                    alt="left"
                    style={{ transform: "rotate(180deg)" }}
                />
                <span className="ml-2 bread-start">Go Back</span>
            </section>

            <Form
                style={{ marginBottom: "4rem" }}
                name="Create Assignment"
                initialValues={{
                    remember: true,
                }}
                layout="vertical"
                onFinish={onSubmit}
                className="px-3"
            >
                <div className="col-lg-12 create_assignment_form mb-4 p-5">
                    <section className="">
                        <h3>Create Assignment</h3>
                    </section>

                    <section className="col-lg-12 mb-4 mt-4">
                        <Form.Item
                            name="program"
                            label="Program"
                            // initialValue={
                            //     stateAuth?.profileData?.startupRes
                            //         ?.startUpProfile?.companySize
                            // }
                            rules={[
                                {
                                    required: true,
                                    message: "Please select a program",
                                },
                            ]}
                        >
                            <Select
                                id="programs"
                                // style={{ width: 200 }}
                                // placeholder="Enter program"
                                onChange={(e) => {
                                    // updateProfile("startUpProfile", {
                                    //     companySize: e,
                                    // })
                                }}
                            >
                                {industry.map((item, i) => (
                                    <Option value={item} key={i}>
                                        {item}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </section>

                    <section className="col-lg-12 mb-4">
                        <TextField
                            name="topic"
                            label={"Topic"}
                            placeholder={""}
                            required={true}
                        />
                    </section>

                    <section className="col-lg-12 mb-4">
                        <TextArea
                            name="description"
                            label={"Description"}
                            placeholder={""}
                            rows={3}
                        />
                    </section>

                    <section className="col-lg-12 mb-4">
                        <Upload onFileChange={(files) => onFileChange(files)} />
                    </section>

                    <div className="row col-lg-12">
                        <section className="col-lg-6 mb-4">
                            <Form.Item
                                name="date"
                                label="Deadline (day)"
                                // initialValue={
                                //     stateAuth?.profileData?.startupRes
                                //         ?.startUpProfile?.yearFounded
                                //         ? moment(
                                //               stateAuth?.profileData?.startupRes
                                //                   ?.startUpProfile?.yearFounded
                                //           )
                                //         : undefined
                                // }
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please select the deadline date",
                                    },
                                ]}
                            >
                                <DatePicker
                                    className="col-md-12 py-2 px-2"
                                    id="date"
                                    name="date"
                                    // defaultValue={
                                    //     stateAuth?.profileData?.startupRes
                                    //         ?.startUpProfile?.yearFounded
                                    //         ? moment(
                                    //               stateAuth?.profileData
                                    //                   ?.startupRes
                                    //                   ?.startUpProfile
                                    //                   ?.yearFounded
                                    //           )
                                    //         : undefined
                                    // }
                                    format={"YYYY-MM-DD"}
                                    onChange={(_, dateString) => {
                                        console.log(dateString);
                                        return dateString;
                                    }}
                                    handleDateInput
                                />
                            </Form.Item>
                        </section>

                        <section className="col-lg-6 mb-4">
                            <Form.Item
                                name="time"
                                label="Deadline Time"
                                // initialValue={
                                //     stateAuth?.profileData?.startupRes
                                //         ?.startUpProfile?.yearFounded
                                //         ? moment(
                                //               stateAuth?.profileData?.startupRes
                                //                   ?.startUpProfile?.yearFounded
                                //           )
                                //         : undefined
                                // }
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please select the deadline time",
                                    },
                                ]}
                            >
                                <TimePicker
                                    className="col-md-12 py-2 px-2"
                                    id="time"
                                    name="time"
                                    defaultValue={
                                        // stateAuth?.profileData?.startupRes
                                        //     ?.startUpProfile?.yearFounded
                                        //     ? moment(
                                        //           stateAuth?.profileData
                                        //               ?.startupRes
                                        //               ?.startUpProfile
                                        //               ?.yearFounded
                                        //       )
                                        //     : undefined
                                        undefined
                                    }
                                    format={"YYYY-MM-DD"}
                                    onChange={(_, timeString) => {
                                        console.log(timeString);
                                        return timeString;
                                    }}
                                />
                            </Form.Item>
                        </section>
                    </div>

                    <section className="">
                        <div className="col-lg-12">
                            <p>Startups</p>
                        </div>
                    </section>

                    <section className="row col-lg-12 justify-content-between mb-5">
                        {/* <div className="col-lg-3 mt-4">
            <img src={compLogo} alt="company logo" />
            <h2 className="pt-2">Yebox Technology</h2>
          </div>
          <div className="col-lg-3 mt-4">
            <img src={compLogo} alt="company logo" />
            <h2 className="pt-2">Yebox Technology</h2>
          </div>
          <div className=" col-lg-3 mt-4">
            <img src={compLogo} alt="company logo" />
            <h2 className="pt-2">Yebox Technology</h2>
          </div>
          <div className="col-lg-3 mt-4">
            <img src={compLogo} alt="company logo" />
            <h2 className="pt-2">Yebox Technology</h2>
          </div> */}
                    </section>
                </div>
                <div className="text-right">
                    <AuthButton
                        label="Create"
                        type="submit"
                        // onClick={() => push()}
                    />
                </div>
            </Form>
        </div>
    );
};
