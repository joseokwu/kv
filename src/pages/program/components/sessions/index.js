import { TodoCard, TabFilterWrapper } from './session.styled'
import person3 from '../../../../assets/icons/person3.svg'
import clock from '../../../../assets/icons/clocksm.svg'
import down from '../../../../assets/icons/downArrow.svg'
import { CustomThreeDots } from '../../../../components'
import { Tag } from '../../../../components/tag/Tag'

export const Session = () => {
  const upArr = [1, 2]
  const proArr = [1]
  const pendArr = [1]
  const comArr = [1, 2]
  const reArr = [1, 2]

  return (
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
        <TodoCard key={i} className="col-6 mx-3 px-5">
          <div className="d-flex justify-content-between head">
            <div className="d-flex">
              <h6 className="mr-5">Business Canvas Demo</h6>
              <Tag name="Upcoming" bg="#DEF6FF" fz="12px" color="#058DC1" />
            </div>

            <CustomThreeDots />
          </div>

          <div className="d-flex my-5 date">
            <h6>05 | September</h6>
            <article className="pt-1 mx-4">Duration - 45minutes</article>

            <div>
              <img src={clock} alt="clock" />
              <span className="ps-1">10am - 12pm</span>
            </div>
          </div>

          <div className="my-5 body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>

          <div className="my-4 foot d-flex justify-content-between ">
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
        <TodoCard key={i} className="col-6 mx-3 px-5">
          <div className="d-flex justify-content-between head">
            <div className="d-flex">
              <h6 className="mr-5">Business Canvas Demo</h6>
              <Tag name="In-progress" bg="#2E3192" fz="12px" color="#FAFFFB" />
            </div>

            <CustomThreeDots />
          </div>

          <div className="d-flex my-5 date">
            <h6>05 | September</h6>
            <article className="pt-1 mx-4">Duration - 45minutes</article>

            <div>
              <img src={clock} alt="clock" />
              <span className="ps-1">10am - 12pm</span>
            </div>
          </div>

          <div className="my-5 body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>

          <div className="my-4 foot d-flex justify-content-between ">
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

      {pendArr.map((i) => (
        <TodoCard key={i} className="col-6 mx-3 px-5">
          <div className="d-flex justify-content-between head">
            <div className="d-flex">
              <h6 className="mr-5">Business Canvas Demo</h6>
              <Tag name="Pending" bg="#FFFDD1" fz="12px" color="#BEB706" />
            </div>

            <CustomThreeDots />
          </div>

          <div className="d-flex my-5 date">
            <h6>05 | September</h6>
            <article className="pt-1 mx-4">Duration - 45minutes</article>

            <div>
              <img src={clock} alt="clock" />
              <span className="ps-1">10am - 12pm</span>
            </div>
          </div>

          <div className="my-5 body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>

          <div className="my-4 foot d-flex justify-content-between ">
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
        <TodoCard key={i} className="col-6 mx-3 px-5">
          <div className="d-flex justify-content-between head">
            <div className="d-flex">
              <h6 className="mr-5">Business Canvas Demo</h6>
              <Tag name="Complete" bg="#D1FFD3" fz="12px" color="#337808" />
            </div>

            <CustomThreeDots />
          </div>

          <div className="d-flex my-5 date">
            <h6>05 | September</h6>
            <article className="pt-1 mx-4">Duration - 45minutes</article>

            <div>
              <img src={clock} alt="clock" />
              <span className="ps-1">10am - 12pm</span>
            </div>
          </div>

          <div className="my-5 body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>

          <div className="my-4 foot d-flex justify-content-between ">
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
        <TodoCard key={i} className="col-6 mx-3 px-5">
          <div className="d-flex justify-content-between head">
            <div className="d-flex">
              <h6 className="mr-5">Business Canvas Demo</h6>
              <Tag name="Complete" bg="#E8E8E8" fz="12px" color="#181818" />
            </div>

            <CustomThreeDots />
          </div>

          <div className="d-flex my-5 date">
            <h6>05 | September</h6>
            <article className="pt-1 mx-4">Duration - 45minutes</article>

            <div>
              <img src={clock} alt="clock" />
              <span className="ps-1">10am - 12pm</span>
            </div>
          </div>

          <div className="my-5 body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>

          <div className="my-4 foot d-flex justify-content-between ">
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
  )
}
