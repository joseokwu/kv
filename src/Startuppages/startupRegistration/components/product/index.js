import React, { useState } from 'react';
import { HeaderProduct, FormWrapper, VideoWrapper } from './product.styled';
import { useActivity } from '../../../../hooks/useBusiness';
import RedFile from '../../../../assets/icons/redFile.svg';
import { CustomButton } from '../../../../Startupcomponents/button/button.styled';
import BlueFile from '../../../../assets/icons/bluFile.svg';
import { product } from './../../../../services/startUpReg';
import { formatBytes } from '../../../../utils/helpers';
import toast from 'react-hot-toast';
import { useAuth } from '../../../../hooks/useAuth';
import { updateFounderProfile } from '../../../../services';
import { UploadFile } from "../../../../components/uploadFile";
import { FileWrapper, FileText, LabelButton } from '../pitchdeck/pitch.styled';
import DownloadIcon from '../../../../assets/icons/download.svg';
import { CircularLoader } from '../../../../Startupcomponents/CircluarLoader/CircularLoader';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { upload } from '../../../../services/utils';
import { useHistory } from 'react-router-dom';

export const Product = () => {
  const [wordCount, setWordCount] = useState();
  const [descriptionCount, setDescriptionCount] = useState();

  const { updateProfile, stateAuth, updateStartupInfo } = useAuth();
  const [loading, setLoading] = useState(false);
  const [logoUploading, setLogoUploading] = useState(false);
  const [nextLoading, setnextLoading] = useState(false);
  const [opts, setOpts] = useState('');
  const [urls, setUrls] = useState(
    stateAuth?.startupData?.product?.youtubeDemoUrl ?? ''
  );
  const [youtube, setYoutube] = useState('');

  const history = useHistory();
  const handleChangeVids = (e) => {
    setYoutube(e.target.value);
  };

  const addVid = () => {

    setUrls(youtube);
    setYoutube('');
    updateProfile("product", {
      youtubeDemoUrl:youtube
    })
  };

  const removeVideo = () =>{
    setUrls('')
  }

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
    setLoading(true)
    updateStartupInfo();
    setLoading(false)
  }
     
   

  const formik = useFormik({
    initialValues: {
      description: stateAuth?.startupData?.product?.description ?? '',
      competitiveEdge: stateAuth?.startupData?.product?.competitiveEdge ?? '',
      youtubeDemoUrl: stateAuth?.startupData?.product?.youtubeDemoUrl ?? '',
      files: stateAuth?.startupData?.product?.files ?? '',
    },
    validationSchema: Yup.object({
      competitiveEdge: Yup.string()
        .min(500, 'Field must not be less than 200 characters')
        .max(1506, 'Field must not be above 250 characters')
        .required('Required'),
      description: Yup.string()
        .min(500, 'Field must not be less than 200 characters')
        .max(1506, 'Field must not be above 250 characters')
        .required('Required'),
    }),
    validateOnBlur: true,
    
  });

  const onCountdown = (e) => {
    const { value } = e.target;
    
    setWordCount(parseInt(value.length));
    formik.handleChange(e);
  };

  const onDescriptionCountdown = (e) => {
    const { value } = e.target;
    setDescriptionCount(parseInt(value.length));
    formik.handleChange(e);
  };

  const handleFullChange = (e, prefix = '') => {
    const { name, value } = e.target;
   
    if (prefix !== '') {
      updateProfile('product', {
        [prefix]: {
          ...stateAuth?.startupData?.startUpProfile[prefix],
          [name]: value,
        },
      });
      formik.handleChange(e);
      return;
    }
    updateProfile('product', { [name]: value });
    formik.handleChange(e);
  };


  return (
    <>
      <HeaderProduct>
        <h5 className='text-nowrap' style={{ color: '#2E3192' }}>
          {' '}
          Product / Services{' '}
        </h5>
        <p className='text-nowrap'>Let's help you explain your product</p>
      </HeaderProduct>
      <form style={{ marginBottom: '4rem' }}>
        <FormWrapper>
          <div className='div'>
            <span>Product / Service Description</span>
            <p className='pt-3'>A brief description of your product</p>

            <hr />

            <div className='row mt-4'>
              <div className='form-group col-12'>
                <div className='d-flex justify-content-between mt-2'>
                  <label>
                    Briefly describe the users of your product or services?
                  </label>
                  <label style={{ color: '#828282' }}>250 words</label>
                  <label
                    style={{ color: `${(250 - descriptionCount) === 0 ? '#896869' : 'red'}` }}
                  >
                    {descriptionCount > 0 &&
                      `${(250 - descriptionCount) === 0 ? '' : 250 - descriptionCount} ${(250 - descriptionCount) === 0 ? '' : 'remaining'}`}
                  </label>
                </div>
                <textarea
                  maxLength={250}
                  cols='5'
                  rows='5'
                  name='description'
                  className='form-control ps-3'
                  onChange={(e) => {
                    onDescriptionCountdown(e);
                    handleFullChange(e);
                  }}
                  value={formik.values.description}
                  onBlur={formik.handleBlur}
                  placeholder='Enter Brief info about your product'
                />
                {formik.touched.description && formik.errors.description ? (
                  <label style={{ color: 'red' }} className='error'>
                    {formik.errors.description}
                  </label>
                ) : null}
              </div>
              <div className='form-group col-12'>
                <div className='d-flex justify-content-between'>
                  <label>
                    What makes your solution unique from others in the market?
                    <span style={{ color: 'red' }}>*</span>
                  </label>
                 
                  <label style={{ color: '#828282' }}>250 words</label>
                  <label style={{ color: `${ (250 - wordCount ) === 0 ? '#896869' : 'red'}` }}>
                    {wordCount > 0 && `${(250 - wordCount) === 0 ? '' : 250 - wordCount } ${(250 - wordCount) === 0 ? '' : 'remaining'}`}
                  </label>
                </div>

                <textarea
                  cols='5'
                  rows='5'
                  maxLength={250}
                  name='competitiveEdge'
                  onChange={(e) => {
                    onCountdown(e);
                    handleFullChange(e);
                  }}
                  value={formik.values.competitiveEdge}
                  onBlur={formik.handleBlur}
                  className='form-control ps-3'
                  placeholder='Enter your uniqueness '
                />
                {formik.touched.competitiveEdge &&
                formik.errors.competitiveEdge ? (
                  <label style={{ color: 'red' }} className='error'>
                    {formik.errors.competitiveEdge}
                  </label>
                ) : null}
              </div>
            </div>
            <div className='form-group col-12 mt-3'>
              <label> Paste Youtube Link of product Demo </label>
              <div className='d-flex my-2'>
                <input
                  type='text'
                  name='youtubeDemoUrl'
                  onChange={handleChangeVids}
                  value={youtube}
                  className='form-control youtube-input ps-3'
                  placeholder='Youtube link'
                />
                <button type='button' className='button' onClick={addVid}>
                  Upload
                </button>
              </div>
              {
                    !urls.includes('https://youtu.be/')  ? (
                      
                <div className="form-group col-12 mt-3">
               
               <UploadFile
                 data={{
                   maxFiles: 1,
                   supportedMimeTypes: ["video/mp4"],
                   maxFileSize: 10,
                   extension: "MB",
                 }}
                 initData={stateAuth?.startupData?.product?.files ? [stateAuth.startupData?.product?.files] : []}
                 onUpload={async (filesInfo) => {
                   const formData = new FormData();
                   formData.append("dir", "kv");
                   formData.append("ref", stateAuth.user?.userId);
                   formData.append("type", "video");
                   formData.append(0, filesInfo[0]?.file);
                   const response = await upload(formData);
                  // setVidDoc(response?.path);
                   updateProfile("product", {
                    files:response?.path
                 })
                 }}
               />

               </div>
                    ):(

                <div className='form-group col-12'>
              <VideoWrapper>
              <div className='mb-2 d-flex justify-content-end'>
                    <button 
                    type="button"
                    onClick={removeVideo}
                    >
                    Delete
                    </button>
              </div>

      <iframe
       
        src={`https://www.youtube.com/embed/${urls.replace('https://youtu.be/', '')}`}
        frameborder='0'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; execution-while-not-rendered 'none'"
        allowfullscreen
        title='video'
        style={{
          borderRadius: '20px',
          maxHeight: '150px',
          width: '250px',
        }}
      />

</VideoWrapper>
</div>
                    )
                  }
            </div>
          
          </div>
        </FormWrapper>
        <div className='row mt-4'>
          <div className='col-3'>
            <CustomButton className='' background='#808080' onClick={back}>
              Back
            </CustomButton>
          </div>
          <div className='col-9 d-flex justify-content-end'>
            <CustomButton
              type='button'
              disabled={loading}
              className='mx-2'
              background='#00ADEF'
              onClick={() =>  onSubmit()}
            >
              {loading ? <CircularLoader /> : 'Save'}
            </CustomButton>
            <CustomButton
              type='button'
              onClick={()=> changePath(path + 1)}
              background='#2E3192'
            >
              Next
            </CustomButton>
          </div>
        </div>
      </form>
    </>
  );
};





























