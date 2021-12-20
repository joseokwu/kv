import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { HeaderFund, ImageWrapper,
    InputWrapper, FormWrapper, BntWrap,Terms
} from './fund.styled';
import {FundAsk} from './components/fundAsk';
import { Tabs } from '../../../../components/tabs/Tabs';
import {CustomButton} from '../../../../components/button/button.styled';
import { useActivity } from '../../../../hooks/useBusiness';
import { FundUtilization } from './components/fundUtilization';
import { CapTable } from './components/capTable';
import { PreviousRound } from './components/previousRound';
import { FinancialProjection } from './components/financialProjection';

export const FundRaising = () =>{

    const history = useHistory();
    
    const {changePath , state :{ path}} = useActivity()

    const {
        location: { hash },
      } = history

      const tabList = [
        'Funding Ask', 'Fund Utilization',
        'Cap Table', 'Previous Round',
        'Financial Projection'

      ]

      const renderContent = () => {
        switch (hash) {
          case '#Funding Ask':
            return <FundAsk />;
            case '#Fund Utilization':
            return  <FundUtilization />;
            case '#Cap Table':
              return <CapTable />;
            case '#Previous Round':
              return <PreviousRound /> ;
              case '#Financial Projection':
                return <FinancialProjection /> ;

          default:
            return <FundAsk />
        }
      }

      const back  = () =>{

        changePath(path - 1)
    }

    const next = ()=>{
            changePath(path + 1)
    }
    




      return (
            <>
            <HeaderFund>
            <h5> Fund Raising </h5>
        <p className='text-nowrap' >Let’s help you explain your fund raising plan</p>
            </HeaderFund>
                <form style={{marginBottom:'4rem'}} >
                <FormWrapper height='85%' >
                <Tabs tabItems={tabList}  />
                    {
                    renderContent()
                    }
                  </FormWrapper>

                   <Terms className='' >
                     <p>By clicking submit, you are agreeing to our <span>Terms of Use</span> and <span>Privacy Policy</span>. If you have questions, please reach out to privacy@knightventures.com</p>
                   </Terms>

                <div className='d-flex justify-content-between my-4' >
            <div className='' >
        <CustomButton  onClick={back}  background='#B4B4B4' >Back</CustomButton>
    </div>
    <div  >
    <CustomButton  style={{marginLeft:'0.5rem', marginRight:'7rem'}}  background='#00ADEF' > Finish </CustomButton>

    </div>
            </div>
                </form>

            </>
      )


}