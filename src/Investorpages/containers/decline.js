import logo from "../../assets/images/sampleApplicantsLogo.png";
import { ApplicationCard } from "../../components/applicationCard/ApplicationCard";
import { useAuth } from "./../../hooks/useAuth";
import { EmptyState } from "../../mentorComponents";
import { SkeletonLoader } from "../../components";

export const DeclineComponent = ({ data = [], fetched = true }) => {
    const { stateAuth } = useAuth();

    return (
        <SkeletonLoader fetched={fetched} height={360}>
            <div className="row mb-4">
                {data.length > 0 ? (
                    data?.map((item, i) => {
                        return (
                            <div className="col-lg-6 mb-4" key={i}>
                                <ApplicationCard
                                    logo={logo}
                                    data={item}
                                    index={i}
                                    status="declined"
                                />
                            </div>
                        );
                    })
                ) : (
                    <EmptyState message="No Declined Applications yet" />
                )}
            </div>
        </SkeletonLoader>
    );
};
