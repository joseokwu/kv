import { TodoCard } from './session.styled';
import person3 from "../../../../assets/icons/person3.svg";
import { CustomThreeDots } from '../../../../components'

export const Session = () =>{

    const todoArr = [1, 2, 3, 5, 6, 8];

return (
    <div>
                {
                todoArr.map(i =>(
                    <TodoCard key={i} className='col-6 mx-3' >
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

         <div className='my-4 foot' >
            <span>Assigned</span>
            <span className='mx-4'>
        
                    
                    <img className='mx-n2'  src={person3} />
             
            </span>
         </div>

     </TodoCard>
                ))
            }
    </div>
)

}
