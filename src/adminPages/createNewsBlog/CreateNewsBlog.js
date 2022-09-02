import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import {
  Button,
  GoBack,
  Select,
  TextArea,
  TextField,
  TipTap,
} from '../../components';
import download from '../../assets/icons/download.svg';
import searchIcon from '../../assets/icons/searchSm.svg';
import closeIcon from '../../assets/icons/closesm.svg';
import styles from './createNewsBlog.module.css';
// import { debounce } from "lodash";
import { search, createAssignment, createBlog } from '../../services';
import { mergeDateTime } from '../../utils/helpers';
import { useAuth } from '../../hooks';
import { UploadFile } from '../../components';
import { UploadProgramInfo } from '../programs/components/UploadProgramInfo';
import { upload } from '../../services';
import DragAndDrop from '../../components/dragAndDrop/DragAndDrop';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
// import updateProfile

export const CreateNewsBlog = () => {
  const { stateAuth } = useAuth();
  const [previewFile, setPreviewFile] = useState();
  const [file, setFile] = useState();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [body, setBody] = useState('');
  const [fileUploading, setFileUploading] = useState();

  const {
    location: { hash },
    goBack,
    replace,
  } = useHistory();

  const handleFiles = (value) => {
    if (value) {
      return URL.createObjectURL(value);
    } else {
      return '';
    }
  };

  const handleUpload = async ({ filesInfo, index }) => {
    const { files } = filesInfo.target;
    const formData = new FormData();

    formData.append('type', 'image');
    formData.append('file', files[0]);
    toast.success('Image uploaded successfully');

    try {
      const response = await upload(formData);
      setFile(response?.path);
    } catch (error) {
      toast.error(error?.response?.data?.message ?? 'Unable to upload image');
    }
  };

  const handleCreate = async () => {
    if (!title) {
      toast.error('Please provide page title');
      return;
    }
    if (!body) {
      toast.error('Please provide page body');
      return;
    }
    try {
      const res = await createBlog({
        title,
        body,
        viewed: 0,
        cover: file,
        publish: date,
      });

      toast.success('Blog Created');
      replace('/admin/webpages');
    } catch (error) {
      toast.success('Blog Creation Failed');
      console.log(error);
    }
  };

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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required={false}
              />
            </span>

            <TextField
              label='Publish Date'
              className='mb-4'
              name='date'
              onChange={(e) => setDate(e.target.value)}
              required={false}
              value={date}
              type='date'
            />
          </div>

          <Form.Item name='description'>
            <label className='' htmlFor=''>
              Body:
            </label>
            <TipTap setDescription={setBody} description={body} />
            {/* <TextArea
              label='Body'
              className='max_fill mb-4'
              rows='5'
              value={body}
              onChange={(e) => setBody(e.target.value)}
            /> */}
          </Form.Item>
          <div>
            <h5>Upload Image</h5>
            <p className='mb-4 w-75'>
              File types supported: JPG, PNG, GIF, SVG... Max size: 1 MB
            </p>
          </div>

          <DragAndDrop
            setFiles={previewFile}
            image={file}
            handleUpload={handleUpload}
          ></DragAndDrop>
        </section>

        <section className={`d-flex justify-content-end ${styles.btnWrapper}`}>
          <Button label='Cancel' variant='gray' onClick={() => goBack()} />
          <Button
            label='Create'
            variant='secondary'
            type='Submit'
            onClick={() => handleCreate()}
          />
        </section>
      </Form>
    </div>
  );
};
