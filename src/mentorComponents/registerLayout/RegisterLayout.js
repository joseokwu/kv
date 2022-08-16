import React from "react";
import { Header } from "../../mentorComponents/index";
import { MentorSideBar } from "../../Startupcomponents";
// import { MentorRegistrationLayout } from "../../Startupcomponents";

const RegisterLayout = ({ children }) => {
    return (
        <div>
            <section className="layout-header">
                <Header />
            </section>
            <section className="">
                <div className="layout-child">{children}</div>
            </section>
        </div>
    );
};

export const MentorRegistrationLayout = ({ children }) => {
    return (
        <div>
            <section className="layout-header">
                <Header disabled={true} />
            </section>
            <section className="layout-body" style={{ overflow: "hidden" }}>
                <div className="row" style={{}}>
                    <div
                        className="col-lg-3"
                        style={{
                            background: "white",
                            maxHeight: "calc(100vh - 60px)",
                        }}
                    >
                        <MentorSideBar />
                    </div>
                    <div
                        className="col-lg-9 main-body"
                        style={{
                            background: "",
                            overflowY: "hidden",
                            // maxHeight: "calc(100vh - 60px)",
                        }}
                    >
                        {children}
                    </div>
                </div>
            </section>
        </div>
    );
};

export const WithMentorSecLayout = (Component) => {
    return (props) => {
        return (
            <>
                <RegisterLayout>
                    <Component {...props} />
                </RegisterLayout>
            </>
        );
    };
};

export const WithMentorRegistrationLayout = (Component) => {
    return (props) => {
        return (
            <>
                <MentorRegistrationLayout>
                    <Component {...props} />
                </MentorRegistrationLayout>
            </>
        );
    };
};
