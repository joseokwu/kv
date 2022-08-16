import React, { useState } from "react";
import CountryDropdown from "country-dropdown-with-flags-for-react";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import {
    Modal,
    TextField,
    TextArea,
    Select,
    PhoneInput,
    Button,
} from "../../../../mentorComponents";
import edit from "../../../../assets/icons/edit.svg";
import mentorPic from "../../../../assets/images/mentorPic.svg";
import twitter from "../../../../assets/images/profileTwitter.svg";
import linkedIn from "../../../../assets/images/profileLinkedIn.svg";
import location from "../../../../assets/icons/locationSm.svg";
import web from "../../../../assets/icons/webSm.svg";
import "./details.css";
import { useAuth } from "../../../../hooks";

const Details = ({ data }) => {
    console.log(data);

    return (
        <section className="mentor_profile_info">
            <div className="mentor_profile_banner"></div>

            <div className="mentor_profile_contact_info">
                <Modal title="Edit Intro" id="mentorProfileEditModal">
                    <ProfileInfo data={data} />
                </Modal>
                <span className="edit-info">
                    <img
                        src={edit}
                        alt={"edit"}
                        data-toggle={"modal"}
                        data-target={"#mentorProfileEditModal"}
                        role={"button"}
                    />
                </span>
                <span className="profile-image">
                    <img
                        src={data?.logo !== "" ? data?.logo : mentorPic}
                        alt={"mentor profile pic"}
                    />
                </span>

                <article>
                    <h1 className="mb-2 profile-name">
                        {data?.firstname} {data?.lastname}
                    </h1>

                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="d-flex align-items-center profile-bio">
                            <p> {data?.email} </p>
                        </span>
                        <span className="text-right">
                            <a href={data?.twitter} target="_blank">
                                <img
                                    src={twitter}
                                    alt="twitter"
                                    className="mr-3"
                                />
                            </a>
                            <a href={data?.linkedin} target="_blank">
                                <img src={linkedIn} alt="linkedIn" />
                            </a>
                        </span>
                    </div>

                    <div className="d-flex align-items-center web-phone-local mb-3">
                        <p>
                            <img src={location} alt="location" /> {data?.city},{" "}
                            {data?.country || "-"}
                        </p>
                        <a href={data?.website} target="_blank">
                            <img src={web} alt="web" />
                            {data?.website || "-"}
                        </a>
                    </div>

                    <div className="profile-bio pb-5">
                        <p>{data?.bio}</p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Details;

const ProfileInfo = ({ data }) => {
    const { updateMentorProfileState, updateMentorInfo, stateAuth } = useAuth();
    const [loading, setLoading] = useState(false);
    const [contacts, setContacts] = useState({
        country: stateAuth?.mentorData?.personalDetail?.country ?? "",
    });

    const handleSubmit = async () => {
        setLoading(true);

        const uploaded = await updateMentorInfo();

        if (uploaded) {
            toast.success("Saved Successfully");
        } else {
            toast.error("Something went wrong");
        }

        setLoading(false);
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstname: stateAuth?.mentorData?.personalDetail?.firstname ?? "",
            lastname: stateAuth?.mentorData?.personalDetail?.lastname ?? "",
            designation:
                stateAuth?.mentorData?.personalDetail?.designation ?? "",
            email: stateAuth?.mentorData?.personalDetail?.email ?? "",
            referral: stateAuth?.mentorData?.personalDetail?.referral ?? "",
            from: stateAuth?.mentorData?.personalDetail?.from ?? "",
            linkedin: stateAuth?.mentorData?.personalDetail?.linkedin ?? "",
            crunchbase: stateAuth?.mentorData?.personalDetail?.crunchbase ?? "",
            angelist: stateAuth?.mentorData?.personalDetail?.angelist ?? "",
            twitter: stateAuth?.mentorData?.personalDetail?.twitter ?? "",
            website: stateAuth?.mentorData?.personalDetail?.website ?? "",
            whatsapp: stateAuth?.mentorData?.personalDetail?.whatsapp ?? "",
            skypeid: stateAuth?.mentorData?.personalDetail?.skypeid ?? "",
            googlemeet: stateAuth?.mentorData?.personalDetail?.googlemeet ?? "",
            country:
                stateAuth?.mentorData?.personalDetail?.country ?? "Nigeria",
            state: stateAuth?.mentorData?.personalDetail?.state ?? "",
            city: stateAuth?.mentorData?.personalDetail?.city ?? "",
            permanentaddress:
                stateAuth?.mentorData?.personalDetail?.permanentaddress ?? "",
            gender: stateAuth?.mentorData?.personalDetail?.gender ?? "",
            mobilenumber:
                stateAuth?.mentorData?.personalDetail?.mobilenumber ?? "",
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("This field is required"),
            lastname: Yup.string().required("This field is required"),
            email: Yup.string()
                .email("Invalid email")
                .required("This field is required"),
            designation: Yup.string().required("This field is required"),
            gender: Yup.string().required("This field is required"),
            linkedin: Yup.string()
                .url("Invalid url")
                .required("This field is required"),
            whatsapp: Yup.string().required("This field is required"),
            twitter: Yup.string().required("This field is required"),
            country: Yup.string().required("This field is required"),
            state: Yup.string().required("This field is required"),
            city: Yup.string().required("This field is required"),
            mobilenumber: Yup.string()
                .min(10)
                .max(14)
                .required("This is a required field"),
            skypeid: Yup.string().required("This field is required"),
            googlemeet: Yup.string()
                .url("Invalid link")
                .required("This field is required"),
            // permanentaddress: Yup.string().required("This field is required"),
            referral: Yup.string().required("This field is required"),
            from: Yup.string().required("This field is required"),
            crunchbase: Yup.string()
                .url("Invalid link")
                .required("This field is required"),
            website: Yup.string()
                .url("Invalid url")
                .required("This field is required"),
            angelist: Yup.string().required("This field is required"),
        }),

        onSubmit: () => handleSubmit(),
    });

    const handleChange = (e, prefix = "") => {
        const { name, value } = e.target;
        if (prefix !== "") {
            updateMentorProfileState("personalDetail", {
                [prefix]: {
                    ...stateAuth?.mentorData?.personalDetail[prefix],
                    [name]: value,
                },
            });
            formik.handleChange(e);
            return;
        }

        updateMentorProfileState("personalDetail", {
            [name]: value,
        });
        formik.handleChange(e);
    };

    return (
        <form className="px-4" onSubmit={formik.handleSubmit}>
            <section className="mb-4">
                <TextArea
                    label={"Brief Introduction*"}
                    placeholder={"Enter brief bio about you"}
                    required={true}
                    rows={1}
                    name="bio"
                    value={formik.values?.bio}
                    onChange={handleChange}
                />
            </section>

            <div className="row">
                <section className="col-md-6 mb-4">
                    <TextField
                        label={"First Name*"}
                        placeholder={"Micheal"}
                        required={true}
                        name="firstname"
                        value={formik.values.firstname}
                        onChange={handleChange}
                    />
                    {formik.touched.firstname && formik.errors.firstname ? (
                        <label className="error">
                            {formik.errors.firstname}
                        </label>
                    ) : null}
                </section>
                <section className="col-md-6 mb-4">
                    <TextField
                        label={"Last Name*"}
                        placeholder={"Smith"}
                        required={true}
                        name="lastname"
                        value={formik.values.lastname}
                        onChange={handleChange}
                    />
                    {formik.touched.lastname && formik.errors.lastname ? (
                        <label className="error">
                            {formik.errors.lastname}
                        </label>
                    ) : null}
                </section>

                <section className="col-md-6 mb-4">
                    <TextField
                        label={"Designation"}
                        placeholder={"Engr"}
                        name="designation"
                        value={formik.values.designation}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.designation && formik.errors.designation ? (
                        <label className="error">
                            {formik.errors.designation}
                        </label>
                    ) : null}
                </section>
                <section className="col-md-6 mb-4">
                    <Select
                        label={"Gender"}
                        placeholder={"Male"}
                        name="gender"
                        options={["Male", "Female"]}
                        value={formik.values.gender}
                        onChange={handleChange}
                    />
                    {formik.touched.gender && formik.errors.gender ? (
                        <label className="error">{formik.errors.gender}</label>
                    ) : null}
                </section>

                <section className="col-md-6 mb-4">
                    <TextField
                        label={"Email*"}
                        placeholder={"Michealsmith@gmail.com"}
                        required={true}
                        name="email"
                        value={formik.values.email}
                        onChange={handleChange}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <label className="error">{formik.errors.email}</label>
                    ) : null}
                </section>
                <section className="col-md-6 mb-4">
                    <PhoneInput
                        label="Mobile Number"
                        name="mobilenumber"
                        value={formik.values.mobilenumber}
                        onChange={(e) =>
                            handleChange({
                                target: { name: "mobilenumber", value: e.id },
                            })
                        }
                    />
                    {formik.touched.mobilenumber &&
                    formik.errors.mobilenumber ? (
                        <label className="error">
                            {formik.errors.mobilenumber}
                        </label>
                    ) : null}
                </section>

                <section className="col-md-12 mb-4">
                    <TextArea
                        label={"Permanent Address"}
                        placeholder={"Enter your permanent address"}
                        required={true}
                        rows={1}
                        name="permanentaddress"
                        value={formik.values.permanentaddress}
                        onChange={handleChange}
                    />
                    {formik.touched.permanentaddress &&
                    formik.errors.permanentaddress ? (
                        <label className="error">
                            {formik.errors.permanentaddress}
                        </label>
                    ) : null}
                </section>

                <section className="col-md-4 mb-4">
                    <label>Country</label>

                    <CountryDropdown
                        id="country"
                        type="text"
                        name="country"
                        className="form-control px-5 py-1 country-bg"
                        preferredCountries={["ng"]}
                        value={contacts.country}
                        // value={formik.values.country}
                        handleChange={(e) => {
                            setContacts({
                                ...contacts,
                                country: e.target.value,
                            });
                            handleChange({
                                target: {
                                    name: "country",
                                    value: e.target.value,
                                },
                            });
                        }}
                    ></CountryDropdown>
                    {formik.touched.country && formik.errors.country ? (
                        <label className="error">{formik.errors.country}</label>
                    ) : null}
                </section>
                <section className="col-md-4 mb-4">
                    <TextField
                        label={"State"}
                        placeholder={"Enter your state"}
                        name="state"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.state && formik.errors.state ? (
                        <label className="error">{formik.errors.state}</label>
                    ) : null}
                </section>
                <section className="col-md-4 mb-4">
                    <TextField
                        label={"City"}
                        placeholder={"Enter your city"}
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.city && formik.errors.city ? (
                        <label className="error">{formik.errors.city}</label>
                    ) : null}
                </section>

                <section className="col-md-6 mb-4">
                    <TextField
                        label={"LinkedIn*"}
                        placeholder={"Enter Linkdin link"}
                        required={true}
                        name="linkedin"
                        value={formik.values.linkedin}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.linkedin && formik.errors.linkedin ? (
                        <label className="error">
                            {formik.errors.linkedin}
                        </label>
                    ) : null}
                </section>
                <section className="col-md-6 mb-4">
                    <TextField
                        label={"Twitter*"}
                        placeholder={"Enter Twitter link"}
                        required={true}
                        name="twitter"
                        value={formik.values.twitter}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.twitter && formik.errors.twitter ? (
                        <label className="error">{formik.errors.twitter}</label>
                    ) : null}
                </section>

                <section className="col-md-6 mb-4">
                    <TextField
                        label={"Angelist"}
                        placeholder={"www.knightventure/michealsmith"}
                        name="angelist"
                        value={formik.values.angelist}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.angelist && formik.errors.angelist ? (
                        <label className="error">
                            {formik.errors.angelist}
                        </label>
                    ) : null}
                </section>
                <section className="col-md-6 mb-4">
                    <TextField
                        label={"Crunchbase"}
                        placeholder={"Enter website"}
                        name="crunchbase"
                        value={formik.values.crunchbase}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.crunchbase && formik.errors.crunchbase ? (
                        <label className="error">
                            {formik.errors.crunchbase}
                        </label>
                    ) : null}
                </section>

                <section className="col-md-6 mb-4">
                    <TextField
                        label={"Whatsapp"}
                        placeholder={"www.knightventure/michealsmith"}
                        name="whatsapp"
                        value={formik.values.whatsapp}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.whatsapp && formik.errors.whatsapp ? (
                        <label className="error">
                            {formik.errors.whatsapp}
                        </label>
                    ) : null}
                </section>
                <section className="col-md-6 mb-4">
                    <TextField
                        label={"Website/Blog"}
                        placeholder={"Enter website"}
                        name="website"
                        value={formik.values.website}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.website && formik.errors.website ? (
                        <label className="error">{formik.errors.website}</label>
                    ) : null}
                </section>

                <section className="col-md-6 mb-4">
                    <TextField
                        label={"Skype Id*"}
                        placeholder={"www.knightventure/michealsmith"}
                        required={true}
                        name="skypeid"
                        value={formik.values.skypeid}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.skypeid && formik.errors.skypeid ? (
                        <label className="error">{formik.errors.skypeid}</label>
                    ) : null}
                </section>
                <section className="col-md-6 mb-4">
                    <TextField
                        label={"Google Meet*"}
                        placeholder={"Enter website"}
                        required={true}
                        name="googlemeet"
                        value={formik.values.googlemeet}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.googlemeet && formik.errors.googlemeet ? (
                        <label className="error">
                            {formik.errors.googlemeet}
                        </label>
                    ) : null}
                </section>

                <section className="text-right mb-3">
                    <Button label="Save" loading={loading} />
                </section>
            </div>
        </form>
    );
};
