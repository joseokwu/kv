import React, { useEffect, useMemo, useState } from "react";
import search from "../../assets/icons/search.svg";
import { PageLoader, Tabs } from "../../components";
import filter from "../../assets/icons/filterFunnel.svg";
import down from "../../assets/icons/chevronDown.svg";
import searchSm from "../../assets/icons/searchSm.svg";
import "./applicants.css";
import { Tab } from "react-bootstrap";
import { getApplicant } from "../../services/partners";
import {
    AllComponent,
    ApproveComponent,
    ReapplyComponent,
    DeclineComponent,
    PendingComponent,
    ExpireComponent,
} from "../containers";
import { useAuth } from "./../../hooks/useAuth";
import { getPartnersApplication } from "../../services";
import { industry } from "../../constants/domiData";
import { Tag2 } from "../../mentorComponents";

export const BoosterApplicants = ({ history }) => {
    const {
        push,
        location: { hash },
    } = history;
    const { stateAuth } = useAuth();
    const [applicants, setApplicatnts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [partners, setPartners] = useState([]);
    const [fetched, setFetched] = useState(false);

    const [filterSearch, setFilterSearch] = useState("");
    const [tempIndustryList, setTempIndustryList] = useState(industry);
    const [selectedList, setSelectedList] = useState([]);

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const res = await getPartnersApplication({ page: 1, limit: 5 });
                console.log(res);
                console.log(res?.data?.data);
                setPartners(res?.data?.data);
            } catch (e) {
                console.log(e);
            }

            setFetched(true);
        };

        fetchPartners();
    }, []);

    useEffect(() => {
        setTempIndustryList(
            industry.filter((item) =>
                item.toLowerCase().startsWith(filterSearch.toLowerCase())
            )
        );
    }, [filterSearch]);

    const pendin = partners?.filter((partner) => partner?.status === "PENDING");
    const approve = partners?.filter(
        (partner) => partner?.status === "APPROVED"
    );
    const decline = partners?.filter(
        (partner) => partner?.status === "DECLINED"
    );

    const apply = (id, action) => {
        const partnerInd = partners.findIndex((item) => item?.startupId === id);
        const newPartners = [...partners];
        newPartners[partnerInd].status = action;

        setPartners(newPartners);
    };

    // const expire =
    //     applicants && applicants?.filter((item) => item?.status === "expired");
    // const reApply =
    //     applicants &&
    //     applicants?.filter((item) => item?.status === "re-applied");

    const renderContent = () => {
        switch (hash.replaceAll("%20", " ")) {
            case "#all":
                return (
                    <AllComponent
                        data={pendin.concat(approve).concat(decline)}
                        fetched={fetched}
                        apply={apply}
                    />
                );
            case "#pending":
                return (
                    <PendingComponent
                        data={pendin}
                        fetched={fetched}
                        apply={apply}
                    />
                );
            case "#approved":
                return <ApproveComponent data={approve} fetched={fetched} />;

            case "#declined":
                return <DeclineComponent data={decline} fetched={fetched} />;

            // case "#expired":
            //     return <ExpireComponent data={expire} />;

            // case "#re-applied":
            //     return <ReapplyComponent data={reApply} />;
            default:
                return (
                    <AllComponent
                        data={pendin.concat(approve).concat(decline)}
                        fetched={fetched}
                    />
                );
        }
    };

    const tabItems = [
        "all",
        "pending",
        "approved",
        "declined",
        // "expired",
        // "re-applied",
    ];

    if (loading) {
        return (
            <PageLoader
                dashboard={true}
                num={[applicants, pendin, approve, decline]}
            />
        );
    }

    return (
        <div className="wrapper">
            <section className="d-flex justify-content-between align-items-center applicant-header">
                <h1>Startup Application</h1>
                {/* <img src={search} alt="search" /> */}
            </section>

            <section className="d-flex align-items-center justify-content-between mb-4">
                <Tabs tabItems={tabItems} />

                <div className="dropdown">
                    <button
                        className="d-flex align-items-center filter-btn"
                        style={{ columnGap: 7 }}
                        data-toggle="dropdown"
                    >
                        <img src={filter} alt="filter" />
                        <p>Filter</p>
                        <img src={down} alt="down" />
                    </button>

                    <section
                        className="dropdown-menu filter-menu"
                        onClick={(ev) => ev.stopPropagation()}
                    >
                        <div
                            className="d-flex align-items-center justify-content-between"
                            style={{ marginBottom: 35 }}
                        >
                            <p className="filter-title">Filter</p>
                            <p
                                className="filter-clear"
                                onClick={() => setSelectedList([])}
                            >
                                Clear All
                            </p>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <p className="filter-industry">Industry</p>
                            <img src={down} alt="down" />
                        </div>

                        <div className="mb-4">
                            <section className="d-flex align-items-center kv-search-input">
                                <span>
                                    <img src={searchSm} alt="search" />
                                </span>
                                <input
                                    type="search"
                                    onChange={(e) =>
                                        setFilterSearch(e.target.value)
                                    }
                                />
                            </section>
                        </div>

                        <div className="d-flex align-items-center justify-content-between">
                            <label htmlFor="all">All</label>
                            <input type="checkbox" name="type" id="all" />
                        </div>
                        <article className="filter-check-list">
                            {tempIndustryList.map((item) => (
                                <div className="d-flex align-items-center justify-content-between">
                                    <label htmlFor={item}>{item}</label>
                                    <input
                                        type="checkbox"
                                        name="type"
                                        id={item}
                                        checked={selectedList.includes(item)}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                if (
                                                    !selectedList.includes(item)
                                                ) {
                                                    setSelectedList([
                                                        ...selectedList,
                                                        item,
                                                    ]);
                                                }
                                            } else {
                                                setSelectedList(
                                                    selectedList.filter(
                                                        (selectedItem) =>
                                                            item.toLowerCase() !==
                                                            selectedItem.toLowerCase()
                                                    )
                                                );
                                            }
                                            console.log(selectedList);
                                        }}
                                    />
                                </div>
                            ))}
                        </article>
                        <div className="d-flex flex-row align-items-start gap-3 flex-wrap mb-3">
                            {selectedList.map((item) => (
                                <Tag2 name={item} />
                            ))}
                        </div>

                        <article className="type-list">
                            <p className="filter-header mb-4">Programme Type</p>
                            <div className="d-flex align-items-center flex-wrap type-badge-group">
                                <span className="type-badge">All</span>
                                <span className="type-badge">
                                    Incubation Programme
                                </span>
                                <span className="type-badge">
                                    Acceleration Programme
                                </span>
                                <span className="type-badge">
                                    Investor Connect
                                </span>
                            </div>
                        </article>
                    </section>
                </div>
            </section>

            <section className="row application-card-list">
                {renderContent()}
            </section>
        </div>
    );
};
