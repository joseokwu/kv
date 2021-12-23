
import { ApplicationCard, DashCard , 
    CardFill
  } from "../../components/index";

  import { cardFundData } from '../../constants/domiData';
  import { Tabs } from '../../components/tabs/Tabs';
import { FundingAsk } from './components/fundingask';
import { useHistory } from 'react-router-dom';

  export const FundingRaising = ()=>{

    const history = useHistory();
    const {
        location: { hash },
      } = history

    const renderContent = () => {
        switch (hash) {
          case '#Funding Ask':
            return <FundingAsk />;
          default:
            return <FundingAsk />
        }
    }

    const tabList = [
        'Funding Ask', 'Fund Utilization',
        'Cap Table', 'Previous Round',
         'Financial Projection',
       
      ]

    return (
        <div className='container' >

<section className="row ">
        {cardFundData.map((data, i) => (
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
      <section className='my-5 container '  >
                <Tabs tabItems={tabList}  /> 
        </section>
        <section className='mb-5 container ' >
                        {
                            renderContent()
                        }
                    </section>
        </div>
    )
  }


