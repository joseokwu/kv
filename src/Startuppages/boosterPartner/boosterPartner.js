import React, { useEffect, useState, useCallback } from "react";
import {} from "./boosterPartner.styled";
import { DashCard, Select, Tabs } from "../../Startupcomponents/index";
import { boosterData } from "../../constants/domiData";
import { useHistory } from "react-router-dom";
import { AllOfferings } from "./components/allOfferings";
import { MyApplications } from "./components/myApplications";
import { getBoosterData, getStartupRequest } from "../../services";
import newApp from "../../assets/icons/Star.svg";
import { useAuth } from "../../hooks/useAuth";
import { PageLoader } from "../../components";
import { useActivity } from "../../hooks/useBusiness";
import { PaginationData } from "../../components";

export const StartupBoosterPartner = () => {
    const { getApp } = useActivity();
    const { stateAuth } = useAuth();
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [boosterData, setBoosterData] = useState([]);
    const [partners, setPartners] = useState({});
    const [requests, setRequests] = useState([]);

    const apply = (id) => {
        setPartners({
            ...partners,
            partners: partners.partners.filter((item) => item?.userId !== id),
        });
    };

    const categories = [
        "Category: All",
        "Accounting",
        "Analytics",
        "Bike Rentals",
        "Cloud Computing",
        "Cloud Telephony",
        "Content Services",
        "CRM",
        "Customer Engagement",
        "Customer Support",
        "E-Learning",
        "Email Marketing",
        "Employee Benefit",
        "Finance",
        "Fitness",
        "Food and Beverages",
        "Garage Services",
        "Gifts and Confectionery",
        "Health and Wellness",
        "Home and Furnishing",
        "Hospitality",
        "Human Resources",
        "Insurance",
        "Investments",
        "IT Rentals",
        "Legal",
        "Loans",
        "Marketing",
        "Merchandise",
        "Messaging",
        "Personal Finance",
        "Printing",
        "Sales Support",
        "Salons and Spas",
        "Signing Solutions",
        "Travel",
        "Virtual Assistant",
    ];
    const approvedStartups = requests?.data?.filter(
        (item) => item?.status === "APPROVED"
    )?.length;

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const res = await getBoosterData({
                    page: currentPage,
                    limit: 4,
                    startupId: stateAuth?.startupData?.userId,
                });
                const allReq = await getStartupRequest({
                    startupId: stateAuth?.user?.userId,
                    page: 1,
                    limit: 5,
                });

                setRequests(allReq?.data);
                setPartners(res?.data);
                console.log(res?.data?.data);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        getData();
    }, [currentPage]);

    const history = useHistory();

    const {
        location: { hash },
    } = history;

    const renderContent = () => {
        switch (hash) {
            case "#All Offerings":
                return (
                    <AllOfferings
                        setCurrentPage={setCurrentPage}
                        data={partners}
                        total={partners?.metadata && partners?.metadata?.total}
                        currentPage={currentPage}
                        partners={partners?.partners}
                        apply={apply}
                    />
                );
            // return <AllOfferings data={boosterData?.offerings} />
            case "#My Applications":
                return <MyApplications />;
            default:
                return <AllOfferings />;
        }
    };

    const tabList = ["All Offerings", "My Applications"];

    if (loading) {
        return <PageLoader num={[1, 2, 3, 4]} />;
    }

    return (
        <div className="mx-3">
            <section
                className="row tab-wrap"
                style={{ zIndex: "", background: "#FEFEFE" }}
            >
                {/* {boosterData.map((data, i) => ( */}
                {/* <> */}
                <DashCard
                    className="col-lg-4 col-md-12 col-12"
                    icon={newApp}
                    name={"New Deals"}
                    count={partners?.partners?.length ?? 0}
                    color={"#D5D6F4"}
                />
                <DashCard
                    className="col-lg-4 col-md-12 col-12"
                    icon={newApp}
                    name={"Applied"}
                    count={requests?.data?.length ?? 0}
                    color={"#DEF6FF"}
                />
                <DashCard
                    className="col-lg-4 col-md-12 col-12"
                    icon={newApp}
                    name={"Approved"}
                    count={approvedStartups ?? 0}
                    color={"#D5D6F4"}
                />
                {/* </> */}
                {/* ))} */}
            </section>
            <section className="container my-4 d-flex justify-content-between">
                <Tabs tabItems={tabList} />

                <div className="">
                    <Select
                        options={categories}
                        placeholder={"Category: All"}
                    />
                </div>
            </section>
            <section className="mb-5 container ">{renderContent()}</section>
        </div>
    );
};
