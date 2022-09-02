import React, { useEffect, useState } from 'react';
import { Button, TextArea, TextField } from '../../../components';
import styles from '../webpages.module.css';
import { Form } from 'antd';
import toast from 'react-hot-toast';
import deleteIcon from '../../../assets/icons/del-red.svg';
import DragAndDrop from '../../../components/dragAndDrop/DragAndDrop';
import { upload } from '../../../services';
import cuid from 'cuid';

export const Warning1 = ({ handleDelete, setModal }) => {
  return (
    <div className={`${styles.modal} px-4`}>
      <div className={styles.warning}>
        <h3>Are you sure?</h3>
        <h6>This action cannot be reversed</h6>
      </div>
      <section
        className={`d-flex gap-2 justify-content-start ${styles.btnWrapper}`}
      >
        <Button label='Cancel' variant='gray' onClick={() => setModal(false)} />
        <Button
          label='Delete'
          variant='primary'
          type='Submit'
          onClick={handleDelete}
        />
      </section>
    </div>
  );
};
