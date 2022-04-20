import React, { useState } from "react";
import {
  HeaderStartup,
  ImageWrapper,
  InputWrapper,
  FormWrapper,
} from "./startup.styled";
import "./style.css";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { DatePicker } from "antd";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { CustomButton } from "../../../../Startupcomponents/button/button.styled";
import { useActivity } from "../../../../hooks/useBusiness";
import { updateFounderProfile } from "../../../../services/startup";
import { CircularLoader } from "./../../../../Startupcomponents/CircluarLoader/CircularLoader";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { useAuth } from "./../../../../hooks/useAuth";
import { upload } from "../../../../services/utils";
import CountryDropdown from "country-dropdown-with-flags-for-react";
import moment from "moment";


export const StartupProfile = () => {

  const { changePath  } = useActivity();
  const startupStage = [
    {value: 'Pre-seed Stage', label: 'Pre-seed Stage'},
    {value: 'Seed Stage', label: 'Seed Stage'},
    {value: 'Early Stage', label: 'Early Stage'},
    {value: 'Growth Stage', label: 'Growth Stage'},
    {value: 'Expansion Phase', label: 'Expansion Phase'},
    {value: 'Exit Phase', label: 'Exit Phase'},
  ];
  const companySize = [
    {value: '1-2', label: '1-2'},
    {value: '2-5', label: '2-5'},
    {value: '5-10', label: '5-10'},
    {value: '11-20', label: '11-20'},
    {value: '21-30', label: '21-30'},
    {value: 'Larger than 30', label: 'Larger than 30'},
  ]


  const dateFormat = "YYYY-MM-DD";
  const { updateProfile, stateAuth , updateStartupInfo } = useAuth();
  const [logo, setLogo] = useState(
    stateAuth?.startupData?.startUpProfile?.logo 
  );
  const [logoUploading, setLogoUploading] = useState(false);
  
  const [loading] = useState(false);
 
  const formik = useFormik({
    initialValues: {
      startupName: stateAuth?.user?.businessname ?? "",
      elevatorPitch:
        stateAuth?.startupData?.startUpProfile?.elevatorPitch ?? "",
      brand: stateAuth?.startupData?.startUpProfile?.brand ?? "",
      registrationNumber:
        stateAuth?.startupData?.startUpProfile?.registrationNumber ?? "",
      companySize: stateAuth?.startupData?.startUpProfile?.companySize ?? "",
      businessSector:
        stateAuth?.startupData?.startUpProfile?.businessSector ?? "",
      startupStage: stateAuth?.startupData?.startUpProfile?.startupStage ?? "",
      acceleratorName:  
        stateAuth?.startupData?.startUpProfile?.acceleratorName ?? "",
      registeredAddress:
        stateAuth?.startupData?.startUpProfile?.contactInfo
          ?.registeredAddress ?? "",
      country:
        stateAuth?.startupData?.startUpProfile?.contactInfo?.country ?? "",
      state: stateAuth?.startupData?.startUpProfile?.contactInfo?.state ?? "",
      city: stateAuth?.startupData?.startUpProfile?.contactInfo?.city ?? "",
      companyEmail:
        stateAuth?.startupData?.startUpProfile?.contactInfo?.companyEmail ?? "",
      profileHandle:
        stateAuth?.startupData?.startUpProfile?.socialMedia?.profileHandle ??
        "",
      companyWebsite:
        stateAuth?.startupData?.startUpProfile?.socialMedia?.companyWebsite ??
        "",
      linkedInHandle:
        stateAuth?.startupData?.startUpProfile?.socialMedia?.linkedInHandle ??
        "",
      twitterHandle:
        stateAuth?.startupData?.startUpProfile?.socialMedia?.twitterHandle ??
        "",
    },
    validationSchema: Yup.object({
      elevatorPitch: Yup.string().required("This field is required"),
      brand: Yup.string().required("This field is required"),
      registrationNumber: Yup.number()
        .min(3)
        .required("This field is required"),
      companySize: Yup.string().required("This field is required"),
      businessSector: Yup.string().required("This field is required"),
      startupStage: Yup.string().required("This field is require"),
      acceleratorName: Yup.string().required("This field is required"),
      registeredAddress: Yup.string().required("This field is required"),
      state: Yup.string().required("This field is required"),
      city: Yup.string().required("This field is required"),
      companyEmail: Yup.string().email("Invalid email").required("Email Required"),
      companyWebsite: Yup.string().url().required("This field is required"),
      linkedInHandle: Yup.string().required("This field is required"),
      twitterHandle: Yup.string().required("This field is required"),
      startupName: Yup.string().required("This field is required"),
    }),
    onSubmit: (value) => onSubmit(value),
  });
     
  const handleChange = (e, prefix = "") => {
    const { name, value } = e.target;
    if (prefix !== "") {
      updateProfile("startUpProfile",{
        [prefix]: {
          ...stateAuth?.startupData?.startUpProfile[prefix],
          [name]: value,
        },
      });
      formik.handleChange(e);
      return;
    }
    updateProfile("startUpProfile", {[name]: value });
    formik.handleChange(e);
  };


  // fundRaising:
  // capTable: {amountRaised: '5000', amountInvestedByFounders: '1000', files: Array(4), _id: '6259419ab36d0dd3b5e2e3c9'}
  // financialProjection: {files: 'https://cdn.shoutng.com/kvnmri9zykq3doplnqtxfi.pdf', _id: '6259419ab36d0dd3b5e2e3cb'}
  // fundUtilization: {files: Array(10), _id: '6259419ab36d0dd3b5e2e3c8'}
  // fundingAsk: {hasPreviousFundraising: true, instrumentForRound: 'Series B', numberOfRounds: '5', fundraisingAmount: '800000', dilution: '', …}
  // previousRound:


  const handlePhoneInput = (value) => {
   
    updateProfile("startUpProfile",{
      contactInfo: {
        ...stateAuth?.startupData?.startUpProfile?.contactInfo,
        phoneNumber: value,
      },
    });
  };

  const handleCountry = (value)=>{
    updateProfile("startUpProfile",{
      contactInfo: {
        ...stateAuth?.startupData?.startUpProfile?.country,
        country: value,
      },
    });
    formik.setFieldValue("country", value.value)
  }
  
  const selectChange = (e) =>{
    const { value , name } = e.target;
    updateProfile("startUpProfile" ,{
      [name]: value,
    });
    formik.handleChange(e)
  }  

  const handleDateInput = (value) => {
    updateProfile("startUpProfile" ,{
      yearFounded: value,
    });
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
      updateProfile("startUpProfile",{
        logo: response?.path,
      });
      setLogoUploading(false);
    } catch (error) {
      setLogoUploading(false);
      toast.error(error?.response?.data?.message ?? "Unable to upload image");
    }
  };

  const onSubmit = async () => {
    updateStartupInfo()
  };

  return (
    <>
      <HeaderStartup className="mb-3">
        <h5 style={{ color: "#2E3192" }}>Startup Profile</h5>
        <p>Let's get to know your startup</p>
      </HeaderStartup>

      <ImageWrapper>
        <div
          className="start-img-p"
          style={{ marginTop: "10px", marginLeft: "10px" }}
        >
          { stateAuth?.startupData?.startUpProfile?.logo  === null  ? (
            logoUploading ? (
              <CircularLoader color={"#000"} />
            ) : (
              <UserOutlined />
            )
          ) : (
            <img
              className=""
              src={stateAuth?.startupData?.startUpProfile?.logo }
              style={{ borderRadius: "70px", width: "90px", height: "90px" }}
              alt=""
            />
          )}
        </div>
      </ImageWrapper>

      <InputWrapper for="dp">
        <input type="file" onChange={onChangeImage} id="dp" hidden />
        <PlusOutlined style={{ color: "white" }} />
      </InputWrapper>

      <form onSubmit={formik.handleSubmit}>
        <FormWrapper className="pe-5">
          <div className="div border-bottom pb-3">
            <span className="">Startup profile</span>
          </div>

          <div className="row">
            <div className="form-group col-12">
              <label>
                Elevator Pitch<span style={{ color: "red" }}>*</span>
              </label>
              <textarea
                id="elevatorPitch"
                name="elevatorPitch"
                placeholder="One line pitch 150 words maximum"
                onChange={(e) => handleChange(e)}
                defaultValue={stateAuth?.startupData?.startUpProfile?.elevatorPitch}
                onBlur={formik.handleBlur}
                rows="4"
                cols="4"
                className="form-control"
              ></textarea>
              {formik.touched.elevatorPitch && formik.errors.elevatorPitch ? (
                <label className="error">{formik.errors.elevatorPitch}</label>
              ) : null}
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>
                Startup<span style={{ color: "red" }}>*</span>
              </label>
              <input
                id="startupName"
                type="text"
                name="startupName"
                defaultValue={formik.values.startupName}
                disabled={formik.values.startupName !== ""}
                placeholder="Entity Name As Per Registration"
                onChange={(e) => handleChange(e)}
                onBlur={formik.handleBlur}
                className="form-control ps-3"
              />
              {formik.touched.startupName && formik.errors.startupName ? (
                <label className="error">{formik.errors.startupName}</label>
              ) : null}
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>
                Brand<span style={{ color: "red" }}>*</span>
              </label>
              <input
                id="brand"
                type="text"
                name="brand"
                placeholder="eg; Knight Ventures"
                defaultValue={stateAuth?.startupData?.startUpProfile?.brand}
                onChange={(e) => handleChange(e)}
                onBlur={formik.handleBlur}
                className="form-control ps-3"
              />
              {formik.touched.brand && formik.errors.brand ? (
                <label className="error">{formik.errors.brand}</label>
              ) : null}
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>
                Year Founded<span style={{ color: "red" }}>*</span>
              </label>
              <DatePicker
                className="col-md-12 py-2 px-2"
                id="yearFounded"
                name="yearFounded"
                defaultValue={
                  stateAuth?.startupData?.startUpProfile?.yearFounded !== null ? moment(stateAuth?.startupData?.startUpProfile?.yearFounded) :
                  moment()
                }
                format={dateFormat}
                onChange={(_, dateString) => handleDateInput(dateString)}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="form-group col-lg-6 col-12">
              <label>
                Businesss Registration Number
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                id="registrationNumber"
                type="text"
                name="registrationNumber"
                placeholder="1234567890"
                defaultValue={stateAuth?.startupData?.startUpProfile?.registrationNumber}
                onChange={(e) => handleChange(e)}
                onBlur={formik.handleBlur}
                className="form-control ps-3"
              />
              {formik.touched.registrationNumber &&
              formik.errors.registrationNumber ? (
                <label className="error">
                  {formik.errors.registrationNumber}
                </label>
              ) : null}
            </div>

            <div className="form-group col-lg-6 col-12">
              <label>
                Company Size<span style={{ color: "red" }}>*</span>
              </label>
              <div>
                <select
                  id={"companySize"}
                  name={"companySize"}
                  value={stateAuth?.startupData?.startUpProfile?.companySize}
                  onChange={(e) => selectChange(e)}
                  // onBlur={formik.handleBlur}
                  className="sel ps-3 pe-3"
                  placeholder="Enter company size"
                >{companySize.map((item, i) => {
                  return <option value={item.value} key={i}>{item.label}</option>
                })}
                </select>
                {formik.touched.companySize && formik.errors.companySize ? (
                  <label className="error">{formik.errors.companySize}</label>
                ) : null}
              </div>
            </div>

            <div className="form-group col-lg-6 col-12">
              <label>
                Which sector does your business operate in?
                <span style={{ color: "red" }}>*</span>
              </label>
              <div>
                <input
                  id={"businessSector"}
                  name={"businessSector"}
                  defaultValue={stateAuth?.startupData?.startUpProfile?.businessSector}
                  onChange={(e) => handleChange(e)}
                  onBlur={formik.handleBlur}
                  className="sel ps-3 pe-3"
                  placeholder="Enter Business Sector"
                />
                {formik.touched.businessSector &&
                formik.errors.businessSector ? (
                  <label className="error">
                    {formik.errors.businessSector}
                  </label>
                ) : null}
              </div>
            </div>

            <div className="form-group col-lg-6 col-12">
              <label>
                What stage is your business in
                <span style={{ color: "red" }}>*</span>
              </label>
              <select
                id={"startupStage"}
                name={"startupStage"}
                value={stateAuth?.startupData?.startUpProfile?.startupStage}
                onChange={(e) => selectChange(e)}
                // onBlur={formik.handleBlur}
                className="sel ps-3 pe-3"
                placeholder="Enter Business Stage"
              >
                {startupStage.map((i, index) => {
                  return <option value={i.value} key={index}>{i.label}</option>
                })}
              </select>
              {formik.touched.startupStage && formik.errors.startupStage ? (
                <label className="error">{formik.errors.startupStage}</label>
              ) : null}
            </div>

            <div className="form-group col-12">
              <label>
                Enter the name of Accelerator /incubator in case you've worked
                with any{" "}
              </label>
              <input
                id="acceleratorName"
                type="text"
                name="acceleratorName"
                placeholder="Enter Accelerator name"
                defaultValue={stateAuth?.startupData?.startUpProfile?.acceleratorName}
                onChange={(e) => handleChange(e)}
                onBlur={formik.handleBlur}
                className="form-control ps-3"
              />
              {formik.touched.acceleratorName &&
              formik.errors.acceleratorName ? (
                <label className="error">{formik.errors.acceleratorName}</label>
              ) : null}
            </div>
          </div>
        </FormWrapper>

        <FormWrapper height="70%">
          <div className="div border-bottom pb-3">
            <span>Contact info</span>
          </div>

          <div className="row mt-4">
            <div className="form-group col-12">
              <label>
                Registered Address<span style={{ color: "red" }}>*</span>
              </label>
              <input
                id="registeredAddress"
                type="text"
                name="registeredAddress"
                placeholder="Enter your registered address"
                defaultValue={stateAuth?.startupData?.startUpProfile?.contactInfo?.registeredAddress}
                onChange={(e) => handleChange(e, "contactInfo")}
                onBlur={formik.handleBlur}
                className="form-control ps-3"
              />
              {formik.touched.registeredAddress &&
              formik.errors.registeredAddress ? (
                <label className="error">
                  {formik.errors.registeredAddress}
                </label>
              ) : null}
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>
                Country<span style={{ color: "red" }}>*</span>
              </label>
              <CountryDropdown
                id="country"
                type="text"
                name="country"
                className="form-control px-5 py-1 country-bg"
                preferredCountries={["ng"]}
                defaultValue={stateAuth?.startupData?.startUpProfile?.country}
                onChange={(value) => handleCountry(value)}
                onBlur={formik.handleBlur}
              ></CountryDropdown>
              {formik.touched.country && formik.errors.country ? (
                <label className="error">{formik.errors.country}</label>
              ) : null}
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>
                State<span style={{ color: "red" }}>*</span>
              </label>
              <input
                id="state"
                type="text"
                name="state"
                placeholder="Enter your state"
                defaultValue={stateAuth?.startupData?.startUpProfile?.contactInfo?.state}
                onChange={(e) => handleChange(e, "contactInfo")}
                onBlur={formik.handleBlur}
                className="form-control ps-3"
              />
              {formik.touched.state && formik.errors.state ? (
                <label className="error">{formik.errors.state}</label>
              ) : null}
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>
                City<span style={{ color: "red" }}>*</span>
              </label>
              <input
                id="city"
                type="text"
                name="city"
                placeholder="Enter your city"
                defaultValue={stateAuth?.startupData?.startUpProfile?.contactInfo?.city}
                onChange={(e) => handleChange(e, "contactInfo")}
                onBlur={formik.handleBlur}
                className="form-control ps-3"
              />
              {formik.touched.city && formik.errors.city ? (
                <label className="error">{formik.errors.city}</label>
              ) : null}
            </div>
            <div className="form-group  col-lg-6 col-12 ">
              <label>
                Mobile Number<span style={{ color: "red" }}>*</span>
              </label>
              <PhoneInput
                id="phoneNumber"
                international
                name="phoneNumber"
                countryCallingCodeEditable={true}
                className="custs ps-3 py-2"
                value={
                  stateAuth?.startupData?.startUpProfile?.contactInfo?.phoneNumber 
                }
                onChange={handlePhoneInput}
                MaxLength={17}
              />
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>
                Company Email<span style={{ color: "red" }}>*</span>
              </label>
              <input
                id="companyEmail"
                type="text"
                name="companyEmail"
                placeholder="Enter your email"
                defaultValue={stateAuth?.startupData?.startUpProfile?.contactInfo?.companyEmail}
                onChange={(e) => handleChange(e, "contactInfo")}
                onBlur={formik.handleBlur}
                className="form-control ps-3"
              />
              {formik.touched.companyEmail && formik.errors.companyEmail ? (
                <label className="error">{formik.errors.companyEmail}</label>
              ) : null}
            </div>
          </div>
        </FormWrapper>

        <FormWrapper height="70%">
          <div className="div border-bottom pb-3">
            <span>Web & Social Media</span>
          </div>

          <div className="row mt-4">
            <div className="form-group col-lg-6 col-12">
              <label>Startup profile handle</label>
              <input
                id="profileHandle"
                type="text"
                name="profileHandle"
                disabled={true}
                placeholder="Enter your startup profile handle"
                defaultValue={`knight.venture/${stateAuth?.user?.businessname}`}
         
                onBlur={formik.handleBlur}
                className="form-control ps-3 text-secondary"
              />
              
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>
                Website<span style={{ color: "red" }}>*</span>
              </label> 
              <input
                id="companyWebsite"
                type="text"
                name="companyWebsite"
                placeholder="Enter your startup website"
                defaultValue={stateAuth?.startupData?.startUpProfile?.socialMedia?.companyWebsite}
                onChange={(e) => handleChange(e, "socialMedia")}
                onBlur={formik.handleBlur}
                className="form-control ps-3"
              />
              {formik.touched.companyWebsite && formik.errors.companyWebsite ? (
                <label className="error">{formik.errors.companyWebsite}</label>
              ) : null}
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>
                Linkedin<span style={{ color: "red" }}>*</span>
              </label>
              <input
                id="linkedInHandle"
                type="text"
                name="linkedInHandle"
                placeholder="Enter your Linkedin profile name"
                defaultValue={stateAuth?.startupData?.startUpProfile?.socialMedia?.linkedInHandle}
                onChange={(e) => handleChange(e, "socialMedia")}
                onBlur={formik.handleBlur}
                className="form-control ps-3"
              />
              {formik.touched.linkedInHandle && formik.errors.linkedInHandle ? (
                <label className="error">{formik.errors.linkedInHandle}</label>
              ) : null}
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>
                Twitter<span style={{ color: "red" }}>*</span>
              </label>
              <input
                id="twitterHandle"
                type="text"
                name="twitterHandle"
                placeholder="Enter your Twitter profile name"
                defaultValue={stateAuth?.startupData?.startUpProfile?.socialMedia?.twitterHandle}
                onChange={(e) => handleChange(e, "socialMedia")}
                onBlur={formik.handleBlur}
                className="form-control ps-3"
              />
              {formik.touched.twitterHandle && formik.errors.twitterHandle ? (
                <label className="error">{formik.errors.twitterHandle}</label>
              ) : null}
            </div>
          </div>
          <div className="d-flex my-4 justify-content-end">
            <div>
              <CustomButton
                type="submit"
                disabled={loading}
                background="#06ADEF"
               
              >
                {loading ? <CircularLoader /> : "Save"}
              </CustomButton>
            </div>
            <div className="mx-2">
              <CustomButton
                type="button"
                onClick={()=> changePath(2)}
                background="#2E3192"
              >
               Next
              </CustomButton>
            </div>
          </div>
        </FormWrapper>
      </form>
    </>
  );
};
