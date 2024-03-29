import React, { useState } from "react";
import {
    BodyWrapper,
    DownloadableButton,
    FileWrapper,
    FileText,
    FileSize,
    LabelButton,
    VideoWrapper,
    Terms,
} from "./utilize.styled";
import { useHistory } from "react-router-dom";
import {
    CustomButton,
    OutlineButton,
} from "../../../../../../Startupcomponents/button/button.styled";
import Download from "../../../../../../assets/icons/downloadoutline.svg";

import { useAuth } from "./../../../../../../hooks/useAuth";
import toast from "react-hot-toast";
import * as XLSX from "xlsx";
import { parseFile } from "../../../../../../utils/helpers";
import { UploadFile } from "../../../../../../components/uploadFile";
import { upload } from "../../../../../../services";

export const FundUtilization = () => {
    const history = useHistory();
    const { stateAuth, updateProfile, updateStartupInfo } = useAuth();
    console.log(
        stateAuth?.profileData?.startupRes?.fundRaising?.fundUtilization
    );
    const onSubmit = () => {
        if (
            stateAuth?.profileData?.startupRes?.fundRaising?.fundUtilization
                ?.files === null ||
            stateAuth?.profileData?.startupRes?.fundRaising?.fundUtilization
                ?.files.length === 0
        ) {
            toast.error("Please upload a document");
            return;
        }
        updateStartupInfo();
        history.push("#Cap Table");
    };

    // console.log(stateAuth?.profileData?.startupRes?.fundRaising?.fundUtilization?.files);

    return (
        <>
            <BodyWrapper>
                <div className="div">
                    <span className="mini-title">Fund Utilization</span>
                    <p className="pt-3">
                        A document containing all your financial plan and
                        statements for your business.
                    </p>
                    <hr className="" />

                    <div className="my-5">
                        <div className="">
                            <DownloadableButton
                                href="/files/KV Utilisation Table.xlsx"
                                target="_blank"
                                rel="noreferrer noopener"
                                className=""
                                // onClick={async () => {
                                //     var workbook = XLSX.utils.book_new();
                                //     const CSVfile = XLSX.utils.json_to_sheet(
                                //         stateAuth?.profileData?.startupRes?.fundRaising
                                //             ?.fundUtilization?.files,
                                //         {
                                //             raw: false,
                                //         }
                                //     );
                                //     XLSX.utils.book_append_sheet(
                                //         workbook,
                                //         CSVfile,
                                //         "Sheet 1"
                                //     );
                                //     XLSX.writeFile(workbook, "Report.csv");
                                //     console.log(CSVfile);
                                // }}
                            >
                                <img className="pr-2" src={Download} alt="" />
                                Download fund utilization template here
                            </DownloadableButton>
                        </div>
                        <div className="my-5">
                            <UploadFile
                                data={{
                                    maxFiles: 1,
                                    supportedMimeTypes: [
                                        "text/csv",
                                        "application/vnd.ms-excel",
                                    ],
                                    maxFileSize: 5,
                                    extension: "MB",
                                }}
                                initData={
                                    stateAuth?.profileData?.startupRes
                                        ?.fundRaising?.fundUtilization?.file
                                        ? [
                                              stateAuth?.profileData?.startupRes
                                                  ?.fundRaising?.fundUtilization
                                                  ?.file,
                                          ]
                                        : []
                                }
                                onUpload={async (filesInfo) => {
                                    const file = filesInfo[0].file;
                                    // const fileData = await parseFile(file);
                                    // const workbook = XLSX.read(fileData, {
                                    //     type: "binary",
                                    // });
                                    // const sheetName = workbook.SheetNames[0];
                                    // const worksheet =
                                    //     workbook.Sheets[sheetName];
                                    // const data = XLSX.utils.sheet_to_json(
                                    //     worksheet,
                                    //     {
                                    //         raw: false,
                                    //     }
                                    // );

                                    const formData = new FormData();

                                    formData.append("type", "video");
                                    formData.append("file", filesInfo[0]?.file);
                                    const response = await upload(formData);

                                    updateProfile("fundRaising", {
                                        fundUtilization: {
                                            file: response?.path,
                                        },
                                    });

                                    if (!response?.path) return [];

                                    return [response?.path];
                                }}
                            />
                        </div>
                    </div>
                </div>
            </BodyWrapper>

            <Terms className="">
                <div style={{ marginLeft: "15px" }}>
                    <p>
                        By clicking submit, you are agreeing to our{" "}
                        <span>Terms of Use</span> and{" "}
                        <span>Privacy Policy</span>. If you have questions,
                        please reach out to privacy@knightventures.com
                    </p>
                </div>
            </Terms>
            <div className="row mt-4">
                <div className="col-3">
                    <CustomButton
                        className=""
                        background="#808080"
                        onClick={() => history.push("#Funding Ask")}
                    >
                        Back
                    </CustomButton>
                </div>
                <div className="col-9 d-flex justify-content-end">
                    <OutlineButton
                        type="button"
                        onClick={onSubmit}
                        className="ms-2"
                        style={{ marginRight: "0rem" }}
                        background="none"
                    >
                        Next
                    </OutlineButton>
                </div>
            </div>
        </>
    );
};
