import React from 'react';
import { Button, Select } from '../../../components';
import location from '../../../assets/icons/locationSm.svg';
import deleteIcon from '../../../assets/icons/delete.svg';
import editIcon from '../../../assets/icons/editIcon.svg';
import closeIcon from '../../../assets/icons/close.svg';
import styles from '../events.module.css';
import { GuestItem } from './GuestItem';

export const ViewEventDetails = ({
  data = {},
  isOngoing = false,
  eventTime = '',
  eventDate = '',
  id = '',
}) => {
  return (
    <div className='px-4 py-4'>
      <section className='d-flex align-items-center justify-content-between mb-45'>
        <p className={styles.counter}>2 days : 30mins : 05 secs</p>
        <div className='d-flex align-items-center space-out'>
          <img
            src={editIcon}
            alt='edit'
            role='button'
            data-toggle='modal'
            data-target={`#editEvent${id}`}
            data-dismiss='modal'
          />
          <img src={deleteIcon} alt='delete' role='button' />
          <img src={closeIcon} alt='close' role='button' data-dismiss='modal' />
        </div>
      </section>

      <section
        className='mb-3 d-flex align-items-center'
        style={{ columnGap: '4rem' }}
      >
        <h4>{data?.titleOfEvent}</h4>
        <p>Host: Applean Industry</p>
      </section>

      <section
        className='d-flex align-items-center mb-5'
        style={{ columnGap: '3rem' }}
      >
        {eventDate}
        {eventTime}
      </section>

      {data?.image && (
        <section className='mb-45'>
          <img
            src={data?.image}
            alt='event visual'
            className={styles.eventVisual}
            style={{ maxHeight: 300 }}
          />
        </section>
      )}

      <section className={styles?.eventFullDesc}>
        <header className='mb-3'>Description</header>
        <p>{data?.description}</p>
      </section>

      <section className={styles?.visible}>
        <p>Visibility</p>
        <Select
          options={['Private', 'Public']}
          className='d-flex'
          value='Private'
        />
      </section>

      <section className='mb-45'>
        <p className='mb-3'>Event Link</p>
        <div className='d-flex align-items-center space-out'>
          <img src={location} alt='location' />
          <a href='#' className='view-link'>
            meet.google.com/jce-wata-fux
          </a>
        </div>
      </section>

      <section className='mb-4'>
        <p className='mb-3'>Guests</p>

        <div className='row'>
          {Array.from('four').map((x, i) => {
            return (
              <article className='col-lg-6 mb-3' key={`guest-${i}`}>
                <GuestItem />
              </article>
            );
          })}
        </div>
      </section>

      <section className='mb-4'>
        <p className='mb-3'>Attendees</p>

        <div className='row'>
          {Array.from('four').map((x, i) => {
            return (
              <article className='col-lg-6 mb-3' key={`guest-${i}`}>
                <GuestItem />
              </article>
            );
          })}
        </div>
      </section>

      <section className='text-right'>
        <Button label='Join Event' />
      </section>
    </div>
  );
};
