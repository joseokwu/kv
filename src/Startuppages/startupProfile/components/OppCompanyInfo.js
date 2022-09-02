import { Button } from "../../../Startupcomponents";
import logo from "../../../assets/images/yeLogo.svg";
import web from "../../../assets/icons/webSm.svg";
import clock from "../../../assets/icons/clock.svg";
import office from "../../../assets/icons/building.svg";
import twitter from "../../../assets/icons/twitterLogo.svg";
import linkedIn from "../../../assets/icons/linkedInLogo.svg";
import whatsApp from "../../../assets/icons/whatsapp.svg";
import share from "../../../assets/icons/share.svg";
import { AvatarWrapper } from "../../../components";
import { useAuth } from "../../../hooks";

export const OppCompanyInfo = ({ data }) => {
    const startUpProfile = data?.profileData?.startupRes?.startUpProfile;
    const { stateAuth } = useAuth();
    return (
        <section className="opp-page-card py-4">
            <div
                className="d-flex align-items-center justify-content-between flex-wrap"
                style={{ rowGap: 10 }}
            ></div>

            <section
                className="mt-4 d-flex  justify-content-between flex-wrap"
                style={{ rowGap: 10 }}
            >
                <div className="w-100">
                    <div
                        style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src={
                                stateAuth?.userObj?.avatar ??
                                `https://ui-avatars.com/api/?name=${stateAuth?.startupname}`
                            }
                            alt="profile"
                            className="mb-3"
                            style={{
                                width: "100%",
                                objectFit: "cover",
                                objectPosition: "100% 0",
                            }}
                        />
                    </div>
                    <div
                        className="d-flex align-items-center justify-content-between w-100"
                        style={{ marginTop: "1.5rem" }}
                    >
                        <h3 className="opp-page-card-title">
                            {data?.startupname}
                        </h3>
                        <span>
                            <a
                                href={
                                    startUpProfile?.contactInfo?.linkedInHandle
                                }
                                target="_blank"
                            >
                                <img
                                    src={linkedIn}
                                    alt="linkedIn"
                                    width="24"
                                    height="24"
                                />
                            </a>
                            <a
                                href={
                                    startUpProfile?.contactInfo?.twitterHandle
                                }
                                target="_blank"
                            >
                                <img
                                    src={twitter}
                                    alt="twitter"
                                    className="mx-2"
                                    width="24"
                                    height="24"
                                />
                            </a>
                            <a
                                href={`https://wa.me/${startUpProfile?.contactInfo?.phoneNumber}?text=`}
                                target="_blank"
                            >
                                <img src={whatsApp} alt="whatsapp" />
                            </a>
                        </span>
                    </div>
                </div>
            </section>
            <section className="mt-2">
                <p className="mb-4 text-black"> {data?.industry ?? ""} </p>
                <p className="mb-2" style={{ wordWrap: "break-word" }}>
                    {startUpProfile?.elevatorPitch || "-"}
                </p>
            </section>
        </section>
    );
};
