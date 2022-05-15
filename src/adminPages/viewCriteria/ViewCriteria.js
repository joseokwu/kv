import React, { useEffect, useState } from "react";
import { FullTab } from "../../adminComponents";
import { Button, GoBack } from "../../components";
import { useAdmin } from "../../hooks";
import styles from "./viewCriteria.module.css";

export const ViewCriteria = () => {
  const [categories, setCategories] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  const {
    adminState: { criteria },
    setCriteria,
  } = useAdmin();

  const dataForCriteria = [
    {
      category: "Market Attractiveness",
      noOfQuestions: "5",
      titleAndQuestion: [
        {
          title: "Conceptual Maturity",
          question:
            "How strongly you believe that the concept can be realized to a product? about this idea ",
        },
        {
          title: "problem",
          question: "What is your initial impression about this idea ",
        },
        {
          title: "Solution",
          question: "What is your initial impression about solution",
        },
        {
          title: "Manufacturability",
          question:
            "Is there evidence of manufacturability with efficiency and low cost?",
        },
        {
          title: "Market Demographics",
          question:
            "Is the size of the potential market big enough to be worth pursuing? how big can it become? ",
        },
      ],
    },

    {
      category: "Product Feasibility",
      noOfQuestions: "5",
      titleAndQuestion: [
        {
          title: "Speed",
          question: "What is your initial impression about this idea ",
        },
        {
          title: "Location",
          question: "What is your initial impression about this idea ",
        },
        {
          title: "Quick sliver",
          question: "What is your initial impression about this idea ",
        },
        {
          title: "Vision",
          question: "What is your initial impression about this idea ",
        },
        {
          title: "Wanda",
          question: "What is your initial impression about this idea ",
        },
      ],
    },

    {
      category: "Product Advantage",
      noOfQuestions: "5",
      titleAndQuestion: [
        {
          title: "Work rate",
          question: "What is your initial impression about this idea ",
        },
        {
          title: "Screen TIme",
          question: "What is your initial impression about this idea ",
        },
        {
          title: "ROI",
          question: "What is your initial impression about this idea ",
        },

        {
          title: "Compound Interest",
          question: "What is your initial impression about this idea ",
        },
      ],
    },

    {
      category: "Team Competence",
      noOfQuestions: "5",
      titleAndQuestion: [
        {
          title: "Team Size",
          question: "Is there adequate manpower in the startup? ",
        },
        {
          title: "Marketing/Sales Expertise",
          question: "Is there marketing/sales experience in the startup team?",
        },
        {
          title: "Technology Expertise",
          question:
            "Is there product development skill set in the startup team?",
        },
        {
          title: "Winner",
          question: "What is your initial impression about this problem ",
        },
        {
          title: "Wahala",
          question: "What is your initial impression about this idea ",
        },
      ],
    },

    {
      category: "Expected Return",
      noOfQuestions: "5",
      titleAndQuestion: [
        {
          title: "Quincy Jones",
          question: "What is your initial impression about this idea ",
        },
        {
          title: "Yebox",
          question: "What is your initial impression about this idea ",
        },
        {
          title: "Asgard",
          question: "What is your initial impression about this idea ",
        },
      ],
    },
    {
      category: "Growth Potential",
      noOfQuestions: "5",
      titleAndQuestion: [
        {
          title: "Eric",
          question: "What is your initial impression about this idea ",
        },
        {
          title: "Quake",
          question: "What is your initial impression about this idea ",
        },
      ],
    },
  ];

  console.log("criteria", criteria[currentTab]);

  useEffect(() => {
    setCriteria(dataForCriteria);
  }, []);

  useEffect(() => {
    setCategories(() => criteria?.map((c) => c.category));
    return () => {};
  }, [criteria]);

  const handleNext = () => {
    if (currentTab !== criteria?.length - 1) {
      setCurrentTab(currentTab + 1);
    }
  };

  const handleGoBack = () => {
    if (currentTab > 0) {
      setCurrentTab(currentTab - 1);
    }
  };

  return (
    <div className="bg-white p-5" style={{ minHeight: "93vh" }}>
      <GoBack />

      <section className="d-flex align-items-center justify-content-between mt-5 mb-4">
        <h4>Evaluation Criteria</h4>
        <div className="d-flex align-items-center space-out">
          <Button label="Edit" variant="trans" />
          <Button label="Reuse" />
        </div>
      </section>

      <section
        className="white-strip px-3 mb-45"
        style={{
          boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.05)",
        }}
      >
        <FullTab
          tabItems={categories}
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
        />
      </section>

      <section>
        <div className={styles.content}>
          {criteria?.length > 0 &&
          criteria[currentTab]?.titleAndQuestion?.length > 0 ? (
            criteria[currentTab]?.titleAndQuestion?.map((tq, i) => {
              return (
                <div className="d-flex align-items-center space-out mb-45">
                  <b>{tq.title}</b>
                  <p>- {tq?.question}</p>
                </div>
              );
            })
          ) : (
            <h4>No Questions here</h4>
          )}
        </div>
        <div
          className={`d-flex align-items-center justify-content-between mb-45 ${styles.footer_control}`}
        >
          <p>Total Score: 100</p>
          <section className="d-flex align-items-center space-out">
            {currentTab > 0 && (
              <Button label="Go Back" variant="gray" onClick={handleGoBack} />
            )}
            {currentTab !== criteria?.length - 1 && (
              <Button label="Next" onClick={handleNext} />
            )}
          </section>
        </div>
        <section className={styles.note}>
          <p>Note that all questions most total up to 100% score</p>
        </section>
      </section>
    </div>
  );
};
