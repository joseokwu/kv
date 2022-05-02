import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CountryDropdown from "country-dropdown-with-flags-for-react";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import imageRep from "../../../../assets/icons/mentorDetails.svg";
import add from "../../../../assets/icons/addFile.svg";
import {
  Button,
  TextField,
  PhoneInput,
  TextArea,
  Select,
} from "../../../../mentorComponents/index";
import { CircularLoader } from "../../../../mentorComponents/CircluarLoader/CircularLoader";
import FormCard from "../../../../mentorComponents/formCard/FormCard";
import { useAuth } from "../../../../hooks/useAuth";
import { upload } from "../../../../services/utils";

import "./details.css";

// import { updateMentorProfile } from "../../../../services/mentor";
import { useActivity } from "../../../../hooks/useBusiness";
import { updateMentorProfile } from "../../../../services/mentor";
import { hearOption } from "../../../../utils/utils";

// import { toast } from "react-toastify";

const Details = () => {
  const { updateMentorProfileState, updateMentorInfo } = useAuth();
  const {
    changePath,
    state: { path },
  } = useActivity();
  const { goBack, push } = useHistory();
  const { stateAuth } = useAuth();
  const [opts, setOpts] = useState("");
  const [loading, setLoading] = useState(false);
  const [logoUploading, setLogoUploading] = useState(false);

  const [nextloading, setNextLoading] = useState(false);
  const [logo, setLogo] = useState(
    stateAuth?.mentorData?.personalDetail?.logo !== ""
      ? stateAuth?.mentorData?.personalDetail?.logo
      : imageRep
  );
  const [phone, setPhone] = useState(
    stateAuth?.mentorData?.personalDetail?.contactInfo?.mobilenumber ?? ""
  );
  const [contacts, setContacts] = useState({
    country: stateAuth?.mentorData?.personalDetail?.country ?? "",
  });

  const next = () => {
    changePath(path + 1);
  };

  const handleSubmit = async () => {
    setLoading(true);

    const uploaded = await updateMentorInfo();

    if (uploaded) {
      toast.success("Saved Successfully");
    } else {
      toast.error("Something went wrong");
    }
    if (uploaded && next) {
      push("#work_experience");
    }
    setLoading(false);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: stateAuth?.mentorData?.personalDetail?.firstname ?? "",
      lastname: stateAuth?.mentorData?.personalDetail?.lastname ?? "",
      designation: stateAuth?.mentorData?.personalDetail?.designation ?? "",
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
      country: stateAuth?.mentorData?.personalDetail?.country ?? "Nigeria",
      state: stateAuth?.mentorData?.personalDetail?.state ?? "",
      city: stateAuth?.mentorData?.personalDetail?.city ?? "",
      permanentaddress:
        stateAuth?.mentorData?.personalDetail?.permanentaddress ?? "",
      gender: stateAuth?.mentorData?.personalDetail?.gender ?? "",
      mobilenumber: stateAuth?.mentorData?.personalDetail?.mobilenumber ?? "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .matches(/^[A-Za-z ]+$/, "Numbers or special characters not allowed")
        .required("This field is required"),
      lastname: Yup.string()
        .matches(/^[A-Za-z ]+$/, "Numbers or special characters not allowed")
        .required("This field is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("This field is required"),
      designation: Yup.string()
        .matches(/^[A-Za-z ]+$/, "Numbers or special characters not allowed")
        .required("This field is required"),
      gender: Yup.string().required("This field is required"),
      linkedin: Yup.string()
        .url("Invalid url")
        .required("This field is required"),
      whatsapp: Yup.string()
        .url("Invalid link")
        .required("This field is required"),
      twitter: Yup.string()
        .url("Invalid url")
        .required("This field is required"),
      country: Yup.string().required("This field is required"),
      state: Yup.string().required("This field is required"),
      city: Yup.string().required("This field is required"),
      mobilenumber: Yup.string()
        .min(10)
        .max(14)
        .required("This is a required field"),
      skypeid: Yup.string()
        .url("Invalid url")
        .required("This field is required"),
      googlemeet: Yup.string()
        .url("Invalid link")
        .required("This field is required"),
      permanentaddress: Yup.string().required("This field is required"),
      referral: Yup.string()
        .matches(/^[A-Za-z ]+$/, "Numbers or special characters not allowed")
        .required("This field is required"),
      from: Yup.string().required("This field is required"),
      crunchbase: Yup.string()
        .url("Invalid link")
        .required("This field is required"),
      website: Yup.string()
        .url("Invalid url")
        .required("This field is required"),
      angelist: Yup.string().required("This field is required"),
    }),
    onSubmit: (value) => handleSubmit(),
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

  const onChangeImage = async (e) => {
    const { files } = e.target;
    const formData = new FormData();
    formData.append("dir", "kv");
    formData.append("ref", stateAuth.user?.userId);
    formData.append("type", "image");
    formData.append(0, files[0]);
    try {
      setLogoUploading(true);
      const response = await upload(formData);
      setLogo(response?.path);
      updateMentorProfileState("personalDetail", {
        logo: response?.path,
      });
      setLogoUploading(false);
    } catch (error) {
      setLogoUploading(false);
      toast.error(error?.response?.data?.message ?? "Unable to upload image");
    }
  };

  return (
    <div className="mentor_details_form_wrap">
      <h3>Personal Details</h3>
      <p>Let’s get to know you</p>
      <form onSubmit={formik.handleSubmit}>
        <div className="row mb-4">
          <section className="col-md">
            <div className="form-dp">
              {logoUploading ? (
                <CircularLoader color={"#000"} />
              ) : (
                <span className={logo === imageRep ? "" : "image-placeholder"}>
                  <img src={logo} alt="placeholder" />
                </span>
              )}

              <span className="add-dp">
                <input type="file" id="dp" onChange={onChangeImage} />
                <img src={add} alt="add" />
              </span>
            </div>
          </section>
        </div>

        <FormCard>
          <div className="personal_info">
            <h4>Personal Infomation</h4>
          </div>

          <div className="row">
            <section className="col-md-6 mb-4">
              <label>First Name*</label>
              <TextField
                // label={'First Name*'}
                id="firstname"
                type="text"
                name="firstname"
                value={formik.values.firstname}
                onChange={(e) => handleChange(e)}
                placeholder={"Micheal"}
                // required={true}
              />
              {formik.errors.firstname ? (
                <label className="error">{formik.errors.firstname}</label>
              ) : null}
            </section>
            <section className="col-md-6 mb-4">
              <label>Last Name*</label>
              <TextField
                // label={'Last Name*'}
                id="lastname"
                type="text"
                name="lastname"
                value={formik.values.lastname}
                onChange={(e) => handleChange(e)}
                placeholder={"Smith"}
                // required={true}
              />
              {formik.errors.lastname ? (
                <label className="error">{formik.errors.lastname}</label>
              ) : null}
            </section>

            <section className="col-md-6 mb-4">
              <p className="gender_title mb-2">Gender</p>
              <section className="gender_choice">
                <button
                  className="male_btn"
                  style={
                    formik.values.gender === "male"
                      ? {
                          color: "#2e3192",
                          background: "#dcebff",
                        }
                      : {}
                  }
                  onClick={() =>
                    handleChange({ target: { name: "gender", value: "male" } })
                  }
                >
                  Male
                </button>
                <button
                  className="female_btn"
                  style={
                    formik.values.gender === "female"
                      ? {
                          color: "#2e3192",
                          background: "#dcebff",
                        }
                      : {}
                  }
                  onClick={() =>
                    handleChange({
                      target: { name: "gender", value: "female" },
                    })
                  }
                >
                  Female
                </button>
              </section>
              {formik.errors.gender ? (
                <label className="error">{formik.errors.gender}</label>
              ) : null}
            </section>

            <section className="col-md-6 mb-4">
              <label>Designation</label>
              <TextField
                // label={'Designation'}
                type="text"
                name="designation"
                value={formik.values.designation}
                onChange={(e) => handleChange(e)}
                placeholder={"Ex. Engr"}
              />
              {formik.errors.designation ? (
                <label className="error">{formik.errors.designation}</label>
              ) : null}
            </section>

            <section className="col-md-12 mb-4">
              <TextArea
                type="email"
                name="email"
                value={formik.values.email}
                onChange={(e) => handleChange(e)}
                label={"Email*"}
                placeholder={"michealsmith@gmail.com"}
                // required={true}
                rows={"1"}
              />
              {formik.errors.email ? (
                <label className="error">{formik.errors.email}</label>
              ) : null}
            </section>
          </div>
        </FormCard>

        <FormCard>
          <div className="personal_info">
            <h4>Social Media</h4>
          </div>

          <div className="row">
            <section className="col-md-6 mb-4">
              <label>LinkedIn*</label>
              <TextField
                // label={'LinkedIn*'}
                type="text"
                name="linkedin"
                value={formik.values.linkedin}
                onChange={(e) => handleChange(e)}
                placeholder={"Enter LinkdIn link"}
                // required={true}
              />
              {formik.errors.linkedin ? (
                <label className="error">{formik.errors.linkedin}</label>
              ) : null}
            </section>
            <section className="col-md-6 mb-4">
              <label>Twitter</label>
              <TextField
                // label={'Twitter'}
                type="text"
                name="twitter"
                value={formik.values.twitter}
                onChange={(e) => handleChange(e)}
                placeholder={"Enter Twitter link"}
              />
              {formik.touched.twitter && formik.errors.twitter ? (
                <label className="error">{formik.errors.twitter}</label>
              ) : null}
            </section>

            <section className="col-md-6 mb-4">
              <label>Angelist</label>
              <TextField
                // label={'Angelist'}
                type="text"
                name="angelist"
                value={formik.values.angelist}
                onChange={(e) => handleChange(e)}
                placeholder={"Enter Angelist link"}
              />
              {formik.touched.angelist && formik.errors.angelist ? (
                <label className="error">{formik.errors.angelist}</label>
              ) : null}
            </section>
            <section className="col-md-6 mb-4">
              <label>Crunchbase</label>
              <TextField
                // label={'Crunchbase'}
                type="text"
                name="crunchbase"
                value={formik.values.crunchbase}
                onChange={(e) => handleChange(e)}
                placeholder={"Enter Crunchbase link"}
              />
              {formik.errors.crunchbase ? (
                <label className="error">{formik.errors.crunchbase}</label>
              ) : null}
            </section>

            <section className="col-md-6 mb-4">
              <label>Whatsapp*</label>
              <TextField
                // label={'Whatsapp*'}
                type="text"
                name="whatsapp"
                value={formik.values.whatsapp}
                onChange={(e) => handleChange(e)}
                placeholder={"Enter Whatsapp number"}
              />
              {formik.errors.whatsapp ? (
                <label className="error">{formik.errors.whatsapp}</label>
              ) : null}
            </section>
            <section className="col-md-6 mb-4">
              <label>Website</label>
              <TextField
                // label={'Website'}
                type="text"
                name="website"
                value={formik.values.website}
                onChange={(e) => handleChange(e)}
                placeholder={"Enter Webiste link"}
                wid
              />
              {formik.errors.website ? (
                <label className="error">{formik.errors.website}</label>
              ) : null}
            </section>
          </div>
        </FormCard>

        <FormCard>
          <div className="personal_info">
            <h4>Contact Info</h4>
          </div>

          <div className="row">
            <section className="col-md-6 mb-4">
              <label>Skype Id*</label>
              <TextField
                // label={'Skype Id*'}
                type="text"
                name="skypeid"
                id="skypeid"
                value={formik.values.skypeid}
                onChange={(e) => handleChange(e)}
                placeholder={"www.knightventure/michealsmith"}
                required={true}
              />
              {formik.errors.skypeid ? (
                <label className="error">{formik.errors.skypeid}</label>
              ) : null}
            </section>
            <section className="col-md-6 mb-4">
              <label>Google Meet*</label>
              <TextField
                // label={'Zoom Link*'}
                type="text"
                name="googlemeet"
                id="googlemeet"
                value={formik.values.googlemeet}
                onChange={(e) => handleChange(e)}
                placeholder={"Enter Google Meet Link"}
                required={true}
              />
              {formik.errors.googlemeet ? (
                <label className="error">{formik.errors.googlemeet}</label>
              ) : null}
            </section>
            <section className="col-md-4 mb-4">
              <label>Country</label>
              {/* <TextField
                // label={'Country'}
                placeholder={'Enter your country'}
              /> */}
              <CountryDropdown
                id="country"
                type="text"
                name="country"
                className="form-control px-5 py-1 country-bg"
                preferredCountries={["ng"]}
                value={contacts.country}
                // value={formik.values.country}
                handleChange={(e) => {
                  setContacts({ ...contacts, country: e.target.value });
                  handleChange({
                    target: { name: "country", value: e.target.value },
                  });
                }}
              ></CountryDropdown>
              {formik.errors.country ? (
                <label className="error">{formik.errors.country}</label>
              ) : null}
            </section>
            <section className="col-md-4 mb-4">
              <label>State</label>
              <TextField
                // label={'State'}
                name="state"
                id="state"
                type="text"
                value={formik.values.state}
                onChange={(e) => handleChange(e)}
                placeholder={"Enter your state"}
              />
              {formik.errors.state ? (
                <label className="error">{formik.errors.state}</label>
              ) : null}
            </section>
            <section className="col-md-4 mb-4">
              <label>City</label>
              <TextField
                // label={'City'}
                name="city"
                id="city"
                type="text"
                value={formik.values.city}
                onChange={(e) => handleChange(e)}
                placeholder={"Enter your city"}
              />
              {formik.errors.city ? (
                <label className="error">{formik.errors.city}</label>
              ) : null}
            </section>

            <section className="col-md-12 mb-4">
              <TextArea
                label={"Permanent Address"}
                type="text"
                name="permanentaddress"
                value={formik.values.permanentaddress}
                onChange={(e) => handleChange(e)}
                placeholder={"Enter your permanent address"}
                rows={"1"}
              />
              {formik.errors.permanentaddress ? (
                <label className="error">
                  {formik.errors.permanentaddress}
                </label>
              ) : null}
            </section>

            <section className="col-md-12 mb-4">
              <PhoneInput
                id="mobilenumber"
                name="mobilenumber"
                label="Mobile Number"
                value={formik.values.mobilenumber}
                onChange={(e) =>
                  handleChange({
                    target: { name: "mobilenumber", value: e.id },
                  })
                }
                // value={phone}
              />
              {formik.errors.mobilenumber ? (
                <label className="error">{formik.errors.mobilenumber}</label>
              ) : null}
            </section>
          </div>
        </FormCard>

        <FormCard>
          <div className="personal_info">
            <h4>Referral</h4>
          </div>

          <div className="row">
            <section className="col-md-12 mb-4">
              <TextArea
                id="referral"
                type="text"
                name="referral"
                value={formik.values.referral}
                onChange={(e) => handleChange(e)}
                label={"Knight Ventures Referral"}
                placeholder={"Select a user in knight ventures"}
                rows={"1"}
              />
              {formik.errors.referral ? (
                <label className="error">{formik.errors.referral}</label>
              ) : null}
            </section>

            <div className="col-md-12 mb-4">
              <p className="gender_title mb-3">
                How did you hear about Knight Ventures?
              </p>
              <Select
                id="from"
                type="text"
                name="from"
                value={formik.values.from}
                onChange={(e) => handleChange(e)}
                placeholder={"Ex. From an advert in the streets"}
                options={hearOption}
                className="w-100"
              />
              {formik.errors.from ? (
                <label className="error">{formik.errors.from}</label>
              ) : null}
            </div>
          </div>
        </FormCard>

        <section className="d-flex align-items-center justify-content-between">
          {/* <button
          className="back-btn"
          onClick={() => {
            goBack()
          }}
        >
          Go Back
        </button> */}

          <div
            className="w-100 d-flex align-items-center justify-content-end"
            style={{ columnGap: 9 }}
          >
            <Button
              type="submit"
              label={loading ? <CircularLoader /> : "Save"}
              disabled={loading}
              variant="secondary"
            />

            <Button
              label={"Next"}
              type="button"
              variant="primary"
              disabled={nextloading}
              onClick={() => {
                push("#work_experience");
              }}
            />
          </div>
        </section>
      </form>
    </div>
  );
};

export default Details;
