import React from "react";
import Task from "./Task";
import { Box, Typography } from "@mui/material";

const Tasks = ({ tasks, deleteTask }) => {
  function renderTasks(tasks) {
    if (tasks.length) {
      return tasks.map((task) => {
        return <Task task={task} key={task.id} deleteTask={deleteTask}></Task>;
      });
    } else {
      return (
        <Typography variant="h5" sx={{ margin: "auto" }}>
          No tasks!
        </Typography>
      );
    }
  }

  return (
    <Box
      sx={{
        minHeight: 100,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {renderTasks(tasks)}
    </Box>
  );
};

export default Tasks;
