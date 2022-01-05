import { Header, Table , Section } from './cap.styled';
import downloadIcon from '../../../../assets/icons/downloadIcon.svg';
import html2pdf from 'html2pdf.js';



export const CapTable = () =>{

    const downloadStatement = () => {
        const element = document.querySelector('#cap');
        
        let opt = {
          margin: 1,
          filename:'capital table.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
          };
        
          //console.log(html2pdf().from(element).set(opt).save())
        
          return  html2pdf().from(element).set(opt).save();
    
        }

const capTable = [

    {
        shareHolders:'John Carter Robinson',
        shareType:'Angel Investor',
        noShare:'5',
        sharePercent:'2.5 %'
    },
    {
        shareHolders:'John Carter Robinson',
        shareType:'Angel Investor',
        noShare:'15',
        sharePercent:'5.6 %'
    },
    {
        shareHolders:'John Carter Robinson',
        shareType:'Angel Investor',
        noShare:'10',
        sharePercent:'9.5 %'
    },
    {
        shareHolders:'John Carter Robinson',
        shareType:'Angel Investor',
        noShare:'5',
        sharePercent:'7.5 %'
    },
    {
        shareHolders:'John Carter Robinson',
        shareType:'Angel Investor',
        noShare:'19',
        sharePercent:'5.5 %'
    },
    {
        shareHolders:'John Carter Robinson',
        shareType:'Angel Investor',
        noShare:'30',
        sharePercent:'9.5 %'
    },
    {
        shareHolders:'Total',
        shareType:'',
        noShare:'',
        sharePercent:''
    }
]


    return (
        <div id='cap' >
        <Header className='d-flex justify-content-between' >
            <h4>Cap Table</h4>

            <div className='d-flex' >
                <img src={downloadIcon} className='mr-2'  alt='.'  />
                <a href='#' onClick={downloadStatement} >Download.xlx</a>
                <span>Update details</span>
            </div>

        </Header>

        <Section >
        <Table className="table table-striped"  >
        <thead className="" >
      <tr>
       
        <th>Share Holders</th>
        <th>Shareholder Type </th>
        <th>Number of Shares </th>
        <th>Shares (%) </th>
      </tr>
    </thead  >
    <tbody>
        {
            capTable.map((data) =>(
            <tr key={data}>
                <td> { data?.shareHolders } </td>
                <td> { data?.shareType } </td>
                <td> { data?.noShare } </td>
                <td> { data?.sharePercent } </td>
            </tr>
            ))
        }
    </tbody>

        </Table>
        </Section>
      </div>
    )
}