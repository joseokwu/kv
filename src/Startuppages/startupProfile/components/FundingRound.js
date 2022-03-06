import { Tag } from '../../../Startupcomponents'
import { FundRounding, Btn } from './styled'
import clock from '../../../assets/icons/clock.svg'

export const FundingRound = ({data}) => {

  const date = new Date(data && data?.lastFunding);

  return (
    <div className="">
      <FundRounding className="">
        <h6>Startup Details</h6>

        <div className="d-flex mb-3">
          <article className="pr-4">Industry </article>
          <Btn
            bg="#DEF6FF"
            color="#058DC1"
            // w="23%"
          >
            Tech
          </Btn>
        </div>

        <div className="d-flex">
          <article className="pr-4">Stage </article>{' '}
          <Btn
            bg="#F1F2FE"
            color="#212463"
            // w="50%"
          >
            Proof of concept
          </Btn>
        </div>
      </FundRounding>

      <FundRounding className="my-3">
        <h6>Financial Details</h6>

        <div className="d-flex mb-3">
          <article className="mr-3">Total Funding </article>
          <Btn
            bg="#DEF6FF"
            color="#058DC1"
          >
          { data?.totalFunding }
          </Btn>
        </div>

        <div className="d-flex mb-3">
          <article className="mr-3">Last Funding </article>{' '}
          <Btn
            bg="#F1F2FE"
            color="#212463"
          >
            Angel { date.toISOString().substring(0,10) }
          </Btn>
        </div>

        <div className="d-flex mb-3">
          <article className="mr-3">Investors </article>
          <Btn
            bg="#F1F2FE"
            color="#212463"
            className="mr-3"
          >
           { data?.investor }
          </Btn>{' '}
          <Btn
            bg="#F1F2FE"
            color="#212463"
          >
            +1
          </Btn>
        </div>

        <div className="d-flex">
          <article className="mr-3">Valuation </article>
          <Btn
            bg="#F1F2FE"
            color="#212463"
            // w="80%"
          >
            { data?.valuation }
          </Btn>
        </div>
      </FundRounding>
    </div>
  )
}
