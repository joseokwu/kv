import { TodoCard } from './styled';
import person3 from "../../../../assets/icons/person3.svg";
import { CustomThreeDots } from '../../../../components'
import { Tag} from '../../../../components/tag/Tag';
import { images } from '../../../../constants/domiData';
export const Assignment = ()=>{

    const todoArr = [ 
        { 
            color:'#058DC1',
            bg: '#2E3192'
        },
        { 
            bg:'#001698',
            color:'#fff'
        },
        {
            bg:'#058DC1' ,
            color:'#2E3192', 
        },
        {
            bg:'#FFFDD1' ,
            color:'#FEDF0A', 
        },
        {
            bg:'#E8E8E8' ,
            color:'#000', 
        },
        {
            bg:'#D1FFB0' ,
            color:'#00FFA0', 
        },
    ];

return (
    <div className='row' >
                {
                todoArr.map(i =>(
                    <TodoCard key={i} className='col-6 mx-3' >
         <div className='d-flex justify-content-between head' >
                    <div className='d-flex' >
                    <h6 className='mr-3' >Assignment</h6>
                    
                    </div>

            <CustomThreeDots />
         </div>

         <div className='d-flex justify-content-between my-5 date' >
            <h6>05 | September</h6>
            <Tag name='Today' bg={i.bg} color={i.color} fz='15px' />
         </div>

         <div className='my-5'>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
         </div>

         <div className='my-4 foot d-flex ' >
            <span className='mr-3' >Assigned</span>
  
        
                    <div>   
                    {
                  images.map((data, i) =>(
                    
                    <img className='mx-n2' key={i} src={data.icon} />
                    
                ))
            }
                    </div>
                  
  
         </div>

     </TodoCard>
                ))
            }
    </div>
)
}
