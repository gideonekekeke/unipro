import React from 'react'
import Styled from 'styled-components'


function Mission() {
    return (
        <>
          <VisionContain>
                <VisionWrapper>
                    <Title>
                        OUR MISSION
                    </Title>
                    <Text>
                    it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
                    </Text>
                    <Text>
                    it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
                    </Text>
                </VisionWrapper>
            </VisionContain> 
        </>
    )
}

export default Mission



const VisionContain = Styled.div`
    width: 100%;
    background-color:  #FFD700;
    color: white;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin-top: 20px;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
`

const VisionWrapper = Styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    @media screen and (max-width: 900px){
        width: 80%
    }

    @media screen and (max-width: 430px){
        width: 90%
    }
`

const Title = Styled.div`
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 18px;
`

const Text = Styled.div`
    line-height: 1.5;
`