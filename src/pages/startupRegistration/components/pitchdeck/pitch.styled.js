import styled from 'styled-components/macro';


export const HeaderPitch = styled.div`

width:224px;

align-items:flex-start;
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
  top:11.69%;
  left:8.88%;

  input {
  width: inherit;
  height: inherit;
  opacity: 0;
    }

`

export const FormWrapper = styled.div`
width:90%;
height: ${(props) => props.height ? props.height : '80%'} ;
padding:2rem;
order:2;
margin:3rem 0;
flex:none;
border:0 solid #D3D3D3;
border-radius:5px;
background:#fff;

.button {

border:none;
background:${(props) => props.background ? props.background : ' #2E3192'};
border-radius: 8px;
color:#fff;
padding-left:20px;
padding-right:20px;
height:37px;
flex: none;
order: 1;
flex-grow: 0;
margin-left:10px;
}

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

input {
  width: 50%;
  
    }

hr {
    width:100%;
    margin-top:15px;
    margin-bottom:5px;
    background:#808080;
}

p {
 font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 21px;
display: flex;
align-items: center;
letter-spacing: 0.01em;
margin-top:10px;
color: #828282;
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
    width:75%;
    margin-left:15px;
    margin-bottom:15px;
}

textarea {
    border:none;
    background:#f4f4f4;
    width:70%;
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

export const FileWrapper = styled.div`

flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;

width:60%;
height: 75%;
background:#fff;
margin:10px;
border: 1.5px dashed #E6E7E9;
box-sizing: border-box;
border-radius: 6px;

`
export const FileText = styled.p`


font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 140%;
text-align: center;

color: rgba(24, 24, 25, 0.9);

`

export const FileSize = styled.p`



font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 140%;

text-align: center;

color: rgba(10, 4, 170) !important;

`

export const LabelButton = styled.label`

align-items: center;
padding: 11px 12px;

/* 100 */

background: #F9F9FC;
border-radius: 8px;

/* Inside Auto Layout */
color: rgba(10, 4, 170) !important;

margin-top:5px;
`

export const VideoWrapper = styled.div`
display: block;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;

width: 87%;
height: 100%;
background: #F9F9FC;
margin:10px;

box-sizing: border-box;
border-radius: 6px;

    img {
        margin-left:16rem;
        margin-top:0;
    }

 .div{

width: 166px;
height: 172px;
background: #F9F9FC;
border: 1px solid #E6E7E9;
border-radius: 8px;


#div {

position:absolute;
padding: 16px;
top:174px;
width: 163px;
height: 72px;
background:#fff;
border-radius:0 0 4px 4px;

    }

    }

`