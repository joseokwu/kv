import React from "react";
import { Button, Select, Tag } from "../../../components";
import { formatTime, months } from "../../../utils/helpers";
// import { GuestItem } from "../../events/components/index";
import city from "../../../assets/icons/city.svg";
import clock from "../../../assets/icons/clocksm.svg";
import { BsGlobe } from "react-icons/bs";
import styles from "../programs.module.css";
import { AdminButton } from "../../../components";

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

            <p className="mb-2">{data?.industry[0]}</p>

            <section className="d-flex align-items-center gap-4 mb-4">
                <div className="d-flex flex-row items-center gap-2">
                    <img src={city} />
                    {data?.city}
                </div>
                <div className="d-flex flex-row align-items-center gap-2">
                    <img src={clock} />
                    {data?.incorporationDate}
                </div>
                <div className="d-flex flex-row align-items-center gap-2">
                    <BsGlobe /> {data?.website}
                </div>
            </section>
            <div className="my-4 text-[#242679]">
                <a href="#" className="view-link">
                    View Profile
                </a>
            </div>

            <section>
                <img src={data?.image} />
            </section>
            <div style={{ margin: "49px 0" }}>
                <AdminButton
                    label="Evaluate"
                    variant="primary"
                    // data-toggle="modal"
                    // data-target={`#startup-${id}`}
                />
            </div>
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
