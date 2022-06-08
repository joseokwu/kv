import logo from "../../assets/images/sampleApplicantsLogo.png";
import { ApplicationCard } from "../../components/applicationCard/ApplicationCard";
import { useAuth } from "./../../hooks/useAuth";

export const ApproveComponent = ({ data = [] }) => {
    const { stateAuth } = useAuth();

    return (
        <div className="row mb-4">
            {stateAuth?.partnerData?.approvedRequests &&
                stateAuth?.partnerData?.approvedRequests?.map((item, i) => {
                    return (
                        <div className="col-lg-6 mb-4" key={i}>
                            <ApplicationCard
                                logo={logo}
                                data={item}
                                index={i}
                                status="approved"
                            />
                        </div>
                    );
                })}
        </div>
    );
};
