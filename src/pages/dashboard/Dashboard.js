import React from "react";
import "./dashboard.css";
import { cardData, cardFill } from '../../constants/domiData';
import { ApplicationCard, DashCard , 
  CardFill
} from "../../components/index";
import applicantLogo from "../../assets/images/sampleApplicantLogo.png";
import ApplicationChart from "./components/applicationChart/ApplicationChart";
import { Card } from "react-bootstrap";
import { TodoList } from './components/todolist';
import { UpComing } from './components/upComing';

export const Dashboard = () => {
  

  const appCardData = [1, 2, 3, 4, 5];
  return (
    <div className="dashboard-main">
         
      <section className="row ">
        {cardData.map((data, i) => (
          <>
     

          <DashCard
            className='col-3 '
            icon={data.icon}
            name={data.name}
            count={data.count}
            color={data.color}
            key={i}
          />
          </>
        ))}
      </section>
        
          <section className='container row my-5' >

            {
              cardFill.map((info, i) =>(
                <CardFill key={i} header={info?.header}
                 color={info?.color} amount={info?.amount}
                 time={info?.time} className='col-3 col-6-md '
                    />
              ))
            }

            
          </section>

            <section>
              <TodoList />
            </section>
            <section className='my-4' >
              <UpComing />
            </section>
   
    </div>
  );
};
