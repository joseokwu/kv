import { Header, Wrapper } from './business.styled';
import BlueFile from '../../../../assets/icons/bluFile.svg'
import Plus from '../../../../assets/icons/add.svg';

export const BusinessCanavas = () =>{

    return (

        <div>
            <Header className='mb-4'>
                <h3>Create Business Canvas</h3>
            </Header>

            <Wrapper className='d-flex justify-content-center text-center' >
               <div>
               <img src={BlueFile} alt='.' style={{
                    width:'20px', height:'20px'
                }} />
                <p className='my-2' > Create Business canvas </p>
                    <div>
                        <img src={Plus} alt='.'  style={{
                    width:'20px', height:'20px'
                }} />
                    </div>
               </div>
            </Wrapper>
        </div>
    )
}