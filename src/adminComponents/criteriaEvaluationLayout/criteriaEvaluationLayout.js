import React, { useEffect, useState } from "react";
import { Header, Sidebar } from "../index";
import "./criteriaEvaluationLayout.css";
import { useHistory } from "react-router-dom";
import { ProgressBar } from "../../components";
import { Button } from "../../components";
import { useAdmin } from "../../hooks";

const CriteriaEvaluationLayout = ({ children }) => {
    const [open, setOpen] = useState(false);

    const { location, push, goBack } = useHistory();

    const {
        setSelectionProgressVal,
        adminState: { selectionProgress },
    } = useAdmin();

    const valueList = [20, 40, 50, 90];
    const valIndex = valueList.findIndex((val) => val === selectionProgress);

    const isBeginning = location.pathname.includes("new-criteria-intro");

    return (
        <div className="layout-grid-wrapper">
            <section className="layout-header">
                <Header setOpen={setOpen} open={open} />
            </section>
            <section className="layout-criteria">
                <div
                    className="criteria-layout-child"
                    style={{ backgroundColor: "#f9fafa" }}
                >
                    {children}
                </div>
            </section>
            <section className="d-flex flex-row align-items-center justify-content-around layout-footer">
                {isBeginning || location.pathname.includes("kv_add_member") ? (
                    <span />
                ) : (
                    <Button variant="trans" label="Cancel" />
                )}
                {location.pathname.includes("kv_add_member") ? (
                    <span />
                ) : isBeginning ? (
                    <div className="d-flex flex-row align-items-center gap-4">
                        <Button
                            variant="gray"
                            label="Cancel"
                            onClick={() => {
                                if (valIndex > 0) {
                                    setSelectionProgressVal(
                                        valueList[valIndex - 1]
                                    );
                                }
                            }}
                        />
                        <Button
                            label="Next"
                            type="button"
                            onClick={() => {
                                push(
                                    "/admin/selection_process/new-criteria/007"
                                );
                            }}
                        />
                    </div>
                ) : (
                    <div className="d-flex flex-row align-items-center gap-4">
                        <Button
                            variant="gray"
                            label="Go back"
                            onClick={() => {
                                if (valIndex > 0) {
                                    setSelectionProgressVal(
                                        valueList[valIndex - 1]
                                    );
                                } else {
                                    goBack();
                                }
                            }}
                        />
                        {selectionProgress === 50 ? (
                            <Button
                                variant="secondary"
                                label="Review"
                                onClick={() => {
                                    push(
                                        "/admin/selection_process/review_criteria"
                                    );
                                }}
                            />
                        ) : (
                            <span />
                        )}
                        <Button
                            label={selectionProgress === 90 ? "Create" : "Next"}
                            type="button"
                            onClick={() => {
                                if (valIndex < valueList.length - 1) {
                                    setSelectionProgressVal(
                                        valueList[valIndex + 1]
                                    );
                                }
                            }}
                        />
                    </div>
                )}
            </section>
        </div>
    );
};

export const WithCriteriaEvaluationLayout = (Component) => {
    return (props) => {
        return (
            <>
                <CriteriaEvaluationLayout>
                    <Component {...props} />
                </CriteriaEvaluationLayout>
            </>
        );
    };
};
