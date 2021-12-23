import { Header } from './ask.styled';
import downloadIcon from '../../../../assets/icons/downloadIcon.svg';

export const FundingAsk = ()=>{


    return (
        <div>
            <Header className='d-flex justify-content-between' >
            <div>
                <h4>Funding Ask</h4>
            </div>
            <div className='d-flex' >
                <img src={downloadIcon} className='mr-2'  alt='.'  />
                <a href='#' >Download.xlx</a>
                <span>Update details</span>
            </div>
            </Header>
        </div>
    )
}