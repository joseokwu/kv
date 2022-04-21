import React, { useState } from "react";
import imageRep from "../../../../assets/icons/avatar.svg";
import add from "../../../../assets/icons/addFile.svg";
import FormCard from "../../../partnerRegisteration/components/formCard/FormCard";
import {
  Badge,
  // PhoneInput,
  RowOption,
  TextField,
  Button,
} from "../../../../components";
import { useHistory } from "react-router-dom";
import { Formik, useFormik } from "formik";
import toast from "react-hot-toast";
import * as yup from "yup";
import { useAuth } from "../../../../hooks/useAuth";
import { upload } from "../../../../services/utils";
import { useActivity } from "../../../../hooks/useBusiness";
import { updateInvestor } from "../../../../services/investor";
import { CircularLoader } from "../../../../components/CircluarLoader/CircularLoader";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import moment from "moment";
import './PersonalDetails.css';


export const PersonalDetails = () => {
  const hearOption = [
    "news",
    "social media",
    "internet search",
    "referral from startup",
    "referral from investor",
  ];

  const { updateInvestorProfileData, stateAuth, updateInvestorInfo } = useAuth();
  const { push } = useHistory();
  const [value, setValue] = useState()
  const { changePath, state: { path }, } = useActivity();
  const [opts, setOpts] = useState("");
  const [loading, setLoading] = useState(false);
  const [logoUploading, setLogoUploading] = useState(false);
  const [nextLoading, setNextLoading] = useState(false);
  const [avatar, setAvatar] = useState( stateAuth?.investorData?.personalDetail?.avatar ?? imageRep );

  const next = () => { changePath(path + 1) };

  const handleSubmit = async () => {
    setLoading(true);

    const updated = await updateInvestorInfo();

    if (updated) {
      toast.success("Updated");
    } else {
      toast.error("Something went wrong");
    }
    if (updated && next) {
      push("#investor");
      // changePath(2);
    }
    setLoading(false);
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   updateInvestorInfo()
  // };

  const handleChange = (e, prefix = "") => {
    const { name, value } = e.target;
    if (prefix !== "") {
      updateInvestorProfileData("personalDetail", {
        [prefix]: {
          ...stateAuth?.invesstorData?.personalDetail[prefix],
          [name]: value,
        },
      });
      formik.handleChange(e);
      return;
    }
    updateInvestorProfileData("personalDetail", {
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
      setAvatar(response?.path);
      updateInvestorProfileData("personalDetail",{
        logo: response?.path,
      });
      setLogoUploading(false);
    } catch (error) {
      setLogoUploading(false);
      toast.error(error?.response?.data?.message ?? "Unable to upload image");
    }
  };

  const handleMobileInput = (value) => {
   
    updateInvestorProfileData("personalDetail",{
      contactInfo: {
        ...stateAuth?.investorData?.personalDetail,
        mobileNumber: value,
      },
    });
  };

  const [country, setCountry] = useState( stateAuth?.investorData?.personalDetail?.country ?? "" );
  const [region , setRegion] = useState( stateAuth?.investorData?.personalDetail?.state ?? "" );

  const handleCountry = (value)=>{
    updateInvestorProfileData("personalDetail",{ ...stateAuth?.investorData?.personalDetail?.country,
      country: value,
    });
    setCountry(value)
    console.log(value)
  }

  const handleChangeState = (value) => {
    updateInvestorProfileData("startUpProfile",{
      contactInfo: {
        ...stateAuth?.startupData?.startUpProfile?.state,
        state: value,
      },
    });
    setRegion(value)
    console.log(value)
  }

  const formik = useFormik({
    initialValues: {
      briefIntroduction: stateAuth?.investorData?.personalDetail?.briefIntroduction ?? "",
      firstName: stateAuth?.investorData?.personalDetail?.firstName ?? "",
      lastName: stateAuth?.investorData?.personalDetail?.lastName ?? "",
      email: stateAuth?.investorData?.personalDetail?.email ?? "",
      city: stateAuth?.investorData?.personalDetail?.city ?? "",
      companyEmail: stateAuth?.investorData?.personalDetail?.companyEmail ?? "",
      address: stateAuth?.investorData?.personalDetail?.address ?? "",
      linkedIn: stateAuth?.investorData?.personalDetail?.socialMedia?.linkedIn ?? "",
      twitter: stateAuth?.investorData?.personalDetail?.socialMedia?.twitter ?? "",
      website: stateAuth?.investorData?.personalDetail?.socialMedia?.website ?? "",
      profileLink: stateAuth?.investorData?.personalDetail?.socialMedia?.profileLink ?? "",
      referral: stateAuth?.investorData?.personalDetail?.referral ?? "",
    },
    validationSchema: yup.object({
      briefIntroduction: yup.string().required("Brief introduction is required"),
      firstName: yup.string().required("First Name is required"),
      lastName: yup.string().required("Last Name is required"),
      email: yup.string().required("Email is required"),
      city: yup.string().required("City is required"),
      companyEmail: yup.string().required("Company Email is required"),
      address: yup.string().required("Registered address is required"),
      linkedIn: yup.string().required("LinkedIn is required"),
      twitter: yup.string().required("Twitter is required"),
      website: yup.string().required("Website is required"),
      profileLink: yup.string().required("Profile link is required"),
      referral: yup.string().required("Referral is required"),
    }),
    onSubmit: (values) => handleSubmit(values),
  });

  return (
    <div className="register-form-wrap">
      <h3>Personal Details</h3>
      <p>Let’s get to know you</p>
    <form onSubmit={formik.handleSubmit}>
      <div className="form-dp mb-4 bg-white">
        {  logoUploading ? (
          <CircularLoader color={"#000"} />
        ) : ( 
          <span className={ avatar === imageRep ? "" : "image-placeholder" }>
            <img src={avatar} alt="placeholder" />
          </span>
        )}
        <span className="add-dp">
          <input type="file" id="dp" onChange={onChangeImage} />
          <img src={add} alt="add" />
        </span>
      </div>

      <FormCard title="Personal Information">
        <div className="row">
          <section className="col-12 mb-4">
            <label>Brief Introduction<span style={{ color: "red" }}>*</span></label>
            <TextField
              // label="Brief Introduction*"
              id={"briefIntroduction"}
              name={"briefIntroduction"}
              type={"text"}
              required={true}
              placeholder={"Enter brief bio about you"}
              className={"edit_input"}
              onChange={(e) => handleChange(e)}
              defaultValue={stateAuth?.investorData?.personalDetail?.briefIntroduction}
              onBlur={formik.handleBlur}
            />
            {formik.touched.briefIntroduction && formik.errors.briefIntroduction ? (
                <label className="error">{formik.errors.briefIntroduction}</label>
              ) : null}
          </section>
          <section className="col-md-6 mb-4">
          <label>First Name<span style={{ color: "red" }}>*</span></label>
            <TextField
              // label="First Name*"
              id={"firstName"}
              name={"firstName"}
              type={"text"}
              required={true}
              placeholder={"Enter first name"}
              className={"edit_input"}
              onChange={(e) => handleChange(e)}
              onBlur={formik.handleBlur}
              defaultValue={stateAuth?.investorData?.personalDetail?.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <label className="error">{formik.errors.firstName}</label>
              ) : null}
          </section>

          <section className="col-md-6 mb-4">
          <label>Last Name<span style={{ color: "red" }}>*</span></label>
            <TextField
              // label="Last Name*"
              id={"lastName"}
              name={"lastName"}
              type={"text"}
              required={true}
              placeholder={"Enter last name"}
              className={"edit_input"}
              onChange={(e) => handleChange(e)}
              onBlur={formik.handleBlur}
              defaultValue={stateAuth?.investorData?.personalDetail?.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <label className="error">{formik.errors.lastName}</label>
              ) : null}
          </section>

          <section className="col-md-6 mb-4">
          <label>Email<span style={{ color: "red" }}>*</span></label>
            <TextField
              // label="Email*"
              id={"email"}
              name={"email"}
              required={true}
              placeholder={"Enter email"}
              type={"email"}
              className={"edit_input"}
              onChange={(e) => handleChange(e)}
              onBlur={formik.handleBlur}
              defaultValue={stateAuth?.investorData?.personalDetail?.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <label className="error">{formik.errors.email}</label>
              ) : null}
          </section>

          <section className="col-md-6 mb-4">
          <label>Date of Birth<span style={{ color: "red" }}>*</span></label>
            <TextField
              // label="Date of Birth*"
              id={"dob"}
              name={"dob"}
              required={true}
              placeholder=""
              type={"date"}
              className={"edit_input"}
              onChange={(e) => handleChange(e)}
              onBlur={formik.handleBlur}
              defaultValue={ stateAuth?.investorData?.personalDetail?.dob !== null ? moment(stateAuth?.investorData?.personalDetail?.dob) :
                moment()}
            />
            {formik.touched.dob && formik.errors.dob ? (
                <label className="error">{formik.errors.dob}</label>
              ) : null}
          </section>
        </div>
      </FormCard>

      <FormCard title="Contact Info">
        <div className="row mb-4">
          <section className="col-12 mb-4">
          <label>Registered Address<span style={{ color: "red" }}>*</span></label>
            <TextField
              // label="Registered Address"
              id={"address"}
              name={"address"}
              type={"text"}
              required={true}
              placeholder={"Enter your registered address"}
              className={"edit_input"}
              onChange={(e) => handleChange(e)}
              onBlur={formik.handleBlur}
              defaultValue={stateAuth?.investorData?.personalDetail?.address}
            />
            {formik.touched.address && formik.errors.address ? (
                <label className="error">{formik.errors.address}</label>
              ) : null}
          </section>

          <section className="col-lg-4 mb-4">
          <label>Country<span style={{ color: "red" }}>*</span></label>
            {/* <TextField
              label="Country"
              required={true}
              placeholder="Enter your country"
              className="edit_input"
            /> */}
             <CountryDropdown
              className="form-control ps-3 py-1 investor-country"
              value={country}
              onChange={(value) => handleCountry(value)}
            />
          </section>

          <section className="col-lg-4 mb-4">
          <label>State<span style={{ color: "red" }}>*</span></label>
            {/* <TextField
              label="State"
              required={true}
              placeholder="Enter your state"
              className="edit_input"
            /> */}
            <RegionDropdown
              name="state"
              country={country}
              value={region}
              onChange={(value) => handleChangeState(value)}
              className="form-control ps-3"
            /> 
          </section>

          <section className="col-lg-4 mb-4">
          <label>City<span style={{ color: "red" }}>*</span></label>
            <TextField
              // label="City"
              id={"city"}
              name={"city"}
              type={"text"}
              required={true}
              placeholder={"Enter your city"}
              className={"edit_input"}
              onChange={(e) => handleChange(e)}
              onBlur={formik.handleBlur}
              value={stateAuth?.investorData?.personalDetail?.city}
            />
            {formik.touched.city && formik.errors.city ? (
                <label className="error">{formik.errors.city}</label>
              ) : null}
          </section>

          <section className="col-lg-6 mb-4">
          <label>Mobile Number<span style={{ color: "red" }}>*</span></label>
            <PhoneInput 
              id={"mobileNumber"}
              international
              name={"mobileNumber"}
              className={"in-reg-no py-1"}
              countryCallingCodeEditable={true}
              MaxLength={17}
              defaultValue={stateAuth?.investorData?.personalDetail?.mobileNumber}
              onChange={handleMobileInput}
            />
          </section>
          <section className="col-lg-6 mb-4">
          <label>Company Email<span style={{ color: "red" }}>*</span></label>
            <TextField
              // label="Company Email*"
              id={"companyEmail"}
              name={"companyEmail"}
              required={true}
              placeholder={"E.g. info@knight.ventures"}
              className={"edit_input"}
              type={"email"}
              onChange={(e) => handleChange(e)}
              onBlur={formik.handleBlur}
              value={stateAuth?.investorData?.personalDetail?.companyEmail}
            />
            {formik.touched.companyEmail && formik.errors.companyEmail ? (
                <label className="error">{formik.errors.companyEmail}</label>
              ) : null}
          </section>
        </div>
      </FormCard>

      <FormCard title="Web & Social Media">
        <div className="row mb-4">
          <section className="col-lg-6 mb-4">
          <label>Profile Link<span style={{ color: "red" }}>*</span></label>
            <TextField
              // label="Profile Link*"
              id={"profileLink"}
              name={"profileLink"}
              type={"text"}
              required={true}
              placeholder={"Enter linkedin link"}
              className={"edit_input"}
              onChange={(e) => handleChange(e)}
              onBlur={formik.handleBlur}
              value={stateAuth?.investorData?.personalDetail?.profileLink}
            />
            {formik.touched.profileLink && formik.errors.profileLink ? (
                <label className="error">{formik.errors.profileLink}</label>
              ) : null}
          </section>

          <section className="col-lg-6 mb-4">
          <label>Website<span style={{ color: "red" }}>*</span></label>
            <TextField
              // label="Website*"
              id={"website"}
              name={"website"}
              type={"text"}
              required={true}
              placeholder={"Enter website"}
              className={"edit_input"}
              onChange={(e) => handleChange(e)}
              onBlur={formik.handleBlur}
              value={stateAuth?.investorData?.personalDetail?.website}
            />
            {formik.touched.website && formik.errors.website ? (
                <label className="error">{formik.errors.website}</label>
              ) : null}
          </section>

          <section className="col-lg-6 mb-4">
          <label>LinkedIn<span style={{ color: "red" }}>*</span></label>
            <TextField
              // label="LinkedIn*"
              required={true}
              placeholder="Enter linkedin link"
              className="edit_input"
            />
          </section>

          <section className="col-lg-6 mb-4">
          <label>Twitter<span style={{ color: "red" }}>*</span></label>
            <TextField
              // label="Twitter*"
              required={true}
              placeholder="Enter twitter link"
              className="edit_input"
            />
          </section>
        </div>
      </FormCard>

      <FormCard title="Referral">
        <div className="row mb-4">
          <section className="col-12 mb-4">
          <label>Referral<span style={{ color: "red" }}>*</span></label>
            <TextField
              // label="Referral"
              required={true}
              placeholder="Enter a user in knight ventures"
              className="edit_input"
            />
          </section>

          <section className="col-12 mb-4">
            <p className="mb-3">How did you hear about Knight Venture?</p>
            <div>
              <RowOption options={hearOption} />
            </div>
          </section>
        </div>
      </FormCard>

      <section
        className="d-flex align-items-center justify-content-end my-4"
        style={{ columnGap: 9 }}
      >
        <Button
          type={"submit"}
          disabled={loading}
          label={loading ? <CircularLoader /> : "Save"} 
          variant="secondary" 
          // onClick={(e) =>onSubmit(e)}
          // onClick={() => {
          //   handleSubmit(true)
          // }}
        />
        <Button
          type="submit"
          label={nextLoading ? <CircularLoader /> : "Next"} 
          variant="primary"
          disabled={nextLoading}
          onClick={() => {
           handleSubmit(true);
          }}
        />
         {/* <Button
          label={nextLoading ? <CircularLoader /> : "Next"} 
          variant="primary"
          disabled={nextLoading}
          onClick={() => changePath(2)}
          type="button"
        /> */}
      </section>
      </form>
    </div>
  );
};
