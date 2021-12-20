import React from "react";
import { useHistory } from "react-router-dom";
import { Button, TextField, TextArea, Select } from "../../../../components/index";
import FormCard from "../../../../components/formCard/FormCard";
import imageRep from "../../../../assets/icons/plus.svg"
import "./workExperience.css";

const WorkExperience = () => {
    const { goBack, push } = useHistory();

    return (
        <div className="mentor_details_form_wrap">
            <h3>Work Experience</h3>
            <p>You are required to add a current experence.</p>

            <FormCard>
                <div className="mb-4">
                    <p className="offer-text pt-2">Are you a past or current founder of a company?</p>
                    <section className="free-choice">
                        <button className="yes-btn">Yes</button>
                        <button className="no-btn">No</button>
                    </section>                
                </div>

                <div className="row">
                    <section className="col-md-12 mb-4">
                        <Select label={"Industry"} />
                    </section>

                    <section className="col-md-12 mb-4">
                        <TextArea 
                            label={"Company Name*"}
                            placeholder={"Enter company name"}
                            rows={"1"}
                            required={true}
                        />
                    </section>

                    <section className="col-md-12 mb-4">
                        <TextArea 
                            label={"What are your top  achievements?"}
                            placeholder={"e.g I was made a managing director...."}
                            rows={"6"}
                        />
                    </section>  
                </div>
            </FormCard>

            <FormCard>
                <div className="mb-4 mt-5">
                    <p className="offer-text pt-2">Are you a past or current founder of a company?</p>
                    <section className="free-choice">
                        <button className="yes-btn">Yes</button>
                        <button className="no-btn">No</button>
                    </section>                
                </div>

                <div className="row">
                    <section className="col-md-12 mb-4">
                        <Select label={"Industry"} />
                    </section>  

                    <section className="col-md-12 mb-4">
                        <TextArea 
                            label={"Position*"}
                            placeholder={"Ex. Managing Director"}
                            required={true}
                            rows={"1"}
                        />
                    </section>

                    <section className="col-md-6 mb-4">
                        <TextField 
                            label={"Start Date*"}
                            type={"date"}
                            placeholder={"dd/mm/yy"}
                            required={true}
                        />
                    </section>
                    <section className="col-md-6 mb-4">
                        <TextField 
                            label={"End Date*"}
                            placeholder={"dd/mm/yy"}
                            required={true}
                        />
                    </section>

                    <section className="col-md-12 mb-4">
                        <TextArea 
                            label={"Company Name*"}
                            placeholder={"Enter company name"}
                            rows={"1"}
                            required={true}
                        />
                    </section>

                    <section className="col-md-12 mb-4">
                        <TextArea 
                            label={"What are your top  professional achievements?"}
                            placeholder={"e.g I was made a managing director...."}
                            rows={"6"}
                        />
                    </section>

                    <div className="mb-4">
                        <p className="offer-text pt-2">Have you ever been among the first set of employees in a company that was valued or exited at $5M?</p>
                        <section className="free-choice">
                            <button className="yes-btn">Yes</button>
                            <button className="no-btn">No</button>
                        </section>                
                    </div>
                </div>
            </FormCard>

            <section className="col-md-12 mb-4">
                <p className="add_another_experience"><img className="mr-2" src={imageRep} alt="plus"/>Add Another Experience</p>
            </section>

            <section className="d-flex align-items-center justify-content-between mt-5">
                <button
                className="back-btn"
                onClick={() => {
                    goBack();
                }}
                >
                    Go Back
                </button>

                <div className="d-flex align-items-center" style={{ columnGap: 9 }}>
                    <Button label="Save" variant="secondary" />
                    <Button
                        label="Next"
                        onClick={() => {
                            push("#area_of_interest");
                        }}
                    />
                </div>
            </section>
        </div>
    );
};

export default WorkExperience;