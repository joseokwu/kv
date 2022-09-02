import React, { useEffect, useState, useRef } from 'react';
import { Form } from 'antd';
import {
  Button,
  GoBack,
  Modal,
  Select,
  TextArea,
  TextField,
} from '../../components';

import plusCircle from '../../assets/icons/plus-circle.svg';
import clip from '../../assets/icons/component.svg';
import closeIcon from '../../assets/icons/closesm.svg';
import styles from './createWebpage.module.css';
// import { debounce } from "lodash";
import { search, createAssignment } from '../../services';
import { mergeDateTime } from '../../utils/helpers';
import { useAuth } from '../../hooks';
import { UploadFile } from '../../components';
import { UploadProgramInfo } from '../programs/components/UploadProgramInfo';
import { upload, createPage } from '../../services';
import { AddComponent } from '../webpages/components/AddComponent';
import Item from 'antd/lib/list/Item';
import { useHistory } from 'react-router-dom';
import { EditComponent } from '../webpages/components/EditComponent';
import copy from '../../assets/icons/copy.svg';
import success from '../../assets/icons/success-check.svg';
import { logout } from '../../store/actions/auth';
import deleteIcon from '../../assets/icons/del-red.svg';
import toast from 'react-hot-toast';
import { Warning } from '../webpages/components/Warning';
// import updateProfile

