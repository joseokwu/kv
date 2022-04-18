import logo from "../../assets/images/sampleApplicantsLogo.png";
import { ApplicationCard } from '../../components/applicationCard/ApplicationCard';


export const AllComponent = ({data}) =>{

    return (
        <>
            {
                data && data.map((d, i) => {
        return (
          <div className="col-lg-6 mb-4" key={i}>
            <ApplicationCard logo={logo} data={d} index={i} />
          </div>
        );
      })
            }
        </>
    )
}