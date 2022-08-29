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
import { MdAlarmOn } from 'react-icons/md';
import cuid from 'cuid';

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
  setSections,
  data,
  setData,
}) => {
  const [loading, setLoading] = useState();
  const [files, setFiles] = useState();
  const [previewFile, setPreviewFile] = useState();
  const [file, setFile] = useState();

  const handleHeaders = ({ e, value, i, oldVal }) => {
    let mainHeaders = [...headers];
    let tempSections = [...sections];
    let tempData = { ...data };

    for (let k in tempData) {
      if (k === oldVal) {
        console.log(k, oldVal);
        if (value === 'key') {
          tempData[e.target.value] = tempData[k];
          delete tempData[k];
        } else {
          tempData[oldVal] = e.target.value;
        }
      }
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
    setData(tempData);
    setHeaders(mainHeaders);
  };
  const handleTexts = ({ e, value, i, oldVal }) => {
    let mainTexts = [...texts];
    let tempData = { ...data };

    for (let k in tempData) {
      if (k === oldVal) {
        console.log(k, oldVal);
        if (value === 'key') {
          tempData[e.target.value] = tempData[k];
          delete tempData[k];
        } else {
          tempData[oldVal] = e.target.value;
        }
      }
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
    let mainImages = [...images];

    for (let index = 0; index < images.length; index++) {
      if (index === i) {
        // mainImages[i].key = cuid();
        mainImages[i].image = e;
      }
    }
    setImages(mainImages);
  };
  // const handleImages = (e, i) => {
  //   let tempList = [...images];
  //   tempList[i] = e;
  //   setImages([...tempList]);
  // };

  const deleteHeader = (i, oldVal) => {
    let tempData = { ...data };
    for (let k in tempData) {
      if (k === oldVal) {
        delete tempData[k];
      }
    }
    const newVal = headers.filter((item, index) => index !== i);
    setHeaders((prev) => newVal);
    setData(tempData);
  };

  const deleteText = (i, oldVal) => {
    let tempData = { ...data };
    for (let k in tempData) {
      if (k === oldVal) {
        delete tempData[k];
      }
    }
    const newVal = texts.filter((item, index) => index !== i);
    setTexts((prev) => newVal);
    setData(tempData);
  };

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
    // setFileUploading(true);
    try {
      const response = await upload(formData);
      console.log(response?.path);
      setFile(response?.path);
      handleImages(response?.path, index);
    } catch (error) {
      toast.error(error?.response?.data?.message ?? 'Unable to upload image');
    }
    // setFileUploading(false);
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
      setData(sections[sectionIndex][columnIndex]['data']);
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
            <h4 onClick={() => console.log(data)}>Header</h4>
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
                  onChange={(e) =>
                    handleHeaders({
                      e: e,
                      value: 'key',
                      i: i,
                      oldVal: item?.key,
                    })
                  }
                />
                <span className='w-50'>
                  <TextField
                    label={i === 0 ? 'Main Title' : 'Subtitle'}
                    className='max_fill mb-2'
                    value={item?.title}
                    // name={`headerTitle${i}`}
                    required={false}
                    onChange={(e) =>
                      handleHeaders({
                        e: e,
                        value: 'title',
                        i: i,
                        oldVal: item?.key,
                      })
                    }
                  />
                </span>
                <img
                  className='ml-2'
                  src={deleteIcon}
                  alt='delete'
                  onClick={(e) => deleteHeader(i, item?.key)}
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
                  onChange={(e) =>
                    handleTexts({
                      e: e,
                      value: 'key',
                      i: i,
                      oldVal: item?.key,
                    })
                  }
                />
                <span className='w-50'>
                  <Form.Item initialValue={item?.text}>
                    <TextArea
                      label='Text'
                      className='max_fill mb-1'
                      value={item?.text}
                      rows='4'
                      onChange={(e) =>
                        handleTexts({
                          e: e,
                          value: 'text',
                          i: i,
                          oldVal: item?.text,
                        })
                      }
                    />
                  </Form.Item>
                </span>
                <img
                  className='ml-2 cursor'
                  src={deleteIcon}
                  alt='delete'
                  onClick={() => deleteText(i, item?.key)}
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
              onClick={() => setImages([...images, { key: '', image: '' }])}
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
                    image={item?.image}
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
