import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Modal, TextArea, Button, Tag2 } from "../../../../mentorComponents";
import edit from "../../../../assets/icons/edit.svg";
import del from "../../../../assets/icons/del.svg";
import { Form } from "antd";
import "./consulting.css";
import { SkillTab } from "../../../../Startupcomponents";
import { useAuth } from "../../../../hooks";
import { deleteProperty } from "../../../../utils/helpers";

const Consulting = ({ data }) => {
    console.log("consulting", data);

    return (
        <section className="profile-offering mb-3">
            <span className="text-right d-block">
                <img
                    src={edit}
                    alt={"edit"}
                    data-toggle="modal"
                    data-target="#editConsultingModal"
                    role="button"
                />
                <Modal title="Consultanting Offerings" id="editConsultingModal">
                    <EditConsulting data={data} />
                </Modal>
            </span>

            <div>
                <section className="mentor_consulting mb-3">
                    <p className="partner-cat-header mb-3">
                        Consulting Offerings
                    </p>
                    <p className="mentor_service">Service Areas</p>
                </section>

                <section>
                    <span
                        className="d-flex align-items-center flex-wrap"
                        style={{ columnGap: 10, rowGap: 10 }}
                    >
                        {data?.areaofService?.map((item, i) => (
                            <Tag2
                                key={i}
                                name={item}
                                // color={
                                //     item === "Engineering" ||
                                //     item === "Cyber Security"
                                //         ? "#40439A"
                                //         : item === "Career"
                                //         ? "#E31937"
                                //         : "#ACACAC"
                                // }
                            />
                        ))}
                    </span>
                </section>
            </div>
        </section>
    );
};

export default Consulting;

const EditConsulting = ({ data }) => {
    const [loader, setLoader] = useState(false);

    const { stateAuth, updateMentorProfileState, updateMentorInfo } = useAuth();

    const onDelete = (value) => {
        updateMentorProfileState("consultantOffering", {
            areaofService:
                stateAuth.mentorData.consultantOffering.areaofService.filter(
                    (item) => item !== value
                ),
        });
    };

    const handleSubmit = async () => {
        setLoader(true);

        const uploaded = await updateMentorInfo();

        if (uploaded) {
            toast.success("Saved Successfully");
        } else {
            toast.error("Something went wrong");
        }

        setLoader(false);
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            areaofService:
                stateAuth?.mentorData?.consultantOffering?.areaofService ?? [],
            serviceDescription:
                stateAuth?.mentorData?.consultantOffering?.serviceDescription ??
                "",
            promotion:
                stateAuth?.mentorData?.consultantOffering?.promotion ?? "",
        },
        validationSchema: Yup.object({
            areaofService: Yup.array().min(1).required("This is required"),
            serviceDescription: Yup.string().required("This field is required"),
            promotion: Yup.string().required("This field is required"),
        }),
        onSubmit: () => handleSubmit(),
    });

    const handleChange = (e, prefix = "") => {
        const { name, value } = e.target;
        if (prefix !== "") {
            updateMentorProfileState("consultantOffering", {
                [prefix]: {
                    ...stateAuth?.mentorData?.consultantOffering[prefix],
                    [name]: value,
                },
            });
            formik.handleChange(e);
            return;
        }

        updateMentorProfileState("consultantOffering", {
            [name]: value,
        });
        formik.handleChange(e);
    };

    const [inVal, setVal] = useState("");

    const handleKey = (e) => {
        if (e.keyCode === 13 || e.keyCode === 32) {
            e.preventDefault();
            if (
                inVal.trim() === "" ||
                stateAuth.mentorData.consultantOffering.areaofService.indexOf(
                    inVal.trim()
                ) !== -1
            )
                return;
            setVal("");
            updateMentorProfileState("consultantOffering", {
                areaofService: [
                    ...stateAuth.mentorData.consultantOffering.areaofService,
                    inVal,
                ],
            });
        }
    };

    const handleChangeVal = (e) => {
        setVal(e.target.value);
    };

    return (
        <form className="px-4 pb-4" onSubmit={formik.handleSubmit}>
            <section className="col-md-12 mb-4">
                <label>{"What are your areas of service?"}</label>
                <input
                    onChange={handleChangeVal}
                    style={{ width: "100%", outline: "none", color: "purple" }}
                    value={inVal}
                    type="text"
                    placeholder="Enter your skills and press the space button to add "
                    className="py-2 px-3 mb-1"
                    onKeyDown={handleKey}
                />

                {formik?.values?.areaofService &&
                    formik?.values?.areaofService.map((item, i) => (
                        <SkillTab
                            key={i}
                            skill={item}
                            onClick={() => onDelete(item)}
                        />
                    ))}
                {formik.errors.areaofService ? (
                    <label className="error">
                        {formik.errors.areaofService}
                    </label>
                ) : null}
            </section>

            <section className="mb-4">
                <TextArea
                    label={"Write a short description of your service."}
                    placeholder={"e.g I was made a managing director...."}
                    rows={"6"}
                    name="serviceDescription"
                    value={formik.values?.serviceDescription}
                    onChange={handleChange}
                />
                {formik.errors.serviceDescription ? (
                    <label className="error">
                        {formik.errors.serviceDescription}
                    </label>
                ) : null}
            </section>

            <section className="mb-4">
                <TextArea
                    label={
                        "If any, what is your offer / promotion for the Alchemist community?"
                    }
                    placeholder={"e.g I was made a managing director...."}
                    rows={"6"}
                    name="promotion"
                    value={formik.values?.promotion}
                    onChange={handleChange}
                />
                {formik.errors.promotion ? (
                    <label className="error">{formik.errors.promotion}</label>
                ) : null}
            </section>

            <Form.Item>
                <div className="text-right mb-4 mt-3">
                    <Button
                        label="Save"
                        loading={loader}
                        onClick={() => setLoader()}
                    />
                </div>
            </Form.Item>
        </form>
    );
};
