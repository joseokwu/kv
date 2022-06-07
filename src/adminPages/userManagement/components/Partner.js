import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Table } from "../../../adminComponents";
import down from "../../../assets/icons/chevronDown.svg";
import filter from "../../../assets/icons/filterFunnel.svg";
import apple from "../../../assets/images/apple.svg";
import styles from "../user.module.css";
import { getStakeHolders } from "../../../services";
import { Tag } from "../../../components";
import { SkeletonLoader } from "../../../components";

export const Partner = () => {
    // const [boosterPartner, setBoosterPartner] = useState([]);
    const [NumOfPartner, setNumOfPartner] = useState(0);
    const [boosterPartners, setBoosterPartners] = useState([]);
    const [fetched, setFetched] = useState(false);

    const getData = async () => {
        const res = await getStakeHolders({
            page: 1,
            limit: 2,
            type: "boosterpartner",
            query: { applicationCompleted: true },
        });

        console.log("res", res);

        if (res.success && res?.data?.partners?.length > 0) {
            setNumOfPartner(res?.data?.metadata?.total);
            setBoosterPartners(() =>
                res?.data?.partners.map((partner) => ({
                    name: (
                        <div className="d-flex align-items-center space-out">
                            <img
                                src={partner?.logo ?? apple}
                                alt="user"
                                className={styles.userPic}
                            />
                            {/* <p className="mb-0">{`${partner?.personalDetail?.coordinatorName}`}</p> */}
                        </div>
                    ),
                    email: partner?.companyEmail,
                    contactNo: partner?.phoneNumber,
                    brand: partner?.companyName,
                    category: partner?.categories,
                    actions: (
                        <div className="d-flex align-items-center space-out">
                            <Link
                                to={`/admin/users/partners/${partner?.userId}`}
                                className="view-link"
                            >
                                View
                            </Link>
                            <p
                                role="button"
                                className="delete-link"
                                data-target="#deleteBoosterPartner"
                                data-toggle="modal"
                            >
                                Delete
                            </p>
                        </div>
                    ),
                }))
            );
            setFetched(true);
            console.log(res?.data?.partners);
            console.log(boosterPartners.length);
        } else {
            console.log("Error!!");
        }
    };

    useEffect(() => {
        getData();

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
    const [partnersData, setPartnerData] = useState({});

    useEffect(() => {
        const getData = async () => {
            const res = await getStakeHolders({
                page: 1,
                limit: 5,
                type: "boosterpartner",
                query: { applicationCompleted: true },
            });
            console.log(res);

            setPartnerData(res?.data);
        };
        getData();
    }, []);

    return (
        <div>
            <section className="d-flex align-items-center justify-content-between white-strip mb-3">
                <h2 className="mb-0">
                    Booster Partner ({partnersData?.partners?.length || 0})
                </h2>
                <div
                    style={{ columnGap: 10 }}
                    className="d-flex align-items-center justify-content-end"
                >
                    <Filter />
                </div>
            </section>
            <section>
                <SkeletonLoader fetched={fetched}>
                    <Table headers={header} data={boosterPartners} />
                </SkeletonLoader>
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
