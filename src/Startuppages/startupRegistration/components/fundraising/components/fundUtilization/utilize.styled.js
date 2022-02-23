import styled from 'styled-components/macro';


export const BodyWrapper = styled.div`

    margin-bottom:10px;
    margin-top:30px;
    margin-left:50px;
    .span {
    font-family:DM Sans;
    font-weight:500;
    font-size:24px;
    line-height:30.83px;
    color:#2E3192; 

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
hr {
    width:100%;
    margin-top:15px;
    margin-bottom:5px;
    background:#808080;

    @media (max-width:768px){
        width:130%;
    }
}

label {
    font-family:DM Sans;
    font-weight:400;
    font-size:16px;
    line-height:20.02px;
    color:#000000; 
    margin-left:8px;
}

input {
    border:none;
    background:#f4f4f4;
    width:75%;
    margin-left:8px;
    margin-bottom:15px;
}

textarea {
    border:none;
    background:#f4f4f4;
    width:70%;
    margin-left:8px;

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

export const BntWrap = styled.div`

   button {
    width:30px;
    border:none;
    border-radius:5px;
    margin-top:10px;
   }
`

export const DownloadableButton = styled.a`

width:65%;
background:#F9F9FC;
text-decoration: none;
color: #2E3192;
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
padding: 20px 25px;
border-radius:10px;

@media (max-width:768px){
    width:130%;
}

`
export const FileWrapper = styled.div`

flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;

width:85%;
height: 75%;
background:#fff;
margin:10px;
border: 1.5px dashed #E6E7E9;
box-sizing: border-box;
border-radius: 6px;

@media (max-width:768px){
    width:130%;
}

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

padding: 3rem;
width: 87%;

background: #F9F9FC;

box-sizing: border-box;
border-radius: 6px;

   

 .div{

width: 30%;
background: #F9F9FC;
border: 1px solid #E6E7E9;
border-radius: 8px;

@media (max-width:768px){
    width:100%;
}



img {
 margin-left:35%;
 margin-top:16px;
}

#div {

margin-top:39px;
width: 100%;

background:#fff;
border-radius:0 0 8px 8px;

    .p {
       
       margin-left:30%; 
    
    }

    @media (max-width:768px){
    width:100%;
}


    }

    }

    @media (max-width:768px){
    width:130%;
}

`

