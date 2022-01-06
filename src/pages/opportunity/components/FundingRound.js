import { Tag } from "../../../components";
import { FundRounding , Btn } from './styled';
import clock from "../../../assets/icons/clock.svg";

export const FundingRound = () => {
  return (
    <div className="">
    <FundRounding className='' >
      <h6>Startup Details</h6>

    <div className='d-flex mb-3' >
    <p className='pr-4' >Industry </p><Btn bg='
#DEF6FF' color='
#00D1FF' w='23%' >Tech</Btn>
    </div>

      <div className='d-flex' >
        
<p className='pr-4' >Stage </p> <Btn bg='
#F1F2FE' color='
#1021FF' w='50%' >Proof of concept</Btn>  
      </div>

    </FundRounding>
    <FundRounding className='my-3' >
      <h6>Financial Details</h6>

    <div className='d-flex mb-3' >
    <p className='mr-3' >Total Funding  </p><Btn bg='
#DEF6FF' color='
#00D1FF'  >$50,000</Btn> 
    </div>

    <div className='d-flex mb-3'  >
    <p className='mr-3' >Last Funding  </p> <Btn bg='
#F1F2FE' color='
#1021FF'  >Angel (9 oct 2021)</Btn>
    </div>

    <div className='d-flex mb-3' >
    <p className='mr-3' >Investors  </p><Btn bg='
#F1F2FE' color='
#1021FF' className='mr-3' >Mope Abudu</Btn> <Btn bg='
#F1F2FE' color='
#1021FF' >+ 1</Btn>
    </div>

<div className='d-flex' >
<p className='mr-3' >Valuation </p>
<Btn bg='
#F1F2FE' color='
#1021FF' w='80%' >$ 50 million (9 oct 2021)</Btn>
</div>

    </FundRounding>
    </div>
  );
};
