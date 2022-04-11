import network from '../../../assets/icons/networkingIcon.svg';
import {GlobalOutlined } from '@ant-design/icons';
import web from "../../../assets/icons/webSm.svg";
import clock from "../../../assets/icons/clock.svg";
import office from "../../../assets/icons/building.svg";


export const FinancialDetails = ({data}) => {
  return (
    <div className="mt-3 opp-page-card py-4">
      <h3 className="sub-card-title">Contact Details</h3>

      <section
        className="d-flex align-items-center justify-content-between flex-wrap mt-2"
        style={{ rowGap: 10 }}
      >
        <div className="d-flex align-items-center">
          <img src={web} alt="web" />
          <a
            href={data?.startUpProfile?.socialMedia?.companyWebsite}
            className="ml-2 extra-info"
            style={{ textDecoration: "underline", color: "#2E3192" }}
          >
            { data?.startUpProfile?.socialMedia?.companyWebsite }
          </a>
        </div>
        <div className="d-flex align-items-center">
          <img src={clock} alt="web" width="20" height="20" />
          <p className="ml-2 extra-info">Incorporated { new Date(data?.startUpProfile?.yearFounded).toUTCString() }</p>
        </div>

        <div className="d-flex align-items-center">
          <img src={office} alt="web" />
          <p className="ml-2 extra-info"> { `${data?.startUpProfile?.contactInfo?.registeredAddress} , ${data?.startUpProfile?.contactInfo?.state} , ${data?.startUpProfile?.contactInfo?.country}` } </p>
        </div>
      </section>
    </div>
  );
};
