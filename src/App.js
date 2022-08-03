import "./App.css";
import { Container } from "@mui/material";
import TaskForm from "./Components/TaskForm";
import { useState } from "react";
import Tasks from "./Components/Tasks";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

function App() {
  const [tasks, setTasks] = useState([]);

  function onSubmit(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(id) {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  }

  return (
    <Container
      maxWidth={"sm"}
      sx={{
        my: { xs: 0, sm: 8 },
        backgroundColor: "#f7f7f7",
        py: { xs: 0, sm: 8 },
      }}
    >
      <Typography variant="h2" align="center">
        Task Tracker
      </Typography>
      <Divider sx={{ marginBottom: 4 }} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
      <TaskForm onSubmit={onSubmit} />
    </Container>
  );
}

export default App;
