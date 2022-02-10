import { ApplicationCard, DashCard, CardFill } from '../../Startupcomponents/index'

import { cardFundData } from '../../constants/domiData'
import { Tabs } from '../../Startupcomponents/tabs/Tabs'
import { FundingAsk } from './components/fundingask'
import { useHistory } from 'react-router-dom'
import { FundUtilization } from './components/fundutilization'
import { CapTable } from './components/captable'
import { PreviousRound } from './components/prevRound'
import { FinancialProjection } from './components/financialProjection'

export const StartupFundingRaising = () => {
  const history = useHistory()
  const {
    location: { hash },
  } = history

  const renderContent = () => {
    switch (hash) {
      case '#Funding Ask':
        return <FundingAsk />
      case '#Fund Utilization':
        return <FundUtilization />
      case '#Cap Table':
        return <CapTable />
      case '#Previous Round':
        return <PreviousRound />
      case '#Financial Projection':
        return <FinancialProjection />
      default:
        return <FundingAsk />
    }
  }

  const tabList = [
    'Funding Ask',
    'Fund Utilization',
    'Cap Table',
    'Previous Round',
    'Financial Projection',
  ]

  return (
    <div className="container">
      <section className="row ">
        {cardFundData.map((data, i) => (
          <>
            <DashCard
              className="col-3 "
              icon={data.icon}
              name={data.name}
              count={data.count}
              color={data.color}
              key={i}
            />
          </>
        ))}
      </section>
      <section className="my-5 container">
        <Tabs tabItems={tabList} />
      </section>
      <section className="mb-5 container ">{renderContent()}</section>
    </div>
  )
}
