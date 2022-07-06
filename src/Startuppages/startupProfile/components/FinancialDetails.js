import web from "../../../assets/icons/webSm.svg";
import clock from "../../../assets/icons/clock.svg";
import office from "../../../assets/icons/building.svg";
import moment from "moment";

export const FinancialDetails = ({ data }) => {
    return (
        <div className="mt-3 mb-3 opp-page-card py-4">
            <h3 className="sub-card-title">Contact Details</h3>

            <section
                className="d-flex align-items-center justify-content-between flex-wrap mt-3"
                style={{ rowGap: 10 }}
            >
                {data?.startupData?.startUpProfile?.contactInfo
                    ?.companyWebsite && (
                    <div className="d-flex align-items-center">
                        <img src={web} alt="web" />
                        <a
                            href={
                                data?.startupData?.startUpProfile?.contactInfo
                                    ?.companyWebsite
                            }
                            className="ml-2 extra-info"
                            style={{
                                textDecoration: "underline",
                                color: "#2E3192",
                            }}
                        >
                            {data?.startupData?.startUpProfile?.contactInfo
                                ?.companyWebsite ?? ""}
                        </a>
                    </div>
                )}

                <div className="d-flex align-items-center">
                    {data?.startupData?.startUpProfile?.yearFounded && (
                        <>
                            <img src={clock} alt="web" width="20" height="20" />
                            <p className="ml-2 extra-info">
                                Incorporated{" "}
                                {moment(
                                    data?.startupData?.startUpProfile
                                        ?.yearFounded
                                ).format("YYYY-MM-DD")}
                            </p>
                        </>
                    )}
                </div>

                <div className="d-flex align-items-center">
                    {data?.startupData?.startUpProfile?.contactInfo
                        ?.registeredAddress && (
                        <>
                            <img src={office} alt="web" />
                            <p className="ml-2 extra-info">
                                {" "}
                                {`${
                                    data?.startupData?.startUpProfile
                                        ?.contactInfo?.registeredAddress ?? ""
                                } , ${
                                    data?.startupData?.startUpProfile
                                        ?.contactInfo?.state ?? ""
                                } , ${
                                    data?.startupData?.startUpProfile
                                        ?.contactInfo?.country ?? ""
                                }`}{" "}
                            </p>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
};
