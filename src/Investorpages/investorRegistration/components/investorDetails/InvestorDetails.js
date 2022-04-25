import React, { useState } from "react";
import { RowOption,  TextField, Button } from "../../../../components";
import FormCard from "../../../partnerRegisteration/components/formCard/FormCard";
import { addInvestorProfile } from "../../../../services/investor";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import { Form , Select } from "antd";
import { useAuth } from "../../../../hooks/useAuth";

const { Option } = Select;

export const InvestorDetails = () => {
  const investorTypes = [
    "angel investor",
    "corporation",
    "VC Fund",
    "PE Fund",
    "CXO",
    "business owner",
    "VC / PE Professional",
    "family office",
    "startup founder",
    "angel network",
    "accelerator/incubator",
  ];

  const [taxOutsideEligible, setTaxOutsideEligible] = useState("");
  const [selectedInvestorType, setSelectedInvestorType] = useState("");

  const taxOutside = (input) => {
    switch (input) {
      case "yes":
        return true;
      case "no":
        return false;
      default:
        return "";
    }
  };

  const { updateInvestorProfileData, stateAuth, updateInvestorInfo } = useAuth()
  const { push } = useHistory();
  const onFinish = async (values) => {
    updateInvestorInfo()
    console.log(values)
  }
  console.log(stateAuth);


  return (
      <div className="register-form-wrap">
      <h3 style={{color: "#2e3192"}}>Investor Details</h3>
      <p>Create a profile for your investment</p>
      <Form  onFinish={onFinish} initialValues={{ remember: true }}>
      <FormCard>
        <div className="row">
          <section className="col-12 mb-4">
            <TextField
              label="Nationality"
              required={true}
              value={stateAuth?.investorData?.personalDetail?.nationality}
              placeholder="Enter your nationality"
              className="edit_input"
              name="nationality"
              onChange={(e) => updateInvestorProfileData("personalDetail", { nationality: e.target.value})}
            />
          </section>
          <section className="col-12 mb-4">
            <p
              className="mb-2"
              style={{ color: "black", fontSize: 12, lineHeight: "13px" }}
            >
              Are you a Tax resident any other country other than Nigeria
            </p>
            <RowOption
              options={["yes", "no"]}
              currentSelected={stateAuth?.investorData?.personalDetail?.taxResidentOutsideNigeria === true ? 'yes' : 'no'}
              getSelected={(value) => {
                updateInvestorProfileData('personalDetail', {
                  taxResidentOutsideNigeria: value === 'yes' ? true : false ,
                }) 
              }}
            />
          </section>

          <section className="col-12 mb-4">
            <TextField
              label="Taxation Number"
              required={true}
              value={stateAuth?.investorData?.personalDetail?.taxNumber}
              placeholder="Enter Tax Number"
              className="edit_input"
              name="taxNumber"
              type="number"
              onChange={(e) => updateInvestorProfileData('personalDetail', {
                taxNumber:e.target.value ,
                }) }
            />
          </section>

          <section className="col-12 mb-4">
          <Form.Item
        name="individualHaving"
        label="I am an individual having"
        initialValue={stateAuth?.investorData?.personalDetail?.individualHaving}
        rules={[{ required: true, message: 'Please select a who you are' }]}
      >
            <Select
              placeholder="Choose option"
              label="I am an individual having"
              className="edit_input"
              
              onChange={(e) => updateInvestorProfileData("personalDetail", { individualHaving: e})}
            >
            {
              investorTypes.map((item , i) =>(
                <Option value={item} key={i} > {item} </Option>  
              ))
            }
            </Select>
         </Form.Item>
          </section>
        </div>
      </FormCard>

      <FormCard title="Bank Details">
        <div className="row">
          <section className="col-lg-6 mb-4">
            <TextField
              placeholder="Enter bank"
              label="Bank Name"
              className="edit_input"
              value={stateAuth?.investorData?.personalDetail?.bankName}
              name="bankName"
              onChange={(e) => updateInvestorProfileData("personalDetail", { bankName: e.target.value })}
            />
          </section>

          <section className="col-lg-6 mb-4">
            <TextField
              placeholder="Enter bank branch"
              label="Bank Branch"
              className="edit_input"
              value={stateAuth?.investorData?.personalDetail?.bankBranch}
              name="bankBranch"
              onChange={(e) => updateInvestorProfileData("personalDetail", { bankBranch: e.target.value })}
            />
          </section>

          <section className="col-lg-6 mb-4">
            <TextField
              label="Account Number"
              required={true}
              placeholder="Enter your account"
              className="edit_input"
              value={stateAuth?.investorData?.personalDetail?.bankAccountNumber}
              name="bankAccountNumber"
              type={"number"}
              onChange={(e) => updateInvestorProfileData("personalDetail", { bankAccountNumber: e.target.value })}
            />
          </section>

          <section className="col-lg-6 mb-4">
            <TextField
              label="Account Type"
              required={true}
              placeholder="Enter your account type"
              className="edit_input"
              value={stateAuth?.investorData?.personalDetail?.bankAccountType}
              name="bankAccountType"
              onChange={(e) => updateInvestorProfileData("personalDetail", { bankAccountType: e.target.value })}
            />
          </section>
        </div>
      </FormCard>

      <FormCard>
        <div className="row">
          <p
            className="mb-3"
            style={{ color: "black", fontSize: 16, lineHeight: "13px" }}
          >
            <span style={{ color: 'red' }}>*</span> Investor Type
          </p>
          <RowOption
          currentSelected={stateAuth?.investorData?.personalDetail?.investorType}
            options={investorTypes}
            getSelected={(e) => {
              updateInvestorProfileData("personalDetail", { investorType: e })
            }}
          />
        </div>
      </FormCard>

      <section className="d-flex align-items-center justify-content-between">
        <button
          style={{color: "white", background: "#808080"}}
          className="back-btn"
          type="button"
          onClick={() => {
            push("#details");
          }}
        >
          Go Back
        </button>

        <div className="d-flex align-items-center" style={{ columnGap: 9 }}>
          <Button label="Save" variant="secondary" type="submit" />
          <Button
            label="Next"
            type="button"
            onClick={() => {
              push("#investor2");
            }}
          />
        </div>
      </section>
    </Form>
    </div>
  );
};
