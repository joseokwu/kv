import React , { useEffect , useState , useCallback } from 'react'
import { AllApplication } from './allApplication'
import { PageLoader } from "../../../components";
import { useActivity  } from '../../../hooks/useBusiness';
import {  getStartupRequest } from '../../../services';
import { useAuth } from '../../../hooks/useAuth';


export const MyApplications = () => {

  const [loading, setLoading] = useState(false);
  const { stateAuth} = useAuth();
  const [requests , setRequests] = useState([])

  const getData = useCallback(async () => {

    setLoading(true)
   const allReq = await getStartupRequest({
     startupId:stateAuth?.user?.userId,
     page:1,
     limit:5
   })
   console.log(allReq?.data)
     setRequests(allReq?.data);
     setLoading(false);

  },[stateAuth?.user?.userId])

  useEffect(() =>{

    getData();

  },[])


  if(loading){
    return <PageLoader num={[1, 2 , 3, 4]} />
  }

  return (
    <div>
      <div className="mb-4">
        <AllApplication data={requests} />
      </div>
    </div>
  )
}


