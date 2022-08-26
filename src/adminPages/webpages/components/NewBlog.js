import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from '../../../adminComponents';
import { AdminButton, Tag } from '../../../components';
import { formatDate } from '../../../utils/helpers';
import left from '../../../assets/icons/chervonLeft.svg';
import styles from '../webpages.module.css';
import { EmptyState } from '../../../mentorComponents/emptyState/EmptyState';
import { applicationManagement } from '../../../services';
import { toast } from 'react-hot-toast';
import { PaginationData } from '../../../components';

export const NewsBlog = ({}) => {
  let limit = 5;

  const header = useMemo(
    () => [
      {
        title: 'Title',
        accessor: 'title',
      },
      {
        title: 'Created Date',
        accessor: 'date',
      },
      {
        title: 'Status',
        accessor: 'status',
      },
      {
        title: 'Action',
        accessor: 'action',
      },
    ],
    []
  );

  const applicationData = useMemo(
    () => [
      {
        title: (
          <div className='d-flex align-items-center space-out'>
            <p className='mb-0'>Joe Carbon</p>
          </div>
        ),

        date: '17 May, 2022',
        status: <Tag name='Published' color='#2E3192' />,

        action: (
          <div className='d-flex align-items-center space-out'>
            <p
              className='view-link'
              role='button'
              // onClick={() => push('/admin/selection_process/kv/0002')}
            >
              Edit
            </p>
            <p
              className='view-link'
              role='button'
              // onClick={() => push('/admin/selection_process/kv/0002')}
            >
              Unpublish
            </p>
            <p role='button' className='delete-link'>
              Delete
            </p>
          </div>
        ),
      },
    ],
    []
  );

  if (applicationData.length === 0) {
    return <EmptyState message='No  Startup has been approved' />;
  }

  return (
    <div>
      <Table headers={header} data={applicationData} />
      {/* <PaginationData
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={approved?.startups || []}
        limit={limit}
        total={approved?.metadata?.total}
      /> */}
      {/* Pagination goes here */}
    </div>
  );
};
