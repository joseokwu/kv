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
import { upload } from '../../services';
import { AddComponent } from '../webpages/components/AddComponent';
import Item from 'antd/lib/list/Item';
import { useHistory } from 'react-router-dom';
import { EditComponent } from '../webpages/components/EditComponent';
// import updateProfile

export const CreateWebpage = () => {
  const { stateAuth } = useAuth();
  const [sections, setSections] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [texts, setTexts] = useState([]);
  const [images, setImages] = useState([]);
  const [headersEdit, setHeadersEdit] = useState([]);
  const [textsEdit, setTextsEdit] = useState([]);
  const [imagesEdit, setImagesEdit] = useState([]);
  const [columnIndex, setColumnIndex] = useState(0);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const {
    location: { hash },
    push,
  } = useHistory();

  const handleSubmit = () => {
    const tempSections = [...sections];
    if (isEditing) {
      if (Object.keys(tempSections[sectionIndex][columnIndex]).length > 0) {
        let tempHeaders = tempSections[sectionIndex][columnIndex]['headers'];
        let tempTexts = tempSections[sectionIndex][columnIndex]['texts'];
        let tempImages = tempSections[sectionIndex][columnIndex]['images'];
        tempHeaders = [...tempHeaders, ...headersEdit];
        tempTexts = [...tempTexts, ...textsEdit];
        tempImages = [...tempImages, ...imagesEdit];
        tempSections[sectionIndex][columnIndex] = {
          headers: tempHeaders,
          texts: tempTexts,
          images: tempImages,
        };
      } else {
        tempSections[sectionIndex][columnIndex] = {
          headers: headersEdit,
          texts: textsEdit,
          images: imagesEdit,
        };
      }
    } else {
      if (Object.keys(tempSections[sectionIndex][columnIndex]).length > 0) {
        let tempHeaders = tempSections[sectionIndex][columnIndex]['headers'];
        let tempTexts = tempSections[sectionIndex][columnIndex]['texts'];
        let tempImages = tempSections[sectionIndex][columnIndex]['images'];
        tempHeaders = [...tempHeaders, ...headers];
        tempTexts = [...tempTexts, ...texts];
        tempImages = [...tempImages, ...images];
        tempSections[sectionIndex][columnIndex] = {
          headers: tempHeaders,
          texts: tempTexts,
          images: tempImages,
        };
      } else {
        tempSections[sectionIndex][columnIndex] = {
          headers: headers,
          texts: texts,
          images: images,
        };
      }
    }

    setSections(tempSections);

    setHeaders([]);
    setTexts([]);
    setImages([]);
  };

  const getColumnLength = (column) => {
    let total = 0;
    Object.values(column).forEach((val) => (total += val.length));
    console.log(total);
    return total;
  };

  const handleCreate = (e) => {};

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
          sectionIndex={sectionIndex}
        />
      </Modal>
      <Modal id='viewJson' title='Json Data' width={568}>
        <pre className={styles.json}>
          {JSON.stringify(sections[sectionIndex])}
        </pre>
      </Modal>
      <GoBack />
      <Form>
        <section className={`mt-4 ${styles.createProgram}`}>
          <h3
            className='border-bottom pb-4'
            onClick={() => console.log(sections)}
          >
            Create Webpage
          </h3>

          <TextField
            label='Page Title'
            className='max_fill mb-4'
            name='title'
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
                        <div className={styles.subLeft}>
                          <span className='d-flex'>
                            <h6 className='mr-2'>
                              Components - {getColumnLength(column)}
                            </h6>
                            <img src={clip} alt='clip' />
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
                                }}
                              >
                                Edit
                              </p>
                              <p className='view-link' role='button'>
                                Preview
                              </p>
                            </div>
                          </span>
                        </div>
                        <div key={i} className={styles.addComponent}>
                          <img
                            className={styles.img}
                            src={plusCircle}
                            alt='plus'
                            width={20}
                          />
                          <button
                            onClick={() => {
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
                    temp[ind].push({});
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
