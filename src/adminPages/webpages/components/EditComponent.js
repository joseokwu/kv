import React, { useEffect, useState } from 'react';
import {
  Button,
  Select,
  TextArea,
  TextField,
  UploadFile,
} from '../../../components';
import styles from '../webpages.module.css';
import { Form } from 'antd';
import toast from 'react-hot-toast';
import deleteIcon from '../../../assets/icons/del-red.svg';
import { CircularLoader } from '../../../components/CircluarLoader';
import { TimePicker } from 'antd';
import moment from 'moment';

export const EditComponent = ({
  headers,
  setHeaders,
  texts,
  setTexts,
  images,
  setImages,
  handleSubmit,
  sections,
  sectionIndex,
  columnIndex,
}) => {
  const [loading, setLoading] = useState();

  const handleHeaders = (e, value, i) => {
    let mainHeaders = [...headers];
    if (mainHeaders.length < i + 1) {
    }

    for (let index = 0; index < headers.length; index++) {
      if (index === i) {
        if (value === 'key') {
          mainHeaders[i].key = e.target.value;
        }
        if (value === 'title') {
          mainHeaders[i].title = e.target.value;
        }
      }
    }
    setHeaders(mainHeaders);
  };
  const handleTexts = (e, value, i) => {
    let mainTexts = [...texts];
    if (mainTexts.length < i + 1) {
    }

    for (let index = 0; index < texts.length; index++) {
      if (index === i) {
        if (value === 'key') {
          mainTexts[i].key = e.target.value;
        }
        if (value === 'text') {
          mainTexts[i].title = e.target.value;
        }
      }
    }
    setTexts(mainTexts);
  };
  const handleImages = (e, i) => {
    const tempList = [...images];
    console.log(e);
    tempList[i] = e;

    setImages([...tempList]);
  };

  const deleteItem = (part, i) => {
    if (part === 'header') {
      const newVal = headers.filter((item, index) => index !== i);
      setHeaders([...newVal]);
    }
    if (part === 'text') {
      const newVal = texts.filter((item, index) => index !== i);
      setTexts([...newVal]);
    }
  };

  useEffect(() => {
    if (
      sections.length > 0 &&
      sections[sectionIndex].length > 0 &&
      Object.keys(sections[sectionIndex][columnIndex]).length > 0
    ) {
      setHeaders(sections[sectionIndex][columnIndex]['headers'] ?? []);
      setTexts(sections[sectionIndex][columnIndex]['texts'] ?? []);
      setImages(sections[sectionIndex][columnIndex]['images'] ?? []);
    }
  }, [sections]);

  return (
    <div className='px-4'>
      <Form
        name='Edit Component'
        initialValues={{
          remember: true,
        }}
        layout='vertical'
        // onFinish={onSubmit}
      >
        <section className=' my-4'>
          <div className='d-flex justify-content-between'>
            <h4 onClick={() => console.log(headers)}>Header</h4>
            <button
              className={styles.textButton2}
              onClick={() => setHeaders([...headers, { key: '', title: '' }])}
            >
              Add Header+
            </button>
          </div>
          {headers.map((item, i) => {
            return (
              <div key={i} className='d-flex  gap-2 my-4'>
                <TextField
                  label='Key'
                  className='max_fill mb-2'
                  defaultValue={item?.key}
                  // name={`headerKey${i}`}
                  required={false}
                  onChange={(e) => handleHeaders(e, 'key', i)}
                />
                <span className='w-50'>
                  <TextField
                    label={i === 0 ? 'Main Title' : 'Subtitle'}
                    className='max_fill mb-2'
                    defaultValue={item?.title}
                    // name={`headerTitle${i}`}
                    required={false}
                    onChange={(e) => handleHeaders(e, 'title', i)}
                  />
                </span>
                <img
                  className='ml-2'
                  src={deleteIcon}
                  alt='delete'
                  onClick={() => deleteItem('header', i)}
                />
              </div>
            );
          })}
        </section>
        <hr className='mb-4' />
        <section className='my-4'>
          <div className='d-flex justify-content-between'>
            <h4>Text</h4>
            <button
              className={styles.textButton2}
              onClick={() => setTexts([...texts, { key: '', text: '' }])}
            >
              Add Text+
            </button>
          </div>
          {texts.map((item, i) => {
            return (
              <div className='d-flex  gap-2 my-4' key={i}>
                <TextField
                  label='Key'
                  className='max_fill mb-1'
                  defaultValue={item?.key}
                  // name={`textKey${i}`}
                  required={false}
                  onChange={(e) => handleTexts(e, 'key', i)}
                />
                <span className='w-50'>
                  <Form.Item>
                    <TextArea
                      label='Text'
                      className='max_fill mb-1'
                      defaultValue={item?.text}
                      rows='4'
                      onChange={(e) => handleTexts(e, 'text', i)}
                    />
                  </Form.Item>
                </span>
                <img
                  className='ml-2'
                  src={deleteIcon}
                  alt='delete'
                  onClick={() => deleteItem('text', i)}
                />
              </div>
            );
          })}
        </section>
        <hr className='mb-4' />
        <section className=' my-4'>
          <div className='d-flex justify-content-between'>
            <h4>Image</h4>
            <button
              className={styles.textButton2}
              onClick={() => setImages([...images, ''])}
            >
              Add Image+
            </button>
          </div>
          <div className='d-flex  flex-wrap justify-content-between my-4'>
            {images.map((item, i) => {
              return (
                <span className={styles.upload} key={i}>
                  <UploadFile
                    data={{
                      maxFiles: 1,
                      supportedMimeTypes: ['image/png'],
                      maxFileSize: 100,
                      extension: 'MB',
                    }}
                    onUpload={(e) => handleImages(e, i)}
                    initData={[]}
                    // onUpload={async (filesInfo) => {
                    //   const formData = new FormData();
                    //   formData.append('dir', 'kv');
                    //   formData.append('ref', stateAuth.user?.userId);
                    //   formData.append('type', 'pdf');
                    //   formData.append(0, filesInfo[0]?.file);

                    //   const response = await upload(formData);
                    //   console.log(response);
                    //   //   setFile(response?.path);
                    // }}
                  />
                </span>
              );
            })}
          </div>
        </section>
        <section
          className={`d-flex gap-2 justify-content-start ${styles.btnWrapper}`}
        >
          <Button label='Cancel' data-dismiss='modal' variant='gray' />
          <Button
            label='Save'
            variant='primary'
            data-dismiss='modal'
            type='Submit'
            onClick={handleSubmit}
          />
        </section>
      </Form>
    </div>
  );
};
