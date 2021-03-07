import React from 'react'
import styled from "styled-components/native";

const Container = styled.View`
    background-color: #FFFFFF;
    padding: 15px;
    borderRadius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px
`;

const TaskDesc = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

const Square = styled.View`
  width: 24px;
  height: 24px;
  background-color: #14eb8c;
  opacity: 0.4;
  border-radius: 5px;
  margin-right: 15px;
`;

// to make text not to push the other items off the screen. To limit it to the View conainer.
const Desc = styled.Text`
  max-width: 80%; 
`;

const Disc = styled.View`
  width: 12px;
  height: 12px;
  border-color: #14eb8c;
  border-width: 2;
  border-radius: 5;
`;


const Task = ({task}) => {
  return (
    <Container>
      <TaskDesc>
        <Square />
        <Desc>{task}</Desc>
      </TaskDesc>
      <Disc />
    </Container>
  )
}

export default Task;