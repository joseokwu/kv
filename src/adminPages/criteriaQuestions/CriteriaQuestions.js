import React, { useState } from "react";
import { GoBack } from "../../components";
import { useAdmin } from "../../hooks";
import styles from "./criteriaQuestion.module.css";

export const CriteriaQuestions = () => {
  const {
    adminState: { criteria },
  } = useAdmin();
  console.log("criteria", criteria);

  const [currentCategory, setCurrentCategory] = useState(0);
  return (
    <div className="bg-white" style={{ minHeight: "94vh" }}>
      <section className="p-5">
        <GoBack />
        <div className="row">
          <section className={`col-lg-4`}></section>
          <section className="col-lg-6">
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

          <section className="col-lg-4">
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

          <section className="col-lg-6"></section>
        </div>
      </section>
    </div>
  );
};
