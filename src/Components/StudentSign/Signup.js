import React from 'react'
import Styled from 'styled-components'
import Pic from './Image/pix.png'

function Signup() {
    return (
        <>
            <br/>
            <br/>
            <br/>
           
            <MainConatiner>
                <Wrapper1>
                    <LeftContain1>
                        <Pix src={Pic}/>
                        <h2>Student Portal</h2>
                        <p>Get access to your result from here, Enter your student id to let us know you're a student. Don't have an id? see the school admin to get an id for yourself</p>
                    </LeftContain1>
                    <RightContain1>
                        <input type="file" style={{height:"30px", border:"none"}} placeholder='Choose an image'/>
                        <input placeholder='Full name'/>
                        <input placeholder='Email address'/>
                        <input placeholder='Enter your school ID'/>
                        <input placeholder='Enter your password'/>
                        <button>Submit</button>
                        <p>Already Signup? Login in here</p>
                    </RightContain1>

                </Wrapper1>
                <Wrapper2>

                </Wrapper2>
            </MainConatiner>
        </>
    )
}

export default Signup

const MainConatiner = Styled.div`
    background-color: #00243A;
    margin-bottom: -50px;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
`

const Wrapper1 = Styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
    margin-bottom: 80px;
    justify-content: center;

    @media screen and (max-width: 430px){
        margin-top: 10px;
        margin-bottom: 20px;
        width: 95%;
    }
`

const LeftContain1 = Styled.div`
    height: 550px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // font-weight: bold;

    h2{
        font-size: 40px;
    }

    p{
        margin-top: -15px;
    }

    @media screen and (max-width: 430px){
        width: 90%
    }
`

const Pix = Styled.img`
    width: 95%;
`

const RightContain1 = Styled.div`
    width: 400px;
    height: 550px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 150px;
    border: none;
    justify-content: center;

    input{
        width: 90%;
        margin: 10px;
        height: 60px;
        padding-left: 10px;
        border-radius: 8px;
        border: none;
        border: 1px solid lightgrey;
        font-size: 20px;
        color: lightgrey;
    }

    button{
        height: 65px;
        width: 250px;
        border: none;
        border-radius: 10px;
        background-color: #00243A;
        color: white;
        margin-top: 20px;
        font-weight: bold;
        font-size: 25px;
        cursor: pointer;

        :hover{
            background-color:#132A38;
        }
    }

    p{
        color: black;
        font-size: 18px;
    }

    @media screen and (max-width: 980px){
        margin-left: 0;
    }

    @media screen and (max-width: 430px){
        width: 95%;

        button{
            height: 50px;
            width: 150px;
            font-size: 18px;
        }

        input{
            height: 50px;
        }
    }

`

const Wrapper2 = Styled.div``

