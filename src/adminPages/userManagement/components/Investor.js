import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { DeleteModal, Table } from "../../../adminComponents";
import styles from "../user.module.css";
import down from "../../../assets/icons/chevronDown.svg";
import filter from "../../../assets/icons/filterFunnel.svg";
import { getStakeHolders, getUserList } from "../../../services";
import { SkeletonLoader, SpinLoader } from "../../../components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import userPic from "../../../assets/images/sampleUser.png";
import "react-loading-skeleton/dist/skeleton.css";
import { EmptyState } from "../../../mentorComponents";

export const Investor = () => {
    const header = [
        { title: "Name", accessor: "name" },
        { title: "Email", accessor: "email" },
        { title: "Phone Number", accessor: "phone" },
        { title: "Country", accessor: "country" },
        { title: "Type", accessor: "type" },
        { title: "Action", accessor: "action" },
    ];

    const [investorsData, setInvestorsData] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            // const res = await getStakeHolders({
            //     page: 1,
            //     limit: 5,
            //     type: "investor",
            //     query: { applicationCompleted: true },
            // });
            setLoading(true);
            try {
                const res = await getUserList("investor");
                console.log(res);
                console.log(res?.data?.data);
                setInvestorsData(res?.data);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
            setFetched(true);
        };
        getData();
        console.log(investorsData);
    }, []);

    const data = useMemo(() =>
        investorsData?.data?.map((item, i) => {
            return {
                name: (
                    <div className="d-flex align-items-center space-out">
                        <img
                            src={
                                item?.userId?.avatar ??
                                `https://ui-avatars.com/api/?name=${item?.userId?.firstname} ${item?.userId?.lastname}`
                            }
                            alt="user"
                            className={styles.userPic}
                        />
                        <p className="mb-0">
                            {item?.profile?.firstName
                                ? `${item?.profile?.firstName} ${item?.profile?.lastName}`
                                : `${item?.userId?.firstname} ${item?.userId?.lastname}`}
                        </p>
                    </div>
                ),
                email: item?.profile?.email
                    ? item?.profile?.email
                    : item?.userId?.email,
                phone: item?.profile?.mobile_number
                    ? item?.profile?.mobile_number
                    : item?.userId?.phone,
                country: item?.profile?.country,
                type: item?.investorApproach?.stage,
                action: (
                    <div className="d-flex align-items-center space-out">
                        <Link
                            to={`/admin/users/investors/${item?.userId?._id}`}
                            className="view-link"
                        >
                            View
                        </Link>
                        {/* <p
                            role="button"
                            data-target="#deleteInvestor"
                            data-toggle="modal"
                            className="delete-link"
                        >
                            Delete
                        </p> */}
                    </div>
                ),
            };
        })
    );

    return (
        <div>
            <DeleteModal
                id="deleteInvestor"
                title="Delete Investor"
                desc="Are you sure you want to delete Kate Mcbeth Joan"
            />
            <section className="d-flex align-items-center justify-content-between white-strip mb-3">
                <h2 className="mb-0">
                    Investors ({investorsData?.data?.length || 0})
                </h2>

                <div
                    style={{ columnGap: 10 }}
                    className="d-flex align-items-center justify-content-end"
                >
                    <Filter />
                </div>
            </section>

            <section>
                {!loading && investorsData?.length === 0 ? (
                    <EmptyState message="No investors yet." />
                ) : (
                    <SpinLoader loading={loading} color="blue">
                        <Table headers={header} data={data} />
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

const DropdownComp = () => {
    const [open, setOpen] = useState(false);
    return (
        <button
            type="button"
            class="btn btn-secondary"
            data-toggle="tooltip"
            data-placement="top"
            title="Tooltip on top"
        >
            Tooltip on top
        </button>
    );
};
