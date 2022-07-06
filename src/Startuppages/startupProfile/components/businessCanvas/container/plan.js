
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
                name='marketStrategy'
                value={data?.marketStrategy}
                onChange={(e) =>handleChange(e, 'plan')}
              ></textarea>
            </div>
            <div className='form-group mb-3' >
                <label>Sales Strategy</label>
              <textarea 
                cols='4'
                rows='6'
                className='form-control'
                name='salesStrategy'
                value={data?.salesStrategy}
                onChange={(e) =>handleChange(e, 'plan')}
              ></textarea>
            </div>
        </div>
    )
}