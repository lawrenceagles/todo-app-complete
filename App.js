import React, { useState } from 'react';
import { Keyboard, Dimensions, Platform, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Task from './components/Task'
import styled from "styled-components/native";

const Container = styled.View`
	flex: 1;
	background-color: #EBEAED;
`;

// using padding because scroll view would be implemented later and makes more view with padding.
const Wrapper = styled.View`
	padding-top: 80px;
	padding-left: 20px;
	padding-right: 20px;
  height: 78%;
`;

const Title = styled.Text`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
`;

const TaskList = styled.FlatList`
  padding-top: 30px;
`;

const InputWrapper = styled.KeyboardAvoidingView`
	position: absolute;
	bottom: 60px;
	width: 100%;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;
const TaskInput = styled.TextInput`
	padding:17px;
	background-color: #FFFFFF;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	border-color: #28c72b;
	width: 250px;
`;

const TouchableOpacity = styled.TouchableOpacity``;

const ErrorMessageWrapper = styled.View`
	margin-top: 50%;
`;
const ErrorMessage = styled.Text`
	text-align: center;
	font-size: 16px;
`;

const AddBtn = styled.View`
	width: 60px;
	height: 60px;
	border-color: #28c72b;
	background-color: #28c72b;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	justify-content: center;
	align-items: center;
	border-width: 1px; 
`;

const screenHeight = Dimensions.get('window').height;

const App = () => {
  const [task, setTask] = useState(null);
  const [tasks, setTasks] = useState([])

  const handleAddTask = () => {
    if (!task) {
      return;
    }
    Keyboard.dismiss();
    setTasks([...tasks, task]) // using es6 spread operator.
    setTask(null)
  }

  const handleDeleteTask = (taskIndex) => {
    let currTask = [...tasks];
    currTask.splice(taskIndex, 1);
    setTasks(currTask);
  }

  return ( 
    <Container>
      <Wrapper>
        <Title>Today's Tasks</Title>
          {/* handle no task */}
          {tasks && tasks.length === 0 && (<ErrorMessageWrapper><ErrorMessage> No Task Found. Add Task!</ErrorMessage></ErrorMessageWrapper>)}
          {/* handle tasks display */}
          <TaskList
            data={tasks}
            renderItem={({item, index}) => ( <Task key={index} task={item} handleDeleteTask={() => handleDeleteTask(index)} /> )}
            keyExtractor={(task, index) => task + index}
            contentContainerStyle={{ height: screenHeight }}
          />
      </Wrapper>

      {/* This makes the keyboard to push the View upwards when it is displayed instead of covering it. */}
      <InputWrapper
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0} // show why!!!
      >
        <TaskInput 
          placeholder={"Write your task"} 
          value={task} 
          onChangeText={text => setTask(text)} 
        />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <AddBtn>
              <MaterialIcons name="add-task" size={24} color="black" />
            </AddBtn>
          </TouchableOpacity>
      </InputWrapper>
    </Container>
  );
}

export default App;

