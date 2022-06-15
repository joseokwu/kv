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
                <Header />
            </section>
            <section className="">
                <div className="row">
                    <div className="col-lg-3" style={{ background: "white" }}>
                        <StartupSideBar />
                    </div>
                    <div className="col-lg-8" style={{ background: "" }}>
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
