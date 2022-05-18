import React, { useEffect, useState } from "react";
import { Button, GoBack, TextField } from "../../components";
import { useAdmin } from "../../hooks";
import styles from "./criteriaQuestion.module.css";
import info from "../../assets/icons/scaleIcon.svg";
import { useHistory } from "react-router-dom";

export const CriteriaQuestions = () => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const { push } = useHistory();
  const {
    adminState: { criteria },
    setCriteria,
  } = useAdmin();

  const handleNext = () => {
    if (currentCategory !== criteria?.length - 1) {
      setCurrentCategory(currentCategory + 1);
    }
  };

  const handleGoBack = () => {
    if (currentCategory > 0) {
      setCurrentCategory(currentCategory - 1);
    }
  };

  const addToCriteria = (index, data) => {
    let tempCriteria = criteria;
    console.log("tempCriteria", tempCriteria);
    console.log("currentCategory", currentCategory);
    tempCriteria[currentCategory].titleAndQuestion[index] = data;
    setCriteria(tempCriteria);
  };

  console.log("criteria", criteria);

  return (
    <div className="bg-white" style={{ minHeight: "94vh" }}>
      <section className="p-5">
        <GoBack />
        <div className="row">
          <section className={`col-lg-3`}></section>
          <section className="col-lg-7">
            <div className={styles.page_desc}>
              <h4>Create Evaluation Criteria</h4>
              <p className="mb-5">
                Welcome to evaluation criteria. Create the necessary questions
                which you will use to analayze and evaluate the startups
                applying for the KV program. Please know that all question
                categories are prefilled and you are expected to adjust the
                questions base on your criteria.
              </p>
            </div>
          </section>

          <section className="col-lg-3">
            <ul className={styles.category_list}>
              {criteria?.length > 0 &&
                criteria?.map((c, i) => {
                  return (
                    <li
                      key={`category-${i}`}
                      style={
                        i === currentCategory
                          ? {
                              background: "#DCEBFF",
                              color: "#2E3192",
                              textAlign: "center",
                            }
                          : {
                              color: "#BAB1B1",
                            }
                      }
                      onClick={() => setCurrentCategory(i)}
                    >
                      {c.category}
                    </li>
                  );
                })}
            </ul>
          </section>

          <section className="col-lg-7">
            <article className={`mb-45 ${styles.tq_space}`}>
              <div>
                <h5>
                  {criteria?.length > 0 && criteria[currentCategory]?.category}
                </h5>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Condimentum turpis quisque ut.
                </p>
                <span className="d-flex align-items-center space-out border-bottom pb-4 mb-4">
                  <img src={info} alt="info" />
                  <p>
                    All questions are rated on a scale of 0 to 5 and a total of
                    30 questions.
                  </p>
                </span>

                {criteria?.length > 0 &&
                  criteria[currentCategory]?.titleAndQuestion.length > 0 &&
                  criteria[currentCategory]?.titleAndQuestion?.map((tq, i) => {
                    return (
                      <TQItem
                        data={tq}
                        key={`tq-${i}`}
                        index={i}
                        addToCriteria={addToCriteria}
                      />
                    );
                  })}
              </div>
              <div
                className={`d-flex align-items-center justify-content-between ${styles.footer_questions}`}
              >
                <p>Total Score: 150</p>
                <section className="d-flex align-items-center space-out">
                  {currentCategory > 0 && (
                    <Button
                      label="Back"
                      variant="trans"
                      onClick={handleGoBack}
                    />
                  )}
                  <Button
                    label="Review"
                    variant="secondary"
                    onClick={() =>
                      push("/admin/selection_process/review_criteria")
                    }
                  />
                  {currentCategory !== criteria?.length - 1 && (
                    <Button label="Next" onClick={handleNext} />
                  )}
                  {currentCategory === criteria?.length - 1 && (
                    <Button label="Continue" />
                  )}
                </section>
              </div>
            </article>

            <article className={styles.note}>
              <p>Note that all questions most total up to 150% score</p>
            </article>
          </section>
        </div>
      </section>
    </div>
  );
};

const TQItem = ({ data, index = 0, addToCriteria = () => {} }) => {
  const [inputs, setInputs] = useState({ title: "", question: "" });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    addToCriteria(index, inputs);
  }, [inputs]);

  return (
    <div className="row mb-4">
      <section className="col-lg-4">
        <TextField
          label="Title"
          value={data?.title}
          name="title"
          onChange={handleChange}
        />
      </section>
      <section className="col-lg-8">
        <TextField
          label="Question"
          value={data?.question}
          name="question"
          onChange={handleChange}
        />
      </section>
    </div>
  );
};
