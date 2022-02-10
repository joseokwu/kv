import { HeadWrapper, TodoCard } from './dash.component'
import { CustomThreeDots } from '../../../Startupcomponents'
import { images } from '../../../constants/domiData'
import { Tag } from '../../../Startupcomponents'
import { useHistory } from 'react-router-dom'

export const TodoList = () => {
  const todoArr = [1]
  const toArr = [1]
  const history = useHistory()

  return (
    <div className="container">
      <HeadWrapper className="d-flex justify-content-between">
        <h5 className="text-nowrap">To Do List</h5>
        <span className="text-nowrap" onClick={() => history.push('/todolist')}>
          See All
        </span>
      </HeadWrapper>
      <div className="row" style={{ columnGap: 10}}>
        {todoArr.map((i) => (
          <TodoCard key={i} className="col-lg-6 col-12">
            <div className="d-flex justify-content-between head">
              <h6>Assignment</h6>
              <CustomThreeDots />
            </div>

            <div className="d-flex justify-content-between my-3 date">
              <span>05 | September</span>
              <Tag name="Today" color="#058DC1" bg="#DEF6FF" />
            </div>

            <div className="">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lectus morbi elementum eu.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>

            <div className="mt-4 mb-2 foot">
              <span>Assigned to</span>
              <span className="mx-4">
                {images.map((data, i) => (
                  <img className="mx-n2" key={i} src={data.icon} />
                ))}
              </span>
            </div>
          </TodoCard>
        ))}

        {toArr.map((i) => (
          <TodoCard key={i} className="col-lg-6 col-12">
            <div className="d-flex justify-content-between head">
              <h6>Business Canvas Assignment</h6>
              <CustomThreeDots />
            </div>

            <div className="d-flex justify-content-between my-3 date">
              <span>05 | September</span>
              <Tag name="Tomorrow" color="#4F5253" bg="#EFEFEF" />
            </div>

            <div className="">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lectus morbi elementum eu.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>

            <div className="mt-4 mb-2 foot">
              <span>Assigned to</span>
              <span className="mx-4">
                {images.map((data, i) => (
                  <img className="mx-n2" key={i} src={data.icon} />
                ))}
              </span>
            </div>
          </TodoCard>
        ))}
      </div>
    </div>
  )
}