import { Header , Table, Section } from './utilization';
import downloadIcon from '../../../../assets/icons/downloadIcon.svg';
import ApplicationChart from './applicationChart/ApplicationChart';
import html2pdf from 'html2pdf.js';


export const FundUtilization  = ()=>{


    const downloadStatement = () => {
        const element = document.querySelector('#utilization');
        
        let opt = {
          margin: 1,
          filename:'fund utilization.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
          };
        
          //console.log(html2pdf().from(element).set(opt).save())
        
          return  html2pdf().from(element).set(opt).save();
    
        }

    const uitlizations = [

    {
        head:'Revenue',
        month1:'$200,000',
        month2:"$25, 000",
        month3:"$200, 000",
        month4:'$200,000',
        month5:'$300,000',
        month6:'$200,000'
    },
    {
        head:'Growth %',
        month1:'',
        month2:"",
        month3:"",
        month4:'',
        month5:'',
        month6:''
    },
    {
        head:'Expenses',
        month1:'$200,000',
        month2:"$25, 000",
        month3:"$200, 000",
        month4:'$200,000',
        month5:'$300,000',
        month6:'$200,000'
    },
    {
        head:'Growth %',
        month1:'',
        month2:"",
        month3:"",
        month4:'',
        month5:'',
        month6:''
    },
    {
        head:'Burn Rate',
        month1:'$200,000',
        month2:"$125, 000",
        month3:"$230, 000",
        month4:'$45,000',
        month5:'$31,000',
        month6:'$24,220'
    },

    {
        head:'Runway Months',
        month1:'$200,000',
        month2:"$125, 000",
        month3:"$230, 000",
        month4:'$45,000',
        month5:'$31,000',
        month6:'$24,220'
    },

    {
        head:'No. Customers',
        month1:'20',
        month2:"30",
        month3:"40",
        month4:'43',
        month5:'65',
        month6:'78'
    },

    {
        head:'Growth %',
        month1:'',
        month2:"",
        month3:"",
        month4:'',
        month5:'',
        month6:''
    },

    {
        head:'No. Employees',
        month1:'5',
        month2:"16",
        month3:"19",
        month4:'23',
        month5:'28',
        month6:'38'
    },

]

    return (
        
        <div>
               <Header className='d-flex justify-content-between' >
            <div>
                {/* <h4>Funding Utilization</h4> */}
            </div>
            <div className='d-flex' >
                <img src={downloadIcon} className='mr-2'  alt='.'  />
                <b onClick={downloadStatement} >Download.xlx</b>
                <span>Update details</span>
            </div>
            </Header>

        <Section id='utilization'  className='table-responsive'>
        <Table className="table ">
    <thead className="" >
      <tr>
        <th></th>
        <th>Month 1</th>
        <th>Month 2 </th>
        <th>Month 3 </th>
        <th>Month 4 </th>
        <th>Month 5 </th>
        <th>Month 6 </th>
      </tr>
    </thead  >

    <tbody>

{
 uitlizations.map(data =>(
     <tr key={data} >
    <td style={{fontWeight:'bolder'}} > { data?.head } </td>
    <td> { data?.month1 } </td>
    <td> { data?.month2 } </td>
    <td> { data?.month3 } </td>
    <td> { data?.month4 } </td>
    <td> { data?.month5 } </td>
    <td> { data?.month6 } </td>
     </tr>
 ))   
}

</tbody>

    </Table>
        </Section>

        <Section >
        <div className="">
  <ApplicationChart header='Monthly Revenue' />
   </div>
        </Section>

        </div>
        
        )
}





