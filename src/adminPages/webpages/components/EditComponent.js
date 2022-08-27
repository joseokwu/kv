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
import DragAndDrop from '../../../components/dragAndDrop/DragAndDrop';
import { upload } from '../../../services';

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
  const [files, setFiles] = useState();
  const [previewFile, setPreviewFile] = useState();
  const [file, setFile] = useState();

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
          mainTexts[i].text = e.target.value;
        }
      }
    }
    setTexts(mainTexts);
  };
  const handleImages = (e, i) => {
    let tempList = [...images];
    console.log(e);
    tempList[i] = e;
    setFile(URL.createObjectURL(e));
    setImages([...tempList]);
  };

  const deleteHeader = (i) => {
    const newVal = headers.filter((item, index) => index !== i);

    setHeaders((prev) => newVal);
  };

  const deleteText = (i) => {
    const newVal = texts.filter((item, index) => index !== i);
    setTexts((prev) => newVal);
  };

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
    console.log(filesInfo);
    handleImages(filesInfo, index);
    try {
      const response = await upload(formData);
      console.log(response);
      setFile(response?.path);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    if (
      sections.length > 0 &&
      sections[sectionIndex].length > 0 &&
      Object.keys(sections[sectionIndex][columnIndex]['components']).length > 0
    ) {
      setHeaders(sections[sectionIndex][columnIndex]['components']['headers']);
      setTexts(sections[sectionIndex][columnIndex]['components']['texts']);
      setImages(sections[sectionIndex][columnIndex]['components']['images']);
    }
  }, [sections, sectionIndex, columnIndex]);

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
            <h4 onClick={() => console.log(headers, texts)}>Header</h4>
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
                  value={item?.key}
                  // name={`headerKey${i}`}
                  required={false}
                  onChange={(e) => handleHeaders(e, 'key', i)}
                />
                <span className='w-50'>
                  <TextField
                    label={i === 0 ? 'Main Title' : 'Subtitle'}
                    className='max_fill mb-2'
                    value={item?.title}
                    // name={`headerTitle${i}`}
                    required={false}
                    onChange={(e) => handleHeaders(e, 'title', i)}
                  />
                </span>
                <img
                  className='ml-2'
                  src={deleteIcon}
                  alt='delete'
                  onClick={(e) => deleteHeader(i)}
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
                  value={item?.key}
                  // name={`textKey${i}`}
                  required={false}
                  onChange={(e) => handleTexts(e, 'key', i)}
                />
                <span className='w-50'>
                  <Form.Item initialValue={item?.text}>
                    <TextArea
                      label='Text'
                      className='max_fill mb-1'
                      value={item?.text}
                      rows='4'
                      onChange={(e) => handleTexts(e, 'text', i)}
                    />
                  </Form.Item>
                </span>
                <img
                  className='ml-2 cursor'
                  src={deleteIcon}
                  alt='delete'
                  onClick={() => deleteText(i)}
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
                  <DragAndDrop
                    index={i}
                    handleUpload={handleUpload}
                    image={handleFiles(item).toString()}
                  ></DragAndDrop>
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
