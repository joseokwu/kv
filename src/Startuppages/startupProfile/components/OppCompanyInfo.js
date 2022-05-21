import { Button } from '../../../Startupcomponents'
import logo from '../../../assets/images/yeLogo.svg'
import web from '../../../assets/icons/webSm.svg'
import clock from '../../../assets/icons/clock.svg'
import office from '../../../assets/icons/building.svg'
import twitter from '../../../assets/icons/twitterLogo.svg'
import linkedIn from '../../../assets/icons/linkedInLogo.svg'
import whatsApp from '../../../assets/icons/whatsapp.svg'
import share from '../../../assets/icons/share.svg'

export const OppCompanyInfo = ({data}) => {
  return (
    <section className="opp-page-card py-4">
      <div
        className="d-flex align-items-center justify-content-between flex-wrap"
        style={{ rowGap: 10 }}
      ></div>

      <section
        className="mt-4 d-flex  justify-content-between flex-wrap"
        style={{ rowGap: 10 }}
      >
        <div>
          <img src={data?.startupData?.startUpProfile?.logo} alt="logo" className="mb-3" width="50px" style={{objectFit: "cover", objectPosition: "100% 0"}} />
          <h3 className="opp-page-card-title"> { data?.startupData?.startUpProfile?.acceleratorName } </h3>
        </div>

        <div className="d-flex align-items-center">
          <span>
            <img src={linkedIn} alt="linkedIn" width="24" height="24" />
            <img
              src={twitter}
              alt="twitter"
              className="mx-2"
              width="24"
              height="24"
            />
            <img src={whatsApp} alt="whatsapp" />
          </span>
        </div>
      </section>
      <section className="mt-3">
        <h6 className="mb-3"> { data?.industry ?? '' } </h6>
        <p className="">
         {
           data?.description ?? ''
         } 
        </p>
      </section>
    </section>
  )
}
