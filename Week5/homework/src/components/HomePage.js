<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useState } from "react";
>>>>>>> upstream/main
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Box,
  Grid,
} from "@mui/material";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { useAuth } from '../contexts/AuthContext'
=======
//import { useAuth } from '../contexts/AuthContext';
>>>>>>> upstream/main

export default function HomePage() {
  const navigate = useNavigate();

<<<<<<< HEAD

  // State to hold the list of tasks.
  const [tasks, setTasks] = useState([
    // Sample tasks to start with.
    { name: "create a todo app", finished: false },
    { name: "wear a mask", finished: false },
    { name: "play roblox", finished: false },
    { name: "be a winner", finished: true },
    { name: "become a tech bro", finished: true },
  ]);

  // State for the task name being entered by the user.
  const [taskName, setTaskName] = useState("");
=======
  // State to hold the list of tasks.
  const [taskList, setTaskList] = useState([
    // Sample tasks to start with.
    { id: 1, name: "create a todo app", finished: false },
    { id: 2, name: "wear a mask", finished: false },
    { id: 3, name: "play roblox", finished: false },
    { id: 4, name: "be a winner", finished: true },
    { id: 5, name: "become a tech bro", finished: true },
  ]);

  // State for the task name being entered by the user.
  const [newTaskName, setNewTaskName] = useState("");
>>>>>>> upstream/main

  // TODO: Support retrieving your todo list from the API.
  // Currently, the tasks are hardcoded. You'll need to make an API call
  // to fetch the list of tasks instead of using the hardcoded data.

<<<<<<< HEAD
  function addTask() {
    // Check if task name is provided and if it doesn't already exist.
    if (taskName && !tasks.some((task) => task.name === taskName)) {
=======
  function handleAddTask() {
    // Check if task name is provided and if it doesn't already exist.
    if (newTaskName && !taskList.some((task) => task.name === newTaskName)) {
>>>>>>> upstream/main

      // TODO: Support adding todo items to your todo list through the API.
      // In addition to updating the state directly, you should send a request
      // to the API to add a new task and then update the state based on the response.

<<<<<<< HEAD
      setTasks([...tasks, { name: taskName, finished: false }]);
      setTaskName("");
    } else if (tasks.some((task) => task.name === taskName)) {
=======
      const newTask = {
        id: taskList.length + 1, // Assign a unique ID (simple increment for demonstration)
        name: newTaskName,
        finished: false,
      };
      setTaskList([...taskList, newTask]);
      setNewTaskName("");
    } else if (taskList.some((task) => task.name === newTaskName)) {
>>>>>>> upstream/main
      alert("Task already exists!");
    }
  }

  // Function to toggle the 'finished' status of a task.
<<<<<<< HEAD
  function updateTask(name) {
    setTasks(
      tasks.map((task) =>
        task.name === name ? { ...task, finished: !task.finished } : task
=======
  function toggleTaskCompletion(task) {
    setTaskList(
      taskList.map((t) =>
        t.id === task.id ? { ...t, finished: !task.finished } : t
>>>>>>> upstream/main
      )
    );

    // TODO: Support removing/checking off todo items in your todo list through the API.
    // Similar to adding tasks, when checking off a task, you should send a request
    // to the API to update the task's status and then update the state based on the response.
  }

  // Function to compute a message indicating how many tasks are unfinished.
<<<<<<< HEAD
  function getSummary() {
    const unfinishedTasks = tasks.filter((task) => !task.finished).length;
=======
  function getUnfinishedTaskMessage() {
    const unfinishedTasks = taskList.filter((task) => !task.finished).length;
>>>>>>> upstream/main
    return unfinishedTasks === 1
      ? `You have 1 unfinished task`
      : `You have ${unfinishedTasks} tasks left to do`;
  }

  return (
    <>
      <Header />
      <Container component="main" maxWidth="sm">
        {/* Main layout and styling for the ToDo app. */}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Display the unfinished task summary */}
          <Typography variant="h4" component="div" fontWeight="bold">
<<<<<<< HEAD
            {getSummary()}
=======
            {getUnfinishedTaskMessage()}
>>>>>>> upstream/main
          </Typography>
          <Box
            sx={{
              width: "100%",
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Input and button to add a new task */}
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small" // makes the textfield smaller
<<<<<<< HEAD
                  value={taskName}
                  placeholder="Type your task here"
                  onChange={(event) => setTaskName(event.target.value)}
=======
                  value={newTaskName}
                  placeholder="Type your task here"
                  onChange={(event) => setNewTaskName(event.target.value)}
>>>>>>> upstream/main
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="primary"
<<<<<<< HEAD
                  onClick={addTask}
=======
                  onClick={handleAddTask}
>>>>>>> upstream/main
                  fullWidth
                >
                  Add
                </Button>
              </Grid>
            </Grid>
            {/* List of tasks */}
            <List sx={{ marginTop: 3 }}>
<<<<<<< HEAD
              {tasks.map((task) => (
                <ListItem
                  key={task.name}
                  dense
                  onClick={() => updateTask(task.name)}
                >
                  <Checkbox
                    checked={task.finished}
=======
              {taskList.map((task) => (
                <ListItem
                  key={task.name}
                  dense
                >
                  <Checkbox
                    checked={task.finished}
                    onChange={() => toggleTaskCompletion(task)}
>>>>>>> upstream/main
                  />
                  <ListItemText primary={task.name} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Container>
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> upstream/main
