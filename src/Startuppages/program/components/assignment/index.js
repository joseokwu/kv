import { TodoCard } from './styled'
import person3 from '../../../../assets/icons/person3.svg'
import { CustomThreeDots } from '../../../../Startupcomponents'
import { Tag } from '../../../../Startupcomponents/tag/Tag'
import { images } from '../../../../constants/domiData'

export const Assignment = () => {
  const assArr = [1]
  const buspendArr = [1]
  const buscomArr = [1, 2]

  return (
    <div className="row mt-5">
      {assArr.map((i) => (
        <TodoCard key={i} className="col-lg-6 col-md-6 col-12 mx-3 px-5 mt-3">
          <div className="d-flex justify-content-between head">
            <div className="d-flex">
              <h6 className="mr-3">Assignment</h6>
            </div>

            <CustomThreeDots />
          </div>

          <div className="d-flex justify-content-between my-5 date">
            <h6>05 | September</h6>
            <Tag name="Pending" bg="#FFFDD1" color="#BEB706" fz="12px" />
          </div>

          <div className="my-5 body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>

          <div className="my-4 foot d-flex">
            <span className="mr-3">Assigned to</span>

            <div className="mx-3">
              {images.map((data, i) => (
                <img className="mx-n2" key={i} src={data.icon} />
              ))}
            </div>
          </div>
        </TodoCard>
      ))}

      {buspendArr.map((i) => (
        <TodoCard key={i} className="col-lg-6 col-md-6 col-12 mx-3 px-5 mt-3">
          <div className="d-flex justify-content-between head">
            <div className="d-flex">
              <h6 className="mr-3">Business Canvas Assignment</h6>
            </div>

            <CustomThreeDots />
          </div>

          <div className="d-flex justify-content-between my-5 date">
            <h6>05 | September</h6>
            <Tag name="Pending" bg="#FFFDD1" color="#BEB706" fz="12px" />
          </div>

          <div className="my-5 body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>

          <div className="my-4 foot d-flex">
            <span className="mr-3">Assigned to</span>

            <div className="mx-3">
              {images.map((data, i) => (
                <img className="mx-n2" key={i} src={data.icon} />
              ))}
            </div>
          </div>
        </TodoCard>
      ))}

      {buscomArr.map((i) => (
        <TodoCard key={i} className="col-lg-6 col-md-6 col-12 mx-3 px-5 mt-3">
          <div className="d-flex justify-content-between head">
            <div className="d-flex">
              <h6 className="mr-3">Business Canvas Assignment</h6>
            </div>

            <CustomThreeDots />
          </div>

          <div className="d-flex justify-content-between my-5 date">
            <h6>05 | September</h6>
            <Tag name="Complete" bg="#D1FFD3" color="#337808" fz="12px" />
          </div>

          <div className="my-5 body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>

          <div className="my-4 foot d-flex">
            <span className="mr-3">Assigned to</span>

            <div className="mx-3">
              {images.map((data, i) => (
                <img className="mx-n2" key={i} src={data.icon} />
              ))}
            </div>
          </div>
        </TodoCard>
      ))}
    </div>
  )
}
