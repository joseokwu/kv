
import './style.css';


export const Market = ({data, handleChange = ()=>{} }) =>{

    

    return (
        <div className='my-5' >  

            <div className='form-group mb-3' >
                <label>Problem Statement</label>
                <input 
                type='text'
                name='problem'
                value={data?.problem}
                onChange={handleChange}
            className='form-control '
                 />
            </div>

            <div className='form-group mb-3' >
                <label>Product/Solution</label>
                <input 
                type='text'
                name='solution'
                onChange={handleChange}
                value={data?.solution}
            className='form-control'
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Target Customer Market</label>
                <input 
                type='text'
                name='target'
                onChange={handleChange}
                value={data?.target}
            className='form-control'
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Market Size</label>
                <input 
                type='text'
                name='size'
                onChange={handleChange}
                value={data?.size}
            className='form-control'
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Key competitor</label>
                <input 
                type='text'
                name='competitor'
                onChange={handleChange}
                value={data?.competitor}
            className='form-control'
                 />
            </div>
            
        </div>
    )
}