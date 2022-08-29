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
import { search, createAssignment, updatePage, getPage } from '../../services';
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
import toast from 'react-hot-toast';
// import updateProfile

export const EditWebpage = () => {
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
  const [pageTitle, setPageTitle] = useState();
  const [check, setCheck] = useState(false);
  const {
    location: { hash, state },
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

  useEffect(() => {
    let timer;
    if (check) {
      timer = setTimeout(() => {
        setCheck(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [check]);

  const handleUpdate = async () => {
    const details = {
      title: pageTitle,
      data: JSON.stringify(sections),
    };
    const d = await updatePage({ slug: state?.slug, payload: details });
    if (d?.success) {
      replace('/admin/webpages');
    } else {
      toast.error('Something went wrong');
    }
  };

  useEffect(() => {
    if (state?.slug) {
      const getData = async () => {
        try {
          const res = await getPage(state?.slug);
          console.log(res?.data);
          setPageTitle(res?.data?.title);
          setSections(JSON.parse(res?.data?.data));
        } catch (error) {
          console.log(error.response);
        }
      };

      getData();
    }
  }, [state]);

  return (
    <div className='py-5 px-5'>
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
      {sections?.length > 0 && (
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
      )}
      <Modal id='viewJson' title='Json Data' width={568}>
        <div className={styles.json}>
          <pre>{JSON.stringify(sections[sectionIndex], null, 2)}</pre>
        </div>
      </Modal>
      <GoBack />
      <Form>
        <section className={`mt-4 ${styles.createProgram}`}>
          <h3
            className='border-bottom pb-4'
            onClick={() => console.log(pageTitle)}
          >
            Edit Webpage
          </h3>
          <label className='' htmlFor=''>
            Page Title
          </label>
          <input
            label='Page Title'
            className={`${styles.input} max_fill mb-4`}
            name='title'
            value={pageTitle}
            onChange={(e) => setPageTitle(e.target.value)}
            required={false}
          />

          {sections?.map((section, ind) => {
            return (
              <div className={styles.componentContainer} key={ind}>
                <div className={styles.componentHeader}>
                  <h5 className='mb-5'>Section</h5>
                  <p
                    className={`view-link`}
                    role='button'
                    data-toggle='modal'
                    data-target={`#viewJson`}
                    onClick={() => {
                      setSectionIndex(ind);
                    }}
                  >
                    View Json
                  </p>
                </div>

                <div className='d-flex flex-wrap justify-content-between'>
                  {section?.map((column, i) => {
                    return (
                      <div className={styles.subContainer} key={i}>
                        {getColumnLength(column['components']) > 0 ? (
                          <div className={styles.subLeft}>
                            <span className='d-flex'>
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
                            <span>
                              <div className='d-flex align-items-center space-out'>
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
                                {/* <p className='view-link' role='button'>
                                  Preview
                                </p> */}
                              </div>
                            </span>
                          </div>
                        ) : (
                          ''
                        )}
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
                      </div>
                    );
                  })}
                </div>

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
            label='Update'
            variant='secondary'
            type='Submit'
            onClick={handleUpdate}
          />
        </section>
      </Form>
    </div>
  );
};
