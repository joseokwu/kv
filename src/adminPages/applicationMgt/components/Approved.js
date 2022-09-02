import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from '../../../adminComponents';
import { AdminButton, Tag } from '../../../components';
import { formatDate } from '../../../utils/helpers';
import left from '../../../assets/icons/chervonLeft.svg';
import styles from '../applicationMgt.module.css';
import { EmptyState } from './../../../mentorComponents/emptyState/EmptyState';
import { applicationManagement } from '../../../services';
import { toast } from 'react-hot-toast';
import { PaginationData } from '../../../components';

export const ApprovedTable = ({
  approved,
  currentPage,
  setCurrentPage,
  setResetAccept,
}) => {
  const [loading, setLoading] = useState({ type: 'none', id: '' });
  const [acceptedSuccess, setAcceptedSuccess] = useState({
    success: false,
    id: '',
  });
  const [recommendedSuccess, setRecommendedSuccess] = useState({
    success: false,
    id: '',
  });
  let limit = 5;

  const manageAccount = async ({ type, value, userId }) => {
    try {
      setLoading({ type, id: userId });
      const res = await applicationManagement({
        userId,
        action: 'manage_account',
        values: { [type]: value, updatedAt: new Date() },
      });
      //console.log(res)
      if (res?.success) {
        if (type === 'recommended') {
          setRecommendedSuccess({ success: true, id: userId });
        }
        if (type === 'accepted') {
          setAcceptedSuccess({ success: true, id: userId });
        }
        setLoading({ type: 'none', id: userId });
        toast.success('Action Successful!');
        setResetAccept(true);
      }
    } catch (err) {
      console.log(err);

      setLoading({ type: 'none', id: userId });
      toast.error(err?.response?.data?.message);
    }
  };

  const header = useMemo(
    () => [
      {
        title: 'Startup',
        accessor: 'startup',
      },
      {
        title: 'Date Approved',
        accessor: 'date',
      },
      {
        title: 'Approved by',
        accessor: 'approvedBy',
      },
      {
        title: 'Status',
        accessor: 'status',
      },
    ],
    []
  );

  const applicationData = useMemo(() =>
    approved?.data?.map((item, i) => {
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
        approvedBy: item?.approvedBy,
        status: (
          <div className={styles.appRecBtns}>
            <AdminButton
              onClick={() =>
                manageAccount({
                  type: 'accepted',
                  value: true,
                  userId: item?.userId,
                })
              }
              disabled={
                item?.accepted ||
                (acceptedSuccess.success && acceptedSuccess.id === item.userId)
              }
              loading={
                loading.type === 'accepted' && loading.id === item.userId
                  ? true
                  : false
              }
              label={
                item?.accepted ||
                (acceptedSuccess.success && acceptedSuccess.id === item.userId)
                  ? 'Accepted'
                  : 'Accept'
              }
              variant={
                item?.accepted ||
                (acceptedSuccess.success && acceptedSuccess.id === item.userId)
                  ? 'grey'
                  : 'primary'
              }
            />
            <AdminButton
              onClick={() =>
                manageAccount({
                  type: 'recommended',
                  value: true,
                  userId: item?.userId,
                })
              }
              disabled={
                item?.recommended ||
                (recommendedSuccess.success &&
                  recommendedSuccess.id === item.userId)
              }
              loading={
                loading.type === 'recommended' && loading.id === item.userId
                  ? true
                  : false
              }
              label={
                item?.recommended ||
                (recommendedSuccess.success &&
                  recommendedSuccess.id === item.userId)
                  ? 'Recommended'
                  : 'Recommend'
              }
              variant={
                item?.recommended ||
                (recommendedSuccess.success &&
                  recommendedSuccess.id === item.userId)
                  ? 'grey'
                  : 'primary'
              }
            />
          </div>
        ),
      };
    }, [])
  );

  if (approved?.startups?.length === 0) {
    return <EmptyState message='No  Startup has been approved' />;
  }

  return (
    <div>
      <Table headers={header} data={applicationData} />
      <PaginationData
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={approved?.startups || []}
        limit={limit}
        total={approved?.metadata?.total}
      />
      {/* Pagination goes here */}
    </div>
  );
};
