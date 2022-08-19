import { css } from "styled-components/macro";
import { BodyWrapper, DownloadableButton, Terms } from "./financial.styled";
import { useHistory } from "react-router-dom";
import {
    CustomButton,
    OutlineButton,
} from "../../../../../../Startupcomponents/button/button.styled";
import Download from "../../../../../../assets/icons/downloadoutline.svg";
import { useActivity } from "../../../../../../hooks/useBusiness";
import { useAuth } from "../../../../../../hooks/useAuth";
import { upload } from "./../../../../../../services/utils";
import { useState } from "react";
import { UploadFile } from "../../../../../../components";
import { validate } from "./../../../../../../utils/helpers";
import { startupValidation } from "./../../../../../../utils/utils";
import toast from "react-hot-toast";
import Form from "antd/lib/form/Form";
import * as XLSX from "xlsx";

export const FinancialProjection = () => {
    const {
        state: { fundraising },
    } = useActivity();
    const history = useHistory();
    const { updateProfile, stateAuth, updateStartupInfo } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            stateAuth?.profileData?.startupRes?.fundRaising?.financialProjection?.files
                ?.length !== 0
        ) {
            console.log(stateAuth?.profileData?.startupRes);
            console.log(validate(stateAuth?.profileData?.startupRes, startupValidation));
            // updateStartupInfo(
            //     validate(stateAuth?.profileData?.startupRes, startupValidation)
            // );
            updateStartupInfo(true);
            window.open("/startup/registration/success", "_self");
        } else toast.error("Please provide a financial projection document");
    };

    return (
        <form onSubmit={handleSubmit}>
            <BodyWrapper>
                <span
                    css={css`
                        font-family: DM Sans;
                        font-weight: 500;
                        font-size: 24px;
                        line-height: 30.83px;
                        color: #2e3192;
                    `}
                >
                    Financial Projection
                </span>
                <div className="pt-3">
                    <p>
                        A document containing all your financial plan and
                        statements for your business.
                    </p>
                </div>

                <hr />

                <div className="my-5">
                    <div className="col-12 my-3 mx-0 px-0">
                        <DownloadableButton href="." className="">
                            <img className="pr-2" src={Download} alt="" />
                            Download fund utilization template here
                        </DownloadableButton>
                    </div>
                    <div className="col-12 my-5 px-0">
                        <UploadFile
                            data={{
                                maxFiles: 1,
                                supportedMimeTypes: [
                                    "application/pdf",
                                    "application/csv",
                                    "application/vnd.ms-excel",
                                ],
                                maxFileSize: 5,
                                extension: "MB",
                            }}
                            initData={
                                stateAuth?.profileData?.startupRes?.fundRaising
                                    ?.financialProjection?.file
                                    ? [
                                          stateAuth?.profileData?.startupRes?.fundRaising
                                              ?.financialProjection?.file,
                                      ]
                                    : []
                            }
                            onUpload={async (filesInfo) => {
                                const formData = new FormData();

                                formData.append("type", "pdf");
                                formData.append("file", filesInfo[0]?.file);

                                try {
                                    const response = await upload(formData);
                                    console.log(response);
                                    updateProfile("fundRaising", {
                                        financialProjection: {
                                            file: response?.path,
                                        },
                                    });

                                    if (!response?.path) return [];

                                    return [response?.path];
                                } catch (error) {
                                    console.log(error);
                                }
                            }}
                        />
                    </div>
                </div>
            </BodyWrapper>
            <Terms className="">
                <p>
                    By clicking submit, you are agreeing to our{" "}
                    <span>Terms of Use</span> and <span>Privacy Policy</span>.
                    If you have questions, please reach out to
                    privacy@knightventures.com
                </p>
            </Terms>
            <div className="row mt-4">
                <div className="col-3">
                    <CustomButton
                        className=""
                        background="#808080"
                        onClick={() => history.push("#Previous Round")}
                    >
                        Back
                    </CustomButton>
                </div>
                <div className="col-9 d-flex justify-content-end">
                    <OutlineButton
                        type="submit"
                        className="ms-2"
                        style={{ marginRight: "0rem" }}
                        background="none"
                    >
                        Submit
                    </OutlineButton>
                </div>
            </div>
        </form>
    );
};
