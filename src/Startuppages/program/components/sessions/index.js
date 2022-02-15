import React, { useState } from 'react'
import { TodoCard, TabFilterWrapper, InProgress } from './session.styled'
import person3 from '../../../../assets/icons/person3.svg'
import clock from '../../../../assets/icons/clocksm.svg'
import down from '../../../../assets/icons/downArrow.svg'
import { CustomThreeDots } from '../../../../Startupcomponents'
import { Tag } from '../../../../Startupcomponents/tag/Tag'
import { SmallModal } from '../../../../Startupcomponents'
import lady from '../../../../assets/images/smileLady.svg'

export const Session = () => {
  const upArr = [1, 2]
  const proArr = [1, 2]
  const comArr = [1, 2]
  const reArr = [1, 2]
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      {showModal ? (
        <SmallModal id="inProgressModal" title="" closeModal={setShowModal}>
          <InProgressModal />
        </SmallModal>
      ) : (
        <span></span>
      )}
      <div className="row mt-5">
        {/* <TabFilterWrapper>
      <div className="me-3 my-3 d-flex justify-content-end">
          <button
            className="d-flex align-items-center sort-btn"
            style={{ columnGap: 7 }}
            data-toggle="dropdown"
          >
            <span>
              <span>Sort by: </span> Industry
            </span>
            <img src={down} alt="down" />
          </button>
        </div>
      </TabFilterWrapper> */}

        {upArr.map((i) => (
          <TodoCard key={i} className="col-6 mx-3 px-4">
            <div className="d-flex justify-content-between head">
              <div className="d-flex">
                <h6 className="mr-5">Business Canvas Demo</h6>
                <Tag name="Upcoming" bg="#DEF6FF" fz="12px" color="#058DC1" />
              </div>

              <CustomThreeDots />
            </div>

            <div className="d-flex my-2 date">
              <h6>05 | September</h6>
              <article className="pt-1 mx-4">Duration - 45minutes</article>

              <div>
                <img src={clock} alt="clock" />
                <span className="ps-1">10am - 12pm</span>
              </div>
            </div>

            <div className="my-4 body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lectus morbi elementum eu.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>

            <div className="my-2 foot d-flex justify-content-between ">
              <button>View Session</button>
              <div className="d-flex mx-4">
                <div>
                  <img className="" src={person3} />
                </div>
                <div className="d-block ms-2 mt-2">
                  <p className="p"> James </p>
                  <p className="secPara mr-4"> Data Scientist</p>
                </div>
              </div>
            </div>
          </TodoCard>
        ))}

        {proArr.map((i) => (
          <TodoCard
            key={i}
            className="col-6 mx-3 px-4"
            data-target="#inProgressModal"
            onClick={() => setShowModal(true)}
            style={{ cursor: 'pointer' }}
          >
            <div className="d-flex justify-content-between head">
              <div className="d-flex">
                <h6 className="mr-5">Business Canvas Demo</h6>
                <Tag
                  name="In-progress"
                  bg="#F0F1FF"
                  fz="12px"
                  color="#2E3192"
                />
              </div>

              <CustomThreeDots />
            </div>

            <div className="d-flex my-2 date">
              <h6>05 | September</h6>
              <article className="pt-1 mx-4">Duration - 45minutes</article>

              <div>
                <img src={clock} alt="clock" />
                <span className="ps-1">10am - 12pm</span>
              </div>
            </div>

            <div className="my-4 body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lectus morbi elementum eu.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>

            <div className="my-2 foot d-flex justify-content-between ">
              <button>View Session</button>
              <div className="d-flex mx-4">
                <div>
                  <img className="" src={person3} />
                </div>
                <div className="d-block ms-2 mt-2">
                  <p className="p"> James </p>
                  <p className="secPara mr-4"> Data Scientist</p>
                </div>
              </div>
            </div>
          </TodoCard>
        ))}

        {comArr.map((i) => (
          <TodoCard key={i} className="col-6 mx-3 px-4">
            <div className="d-flex justify-content-between head">
              <div className="d-flex">
                <h6 className="mr-5">Business Canvas Demo</h6>
                <Tag name="Complete" bg="#D1FFD3" fz="12px" color="#337808" />
              </div>

              <CustomThreeDots />
            </div>

            <div className="d-flex my-2 date">
              <h6>05 | September</h6>
              <article className="pt-1 mx-4">Duration - 45minutes</article>

              <div>
                <img src={clock} alt="clock" />
                <span className="ps-1">10am - 12pm</span>
              </div>
            </div>

            <div className="my-4 body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lectus morbi elementum eu.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>

            <div className="my-2 foot d-flex justify-content-between ">
              <button>View Session</button>
              <div className="d-flex mx-4">
                <div>
                  <img className="" src={person3} />
                </div>
                <div className="d-block ms-2 mt-2">
                  <p className="p"> James </p>
                  <p className="secPara mr-4"> Data Scientist</p>
                </div>
              </div>
            </div>
          </TodoCard>
        ))}

        {reArr.map((i) => (
          <TodoCard key={i} className="col-6 mx-3 px-4">
            <div className="d-flex justify-content-between head">
              <div className="d-flex">
                <h6 className="mr-5">Business Canvas Demo</h6>
                <Tag
                  name="Rescheduled"
                  bg="#E8E8E8"
                  fz="12px"
                  color="#181818"
                />
              </div>

              <CustomThreeDots />
            </div>

            <div className="d-flex my-2 date">
              <h6>05 | September</h6>
              <article className="pt-1 mx-4">Duration - 45minutes</article>

              <div>
                <img src={clock} alt="clock" />
                <span className="ps-1">10am - 12pm</span>
              </div>
            </div>

            <div className="my-4 body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lectus morbi elementum eu.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>

            <div className="my-2 foot d-flex justify-content-between ">
              <button>View Session</button>
              <div className="d-flex mx-4">
                <div>
                  <img className="" src={person3} />
                </div>
                <div className="d-block ms-2 mt-2">
                  <p className="p"> James </p>
                  <p className="secPara mr-4"> Data Scientist</p>
                </div>
              </div>
            </div>
          </TodoCard>
        ))}
      </div>
    </div>
  )
}

export const InProgressModal = () => {
  return (
    <InProgress>
      <div className="mx-3">
        <div className="d-flex">
          <div>
            <h2>Legal Frame Work</h2>
          </div>
          <div className="mt-1 ms-4">
            <Tag name="In-progress" bg="#F0F1FF" fz="12px" color="#2E3192" />
          </div>
        </div>

        <div className="workshop mt-2">
          <article>
            <span>Workshop - </span> Legal Sessions
          </article>
        </div>

        <div className="d-flex mt-3 date">
          <h6>05 | September</h6>
          <article className="pt-1 mx-4">Duration - 45minutes</article>

          <div>
            <img src={clock} alt="clock" />
            <span className="ps-1">10am - 12pm</span>
          </div>
        </div>

        <div className="mt-4 mentor">
          <h3 className="pb-2">Mentor</h3>
          <div className="d-flex">
            <img src={lady} alt="mentor pic" />
            <div className="ms-3">
              <p>Prima Jakatar</p>
              <span>Partner at Apple Inc. Canada</span>
            </div>
            <div className="ms-5">
              <Tag name="Available" bg="#F0F1FF" fz="12px" color="#2E3192" />
            </div>
          </div>
        </div>

        <div className="sesDesc my-5">
          <h6 className="pb-2">Session Description</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
            morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.{' '}
          </p>
        </div>

        <div className="mb-5">
          <button>Join Session</button>
        </div>
      </div>
    </InProgress>
  )
}
