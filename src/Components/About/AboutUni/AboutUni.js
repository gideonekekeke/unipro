import React from 'react'
import Styled from 'styled-components'
import Back from '../Images/Back.jpg'


function AboutUni() {
    return (
        <>
            <KnowContain>
                <KnowWrapper>
                    <LeftCard>
                    </LeftCard>
                    <RightCard>
                        Right Card
                    </RightCard>
                </KnowWrapper>
            </KnowContain>
          
        </>
    )
}

export default AboutUni

const KnowContain = Styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

const KnowWrapper = Styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 425px){
        width: 95%;
    }
`

const LeftCard = Styled.div`
    height: 400px;
    width: 650px;
    background-color: pink;
    border-radius: 5px;
    border: 1px solid whitesmoke;
    margin: 10px;
    background-image: url(${Back});
    background-size: cover;
    background-position: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    @media screen and (max-width: 425px){
        width: 100%;
        height: 350px;
    }
`

const RightCard = Styled.div`
    height: 400px;
    width: 650px;
    // background-color: red;
    border-radius: 5px;
    margin: 10px;

    @media screen and (max-width: 425px){
        width: 100%;
        height: auto;
        padding: 5px;
    }
`
