import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Table } from '../../../adminComponents';
import apple from '../../../assets/images/apple.svg';
import { Tag } from '../../../components';
import { formatDate } from '../../../utils/helpers';
import left from '../../../assets/icons/chervonLeft.svg';
import styles from '../applicationMgt.module.css';
import { EmptyState } from '../../../mentorComponents';

export const RecommendationTable = ({ recommended }) => {
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

  const data = useMemo(() =>
    recommended?.startups?.map((item, i) => {
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
        <div className='d-flex align-item-center pt-4 justify-content-end'>
          <p className='page-num'>1 of 26</p>
          <img
            src={left}
            alt='left'
            className='mx-3'
            style={{ transform: 'rotate(180deg)' }}
            role='button'
          />
          <img src={left} alt='left' className='mx-3' role='button' />
        </div>
      </div>
    </div>
  );
};
