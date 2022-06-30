import React from "react";
import { Header } from "../index";
import { StartupSideBar } from "../sidebar/Sidebar";

const RegisterLayout = ({ children }) => {
    return (
        <div>
            <section className="layout-header">
                <Header />
            </section>
            <section className="">
                <div className="layoutChild">{children}</div>
            </section>
        </div>
    );
};

export const WithStartupRegisterLayout = (Component) => {
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

const StartupRegistrationLayout = ({ children }) => {
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
                        <StartupSideBar />
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

export const WithStartupRegistrationLayout = (Component) => {
    return (props) => {
        return (
            <>
                <StartupRegistrationLayout>
                    <Component {...props} />
                </StartupRegistrationLayout>
            </>
        );
    };
};
