import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from '../../../adminComponents';
import { Tag } from '../../../components';
import { formatDate } from '../../../utils/helpers';
import left from '../../../assets/icons/chervonLeft.svg';
import styles from '../webpages.module.css';
import { EmptyState } from './../../../mentorComponents/emptyState/EmptyState';
import { PaginationData } from '../../../components';
import { RoundLoader } from '../../../components/RoundLoader/RoundLoader';
import { AvatarWrapper } from '../../../components/avatarWrapper';

export const WebPages = ({
  applications = [],
  currentPage,
  setCurrentPage,
  fetched,
  setFetched,
}) => {
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

        action: (
          <div className='d-flex align-items-center space-out'>
            <p
              className='view-link'
              role='button'
              // onClick={() => push('/admin/selection_process/kv/0002')}
            >
              Edit
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

  if (applications?.startups?.length === 0) {
    return <EmptyState message='No Application yet.' />;
  }

  return (
    <div>
      {/* <RoundLoader color='blue' fetched={false}> */}
      <Table headers={header} data={applicationData} />
      {/* <PaginationData
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        // data={applications?.startups || []}
        limit={5}
        total={5}
      /> */}
      {/* </RoundLoader> */}
      {/* Pagination goes here */}
    </div>
  );
};
