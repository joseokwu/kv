import React, { useState } from "react";
import { HeaderProduct, FormWrapper, VideoWrapper } from "./product.styled";
import { useActivity } from "../../../../hooks/useBusiness";
import RedFile from "../../../../assets/icons/redFile.svg";
import { CustomButton } from "../../../../Startupcomponents/button/button.styled";
import BlueFile from "../../../../assets/icons/bluFile.svg";
import { product } from "./../../../../services/startUpReg";
import { formatBytes } from "../../../../utils/helpers";
import { TextareaCustom } from "../../../../components/textArea/cutstomTextarea";
import { useAuth } from "../../../../hooks/useAuth";
import { Form } from "antd";
import { UploadFile } from "../../../../components/uploadFile";
import { FileWrapper, FileText, LabelButton } from "../pitchdeck/pitch.styled";
import { letterOnly } from "../../../../utils/helpers";
import { CircularLoader } from "../../../../Startupcomponents/CircluarLoader/CircularLoader";
import { upload } from "../../../../services/utils";
import { useHistory } from "react-router-dom";
import { TextField } from "../../../../Startupcomponents";
import { Button } from "../../../../Startupcomponents";

export const Product = () => {
    const [wordCount, setWordCount] = useState();
    const [descriptionCount, setDescriptionCount] = useState();

    const { updateProfile, stateAuth, updateStartupInfo } = useAuth();
    const [loading, setLoading] = useState(false);
    const [logoUploading, setLogoUploading] = useState(false);
    const [nextLoading, setnextLoading] = useState(false);
    const [opts, setOpts] = useState("");
    const [urls, setUrls] = useState(
        stateAuth?.profileData?.startupRes?.product?.youtubeDemoUrl ?? ""
    );

    const [youtube, setYoutube] = useState(
        stateAuth?.profileData?.startupRes?.product?.youtubeDemoUrl ?? ""
    );
    const [buttonClicked, setButtonClicked] = useState("Save");

    const youtubeRegExp =
        /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;

    const history = useHistory();
    const handleChangeVids = (e) => {
        // setYoutube(e.target.value);
        updateProfile("product", {
            youtubeDemoUrl: e.target.value,
        });
    };
    // console.log(stateAuth?.profileData?.startupRes?.product)
    const addVid = () => {
        setUrls(youtube);
        setYoutube("");
        updateProfile("product", {
            youtubeDemoUrl: youtube,
        });
    };

    const removeVideo = () => {
        setUrls("");
    };

    const {
        changePath,
        state: { path },
    } = useActivity();

    const next = () => {
        changePath(path + 1);
    };

    const back = () => {
        changePath(path - 1);
    };

    const onSubmit = async () => {
        setLoading(true);
        updateStartupInfo();
        setLoading(false);
        if (buttonClicked === "Next") changePath(path + 1);
    };

    const handleFullChange = (e, name) => {
        const { value } = e.target;

        updateProfile("product", { [name]: value });
    };

    console.log(stateAuth?.profileData?.startupRes);

    return (
        <>
            <HeaderProduct className="px-3">
                <h5 className="text-nowrap" style={{ color: "#2E3192" }}>
                    {" "}
                    Product / Services{" "}
                </h5>
                <p className="text-nowrap">
                    Let's help you explain your product
                </p>
            </HeaderProduct>
            <Form
                name="Product"
                initialValues={{
                    remember: true,
                }}
                layout="vertical"
                onFinish={onSubmit}
                style={{ marginBottom: "4rem" }}
                className="px-3"
            >
                <FormWrapper>
                    <div className="div">
                        {/* <span>Product / Service Description</span> */}
                        <p className="pt-3">
                            A brief description of your product
                        </p>

                        <hr />

                        <div className="row mt-4">
                            <div className="form-group col-12">
                                <TextareaCustom
                                    name={"description"}
                                    errName={"product description"}
                                    label="Briefly describe the users of your product or services?"
                                    value={
                                        stateAuth?.profileData?.startupRes
                                            ?.product?.description
                                    }
                                    onChange={(e) =>
                                        handleFullChange(e, "description")
                                    }
                                    onKeyPress={letterOnly}
                                    placeholder={
                                        "Enter Brief info about your product"
                                    }
                                />
                            </div>
                            <div className="form-group col-12">
                                <TextareaCustom
                                    label="What makes your solution unique from
                                others in the market?"
                                    errName={"competitive edge"}
                                    name={"competitiveEdge"}
                                    value={
                                        stateAuth?.profileData?.startupRes
                                            ?.product?.competitiveEdge
                                    }
                                    onChange={(e) =>
                                        handleFullChange(e, "competitiveEdge")
                                    }
                                    onKeyPress={letterOnly}
                                    placeholder="Enter your uniqueness "
                                />
                            </div>
                        </div>

                        <p className="my-4">
                            Please enter a youtube link OR upload a video of
                            your product demo
                        </p>

                        <div className="form-group col-12 mt-3">
                            <div className="d-flex flex-row align-items-center my-2 gap-4">
                                <Form.Item
                                    name="youtubeDemoUrl"
                                    label="Paste Youtube Link of product Demo"
                                    initialValue={youtube}
                                    rules={[
                                        {
                                            required: stateAuth?.profileData
                                                ?.startupRes?.product?.files
                                                ? false
                                                : true,
                                            message:
                                                "Please enter a valid youtube url or upload a video.",
                                            pattern: youtubeRegExp,
                                        },
                                    ]}
                                >
                                    <input
                                        type="text"
                                        name="youtubeDemoUrl"
                                        onChange={handleChangeVids}
                                        value={youtube}
                                        className="form-control youtube-input ps-3 w-100"
                                        placeholder="Youtube link"
                                    />
                                </Form.Item>
                                {/* <Button
                                    type="button"
                                    className="button"
                                    onClick={addVid}
                                    label="Upload"
                                    disabled={
                                        !youtubeRegExp.test(youtube) &&
                                        youtube !== ""
                                    }
                                /> */}
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
                                            stateAuth?.profileData?.startupRes
                                                ?.product?.files
                                                ? [
                                                      stateAuth?.profileData
                                                          ?.startupRes?.product
                                                          ?.files,
                                                  ]
                                                : []
                                        }
                                        onUpload={async (filesInfo) => {
                                            const formData = new FormData();

                                            formData.append("type", "video");
                                            formData.append(
                                                "file",
                                                filesInfo[0]?.file
                                            );
                                            const response = await upload(
                                                formData
                                            );
                                            // setVidDoc(response?.path);
                                            updateProfile("product", {
                                                files: response?.path,
                                            });

                                            if (!response?.path) return [];

                                            return [response?.path];
                                        }}
                                    />
                                </div>
                            ) : (
                                <div className="form-group col-12">
                                    <VideoWrapper>
                                        <div className="mb-2 d-flex justify-content-end">
                                            <button
                                                type="button"
                                                onClick={removeVideo}
                                            >
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
                    </div>
                </FormWrapper>
                <div className="row mt-4">
                    <div className="col-3">
                        <CustomButton
                            className=""
                            background="#808080"
                            onClick={back}
                        >
                            Back
                        </CustomButton>
                    </div>
                    <div className="col-9 d-flex justify-content-end">
                        <CustomButton
                            type="submit"
                            disabled={loading}
                            className="mx-2"
                            background="#00ADEF"
                            onClick={() => {
                                setButtonClicked("Save");
                            }}
                        >
                            {loading ? <CircularLoader /> : "Save"}
                        </CustomButton>
                        <CustomButton
                            type="submit"
                            onClick={() => {
                                setButtonClicked("Next");
                                console.log(stateAuth);
                            }}
                            background="#2E3192"
                        >
                            Next
                        </CustomButton>
                    </div>
                </div>
            </Form>
        </>
    );
};
