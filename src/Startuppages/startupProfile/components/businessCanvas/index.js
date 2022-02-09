import { Header, Wrapper } from './business.styled'
import BlueFile from '../../../../assets/icons/bluFile.svg'
import Plus from '../../../../assets/icons/add.svg'
import { Modal , ModalTabs, Button } from '../../../../Startupcomponents'
import { useState } from 'react';
import { Market , Brand, BrandModeling, Plan  } from './container';


export const BusinessCanavas = () => {

  const items = [
    'Market','Brand',
    'Business Modeling', 'Planning'
  ]
  const [state, setState] = useState(0);

  const [info, setInfo] = useState({});

  

  const [data, setData] = useState({
    problem:'',
    solution:'',
    target:'',
    size:'',
    competitor:'',
    proposition:'',
    advantage:'',
    roadmap:'',
    brand:'',
    bvalue:'',
    channel:'',
    relationship:'',
    streams:'',
    activities:'',
    resources:'',
    partners:'',
    mstrategy:'',
    sstrategy:''

})

const handleChange = (e)=>{
  const {value, name } = e.target;
  setData({...data, [name]:value})
}

const handleFunc = ()=>{
  setState(state + 1);
  //console.log(data);
}

const genSubmit = () =>{

  console.log(data)
}

  return (
    <div>
      <Header className="mb-4">
        {/* <h3>Create Business Canvas</h3> */}
        <section className="d-flex justify-content-end">
          <span className="headBtn">Update</span>
        </section>
      </Header>
      <Modal id='canvas' withHeader={true}
      title='Create Business Canvas' bold={true}
      subTitle='Let’s help you craft your business model canvas using our template'
       >
      <ModalTabs tabItems={items} state={state} setState={setState} />

        {
          state === 0 && (
            <Market data={data} handleChange={handleChange} />
           )
        }
        {
          state === 1 && (
            <Brand data={data} handleChange={handleChange} />
           )
        }
        {
          state === 2 && (
            <BrandModeling data={data} handleChange={handleChange} />
           )
        }
        {
          state === 3 && (
            <Plan data={data} handleChange={handleChange} />
           )
        }

        <div className='my-3 d-flex justify-content-between'>
        <div>
        {
          state < 3 &&  <button
        type="button"
         style={{
           background:'#f4f4f4',
           border:"none",
           borderRadius:'8px',
           padding:'6px 28px'
         }}
         onClick={()=>{ state > 0 ? setState(state -1): setState(0) } }
         data-dismiss={ state > 0 ? '': "modal" }
         aria-label={ state > 0 ? '': "Close" }
         > { state > 0 ? 'Back' :'Cancel' } </button>
        }
        </div>
        <div className='d-flex'>
         {
           state < 3 &&  <button
          type="button"
         style={{
           background:'#00ADEF',
           border:"none",
           borderRadius:'8px',
           padding:'6px 28px',
           color:'#fff'
         }}
        
         >Save</button>
         }
          <button
          type="button"
         style={{
           background:'#2E3192',
           border:"none",
           borderRadius:'8px',
           padding:'6px 28px',
           color:'#fff'
         }}
         onClick={()=>{ state < 3 ? handleFunc() : genSubmit() }}
         className='mx-2'
         > { state < 3 ? 'Next' : 'Create' } </button>
        </div>
        </div>
      </Modal>
      <Wrapper  className="d-flex justify-content-center text-center">
        <div data-target='#canvas' data-toggle={'modal'} >
          <img
            src={BlueFile}
            alt="."
            style={{
              width: '20px',
              height: '20px',
            }}
          />
          <p className="my-2"> Create Business canvas </p>
          <div>
            <img
              src={Plus}
              alt="."
              style={{
                width: '20px',
                height: '20px',
              }}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
