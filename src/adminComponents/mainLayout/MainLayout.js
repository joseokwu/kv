import React, { useState } from "react";
import { Header, Sidebar } from "../index";
import "./mainLayout.css";

const MainLayout = ({ children }) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <section className="layout-header">
                <Header setOpen={setOpen} open={open} admin={true} />
            </section>
            <section className="layout-main">
                <div className={`${open ? "sm-side" : "sm-side-close"}`}>
                    <Sidebar />
                </div>
                <div
                    className="layout-child"
                    style={{ backgroundColor: "#f9fafa" }}
                >
                    {children}
                </div>
            </section>
        </div>
    );
};

export const WithAdminLayout = (Component) => {
    return (props) => {
        return (
            <>
                <MainLayout>
                    <Component {...props} />
                </MainLayout>
            </>
        );
    };
};
