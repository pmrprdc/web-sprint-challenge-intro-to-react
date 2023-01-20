// Write your Character component here
import React from "react";
import styled from "styled-components"


const Wrapper = styled.div`
width: 80%;
border: 1px solid white;
margin: 0 auto;
background: rgba(239, 207, 237, .5);

`

const Button = styled.button`
width: 200px;
height 100px;
color: yellow;
background-color: black;
margin: 0 auto;
opacity:1;
`


export default function Character(props){
    
    return (
    <Wrapper>
    <Button>{props.name}</Button>
    </Wrapper>
    )
}