import React from "react";
import { months } from "../../utils/helpers";
import "./milestone.css";
import moment from "moment";

export const MilestoneCard = ({ side = "", data = {} }) => {
    return (
        <div
            className={`flex-align position-relative`}
            style={side === "left" ? { left: 11 } : { right: 11 }}
        >
            {side === "right" && (
                <section className="flex-align">
                    <span className="mile-dot shadow-sm"></span>
                    <span className="mile-triangle-left ml-2"></span>
                </section>
            )}
            <div className="d-flex align-items-center justify-content-between mile-card shadow">
                <section className="mile-info">
                    <p className="title mb-2">{data?.title}</p>
                    <p className="desc mb-2">{data?.description}</p>
                    <span className="d-flex align-items-center mile-actions">
                        <p className="mr-3 edit">Edit Milestone</p>
                        <p className="delete">Delete</p>
                    </span>
                </section>

                <section className="date-card">
                    <p className="month">
                        {moment(data.dateOfAchievement).format("MM")}.
                    </p>
                    <p className="day">
                        {moment(data.dateOfAchievement).format("DD")}
                    </p>
                    <p className="year">
                        {moment(data.dateOfAchievement).format("YYYY")}
                    </p>
                </section>
            </div>
            {side === "left" && (
                <section className="flex-align">
                    <span className="mile-triangle-right mr-2"></span>

                    <span className="mile-dot shadow-sm"></span>
                </section>
            )}
        </div>
    );
};
