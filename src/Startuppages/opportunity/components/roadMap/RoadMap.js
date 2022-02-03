import React from 'react'
import { Button } from '../../../../Startupcomponents'
import { RoadMapTodo } from './components/RoadMapTodo'
import { MapPoint } from './components/MapPoint'
import './roadMap.css'

export const RoadMap = () => {
  return (
    <div>
      {/* <h3 className="tab-section-title">Future Road Map</h3> */}

      <section className="row">
        <div className="col-xl-4 col-lg-5 mb-4">
          <article className="road-map-card">
            <div className="d-flex mb-4" style={{ columnGap: '1rem' }}>
              <MapPoint color="#35D662" />
              <span>
                <p className="point-title">Stage</p>
                <p className="point-desc">Euismod netus eget donec diam.</p>
              </span>
            </div>

            <div className="d-flex mb-4" style={{ columnGap: '1rem' }}>
              <MapPoint color="#2E3192" />
              <span>
                <p className="point-title">Idea</p>
                <p className="point-desc">Euismod netus eget donec diam.</p>
              </span>
            </div>

            <div className="d-flex mb-4" style={{ columnGap: '1rem' }}>
              <MapPoint />
              <span>
                <p className="point-title">Prototype</p>
                <p className="point-desc">Euismod netus eget donec diam.</p>
              </span>
            </div>

            <div className="d-flex mb-4" style={{ columnGap: '1rem' }}>
              <MapPoint />
              <span>
                <p className="point-title">Minimum Viable Product</p>
                <p className="point-desc">Euismod netus eget donec diam.</p>
              </span>
            </div>

            <div className="d-flex mb-4" style={{ columnGap: '1rem' }}>
              <MapPoint />
              <span>
                <p className="point-title">Early customers</p>
                <p className="point-desc">Euismod netus eget donec diam.</p>
              </span>
            </div>

            <div className="d-flex mb-4" style={{ columnGap: '1rem' }}>
              <MapPoint />
              <span>
                <p className="point-title">Revenue generating</p>
                <p className="point-desc">Euismod netus eget donec diam.</p>
              </span>
            </div>

            <div className="d-flex mb-4" style={{ columnGap: '1rem' }}>
              <MapPoint withStem={false} />
              <span>
                <p className="point-title">Growth</p>
                <p className="point-desc">Euismod netus eget donec diam.</p>
              </span>
            </div>
          </article>
        </div>

        <div className="col-xl-8 col-lg-7 mb-4">
          <article className="road-map-card" style={{ background: 'white' }}>
            <section
              className="d-flex align-items-center justify-content-between flex-wrap mb-5"
              style={{ rowGap: 10 }}
            >
              <div
                className="d-flex align-items-center flex-wrap"
                style={{ rowGap: 10, columnGap: '1rem' }}
              >
                <span className="road-map-tag">
                  <div></div> Ongoing
                </span>
                <Button label="Completed" className="transparent-btn" />
              </div>

              <Button label="Add new goal" />
            </section>

            <section>
              <RoadMapTodo progress={50} />
              <RoadMapTodo progress={32} />
              <RoadMapTodo progress={40} />
              <RoadMapTodo progress={20} />
              <RoadMapTodo progress={50} />
              <RoadMapTodo progress={25} />
            </section>
          </article>
        </div>
      </section>
    </div>
  )
}
