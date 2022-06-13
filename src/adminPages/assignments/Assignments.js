import React, { useState, useEffect } from "react";
import styles from "./assignment.module.css";
import left from "../../assets/icons/chervonLeft.svg";
import { useHistory } from "react-router-dom";
import { AssignmentCard } from "./components/AssignmentCard";
import { getAssignments } from "../../services";
import { SkeletonLoader } from "../../components";

export const Assignments = () => {
    const { goBack } = useHistory();

    const [assignments, setAssignments] = useState([]);
    const [fetched, setFetched] = useState(false);

    useEffect(async () => {
        const res = await getAssignments();
        console.log(res?.data?.data);
        setAssignments(res?.data?.data);
        setFetched(true);
    }, []);

    return (
        <div className="p-5">
            <section
                className="d-flex align-items-center mb-3"
                onClick={() => goBack()}
                role="button"
                style={{ width: "fit-content" }}
            >
                <img
                    src={left}
                    alt="left"
                    className="mr-2"
                    style={{ transform: "rotate(180deg)" }}
                />
                <p className="bread-start" role="button">
                    Go back
                </p>
            </section>

            <p className="mt-5">Total Assignments created: 6</p>

            <SkeletonLoader fetched={fetched} height={352}>
                <section className="row mt-4" style={{ maxWidth: 2000 }}>
                    {assignments?.length > 0 &&
                        assignments?.map((item, i) => {
                            return (
                                <div
                                    className="col-lg-6 mb-3"
                                    key={`assignment-${i}`}
                                >
                                    <AssignmentCard data={item} id={i} />
                                </div>
                            );
                        })}
                </section>
            </SkeletonLoader>
        </div>
    );
};
