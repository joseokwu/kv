import logo from "../../assets/images/sampleApplicantsLogo.png";
import { ApplicationCard } from '../../components/applicationCard/ApplicationCard';
import { useAuth } from './../../hooks/useAuth';

export const AllComponent = () =>{
  const { stateAuth } = useAuth();
  
 // console.log(stateAuth?.partnerData?.pendingRequests)

    return (
        <>
            
            {/* stateAuth?.partnerData?.pendingRequests.length > 0  && stateAuth?.partnerData?.pendingRequests.map((d, i) => { */}
        
          <div className="col-lg-6 mb-4">
          {
            stateAuth?.partnerData?.pendingRequests &&  stateAuth?.partnerData?.pendingRequests.map((item , i) =>(
             <div key={i} >
             <ApplicationCard logo={item.logo} data={item} index={i} />
             </div>
            ))   
          }
            {/* <ApplicationCard logo={d.logo} data={d} index={i} /> */}
          </div>
          </>
        );
    
    
}