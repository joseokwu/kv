import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import { Button, GoBack, Select, TextArea, TextField } from '../../components';
import download from '../../assets/icons/download.svg';
import searchIcon from '../../assets/icons/searchSm.svg';
import closeIcon from '../../assets/icons/closesm.svg';
import styles from './createNewsBlog.module.css';
// import { debounce } from "lodash";
import { search, createAssignment } from '../../services';
import { mergeDateTime } from '../../utils/helpers';
import { useAuth } from '../../hooks';
import { UploadFile } from '../../components';
import { UploadProgramInfo } from '../programs/components/UploadProgramInfo';
import { upload } from '../../services';
// import updateProfile

export const CreateNewsBlog = () => {
  const { stateAuth } = useAuth();

  return (
    <div className='py-5 px-5'>
      <GoBack />
      <Form>
        <section className={`mt-4 ${styles.createProgram}`}>
          <h3 className='border-bottom pb-4'>Create News/Blog</h3>
          <div className='d-flex justify-content-between'>
            <span className='w-75'>
              <TextField
                label='Title'
                className='max_fill mb-4'
                name='title'
                required={false}
              />
            </span>

            <TextField
              label='Publish Date'
              className='mb-4'
              name='date'
              required={false}
              type='date'
            />
          </div>

          <Form.Item name='description'>
            <TextArea label='body' className='max_fill mb-4' rows='5' />
          </Form.Item>
          <div>
            <h5>Upload Image</h5>
            <p className='mb-4 w-75'>
              File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
              OGG, GLB, GLTF. Max size: 100 MB
            </p>
          </div>

          <UploadFile
            data={{
              maxFiles: 1,
              supportedMimeTypes: ['application/pdf'],
              maxFileSize: 100,
              extension: 'MB',
            }}
            initData={[]}
            onUpload={async (filesInfo) => {
              const formData = new FormData();
              formData.append('dir', 'kv');
              formData.append('ref', stateAuth.user?.userId);
              formData.append('type', 'pdf');
              formData.append(0, filesInfo[0]?.file);

              const response = await upload(formData);
              console.log(response);
              //   setFile(response?.path);
            }}
          />
        </section>

        <section className={`d-flex justify-content-end ${styles.btnWrapper}`}>
          <Button label='Cancel' variant='gray' />
          <Button label='Create' variant='secondary' type='Submit' />
        </section>
      </Form>
    </div>
  );
};
