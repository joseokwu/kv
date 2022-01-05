import styled from 'styled-components/macro';


export const HeaderStartup = styled.div`


h5 {
    font-family:DM Sans;
    font-weight:700;
    font-size:30px;
    line-height:39.06px;
    color:#000000;
}

p {
    font-family:DM Sans;
    font-weight:400;
    font-size:16px;
    line-height:20.83px;
    color:#828282; 
}

`

export const ImageWrapper = styled.span`

  text-align: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background:#fff;

`
export const InputWrapper = styled.label`

 position:absolute;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background:#D2D2D2;
  display: flex;
  justify-content: center;
  align-items: center;
  top:250px;
  left:90px;

  input {
  width: inherit;
  height: inherit;
  opacity: 0;
    }

`

export const FormWrapper = styled.div`
width:100%;
height: ${(props) => props.height ? props.height : '70%'} ;
padding:2rem;
order:2;
margin:3rem 0;
flex:none;
border:0 solid #D3D3D3;
border-radius:5px;
background:#fff;


.div {
    margin-bottom:10px;
    margin-top:15px;
    margin-left:15px;
    span {
    font-family:DM Sans;
    font-weight:500;
    font-size:24px;
    line-height:30.83px;
    color:#2E3192; 
    
    
}
}

label {
    font-family:DM Sans;
    font-weight:400;
    font-size:16px;
    line-height:20.02px;
    color:#000000; 
    margin-left:15px;
}

input {
    border:none;
    background:#f4f4f4;
   
    margin-left:15px;
    margin-bottom:15px;
}

textarea {
    border:none;
    background:#f4f4f4;
  
    margin-left:15px;

}
.cust {
    border:none;
    background:#f4f4f4;
    width:70%;
    margin-left:15px; 
}
  
    .custs {
    
    border:none;
    background:#f4f4f4;
    width:70%;
    margin-left:15px; 
    border-radius:7px;
    outline:0;
    
    
    &:focus {
        outline:0;
    }
}

`