export const CreateWebpage = () => {
  const { stateAuth } = useAuth();
  const [sections, setSections] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [texts, setTexts] = useState([]);
  const [images, setImages] = useState([]);
  const [headersEdit, setHeadersEdit] = useState([]);
  const [data, setData] = useState({});
  const [textsEdit, setTextsEdit] = useState([]);
  const [imagesEdit, setImagesEdit] = useState([]);
  const [columnIndex, setColumnIndex] = useState(0);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [pageTitle, setPageTitle] = useState('');
  const [check, setCheck] = useState(false);
  const [deleteProps, setDeleteProps] = useState({
    sectionInd: '',
    columnInd: '',
    path: '',
  });

  const {
    location: { hash },
    push,
    replace,
  } = useHistory();

  const handleSubmit = () => {
    let tempSections = [...sections];
    if (isEditing) {
      if (
        Object.keys(tempSections[sectionIndex][columnIndex]['components'])
          .length > 0
      ) {
        const isEmpty = findEmpty(headersEdit, textsEdit);
        if (isEmpty) {
          return;
        }
        const duplicates = findDuplicates(headersEdit, textsEdit);

        if (duplicates.length > 0) {
          return;
        }

        tempSections[sectionIndex][columnIndex]['data'] = data;

        tempSections[sectionIndex][columnIndex]['components'] = {
          headers: headersEdit,
          texts: textsEdit,
          images: imagesEdit,
        };
      }
      setIsEditing(false);
    } else {
      let obj = {};
      let trackHeader = false;
      let trackText = false;

      if (
        Object.keys(tempSections[sectionIndex][columnIndex]['components'])
          .length > 0
      ) {
        headers.map((v, _) => {
          if (v.key !== '') {
            if (
              Object.keys(
                tempSections[sectionIndex][columnIndex]['data']
              ).includes(v.key)
            ) {
              console.log('toast');
              toast.error(`Key ${v.key}  exists`);
              trackHeader = true;
              return;
            }
            obj[v.key] = v.title;
          } else {
            toast.error(`Key cannot be empty`);
            trackHeader = true;
            return;
          }
        });
        texts.map((v, _) => {
          if (v.key !== '') {
            if (
              Object.keys(
                tempSections[sectionIndex][columnIndex]['data']
              ).includes(v.key)
            ) {
              toast.error(`Key ${v.key}  exists`);
              trackText = true;
              return;
            }
            obj[v.key] = v.text;
          } else {
            toast.error(`Key cannot be empty`);
            trackText = true;
            return;
          }
        });

        images.map((v, _) => {
          obj[v.key] = v.image;
        });

        if (trackHeader || trackText) {
          return;
        }
        if (tempSections[sectionIndex][columnIndex]['components']) {
          let tempHeaders =
            tempSections[sectionIndex][columnIndex]['components']['headers'];
          let tempTexts =
            tempSections[sectionIndex][columnIndex]['components']['texts'];
          let tempImages =
            tempSections[sectionIndex][columnIndex]['components']['images'];
          tempHeaders = [...tempHeaders, ...headers];
          tempTexts = [...tempTexts, ...texts];
          tempImages = [...tempImages, ...images];
          tempSections[sectionIndex][columnIndex]['components'] = {
            headers: tempHeaders,
            texts: tempTexts,
            images: tempImages,
          };

          tempSections[sectionIndex][columnIndex]['data'] = {
            ...tempSections[sectionIndex][columnIndex]['data'],
            ...obj,
          };
        }
      } else {
        let obj = {};
        let trackEmptyHeader = false;
        let trackEmptyText = false;

        const duplicates = findDuplicates(headers, texts);

        if (duplicates.length > 0) {
          return;
        }

        headers.map((v, _) => {
          if (v.key !== '') {
            obj[v.key] = v.title;
          } else {
            toast.error(`Key cannot be empty`);
            trackEmptyHeader = true;
            return;
          }
        });
        texts.map((v, _) => {
          if (v.key !== '') {
            obj[v.key] = v.text;
          } else {
            toast.error(`Key cannot be empty`);
            trackEmptyText = true;
            return;
          }
        });

        images.map((v, _) => {
          obj[v.key] = v.image;
        });

        if (trackEmptyHeader || trackEmptyText) {
          return;
        }

        tempSections[sectionIndex][columnIndex]['components'] = {
          headers: headers,
          texts: texts,
          images: images,
        };

        tempSections[sectionIndex][columnIndex]['data'] = obj;
      }
    }

    setSections(tempSections);

    setHeaders([]);
    setTexts([]);
    setImages([]);
    setHeadersEdit([]);
    setTextsEdit([]);
    setImagesEdit([]);
    setData({});
  };

  const getColumnLength = (column) => {
    let total = 0;
    Object.values(column).forEach((val) => (total += val.length));

    return total;
  };

  const findEmpty = (headers, texts) => {
    let isEmpty = false;

    for (let index = 0; index < headers.length; index++) {
      if (headers[index].key === '') {
        toast.error(`Please check for empty keys`);
        isEmpty = true;
        return;
      }
    }

    for (let index = 0; index < texts.length; index++) {
      if (texts[index].key === '') {
        toast.error(`Please check for empty keys`);
        isEmpty = true;
        return;
      }
    }

    return isEmpty;
  };

  const findDuplicates = (headers, texts) => {
    let tempArray = [];
    let tempArray2 = [];
    let duplicates = [];
    for (let index = 0; index < headers.length; index++) {
      tempArray.push(headers[index].key);
    }

    for (let index = 0; index < texts.length; index++) {
      tempArray.push(texts[index].key);
    }

    for (let index = 0; index < tempArray.length; index++) {
      if (tempArray2.includes(tempArray[index])) {
        toast.error(`${tempArray[index]} has a duplicate`);
        duplicates.push(tempArray[index]);
      } else {
        tempArray2.push(tempArray[index]);
      }
    }

    return duplicates;
  };

  const handleCreate = async (e) => {
    if (pageTitle.length <= 0) {
      toast.error('The page must have a Title');
      return;
    }
    if (sections.length <= 0) {
      toast.error('Please add a section');
      return;
    }

    // let tempSections = [...sections]
    // for (let index = 0; index < sections.length; index++) {
    //   const element = tempSections[index];

    // }
    const details = {
      title: pageTitle,
      data: JSON.stringify(sections),
    };
    try {
      const res = await createPage(details);
      console.log(res);
      replace('/admin/webpages');
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleDelete = () => {
    if (deleteProps.path === 'section') {
      let tempSections = [...sections];

      tempSections.splice(deleteProps.sectionInd, 1);

      setSections(tempSections);
      toast.success('Section Deleted');
    }
    if (deleteProps.path === 'column') {
      let tempSections = [...sections];

      tempSections[deleteProps.sectionInd]?.splice(deleteProps.columnInd, 1);

      setSections([...tempSections]);
      toast.success('Column Deleted');
    }
  };

  useEffect(() => {
    let timer;
    if (check) {
      timer = setTimeout(() => {
        setCheck(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [check]);

  return (
    <div className='py-5 px-5'>
      <Modal id='warning' title='Warning' width={568}>
        <Warning handleDelete={handleDelete} />
      </Modal>
      <Modal id='addComponent' title='Add Component' width={568}>
        <AddComponent
          headers={headers}
          setHeaders={setHeaders}
          texts={texts}
          setTexts={setTexts}
          images={images}
          setImages={setImages}
          handleSubmit={handleSubmit}
          sections={sections}
          columnIndex={columnIndex}
        />
      </Modal>
      <Modal id='editComponent' title='Edit Component' width={568}>
        <EditComponent
          headers={headersEdit}
          setHeaders={setHeadersEdit}
          texts={textsEdit}
          setTexts={setTextsEdit}
          images={imagesEdit}
          setImages={setImagesEdit}
          handleSubmit={handleSubmit}
          columnIndex={columnIndex}
          sections={sections}
          setSections={setSections}
          sectionIndex={sectionIndex}
          data={data}
          setData={setData}
        />
      </Modal>
      <Modal id='viewJson' title='Json Data' width={568}>
        <div className={styles.json}>
          <pre>{JSON.stringify(sections, null, 2)}</pre>
        </div>
      </Modal>
      <GoBack />
      <Form>
        <section className={`mt-4 ${styles.createProgram}`}>
          <div className={styles.heading}>
            <h3 className='border-bottom pb-4'>Create Webpage</h3>
            <p
              className={`view-link`}
              role='button'
              data-toggle='modal'
              data-target={`#viewJson`}
            >
              View Json
            </p>
          </div>
          <TextField
            label='Page Title'
            className='max_fill mb-4'
            name='title'
            onChange={(e) => setPageTitle(e.target.value)}
            required={false}
          />

          {sections?.map((section, ind) => {
            return (
              <div className={styles.componentContainer} key={ind}>
                <div className={styles.componentHeader}>
                  <h5 className='mb-5'>Section</h5>
                  <img
                    className='ml-2'
                    src={deleteIcon}
                    role='button'
                    height={20}
                    width={20}
                    alt='delete'
                    data-toggle='modal'
                    data-target={`#warning`}
                    onClick={() =>
                      setDeleteProps({
                        ...deleteProps,
                        sectionInd: ind,
                        path: 'section',
                      })
                    }
                  />
                </div>

                <div className='d-flex flex-wrap gap-2'>
                  {section?.map((column, i) => {
                    return (
                      <div className={styles.subContainer} key={i}>
                        {getColumnLength(column['components']) > 0 ? (
                          <div className={styles.subLeft}>
                            <span className='d-flex mb-2'>
                              <h6 className='mr-2'>
                                Components -{' '}
                                {getColumnLength(column['components'])}
                              </h6>
                              <span className={styles.referral}>
                                <img
                                  src={copy}
                                  height={20}
                                  width={20}
                                  alt={'copy'}
                                  onClick={() => {
                                    navigator.clipboard.writeText(
                                      JSON.stringify(column['components'])
                                    );
                                    setCheck(true);
                                  }}
                                />
                                {check && (
                                  <span className={styles.good}>
                                    <img
                                      src={success}
                                      height={18}
                                      width={18}
                                      alt={'copy'}
                                    />
                                  </span>
                                )}
                              </span>
                            </span>
                            <h6 className='mb-2'>Id : {i}</h6>
                            <hr />
                            <span>
                              <div className='d-flex align-items-center justify-content-between'>
                                <p
                                  className='view-link'
                                  role='button'
                                  data-toggle='modal'
                                  data-target={`#editComponent`}
                                  onClick={() => {
                                    setColumnIndex(i);
                                    setSectionIndex(ind);
                                    setIsEditing(true);
                                  }}
                                >
                                  Edit
                                </p>
                                <img
                                  className='ml-2'
                                  role='button'
                                  src={deleteIcon}
                                  alt='delete'
                                  data-toggle='modal'
                                  data-target={`#warning`}
                                  onClick={() =>
                                    setDeleteProps({
                                      sectionInd: ind,
                                      columnInd: i,
                                      path: 'column',
                                    })
                                  }
                                />
                              </div>
                            </span>
                          </div>
                        ) : (
                          ''
                        )}
                        {getColumnLength(column['components']) <= 0 && (
                          <div key={i} className={styles.addComponent}>
                            <img
                              className={styles.img}
                              src={plusCircle}
                              alt='plus'
                              width={20}
                            />
                            <button
                              onClick={() => {
                                setIsEditing(false);
                                setColumnIndex(i);
                                setSectionIndex(ind);
                              }}
                              className={styles.textButton}
                              data-toggle='modal'
                              data-target={`#addComponent`}
                            >
                              Add Component
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className={styles.bottom}>
                  <button
                    className={styles.textButton2}
                    onClick={() => {
                      const temp = [...sections];
                      temp[ind].push({ data: {}, components: {} });
                      setSections(temp);
                    }}
                  >
                    Add Column+
                  </button>
                  <h6 className={styles.sectInd}>Section Id : {ind}</h6>
                </div>
              </div>
            );
          })}

          <button
            className={styles.textButton2}
            onClick={() => setSections([...sections, []])}
          >
            Add Section+
          </button>
        </section>

        <section className={`d-flex justify-content-end ${styles.btnWrapper}`}>
          <Button
            label='Cancel'
            onClick={() => push('/admin/webpages')}
            variant='gray'
          />
          <Button
            label='Create'
            variant='secondary'
            type='Submit'
            onClick={(e) => handleCreate(e)}
          />
        </section>
      </Form>
    </div>
  );
};
