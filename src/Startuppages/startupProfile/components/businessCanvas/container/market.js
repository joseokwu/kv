
import './style.css';


export const Market = ({data, handleChange = ()=>{} }) =>{

    

    return (
        <div className='my-5 mx-3' >  

            <div className='form-group mb-3' >
                <label>Problem Statement</label>
                <input 
                type='text'
                name='problemStatement'
                value={data?.problemStatement}
                onChange={(e) =>handleChange(e, 'market')}
            className='form-control '
                 />
            </div>

            <div className='form-group mb-3' >
                <label>Product/Solution</label>
                <input 
                type='text'
                name='product'
                onChange={(e) =>handleChange(e, 'market')}
                value={data?.product}
            className='form-control'
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Target Customer Market</label>
                <input 
                type='text'
                name='targetMarket'
                onChange={(e) =>handleChange(e, 'market')}
                value={data?.targetMarket}
            className='form-control'
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Market Size</label>
                <input 
                type='text'
                name='marketSize'
                onChange={(e) =>handleChange(e, 'market')}
                value={data?.marketSize}
            className='form-control'
                 />
            </div>
            <div className='form-group mb-3' >
                <label>Key competitor</label>
                <input 
                type='text'
                name='keyCompetitors'
                onChange={(e) =>handleChange(e, 'market')}
                value={data?.keyCompetitors}
            className='form-control'
                 />
            </div>
            
        </div>
    )
}