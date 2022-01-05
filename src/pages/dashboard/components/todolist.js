import { HeadWrapper, TodoCard } from './dash.component'
import { CustomThreeDots } from '../../../components'
import { images } from '../../../constants/domiData'
import { Tag } from '../../../components'

export const TodoList = () => {
  const todoArr = [1, 2]

  return (
    <>
      <HeadWrapper className="d-flex ">
        <h5 className="text-nowrap">Tolist</h5>
        <h6 style={{ marginLeft: '84%' }}>See all</h6>
      </HeadWrapper>
      <div className="row">
        {todoArr.map((i) => (
          <TodoCard key={i} className="col-6 mx-3">
            <div className="d-flex justify-content-between head">
              <h6>Assignment</h6>
              <CustomThreeDots />
            </div>

            <div className="d-flex justify-content-between my-5 date">
              <h6>05 | September</h6>
              <Tag name="Today" color="#210198" bg="#DEF6FF" />
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
              <span>Assigned</span>
              <span className="mx-4">
                {images.map((data, i) => (
                  <img className="mx-n2" key={i} src={data.icon} />
                ))}
              </span>
            </div>
          </TodoCard>
        ))}
      </div>
    </>
  )
}
