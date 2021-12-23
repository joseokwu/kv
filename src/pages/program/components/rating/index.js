import { useState } from 'react';
import { HeadWrapper } from './styled';
import { Tag} from '../../../../components/tag/Tag';
import person3 from "../../../../assets/icons/person3.svg";


export const Rating = () =>{

    const [rating, setRating] = useState('');

    const tagRating = [

        {
            status:'Very poor'
        },
        {
            status:'Poor'
        },
        {
            status:'Bad'
        },
        {
            status:'Good'
        },
        {
            status:'Very Good'
        },
        {
            status:'Excellent'
        }
    ]

    return (
        <div className='my-5 container' >
            <div className='row' >
            <HeadWrapper className='col-lg-6 ' >
               <div className='d-flex' >
               <p className='mr-2 ' >Project Topic</p>
                <p className='mr-2 '  >Mentor</p>
                <p className=' ' >Rating</p>
               </div>
               <div className='d-flex my-4'  >
                <div><span>Business Demo</span></div>
                <div>   
                    <img className='mx-3'  src={person3} />
                    </div>
                    <div className='d-block' >
                        <p className='p' > james </p>
                        <p className='secPara mr-4' > Data Scientist</p>
                    </div>
               </div>
            </HeadWrapper>
            <div className='col-lg-6 ' >
             <p className='mb-5' >How was the session with your mentor?</p>

            <div className='my-3 d-flex' >
                {
                    tagRating.map((i) =>{
                        return <Tag key={i} name={i.status} onClick={()=> setRating(i.status) }
                        bg='#D4D4D4' className='mx-1' color={rating === i.status ? '#021098' : '#222222' }
                        fontWeight={ rating === i.status ? '600' : 'normal' }
                         />
                    })
                }
            </div>

            </div>
            </div>
        </div>
    )
}
