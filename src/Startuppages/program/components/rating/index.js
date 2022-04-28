import { useState } from 'react'
import { HeadWrapper, RatingContent } from './styled'
import { Tag } from '../../../../Startupcomponents/tag/Tag'
import person3 from '../../../../assets/icons/person3.svg'
// import questionMark from '../../assets/icons/questionMark.svg'
import questionMark from '../../../../assets/icons/questionMark.svg'
import girl from '../../../../assets/images/ratgirl.svg'
import { Table } from '../../../../Startupcomponents/table/Table'

export const Rating = () => {
  const ratingArr = [1, 2, 3, 4, 5]
  const header = [
    { title: 'Topic', accessor: 'topic' },
    { title: 'Mentor', accessor: 'mentor' },
    { title: 'Rating', accessor: 'rating' },
  ]

  const data = [
    {
      mentor: (
        <div className="d-flex align-items-center space-out">
          <img src={girl} alt="" />
          <p>Kate Mcbeth Joan</p>
        </div>
      ),
      topic: 'Business Canva Demo',
      rating: (
        <div className="d-flex justify-content-between">
          <div className="rating-btn">
            <button>0</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
          </div>
        </div>
      ),
    },
    {
      mentor: (
        <div className="d-flex align-items-center space-out">
          <img src={girl} alt="" />
          <p>Kate Mcbeth Joan</p>
        </div>
      ),
      topic: 'Business Canva Demo',
      rating: (
        <div className="d-flex justify-content-between">
          <div className="rating-btn space-out">
            <button>0</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
          </div>
        </div>
      ),
    },
  ]
  return (
    <div className="my-5 container">
      <HeadWrapper>
        <div className="">
          <p>
            <img src={questionMark} alt="question mark" />{' '}
            <span className="scale"> Scale -</span>{' '}
            <span className="score px-2">0 Null</span>{' '}
            <span className="score">|</span>{' '}
            <span className="score px-2">1-Poor</span>{' '}
            <span className="score">|</span>{' '}
            <span className="score px-2">2-Fair</span>{' '}
            <span className="score">|</span>
            <span className="score px-2">3-Good</span>{' '}
            <span className="score">|</span>{' '}
            <span className="score px-2">4-Very Good</span>{' '}
            <span className="score">|</span>
            <span className="score px-2">5-Excellent</span>
          </p>
        </div>
      </HeadWrapper>

      <RatingContent>
        {/* <div className="rating-content my-4">
          <div className="card text-left">
            <div className="card-header">
              <div className="d-flex justify-content-between col-lg-9 text-left py-3">
                <p>Topic</p>
                <p>Mentor</p>
                <p>Rating</p>
              </div>
            </div>
            {ratingArr.map((i) => (
              <div>
                <div key={i} className="row card-body col-lg-12 px-4">
                  <div className="card-text d-flex justify-content-between">
                    <div className="">
                      <p>Business Canva Demo</p>
                    </div>
                    <div className="d-flex">
                      <img src={girl} alt="" />
                      <p className="px-2">Kate Mcbeth Joan</p>
                    </div>
                    <div className="rating-btn">
                      <button>0</button>
                      <button>1</button>
                      <button>2</button>
                      <button>3</button>
                      <button>4</button>
                      <button>5</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <section className="mt-4">
          <Table headers={header} data={data.concat(data)} />
        </section>
      </RatingContent>
    </div>
  )
}
