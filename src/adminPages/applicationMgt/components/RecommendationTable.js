import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Table } from '../../../adminComponents';
import apple from '../../../assets/images/apple.svg';
import { Tag } from '../../../components';
import { formatDate } from '../../../utils/helpers';
import left from '../../../assets/icons/chervonLeft.svg';
import styles from '../applicationMgt.module.css';
import { EmptyState } from '../../../mentorComponents';
import { PaginationData } from '../../../components';

export const RecommendationTable = ({
  recommended,
  currentPage,
  setCurrentPage,
}) => {
  useEffect(() => {
    console.log(recommended);
  }, []);

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
        title: 'Assigned Mentor',
        accessor: 'mentor',
      },
      //   {
      //     title: "Action",
      //     accessor: "action",
      //   },
    ],
    []
  );

  let limit = 5;

  const data = useMemo(() =>
    recommended?.data?.map((item, i) => {
      return {
        startup: (
          <div className='d-flex align-items-center space-out'>
            <img
              src={
                item?.avatar ??
                `https://ui-avatars.com/api/?name=${item?.startupname}`
              }
              alt='user'
              className={styles.userPic}
            />
            <p className='mb-0'>
              {' '}
              {item?.startupname ?? item?.firstname + ' ' + item?.lastname}
            </p>
          </div>
        ),

        date: formatDate(new Date(item?.updatedAt)),

        mentor: item?.approvedBy,
      };
    }, [])
  );

  if (recommended?.startups?.length === 0) {
    return <EmptyState message='No  Startup has been Recommended' />;
  }
  return (
    <div>
      <div>
        <Table headers={header} data={data} />
        <PaginationData
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          data={recommended?.startups || []}
          limit={limit}
          total={recommended?.metadata?.total}
        />
        {/* Pagination goes here */}
      </div>
    </div>
  );
};
