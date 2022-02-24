import { HeadWrapper, UpcomingCard } from './dash.component'
import { images } from '../../../constants/domiData'
import clock from '../../../assets/images/clock.svg'
import { useHistory } from 'react-router-dom'

export const UpComing = () => {
  const todoArr = [1, 2, 3]
  const history = useHistory()

  return (
    <div className="container">
      <HeadWrapper className="d-flex justify-content-between mt-5 mb-3">
        <p className="text-nowrap">Upcoming Events</p>
        <span className="text-nowrap" onClick={() => history.push('/startup/events')}>See All</span>
      </HeadWrapper>

      <div className="row ml-1" style={{ columnGap: 10 }}>
        {todoArr.map((i) => (
          <UpcomingCard key={i} className="col-lg-4 col-12 col-md-6">
            <div className="d-flex justify-content-between head">
              <h6>Appleiine House Demo</h6>
              {/* <CustomThreeDots /> */}
            </div>

            <div className="d-flex justify-content-between my-4 date">
              <span>05 | September</span>
              <article className="event_time">
                <img src={clock} alt="clock" /> 10:00pm - 12pm
              </article>
              {/* <Tag name="Today" color="#120398" bg="#DEF6FF" fz="14px" /> */}
            </div>

            <div className="">
              <p>
                Lorem ipsum dolor sit amet, consectetur g elit. Enim lectus
                morbi elementum eu.Lorem ipsu.
              </p>
            </div>

            <div className="mt-4 mb-2 foot d-flex justify-content-between">
              <button>View Details</button>
              <span className="mx-4">
                {images.map((data, i) => (
                  <img className="mx-n2" key={i} src={data.icon} />
                ))}
              </span>
            </div>
          </UpcomingCard>
        ))}
      </div>
    </div>
  )
}
