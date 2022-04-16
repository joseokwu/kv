import React , { useMemo , useState} from 'react'
import { ApplicationCard } from '../boosterPartner.styled'
import { compImage, applicationCardData } from '../../../constants/domiData'
import { Modal, Tag } from '../../../Startupcomponents'
import { AppliedModal , YetToApplyModal } from './allApplication'
import { applyToPartners } from '../../../services/startup';
import { useAuth } from '../../../hooks/useAuth';
import { useActivity } from '../../../hooks/useBusiness';
import toast from 'react-hot-toast';
import { CircularLoader } from '../../../Startupcomponents/CircluarLoader/CircularLoader';

export const Applied = () => {
  
 
  const { state , sendApp } = useActivity();
  const { stateAuth } = useAuth();

  const [loading, setLoading] = useState(false);
  const [show , setShow] = useState(false)
 const notInteracted = useMemo(() =>{
  return state.applications.length > 0 && state.applications.filter((item) => !item?.pendingRequests.find(i => i.startupId === stateAuth?.user?.userId) && !item?.approvedRequests.find(i => i.startupId === stateAuth?.user?.userId) )
 }, [state.applications , stateAuth?.user?.userId ])

 console.log(notInteracted)

const sendApplication = async(value) =>{
 try{
    setLoading(true)
  const newApplication = {
    userId:value?.userId,
    startupId:stateAuth?.user?.userId,
    startupName:stateAuth?.user?.startUpProfile?.startupName,
    description:stateAuth?.user?.product?.description,
    logo: stateAuth?.user?.startUpProfile?.logo
  }

  const response = await applyToPartners(newApplication);
 // console.log(response)  
  toast.success(response?.message)
  setLoading(false);
  sendApp(value?.userId)
 }catch(err){
   console.log(err)
  toast.error(err?.response?.data?.message ?? 'There was an error sending this application')
 }
}


  return (
    <div className="row" style={{ columnGap: 10 }}>
    
      {   notInteracted && notInteracted.length > 0 ?
       ( notInteracted.map((item, i) => (
          <ApplicationCard key={i} className="col-lg-4 col-12 col-md-6">
           
       <Modal id={`applied${i}`} withHeader={false}>
          <YetToApplyModal data={item} />
        </Modal>

         
            <div>
             
              <img  
               className="rounded-circle" 
                src={item?.companyLogo}
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
        ))) : (<span />)
        
        }
    </div>
  )
}
