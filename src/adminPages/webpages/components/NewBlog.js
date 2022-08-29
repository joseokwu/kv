import React, { useEffect, useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Table } from '../../../adminComponents';
import { AdminButton, Tag } from '../../../components';
import { formatDate } from '../../../utils/helpers';
import left from '../../../assets/icons/chervonLeft.svg';
import styles from '../webpages.module.css';
import { EmptyState } from '../../../mentorComponents/emptyState/EmptyState';
import {
  applicationManagement,
  getAllBlog,
  deleteBlog,
  updateBlog,
} from '../../../services';
import { toast } from 'react-hot-toast';
import { PaginationData } from '../../../components';
import { Loading } from '../../../mentorComponents/CircluarLoader/CircularLoader.styled';

export const NewsBlog = () => {
  const [blogs, setBlogs] = useState();
  const [trigger, setTrigger] = useState(false);
  const [isPublished, setIsPublished] = useState();
  const [isLoading, setIsLoading] = useState(false);
  let limit = 5;
  const {
    location: { hash, state },
    goBack,
    push,
  } = useHistory();

  const handleUpdate = async ({ id, details }) => {
    console.log(state, details);
    setIsLoading(true);
    try {
      const d = await updateBlog({ slug: id, payload: details });
      if (d?.success) {
        setTrigger(!trigger);
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {}
    setIsLoading(false);
  };

  // useEffect(() => {
  //   const handleUpdate = async () => {
  //     console.log(state, details);
  //     const d = await updateBlog({ slug: state?.id, payload: details });
  //     if (d?.success) {
  //     } else {
  //       toast.error('Something went wrong');
  //     }
  //   };
  //   handleUpdate();
  // }, [isPublished]);

  useEffect(() => {
    const getData = async () => {
      try {
        const blogs = await getAllBlog();
        console.log(blogs.data.data);
        setBlogs(blogs?.data?.data);
      } catch (error) {
        toast.error('Unable to retrieve blogs');
        console.log(error.response);
      }
    };
    getData();
  }, [trigger]);

  const removeBlog = async (id) => {
    console.log(id);
    try {
      const d = await deleteBlog(id);
      console.log(d);
      toast.success('Blog Deleted');
      setTrigger(!trigger);
    } catch (error) {
      toast.error('Unable to delete blog');
    }
  };

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

  const applicationData = blogs?.map((item, index) => {
    return {
      title: (
        <div className='d-flex align-items-center space-out'>
          <p className='mb-0'>{item?.title}</p>
        </div>
      ),

      date: formatDate(item?.publish),
      status: (
        <Tag
          name={`${item?.isPublished ? 'Unpublished' : 'Published'}`}
          color='#2E3192'
        />
      ),

      action: (
        <div className='d-flex align-items-center space-out'>
          <p
            className='view-link'
            role='button'
            onClick={() =>
              push({
                pathname: '/admin/edit_blog',
                state: { id: item?.slug },
              })
            }
          >
            Edit
          </p>
          {isLoading ? (
            <Loading></Loading>
          ) : item?.isPublished ? (
            <p
              className='view-link'
              role='button'
              onClick={() =>
                handleUpdate({
                  id: item?.slug,
                  details: { isPublished: !item?.isPublished },
                })
              }
            >
              Publish
            </p>
          ) : (
            <p
              className='view-link'
              role='button'
              onClick={() =>
                handleUpdate({
                  id: item?.slug,
                  details: { isPublished: !item?.isPublished },
                })
              }
            >
              Unpublish
            </p>
          )}
          <p
            role='button'
            className='delete-link'
            onClick={() => removeBlog(item?.slug)}
          >
            Delete
          </p>
        </div>
      ),
    };
  });

  if (applicationData?.length === 0) {
    return <EmptyState message='No  Blogs has been Created' />;
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
