import { ProgramCardWrapper, TodoCard } from './program.sttyled';
import woman from '../../assets/icons/woman.svg';
import DownloadIcon from '../../assets/icons/downloadIcon.svg';
import { Tabs } from '../../components/tabs/Tabs';

export const Program = ()=>{

    const tabList = [
        'Calender', 'Session',
        'Assignment', 'Rating',
    

      ]

    return (
        <div className='container' >
                <ProgramCardWrapper className=' row'>
        <div className='col-6' >
            <img src={woman} alt='.' className='img' />
        </div>
        <div className='div col-6'>
            <h5> Welcome to Knight Ventures Program</h5>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet, facilisi sodales cursus tellus nam ut. Enim, at imperdiet praesent velit. Eget consequat, sollicitudin molestie curabitur lobortis imperdiet. Vulputate malesuada tortor sit mi laoreet. Iaculis quis pretium urna.
             </p>
             <div className='my-5' >
            <button>Program info deck <img src={DownloadIcon} alt='.' style={{color:'#fff'}} /> </button>
             </div>
        </div>

      </ProgramCardWrapper>

                <section className='my-3'  >
                <Tabs tabItems={tabList}  /> 
                </section>

        </div>
    )
}