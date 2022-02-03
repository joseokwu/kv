import styled from 'styled-components/macro';


export const BootModal = styled.div`

height:820px;
width:852px;
background:#fff;
border-radius:10px;
padding:25px;

.tit {

    color:#010297 !important;
    font-size:18px;
    font-weight:600;
}



`


export const CustoModal = styled.div`

width: 100%;
height: 100%;
position: fixed;
top: 0;
left: 0;
z-index: 998;
background: rgba(45, 45, 53, 0.8);
opacity: 0.5;

@media(max-width: 768px) {
  
width:400px;

}   

`

export const ModalWrapper = styled.div`

width: 510px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background: #fff;
padding: 20px;
border-radius: 8px;
z-index: 999;
margin-left: ${props => props.margin};


@media(max-width: 768px) {
  
  width:400px;
  margin-left:-0.8rem;
  padding: 20px;
  }   
`

export const CloseModal = styled.img`
    cursor: pointer;
    float: right;
    margin-left: ${(props) => props.mx ? props.mx : "15.5rem"} ;
    
@media(max-width: 768px) {
  margin-left:9rem;
 
  }   

`

export const ModalHeader = styled.div`

padding:8px;
display:flex;
width:510px;
margin-left:-20px;
margin-top:-19px;

span {

    color:#100298;
    font-weight:600;
    font-size:18px;
}

@media(max-width: 768px) {
  
  width:400px;
 
  }   
`


