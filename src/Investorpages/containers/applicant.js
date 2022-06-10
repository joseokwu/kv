import { useEffect, useState } from "react";
import logo from "../../assets/images/sampleApplicantsLogo.png";
import { ApplicationCard } from "../../components/applicationCard/ApplicationCard";
import { useAuth } from "./../../hooks/useAuth";
import { EmptyState } from "../../mentorComponents";
import { SkeletonLoader } from "../../components";

export const AllComponent = ({ data = [], fetched = true, apply }) => {
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
        <SkeletonLoader fetched={fetched} height={360}>
            <div className="row mb-4">
                {data.length > 0 ? (
                    data?.map((item, i) => {
                        return (
                            <div key={i} className="col-lg-6 mb-4">
                                <ApplicationCard
                                    logo={item.logo}
                                    data={item}
                                    index={i}
                                    status={"data?.status"}
                                    apply={apply}
                                />
                            </div>
                        );
                    })
                ) : (
                    <EmptyState message="No Applications available" />
                )}
            </div>
        </SkeletonLoader>
    );
};
