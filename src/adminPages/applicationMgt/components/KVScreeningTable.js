import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Table } from '../../../adminComponents';
import apple from '../../../assets/images/apple.svg';
import { Tag } from '../../../components';
import { formatDate } from '../../../utils/helpers';
import left from '../../../assets/icons/chervonLeft.svg';
import styles from '../applicationMgt.module.css';
import { EmptyState } from '../../../mentorComponents';
import { PaginationData } from '../../../components';

export const KVScreeningTable = ({
  kvScreening,
  currentPage,
  setCurrentPage,
}) => {
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

  const data = useMemo(() =>
    kvScreening?.data?.map((item, i) => {
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

        date: formatDate(new Date(item?.createdAt)),

        mentor: item?.approvedBy,
        status: <Tag name='In-progress' color='#0A6CF4' />,

        action: (
          <Link
            to={`/admin/application_mgt/kv_view/${item?._id}`}
            className='view-link'
          >
            View
          </Link>
        ),
      };
    }, [])
  );

  if (kvScreening?.startups?.length === 0) {
    return <EmptyState message='No KV Member up for screening.' />;
  }

  // const data = useMemo(
  //     () => [
  //         {
  //             startup: (
  //                 <div className="d-flex align-items-center space-out">
  //                     <img
  //                         src={apple}
  //                         alt="user"
  //                         className={styles.userPic}
  //                     />
  //                     <p className="mb-0">Apple inc.</p>
  //                 </div>
  //             ),

  //             date: formatDate(new Date(2022, 9, 9)),

  //             status: <Tag name="In-progress" color="#0A6CF4" />,

  //             action: (
  //                 <Link
  //                     to="application_mgt/kv_view/inProgress"
  //                     className="view-link"
  //                 >
  //                     View
  //                 </Link>
  //             ),
  //         },
  //         {
  //             startup: (
  //                 <div className="d-flex align-items-center space-out">
  //                     <img
  //                         src={apple}
  //                         alt="user"
  //                         className={styles.userPic}
  //                     />
  //                     <p className="mb-0">Apple inc.</p>
  //                 </div>
  //             ),

  //             date: formatDate(new Date(2022, 9, 9)),

  //             status: <Tag name="Scheduled" color="#650A9D" />,

  //             action: (
  //                 <Link
  //                     to="application_mgt/kv_view/scheduled"
  //                     className="view-link"
  //                 >
  //                     View
  //                 </Link>
  //             ),
  //         },
  //         {
  //             startup: (
  //                 <div className="d-flex align-items-center space-out">
  //                     <img
  //                         src={apple}
  //                         alt="user"
  //                         className={styles.userPic}
  //                     />
  //                     <p className="mb-0">Apple inc.</p>
  //                 </div>
  //             ),

  //             date: formatDate(new Date(2022, 9, 9)),

  //             status: <Tag name="Completed" color="#0586B8" />,

  //             action: (
  //                 <Link
  //                     to="application_mgt/kv_view/completed"
  //                     className="view-link"
  //                 >
  //                     View
  //                 </Link>
  //             ),
  //         },
  //         {
  //             startup: (
  //                 <div className="d-flex align-items-center space-out">
  //                     <img
  //                         src={apple}
  //                         alt="user"
  //                         className={styles.userPic}
  //                     />
  //                     <p className="mb-0">Apple inc.</p>
  //                 </div>
  //             ),

  //             date: formatDate(new Date(2022, 9, 9)),

  //             status: <Tag name="Completed" color="#0586B8" />,

  //             action: (
  //                 <Link
  //                     to="application_mgt/kv_view/completed"
  //                     className="view-link"
  //                 >
  //                     View
  //                 </Link>
  //             ),
  //         },
  //     ],
  //     []
  // );

  return (
    <div>
      <div>
        <Table headers={header} data={data} />
        <PaginationData
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          data={kvScreening?.startups || []}
          limit={limit}
          total={kvScreening?.metadata?.total}
        />
        {/* Pagination goes here */}
      </div>
    </div>
  );
};
