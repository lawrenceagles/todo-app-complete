import React from 'react'
import styled from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons';

const Container = styled.TouchableOpacity`
    background-color: #FFFFFF;
    padding: 15px;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const TaskDesc = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

const Square = styled.View`
  margin-right: 15px;
`;

// to make text not to push the other items off the screen. To limit it to the View conainer.
const Desc = styled.Text`
  max-width: 80%; 
`;

const Disc = styled.View`
  width: 12px;
  height: 12px;
  border-color: #28c72b;
  border-width: 2px;
  border-radius: 5px;
`;


const Task = ({ task, handleDeleteTask }) => { 
  return (
    <Container onPress={handleDeleteTask}>
      <TaskDesc>
        <Square>
          <FontAwesome name="tasks" size={24} color="#156616" />
        </Square>
        <Desc>{task}</Desc>
      </TaskDesc>
      <Disc />
    </Container>
  )
}

export default Task;