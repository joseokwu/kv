import network from '../../../assets/icons/networkingIcon.svg';
import {GlobalOutlined } from '@ant-design/icons';

export const FinancialDetails = () => {
  return (
    <div className="mt-4 opp-page-card py-3">
      <h3 className="sub-card-title">Contact Details</h3>

      <section
        className="mt-4 d-flex align-items-center justify-content-between "
       
      >
        <div className="d-flex align-items-center">
        <GlobalOutlined /> <a href='http://google.com' className='mx-2' >www.applesteen.com</a>
        </div>

      </section>
    </div>
  );
};
