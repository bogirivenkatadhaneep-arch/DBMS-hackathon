import React, { useState } from "react";
import api from "../services/api";

import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";

import MainLayout from "../layouts/MainLayout";

function CreateWorkflow() {
  const [workflow, setWorkflow] =
    useState({
      title: "",
      description: "",
      department: "",
      priority: "",
    });

  const handleChange = (e) => {
    setWorkflow({
      ...workflow,
      [e.target.name]:
        e.target.value,
    });
  };

  const saveDraft = () => {
    localStorage.setItem(
      "workflowDraft",
      JSON.stringify(workflow)
    );

    alert(
      "Draft Saved Successfully"
    );
  };

  const handleSubmit = async () => {
    try {
      await api.post(
        "/workflows",
        {
          title:
            workflow.title,

          description:
            workflow.description,

          department:
            workflow.department,

          priority:
            workflow.priority,

          status:
            "PENDING",
        }
      );

      alert(
        "Workflow Created Successfully"
      );

      setWorkflow({
        title: "",
        description: "",
        department: "",
        priority: "",
      });
    } catch (error) {
      console.error(error);

      alert(
        "Failed to create workflow"
      );
    }
  };

  return (
    <MainLayout>
      <Typography
        variant="h3"
        fontWeight="900"
        sx={{
          mb: 4,

          background:
            "linear-gradient(135deg,#2563eb,#7c3aed)",

          WebkitBackgroundClip:
            "text",

          WebkitTextFillColor:
            "transparent",
        }}
      >
        Create Workflow
      </Typography>

      <Card
        sx={{
          maxWidth: 1100,

          borderRadius: "30px",

          p: 2,

          background:
            "rgba(255,255,255,.75)",

          backdropFilter:
            "blur(20px)",

          border:
            "1px solid rgba(255,255,255,.4)",

          boxShadow:
            "0 25px 60px rgba(37,99,235,.12)",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Stack spacing={4}>
            <TextField
  fullWidth
  label="Workflow Title"
  name="title"
  value={workflow.title}
  onChange={handleChange}
  sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: "18px",
      background:
        "rgba(255,255,255,.85)",
    },
  }}
/>

<TextField
  fullWidth
  multiline
  rows={5}
  label="Description"
  name="description"
  value={workflow.description}
  onChange={handleChange}
  sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: "18px",
      background:
        "rgba(255,255,255,.85)",
    },
  }}
/>

<TextField
  select
  fullWidth
  label="Department"
  name="department"
  value={workflow.department}
  onChange={handleChange}
  sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: "18px",
      background:
        "rgba(255,255,255,.85)",
    },
  }}
>
  <MenuItem value="HR">
    HR
  </MenuItem>

  <MenuItem value="Finance">
    Finance
  </MenuItem>

  <MenuItem value="IT">
    IT
  </MenuItem>

  <MenuItem value="Operations">
    Operations
  </MenuItem>
</TextField>

<TextField
  select
  fullWidth
  label="Priority"
  name="priority"
  value={workflow.priority}
  onChange={handleChange}
  sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: "18px",
      background:
        "rgba(255,255,255,.85)",
    },
  }}
>
  <MenuItem value="Low">
    Low
  </MenuItem>

  <MenuItem value="Medium">
    Medium
  </MenuItem>

  <MenuItem value="High">
    High
  </MenuItem>
</TextField>

<Box
  sx={{
    display: "flex",
    justifyContent:
      "space-between",
    alignItems: "center",
    mt: 2,
  }}
>
  <Typography
    color="text.secondary"
    fontWeight="600"
  >
    Multi-Stage Approval Workflow
  </Typography>

  <Stack
    direction="row"
    spacing={2}
  >
    <Button
      variant="outlined"
      onClick={saveDraft}
      sx={{
        borderRadius:
          "14px",
        px: 4,
        py: 1.3,
        borderWidth: 2,
      }}
    >
      Save Draft
    </Button>

    <Button
      variant="contained"
      onClick={handleSubmit}
      sx={{
        px: 5,
        py: 1.3,
        borderRadius:
          "14px",

        background:
          "linear-gradient(135deg,#2563eb,#7c3aed)",

        boxShadow:
          "0 10px 30px rgba(124,58,237,.35)",

        fontWeight: 700,

        "&:hover": {
          transform:
            "translateY(-2px)",
        },
      }}
    >
      Submit Workflow
    </Button>
  </Stack>
</Box>
          </Stack>
        </CardContent>
      </Card>

      {/* WORKFLOW PREVIEW */}

      <Box mt={4}>
        <Card
          sx={{
            borderRadius: "25px",
            background:
              "rgba(255,255,255,.75)",
            backdropFilter:
              "blur(20px)",
            border:
              "1px solid rgba(255,255,255,.4)",
            boxShadow:
              "0 20px 50px rgba(37,99,235,.08)",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={3}
            >
              Approval Flow Preview
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <Box textAlign="center">
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    bgcolor: "#2563eb",
                    color: "#fff",
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "center",
                    fontWeight: "bold",
                    mx: "auto",
                  }}
                >
                  1
                </Box>

                <Typography mt={1}>
                  Submit
                </Typography>
              </Box>

              <Typography>
                ➜
              </Typography>

              <Box textAlign="center">
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    bgcolor: "#7c3aed",
                    color: "#fff",
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "center",
                    fontWeight: "bold",
                    mx: "auto",
                  }}
                >
                  2
                </Box>

                <Typography mt={1}>
                  Reviewer
                </Typography>
              </Box>

              <Typography>
                ➜
              </Typography>

              <Box textAlign="center">
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    bgcolor: "#f59e0b",
                    color: "#fff",
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "center",
                    fontWeight: "bold",
                    mx: "auto",
                  }}
                >
                  3
                </Box>

                <Typography mt={1}>
                  Manager
                </Typography>
              </Box>

              <Typography>
                ➜
              </Typography>

              <Box textAlign="center">
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    bgcolor: "#22c55e",
                    color: "#fff",
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "center",
                    fontWeight: "bold",
                    mx: "auto",
                  }}
                >
                  4
                </Box>

                <Typography mt={1}>
                  Approved
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

    </MainLayout>
  );
}

export default CreateWorkflow;