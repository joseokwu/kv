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
import { hasAccess } from '../../../utils/variables';
import { Warning1 } from './Warning1';

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
  const [modal, setModal] = useState();
  const [deleteProps, setDeleteProps] = useState({
    ind: '',
    key: '',
    path: '',
  });

  const handleHeaders = ({ e, value, i, oldVal }) => {
    let mainHeaders = [...headers];
    let tempData = { ...data };

    for (let k in tempData) {
      if (k === oldVal) {
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
    console.log(e.target.value, value, i, oldVal);
    let mainTexts = [...texts];
    let tempData = { ...data };

    for (let k in tempData) {
      if (k === oldVal) {
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
    setData(tempData);
    setTexts(mainTexts);
  };

  const handleImages = (e, i) => {
    let mainImages = [...images];

    for (let index = 0; index < images.length; index++) {
      if (index === i) {
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

  const handleDelete = () => {
    if (deleteProps.path === 'header') {
      let tempData = { ...data };

      delete tempData[deleteProps.key];

      const newVal = headers.filter((item, index) => index !== deleteProps.ind);
      setHeaders((prev) => newVal);
      setData(tempData);
      toast.success('Header Deleted');
    }
    if (deleteProps.path === 'text') {
      let tempData = { ...data };

      delete tempData[deleteProps.key];

      const newVal = texts.filter((item, index) => index !== deleteProps.ind);
      setTexts((prev) => newVal);
      setData(tempData);
      toast.success('Text Deleted');
    }
    setModal(false);
  };

  // const deleteHeader = (i, oldVal) => {
  //   let tempData = { ...data };

  //   delete tempData[oldVal];

  //   const newVal = headers.filter((item, index) => index !== i);
  //   setHeaders((prev) => newVal);
  //   setData(tempData);
  //   toast.success('Header Deleted');
  // };

  // const deleteText = (i, oldVal) => {
  //   let tempData = { ...data };

  //   delete tempData[oldVal];

  //   const newVal = texts.filter((item, index) => index !== i);
  //   setTexts((prev) => newVal);
  //   setData(tempData);
  //   toast.success('Text Deleted');
  // };

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
      sections[sectionIndex][columnIndex] &&
      sections[sectionIndex][columnIndex]['components'] &&
      Object.keys(sections[sectionIndex][columnIndex]['components']).length > 0
    ) {
      setHeaders(sections[sectionIndex][columnIndex]['components']['headers']);
      setTexts(sections[sectionIndex][columnIndex]['components']['texts']);
      setImages(sections[sectionIndex][columnIndex]['components']['images']);
      setData(sections[sectionIndex][columnIndex]['data']);
    }
  }, [sections, sectionIndex, columnIndex]);

  return (
    <div className='px-4 position-relative e-transition'>
      {modal && <Warning1 setModal={setModal} handleDelete={handleDelete} />}
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
            <h4>Header</h4>
            {hasAccess && (
              <button
                className={styles.textButton2}
                onClick={() => setHeaders([...headers, { key: '', title: '' }])}
              >
                Add Header+
              </button>
            )}
          </div>
          {headers.map((item, i) => {
            return (
              <div key={i} className='d-flex  gap-2 my-4'>
                {hasAccess && (
                  <TextField
                    disabled={!hasAccess}
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
                )}
                <span className={`${hasAccess ? 'w-50' : styles.textWidth} `}>
                  <TextField
                    label={
                      !hasAccess
                        ? item?.key
                        : i === 0
                        ? 'Main Title'
                        : 'Subtitle'
                    }
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
                {hasAccess && (
                  <img
                    className='ml-2'
                    src={deleteIcon}
                    role='button'
                    alt='delete'
                    onClick={() => {
                      setModal(true);
                      setDeleteProps({
                        ...deleteProps,
                        ind: i,
                        path: 'header',
                        key: item?.key,
                      });
                    }}
                    // onClick={(e) => deleteHeader(i, item?.key)}
                  />
                )}
              </div>
            );
          })}
        </section>
        <hr className='mb-4' />
        <section className='my-4'>
          <div className='d-flex justify-content-between'>
            <h4>Text</h4>
            {hasAccess && (
              <button
                className={styles.textButton2}
                onClick={() => setTexts([...texts, { key: '', text: '' }])}
              >
                Add Text+
              </button>
            )}
          </div>
          {texts.map((item, i) => {
            return (
              <div className='d-flex  gap-2 my-4' key={i}>
                {hasAccess && (
                  <TextField
                    disabled={!hasAccess}
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
                )}
                <span className={`${hasAccess ? 'w-50' : styles.textWidth} `}>
                  <Form.Item initialValue={item?.text}>
                    <TextArea
                      label={hasAccess ? 'Text' : item?.key}
                      className='max_fill mb-1'
                      value={item?.text}
                      rows='4'
                      onChange={(e) =>
                        handleTexts({
                          e: e,
                          value: 'text',
                          i: i,
                          oldVal: item?.key,
                        })
                      }
                    />
                  </Form.Item>
                </span>
                {hasAccess && (
                  <img
                    className='ml-2'
                    src={deleteIcon}
                    alt='delete'
                    role='button'
                    onClick={() => {
                      setModal(true);
                      setDeleteProps({
                        ...deleteProps,
                        ind: i,
                        path: 'text',
                        key: item?.key,
                      });
                    }}
                    // onClick={() => deleteText(i, item?.key)}
                  />
                )}
              </div>
            );
          })}
        </section>
        <hr className='mb-4' />
        <section className=' my-4'>
          <div className='d-flex justify-content-between'>
            <h4>Image</h4>
            {hasAccess && (
              <button
                className={styles.textButton2}
                onClick={() => setImages([...images, { key: '', image: '' }])}
              >
                Add Image+
              </button>
            )}
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
