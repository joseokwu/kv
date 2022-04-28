import logo from "../../assets/images/sampleApplicantsLogo.png";
import { ApplicationCard } from '../../components/applicationCard/ApplicationCard';


export const ExpireComponent = ({data}) =>{

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


// category: "Cloud"
// contactName: "Winner Grace"
// contactPhone: "+234 709 245 2345"
// industry: (5) ['Tech', 'Engineering', 'Career', 'Engineering', 'Career']
// location: "San francisco United State"
// logo: ""
// name: "Digital Ocean"
// offerings:
// eligibility: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
// note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
// offerings: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
// process: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
// [[Prototype]]: Object
// position: "Manager"
// turnarround: "10 days"
// url: "www.michealsmith.com"
// validity: "3