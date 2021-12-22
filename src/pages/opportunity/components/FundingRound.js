import { Tag } from "../../../components";
import { FundRounding , Btn } from './styled';

export const FundingRound = () => {
  return (
    <div className="">
    <FundRounding >
      <h6>Startup Details</h6>

      <li><span>Industry :</span> <Btn bg='
#DEF6FF' color='
#00D1FF' w='23%' >Tech</Btn>  </li>

<li><span>Stage :</span> <Btn bg='
#F1F2FE' color='
#1021FF' w='50%' >Proof of concept</Btn>  </li>

    </FundRounding>
    <FundRounding >
      <h6>Financial Details</h6>

      <li><span>Total Funding :</span> <Btn bg='
#DEF6FF' color='
#00D1FF' w='25%' >$50,000</Btn>  </li>

<li><span>Last Funding:</span> <Btn bg='
#F1F2FE' color='
#1021FF' w='50%' >Angel (9 oct 2021)</Btn>  </li>

<li><span>Investors :</span> <Btn bg='
#F1F2FE' color='
#1021FF' w='40%' >Mope Abudu</Btn> <Btn bg='
#F1F2FE' color='
#1021FF' w='15%' >+ 1</Btn>   </li>

<li><span>Valuation :</span> <Btn bg='
#F1F2FE' color='
#1021FF' w='80%' >$ 50 million (9 oct 2021)</Btn>  </li>

    </FundRounding>
    </div>
  );
};
