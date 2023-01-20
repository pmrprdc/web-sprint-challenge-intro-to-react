// Write your Character component here
import React from "react";
import styled from "styled-components"


const Wrapper = styled.div`
width: 80%;
border: 1px solid green;
margin: 0 auto;
`

const Button = styled.button`
width: 200px;
height 100px;
color: yellow;
background-color: black;
margin: 0 auto;`


export default function Character(props){
    
    return (
    
    <Wrapper>
    <h1>{props.name}</h1>
    <Button>Click</Button>
    </Wrapper>
    )
}