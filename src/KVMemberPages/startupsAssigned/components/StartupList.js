import React from "react";
import { StartupCard } from "./StartupCard";
import styles from "../programs.module.css";

export const StartupList = ({ dataList = [], filters = [] }) => {
    let filteredList;
    if (filters.length > 0) {
        filteredList = dataList.filter((item) => filters.includes(item.status));
    } else {
        filteredList = dataList;
    }

    return (
        <div className={styles.flexParent}>
            {dataList?.length > 0 &&
                filteredList.map((info, i) => {
                    return (
                        <section className={styles.flexChild}>
                            <StartupCard data={info} id={i} />
                        </section>
                    );
                })}
        </div>
    );
};
