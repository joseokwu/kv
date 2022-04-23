import React from "react";
import { RowOption, Select, TextField, Button } from "../../../../components";
import FormCard from "../../../partnerRegisteration/components/formCard/FormCard";
import { useHistory } from "react-router";
import { sectors } from "../../../../utils/utils";
import { Form } from "antd";
import { useAuth } from "../../../../hooks/useAuth";

export const InvestorDetails2 = () => {
  const { push } = useHistory();
  const { updateInvestorProfileData, stateAuth, updateInvestorInfo } = useAuth()
  const onFinish = async (values) => {
    updateInvestorInfo()
    console.log(values)
  }
  console.log(stateAuth);


  return (
    <div className="register-form-wrap">
      <h3>Investor Details</h3>
      <p>
        This will help us provide startups personalised for your preferences
      </p>
      <Form onFinish={onFinish} initialValues={{ remember: true }}>
      <FormCard>
        <div className="row">
          <section className="col-12 mb-4">
            <p className="mb-3">Are you a Lead investor</p>
            <RowOption options={["yes", "no"]} />
          </section>

          <section className="col-12 mb-4">
            <p className="mb-3"> Have you angel invested before?</p>
            <RowOption options={["yes", "no"]} />
          </section>

          <section className="col-12 mb-4">
            <p className="mb-3">
              Do you have any experience in investing as an Angel investors
            </p>
            <RowOption
              options={["First time investor", "Experience angel investor"]}
            />
          </section>

          <section className="col-12 mb-4">
            <p className="mb-3">Do you invest as an Angel or via Syndicate?</p>
            <RowOption options={["solo", "Syndicate", "Both"]} />
          </section>

          <section className="col-12 mb-4">
            <Select
              label="Choose the sectors you have expertise in?"
              placeholder="Choose sector"
              className="edit_input"
              options={sectors}
            />
          </section>
        </div>
      </FormCard>

      <FormCard>
        <div className="row">
          <section className="col-12 mb-4">
            <p className="mb-3">Would you like to mentor startups?</p>
            <RowOption options={["yes", "no"]} />
          </section>

          <section className="col-12 mb-4">
            <p className="mb-3">
              Are you interested in online pitching sessions?
            </p>
            <RowOption options={["yes", "no"]} />
          </section>
        </div>
      </FormCard>

      <FormCard>
        <div className="row">
          <section className="col-12 mb-4">
            <p className="mb-3">Where are you investing from?</p>
            <RowOption options={["Personal Fund", "Family Fund"]} />
          </section>

          <section className="col-lg-6">
            <TextField
              label="Investing budget per year"
              placeholder="$"
              className="edit_input"
            />
          </section>
          <section className="col-lg-6">
            <TextField
              label="Amount"
              placeholder="Select amount"
              className="edit_input"
            />
          </section>
          <section className="col-12 mb-4 mt-2">
            <input type="checkbox" id="yet-to" />
            <label htmlFor="yet-to" className="ml-2">
              Yet to invest
            </label>
          </section>

          <section className="col-12 mb-4">
            <TextField
              label="Typical number of investment per year"
              placeholder="Enter number of start-ups invested in"
              className="edit_input"
              name={"numberOfInvestmentPerYear"}
              onChange={(e) => updateInvestorProfileData("personalDetail", { numberOfInvestmentPerYear: e.target.value })}
            />
          </section>

          <section className="col-lg-6">
            <TextField
              label="Typical investment amount per year"
              placeholder="$"
              className="edit_input"
              onChange={(e) => updateInvestorProfileData("personalDetail", {})}
            />
          </section>
          <section className="col-lg-6">
            <TextField
              label="Amount"
              placeholder="Select amount"
              className="edit_input"
            />
          </section>
          <section className="col-12 mb-4 mt-2">
            <input type="checkbox" id="yet-to" />
            <label htmlFor="yet-to" className="ml-2">
              Make it public
            </label>
          </section>
        </div>
      </FormCard>

      <section className="d-flex align-items-center justify-content-between">
        <button
          className="back-btn"
          onClick={() => {
            push("#investor");
          }}
        >
          Go Back
        </button>

        <div className="d-flex align-items-center" style={{ columnGap: 9 }}>
          <Button label="Save" variant="secondary" />
          <Button
            label="Next"
            onClick={() => {
              push("#approach");
            }}
          />
        </div>
      </section>
      </Form>
    </div>
  );
};
