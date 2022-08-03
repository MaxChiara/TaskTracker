import React from "react";
import { Box, Typography, Button } from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";

const Task = ({ task, deleteTask }) => {
  return (
    <Box
      id={task.id}
      sx={{
        height: 36,
        padding: 1,
        display: "flex",
        borderBottom: "1px solid #c4c4c4",
        marginBottom: 0,
        justifyContent: "space-between",
        background: `linear-gradient(150deg, ${task.label} 0%, rgba(255,255,255,0.7987570028011204) 50%, rgba(255,255,255,0) 100%)`,
        "&:last-child": {
          mb: 2,
        },
      }}
    >
      <Typography variant="body1" sx={{}}>
        {task.activity}
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography variant="body1" align="right" sx={{}}>
          {task.date.toLocaleString("en-GB", { timeZone: "UTC" }).slice(0, -3)}
        </Typography>
        <Button size="small" onClick={() => deleteTask(task.id)}>
          <DeleteIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Task;
