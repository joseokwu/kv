
import './style.css';

export const BrandModeling = ({data, handleChange = ()=>{} }) =>{

    return (
        <div className='my-5' >

            <div className='form-group mb-3' >
                <label>Channels</label>
                <input 
                type='text'
                name='channel'
                value={data?.channel}
                onChange={handleChange}
            className='form-control '
                 />
            </div>

            <div className='form-group mb-3' >
                <label>Customer Relationship</label>
                <input 
                type='text'
                name='relationship'
                className='form-control'
                value={data?.relationship}
                onChange={handleChange}
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Revenue Streams</label>
                <input 
                type='text'
                name='streams'
                value={data?.streams}
                onChange={handleChange}
            className='form-control'
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Key Activities</label>
                <input 
                type='text'
                name='activities'
                value={data?.activities}
                onChange={handleChange}
            className='form-control'
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Key Resources</label>
                <input 
                type='text'
                name='resources'
                value={data?.resources}
                onChange={handleChange}
            className='form-control'
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Key Partners</label>
                <input 
                type='text'
                name='partners'
                value={data?.partners}
                onChange={handleChange}
            className='form-control'
                 />
            </div>
        </div>
    )
}