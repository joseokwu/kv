import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DashCard, Tabs } from "../../components";
import styles from "./applicationMgt.module.css";
import { useAuth } from "./../../hooks/useAuth";
import { getStakeHolders, getStartups } from "../../services";
import {
    KVScreeningTable,
    MentorScreeningTable,
    PendingTable,
    RecommendationTable,
    AcceptedTable,
    DeclinedTable,
    ApprovedTable,
} from "./components";

export const ApplicationMgt = () => {
    const mgtTab = [
        "Pending",
        "Incomplete Registration",
        "Approved to Evaluate",
        "KV Screening",
        "Recommended",
        "Mentor Screening",
        "Accepted",
    ];

    const { stateAuth } = useAuth();

    const {
        location: { hash },
    } = useHistory();
    const [fetched, setFetched] = useState(false);
    const [currentPagePending, setCurrentPagePending] = useState(1);
    const [currentPageIncomplete, setCurrentPageIncomplete] = useState(1);
    const [currentPageKv, setCurrentPageKv] = useState(1);
    const [currentPageMentor, setCurrentPageMentor] = useState(1);
    const [currentPageAccepted, setCurrentPageAccepted] = useState(1);
    const [currentPageRecommended, setCurrentPageRecommended] = useState(1);
    const [currentPageApproveToEval, setCurrentPageApproveToEval] = useState(1);
    const [approveToEval, setApproveToEval] = useState({});
    const [applications, setApplication] = useState({});
    const [incomplete, setIncomplete] = useState({});
    const [kvScreening, setKvScreening] = useState({});
    const [resetAccept, setResetAccept] = useState();
    const [mentorScreening, setMentorScreening] = useState({});
    const [recommended, setRecommended] = useState({});

    const [accepted, setAccepted] = useState({});
    //console.log(stateAuth)

    useEffect(() => {
        console.log(
            `it's changing!! currentPagePending is now ${currentPagePending}`
        );
    }, [currentPagePending]);

    useEffect(() => {
        const getData = async () => {
            setFetched(false);
            console.log("currentPagePending", currentPagePending);
            console.log("currentPageIncomplete", currentPageIncomplete);
            console.log("currentPageKv", currentPageKv);
            console.log("currentPageRecommended", currentPageRecommended);
            console.log("currentPageAccepted", currentPageAccepted);
            // console.log("currentPagePending", currentPagePending);
            try {
                const pendingRes = await getStartups({
                    page: currentPagePending,
                    limit: 5,
                    isRegCompleted: true,
                    // userType: 'startup',
                });
                const incompleteRes = await getStartups({
                    page: currentPageIncomplete,
                    limit: 5,
                    isRegCompleted: false,
                    // userType: 'startup',
                });
                // const kvRes = await getStartups({
                //   page: currentPageKv,
                //   limit: 5,
                // });
                // const mentorsRes = await getStartups({
                //   page: currentPageMentor,
                //   limit: 5,
                // });
                const acceptedRes = await getStartups({
                    //   page: currentPageAccepted,
                    //   limit: 5,
                    acceptedIntoKV: true,
                    // userType: 'startup',
                });
                const recommendedRes = await getStartups({
                    //   page: currentPageRecommended,
                    //   limit: 5,
                    recommendedForMentorship: true,
                    // userType: 'startup',
                });
                // const approveToEvalRes = await getStartups({
                //   //   page: currentPageRecommended,
                //   //   limit: 5,
                //   approveToEvaluate: true,
                // });

                setApplication(pendingRes?.data);
                setIncomplete(incompleteRes?.data);
                // setKvScreening(kvRes?.data);
                // console.log(kvRes?.data);
                setAccepted(acceptedRes?.data);
                // setMentorScreening(mentorsRes?.data);
                setRecommended(recommendedRes?.data);
                // setApproveToEval(approveToEval?.data);

                console.log(pendingRes?.data);
                console.log(recommendedRes?.data);
                console.log("accept", acceptedRes?.data);
            } catch (e) {
                console.log(e);
            }
            setFetched(true);
        };

        getData();
        console.log("refetched");

        return () => {
            setApplication();
            setIncomplete();
            setKvScreening();
            setAccepted();
            setMentorScreening();
            setRecommended();
            setApproveToEval();
        };
    }, [
        currentPagePending,
        currentPageIncomplete,
        currentPageKv,
        currentPageMentor,
        currentPageAccepted,
        currentPageRecommended,
        currentPageApproveToEval,
        // resetAccept,
    ]);

    const renderComponent = () => {
        switch (hash) {
            case `#${mgtTab[0]}`:
                return (
                    <PendingTable
                        applications={applications}
                        currentPage={currentPagePending}
                        setCurrentPage={setCurrentPagePending}
                        fetched={fetched}
                        setFetched={setFetched}
                    />
                );
            case `#${mgtTab[1]}`:
                return (
                    <PendingTable
                        applications={incomplete}
                        currentPage={currentPageIncomplete}
                        setCurrentPage={setCurrentPageIncomplete}
                        fetched={fetched}
                        setFetched={setFetched}
                        incomplete={true}
                    />
                );
            case `#${mgtTab[2]}`:
                return (
                    <ApprovedTable
                        approved={approveToEval}
                        setResetAccept={setResetAccept}
                        currentPage={currentPageApproveToEval}
                        setCurrentPage={setCurrentPageApproveToEval}
                    />
                );
            case `#${mgtTab[3]}`:
                return (
                    <KVScreeningTable
                        kvScreening={kvScreening}
                        currentPage={currentPageKv}
                        setCurrentPage={setCurrentPageKv}
                    />
                );
            case `#${mgtTab[4]}`:
                return (
                    <RecommendationTable
                        recommended={recommended}
                        currentPage={currentPageRecommended}
                        setCurrentPage={setCurrentPageRecommended}
                    />
                );
            case `#${mgtTab[5]}`:
                return (
                    <MentorScreeningTable
                        mentorScreening={mentorScreening}
                        currentPage={currentPageMentor}
                        setCurrentPage={setCurrentPageMentor}
                    />
                );
            case `#${mgtTab[6]}`:
                return (
                    <AcceptedTable
                        setResetAccept={setResetAccept}
                        accepted={accepted}
                        currentPage={currentPageAccepted}
                        setCurrentPage={setCurrentPageAccepted}
                    />
                );
            // case `#${mgtTab[4]}`:
            //     return (
            //         <DeclinedTable
            //             currentPage={currentPageDeclined}
            //             setCurrentPage={setCurrentPageDeclined}
            //         />
            //     );
            default:
                return (
                    <PendingTable
                        applications={applications}
                        currentPage={currentPagePending}
                        setCurrentPage={setCurrentPagePending}
                        fetched={fetched}
                        setFetched={setFetched}
                    />
                );
        }
    };

    return (
        <div className="p-5" style={{ maxWidth: 2000 }}>
            <section className="d-flex align-items-center dashboard-cards mb-5">
                <DashCard
                    // className='col-lg-3 col-md-6 col-12'
                    // name={'All Application'}
                    name={"New Application"}
                    count={applications?.users?.length ?? 0}
                    color={"#E5FFE4"}
                    fetched={fetched}
                />
                <DashCard
                    // className='col-lg-3 col-md-6 col-12'
                    // name={'Approved to Evaluate'}
                    name={"KV Screening"}
                    count={kvScreening?.users?.length ?? 0}
                    color={"#FAD7DC"}
                    fetched={fetched}
                />
                <DashCard
                    // className='col-lg-3 col-md-6 col-12'
                    name={"Recommended"}
                    // name={'Mentor Screening'}
                    count={recommended?.users?.length ?? 0}
                    color={"#E5FFE4"}
                    fetched={fetched}
                />
                <DashCard
                    // className='col-lg-3 col-md-6 col-12'
                    name={"Accepted"}
                    count={accepted?.users?.length ?? 0}
                    color={"#FAD7DC"}
                    fetched={fetched}
                />
            </section>

            <section className="mb-45">
                <Tabs tabItems={mgtTab} />
            </section>

            <section>{renderComponent()}</section>
        </div>
    );
};
