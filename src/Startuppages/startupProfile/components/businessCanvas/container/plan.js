
import './style.css';

export const Plan = ({data, handleChange = ()=>{} }) =>{

    return (
        <div className='my-5' >

            <div className='form-group mb-3' >
                <label>Market Strategy</label>
              <textarea 
                cols='4'
                rows='6'
                className='form-control'
                name='mstrategy'
                value={data?.mstrategy}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='form-group mb-3' >
                <label>Sales Strategy</label>
              <textarea 
                cols='4'
                rows='6'
                className='form-control'
                name='sstrategy'
                value={data?.sstrategy}
                onChange={handleChange}
              ></textarea>
            </div>
        </div>
    )
}