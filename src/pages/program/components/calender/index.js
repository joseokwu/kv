import { Header } from './styled';
import { Calender } from '../../../../components';

export const CalenderComponent = ()=>{

    return (
        <div>
            <Header className='mb-3'>
                <h4>Calender</h4>
            </Header>
            <Calender />
        </div>
    )
}