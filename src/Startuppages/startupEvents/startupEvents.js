import React, { useEffect, useState } from "react";
import { Select, Tabs } from "../../Startupcomponents";
import "./startupEvents.css";
import down from "../../assets/icons/downArrow.svg";
import { SelectionDay } from "./components/selectionDay";
import { getEvents } from "../../services/events";
import { PageLoader } from "../../components";
import { useAuth} from '../../hooks/useAuth';
import Pagination from 'react-bootstrap/Pagination'


export const StartupEvents = ({ history }) => {

  const industry = [
    "Category: All",
    'Accounting',
    'Analytics',
    'Bike Rentals',
    'Cloud Computing',
    'Cloud Telephony',
    'Content Services',
    'CRM',
    'Customer Engagement',
    'Customer Support',
    'E-Learning',
    'Email Marketing',
    'Employee Benefit',
    'Finance',
    'Fitness',
    'Food and Beverages',
    'Garage Services',
    'Gifts and Confectionery',
    'Health and Wellness',
    'Home and Furnishing',
    'Hospitality',
    'Human Resources',
    'Insurance',
    'Investments',
    'IT Rentals',
    'Legal',
    'Loans',
    'Marketing',
    'Merchandise',
    'Messaging',
    'Personal Finance',
    'Printing',
    'Sales Support',
    'Salons and Spas',
    'Signing Solutions',
    'Travel',
    'Virtual Assistant',
  ]

  const {
    location: { hash },
  } = history;

  const { stateAuth } = useAuth();
  const [events, setEvents] = useState([]);
  const pages = []
	const [currentPage, setCurrentPage] = useState(1)
  const [selectionEvents, setSelectionEvents] = useState([]);
  const [demoEvents, setDemoEvents] = useState([]);
  const [pitchEvents, setPitchEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState('');

	const nextPage = ()=>{
    setCurrentPage(currentPage+1)
 
   }
 
   const prevPage = ()=>{
     setCurrentPage(currentPage-1)
 
   }
   
	const movePage =(id)=>{
		setCurrentPage(id)
	}

  
  const fetchData = async () => {
    setLoading(true);
    const res = await getEvents({ 
      userId:stateAuth?.user?.userId,
      page:currentPage,
      limit:5
    });
    setEvents(res?.data)
    setTotal(res?.data?.total)

    setLoading(false)
  };
  
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  
  for(let i = 1; i <= events?.total; i++){
		pages.push(i)
	}


  const renderContent = () => {
    switch (hash) {
      case "#Selection Day":
        return <SelectionDay data={events && events?.data} />;

      case "#Demo Day":
        return <SelectionDay data={events && events?.data} />;

      case "#Pitching Events":
        return <SelectionDay data={events && events?.data} />;

      case "#Other Events":
        return <SelectionDay data={events && events?.data} />;

      default:
        return <SelectionDay data={events && events?.data} />;
    }
  };

  const tabItems = [
    "Selection Day",
    "Demo Day",
    "Pitching Events",
    "Other Events",
  ];

  if (loading) {
    return (
      <PageLoader
        num={[
          selectionEvents,
          demoEvents,
          pitchEvents,
          events,
          selectionEvents,
        ]}
      />
    );
  }
  return (
    <div className="mb-5">
      <div className="col-lg-12">
        <section className="container d-flex align-items-center justify-content-end mb-4">
          {/* <p className="event_title">Events</p> */}
          {/* <img src={searchIcon} alt="search" /> */}
        </section>
      </div>

      <div className="container row d-flex justify-content-between">
        <div className="col d-flex justify-content-between">
          <Tabs tabItems={tabItems} />

          <div className="mx-4">
            {/* <button
              className="d-flex align-items-center sort-btn"
              style={{ columnGap: 7 }}
              data-toggle="dropdown"
            > */}
            <Select placeholder={"Sort by: Industry"} options={industry} />
              {/* <span>
                <span>Sort by: </span> Industry
              </span>
              <img src={down} alt="down" /> */}
            {/* </button> */}
          </div>
        </div>
      </div>

      <div className="col-lg-12 col-xl-12 pt-3">
        <section className="mt-1">{renderContent()}</section>
      </div>
      <div className="d-flex justify-content-end">
				<Pagination>

				{
				events &&	events?.results?.currentPage > 1 ? (
						 <>
				  <Pagination.Prev onClick={prevPage} className='mx-1' />
						{
			
					
					<Pagination.Item  className='mx-1' >{ `${currentPage} of  ${events?.results?.limit}` }</Pagination.Item>
						

				}
				 			{
              	events?.results?.currentPage === events?.results?.limit ? <span />:<Pagination.Next onClick={nextPage} className='mx-1' /> 
							 }
						 </>

					):(
						<>
            {

      <Pagination.Item onClick={()=> movePage(currentPage + 1)} className='mx-1' >{ `${currentPage} of  ${events?.results?.limit}` }</Pagination.Item>
        
    }

                        {
                   events &&  events?.results?.currentPage === events?.results?.limit ? <span /> : <Pagination.Next onClick={nextPage} className='mx-1' />
							     }

						</>
					)
				}

				</Pagination>
			</div>
    </div>
  );
};


// assignmentFile: "https://cdn.shoutng.com/kvnmri9zykq3doplnqtxfi.pdf"
// created_at: "2022-04-15T18:14:25.413Z"
// deadlineDay: "2022-05-13T11:00:00.000Z"
// deadlineTime: "2022-05-13T13:00:00.000Z"
// description: "We teach how to make garri for a living"
// isTrash: false
// programs: "Meeting"