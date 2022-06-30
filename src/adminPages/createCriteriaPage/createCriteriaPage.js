import { useEffect, useState } from "react";
import { CreateNewCriteria } from "../createNewCriteria/CreateNewCriteria";
import { CriteriaQuestions } from "../criteriaQuestions/CriteriaQuestions";
import { CreateNewCriteriaCard } from "../../adminComponents/criteriaEvaluation";
import { AddKVMemberForSelectionProcess } from "../addKVMemberForSelectionProcess/AddKVMemberForSelectionProcess";
import { AddMentorForSelectionProcess } from "../addMentorForSelectionProcess/addMentorForSelectionProcess";
import { AddStartupForSelectionProcess } from "../addStartupForSelectionProcess/addStartupForSelectionProcess";
import { Button, GoBack, TextField, ProgressBar } from "../../components";
import styles from "./createCriteriaPage.module.css";
import { useAdmin } from "../../hooks";

export const CreateCriteriaPage = () => {
    const {
        setSelectionProgressVal,
        adminState,
        adminState: { selectionProgress },
    } = useAdmin();

    const renderComp = () => {
        switch (selectionProgress) {
            case 20:
                return <CreateNewCriteriaCard />;
                break;

            case 40:
                return <CreateNewCriteria />;
                break;

            case 50:
                return <CriteriaQuestions />;
                break;

            case 90:
                return <AddStartupForSelectionProcess />;
                break;

            default:
                break;
        }
    };

    return (
        <div className="bg-white" style={{ minHeight: "93vh" }}>
            <section className="p-5">
                <GoBack />
                <div className={styles.wrap}>
                    <ProgressBar progress={selectionProgress} />
                </div>
                {renderComp()}
            </section>
        </div>
    );
};
