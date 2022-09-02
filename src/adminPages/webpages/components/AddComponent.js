import React, { useEffect, useState } from 'react';
import { Button, TextArea, TextField } from '../../../components';
import styles from '../webpages.module.css';
import { Form } from 'antd';
import toast from 'react-hot-toast';
import deleteIcon from '../../../assets/icons/del-red.svg';
import DragAndDrop from '../../../components/dragAndDrop/DragAndDrop';
import { upload } from '../../../services';
import cuid from 'cuid';
import { hasAccess } from '../../../utils/variables';
import { Modal } from '../../../components';
import { Warning1 } from './Warning1';

export const AddComponent = ({
  headers,
  setHeaders,
  texts,
  setTexts,
  images,
  setImages,
  handleSubmit,
  sections,
}) => {
  const [loading, setLoading] = useState();
  const [deleteProps, setDeleteProps] = useState({
    ind: '',
    key: '',
    path: '',
  });
  const [modal, setModal] = useState();
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
        mainImages[i].key = cuid();
        mainImages[i].image = e;
      }
    }
    setImages(mainImages);
  };

  const handleDelete = () => {
    if (deleteProps.path === 'header') {
      delete headers[deleteProps.key];
      const newVal = headers.filter((item, index) => index !== deleteProps.ind);

      setHeaders((prev) => newVal);
      toast.success('Header Deleted');
    }
    if (deleteProps.path === 'text') {
      delete texts[deleteProps.key];
      const newVal = texts.filter((item, index) => index !== deleteProps.ind);
      setTexts((prev) => newVal);
      toast.success('Text Deleted');
    }
    setModal(false);
  };

  // const deleteHeader = (i, key) => {
  //   delete headers[key];
  //   const newVal = headers.filter((item, index) => index !== i);

  //   setHeaders((prev) => newVal);
  //   toast.success('Header Deleted');
  // };

  // const deleteText = (i, key) => {
  //   delete texts[key];
  //   const newVal = texts.filter((item, index) => index !== i);
  //   setTexts((prev) => newVal);
  //   toast.success('Text Deleted');
  // };

  // const handleFiles = (value) => {
  //   if (value) {
  //     return URL.createObjectURL(value);
  //   } else {
  //     return '';
  //   }
  // };

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

  return (
    <div className='px-4 position-relative e-transition'>
      {modal && <Warning1 setModal={setModal} handleDelete={handleDelete} />}

      <Form
        name='Add Component'
        initialValues={{
          remember: true,
        }}
        layout='vertical'
        // onFinish={onSubmit}
      >
        <section className=' my-4'>
          <div className='d-flex justify-content-between'>
            <h4>Header</h4>
            <button
              className={styles.textButton2}
              onClick={() => {
                setHeaders([...headers, { key: '', title: '' }]);
              }}
            >
              Add Header+
            </button>
          </div>
          {headers?.map((item, i) => {
            return (
              <div key={i} className='d-flex  gap-2 my-4'>
                <TextField
                  label='Key'
                  className='max_fill mb-2'
                  // name={`headerKey${i}`}
                  value={item?.key}
                  required={false}
                  onChange={(e) => handleHeaders(e, 'key', i)}
                />
                <span className='w-50'>
                  <TextField
                    label={i === 0 ? 'Main Title' : 'Subtitle'}
                    className='max_fill mb-2'
                    // name={`headerTitle${i}`}
                    value={item?.title}
                    required={false}
                    onChange={(e) => handleHeaders(e, 'title', i)}
                  />
                </span>
                <img
                  className='ml-2'
                  src={deleteIcon}
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
                  // onClick={() => deleteHeader(i, item?.key)}
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
              onClick={() => {
                setTexts([...texts, { key: '', text: '' }]);
              }}
            >
              Add Text+
            </button>
          </div>
          {texts?.map((item, i) => {
            return (
              <div className='d-flex  gap-2 my-4' key={i}>
                <TextField
                  label='Key'
                  className='max_fill mb-1'
                  // name={`textKey${i}`}
                  value={item?.key}
                  required={false}
                  onChange={(e) => handleTexts(e, 'key', i)}
                />
                <span className='w-50'>
                  <Form.Item>
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
                  className='ml-2'
                  src={deleteIcon}
                  alt='delete'
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
                    // setFiles={handleImages}
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
