import {
  ProgramCardWrapper,
  TabFilterWrapper,
  TodoCard,
} from './program.sttyled'
import woman from '../../assets/icons/woman.svg'
import down from '../../assets/icons/downArrow.svg'
import DownloadIcon from '../../assets/icons/downloadIcon.svg'
import { Tabs } from '../../components/tabs/Tabs'
import { Session } from './components/sessions'
import { useHistory } from 'react-router-dom'
import { Assignment } from './components/assignment'
import { Rating } from './components/rating'
import { CalenderComponent } from './components/calender'
export const Program = () => {
  const tabList = ['Calender', 'Session', 'Assignment', 'Rating']

  const {
    location: { hash },
  } = useHistory()

  const renderComponent = () => {
    switch (hash) {
      case '#Calender':
        return <CalenderComponent />
      case '#Session':
        return <Session />
      case '#Assignment':
        return <Assignment />
      case '#Rating':
        return <div></div>
      default:
        return <span></span>
    }
  }

  return (
    <div className="container">
      <ProgramCardWrapper className=" row">
        <div className="col-lg-6">
          <img src={woman} alt="woman" className="img" />
        </div>
        <div className="div col-lg-6">
          <h5> Welcome to Knight Ventures Program</h5>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet,
            facilisi sodales cursus tellus nam ut. Enim, at imperdiet praesent
            velit. Eget consequat, sollicitudin molestie curabitur lobortis
            imperdiet. Vulputate malesuada tortor sit mi laoreet. Iaculis quis
            pretium urna.
          </p>
          <div className="my-5">
            <button>
              Program Info Pack{' '}
              <img className="ps-2" src={DownloadIcon} alt="download Icon" />
            </button>
          </div>
        </div>
      </ProgramCardWrapper>

      <TabFilterWrapper className="pt-3">
        <section className="my-3 mx-3 container d-flex justify-content-between">
          <Tabs tabItems={tabList} />

          <div className="me-3">
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
        </section>
      </TabFilterWrapper>

      <section className="mb-5 container ">{renderComponent()}</section>
    </div>
  )
}
