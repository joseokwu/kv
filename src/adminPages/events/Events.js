import React, { useMemo, useEffect, useState } from 'react';
import { Button, Modal, Tabs } from '../../components';
import { CreateEvent, EventCard } from './components';
import eventImage from '../../assets/icons/eventImage.png';
import { eventRequest } from '../../services/events';

export const Events = () => {
  const tabsItems = [
    'All Events',
    'Selection Day',
    'Demo day',
    'Pitching Session',
    // "Others",
  ];
  const [eventData, setEventData] = useState([]);

  const eventDesc = useMemo(
    () =>
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    []
  );
  const data = useMemo(
    () => [
      {
        name: 'Appleiine House Demo',
        startDate: new Date(2021, 5, 20, 2, 10),
        endDate: new Date(2021, 5, 23, 5, 0),
        description: eventDesc,
        image: eventImage,
      },
      {
        name: 'Appleiine House Demo',
        startDate: new Date(2021, 5, 20, 3, 10),
        endDate: new Date(2021, 5, 23, 5, 0),
        description: eventDesc,
      },
      {
        name: 'Appleiine House Demo',
        startDate: new Date(),
        endDate: new Date(2022, 5, 23, 5, 0),
        description: eventDesc,
        image: eventImage,
      },
      {
        name: 'Appleiine House Demo',
        startDate: new Date(2021, 5, 20, 12, 0),
        endDate: new Date(2022, 5, 23, 5, 0),
        description: eventDesc,
      },
      {
        name: 'Appleiine House Demo',
        startDate: new Date(2021, 5, 20, 10, 30),
        endDate: new Date(2022, 5, 23, 2, 0),
        description: eventDesc,
      },
      {
        name: 'Appleiine House Demo',
        startDate: new Date(),
        endDate: new Date(2022, 5, 23, 5, 0),
        description: eventDesc,
      },
      {
        name: 'Appleiine House Demo',
        startDate: new Date(2021, 5, 20, 3, 45),
        endDate: new Date(2021, 5, 23, 5, 0),
        description: eventDesc,
      },
      {
        name: 'Appleiine House Demo',
        startDate: new Date(2021, 5, 20, 4, 30),
        endDate: new Date(2021, 5, 23, 7, 0),
        description: eventDesc,
        image: eventImage,
      },
      {
        name: 'Appleiine House Demo',
        startDate: new Date(),
        endDate: new Date(2022, 5, 23, 5, 0),
        description: eventDesc,
      },
      {
        name: 'Appleiine House Demo',
        startDate: new Date(2021, 5, 20, 7, 0),
        endDate: new Date(2021, 5, 23, 12, 0),
        description: eventDesc,
      },
    ],
    [eventDesc]
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await eventRequest('allEvents', {
        page: 1,
        limit: 5,
      });
      console.log(res);
      setEventData(res?.data?.data);
    };

    fetchData();
  }, []);

  return (
    <div className='p-5'>
      <Modal id='createEvent' title='Create Event' width={568}>
        <CreateEvent />
      </Modal>
      <section className='d-flex align-items-center justify-content-between mb-45'>
        <h4 className='m-0'>Events</h4>
        <Button
          label='Create Event'
          variant='secondary'
          data-toggle='modal'
          data-target='#createEvent'
        />
      </section>

      <section className='d-flex align-items-center justify-content-between mb-4'>
        <Tabs tabItems={tabsItems} />
      </section>

      <section className='row'>
        <div className='col-lg-6'>
          {eventData?.length > 0 &&
            eventData?.map((info, i) => {
              if (i % 2 === 0) {
                return (
                  <div className='mb-3'>
                    <EventCard data={info} id={i} />
                  </div>
                );
              }
            })}
        </div>

        <div className='col-lg-6'>
          {eventData?.length > 0 &&
            eventData?.map((info, i) => {
              if (i % 2 !== 0) {
                return (
                  <div className='mb-3'>
                    <EventCard data={info} id={i} />
                  </div>
                );
              }
            })}
        </div>
      </section>
    </div>
  );
};
