import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Table } from '../../../adminComponents';
import apple from '../../../assets/images/apple.svg';
import { Tag } from '../../../components';
import { formatDate } from '../../../utils/helpers';
import left from '../../../assets/icons/chervonLeft.svg';
import styles from '../applicationMgt.module.css';
import { EmptyState } from '../../../mentorComponents';
import { PaginationData } from '../../../components';

export const AcceptedTable = ({ accepted, currentPage, setCurrentPage }) => {
  let limit = 5;

  const header = useMemo(
    () => [
      {
        title: 'Startup',
        accessor: 'startup',
      },
      {
        title: 'Application Date',
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

  const data = useMemo(
    () =>
      accepted?.data?.map((item, i) => {
        return {
          startup: (
            <div className='d-flex align-items-center space-out'>
              <img
                src={item?.startUpProfile?.logo}
                alt='user'
                className={styles.userPic}
              />
              <p className='mb-0'>{item?.startUpProfile?.acceleratorName}</p>
            </div>
          ),

          date: formatDate(new Date(item?.updatedAt)),

          status: <Tag name='Accepted' color='#235405' />,

          action: (
            <Link
              to={`/admin/application_mgt/accepted/${item?.userId}`}
              className='view-link'
            >
              View
            </Link>
          ),
        };
      }),
    []
  );

  if (accepted?.startups?.length === 0) {
    return <EmptyState message='No  Startup has been Accepted' />;
  }
  return (
    <div>
      <div>
        <Table headers={header} data={data} />
        <PaginationData
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          data={accepted?.startups || []}
          limit={limit}
          total={accepted?.metadata?.total}
        />
        {/* Pagination goes here */}
      </div>
    </div>
  );
};
