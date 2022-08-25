import React, { useEffect, useState } from "react";
import "./dashboard.css";
import total from "../../assets/icons/totalApp.svg";
import { ApplicationCard, DashCard } from "../../components/index";
import applicantLogo from "../../assets/images/sampleApplicantLogo.png";
import ApplicationChart from "./components/applicationChart/ApplicationChart";
import { PageLoader } from "../../components/pageLoader/PageLoader";
import { EmptyState } from "../../mentorComponents";
import { useAuth } from "../../hooks";
import { getPartnersApplication } from "../../services";
import { SkeletonLoader } from "../../components";

export const BoosterDashboard = ({ history }) => {
    const { push } = history;
    const [bossterRes, setBoosterRes] = useState(null);
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(false);
    const { stateAuth } = useAuth();
    const [fetched, setFetched] = useState(false);

    // console.log(stateAuth);

    const apply = (id, action) => {
        const applicationInd = applications.findIndex(
            (item) => item?.startupId === id
        );
        const newApplications = [...applications];
        newApplications[applicationInd].status = action;

        setApplications(newApplications);
    };

    const dashCardColors = ["#E5FFE4", "#FAD7DC", "#DFF1FF"];

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const res = await getPartnersApplication({ page: 1, limit: 5 });
                console.log(res);
                console.log(res?.data?.data);
                setApplications(res?.data?.data);
            } catch (e) {
                console.log(e);
            }

            setFetched(true);
        };

        fetchPartners();
        console.log(applications);
    }, []);

    const pending = applications?.filter(
        (application) => application?.status === "PENDING"
    );
    const approved = applications?.filter(
        (application) => application?.status === "APPROVED"
    );
    const declined = applications?.filter(
        (application) => application?.status === "DECLINED"
    );

    if (loading) {
        return <PageLoader />;
    } else {
        return (
            <div className="dashboard-main">
                <section className="d-flex align-items-center dashboard-cards tab-wrap">
                    <DashCard
                        icon={total}
                        name={"Total Application"}
                        count={
                            pending?.length +
                                approved?.length +
                                declined?.length || 0
                        }
                        color={dashCardColors[0]}
                    />

                    <DashCard
                        icon={total}
                        name={"Pending"}
                        count={pending?.length || 0}
                        color={dashCardColors[1]}
                    />

                    <DashCard
                        icon={total}
                        name={"Approved"}
                        count={approved?.length || 0}
                        color={dashCardColors[2]}
                    />
                    <DashCard
                        icon={total}
                        name={"Declined"}
                        count={declined?.length || 0}
                        color={dashCardColors[0]}
                    />
                </section>

                <section className="row mt-4 dash-main-content">
                    <div className="col-lg-6">
                        <header className="d-flex align-items-center justify-content-between dashboard-applications-header">
                            <h5>New Applications</h5>
                            <span
                                onClick={() => push("/booster/applicants#all")}
                            >
                                See All
                            </span>
                        </header>

                        {/* <SkeletonLoader fetched={fetched} height={360}> */}
                        <section>
                            {applications?.filter(
                                (application) =>
                                    application?.status === "PENDING"
                            )?.length > 0 ? (
                                applications
                                    ?.filter(
                                        (application) =>
                                            application?.status === "PENDING"
                                    )
                                    ?.map((item, i) => {
                                        console.log(item);
                                        return (
                                            <div
                                                style={{ marginBottom: 21 }}
                                                key={i}
                                            >
                                                <ApplicationCard
                                                    data={item}
                                                    logo={applicantLogo}
                                                    apply={apply}
                                                />
                                            </div>
                                        );
                                    })
                            ) : (
                                <EmptyState message="No Application sent yet." />
                            )}
                        </section>
                        {/* </SkeletonLoader> */}
                    </div>
                    {/* <div className="col-lg-6 mt-5">
          <ApplicationChart />
        </div> */}
                </section>
            </div>
        );
    }
};
