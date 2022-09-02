import React, { useEffect, useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Table } from '../../../adminComponents';
import { Modal, Tag } from '../../../components';
import { formatDate } from '../../../utils/helpers';
import left from '../../../assets/icons/chervonLeft.svg';
import styles from '../webpages.module.css';
import { EmptyState } from './../../../mentorComponents/emptyState/EmptyState';
import { PaginationData } from '../../../components';
import { RoundLoader } from '../../../components/RoundLoader/RoundLoader';
import { AvatarWrapper } from '../../../components/avatarWrapper';
import { deletePage, getPages } from '../../../services';
import toast from 'react-hot-toast';
import { Warning } from './Warning';

export const WebPages = ({
  applications = [],
  currentPage,
  setCurrentPage,
  fetched,
  setFetched,
}) => {
  const [pages, setPages] = useState();
  const [trigger, setTrigger] = useState();
  const [pageId, setPageId] = useState('');
  const {
    location: { hash, state },
    goBack,
    push,
  } = useHistory();
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

  const applicationData = pages?.map((item, i) => {
    return {
      title: (
        <div className='d-flex align-items-center space-out'>
          <p className='mb-0'>{item?.title}</p>
        </div>
      ),

      date: formatDate(item?.createdAt),

      action: (
        <div className='d-flex align-items-center space-out'>
          <p
            className='view-link'
            role='button'
            onClick={() =>
              push({
                pathname: '/admin/edit_webpage',
                state: { slug: item?.slug },
              })
            }
          >
            Edit
          </p>
          <p
            role='button'
            className='delete-link'
            data-toggle='modal'
            data-target={`#warning`}
            onClick={() => setPageId(item?.slug)}
          >
            Delete
          </p>
        </div>
      ),
    };
  });

  const removePage = async () => {
    try {
      const d = await deletePage(pageId);
      console.log(d);
      toast.success('Page Deleted');
      setTrigger(!trigger);
    } catch (error) {
      toast.error('Unable to delete Page');
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const pages = await getPages();
        console.log(pages.data);
        setPages(pages?.data?.data);
      } catch (error) {
        toast.error('Unable to retrieve blogs');
        console.log(error.response);
      }
    };
    getData();
  }, [trigger]);

  if (applications?.startups?.length === 0) {
    return <EmptyState message='No Application yet.' />;
  }

  return (
    <div>
      <Modal id='warning' title='Warning' width={400}>
        <Warning handleDelete={removePage} />
      </Modal>
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
