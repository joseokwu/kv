import React, { useState } from 'react';
import { Button, Select, TextField } from '../../../components';
import searchIcon from '../../../assets/icons/searchSm.svg';
import copyIcon from '../../../assets/icons/copy.svg';
import closeIcon from '../../../assets/icons/closesm.svg';
import styles from '../events.module.css';
import { GuestItem } from './GuestItem';
import { Form } from 'antd';
import { eventRequest } from '../../../services/events';
import { search } from '../../../services/utils';
import { debounce } from 'lodash';
import toast from 'react-hot-toast';
import { CircularLoader } from '../../../components/CircluarLoader';
import { TimePicker } from 'antd';
import moment from 'moment';

export const CreateEvent = () => {
  const [guests, setGuests] = useState([]);
  const [sub, setSub] = useState([]);
  const [subAttendees, setSubAttendees] = useState([]);
  const [attendees, setAttendees] = useState([]);
  const [loading, setLoading] = useState();
  const [open, setOpen] = useState(false);
  const [daysDisplayed, setDaysDisplayed] = useState([1]);
  const [visibility, setVisibility] = useState('Private');

  const searchItem = async (value, category) => {
    const res = await search({
      value,
      type: 'User_search',
    });
    console.log(res?.data);
    if (category === 'guests') {
      setSub(res?.data);
    }
    if (category === 'attendees') {
      setSubAttendees(res?.data);
    }
  };

  const deleteItem = (id, category) => {
    if (category === 'guests') {
      setGuests(guests.filter((item) => item.profileId !== id));
    }
    if (category === 'attendees') {
      setAttendees(guests.filter((item) => item.profileId !== id));
    }
  };

  const addItem = (item, category) => {
    const newItem = {
      profileId: item._id,
      typeAcc: item.type[0],
      name: item?.startupname ?? item?.firstname,
    };
    if (category === 'guests') {
      setSub([]);
      setGuests([
        ...guests.filter((value) => value?.profileId !== item?._id),
        newItem,
      ]);
    }
    if (category === 'attendees') {
      setSubAttendees([]);
      setAttendees([
        ...guests.filter((value) => value?.profileId !== item?._id),
        newItem,
      ]);
    }
  };

  const onChange = (e, category) => {
    const { value } = e.target;
    searchItem(value, category);
  };

  const onSubmit = async (values) => {
    try {
      const formData = values;
      const startTime = new Date(
        formData?.startDate?.slice(0, 4),
        formData?.startDate?.slice(5, 7) - 1,
        formData?.startDate?.slice(8),
        formData?.startTime?.slice(0, 2),
        formData?.startTime?.slice(3),
        0
      );
      const endTime = new Date(
        formData?.startDate?.slice(0, 4),
        formData?.startDate?.slice(5, 7) - 1,
        formData?.startDate?.slice(8),
        formData?.endTime?.slice(0, 2),
        formData?.endTime?.slice(3),
        0
      );

      formData.startTime = startTime.toISOString();
      formData.endTime = endTime.toISOString();

      console.log({
        ...values,
        attendees: guests,
      });
      setLoading(true);
      const res = await eventRequest('createEvent', {
        ...values,
        attendees: guests,
      });
      console.log(res);
      setLoading(false);
      toast.success(res?.message ?? 'Event created successfully');
    } catch (err) {
      toast.error(
        err?.response?.data?.message ?? 'There was an error creating this event'
      );
      setLoading(false);
    }
  };

  return (
    <div className='px-4'>
      <Form
        name='Create Event'
        initialValues={{
          remember: true,
        }}
        layout='vertical'
        onFinish={onSubmit}
      >
        <TextField
          label='Title of Event'
          placeholder='Enter event title'
          className='max_fill mb-4'
          name={'titleOfEvent'}
        />

        <TextField
          label='Description'
          placeholder='Describe event'
          className='max_fill mb-1'
          name={'eventDescription'}
        />

        <section className='d-flex align-items-center justify-content-end mb-4'>
          <p>Add picture:</p>
          <p className='view-link' role='button'>
            Upload photo
          </p>
        </section>

        {daysDisplayed.map((_) => {
          return (
            <div>
              <TextField
                label='Date'
                placeholder='Thursday 17th Oct 2021'
                className='max_fill mb-4'
                type='date'
                name={'startDate'}
              />
              <div className='row mb-3'>
                <section className='col-lg-6'>
                  {/* <TimePicker open={open}
             onOpenChange={setOpen} 
             use12Hours defaultValue={moment().format('HH:mm')}
               /> */}

                  <TextField
                    type='time'
                    className='max_fill mb-4'
                    label='Start Time'
                    name={'startTime'}
                  />
                </section>
                <section className='col-lg-6'>
                  <TextField
                    type='time'
                    className='max_fill mb-4'
                    label='End Time'
                    name={'endTime'}
                  />
                </section>
              </div>
            </div>
          );
        })}

        <section className='mb-4'>
          <p
            className='view-link'
            role='button'
            onClick={() => setDaysDisplayed([...daysDisplayed, 1])}
          >
            Add another day
          </p>
        </section>

        <hr className='mb-4' />

        <section className='d-flex align-items-center space-out mb-4'>
          <p>Join with:</p>
          <Select
            options={['Zoom', 'Google Meet', 'Skype']}
            defaultValue='Zoom'
          />
        </section>

        <section
          className={`d-flex align-items-center justify-content-between mb-4 ${styles.copyLink}`}
        >
          <TextField type={'url'} className='max_fill' name={'joinWith'} />
          <section>
            <img src={copyIcon} alt='copy' />
          </section>
        </section>

        <section
          className='d-flex align-items-center mb-4'
          style={{ columnGap: '1rem' }}
        >
          <p style={{ width: '20%' }}>Notify me :</p>
          <TextField name={'notifyMe'} style={{ width: '80%' }} />
          <Select options={['Seconds', 'Minutes']} defaultValue='Minutes' />
        </section>

        <hr className='mb-4' />

        <section className={styles?.visible}>
          <p>Visibility</p>
          <Select
            options={['Private', 'Public']}
            className='d-flex'
            defaultValue='Private'
            onChange={(e) => setVisibility(e.target.value)}
          />
        </section>

        <section className='mb-4'>
          <p className='mb-3'>Add Guest</p>
          <section className='search-input mb-3'>
            <img src={searchIcon} alt='search' />
            <input
              type='search'
              onChange={(e) => onChange(e, 'guests')}
              placeholder='Search startup list'
            />

            <section className='search-list'>
              {sub.map((item, i) => {
                return (
                  <div key={i} onClick={() => addItem(item, 'guests')}>
                    <GuestItem name={item?.startupname ?? item?.firstname} />
                  </div>
                );
              })}
            </section>
          </section>
          {guests.map((item, index) => {
            return (
              <section
                key={index}
                className='d-flex align-items-center justify-content-between mb-2'
              >
                <GuestItem name={item?.name} />
                <img
                  src={closeIcon}
                  onClick={() => deleteItem(item?.profileId, 'guests')}
                  alt='close'
                />
              </section>
            );
          })}
        </section>
        {visibility === 'Private' && (
          <section className='mb-4'>
            <p className='mb-3'>Add Attendees</p>
            <section className='search-input mb-3'>
              <img src={searchIcon} alt='search' />
              <input
                type='search'
                onChange={(e) => onChange(e, 'attendees')}
                placeholder='Search startup list'
              />

              <section className='search-list'>
                {subAttendees.map((item, i) => {
                  return (
                    <div key={i} onClick={() => addItem(item, 'attendees')}>
                      <GuestItem name={item?.startupname ?? item?.firstname} />
                    </div>
                  );
                })}
              </section>
            </section>
            {attendees.map((item, index) => {
              return (
                <section
                  key={index}
                  className='d-flex align-items-center justify-content-between mb-2'
                >
                  <GuestItem name={item?.name} />
                  <img
                    src={closeIcon}
                    onClick={() => deleteItem(item?.profileId, 'attendees')}
                    alt='close'
                  />
                </section>
              );
            })}
          </section>
        )}

        <section className='text-right mb-4'>
          {/* <Button type={"submit"}  label="Create" loading={loading} variant="secondary" /> */}

          <Button
            type={'submit'}
            label={loading ? <CircularLoader /> : 'Create'}
            variant='secondary'
          />
        </section>
      </Form>
    </div>
  );
};
