import React, { useEffect, useState, useCallback } from "react";
import { Button, GoBack } from "../../components";
import { makeAdminRequest } from "../../services";
import styles from "./criteriaQuestion.module.css";
import info from "../../assets/icons/scaleIcon.svg";
import { useHistory, useParams } from "react-router-dom";

export const CriteriaQuestions = () => {
    const { id } = useParams();
    const [categories, setCategories] = useState([]);
    const [initialQuestionsNo, setInitialQuestionNo] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(0);
    const [loading, setLoading] = useState(false);
    const { push } = useHistory();

    const handleBack = () => {
        setQuestions([]);
        setCurrentCategory((c) => c - 1);
    };
    const handleNext = async () => {
        if (
            typeof parseInt(categories[currentCategory]?.questionNumber, 10) !==
            "number"
        )
            return;
        if (questions.length !== +categories[currentCategory]?.questionNumber) {
            alert(
                "You have not created finished creating questions for this category."
            );
            return;
        }
        await makeAdminRequest("updateCriteriaQuestion", {
            value: questions.map((q) => ({
                ...q,
                criteriaId: id,
                categoryId: categories[currentCategory]?._id,
            })),
        });

        if (currentCategory === categories?.length - 1) {
            push(``);
        } else {
            setQuestions([]);
            setCurrentCategory((c) => c + 1);
        }
    };
    const onChange = (index, data) => {
        const questionsCopy = [...questions];
        questionsCopy[index] = questionsCopy[index]
            ? {
                  ...questionsCopy[index],
                  ...data,
              }
            : data;
        setQuestions(questionsCopy);
    };

    const getCriteriaCategories = useCallback(async (id) => {
        return await makeAdminRequest("getAllCategory", {
            criteriaId: id,
        });
    }, []);

    const getCategoryQuestions = useCallback(async (id) => {
        return await makeAdminRequest("getCategoriesandQuest", {
            categoryId: id,
        });
    }, []);

    const placeCategories = [
        { name: "Category 1" },
        { name: "Category 2" },
        { name: "Category 3" },
    ];

    useEffect(() => {
        const init = async () => {
            const res = await getCriteriaCategories(id);
            if (!res) return;
            setCategories(res?.data);
        };
        if (!id) return;
        init();
    }, [getCriteriaCategories, id]);
    useEffect(() => {
        if (categories.length < 1) return;
        const run = async () => {
            setLoading(true);
            const res = await getCategoryQuestions(
                categories[currentCategory]?._id
            );
            setLoading(false);
            if (!res) return;
            setQuestions([]);
            setQuestions(res?.data);
            setInitialQuestionNo(res?.data?.length);
        };
        run();
    }, [currentCategory, categories, getCategoryQuestions]);

    return (
        <div className={styles.wrap}>
            <div className="row">
                <section className={`col-lg-3`}></section>
                <section className="col-lg-9">
                    <div className={styles.page_desc}>
                        <h4>Create Evaluation Criteria</h4>
                        <p className="mb-5">
                            Welcome to evaluation criteria. Create the necessary
                            questions which you will use to analayze and
                            evaluate the startups applying for the KV program.
                            Please know that all question categories are
                            prefilled and you are expected to adjust the
                            questions base on your criteria.
                        </p>
                    </div>
                </section>

                <section className="col-lg-3">
                    <ul className={styles.category_list}>
                        {placeCategories?.length > 0 &&
                            placeCategories?.map((c, i) => {
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
                                        {c.name}
                                    </li>
                                );
                            })}
                    </ul>
                </section>

                <section className="col-lg-9">
                    <article className={`mb-45 ${styles.tq_space}`}>
                        <div>
                            <h5>
                                {categories?.length > 0 &&
                                    categories[currentCategory]?.name}
                            </h5>
                            <p className="mb-3">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Condimentum turpis quisque ut.
                            </p>
                            <span className="d-flex align-items-center space-out border-bottom pb-4 mb-4">
                                <img src={info} alt="info" />
                                <p>
                                    All questions are rated on a scale of 0 to 5
                                    and a total of 30 questions.
                                </p>
                            </span>

                            {!loading &&
                                (initialQuestionsNo < 1
                                    ? Array(
                                          categories.length < 1
                                              ? 1
                                              : +categories[currentCategory]
                                                    ?.questionNumber
                                      )
                                          .fill(5)
                                          .map((_, index) => (
                                              <div
                                                  className="row mb-4"
                                                  key={index}
                                              >
                                                  <section className="col-lg-4">
                                                      <input
                                                          id="question"
                                                          label="Question"
                                                          defaultValue={""}
                                                          name="question"
                                                          onChange={(e) =>
                                                              onChange(index, {
                                                                  question:
                                                                      e.target
                                                                          .value,
                                                              })
                                                          }
                                                      />
                                                  </section>
                                              </div>
                                          ))
                                    : questions.map(({ question }, i) => (
                                          <div className="row mb-4" key={i}>
                                              <section className="col-lg-4">
                                                  <input
                                                      id="question"
                                                      label="Question"
                                                      defaultValue={question}
                                                      name="question"
                                                      onChange={(e) =>
                                                          onChange(i, {
                                                              question:
                                                                  e.target
                                                                      .value,
                                                          })
                                                      }
                                                  />
                                              </section>
                                          </div>
                                      )))}
                        </div>
                        <div
                            className={`d-flex align-items-center justify-content-between ${styles.footer_questions}`}
                        >
                            <p>Total Score: 150</p>
                            {/* <section className="d-flex align-items-center space-out">
                                {currentCategory > 0 && (
                                    <Button
                                        label="Back"
                                        variant="trans"
                                        onClick={handleBack}
                                    />
                                )}
                                <Button
                                    label="Review"
                                    variant="secondary"
                                    onClick={() =>
                                        push(
                                            "/admin/selection_process/review_criteria"
                                        )
                                    }
                                />
                                {currentCategory !== categories?.length - 1 && (
                                    <Button label="Next" onClick={handleNext} />
                                )}
                                {currentCategory === categories?.length - 1 && (
                                    <Button
                                        label="Continue"
                                        onClick={handleNext}
                                    />
                                )}
                            </section> */}
                        </div>
                    </article>

                    <article className={styles.note}>
                        <p>
                            Note that all questions most total up to 150% score
                        </p>
                    </article>
                </section>
            </div>
        </div>
    );
};
