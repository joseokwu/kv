import {
    BodyWrapper,
    DownloadableButton,
    FileWrapper,
    FileText,
    FileSize,
    LabelButton,
    VideoWrapper,
    Terms,
} from "./cap.styled.js";
import { Form } from "antd";
import { useHistory } from "react-router-dom";
import {
    CustomButton,
    OutlineButton,
} from "../../../../../../Startupcomponents/button/button.styled";
import Download from "../../../../../../assets/icons/downloadoutline.svg";
import DownloadIcon from "../../../../../../assets/icons/download.svg";
import RedFile from "../../../../../../assets/icons/redFile.svg";
import BluFile from "../../../../../../assets/icons/bluFile.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useActivity } from "../../../../../../hooks/useBusiness";
import { useAuth } from "../../../../../../hooks/useAuth";
import CurrencyInput from "react-currency-input-field";
import { CircularLoader } from "../../../../../../Startupcomponents/CircluarLoader/CircularLoader";
import { useState } from "react";
import * as XLSX from "xlsx";
import { parseFile } from "../../../../../../utils/helpers";
import { upload } from "../../../../../../services/utils";
import { UploadFile } from "../../../../../../components/uploadFile";
import toast from "react-hot-toast";

export const CapTable = ({ setFundraising }) => {
    const history = useHistory();
    const { updateProfile, stateAuth, updateStartupInfo } = useAuth();

    const [fileDoc, setFileDoc] = useState(
        stateAuth?.profileData?.startupRes?.fundRaising?.capTable?.files ?? []
    );
    // const { location  } = history;

    console.log(stateAuth?.profileData?.startupRes?.fundRaising?.capTable);
    const onFinish = () => {
        if (
            stateAuth?.profileData?.startupRes?.fundRaising?.capTable?.files
                ?.length === 0
        ) {
            toast.error("Please upload a Capital Table");
            return;
        }
        updateStartupInfo();
        history.push("#Previous Round");
    };
    console.log(stateAuth?.profileData?.startupRes?.fundRaising?.capTable);

    return (
        <Form
            name="Cap Table"
            initialValues={{
                remember: true,
            }}
            layout="vertical"
            onFinish={onFinish}
            className="px-3"
        >
            <BodyWrapper>
                <div className="div">
                    <span className="mini-title">Cap Table</span>
                    <p>
                        A document containing all your Cap Table and statements
                        for your business.
                    </p>

                    <hr />

                    <div className=" row my-5">
                        <div className="col-lg-6 col-12 form-group mx-0">
                            <label>Total fund raised till date (if any)</label>
                            <CurrencyInput
                                id="amountRaised"
                                name="amountRaised"
                                type="text"
                                value={
                                    stateAuth?.profileData?.startupRes
                                        ?.fundRaising?.capTable?.amountRaised
                                }
                                className="form-control ps-3"
                                placeholder="$100,000"
                                intlConfig={{
                                    locale: "en-US",
                                    currency: "USD",
                                }}
                                onValueChange={(value) =>
                                    updateProfile("fundRaising", {
                                        capTable: {
                                            ...stateAuth?.profileData
                                                ?.startupRes?.fundRaising
                                                ?.capTable,
                                            amountRaised: value,
                                        },
                                    })
                                }
                            />
                        </div>
                        <div className="col-lg-6 col-12 form-group mx-n4 mx-lg-n0">
                            <Form.Item
                                // name="amountInvestedByFounders"
                                label="Total Capital invested by Founders"
                                initialValue={
                                    stateAuth?.profileData?.startupRes
                                        ?.fundRaising?.capTable
                                        ?.amountInvestedByFounders
                                }
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please enter the amount invested",
                                    },
                                ]}
                            >
                                <CurrencyInput
                                    id="amountInvestedByFounders"
                                    name="amountInvestedByFounders"
                                    type="text"
                                    value={
                                        stateAuth?.profileData?.startupRes
                                            ?.fundRaising?.capTable
                                            ?.amountInvestedByFounders
                                    }
                                    className="form-control ps-3"
                                    placeholder="$150,000"
                                    intlConfig={{
                                        locale: "en-US",
                                        currency: "USD",
                                    }}
                                    required={true}
                                    onValueChange={(value) =>
                                        updateProfile("fundRaising", {
                                            capTable: {
                                                ...stateAuth?.profileData
                                                    ?.startupRes?.fundRaising
                                                    ?.capTable,
                                                amountInvestedByFounders: value,
                                            },
                                        })
                                    }
                                />
                            </Form.Item>
                        </div>
                        <div className="col-12 my-3">
                            <DownloadableButton
                                href="/files/Knight Ventures Cap Table Template.xlsx"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <img className="pr-2" src={Download} alt="" />
                                Download Capital Table sample here
                            </DownloadableButton>
                        </div>
                        <div className="col-12 my-4">
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
                                        ?.fundRaising?.capTable?.file
                                        ? [
                                              stateAuth?.profileData?.startupRes
                                                  ?.fundRaising?.capTable?.file,
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
                                        capTable: {
                                            ...stateAuth?.profileData
                                                ?.startupRes?.fundRaising
                                                ?.capTable,
                                            file: response?.path,
                                        },
                                    });
                                    // setFileDoc(data);

                                    if (!response?.path) return [];

                                    return [response?.path];
                                }}
                            />
                            {/* <FileWrapper className='d-flex justify-content-center text-center mx-n4 mx-lg-n0'>
            {
                fileDoc !== null ? (
                  <img src={RedFile} alt='.' 
                  style={{width:'70px', height:'70px'}}
                   />
                ):(
                  logoUploading ? <CircularLoader color={'#000'} /> : 
                 <>
                 <img src={DownloadIcon} alt='#' />
              <FileText>Drag & Drop</FileText>
              <FileText>Drag files or click here to upload </FileText>
              <FileSize> {'(Max. File size 5mb)'} </FileSize>
              </>
                )  
              }
              <input type='file' id='cap'
               onChange={handleCsv}
               accept=".csv"
               hidden />
              <LabelButton for='cap'>Upload Files</LabelButton>
            </FileWrapper> */}
                        </div>
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
                        onClick={() => history.push("#Fund Utilization")}
                    >
                        Back
                    </CustomButton>
                </div>
                <div className="col-9 d-flex justify-content-end">
                    <OutlineButton
                        type="submit"
                        // onClick={(e) => {

                        // }}
                        className="ms-2"
                        style={{ marginRight: "0rem" }}
                        background="none"
                    >
                        Next
                    </OutlineButton>
                </div>
            </div>
        </Form>
    );
};
