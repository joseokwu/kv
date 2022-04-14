import React, { useEffect, useState , useCallback } from 'react'
import {} from './boosterPartner.styled'
import { DashCard, Select, Tabs } from '../../Startupcomponents/index'
import { boosterData } from '../../constants/domiData'
import { useHistory } from 'react-router-dom'
import { AllOfferings } from './components/allOfferings'
import { MyApplications } from './components/myApplications'
import { getBoosterData , getStartupRequest } from '../../services';
import newApp from '../../assets/icons/Star.svg'
import { useAuth } from '../../hooks/useAuth';
import { PageLoader } from "../../components";
import { useActivity  } from '../../hooks/useBusiness';

export const StartupBoosterPartner = () => {

  const { getApp } = useActivity();
  const { stateAuth} = useAuth();

  const [loading, setLoading] = useState(false);
  const [boosterData, setBoosterData] = useState([])




  const categories = [
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

   const getData = useCallback(async () => {
    setLoading(true)
    const res = await getBoosterData()
    getApp(res?.data?.data)
    setLoading(false);

  },[ getApp])


  useEffect(() => {
    
    getData()

  }, [setBoosterData , stateAuth?.applications ])

  console.log()

  const history = useHistory()

  // const alOff =
  //   boosterData?.offerings &&
  //   boosterData?.offerings.filter((item) => item?.status !== 'declined')
  //console.log(alOff)
  // const apli =
  //   boosterData?.offerings &&
  //   boosterData?.offerings.filter((item) => item?.status !== 'not-applied')


  const {
    location: { hash },
  } = history

  const renderContent = () => {
    switch (hash) {
      case '#All Offerings':
        return <AllOfferings  />
        // return <AllOfferings data={boosterData?.offerings} />
      case '#My Applications':
        return <MyApplications  />
      default:
        return <AllOfferings  />
    }
  }
  
  const tabList = ['All Offerings', 'My Applications']

  if(loading){
    return <PageLoader num={[1, 2 , 3, 4]} />
  }

  return (
    <div className="mx-3">
      <section
        className="row tab-wrap"
        style={{ zIndex: '', background: '#FEFEFE' }}
      >
        {/* {boosterData.map((data, i) => ( */}
        {/* <> */}
        <DashCard
          className="col-lg-4 col-md-12 col-12"
          icon={newApp}
          name={'New Deals'}
          count={boosterData?.newDeals ?? 0}
          color={'#D5D6F4'}
        />
        <DashCard
          className="col-lg-4 col-md-12 col-12"
          icon={newApp}
          name={'Applied'}
          count={boosterData?.applied ?? 0}
          color={'#DEF6FF'}
        />
        <DashCard
          className="col-lg-4 col-md-12 col-12"
          icon={newApp}
          name={'Active'}
          count={boosterData?.active ?? 0}
          color={'#D5D6F4'}
        />
        {/* </> */}
        {/* ))} */}
      </section>
      <section className="container my-4 d-flex justify-content-between">
        <Tabs tabItems={tabList} />

        <div className="">
          <Select options={categories} placeholder={'Category: All'} />
        </div>
      </section>
      <section className="mb-5 container ">{renderContent()}</section>
    </div>
  )
}
