import React, { useEffect, useMemo, useState } from "react";
import { Button, GoBack, TextField } from "../../components";
import { useAdmin } from "../../hooks";
import styles from "./criteriaQuestion.module.css";
import info from "../../assets/icons/scaleIcon.svg";
import { useHistory } from "react-router-dom";

export const CriteriaQuestions = () => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const { push } = useHistory();
  const {
    adminState: { categories },
    addNewCategory,
  } = useAdmin();

  const handleNext = () => {
    if (currentCategory !== categories?.length - 1) {
      setCurrentCategory(currentCategory + 1);
    }
  };

  const handleGoBack = () => {
    if (currentCategory > 0) {
      setCurrentCategory(currentCategory - 1);
    }
  };

  const showTq = (data , i) =>{
    return <TQItem
    data={data} 
    index={i}
    />
  }

  const addToCriteria = (index, data) => {
    let tempCriteria = categories;
    console.log("tempCriteria", tempCriteria);
    console.log("currentCategory", currentCategory);
    tempCriteria[currentCategory].titleAndQuestion[index] = data;
    addNewCategory(tempCriteria);
  };


useEffect(() =>{
  showTq();

},[currentCategory])

  //console.log("criteria", categories);

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
              {categories?.length > 0 &&
                categories?.map((c, i) => {
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
                  {categories?.length > 0 &&
                    categories[currentCategory]?.category}
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

                    {
                       showTq(categories[currentCategory]?.titleAndQuestion , currentCategory)
                    }

                {/* {categories?.length > 0 &&
                  categories[currentCategory]?.titleAndQuestion.length > 0 && (
                    <TQItem
                      data={categories[currentCategory]?.titleAndQuestion}
                      subdata={categories[currentCategory]}
                      index={currentCategory}
                    />
                  )} */}
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
                  {currentCategory !== categories?.length - 1 && (
                    <Button label="Next" onClick={handleNext} />
                  )}
                  {currentCategory === categories?.length - 1 && (
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

const TQItem = ({ data , index }) => {
  
  const [inputs, setInputs] = useState([]);
  const inputLength = useMemo(() => Array(inputs.length).fill(inputs.length), [inputs])
  useEffect(() => {
    setInputs(data);
    console.log(data)
  }, [data , index]);
  useEffect(() => {
   console.log("rerender");
  }, [index]);
  const handleChange = (index) => (e) => {
    const { name, value } = e.target;
    console.log(name);
    const inputCopy = [...inputs];
    inputCopy[index] = { ...inputCopy[index], [name]: value };
    console.log(inputCopy);
    setInputs([...inputCopy]);
  };

  // useEffect(() => {
  //   addToCriteria(index, inputs);
  // }, [inputs]);

  return (
    <div className="mb-4"> 
      { inputs.length > 0 && inputs.map((item, i) => (
        <div key={i} className="d-flex">
          <section className="col-lg-6 form-group">
          <label>Title</label>
            <input
              value={item?.title}
              name="title"
              className="form-control"
              onChange={handleChange(i)}
            />
          </section>
          <section className="col-lg-6 form-group">
          <label>Question</label>
            <input
             className="mx-4 form-control"
              value={item?.question}
              name="question"
              onChange={handleChange(i)}
            />
          </section>
        </div>
      ))}
    </div>
  );
};
