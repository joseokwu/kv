import { HeadWrapper, TodoCard } from './dash.component'
import { CustomThreeDots } from '../../../components'
import { images } from '../../../constants/domiData'
import { Tag } from '../../../components'
import { useHistory } from 'react-router-dom'

export const TodoList = () => {
  const todoArr = [1, 2]
  const history = useHistory()

  return (
    <div className="container">
      <HeadWrapper className="d-flex justify-content-between">
        <h5 className="text-nowrap">To Do List</h5>
        <span
          className="text-nowrap spn"
          onClick={() => history.push('/todolist')}
        >
          See all
        </span>
      </HeadWrapper>
      <div className="row">
        {todoArr.map((i) => (
          <TodoCard key={i} className="col-lg-6 col-12 mx-3">
            <div className="d-flex justify-content-between head">
              <h6>Assignment</h6>
              <CustomThreeDots />
            </div>

            <div className="d-flex justify-content-between my-5 date">
              <h6>05 | September</h6>
              <Tag name="Today" color="#058DC1" bg="#DEF6FF" />
            </div>

            <div className="my-5">
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lectus morbi elementum eu.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.{' '}
              </p>
            </div>

            <div className="my-4 foot">
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
