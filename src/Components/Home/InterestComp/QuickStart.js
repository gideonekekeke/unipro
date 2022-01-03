import React from 'react'
import styled from 'styled-components'
import pix from "./ImageFile/img.jpg"

const QuickStart = () => {
    return (
        <Container>
            <Content>
                <ImaheHolder>
                    <Image src={pix}/>

                </ImaheHolder>
                <TextHolder>
                    <Tittle>Know Facts About us </Tittle>
                    <OtherText>
                    Have you ever read a webpage or document that used this text without paying much attention to it? The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader’s attention is focused on the layout of the text instead of its content. Many software programs and applications have made it their default dummy text. Since the lorem ipsum is always used as a placeholder text, its use indicates that this is not a final version of a document, thus helping to avoid unnecessary printing.The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. which translates
                    </OtherText>
                </TextHolder>

            </Content>
            
        </Container>
    )
}

export default QuickStart

const Container = styled.div`
height: 500px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-family: poppins;
margin-top: 40px;

@media screen and (max-width:768px){
height: 800px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-family: poppins;

}
`

const Content = styled.div`
height: 500px;
width: 80%;
display: flex;
justify-content: space-around;
margin-top: 20px;
@media screen and (max-width:768px){
height: 800px;
width: 90vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

}

`

const ImaheHolder = styled.div`
width:500px;
height: 400px;

@media screen and (max-width: 425px){

width:95%;
height: 300px;
display: flex;
justify-content: center;
}


`
const Image = styled.img`
width:500px;
height: 400px;
object-fit: cover;

@media screen and (max-width:425px){

width:100%;
height: 200px;
object-fit: cover;


}

`

const TextHolder = styled.div`
margin-top: 20px;
flex-direction: column;
align-items: center;
width:500px;
height: 400px;
line-height: 1.5rem;
text-align: start;
display: flex;

@media screen and (max-width:768px){
margin-top: -15px;
margin-bottom: 20px;
width:250px;
height: 500px;
}
`
const Tittle = styled.div`
text-transform: capitalize;
font-size: 30px;
font-weight: bold;
@media screen and (max-width:768px){

text-transform: capitalize;
font-size: 20px;
font-weight: bold;
}

@media screen and (max-width: 430px) {
    margin-top: -60px
}
`

const OtherText = styled.div`
margin-top: 20px;

@media screen and (max-width: 768px){

text-transform: capitalize;
margin-bottom: 10px;
font-size: 12px;
width:300px;
margin-top: 10px;
text-align: center;
}


`