import React, { useEffect, useState } from 'react';
import { Button, TextArea, TextField } from '../../../components';
import styles from '../webpages.module.css';
import { Form } from 'antd';
import toast from 'react-hot-toast';
import deleteIcon from '../../../assets/icons/del-red.svg';
import DragAndDrop from '../../../components/dragAndDrop/DragAndDrop';
import { upload } from '../../../services';
import cuid from 'cuid';

export const Warning = ({ handleDelete }) => {
  return (
    <div className='px-4'>
      <div className={styles.warning}>
        <h1>Are you sure?</h1>
        <h6>This action cannot be reversed</h6>
      </div>
      <section
        className={`d-flex gap-2 justify-content-center ${styles.btnWrapper}`}
      >
        <Button label='Cancel' data-dismiss='modal' variant='gray' />
        <Button
          label='Delete'
          variant='primary'
          data-dismiss='modal'
          type='Submit'
          onClick={handleDelete}
        />
      </section>
    </div>
  );
};
