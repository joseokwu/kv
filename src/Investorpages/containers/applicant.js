import { useEffect, useState } from "react";
import logo from "../../assets/images/sampleApplicantsLogo.png";
import { ApplicationCard } from "../../components/applicationCard/ApplicationCard";
import { useAuth } from "./../../hooks/useAuth";

export const AllComponent = ({ data = [] }) => {
    const { stateAuth } = useAuth();
    const [allApplicants, setAllApplicants] = useState([]);

    useEffect(() => {
        setAllApplicants([
            ...stateAuth?.partnerData?.pendingRequests,
            ...stateAuth?.partnerData?.approvedRequests,
            ...stateAuth?.partnerData?.declinedRequests,
        ]);
        console.log(stateAuth);
    }, []);

    return (
        <>
            {/* stateAuth?.partnerData?.pendingRequests.length > 0  && stateAuth?.partnerData?.pendingRequests.map((d, i) => { */}

            <div className="row mb-4">
                {stateAuth?.partnerData?.pendingRequests?.length > 0 &&
                    stateAuth?.partnerData?.pendingRequests?.map((item, i) => {
                        return (
                            <div key={i} className="col-lg-6 mb-4">
                                <ApplicationCard
                                    logo={item.logo}
                                    data={item}
                                    index={i}
                                    status={"data?.status"}
                                />
                            </div>
                        );
                    })}
                {/* <ApplicationCard logo={d.logo} data={d} index={i} /> */}
            </div>
        </>
    );
};
