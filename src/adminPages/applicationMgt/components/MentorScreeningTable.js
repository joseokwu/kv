import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Table } from '../../../adminComponents';
import apple from '../../../assets/images/apple.svg';
import { Tag } from '../../../components';
import { formatDate } from '../../../utils/helpers';
import left from '../../../assets/icons/chervonLeft.svg';
import styles from '../applicationMgt.module.css';

export const MentorScreeningTable = ({ mentorScreening }) => {
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
      mentorScreening?.users?.map((item, i) => {
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
                {item?.startupname ?? item?.firstname + ' ' + item?.lastname}
              </p>
            </div>
          ),

          date: formatDate(new Date(item?.createdAt)),

          status: <Tag name='In-progress' color='#0A6CF4' />,

          action: (
            <Link
              to='application_mgt/mentor_screening_view/inProgress'
              className='view-link'
            >
              View
            </Link>
          ),
        };
      }),
    [mentorScreening]
  );
  return (
    <div>
      <div>
        <Table headers={header} data={data} />
        {/* Pagination goes here */}
      </div>
    </div>
  );
};
