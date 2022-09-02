import React, { useEffect, useState, useCallback } from "react";
import { Button, GoBack, TextField } from "../../components";
import info from "../../assets/icons/scaleIcon.svg";
import styles from "./createNewCriteria.module.css";
// import { useAdmin } from "../../hooks";
import { makeAdminRequest } from "../../services";
import { useHistory, useParams } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";

export const CreateNewCriteria = () => {
    const { id } = useParams();
    const [categories, setCategories] = useState([]);
    const { push } = useHistory();

    const getCriteriaCategories = useCallback(async (id) => {
        return await makeAdminRequest("getAllCategory", {
            criteriaId: id,
        });
    }, []);

    useEffect(() => {
        const init = async () => {
            const res = await getCriteriaCategories(id);
            if (!res) return;
            setCategories(res?.data);
        };
        init();
    }, [getCriteriaCategories, id]);

    const onChange = (index, data) => {
        const tempCategories = [...categories];
        tempCategories[index] = tempCategories[index]
            ? {
                  ...tempCategories[index],
                  ...data,
              }
            : data;
        setCategories(tempCategories);
    };

    const addCategoryInput = () => {
        setCategories([...categories, { ind: categories.length }]);
        console.log(categories);
    };

    const handleNext = async () => {
        const totalNoOfQuestions = categories.reduce(
            (acc, v) => parseInt(v?.questionNumber) + acc,
            0
        );
        if (totalNoOfQuestions !== 30)
            return alert(
                "You need to have a total of 30 questions for the categories."
            );
        await makeAdminRequest("updateCategories", {
            criteriaId: id,
            categories,
        });
        push(`/admin/selection_process/criteria-questions/${id}`);
    };

    return (
        <article className={styles.wrap}>
            <section className={styles.page_desc}>
                <h4>Create Evaluation Criteria</h4>
                <p className="mb-5">
                    Welcome to evaluation criteria. Create the necessary
                    questions which you will use to analayze and evaluate the
                    startups applying for the KV program. Please know that all
                    question categories are prefilled and you are expected to
                    adjust the questions base on your criteria.
                </p>
            </section>

            <section className={styles.form_area}>
                <h5>Categories</h5>
                <p>
                    Create question categories to organize your decision
                    criterias. You can set the amount of questions per category
                </p>

                <div>
                    <img src={info} alt="info" />
                    <p>
                        You can set the amount of questions per category. All
                        questions are rated on a scale of 0 to 5 and should
                        total upto 150%
                    </p>
                </div>

                <section>
                    {categories.map((category, index) => (
                        <div className="d-flex flex-row align-items-center gap-4 justify-content-between">
                            <CategoryInput
                                key={`category-input-${index}`}
                                {...{ category, onChange, index }}
                            />
                            <span
                                tw="cursor-pointer"
                                onClick={() => {
                                    const newArr = [...categories];
                                    newArr.splice(index, 1);
                                    setCategories(newArr);
                                }}
                            >
                                <MdOutlineDeleteOutline size={24} color="red" />
                            </span>
                        </div>
                    ))}
                </section>

                <section className="mt-4">
                    <p
                        className="view-link"
                        role="button"
                        onClick={addCategoryInput}
                    >
                        Add Category +
                    </p>
                </section>

                <section
                    className={`d-flex align-items-center justify-content-between ${styles.cta_area}`}
                >
                    {/* <div className={`d-flex align-items-center space-out `}>
                        <Button label="Review" variant="secondary" />
                        <Button
                            label="Next"
                            type="button"
                            variant="primary"
                            onClick={handleNext}
                        />
                    </div> */}
                </section>
            </section>
        </article>
    );
};

const CategoryInput = ({ index, onChange, category }) => {
    const [data, setData] = useState(category);
    const handleChange = (e) => {
        const { id, value } = e.target;
        onChange(index, {
            ...data,
            [id]: value,
        });
        setData({
            ...data,
            [id]: value,
        });
    };
    return (
        <div
            className={styles.category_input}
            style={{ marginTop: index > 0 ? "1.4rem" : "", width: "100%" }}
        >
            <TextField
                label={`Category ${index + 1}`}
                placeholder="Enter Title"
                name="name"
                onChange={handleChange}
                defaultValue={category?.name}
            />

            <TextField
                label="No of questions"
                style={{ maxWidth: 70 }}
                type="number"
                name="questionNumber"
                onChange={handleChange}
                defaultValue={category?.questionNumber}
            />
        </div>
    );
};
