import { Header , Table, Section } from './ask.styled';
import downloadIcon from '../../../../assets/icons/downloadIcon.svg';

export const FundingAsk = ()=>{

    const tabArr = [
        '$100,000', 'Common Equality', 'Seed','10%',
        '$20,000', '$30,000', ' 20 November 2021'
    ]

    const investorsArr = [

        {
            invst:'Prima Juma Umbe',
            investType: 'Angel Investor',
            amnt: '$100,000',
            ledInvest:'Yes'
        },
        {
            invst:'John Juma Umbe',
            investType: 'Angel Investor',
            amnt: '$120,000',
            ledInvest:'No'
        },
        {
            invst:'Kim saje',
            investType: 'Angel Investor',
            amnt: '$20,000',
            ledInvest:'No'
        },
        {
            invst:'shaun ken',
            investType: 'Angel Investor',
            amnt: '$5,000',
            ledInvest:'Yes'
        },
        {
            invst:'kassy franee',
            investType: 'Angel Investor',
            amnt: '$40,000',
            ledInvest:'No'
        },
        {
            invst:'Leo jimmy',
            investType: 'Angel Investor',
            amnt: '$900,000',
            ledInvest:'Yes'
        }
    ]


    return (
        <div>
            <Header className='d-flex justify-content-between' >
            <div>
                {/* <h4>Funding Ask</h4> */}
            </div>
            <div className='d-flex' >
                <img src={downloadIcon} className='mr-2'  alt='.'  />
                <a href='#' >Download.xlx</a>
                <span>Update details</span>
            </div>
            </Header>
            <section className='my-5 table-responsive' >
            <Table className="table ">
    <thead className="" >
      <tr>
        <th>Fund Requirement</th>
        <th>Deal Type</th>
        <th>Funding Round </th>
        <th>Dilution </th>
        <th>Pre-Money </th>
        <th>Post-Money </th>
        <th>Funding Close date </th>
      </tr>
    </thead  >
    <tbody>
      <tr>
        {
            tabArr.map(i =>(
            <td key={i} > {i} </td>
            ))
        }
      </tr>
      </tbody>
    </Table>
            </section>
            <Section className='table-responsive' >
        <h4>Commitment</h4>

        <Table className="table table-borderless">
    <thead className="" >
      <tr>
        <th>Investors</th>
        <th>Investor Type</th>
        <th>Amount</th>
        <th>Lead Investor </th>
        
      </tr>
    </thead  >
    <tbody>

        {
         investorsArr.map(data =>(
             <tr key={data} >
            <td> { data?.invst } </td>
            <td> { data?.investType } </td>
            <td> { data?.amnt } </td>
            <td> { data?.ledInvest } </td>
             </tr>
         ))   
        }

    </tbody>
    </Table>
            </Section>
        </div>
    )
}