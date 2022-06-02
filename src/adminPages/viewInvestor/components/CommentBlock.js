import React, { useEffect, useMemo, useState } from "react";
import { Badge, Button, Tag, TextArea } from "../../../components";
import { PortfolioCard } from "./PortfolioCard";
import yeboxLogo from "../../../assets/images/yeLogo.svg";
import styles from "../viewInvestor.module.css";
import { getInvestorCommitment, profile } from "../../../services";
import { SkeletonLoader } from "../../../components";

const CommentBlock = ({ comment, portfolio }) => {
    useEffect(() => {
        console.log(comment);
    }, []);

    return (
        <section className="col-12">
            <div
                className="d-flex align-items-center mb-3"
                style={{ columnGap: 14 }}
            >
                <span className={styles.commenterInit}>A</span>
                <p>Admin</p>
                <p>{new Date(comment?.time).toLocaleDateString("en-gb")}</p>
                <p>{new Date(comment?.time).toLocaleTimeString("en-us")}</p>
                {/* <p>3:15am</p> */}
            </div>
            <div className="mb-5">
                <p className={styles.comment}>{comment?.commentBody}</p>
            </div>
        </section>
    );
};

export default CommentBlock;
