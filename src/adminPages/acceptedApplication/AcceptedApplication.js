import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Tag } from '../../components';
import left from '../../assets/icons/chervonLeft.svg';
import apple from '../../assets/images/apple.svg';
import userPic from '../../assets/images/sampleUser.png';
import download from '../../assets/icons/downloadFileIcon.svg';
import video from '../../assets/icons/videoFillIcon.svg';
import docs from '../../assets/icons/docsPink.svg';
import styles from './accepted.module.css';

export const AcceptedApplication = () => {
  const { goBack } = useHistory();

  const currentAdvisors = [
    { name: 'Kenny Ann', title: 'Business Manager' },
    { name: 'Fanai Edith', title: 'IT Lead' },
    { name: 'John Carter', title: 'IT Lead' },
    { name: 'Faith Kim Lin', title: 'IT Lead' },
    { name: 'Winner', title: 'PM Lead' },
  ];

  const funds = [
    { name: 'Total Fund Raised', amount: '10,000', color: '#F9F9FC' },
    { name: 'Funding Ask', amount: '10,000', color: '#7879B4' },
    { name: 'Pre-Money Valuation', amount: '10,000', color: '#00ADEF' },
    { name: 'Post Money Valuation', amount: '10,000', color: '#2E3192' },
  ];

  const commitments = [
    {
      investor: { name: 'Mr Promise Amstel', title: 'Lead Investor' },
      amount: '120,000',
    },
    { investor: { name: 'Kenny Ann' }, amount: '120,000' },
    { investor: { name: 'Fanai Edith' }, amount: '120,000' },
  ];

  const pitchFiles = [
    { title: 'Pitch Documents', size: '20MB', type: 'docs' },
    { title: 'Pitch Video', size: '20MB', type: 'video' },
  ];
  return (
    <div className='p-5 bg-white' style={{ minHeight: '100vh' }}>
      <section
        className='d-flex align-items-center mb-3'
        onClick={() => goBack()}
        role='button'
        style={{ width: 'fit-content' }}
      >
        <img
          src={left}
          alt='left'
          className='mr-2'
          style={{ transform: 'rotate(180deg)' }}
        />
        <p className='bread-start' role='button'>
          Go back
        </p>
      </section>
      <section className={styles.card} style={{ maxWidth: 2000 }}>
        <div className='row mx-0'>
          <section className='col-lg-7'>
            <img src={apple} alt='startup logo' className='mb-2' />
            <h3>Gecko Inc.</h3>
            <p className='mb-4'>Tech Industry</p>

            <article className='d-flex align-items-center mb-45'>
              <p className={`${styles.statusHeader} mr-3`}>
                Program Admission Status
              </p>
              <Tag name='Pending' color='#2E3192' />
            </article>

            <article className='d-flex align-items-center flex-wrap space-out'>
              <Button label='Approve to evaluate' />
              <Button label='Schedule call' variant='secondary' />
              <Button label='Decline' variant='danger' />
            </article>
          </section>

          <section
            className={`${styles.stageIndustry} col-lg-5 d-flex flex-column justify-content-center`}
          >
            <article className='d-flex align-items-center mb-3'>
              <p className='mr-1'>Stage</p>
              <Tag name='Proof of Concept' color='#40439A' />
            </article>

            <article className='d-flex align-items-center mb-3'>
              <p className='mr-1'>Industry</p>
              <div
                className='d-flex align-items-center space-out'
                style={{ columnGap: 3 }}
              >
                <Tag name='Tech' color='#058DC1' />
                <Tag name='Engineering' color='#40439A' />
                <Tag name='Career' color='#E31937' />
              </div>
            </article>

            <article className='d-flex align-items-center '>
              <p className='mr-1'>Funding Round</p>
              <Tag name='Series A' />
            </article>
          </section>
        </div>
      </section>

      <section className='row' style={{ maxWidth: 2000 }}>
        <div className='col-lg-7'>
          <section className={styles.currentAdvisors}>
            <h4 className='border-bottom'>Current Advisors</h4>

            <div
              className='d-flex flex-wrap'
              style={{ columnGap: '1rem', rowGap: '1rem' }}
            >
              {currentAdvisors?.length > 0 &&
                currentAdvisors?.map((advisor, i) => (
                  <PersonDetail data={advisor} key={`advisor-${i}`} />
                ))}
            </div>
          </section>

          <section className='row mx-0'>
            {funds?.length > 0 &&
              funds.map((fund, i) => {
                return (
                  <article className='col-md-6 mb-3 px-2' key={`funds-${i}`}>
                    <FundCard data={fund} />
                  </article>
                );
              })}
          </section>

          <section className={styles.currentAdvisors}>
            <h4 className='border-bottom'>Investment Commitments</h4>
            <div>
              {commitments?.length > 0 &&
                commitments?.map((commit, i) => {
                  return (
                    <article
                      className={`d-flex align-items-center justify-content-between mb-4`}
                    >
                      <PersonDetail data={commit?.investor} />
                      <p className={styles?.commitAmount}>
                        Investment Committed - <b>${commit?.amount}</b>
                      </p>
                    </article>
                  );
                })}
            </div>
          </section>
        </div>

        <div className='col-lg-5'>
          <section
            className={`${styles.currentAdvisors} d-flex align-items-center justify-content-center w-100 flex-wrap`}
            style={{ columnGap: '1.6rem' }}
          >
            <div className={styles?.finalScore}>
              <p>Final Score</p>
              <h3 className='mb-0'>80%</h3>
              <span>Excellent Performance</span>
            </div>

            <Button label='View Details' variant='trans' />
          </section>

          <section className={styles.currentAdvisors}>
            <h4 className='border-bottom'>Founder’s Profile</h4>
            <div className={styles.founderProfile}>
              <img src={userPic} alt='user' />
              <article>
                <h5>Mr Promise Amstel</h5>
                <p>CEO Applean Insteen</p>
                <Button label='View' />
              </article>
            </div>
          </section>

          <section className={styles.currentAdvisors}>
            <h4 className='border-bottom'>Pitch Deck</h4>

            {pitchFiles?.map((pf, i) => {
              return (
                <div className='mb-3' key={`pitch-${i}`}>
                  <FileForDownload data={pf} />
                </div>
              );
            })}
          </section>
        </div>
      </section>
    </div>
  );
};

const PersonDetail = ({ data }) => {
  return (
    <div className={styles.person}>
      {data?.img ? <img src='' alt='' /> : <span></span>}
      <section>
        <p>{data?.name}</p>
        <p>{data?.title}</p>
      </section>
    </div>
  );
};

const FundCard = ({ data }) => {
  return (
    <div
      className={styles?.fundCard}
      style={{
        backgroundColor: data?.color,
        color: data?.color === '#F9F9FC' ? '#2E3192' : '#F9F9FC',
      }}
    >
      <p>{data?.name}</p>
      <h4 style={{ color: data?.color === '#F9F9FC' ? '#2E3192' : '#F9F9FC' }}>
        ${data?.amount}
      </h4>
    </div>
  );
};

const FileForDownload = ({ data = {} }) => {
  const types = {
    video: video,
    docs: docs,
  };
  return (
    <div
      className={`${styles.fileDownload} d-flex align-items-center justify-content-between`}
    >
      <div className='d-flex align-items-center'>
        <img src={types[data?.type]} alt='data' className='mr-3' />
        <section>
          <h6>{data?.title}</h6>
          <p>{data?.size}</p>
        </section>
      </div>
      <span>
        <img src={download} alt='download' />
      </span>
    </div>
  );
};
