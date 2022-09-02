import { BusCanButton, Header, Wrapper } from "./business.styled";
import BlueFile from "../../../../assets/icons/bluFile.svg";
import Plus from "../../../../assets/icons/add.svg";
import {
    Modal,
    ModalCus,
    LargeModal,
    ModalTabs,
    Button,
    BusinessCanvas,
} from "../../../../Startupcomponents";
import { useState } from "react";
import { Market, Brand, BrandModeling, Plan } from "./container";
import { useAuth } from "../../../../hooks/useAuth";
import { validate } from "../../../../utils/helpers";
import { Form } from "antd";

export const BusinessCanavas = () => {
    const items = ["Market", "Brand", "Business Modeling", "Planning"];
    const [state, setState] = useState(0);
    const [buttonClicked, setButtonClicked] = useState("Save");
    const { updateProfile, stateAuth, updateStartupInfo } = useAuth();
    console.log(stateAuth);

    const [close, setClose] = useState(false);
    const propCheck = [
        "brand.valueProposition",
        "brand.competitiveAdvantage",
        "brand.productRoadMap",
        "brand.brandBuilding",
        "brand.brandValue",
        "market.problemStatement",
        "market.product",
        "market.targetMarket",
        "market.marketSize",
        "market.keyCompetitors",
        "plan.marketStrategy",
        "plan.salesStrategy",
    ];

    const handleChange = (e, prefix = "") => {
        const { value, name } = e.target;
        // setData({ ...data, [name]: value })

        updateProfile("businessCanvas", {
            [prefix]: {
                ...stateAuth?.profileData?.startupRes?.businessCanvas[prefix],
                [name]: value,
            },
        });
    };

    const handleFunc = () => {
        setState(state + 1);
        //console.log(data);
    };

    const genSubmit = () => {
        // updateStartupInfo();
    };

    const onSubmit = async () => {
        if (buttonClicked === "Save") {
            try {
                await updateStartupInfo();
                setClose(false);
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                await updateStartupInfo();
                if (state < 3) setState(state + 1);
                else setClose(false);
            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <div>
            <Header className="mb-4">
                <section className="d-flex align-items-center justify-content-between">
                    <h3 className="tab-section-title">Business Canvas</h3>
                    {/* <h3>Create Business Canvas</h3> */}
                    <button className="teamBtn" onClick={() => setClose(true)}>
                        Update
                    </button>
                </section>
            </Header>
            {close && (
                <LargeModal
                    id="canvas"
                    title="Create Business Canvas"
                    bold={true}
                    closeModal={() => setClose()}
                    subTitle="Let’s help you craft your business model canvas using our template"
                >
                    <Form
                        name="Market"
                        initialValues={{
                            remember: true,
                        }}
                        layout="vertical"
                        onFinish={onSubmit}
                        className="px-3"
                    >
                        <div className="pt-4">
                            <ModalTabs
                                tabItems={items}
                                state={state}
                                setState={setState}
                            />

                            {state === 0 && (
                                <Market
                                    data={
                                        stateAuth?.profileData?.startupRes
                                            ?.businessCanvas?.market
                                    }
                                    handleChange={handleChange}
                                />
                            )}
                            {state === 1 && (
                                <Brand
                                    data={
                                        stateAuth?.profileData?.startupRes
                                            ?.businessCanvas?.brand
                                    }
                                    handleChange={handleChange}
                                />
                            )}
                            {state === 2 && (
                                <BrandModeling
                                    data={
                                        stateAuth?.profileData?.startupRes
                                            ?.businessCanvas?.businessModel
                                    }
                                    handleChange={handleChange}
                                />
                            )}
                            {state === 3 && (
                                <Plan
                                    data={
                                        stateAuth?.profileData?.startupRes
                                            ?.businessCanvas?.plan
                                    }
                                    handleChange={handleChange}
                                />
                            )}
                        </div>

                        <BusCanButton>
                            <div className="my-3 d-flex justify-content-between py-3">
                                <div>
                                    {state < 3 && (
                                        <button
                                            className="can"
                                            type="button"
                                            onClick={() => {
                                                if (state > 0)
                                                    setState(state - 1);
                                                else {
                                                    setState(0);
                                                    setClose(false);
                                                }
                                            }}
                                        >
                                            {" "}
                                            {state > 0 ? "Back" : "Cancel"}{" "}
                                        </button>
                                    )}
                                </div>
                                <div className="d-flex">
                                    {state < 3 && (
                                        <button
                                            className="sav"
                                            type="submit"
                                            onClick={() => {
                                                setButtonClicked("Save");
                                            }}
                                        >
                                            Save
                                        </button>
                                    )}
                                    <button
                                        type="submit"
                                        style={{
                                            fontFamily: "DM Sans",
                                            fontWeight: "bold",
                                            background: "#2E3192",
                                            fontSize: "14px",
                                            lineHeight: "140%",
                                            border: "none",
                                            borderRadius: "5px",
                                            padding: "10px 30px",
                                            color: "#fff",
                                        }}
                                        onClick={() => {
                                            setButtonClicked("Next");
                                        }}
                                        className="mx-2 nex"
                                    >
                                        {" "}
                                        {state < 3 ? "Next" : "Create"}{" "}
                                    </button>
                                </div>
                            </div>
                        </BusCanButton>
                    </Form>
                </LargeModal>
            )}
            {validate(
                stateAuth?.profileData?.startupRes?.businessCanvas,
                propCheck
            ) ? (
                <BusinessCanvas
                    data={stateAuth?.profileData?.startupRes?.businessCanvas}
                />
            ) : (
                <Wrapper className="d-flex justify-content-center text-center">
                    <div onClick={() => setClose(true)}>
                        <img
                            src={BlueFile}
                            alt="."
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                        />
                        <p className="my-2"> Create Business canvas </p>
                        <div style={{ cursor: "pointer" }}>
                            <img
                                src={Plus}
                                alt="."
                                style={{
                                    width: "20px",
                                    height: "20px",
                                }}
                            />
                        </div>
                    </div>
                </Wrapper>
            )}
        </div>
    );
};
