import React, { useEffect, useState } from "react";
import { Tabs } from "../../../components";
import { AllApplied } from "./AllApplied";

export const AppliedStartup = ({ partner }) => {
    const [active, setActive] = useState("All");
    const { pendingRequests, approvedRequests, declinedRequests } = partner;
    const tabItems = [
        "All",
        "Pending",
        "Approved",
        "Declined",
        // "Expired",
        // "Re-Applied",
    ];

    useEffect(() => {
        console.log(pendingRequests);
        console.log(approvedRequests);
        console.log(declinedRequests);
        pendingRequests.map((request) => {
            request.status = "pending";
        });
        approvedRequests.map((request) => {
            request.status = "approved";
        });
        declinedRequests.map((request) => {
            request.status = "declined";
        });
        console.log(
            partner?.pendingRequests.concat(
                partner?.approvedRequests,
                partner?.declinedRequests
            )
        );
    }, []);

    const renderComponent = () => {
        switch (active) {
            case `${tabItems[0]}`:
                return (
                    <AllApplied
                        data={pendingRequests.concat(
                            approvedRequests,
                            declinedRequests
                        )}
                    />
                );
            case `${tabItems[1]}`:
                return <AllApplied data={pendingRequests} />;
            case `${tabItems[2]}`:
                return <AllApplied data={approvedRequests} />;
            case `${tabItems[3]}`:
                return <AllApplied data={declinedRequests} />;
            // case `${tabItems[4]}`:
            //     return (
            //         <AllApplied
            //             data={data?.filter((x) => x.status === "expired")}
            //         />
            //     );
            // case `${tabItems[5]}`:
            //     return <AllApplied data={data} />;
            default:
                return "All";
        }
    };
    return (
        <div>
            <section className="d-flex justify-content-end mb-4">
                <Tabs
                    tabItems={tabItems}
                    withState={true}
                    state={active}
                    setState={setActive}
                    className="justify-content-end"
                />
            </section>

            <section style={{ maxWidth: 1540 }}>{renderComponent()}</section>
        </div>
    );
};
