import { HeadWrapper, UpcomingCard } from './dash.component';
import { CustomThreeDots } from '../../../components';
import { images } from '../../../constants/domiData';

export const UpComing = ()=>{

    const todoArr = [1, 2, 3];

    return (
        <>

<HeadWrapper className='d-flex ' > 
        <p  className='text-secondary text-nowrap' >Upcoming Events</p>
        <h6  >See all</h6>
     </HeadWrapper>

     <div className='row' >
     {
                todoArr.map(i =>(
                    <UpcomingCard key={i} className='col-4 mx-3' >
         <div className='d-flex justify-content-between head' >
            <h6>Assignment</h6>
            <CustomThreeDots />
         </div>

         <div className='d-flex justify-content-between my-5 date' >
            <h6>05 | September</h6>
            <button>Today</button>
         </div>

         <div className='my-5'>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
         </div>

         <div className='my-4 foot d-flex justify-content-between' >
           <button>View details</button>
            <span className='mx-4'>
            {
                images.map((data, i) =>(
                    
                    <img className='mx-n2' key={i} src={data.icon} />
                    
                ))
            }
            </span>
         </div>

     </UpcomingCard>
                ))
            }
     </div>

        </>
    )
}