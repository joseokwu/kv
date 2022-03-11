import { Header } from './styled';
import { Calender } from '../../../../Startupcomponents';

export const CalenderComponent = ({data})=>{

    return (
        <div>
            <Header className='mb-3'>
                {/* <h4>Calender</h4> */}
            </Header>
            <Calender data={data} />
        </div>
    )
}