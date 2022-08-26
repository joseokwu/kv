import React from "react";
import edit from "../../../assets/icons/edit.svg";
import sort1 from "../../../assets/icons/sortArt.svg";
import sort2 from "../../../assets/icons/sortArt2.svg";
import {
    Button,
    Modal,
    RowOption,
    Select,
    TextArea,
} from "../../../components";
import { useAuth } from "../../../hooks";
import { CountryDropdown } from "react-country-region-selector";
import { Form } from "antd";

export const InvestorInvestments = ({ data }) => {
    return (
        <div className="profile-offering mb-3">
            <section className="flex-align justify-content-between mb-3">
                <h2 className="investor-profile-header mb-0">
                    Investment Thesis
                </h2>
                <img
                    src={edit}
                    alt="edit"
                    data-toggle="modal"
                    data-target="#investorProfile"
                    role="button"
                />
            </section>

            <Modal title="Investor Profile" id="investorProfile">
                <EditInvestorProfile />
            </Modal>

            <section className="mb-5">
                <p>{data?.investorApproach?.investmentThesis}</p>
            </section>

            {/* <section className="mb-5">
        <h2 className="investor-profile-header">Investment Approach</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation{" "}
        </p>
      </section> */}

            <section className="mb-5">
                <h4 className="investor-profile-header">Investor Type</h4>
                <div className="flex-align flex-wrap" style={{ columnGap: 16 }}>
                    <span
                        className="cat-tag px-3"
                        style={{ width: "fit-content" }}
                    >
                        {data?.personalDetail?.investorType}
                    </span>
                    {/* <span className="cat-tag px-3" style={{ width: "fit-content" }}>
            VC & PE Professional
          </span> */}
                    {/* <span className="cat-tag px-3" style={{ width: "fit-content" }}>
            VC & PE Professional
          </span> */}
                </div>
            </section>

            <section>
                <h2 className="investor-profile-header">Preferred Stage</h2>
                <div className="row">
                    <section className="col-lg-6 mb-3">
                        <PreferredStage
                            icon={sort1}
                            text={`${data?.investorApproach?.stage}`}
                        />
                    </section>
                    {/* <section className="col-lg-6 mb-3">
            <PreferredStage icon={sort2} text="Minimum Viable Product" />
          </section> */}
                    {/* <section className="col-lg-6 mb-3">
            <PreferredStage icon={sort1} text="Minimum Viable Product" />
          </section> */}
                    {/* <section className="col-lg-6 mb-3">
            <PreferredStage icon={sort2} text="Minimum Viable Product" />
          </section> */}
                </div>
            </section>
        </div>
    );
};

const PreferredStage = ({ icon, text }) => {
    return (
        <span className="prefer-stage flex-align">
            <i>
                <img src={icon} alt="sort" />
            </i>
            <p className="ml-3">{text}</p>
        </span>
    );
};

