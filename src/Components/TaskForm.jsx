import React, { useState, useRef } from "react";
import {
  Box,
  Grid,
  TextField,
  Autocomplete,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Typography,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const TaskForm = ({ onSubmit }) => {
  // flag per segnalare se non è stata impostata l'attività. Se true viene mostrato l'helperText "Choose an activity type!"
  const [activityError, setActivityError] = useState(false);
  // idRef = ultimo id assegnato ad una task
  const idRef = useRef(0);
  const [formData, setFormData] = useState({
    activity: "",
    date: new Date(),
    label: "#1545ff",
  });

  // come id viene usato questo contatore che si incrementa di 1 per ogni nuova task
  function idGenerator() {
    idRef.current += 1;
    return idRef.current;
  }

  function handleSubmit(e) {
    e.preventDefault();
    let error = false;
    // prima di creare la nuova task viene controllato se è stata impostata la activity
    if (!formData.activity) {
      error = true;
      setActivityError(true);
    }
    if (!error) {
      onSubmit({ ...formData, id: idGenerator() });
    }
  }

  const activityTypes = ["lavoro", "sport", "piacere"];
  return (
    <Box
      sx={{
        maxWidth: "40rem",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Create a task
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid container>
          <Grid item xs={12}>
            <Autocomplete
              disablePortal
              value={formData.activity}
              options={activityTypes}
              onBlur={(e) => {
                if (formData.activity) setActivityError(false);
              }}
              onChange={(e) => {
                let value = e.target?.firstChild?.data;
                if (value) {
                  setFormData({ ...formData, activity: value });
                }
              }}
              name="activity"
              id="activity"
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="activity"
                  helperText={activityError ? "Choose an activity type!" : ""}
                  error={activityError}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sx={{ my: 2 }}>
            <FormControl sx={{ width: "100%" }}>
              <FormLabel id="demo-radio-buttons-group-label">Label</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="#1545ff"
                name="radio-buttons-group"
                onChange={(e) =>
                  setFormData({ ...formData, label: e.target.value })
                }
              >
                <FormControlLabel
                  value="#1545ff"
                  control={
                    <Radio
                      sx={{
                        color: "#1545ff",
                        "&.Mui-checked": {
                          color: "#1545ff",
                        },
                      }}
                    />
                  }
                  label="blue"
                  sx={{ color: "#1545ff" }}
                />
                <FormControlLabel
                  value="#df0000"
                  label="red"
                  sx={{ color: "#df0000" }}
                  control={
                    <Radio
                      sx={{
                        color: "#df0000",
                        "&.Mui-checked": {
                          color: "#df0000",
                        },
                      }}
                    />
                  }
                />
                <FormControlLabel
                  value="#a23dff"
                  label="purple"
                  sx={{ color: "#a23dff" }}
                  control={
                    <Radio
                      sx={{
                        color: "#a23dff",
                        "&.Mui-checked": {
                          color: "#a23dff",
                        },
                      }}
                    />
                  }
                />
                <FormControlLabel
                  value="#20cf00"
                  label="green"
                  sx={{ color: "#20cf00" }}
                  control={
                    <Radio
                      sx={{
                        color: "#20cf00",
                        "&.Mui-checked": {
                          color: "#20cf00",
                        },
                      }}
                    />
                  }
                />
                <FormControlLabel
                  value="#ffb404"
                  label="orange"
                  sx={{ color: "#ffb404" }}
                  control={
                    <Radio
                      sx={{
                        color: "#ffb404",
                        "&.Mui-checked": {
                          color: "#ffb404",
                        },
                      }}
                    />
                  }
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                disableMaskedInput={true}
                label="Date-Time picker"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: new Date(e) })
                }
                inputFormat="PPp"
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="contained"
              type="submit"
              sx={{ margin: { xs: 4, sm: "auto" } }}
            >
              Create Task
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default TaskForm;
