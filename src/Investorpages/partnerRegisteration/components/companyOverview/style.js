import styled from 'styled-components/macro';


export const FormWrapper = styled.div`
width: 100%;
height: ${(props) => (props.height ? props.height : '70%')};
padding: 2rem;
order: 2;
margin: 0rem 0rem;
flex: none;
border: 0 solid #d3d3d3;
border-radius: 5px;
background: #fff;
@media (max-width: 1024px) {
  padding: 2rem 1rem;
}









`;