const EditInvestorProfile = () => {
    const { updateInvestorProfileData, stateAuth, updateInvestorInfo } =
        useAuth();

    const onFinish = async () => {
        updateInvestorInfo();
    };

    const letterOnly = (e) => {
        const charCode = e.charCode || e.which;
        const keyValue = String.fromCharCode(charCode);
        const isValid = new RegExp(/^[a-zA-Z,.\s]*$/).test(keyValue);
        if (!isValid) {
            e.preventDefault();
            return;
        }
    };

    const best_desc = [
        "Business Owner",
        "Professional",
        "VC & PE Professional",
        "VC & PE Fund",
        "Family Office",
        "Startup Founder",
        "Accelerator/Incubator",
        "Angel Network",
    ];

    const preferred_stage = [
        "Minimum Viable Product",
        "Customer Traction",
        "Pre-Seed",
        "Revenue Traction",
        "Series A",
        "Angel",
        "VC Funds (India & Global)",
        "Seed",
    ];

    const backgrounds = [
        "Top College Graduates",
        "Prior Start-up experience",
        "Doesn’t matter",
    ];

    const funding = [
        "Less than $1,000",
        "$1,000 - $5,000",
        "$5,000 - $10,000",
        "$10,000 - $25,000",
        "$25,000 - $50,000",
        "$50,000 - $100,000",
        "More than $100,000",
        "Less than $10,000",
        "$10,000 - $40,000",
        "$40,000 - $100,000",
        "$100,000 - $300,000",
        "More than $300,000",
    ];

    return (
        <div className="px-4">
            <Form onFinish={onFinish} initialValues={{ remember: true }}>
                <section className="mb-5">
                    <p className="mb-3">Which of these best describes you?</p>
                    {/* <RowOption options={best_desc} /> */}
                    <RowOption
                        currentSelected={
                            stateAuth?.investorData?.personalDetail
                                ?.investorType
                        }
                        options={best_desc}
                        getSelected={(value) => {
                            updateInvestorProfileData("personalDetail", {
                                investorType: value,
                            });
                        }}
                    />
                </section>

                <section className="mb-5">
                    <TextArea
                        label="Investment Thesis"
                        placeholder="e.g I want to invest in start-ups which have global potential and have validated traction"
                        rows={4}
                        name={"investmentThesis"}
                        onKeyPress={letterOnly}
                        value={
                            stateAuth?.investorData?.investorApproach
                                ?.investmentThesis
                        }
                        onChange={(e) =>
                            updateInvestorProfileData("investorApproach", {
                                investmentThesis: e.target.value,
                            })
                        }
                    />
                </section>

                <section className="mb-5">
                    <p className="mb-3">What is your Preferred Stage</p>
                    <RowOption
                        currentSelected={
                            stateAuth?.investorData?.investorApproach?.stage
                        }
                        getSelected={(value) => {
                            updateInvestorProfileData("investorApproach", {
                                stage: value,
                            });
                        }}
                        options={preferred_stage}
                    />
                </section>

                <section className="mb-5">
                    {/* <Select
          label="What regions are you interested in investing in?"
          placeholder="Choose regions you are interested in investing in"
          className="edit-input"
        /> */}
                    <label className="mb-3">
                        What regions are you interested in investing in?
                    </label>
                    <CountryDropdown
                        id={"region"}
                        name={"region"}
                        className="form-control ps-3 py-1 "
                        value={
                            stateAuth?.investorData?.investorApproach?.region
                        }
                        onChange={(value) =>
                            updateInvestorProfileData("investorApproach", {
                                region: value,
                            })
                        }
                    />
                </section>

                <section className="mb-5">
                    <p className="mb-3">
                        I prefer startup founders with the following backgrounds
                    </p>
                    {/* <RowOption options={backgrounds} /> */}
                    <RowOption
                        currentSelected={
                            stateAuth?.investorData?.investorApproach
                                ?.preferredStage
                        }
                        getSelected={(value) => {
                            updateInvestorProfileData("investorApproach", {
                                preferredStage: value,
                            });
                        }}
                        options={backgrounds}
                    />
                </section>

                <section className="mb-5">
                    {/* <Select
            label="On average, how much would you like to invest in each business you choose to fund (in USD)?"
            className="edit-input"
          /> */}
                    <label className="mb-3">
                        On average, how much would you like to invest in each
                        business you choose to fund (in USD) ?
                    </label>
                    <Select
                        name="averageInvestment"
                        initialValue={
                            stateAuth?.investorData?.investorApproach
                                ?.averageInvestment
                        }
                        rules={[
                            {
                                required: true,
                                message: "Please select a sector",
                            },
                        ]}
                        placeholder="Choose the sectors you have expertise in?"
                        className="edit_input"
                        style={{ backgroundColor: "#f8f8f8" }}
                        onChange={(e) =>
                            updateInvestorProfileData("investorApproach", {
                                averageInvestment: e.target.value,
                            })
                        }
                        options={funding}
                    />
                </section>

                <section className="mb-4 text-right">
                    <Button label="Save" type={"submit"} />
                </section>
            </Form>
        </div>
    );
};
