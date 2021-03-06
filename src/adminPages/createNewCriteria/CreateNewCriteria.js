import React, { useEffect, useState } from "react";
import { Button, GoBack, TextField } from "../../components";
import info from "../../assets/icons/scaleIcon.svg";
import close from "../../assets/icons/close.svg";
import styles from "./createNewCriteria.module.css";
import { useAdmin } from "../../hooks";
import { useHistory } from "react-router-dom";
import { Form } from "antd";
// import createCategory from './'

export const CreateNewCriteria = () => {
    const { adminState, setCriteria, addNewCategory } = useAdmin();

    const { push } = useHistory();

   console.log("adminState", adminState);
  const [categories, setCategories] = useState([
    { category: "", noOfQuestion: "1" , criteriaId:adminState?.criteriaDetail?._id , titleAndQuestion:[] },
  ]);

    useEffect(() => {
        setCategories([
            {
                category: "",
                noOfQuestion: "1",
                criteriaId: adminState?.criteriaDetail?._id,
            },
        ]);
        console.log(adminState?.criteriaDetail?._id);
        return () => {};
        console.log(adminState);
    }, []);

    /**
     * adds a single category input to the UI list
     */
    const addCategoryInput = () => {
        setCategories([...categories, {}]);
    };

  /**
   * adds a single category input to the UI list
   */


    const deleteCategory = (index) => {
        if (categories.length > 1) {
            setCategories(() => categories?.filter((x, i) => i !== index));
        }
    };

    const handleNext = () => {
        addNewCategory(categories);
        console.log(categories);
        push("/admin/selection_process/criteria-questions");
    };

    return (
        <div className="bg-white" style={{ minHeight: "93vh" }}>
            <section className="p-5">
                <GoBack />

                <article className={styles.wrap}>
                    <section className={styles.page_desc}>
                        <h4>Create Evaluation Criteria</h4>
                        <p className="mb-5">
                            Welcome to evaluation criteria. Create the necessary
                            questions which you will use to analayze and
                            evaluate the startups applying for the KV program.
                            Please know that all question categories are
                            prefilled and you are expected to adjust the
                            questions base on your criteria.
                        </p>
                    </section>

                    <section className={styles.form_area}>
                        <h5>Categories</h5>
                        <p>
                            Create question categories to organize your decision
                            criterias. You can set the amount of questions per
                            category
                        </p>

                        <div>
                            <img src={info} alt="info" />
                            <p>
                                You can set the amount of questions per
                                category. All questions are rated on a scale of
                                0 to 5 and should total upto 150%
                            </p>
                        </div>

                        <section>
                            {categories.map((cat, i) => (
                                <CategoryInput
                                    //   key={`category-${i}`}
                                    index={i}
                                    
                                    category={cat?.category}
                                    noOfQuestion={cat?.noOfQuestion}
                                    titleAndQuestion={cat?.titleAndQuestion}
                                    deleteCategory={() => deleteCategory(i)}
                                />
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
                            <p>Total Score: 150</p>
                            <div
                                className={`d-flex align-items-center space-out `}
                            >
                                <Button label="Review" variant="secondary" />
                                <Button
                                    label="Next"
                                    type="button"
                                    variant="primary"
                                    onClick={handleNext}
                                />
                            </div>
                        </section>
                    </section>
                </article>
            </section>
        </div>
    );
};

const CategoryInput = ({
  index = 0,
  addToCategoryArray = () => {},
  noOfQuestion = "1",
  category = "",
  titleAndQuestion = [{ title: "", question: "" }],
  deleteCategory = () => {},
}) => {
    const { adminState, setCriteria, addNewCategory } = useAdmin();

    const [data, setData] = useState({
        name: category,
        criteriaId: adminState?.criteriaDetail?._id,
        noOfQuestion: noOfQuestion,
        titleAndQuestion: titleAndQuestion,
    });

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.id]: e.target.value });
//     if (e.target.id === "noOfQuestion") {
//       setData({
//         ...data,
//         [e.target.id]: e.target.value,
//         titleAndQuestion: new Array(Number(e.target.value)).fill({ title: "", question: "" }),
//       });
//     }
//   };

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
        if (e.target.id === "noOfQuestion") {
            setData({
                ...data,
                [e.target.id]: e.target.value,
                titleAndQuestion: new Array(Number(e.target.value)).fill({}),
            });
        }
        console.log(adminState);
    };

    // console.log("data", data);

    useEffect(() => {
        addToCategoryArray(index, data);
    }, [data]);

    return (
        <div
            className={styles.category_input}
            style={{ marginTop: index > 0 ? "1.4rem" : "" }}
        >
            <TextField
                label={`Category ${index + 1}`}
                placeholder="Enter Title"
                name="category"
                onChange={handleChange}
                defaultValue={category}
            />
            <TextField
                label="No of questions"
                style={{ maxWidth: 70 }}
                type="number"
                name="noOfQuestion"
                onChange={handleChange}
                defaultValue={noOfQuestion}
            />
            {/* <img src={close} alt="close" onClick={deleteCategory} /> */}
        </div>
    );
};
