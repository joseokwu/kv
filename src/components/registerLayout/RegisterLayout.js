import React from "react";
import { Header } from "../../components/index";
import {
    InvestorSideBar,
    BoosterPartnerSideBar,
} from "../../Startupcomponents";

const RegisterLayout = ({ children }) => {
    return (
        <div>
            <section className="layout-header">
                <Header />
            </section>
            <section>
                <div className="layout-child">{children}</div>
            </section>
        </div>
    );
};

export const InvestorRegistrationLayout = ({ children }) => {
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
                        <InvestorSideBar />
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

export const BoosterPartnerRegistrationLayout = ({ children }) => {
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
                        <BoosterPartnerSideBar />
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

export const WithInvestorSecLayout = (Component) => {
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

export const WithBoosterPartnerRegistrationLayout = (Component) => {
    return (props) => {
        return (
            <>
                <BoosterPartnerRegistrationLayout>
                    <Component {...props} />
                </BoosterPartnerRegistrationLayout>
            </>
        );
    };
};

export const WithInvestorRegistrationLayout = (Component) => {
    return (props) => {
        return (
            <>
                <InvestorRegistrationLayout>
                    <Component {...props} />
                </InvestorRegistrationLayout>
            </>
        );
    };
};
