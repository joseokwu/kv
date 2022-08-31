import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from '../../../adminComponents';
import { Tag } from '../../../components';
import { formatDate } from '../../../utils/helpers';
import left from '../../../assets/icons/chervonLeft.svg';
import styles from '../applicationMgt.module.css';
import { EmptyState } from './../../../mentorComponents/emptyState/EmptyState';
import { PaginationData } from '../../../components';
import { RoundLoader } from '../../../components/RoundLoader/RoundLoader';
import { AvatarWrapper } from '../../../components/avatarWrapper';

export const PendingTable = ({
  applications,
  currentPage,
  setCurrentPage,
  fetched,
  setFetched,
}) => {
  let limit = 5;

  useEffect(() => {
    const storedPage = sessionStorage.getItem('KV:current-page');
    if (storedPage && !isNaN(parseInt(storedPage))) {
      setCurrentPage(parseInt(storedPage));
    }
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
    () =>
      applications?.data?.map((item, i) => {
        console.log(item?._id);
        return {
          startup: (
            <div className='d-flex align-items-center space-out'>
              <AvatarWrapper
                condition={item?.userId?.avatar}
                initials={item?.userId?.startupname?.slice(0, 1)}
                size={31}
              >
                <img
                  src={item?.userId?.avatar}
                  alt='user'
                  className={styles.userPic}
                />
              </AvatarWrapper>
              <p className='mb-0'>{item?.userId?.startupname}</p>
            </div>
          ),

          date: formatDate(new Date(item?.startUpProfile?.yearFounded)),

          status: <Tag name='Pending' color='#2E3192' />,

          action: (
            <Link
              to={`/admin/application_mgt/pending/${item?.userId?._id}`}
              className='view-link'
            >
              View
            </Link>
          ),
        };
      }),
    [applications]
  );

  if (applications?.startups?.length === 0) {
    return <EmptyState message='No Application yet.' />;
  }

  return (
    <div>
      <RoundLoader color='blue' fetched={fetched}>
        <Table headers={header} data={applicationData} />
        <PaginationData
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          // data={applications?.startups || []}
          limit={limit}
          total={applications?.metadata?.total}
        />
      </RoundLoader>
      {/* Pagination goes here */}
    </div>
  );
};
