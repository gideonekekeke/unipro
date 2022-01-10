import React from 'react'
import styled from 'styled-components'

import img from "./img/back.jpg"

function Think() {
  return (
   <Container>
     <Wrapper>
       <Allcom>
         <Title>Think you can change the world with degree? we do</Title>
         <Small></Small>
         <Contentt>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed 
         </Contentt>

         <ButtonCon>
              EXPLORE PROGRAM OFFERINGS
         </ButtonCon>

       </Allcom>
     </Wrapper>
   </Container>
  )
}

export default Think

const ButtonCon = styled.div`
 height: 50px;
 width: 300px;
 background-color:#fffeff ;
 color: #fc1028;
 text-align: center;
 cursor: pointer;
transform: scale(1);
transition: all 350ms;
display: flex;
justify-content:center;
align-items: center;
border-radius: 5px;
font-weight: 600;



&:hover{
  transform:scale(1.03)
};

`

const Contentt = styled.div`
color:#fffeff;
height: 130px;
width: 600px;

text-align: center;
font-size: 15px;

@media screen and (max-width:425px){
  width: 400px;
}

@media screen and (max-width:375px){
  width: 350px;
  font-size:14px;
  margin-bottom: 20px;
}

@media screen and (max-width:320px){
  width: 300px;
  font-size:12px
}
`


const Small = styled.div`
width: 50px;
height: 10px;
background-color: #ef9f26;
/* margin-top: 10px; */
margin-bottom: 20px;
`

const Title = styled.div`
color:#fffeff;
height: 110px;
width: 600px;
font-size:35px;
text-align: center;
font-weight: 600;


@media screen and (max-width:425px){
  width: 400px;
  font-size:25px;
}

@media screen and (max-width:375px){
width: 350px;
font-size:23px;
font-weight: 600;
}

@media screen and (max-width:320px){
  width: 300px;
  font-size:20px;
  font-weight: 600;
  height: 80px;
}
`

const Allcom = styled.div`
height: 350px;
width: 700px;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;



@media screen and (max-width:320px){
  width: 300px;
}

`

const Container = styled.div`
width: 100%;
height: 400px;
background-image: url(${img});
background-repeat: repeat-y;
background-size: cover;

`
const Wrapper = styled.div`

width: 100%;
height: 400px;
background-color: #fc1028;
opacity: 0.9;
display: flex;
justify-content:center;
align-items: center;

`