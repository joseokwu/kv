import React , { useMemo , useState , useEffect} from 'react'
import { ApplicationCard } from '../boosterPartner.styled'
import { compImage, applicationCardData } from '../../../constants/domiData'
import { Modal, Tag } from '../../../Startupcomponents'
import { AppliedModal , YetToApplyModal } from './allApplication'
import { applyToPartners } from '../../../services/startup';
import { useAuth } from '../../../hooks/useAuth';
import { useActivity } from '../../../hooks/useBusiness';
import toast from 'react-hot-toast';
import { CircularLoader } from '../../../Startupcomponents/CircluarLoader/CircularLoader';
import { EmptyState } from '../../../mentorComponents'
import { validate } from '../../../utils/helpers';
import { getBoosterData  } from '../../../services';
import { PaginationData } from '../../../components';

export const Applied = ({data , apply}) => {
  
  const validationSchema = ["eligibilityCriteria", "importantNote", "offerings", "partnershipValidity", "process", "turnAroundTime"]
  const { state , sendApp } = useActivity();
  const { stateAuth } = useAuth();
  const [partners , setPartners] = useState([])
  const [loading, setLoading] = useState(false);
  const [show , setShow] = useState(false)
 const notInteracted = useMemo(() =>{
  return data?.length > 0 && data.filter((item) => !item?.pendingRequests.find(i => i.startupId === stateAuth?.user?.userId) && !item?.approvedRequests.find(i => i.startupId === stateAuth?.user?.userId) )
 }, [data , stateAuth?.user?.userId ])

 console.log(notInteracted)

const sendApplication = async(value) =>{
 try{
    setLoading(true)
  const newApplication = {
    userId:value?.userId,
    startupId:stateAuth?.startupData?.userId,
    startupName:stateAuth?.user?.businessname,
    email:stateAuth?.email,
    industry:stateAuth?.user?.industry,
    phone:stateAuth?.user?.phone,
    description:stateAuth?.startupData?.product?.description,
    logo: stateAuth?.startupData?.startUpProfile?.logo,
    date: new Date()
  }
  console.log(value)  
  const response = await applyToPartners(newApplication);
 // console.log(response)  
  toast.success(response?.message)
  setLoading(false);
  apply(value?.userId)
 }catch(err){
   console.log(err)
  toast.error(err?.response?.data?.message ?? 'There was an error sending this application')
 }
}

// acceleratorName: "zee world"
// brand: "Brandd"
// businessSector: "business"
// companySize: "21-30"
// contactInfo:
// phoneNumber: "+2348165796896"
// state: "Lagos"
// [[Prototype]]: Object
// elevatorPitch: "sdfdssgg"
// logo: "https://cdn.shoutng.com/kvlcp4wbb4murs5ccrxcvr.png"
// registrationNumber: "6889990088"
// socialMedia:
// companyWebsite: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_current"
// linkedInHandle: "linkedin.com/@fonicake"
// twitterHandle: "@fonicakes"
// [[Prototype]]: Object




// useEffect(() => {
    
//   const getData = async () => {
//     setLoading(true)
//     const res = await getBoosterData({
//       page:currentPage,
//       limit:5
//     })
//     console.log(res?.data)
//     setPartners(res?.data)
//     setLoading(false);

//   }
//   getData()

// }, [currentPage])



  return (
    <div className="row" style={{ columnGap: 10 }}>
      {/* {
        data === null && (<EmptyState />)
      } */}
    
      {   notInteracted && notInteracted?.length > 0 ?
       ( notInteracted.map((item, i) => {
         if (validate(item.offerings, validationSchema)) {
           return (
            <ApplicationCard key={i} className="col-lg-4 col-12 col-md-6">
           
            <Modal id={`applied${i}`} withHeader={false}>
               <YetToApplyModal data={item} />
             </Modal>
     
              
                 <div>
                  
                   <img  
                    className="rounded-circle" 
                     src={item?.logo}
                     style={{width:'40%', height:'50%'}}
                     alt="company logo" />
                   
                 </div>
                 <div className="my-2">
                   <h3>{item?.companyName}</h3>
                 </div>
                 <Tag name={item?.categories} bg="#EDDEFF" color="#1405C1" fz="12px" />
                 <div className="my-3">
                   <p>
                     {item?.companyDescription}
                     <span  
                      data-target={`#applied${i}`} 
                      onClick={() => { setShow(true)}}
                      data-toggle={show ? "modal" : ''}>
                       Read More
                     </span>
                   </p>
                 </div>
                 <button
                 type='button'
                   className={
                    'applyBtn mt-2'
                   }
                   disabled={loading}
                   onClick={()=> sendApplication(item)}
                 >
                   {' '}
                   { 'Apply' }
                 </button>
               </ApplicationCard>
           )
         }
        
       })) : (
          <EmptyState message={"No Offerings yet"} />
        )
        
        }
       
    </div>
  )
}
