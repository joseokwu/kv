import { Header, Table, Section } from './prevRpund.styled'
import html2pdf from 'html2pdf.js'
import downloadIcon from '../../../../assets/icons/downloadoutline.svg'

export const PreviousRound = () => {
  const downloadStatement = () => {
    const element = document.querySelector('#fndRound')

    let opt = {
      margin: 1,
      filename: 'capital table.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    }

    //console.log(html2pdf().from(element).set(opt).save())

    return html2pdf().from(element).set(opt).save()
  }

  const preRoundArr = [
    {
      invest: 'James Parker',
      fundDate: '20 November 2021',
      dealType: 'Common Equity',
      fundRound: 'Seed',
      investAmnt: '$30,000',
      dulition: '20 %',
      preMoney: '$5, 000',
      pstMoney: '$10, 000',
    },
    {
      invest: 'Jane Carter',
      fundDate: '20 November 2021',
      dealType: 'Preferred Shares',
      fundRound: 'Pres-Series A',
      investAmnt: '$20,000',
      dulition: '20 %',
      preMoney: '$5,000',
      pstMoney: '$10,000',
    },
    {
      invest: 'John Cane',
      fundDate: '20 November 2020',
      dealType: 'Debt Financing',
      fundRound: 'Pres-Series A',
      investAmnt: '$30,000',
      dulition: '35 %',
      preMoney: '$1,000',
      pstMoney: '$15,903',
    },
    {
      invest: 'Stephen kane ',
      fundDate: '20 November 2020',
      dealType: 'Common Equity',
      fundRound: 'Series A',
      investAmnt: '$40,000',
      dulition: '23 %',
      preMoney: '$19,000',
      pstMoney: '$40,000',
    },
  ]

  return (
    <div id="fndRound">
      <Header className="d-flex justify-content-end">
        {/* <h4>Previous Round</h4> */}

        <div className="d-flex">
          <img src={downloadIcon} className="mr-2" alt="." />
          <a className="pe-3" href="#" onClick={downloadStatement}>
            Download.xlsx
          </a>
          <span>Update details</span>
        </div>
      </Header>
      <Table className="table table-borderless">
        <thead>
          <tr>
            <th>Investor</th>
            <th>Funding Date</th>
            <th>Deal Type </th>
            <th>Funding Round </th>
            <th>Investment Amount </th>
            <th>Dilution </th>
            <th>Pre-Money </th>
            <th>Post-Money </th>
          </tr>
        </thead>
        <tbody>
          {preRoundArr.map((data) => (
            <tr key={data}>
              <td style={{ fontWeight: '600', lineHeight: '130%' }}>
                {' '}
                {data?.invest}{' '}
              </td>
              <td style={{ fontWeight: '600', lineHeight: '130%' }}>
                {' '}
                {data?.fundDate}{' '}
              </td>
              <td style={{ fontWeight: '600', lineHeight: '130%' }}>
                {' '}
                {data?.dealType}{' '}
              </td>
              <td style={{ fontWeight: '600', lineHeight: '130%' }}>
                {' '}
                {data?.fundRound}{' '}
              </td>
              <td style={{ fontWeight: '600', lineHeight: '130%' }}>
                {' '}
                {data?.investAmnt}{' '}
              </td>
              <td style={{ fontWeight: '600', lineHeight: '130%' }}>
                {' '}
                {data?.dulition}{' '}
              </td>
              <td style={{ fontWeight: '600', lineHeight: '130%' }}>
                {' '}
                {data?.preMoney}{' '}
              </td>
              <td style={{ fontWeight: '600', lineHeight: '130%' }}>
                {' '}
                {data?.pstMoney}{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
