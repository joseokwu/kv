import React from 'react';
import { Button, ProgressBar } from '../../../components';
import { formatDate } from '../../../utils/helpers';

export const RoadMap = ({ data }) => {
  return (
    <div>
      {/* <h3 className="tab-section-title">Future Road Map</h3> */}

      {data?.length > 0 && (
        <section className='row'>
          <div className='col-xl-4 col-lg-5 mb-4'>
            <article className='road-map-card'>
              <div className='d-flex mb-4' style={{ columnGap: '1rem' }}>
                <MapPoint color='#35D662' />
                <span>
                  <p className='point-title'>Stage</p>
                  <p className='point-desc'>Euismod netus eget donec diam.</p>
                </span>
              </div>

              <div className='d-flex mb-4' style={{ columnGap: '1rem' }}>
                <MapPoint color='#2E3192' />
                <span>
                  <p className='point-title'>Idea</p>
                  <p className='point-desc'>Euismod netus eget donec diam.</p>
                </span>
              </div>

              <div className='d-flex mb-4' style={{ columnGap: '1rem' }}>
                <MapPoint />
                <span>
                  <p className='point-title'>Prototype</p>
                  <p className='point-desc'>Euismod netus eget donec diam.</p>
                </span>
              </div>

              <div className='d-flex mb-4' style={{ columnGap: '1rem' }}>
                <MapPoint />
                <span>
                  <p className='point-title'>Minimum Viable Product</p>
                  <p className='point-desc'>Euismod netus eget donec diam.</p>
                </span>
              </div>

              <div className='d-flex mb-4' style={{ columnGap: '1rem' }}>
                <MapPoint />
                <span>
                  <p className='point-title'>Early customers</p>
                  <p className='point-desc'>Euismod netus eget donec diam.</p>
                </span>
              </div>

              <div className='d-flex mb-4' style={{ columnGap: '1rem' }}>
                <MapPoint />
                <span>
                  <p className='point-title'>Revenue generating</p>
                  <p className='point-desc'>Euismod netus eget donec diam.</p>
                </span>
              </div>

              <div className='d-flex mb-4' style={{ columnGap: '1rem' }}>
                <MapPoint />
                <span>
                  <p className='point-title'>Revenue generating</p>
                  <p className='point-desc'>Euismod netus eget donec diam.</p>
                </span>
              </div>

              <div className='d-flex mb-4' style={{ columnGap: '1rem' }}>
                <MapPoint withStem={false} />
                <span>
                  <p className='point-title'>Growth</p>
                  <p className='point-desc'>Euismod netus eget donec diam.</p>
                </span>
              </div>
            </article>
          </div>

          <div className='col-xl-8 col-lg-7 mb-4'>
            <article className='road-map-card' style={{ background: 'white' }}>
              <section
                className='d-flex align-items-center justify-content-between flex-wrap mb-5'
                style={{ rowGap: 10 }}
              >
                <div
                  className='d-flex align-items-center flex-wrap'
                  style={{ rowGap: 10, columnGap: '1rem' }}
                >
                  <span className='road-map-tag'>
                    <div></div> Ongoing
                  </span>
                  <Button label='Completed' className='transparent-btn' />
                </div>
              </section>

              <section>
                {data?.length > 0 &&
                  data?.map((item, i) => {
                    return (
                      <RoadMapTodo data={item} progress={item?.progress} />
                    );
                  })}
              </section>
            </article>
          </div>
        </section>
      )}
    </div>
  );
};

export const MapPoint = ({ color = '#D5D5D5', withStem = true }) => {
  return (
    <svg
      width='32'
      height='67'
      viewBox='0 0 32 67'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='32' height='31' rx='15.5' fill={color} />
      <path
        d='M13.751 18.2191L10.8248 15.2929L9.82837 16.2823L13.751 20.2049L22.1715 11.7843L21.1821 10.7949L13.751 18.2191Z'
        fill='white'
      />
      {withStem && (
        <path
          d='M17 67L17 31H15L15 67H17ZM15 31L15 67H17L17 31H15Z'
          fill={color}
        />
      )}
    </svg>
  );
};

export const RoadMapTodo = ({ progress = 0, data }) => {
  return (
    <div className='road-map-todo'>
      <p className='todo-task'> {data?.title} </p>
      <span>
        <p className='todo-info-header'>Due Data</p>
        <p className='todo-date'>{data?.dueDate}</p>
      </span>

      <span>
        <p className='todo-info-header'>Contributors</p>
        <div className='todo-contributor'>
          {data?.teamMember?.length > 0 &&
            data?.teamMember?.map((d, i) => {
              return <img src={d?.avatar} alt='contributor' key={i} />;
            })}
        </div>
      </span>
      <span style={{ flexBasis: '22%' }}>
        <p className='todo-info-header'>Progress</p>
        <ProgressBar
          isMeasured={true}
          className='todo-progress'
          progress={data?.completed}
        />
      </span>
    </div>
  );
};
