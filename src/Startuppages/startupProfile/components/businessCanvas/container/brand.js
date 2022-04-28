
import './style.css';

export const Brand = ({data, handleChange = ()=>{} }) =>{

    return (
        <div className='my-5' >

            <div className='form-group mb-3' >
                <label>Value Proposition</label>
                <input 
                type='text'
                name='proposition'
                value={data?.proposition}
                onChange={handleChange}
                className='form-control '
                 />
            </div>

            <div className='form-group mb-3' >
                <label>Competitive Advantage</label>
                <input 
                type='text'
                name='advantage'
                value={data?.advantage}
                onChange={handleChange}
            className='form-control'
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Product Road Map</label>
                <input 
                type='text'
                name='roadmap'
                value={data?.roadmap}
                onChange={handleChange}
            className='form-control'
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Brand Building</label>
                <input 
                type='text'
                name='brand'
                value={data?.brand}
                onChange={handleChange}
            className='form-control'
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Brand Value</label>
                <input 
                type='text'
                name='bvalue'
                value={data?.bvalue}
                onChange={handleChange}
            className='form-control'
                 />
            </div>
        </div>
    )
}