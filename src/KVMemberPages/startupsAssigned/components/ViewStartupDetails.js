import React from "react";
import { Button, Select, Tag } from "../../../components";
import { formatTime, months } from "../../../utils/helpers";
// import { GuestItem } from "../../events/components/index";
import clock from "../../../assets/icons/clocksm.svg";
import styles from "../programs.module.css";

export const ViewStartupDetails = ({ data = {} }) => {
    return (
        <div className="px-4">
            <section
                className="d-flex flex-column gap-2 align-items-start mt-5"
                style={{ columnGap: "2rem" }}
            >
                <img src={data?.logo} />
                <h4>{data?.name}</h4>
            </section>

            <p>{data?.industry[0]}</p>

            <section className="d-flex align-items-center space-out mb-4">
                <div>Workshodiv -</div>
                <div> Legal Sessions</div>
            </section>

            <section>
                <img src={data?.image} />
            </section>
        </div>
    );
};

const PersonDetail = ({ data }) => {
    return (
        <div className={styles.person}>
            {data?.img ? <img src="" alt="" /> : <span></span>}
            <section>
                <p>{data?.name}</p>
                <p>{data?.title}</p>
            </section>
        </div>
    );
};
