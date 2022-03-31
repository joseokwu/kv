import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  HeaderFund,
  ImageWrapper,
  InputWrapper,
  FormWrapper,
  BntWrap,
  Terms,
} from './fund.styled';
import { FundAsk } from './components/fundAsk';
import { Tabs } from '../../../../Startupcomponents/tabs/Tabs';
import {
  CustomButton,
  OutlineButton,
} from '../../../../Startupcomponents/button/button.styled';
import { useActivity } from '../../../../hooks/useBusiness';
import { FundUtilization } from './components/fundUtilization';
import { CapTable } from './components/capTable';
import { PreviousRound } from './components/previousRound';
import { FinancialProjection } from './components/financialProjection';

export const FundRaising = () => {
  const history = useHistory();

  const {
    changePath,
    setFundraising,
    state: { path, fundraising },
  } = useActivity();

  const {
    location: { hash },
  } = history;

  const tabList = [
    'Funding Ask',
    'Fund Utilization',
    'Cap Table',
    'Previous Round',
    'Financial Projection',
  ];

  const renderContent = () => {
    switch (hash) {
      case '#Funding Ask':
        return <FundAsk setFundraising={setFundraising} back={back} />;
      case '#Fund Utilization':
        return <FundUtilization setFundraising={setFundraising} />;
      case '#Cap Table':
        return <CapTable setFundraising={setFundraising} />;
      case '#Previous Round':
        return <PreviousRound setFundraising={setFundraising} />;
      case '#Financial Projection':
        return <FinancialProjection setFundraising={setFundraising} />;

      default:
        return <FundAsk setFundraising={setFundraising} back={back} />;
    }
  };
  const back = () => {
    changePath(path - 1);
  };

  const next = () => {
    changePath(path + 1);
  };

  // const forwardHash = () => {
  //   if (hash === '#Funding Ask' || hash === '#Funding%20Ask') {
  //     return '#Fund Utilization';
  //   } else if (hash === '#Fund Utilization') {
  //     return '#Cap Table';
  //   } else if (hash === '#Cap Table') {
  //     return '#Previous Round';
  //   } else if (hash === '#Previous Round') {
  //     return '#Financial Projection';
  //   }
  // };

  // const backwardHash = (e) => {
  //   e.preventDefault();
  //   if (hash === '#Funding Ask') {
  //     return back();
  //   } else if (hash === '#Fund Utilization') {
  //     return history.push('#Funding Ask');
  //   } else if (hash === '#Cap Table') {
  //     return history.push('#Fund Utilization');
  //   } else if (hash === '#Previous Round') {
  //     return history.push('#Cap Table');
  //   } else if (hash === '#Financial Projection') {
  //     return history.push('#Previous Round');
  //   }
  // };

  return (
    <>
      <HeaderFund>
        <h5> Fund Raising </h5>
        <p className='text-nowrap'>
          Let’s help you explain your fund raising plan
        </p>
      </HeaderFund>
      <form style={{ marginBottom: '4rem' }}>
        <FormWrapper height='85%'>
          <Tabs tabItems={tabList} />
          {renderContent()}
        </FormWrapper>
      </form>
    </>
  );
};

// My responsibility as the product lead is to ensure the success of our
//           product team. As a B2B product team, we help our clients realize their
//           product development goals. I work with the design and engineering
//           teams to craft and develop cutting edge software that meets market
//           standards.
