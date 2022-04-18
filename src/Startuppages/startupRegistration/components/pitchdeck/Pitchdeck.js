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
import BlueFile from "../../../../assets/icons/bluFile.svg";
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



export const PitchDeck = () => {
  const {  updateProfile, stateAuth , updateStartupInfo } = useAuth();
  const [loading, setLoading] = useState(false);
  const [nextloading, setNextLoading] = useState(false);
  const [opts, setOpts] = useState("");

  const history = useHistory();


  const {
    changePath,
    state: { path },
  } = useActivity();

  



  const back = () => {
    changePath(path - 1);
  };


const onNext = () =>{
 
  if(stateAuth.startupData?.pitchDeck?.pitchDeckFile !== null ||
     stateAuth.startupData?.pitchDeck?.pitchDeckVideo !== null
     ){
      changePath(path + 1);
    return ;
  }
  toast.error("Please provide a pitch deck document");
}

  const onSubmit = async (e) => {
    
      e.preventDefault();
      if(stateAuth.startupData?.pitchDeck?.pitchDeckFile !== null ||
         stateAuth.startupData?.pitchDeck?.pitchDeckVideo !== null
         ){
        updateStartupInfo();
        return ;
      }
      toast.error("Please provide a pitch deck document")
   
  };

  return (
    <>
      <HeaderPitch>
        <h5 style={{ color: "#2E3192" }}>Pitch Deck</h5>
        <p>Let's get to know your startup</p>
      </HeaderPitch>
      <form style={{ marginBottom: "4rem" }} onSubmit={onSubmit}>
        <FormWrapper>
          <div className="div">
            <span>Pitch Deck</span>
            <p className="pt-3">
              A brief presentation and overview about you startup. It can be a
              pdf, powerpoint presentation or keynote document
            </p>

            <hr />

            <div className="row">
              <div className="form-group col-12">
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
                  initData={stateAuth.startupData?.pitchDeck?.pitchDeckFile ? [stateAuth.startupData?.pitchDeck?.pitchDeckFile] : []}
                  onUpload={async (filesInfo) => {
                    const formData = new FormData();
                    formData.append("dir", "kv");
                    formData.append("ref", stateAuth.user?.userId);
                    formData.append("type", "pdf");
                    formData.append(0, filesInfo[0]?.file);

                    const response = await upload(formData);
                    console.log(response);
                    updateProfile("pitchDeck", {
                    pitchDeckFile:response?.path
                  })
                   
                  }}
                />
                
              </div>
              <div className="form-group col-12 mt-3">
               
                <UploadFile
                  data={{
                    maxFiles: 1,
                    supportedMimeTypes: ["video/mp4"],
                    maxFileSize: 10,
                    extension: "MB",
                  }}
                  initData={stateAuth.startupData?.pitchDeck?.pitchDeckVideo ? [stateAuth.startupData?.pitchDeck?.pitchDeckVideo] : []}
                  onUpload={async (filesInfo) => {
                    const formData = new FormData();
                    formData.append("dir", "kv");
                    formData.append("ref", stateAuth.user?.userId);
                    formData.append("type", "video");
                    formData.append(0, filesInfo[0]?.file);
                    const response = await upload(formData);
                   // setVidDoc(response?.path);
                    updateProfile("pitchDeck", {
                    pitchDeckVideo:response?.path
                  })
                  }}
                />
          
              </div>
            </div>
          </div>
        </FormWrapper>
        <div className="row ">
          <div className="col-3">
            <CustomButton className="" background="#808080" onClick={back}>
              Back
            </CustomButton>
          </div>
          <div className="col-9 d-flex justify-content-end">
            <CustomButton
              type="button"
              disabled={loading}
              onClick={(e) => onSubmit(e)}
              className="mx-2"
              background="#00ADEF"
            >
              {loading ? <CircularLoader /> : "Save"}
            </CustomButton>
            <div className="">
              <CustomButton
                onClick={onNext}
                type="button"
                background="#2E3192"
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
