import React, { useEffect, useState } from "react";
import {
    MentorDashCard,
    EvaluationCompletedCard,
    AllEvaluationCard,
    Tabs,
    EvaluationPendingCard,
    EmptyState,
} from "../../mentorComponents";
import filter from "../../assets/icons/filterFunnel.svg";
import down from "../../assets/icons/chevronDown.svg";
import "./evaluation.css";
import { mentorEvaluations } from "../../services/mentor";
import { PageLoader } from "../../components";
import { Select } from "antd";
import { RowOption } from "../../components";
import { Tag2 } from "../../mentorComponents";
import { industry } from "../../constants/domiData";

const { Option } = Select;

export const MentorEvaluation = ({ history }) => {
    const {
        location: { hash },
    } = history;

    const [evalCardsData, setEvalCardsData] = useState([]);
    const [assigned, setAssigned] = useState([]);
    const [pending, setPending] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);

        try {
            const res = await mentorEvaluations();
            setEvalCardsData(res?.cards);
            setAssigned(res?.AssignedStartups);
            setPending(() =>
                res?.AssignedStartups?.filter(
                    (x) => x.status?.toLowerCase() === "pending"
                )
            );
            setCompleted(() =>
                res?.AssignedStartups?.filter(
                    (x) => x.status?.toLowerCase() === "completed"
                )
            );
        } catch (e) {
            console.log(e);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchData();

        return () => {
            setCompleted();
            setPending();
            setAssigned();
            setEvalCardsData();
        };
    }, [hash]);

    const cardColors = ["#D5D6F4", "#DEF6FF", "#D5D6F4"];
    //console.log(completed)
    const cardData =
        evalCardsData?.length > 0
            ? evalCardsData?.map((card, i) => {
                  return {
                      name: card.title,
                      count: card.count,
                      color: cardColors[i],
                  };
              })
            : [
                  {
                      name: "Incubation Program",
                      count: 0,
                      color: cardColors[0],
                  },
                  {
                      name: "Partners",
                      count: 0,
                      color: cardColors[1],
                  },
                  {
                      name: "Total Startup Assigned",
                      count: 0,
                      color: cardColors[2],
                  },
              ];

    const renderContent = () => {
        switch (hash) {
            case "#All":
                return <AllEvaluationCard data={assigned} />;

            case "#Pending":
                return (
                    <div className="row">
                        {pending?.length > 0 ? (
                            pending?.map((p, i) => {
                                return (
                                    <div key={i} className="col-xl-6 mb-3">
                                        <EvaluationPendingCard data={p} />
                                    </div>
                                );
                            })
                        ) : (
                            // <div className="col-12 my-5 text-center">
                            //   <span className="pending-tag">No Pending Evaluation</span>
                            // </div>
                            <EmptyState message="No Pending Evaluation" />
                        )}
                    </div>
                );

            case "#Completed":
                return (
                    <div className="row">
                        {completed?.length > 0 ? (
                            completed?.map((c, i) => {
                                return (
                                    <div key={i} className="col-xl-6">
                                        <EvaluationCompletedCard data={c} />
                                    </div>
                                );
                            })
                        ) : (
                            // <div className="col-12 my-5 text-center">
                            //   <span className="completed-tag">No Completed Evaluation</span>
                            // </div>
                            <EmptyState message="No Completed Evaluation" />
                        )}
                    </div>
                );

            default:
                return <AllEvaluationCard />;
        }
    };

    const tabItems = ["All", "Pending", "Completed"];

    // if (loading) {
    //   return (
    //     <PageLoader dashboard={true} num={[evalCardsData, pending, completed]} />
    //   );
    // }

    return (
        <div className="dashboard_main container-fluid">
            <section className="row tab-wrap">
                <section
                    className="col-lg-12 d-flex align-items-center dashboard-cards"
                    style={{ background: "#fefefe" }}
                >
                    {cardData.map((data, i) => (
                        <MentorDashCard
                            name={data.name}
                            count={data.count}
                            color={data.color}
                            key={i}
                        />
                    ))}
                </section>
            </section>

            <section className="mt-3 d-flex align-items-center justify-content-between">
                <Tabs tabItems={tabItems} />
                <div className="">
                    <EvaluationFilter />
                </div>
            </section>

            <div className="pt-3">
                <section className="mt-1">{renderContent()}</section>
            </div>
        </div>
    );
};

const EvaluationFilter = () => {
    const [selectedList, setSelectedList] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [investmentRange, setInvestmentRange] = useState([0, 50000]);

    return (
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
                className="dropdown-menu filter-menu pt-3"
                onClick={(ev) => ev.stopPropagation()}
            >
                <div className="drop-section">
                    <div
                        className="d-flex align-items-center justify-content-between"
                        style={{ marginBottom: 35 }}
                    >
                        <p className="filter-title">Filter</p>
                        <p
                            className="filter-clear"
                            onClick={() => {
                                setSelectedList([]);
                                setSelectAll(false);
                            }}
                        >
                            Clear All
                        </p>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <p className="filter-industry">Industry</p>
                        <img src={down} alt="down" />
                    </div>
                    <div className="mb-4">
                        <Select
                            mode="multiple"
                            allowClear
                            style={{
                                width: "100%",
                            }}
                            placeholder="Please select"
                            value={selectedList}
                            onChange={(e) => {
                                setSelectedList(e);
                            }}
                        >
                            {industry.map((item) => (
                                <Option key={item}>{item}</Option>
                            ))}
                        </Select>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <label htmlFor="all">All</label>
                        <input
                            type="checkbox"
                            name="type"
                            id="all"
                            checked={selectAll}
                            onChange={(e) => setSelectAll(e.target.checked)}
                        />
                    </div>

                    <div className="d-flex flex-row align-items-start gap-3 flex-wrap">
                        {selectAll ? (
                            <Tag2 name={"All Sectors"} />
                        ) : (
                            selectedList.map((item) => <Tag2 name={item} />)
                        )}
                    </div>
                </div>
                <div className="drop-section">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <p className="filter-industry">Stage</p>
                        <img src={down} alt="down" />
                    </div>
                    <RowOption
                        options={[
                            "Series A",
                            "Series B",
                            "Minimum Viable Product",
                            "Pre - Seed",
                            "VC Funds (India & Global)",
                            "Revenue Traction",
                            "Customer Traction",
                            "Angel",
                        ]}
                    />
                </div>
                <div className="drop-section">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <p className="filter-industry">Program Type</p>
                        <img src={down} alt="down" />
                    </div>
                    <RowOption options={["Incubation", "Accelerator"]} />
                </div>
                <div className="drop-section">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <p className="filter-industry">Program Category</p>
                        <img src={down} alt="down" />
                    </div>
                    <RowOption
                        options={["Fintech", "HealthTech", "AgricTech"]}
                    />
                </div>
            </section>
        </div>
    );
};
