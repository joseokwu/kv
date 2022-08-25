import React, { useEffect, useState } from "react";
import { Tabs } from "../../components";
import down from "../../assets/icons/chevronDown.svg";
import filter from "../../assets/icons/filterFunnel.svg";
import "./investorOpportunity.css";
import { Opportunities } from "./components/Opportunities";
import { Interests } from "../investorInterested/components/Interests";
import { getInvestorOpportunity } from "../../services/investor";
import { PageLoader } from "../../components/pageLoader/PageLoader";
import { useAuth } from "../../hooks";
import { Tag2 } from "../../mentorComponents";
import searchSm from "../../assets/icons/searchSm.svg";
import { industry } from "../../constants/domiData";
import { Select, Slider } from "antd";
import { RowOption } from "../../components";
import CurrencyInput from "react-currency-input-field";

const { Option } = Select;

export const InvestorOpportunity = ({ history }) => {
    const [oppData, setOppData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { stateAuth } = useAuth();

    // const getOpp = async () => {
    //  try {
    //   setLoading(true);
    //   const res = await getInvestorOpportunity({
    //   });
    //   setOppData(res);
    //   setLoading(false);
    //  } catch {
    //   setOppData(null)
    //  }
    // }

    // useEffect(() => {
    //   getOpp()

    //   return () => {
    //     setOppData([])
    //   }
    // }, [])

    console.log(stateAuth);

    const {
        location: { hash },
    } = history;

    const renderContent = () => {
        switch (hash) {
            case "#opportunities":
                return <Opportunities data={stateAuth?.opportunity} />;

            case "#share deals":
                return <Opportunities data={stateAuth?.opportunity} />;

            case "#interested":
                return <Interests data={stateAuth?.opportunity} />;

            default:
                return <Opportunities data={stateAuth?.opportunity} />;
        }
    };

    if (loading) {
        return <PageLoader num={[1, 2, 3, 4]} />;
    } else {
        return (
            <div className="wrapper">
                {/* <section>
        <h5 className="page-header">Investment Opportunities</h5>
      </section> */}

                <section
                    className=" d-flex align-items-center justify-content-between flex-wrap tab-wrap"
                    style={{ rowGap: "1rem" }}
                >
                    <Tabs
                        tabItems={[
                            "opportunities",
                            "shared deals",
                            "interested",
                        ]}
                    />

                    <div
                        className="d-flex align-items-center"
                        style={{ columnGap: "1rem" }}
                    >
                        <RecentDropdown />
                        <OpportunityFilter />
                    </div>
                </section>
                <section className="mt-3">{renderContent()}</section>
            </div>
        );
    }
};

const OpportunityFilter = () => {
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
                        <p className="filter-industry">Priority</p>
                        <img src={down} alt="down" />
                    </div>
                    <RowOption options={["High", "Medium", "Low"]} />
                </div>
                <div className="drop-section">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <p className="filter-industry">Investment Amount</p>
                        <img src={down} alt="down" />
                    </div>
                    <div className="d-flex flex-row align-items-center gap-3 justify-content-between">
                        <CurrencyInput
                            type="text"
                            value={investmentRange[0]}
                            className="form-control ps-3"
                            placeholder="$100,000"
                            intlConfig={{
                                locale: "en-US",
                                currency: "USD",
                            }}
                            onValueChange={(value) => {
                                const newArr = [...investmentRange];
                                newArr[0] = value;
                                setInvestmentRange(newArr);
                            }}
                        />
                        <p>to</p>
                        <CurrencyInput
                            type="text"
                            value={investmentRange[1]}
                            className="form-control ps-3"
                            placeholder="$1,000,000"
                            intlConfig={{
                                locale: "en-US",
                                currency: "USD",
                            }}
                            onValueChange={(value) => {
                                const newArr = [...investmentRange];
                                newArr[1] = value;
                                setInvestmentRange(newArr);
                            }}
                        />
                    </div>
                    <Slider
                        range
                        value={investmentRange}
                        onChange={(values) =>
                            console.log(setInvestmentRange(values))
                        }
                        min={0}
                        max={1500000}
                    />
                </div>
            </section>
        </div>
    );
};

const RecentDropdown = () => {
    return (
        <div className="dropdown">
            <button
                className="d-flex align-items-center filter-btn"
                style={{ columnGap: 7 }}
                data-toggle="dropdown"
            >
                <p>Recent</p>
                <img src={down} alt="down" />
            </button>
        </div>
    );
};
