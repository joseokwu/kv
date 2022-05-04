
import './style.css';

export const Brand = ({data, handleChange = ()=>{} }) =>{

    return (
        <div className='my-5' >

            <div className='form-group mb-3' >
                <label>Value Proposition</label>
                <input 
                type='text'
                name='valueProposition'
                value={data?.valueProposition}
                onChange={(e) =>handleChange(e, 'brand')}
                className='form-control '
                 />
            </div>

            <div className='form-group mb-3' >
                <label>Competitive Advantage</label>
                <input 
                type='text'
                name='competitiveAdvantage'
                value={data?.competitiveAdvantage}
                onChange={(e) =>handleChange(e, 'brand')}
            className='form-control'
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Product Road Map</label>
                <input 
                type='text'
                name='productRoadMap'
                value={data?.productRoadMap}
                onChange={(e) =>handleChange(e, 'brand')}
            className='form-control'
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Brand Building</label>
                <input 
                type='text'
                name='brandBuilding'
                value={data?.brandBuilding}
                onChange={(e) =>handleChange(e, 'brand')}
            className='form-control'
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Brand Value</label>
                <input 
                type='text'
                name='brandValue'
                value={data?.brandValue}
                onChange={(e) =>handleChange(e, 'brand')}
            className='form-control'
                 />
            </div>
        </div>
    )
}