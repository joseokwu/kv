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

export const BusinessCanavas = () => {
    const items = ["Market", "Brand", "Business Modeling", "Planning"];
    const [state, setState] = useState(0);
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
                ...stateAuth?.startupData?.businessCanvas[prefix],
                [name]: value,
            },
        });
    };

    const handleFunc = () => {
        setState(state + 1);
        //console.log(data);
    };

    const genSubmit = () => {
        setClose(false);
        updateStartupInfo();
    };

    return (
        <div>
            <Header className="mb-4">
                {/* <h3>Create Business Canvas</h3> */}
                <section className="d-flex justify-content-end">
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
                    <div className="pt-4">
                        <ModalTabs
                            tabItems={items}
                            state={state}
                            setState={setState}
                        />

                        {state === 0 && (
                            <Market
                                data={
                                    stateAuth?.startupData?.businessCanvas
                                        ?.market
                                }
                                handleChange={handleChange}
                            />
                        )}
                        {state === 1 && (
                            <Brand
                                data={
                                    stateAuth?.startupData?.businessCanvas
                                        ?.brand
                                }
                                handleChange={handleChange}
                            />
                        )}
                        {state === 2 && (
                            <BrandModeling
                                data={
                                    stateAuth?.startupData?.businessCanvas
                                        ?.businessModel
                                }
                                handleChange={handleChange}
                            />
                        )}
                        {state === 3 && (
                            <Plan
                                data={
                                    stateAuth?.startupData?.businessCanvas?.plan
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
                                            state > 0
                                                ? setState(state - 1)
                                                : setState(0);
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
                                        onClick={() => {
                                            genSubmit();
                                        }}
                                        type="submit"
                                    >
                                        Save
                                    </button>
                                )}
                                <button
                                    type="button"
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
                                        state < 3 ? handleFunc() : genSubmit();
                                    }}
                                    className="mx-2 nex"
                                >
                                    {" "}
                                    {state < 3 ? "Next" : "Create"}{" "}
                                </button>
                            </div>
                        </div>
                    </BusCanButton>
                </LargeModal>
            )}
            {validate(stateAuth?.startupData?.businessCanvas, propCheck) ? (
                <BusinessCanvas data={stateAuth?.startupData?.businessCanvas} />
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
