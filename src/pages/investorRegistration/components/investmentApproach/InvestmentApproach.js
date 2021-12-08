import React from "react";
import { RowOption, Select, TextArea, Button } from "../../../../components";
import FormCard from "../../../partnerRegisteration/components/formCard/FormCard";
import { useHistory } from "react-router";

export const InvestmentApproach = () => {
  const { push } = useHistory();

  const investmentStages = [
    "Pre-Seed",
    "Seed",
    "angel",
    "accelerator",
    "MVP",
    "pre series A",
    "series A",
  ];
  return (
    <div className="register-form-wrap">
      <h3>Investment Approach</h3>
      <p>Let’s help you provide startups personalised for your preferences</p>

      <FormCard>
        <div className="row">
          <section className="col-12 mb-4">
            <Select
              placeholder="Choose sectors you are interested in"
              label="Are you interested in any sectors or technologies in particular?"
              className="edit_input"
            />
          </section>

          <section className="col-12 mb-4">
            <Select
              placeholder="Choose option"
              label="Help us understand your experience better:"
              className="edit_input"
            />
          </section>

          <section className="col-12 mb-4">
            <p className="mb-3">I Prefer to invest in</p>
            <RowOption options={["B2B", "B2C", "Marketplace"]} />
          </section>

          <section className="col-12 mb-4">
            <TextArea
              label="Investment Thesis"
              placeholder="e.g i want to invest in start-ups which have global potential and have validated traction"
            />
          </section>
        </div>
      </FormCard>

      <FormCard>
        <div className="row">
          <section className="col-12 mb-4">
            <p className="mb-3">What is your Preferred Stage</p>
            <RowOption options={investmentStages} />
          </section>

          <section className="col-12 mb-4">
            <Select
              label="What regions are you interested in investing in?"
              placeholder="Choose regions you are interested in investing in"
              className="edit_input"
            />
          </section>

          <section className="col-12 mb-4">
            <p className="mb-3">What is your Preferred Stage</p>
            <RowOption
              options={[
                "Top College Graduates",
                "Prior Start-up experience",
                "Doesn't matter",
              ]}
            />
          </section>

          <section className="col-12 mb-4">
            <Select
              label="On average, how much would you like to invest in each business you choose to fund (in USD)?"
              placeholder="Choose an option"
              className="edit_input"
            />
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
              push("#portfolio");
            }}
          />
        </div>
      </section>
    </div>
  );
};
