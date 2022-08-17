import React, { useState } from "react";
import demo from "../../../../assets/icons/demoImg.png";
import downloadIcon from "../../../../assets/icons/download.svg";
import { UploadFile } from "../../../../components/uploadFile";
import { upload } from "../../../../services/utils";
import {
    Button,
    ModalCus,
    TextArea,
    TextField,
} from "../../../../Startupcomponents";
import {
    FileSize,
    FileText,
    FileWrapper,
    LabelButton,
    VideoWrapper,
} from "../../../startupRegistration/components/pitchdeck/pitch.styled";
import "./product.css";
import { letterOnly } from "../../../../utils/helpers";
import { Form } from "antd";
import { TextareaCustom } from "../../../../components/textArea/cutstomTextarea";
import { useAuth } from "../../../../hooks/useAuth";
import { EmptyState } from "../../../../mentorComponents";

export const Product = () => {
    const [showModal, setShowModal] = useState(false);
    const { stateAuth } = useAuth();

    return (
        <div>
            {showModal ? (
                <ModalCus
                    id="editProductModal"
                    title=""
                    closeModal={setShowModal}
                >
                    <EditProductModal
                        data={stateAuth?.user?.product}
                        close={setShowModal}
                    />
                </ModalCus>
            ) : (
                <span></span>
            )}
            <h3 className="tab-section-title">Product</h3>
            <section
                className="d-flex justify-content-end"
                data-target="#editProductModal"
                onClick={() => setShowModal(true)}
            >
                <button className="teamBtn">Edit product</button>
            </section>
            <div className="row">
                <section className="col-xl-12">
                    <div className="product-wrap">
                        {stateAuth?.profileData?.startupRes?.product
                            ?.description ? (
                            <div className="wrap mb-5 py-5 px-5">
                                <h3>Product Description</h3>
                                <p className="mb-5 prod-desc">
                                    {
                                        stateAuth?.profileData?.startupRes
                                            ?.product?.description
                                    }
                                </p>
                            </div>
                        ) : (
                            <EmptyState message="Product description not set" />
                        )}

                        {stateAuth?.profileData?.startupRes?.product?.files ||
                        stateAuth?.profileData?.startupRes?.product
                            ?.youtubeDemoUrl ? (
                            <>
                                <h3>Product Demo</h3>

                                {stateAuth?.profileData?.startupRes?.product
                                    ?.files && (
                                    <video
                                        className="mb-3 product-vid"
                                        controls
                                    >
                                        <source
                                            src={
                                                stateAuth?.profileData
                                                    ?.startupRes?.product?.files
                                            }
                                            id="video_here"
                                        />
                                        Your browser does not support HTML5
                                        video.
                                    </video>
                                )}
                                {stateAuth?.profileData?.startupRes?.product
                                    ?.youtubeDemoUrl && (
                                    <iframe
                                        src={`https://www.youtube.com/embed/${stateAuth?.profileData?.startupRes?.product?.youtubeDemoUrl.replace(
                                            "https://youtu.be/",
                                            ""
                                        )}`}
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; execution-while-not-rendered 'none'"
                                        allowfullscreen
                                        title="video"
                                        style={{
                                            borderRadius: "20px",
                                            maxHeight: "150px",
                                            width: "250px",
                                            marginLeft: "15px",
                                        }}
                                    />
                                )}
                            </>
                        ) : (
                            <EmptyState message="Product demo not uploaded" />
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

const EditProductModal = ({ data, close }) => {
    const { stateAuth, updateStartupInfo, updateProfile } = useAuth();
    const [youtube, setYoutube] = useState("");
    const [urls, setUrls] = useState(
        stateAuth?.profileData?.startupRes?.product?.youtubeDemoUrl ?? ""
    );
    const onSubmit = async () => {
        updateStartupInfo();
        close(false);
    };
    const handleFullChange = (e, name) => {
        const { value } = e.target;
        //console.log(name);
        updateProfile("product", { [name]: value });
    };
    const handleChangeVids = (e) => {
        setYoutube(e.target.value);
    };
    const removeVideo = () => {
        setUrls("");
        updateProfile("product", { youtubeDemoUrl: "" });
    };
    const addVid = () => {
        setUrls(youtube);
        setYoutube("");
        updateProfile("product", {
            youtubeDemoUrl: youtube,
        });
    };

    return (
        <div className="mx-0 my-4">
            <Form
                name="Product"
                initialValues={{
                    remember: true,
                }}
                layout="vertical"
                onFinish={onSubmit}
                style={{ marginBottom: "4rem" }}
            >
                <div className="product-desc border-bottom">
                    <h1>Product / Service Description</h1>
                    <p className="py-4">A brief description of your product</p>
                </div>

                <div className="row my-4 d-flex justify-content-between">
                    <TextareaCustom
                        name={"description"}
                        value={
                            stateAuth?.profileData?.startupRes?.product
                                ?.description
                        }
                        onChange={(e) => handleFullChange(e, "description")}
                        onKeyPress={letterOnly}
                        placeholder={"Enter Brief info about your product"}
                    />
                </div>

                <div className="form-group col-12 mt-3">
                    <label> Paste Youtube Link of product Demo </label>
                    <div className="d-flex my-2">
                        <input
                            type="text"
                            name="youtubeDemoUrl"
                            onChange={handleChangeVids}
                            value={youtube}
                            className="form-control youtube-input ps-3"
                            placeholder="Youtube link"
                        />
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={addVid}
                        >
                            Upload
                        </button>
                    </div>
                    {!urls.includes("https://youtu.be/") ? (
                        <div className="form-group col-12 mt-3">
                            <UploadFile
                                data={{
                                    maxFiles: 1,
                                    supportedMimeTypes: ["video/mp4"],
                                    maxFileSize: 10,
                                    extension: "MB",
                                }}
                                initData={
                                    stateAuth?.profileData?.startupRes?.product
                                        ?.files
                                        ? [
                                              stateAuth.profileData?.startupRes
                                                  ?.product?.files,
                                          ]
                                        : []
                                }
                                onUpload={async (filesInfo) => {
                                    const formData = new FormData();
                                    formData.append("dir", "kv");
                                    formData.append(
                                        "ref",
                                        stateAuth.user?.userId
                                    );
                                    formData.append("type", "video");
                                    formData.append(0, filesInfo[0]?.file);
                                    const response = await upload(formData);
                                    // setVidDoc(response?.path);
                                    updateProfile("product", {
                                        files: response?.path,
                                    });
                                }}
                            />
                        </div>
                    ) : (
                        <div className="form-group col-12">
                            <VideoWrapper>
                                <div className="mb-2 d-flex justify-content-end">
                                    <button type="button" onClick={removeVideo}>
                                        Delete
                                    </button>
                                </div>

                                <iframe
                                    src={`https://www.youtube.com/embed/${urls.replace(
                                        "https://youtu.be/",
                                        ""
                                    )}`}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; execution-while-not-rendered 'none'"
                                    allowfullscreen
                                    title="video"
                                    style={{
                                        borderRadius: "20px",
                                        maxHeight: "150px",
                                        width: "250px",
                                    }}
                                />
                            </VideoWrapper>
                        </div>
                    )}
                </div>

                <div className="my-5 product-update">
                    <button type="submit">Update</button>
                </div>
            </Form>
        </div>
    );
};
