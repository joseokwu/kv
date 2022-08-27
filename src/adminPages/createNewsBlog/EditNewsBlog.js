import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import { Button, GoBack, Select, TextArea, TextField } from '../../components';
import download from '../../assets/icons/download.svg';
import searchIcon from '../../assets/icons/searchSm.svg';
import closeIcon from '../../assets/icons/closesm.svg';
import styles from './createNewsBlog.module.css';
// import { debounce } from "lodash";
import { search, createAssignment, getBlog } from '../../services';
import { mergeDateTime } from '../../utils/helpers';
import { useAuth } from '../../hooks';
import { UploadFile } from '../../components';
import { UploadProgramInfo } from '../programs/components/UploadProgramInfo';
import { upload } from '../../services';
import DragAndDrop from '../../components/dragAndDrop/DragAndDrop';
import { useHistory } from 'react-router-dom';
// import updateProfile

export const CreateNewsBlog = () => {
  const { stateAuth } = useAuth();
  const [previewFile, setPreviewFile] = useState();
  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [body, setBody] = useState();

  const {
    location: { hash, state },
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
    const formData = new FormData();
    formData.append('dir', 'kv');
    formData.append('ref', Date.now().toString());
    formData.append('type', 'pdf');
    formData.append(0, filesInfo[0]?.file);
    setFile(filesInfo);
    console.log(filesInfo);
    try {
      const response = await upload(formData);
      console.log(response);
      setFile(response?.path);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    if (state?.id) {
      const getData = async () => {
        const res = await getBlog(state?.id);
      };
      setTitle();
      setDate();
      setBody();
      setFile();
    }
  });

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
            <TextArea
              label='body'
              className='max_fill mb-4'
              rows='5'
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Item>
          <div>
            <h5>Upload Image</h5>
            <p className='mb-4 w-75'>
              File types supported: JPG, PNG, GIF, SVG... Max size: 1 MB
            </p>
          </div>

          <DragAndDrop
            setFiles={previewFile}
            image={handleFiles(file).toString()}
            handleUpload={handleUpload}
          ></DragAndDrop>
        </section>

        <section className={`d-flex justify-content-end ${styles.btnWrapper}`}>
          <Button label='Cancel' variant='gray' onClick={() => goBack()} />
          <Button
            label='Create'
            variant='secondary'
            type='Submit'
            onClick={() => console.log(title, date, body)}
          />
        </section>
      </Form>
    </div>
  );
};
