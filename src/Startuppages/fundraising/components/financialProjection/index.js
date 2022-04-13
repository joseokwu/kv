import { Header, Section, VideoWrapper } from './financial.styled'
import RedFile from '../../../../assets/icons/greenFile.svg'
import BlueFile from '../../../../assets/icons/bluFile.svg'

export const FinancialProjection = (data) => {


  return (
    <div>
      <Header className="d-flex justify-content-end">
        {/* <h4>Financial Projection</h4> */}
        <div>
          <span>Update details</span>
        </div>
      </Header>

      <Section>
       {
         data?.data && (
          <VideoWrapper>
          <div className="">
            <div className="d-flex div  justify-content-center align-items-center">
              <img src={RedFile} alt=".#" className="" />
            </div>
            <div id="div" className="">
              <div className="d-flex" style={{ marginLeft: '-1.2rem' }}>
                <img
                  src={BlueFile}
                  alt=".#"
                  style={{ marginLeft: '2rem', width: '10%', height: '10%' }}
                  className=""
                />
                <p
                  className=""
                  style={{ marginLeft: '0.2rem', fontSize: '0.9rem' }}
                >
                  Product Demo
                </p>
              </div>
              <p className="my-n2 p">2.5 mb</p>
            </div>
          </div>
        </VideoWrapper>
         )
       }
      </Section>
    </div>
  )
}
