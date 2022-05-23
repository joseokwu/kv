import React , { useState , useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DashCard, Tabs } from "../../components";
import styles from "./applicationMgt.module.css";
import { useAuth } from './../../hooks/useAuth';
import { getStakeHolders } from "../../services";
import {
  KVScreeningTable,
  MentorScreeningTable,
  PendingTable,
  RecommendationTable,
  AcceptedTable,
  DeclinedTable,
  ApprovedTable
} from "./components";

export const ApplicationMgt = () => {


  const mgtTab = [
    "Pending",
    "Approved",
    "KV Screening",
    "Recommended",
    "Mentor Screening",
    "Accepted",
  ];

const { stateAuth } = useAuth();
  const {
    location: { hash },
  } = useHistory();
  const [currentPagePending, setCurrentPagePending] = useState(1);
  const [currentKv, setCurrentPageKv] = useState(1);
  const [currentPageMentor, setCurrentPageMentor] = useState(1);
  const [currentPageAccept, setCurrentPageAccept] = useState(1);
  const [applications , setApplication] = useState({});
  const [kvScreening, setKvScreening] = useState({});
  const [mentorScreening , setMentorScreening] = useState({});
  const [accepted, setAccepted] = useState({});
  //console.log(stateAuth)

  useEffect(() => {
    
    const getData = async () => {
   
      const res = await getStakeHolders({
        page:currentPagePending,
        limit:5,
        type:'startup',
        query:{
          applicationCompleted:true ,
          recommended:false,
          approveToEvaluate:false,
          passedEvaluation:false
        }
      })
      const kvRes = await getStakeHolders({
        page:currentKv,
        limit:5,
        type:'startup',
        query:{applicationCompleted:true , approveToEvaluate:true}
      })
      const mentRes = await getStakeHolders({
        page:currentPageMentor,
        limit:5,
        type:'startup',
        query:{applicationCompleted:true , 
          recommended:true ,
          approveToEvaluate:false }
      })
      const acceptedRes = await getStakeHolders({
        page:currentPageAccept,
        limit:5,
        type:'startup',
        query:{applicationCompleted:true , 
         recommended:false,
         approveToEvaluate:true,
         passedEvaluation:true
        }
      })
      console.log(res?.data)  
      setApplication(res?.data);
      setKvScreening(kvRes?.data);
      console.log(kvRes?.data);
      setAccepted(acceptedRes?.data)
      setMentorScreening(mentRes?.data);

      console.log(kvRes?.data)
    }

    getData()

    return () =>{
      setApplication()
      setKvScreening();
      setAccepted()
      setMentorScreening();
    }

  }, [currentPagePending , currentKv, currentPageMentor , currentPageAccept])

  const renderComponent = () => {
    switch (hash) {
      case `#${mgtTab[0]}`:
        return <PendingTable applications={applications} currentPending={currentPagePending}
         setCurrentPending={setCurrentPagePending}  />;
         case `#${mgtTab[1]}`:
           return <ApprovedTable approved={kvScreening}  />
      case `#${mgtTab[2]}`:
        return <KVScreeningTable />;
      case `#${mgtTab[3]}`:
        return <RecommendationTable />;
      case `#${mgtTab[4]}`:
        return <MentorScreeningTable />;
      case `#${mgtTab[5]}`:
        return <AcceptedTable />;
      case `#${mgtTab[6]}`:
        return <DeclinedTable />;
      default:
        return <PendingTable />;
    }
  };
 
  return (
    <div className="p-5" style={{ maxWidth: 2000 }}>
      <section className="d-flex align-items-center dashboard-cards mb-5">

 <DashCard
className="col-lg-3 col-md-6 col-12"
name={"All Application"}
count={applications?.metadata?.total ?? 0}
color={"#E5FFE4"}
/>
<DashCard
className="col-lg-3 col-md-6 col-12"
name={"KV Screening"}
count={kvScreening?.metadata?.total ?? 0}
color={"#FAD7DC"}
/>
<DashCard
className="col-lg-3 col-md-6 col-12"
name={"Mentors Screening"}
count={mentorScreening?.metadata?.total ?? 0}
color={"#E5FFE4"}
/>
<DashCard
className="col-lg-3 col-md-6 col-12"
name={"Accepted"}
count={accepted?.metadata?.total ?? 0}
color={"#FAD7DC"}
/>
      </section>

      <section className="mb-45">
        <Tabs tabItems={mgtTab} />
      </section>

      <section>{renderComponent()}</section>
    </div>
  );
};
