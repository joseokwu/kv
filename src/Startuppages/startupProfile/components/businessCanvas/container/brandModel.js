
import './style.css';

export const BrandModeling = ({data, handleChange = ()=>{} }) =>{

    return (
        <div className='my-5' >

            <div className='form-group mb-3' >
                <label>Channels</label>
                <input 
                type='text'
                name='channels'
                value={data?.channels}
                onChange={(e) =>handleChange(e, 'businessModel')}
            className='form-control '
                 />
            </div>

            <div className='form-group mb-3' >
                <label>Customer Relationship</label>
                <input 
                type='text'
                name='customerRelationship'
                className='form-control'
                value={data?.customerRelationship}
                onChange={(e) =>handleChange(e, 'businessModel')}
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Revenue Streams</label>
                <input 
                type='text'
                name='revenueStreams'
                value={data?.revenueStreams}
                onChange={(e) =>handleChange(e, 'businessModel')}
            className='form-control'
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Key Activities</label>
                <input 
                type='text'
                name='keyActivities'
                value={data?.keyActivities}
                onChange={(e) =>handleChange(e, 'businessModel')}
            className='form-control'
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Key Resources</label>
                <input 
                type='text'
                name='keyResource'
                value={data?.keyResource}
                onChange={(e) =>handleChange(e, 'businessModel')}
            className='form-control'
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Key Partners</label>
                <input 
                type='text'
                name='keyPartners'
                value={data?.keyPartners}
                onChange={(e) =>handleChange(e, 'businessModel')}
            className='form-control'
                 />
            </div>
        </div>
    )
}