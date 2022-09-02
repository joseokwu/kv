import React, { useState } from "react";
import {
    HeaderPitch,
    FormWrapper,
    FileWrapper,
    FileText,
    FileSize,
    LabelButton,
    VideoWrapper,
} from "./pitch.styled";
import DownloadIcon from "../../../../assets/icons/download.svg";
import { useFormik } from "formik";
import RedFile from "../../../../assets/icons/redFile.svg";
import BlueFile from "../../../../assets/icons/videoIcon.svg";
import { useActivity } from "../../../../hooks/useBusiness";
import { pitchDeck } from "./../../../../services/startUpReg";
import { CustomButton } from "../../../../Startupcomponents/button/button.styled";
import { formatBytes } from "../../../../utils/helpers";
import { CircularLoader } from "../../../../Startupcomponents/CircluarLoader/CircularLoader";
import { toast } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../../hooks/useAuth";
import { updateFounderProfile } from "../../../../services";
import { upload } from "../../../../services/utils";
import { UploadFile } from "../../../../components/uploadFile";
import { TextField } from "../../../../components";
import { Form } from "antd";

export const PitchDeck = () => {
    const { updateProfile, stateAuth, updateStartupInfo } = useAuth();
    const [loading, setLoading] = useState(false);
    const [nextloading, setNextLoading] = useState(false);
    const [opts, setOpts] = useState("");
    const [buttonClicked, setButtonClicked] = useState("Save");

    const history = useHistory();
    const youtubeRegExp =
        /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;

    console.log(stateAuth?.profileData?.startupRes?.pitchDeck);
    const {
        changePath,
        state: { path },
    } = useActivity();

    const [youtube, setYoutube] = useState("");
    console.log("pitchdeck", stateAuth?.profileData?.startupRes);
    const [urls, setUrls] = useState(
        stateAuth?.profileData?.startupRes?.pitchDeck?.pitchDeckVideo ?? ""
    );

    const removeVideo = () => {
        setUrls("");
    };

    const back = () => {
        changePath(path - 1);
    };

    const addVid = () => {
        //const newVal = youtube.replace('https://youtu.be/', '');

        setUrls(youtube);
        // setYoutube("");
        updateProfile("pitchDeck", {
            pitchDeckVideo: youtube,
        });
    };

    const onNext = () => {
        if (
            stateAuth?.profileData?.startupRes?.pitchDeck?.pitchDeckFile !==
                null ||
            stateAuth?.profileData?.startupRes?.pitchDeck?.pitchDeckVideo !==
                null
        ) {
            changePath(path + 1);
            return;
        }
        toast.error("Please provide a pitch deck document");
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (
            stateAuth?.profileData?.startupRes?.pitchDeck?.pitchDeckFile !==
                null ||
            stateAuth?.profileData?.startupRes?.pitchDeck?.pitchDeckVideo !==
                null
        ) {
            updateStartupInfo();
            if (buttonClicked === "Next") onNext();
            return;
        } else {
            toast.error("Please provide a pitch deck document or video");
        }
    };

    return (
        <>
            <HeaderPitch className="px-3">
                <h5 style={{ color: "#2E3192" }}>Pitch Deck</h5>
                <p>Let's get to know your startup</p>
            </HeaderPitch>
            <form
                style={{ marginBottom: "4rem" }}
                onSubmit={onSubmit}
                className="px-3"
            >
                <FormWrapper>
                    <div className="div mt-0 ml-0">
                        {/* <span>Pitch Deck</span> */}
                        <p className="pt-3">
                            A brief presentation and overview about you startup.
                            It can be a pdf, powerpoint presentation or keynote
                            document
                        </p>

                        <hr />

                        <div className="row mt-3">
                            <div
                                className="form-group col-12"
                                style={{ marginBottom: "40px" }}
                            >
                                <label className="pt-4 pb-3">
                                    Upload a Pitch deck for your startup
                                </label>
                                <UploadFile
                                    data={{
                                        maxFiles: 1,
                                        supportedMimeTypes: ["application/pdf"],
                                        maxFileSize: 5,
                                        extension: "MB",
                                    }}
                                    initData={
                                        stateAuth?.profileData?.startupRes
                                            ?.pitchDeck?.pitchDeckFile
                                            ? [
                                                  stateAuth?.profileData
                                                      ?.startupRes?.pitchDeck
                                                      ?.pitchDeckFile,
                                              ]
                                            : []
                                    }
                                    onUpload={async (filesInfo) => {
                                        const formData = new FormData();

                                        formData.append("type", "pdf");
                                        formData.append(
                                            "file",
                                            filesInfo[0]?.file
                                        );

                                        const response = await upload(formData);
                                        console.log(
                                            "response response response",
                                            response
                                        );
                                        updateProfile("pitchDeck", {
                                            pitchDeckFile: response?.path,
                                        });

                                        if (!response?.path) return [];

                                        return [response?.path];
                                    }}
                                />
                            </div>
                            <p className="my-4">
                                Please enter a youtube link OR upload a video of
                                your product demo
                            </p>
                            {/* <label> Paste Youtube Link of product Demo </label> */}
                            <div className="d-flex my-2">
                                <div className="form-group form-group-spacee col-lg-6 col-12">
                                    {/* <TextField
                                        type={"url"}
                                        name={"youtubeDemoUrl"}
                                        value={youtube}
                                        onChange={(e) => {
                                            updateProfile("pitchDeck", {
                                                pitchDeckVideo: e.target.value,
                                            });
                                        }}
                                        className="form-control youtube-input ps-3"
                                        style={{
                                            width: "100%",
                                            marginLeft: "0",
                                        }}
                                        required={false}
                                        placeholder="https://youtube.com/"
                                    /> */}
                                    <Form.Item
                                        name="youtubeDemoUrl"
                                        label="Paste Youtube Link of product Demo"
                                        initialValue={youtube}
                                        rules={[
                                            {
                                                required: stateAuth?.profileData
                                                    ?.startupRes?.pitchDeck
                                                    ?.pitchDeckFile
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
                                            onChange={(e) => {
                                                updateProfile("pitchDeck", {
                                                    pitchDeckVideo:
                                                        e.target.value,
                                                });
                                            }}
                                            value={youtube}
                                            className="form-control youtube-input ps-3 w-100"
                                            placeholder="Youtube link"
                                        />
                                    </Form.Item>
                                </div>
                                {/* <button
                                    type="button"
                                    className="button"
                                    onClick={addVid}
                                >
                                    Upload
                                </button> */}
                            </div>

                            {!urls.includes("https://youtu.be/") ? (
                                <div
                                    className="form-group col-12 mt-3"
                                    style={{ marginBottom: "40px" }}
                                >
                                    <UploadFile
                                        data={{
                                            maxFiles: 1,
                                            supportedMimeTypes: ["video/mp4"],
                                            maxFileSize: 10,
                                            extension: "MB",
                                        }}
                                        fileType={"video"}
                                        initData={
                                            stateAuth?.profileData?.startupRes
                                                ?.pitchDeck?.pitchDeckVideo
                                                ? [
                                                      stateAuth?.profileData
                                                          ?.startupRes
                                                          ?.pitchDeck
                                                          ?.pitchDeckVideo,
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
                                            updateProfile("pitchDeck", {
                                                pitchDeckVideo: response?.path,
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
                <div className="row ">
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
                            disabled={loading}
                            type="submit"
                            className="mx-2"
                            background="#00ADEF"
                            onClick={() => {
                                setButtonClicked("Save");
                            }}
                        >
                            {loading ? <CircularLoader /> : "Save"}
                        </CustomButton>
                        <div className="">
                            <CustomButton
                                type="submit"
                                background="#2E3192"
                                onClick={() => {
                                    setButtonClicked("Next");
                                }}
                            >
                                Next
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};
