import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Table } from "../../../adminComponents";
import down from "../../../assets/icons/chevronDown.svg";
import filter from "../../../assets/icons/filterFunnel.svg";
import apple from "../../../assets/images/apple.svg";
import styles from "../user.module.css";
import { getStakeHolders, getUserList } from "../../../services";
import { Tag } from "../../../components";
import userPic from "../../../assets/images/sampleUser.png";
import { SkeletonLoader, SpinLoader } from "../../../components";
import { EmptyState } from "../../../mentorComponents";

export const Partner = () => {
    // const [boosterPartner, setBoosterPartner] = useState([]);
    const [NumOfPartner, setNumOfPartner] = useState(0);
    const [boosterPartners, setBoosterPartners] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        const res = await getUserList("boosterpartner");
        console.log(res);
        console.log(res?.data?.data);

        console.log("res", res);
        return res;
    };

    useEffect(async () => {
        setLoading(true);
        try {
            const res = await getData();
            if (res.success && res?.data?.data?.length > 0) {
                setNumOfPartner(res?.data?.metadata?.total);
                setBoosterPartners(() =>
                    res?.data?.data.map((partner) => ({
                        name: (
                            <div className="d-flex align-items-center space-out">
                                <p className="mb-0">{`${
                                    partner?.companyName || "-"
                                }`}</p>
                            </div>
                        ),
                        email: partner?.companyEmail,
                        contactNo: partner?.phoneNumber,
                        brand: (
                            <img
                                src={partner?.logo ?? userPic}
                                alt="user"
                                className={styles.userPic}
                            />
                        ),
                        category: partner?.categories,
                        actions: (
                            <div className="d-flex align-items-center space-out">
                                <Link
                                    to={`/admin/users/partners/${partner?.userId?._id}`}
                                    className="view-link"
                                >
                                    View
                                </Link>
                                {/* <p
                                    role="button"
                                    className="delete-link"
                                    data-target="#deleteBoosterPartner"
                                    data-toggle="modal"
                                >
                                    Delete
                                </p> */}
                            </div>
                        ),
                    }))
                );
                setFetched(true);
                console.log(res?.data?.partners);
                console.log(boosterPartners.length);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }

        return () => {};
    }, []);
    const header = [
        { title: "Brand", accessor: "brand" },
        { title: "Name", accessor: "name" },
        { title: "Email", accessor: "email" },
        { title: "Contact No:", accessor: "contactNo" },
        { title: "Category", accessor: "category" },
        { title: "Actions", accessor: "actions" },
    ];

    return (
        <div>
            <section className="d-flex align-items-center justify-content-between white-strip mb-3">
                <h2 className="mb-0">Booster Partner ({NumOfPartner ?? 0})</h2>
                <div
                    style={{ columnGap: 10 }}
                    className="d-flex align-items-center justify-content-end"
                >
                    <Filter />
                </div>
            </section>
            <section>
                {!loading && boosterPartners?.length === 0 ? (
                    <EmptyState message="No investors yet." />
                ) : (
                    <SpinLoader loading={loading} color="blue">
                        <Table headers={header} data={boosterPartners} />
                    </SpinLoader>
                )}
            </section>
        </div>
    );
};

const Filter = () => {
    return (
        <div className="dropdown">
            <button
                className="d-flex align-items-center filter-btn"
                style={{
                    columnGap: 7,
                    boxShadow: "none",
                    border: "1px solid #F2F2F2",
                }}
                data-toggle="dropdown"
            >
                <img src={filter} alt="filter" />
                <p>Filter</p>
                <img src={down} alt="down" />
            </button>
        </div>
    );
};
