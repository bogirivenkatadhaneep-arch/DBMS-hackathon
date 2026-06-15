import React, {
  useEffect,
  useState,
} from "react";

import {
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Box,
  Grid,
  Avatar,
  Divider,
} from "@mui/material";

import {
  Business,
  PriorityHigh,
  AccessTime,
} from "@mui/icons-material";

import MainLayout from "../layouts/MainLayout";
import api from "../services/api";

function PendingApprovals() {

  const [approvals, setApprovals] =
    useState([]);

  useEffect(() => {
    api
      .get("/workflows/pending")
      .then((res) => {
        console.log(
          "Pending Data:",
          res.data
        );

        setApprovals(
          res.data
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const approveWorkflow = async (
    id
  ) => {
    try {
      await api.put(
        `/workflows/${id}/approve`
      );

      setApprovals((prev) =>
        prev.filter(
          (item) =>
            item.id !== id
        )
      );

      alert(
        "Workflow Approved"
      );
    } catch (error) {
      console.error(error);
    }
  };

  const rejectWorkflow = async (
    id
  ) => {
    try {
      await api.put(
        `/workflows/${id}/reject`
      );

      setApprovals((prev) =>
        prev.filter(
          (item) =>
            item.id !== id
        )
      );

      alert(
        "Workflow Rejected"
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainLayout>
      <Box mb={4}>
  <Typography
    variant="h3"
    fontWeight="900"
    sx={{
      background:
        "linear-gradient(135deg,#2563eb,#7c3aed)",
      WebkitBackgroundClip:
        "text",
      WebkitTextFillColor:
        "transparent",
      mb: 1,
    }}
  >
    Pending Approvals
  </Typography>

  <Typography
    color="text.secondary"
  >
    Review and approve workflow
    requests awaiting action.
  </Typography>
</Box>

{approvals.length === 0 ? (

  <Card
    sx={{
      borderRadius: 5,
      p: 4,
      textAlign: "center",
      boxShadow:
        "0 20px 40px rgba(0,0,0,.08)",
    }}
  >
    <Typography
      variant="h6"
    >
      No Pending Approvals
    </Typography>
  </Card>

) : (

  approvals.map((item) => (

    <Card
      key={item.id}
      sx={{
        mb: 4,

        borderRadius: "28px",

        background:
          "rgba(255,255,255,.90)",

        backdropFilter:
          "blur(20px)",

        boxShadow:
          "0 20px 50px rgba(15,23,42,.08)",

        transition: ".3s",

        "&:hover": {
          transform:
            "translateY(-5px)",

          boxShadow:
            "0 25px 60px rgba(37,99,235,.15)",
        },
      }}
    >
      <CardContent
        sx={{
          p: 4,
        }}
      >
        <Box
  display="flex"
  justifyContent="space-between"
  alignItems="center"
  mb={3}
>
  <Box>
    <Typography
      variant="h5"
      fontWeight="800"
    >
      {item.title ||
        "Workflow Request"}
    </Typography>

    <Typography
      color="text.secondary"
    >
      Workflow ID:
      WF-{item.id}
    </Typography>
  </Box>

  <Chip
    label={item.status}
    color="warning"
    sx={{
      fontWeight: "bold",
      px: 1,
    }}
  />
</Box>

<Divider sx={{ mb: 3 }} />

<Grid
  container
  spacing={3}
>
  <Grid item xs={12} md={4}>
    <Box
      display="flex"
      gap={2}
      alignItems="center"
    >
      <Business
        color="primary"
      />

      <Box>
        <Typography
          variant="caption"
        >
          Department
        </Typography>

        <Typography
          fontWeight="bold"
        >
          {item.department ||
            "General"}
        </Typography>
      </Box>
    </Box>
  </Grid>

  <Grid item xs={12} md={4}>
    <Box
      display="flex"
      gap={2}
      alignItems="center"
    >
      <PriorityHigh
        color="error"
      />

      <Box>
        <Typography
          variant="caption"
        >
          Priority
        </Typography>

        <Typography
          fontWeight="bold"
        >
          {item.priority ||
            "Medium"}
        </Typography>
      </Box>
    </Box>
  </Grid>

  <Grid item xs={12} md={4}>
    <Box
      display="flex"
      gap={2}
      alignItems="center"
    >
      <AccessTime
        color="warning"
      />

      <Box>
        <Typography
          variant="caption"
        >
          Status
        </Typography>

        <Typography
          fontWeight="bold"
        >
          Awaiting Approval
        </Typography>
      </Box>
    </Box>
  </Grid>
</Grid>

<Box mt={4}>
  <Typography
    fontWeight="bold"
    gutterBottom
  >
    Description
  </Typography>

  <Typography
    color="text.secondary"
  >
    {item.description ||
      "No description available"}
  </Typography>
</Box>

<Box
  mt={4}
  display="flex"
  justifyContent="space-between"
  alignItems="center"
>
  <Avatar
    sx={{
      bgcolor:
        "#7c3aed",
      width: 50,
      height: 50,
      fontWeight: "bold",
    }}
  >
    {item.title
      ?.charAt(0)
      ?.toUpperCase() ||
      "W"}
  </Avatar>

  <Box
    display="flex"
    gap={2}
  >
    <Button
      variant="contained"
      color="success"
      size="large"
      onClick={() =>
        approveWorkflow(
          item.id
        )
      }
      sx={{
        borderRadius:
          "14px",
        px: 4,
        fontWeight:
          "bold",
      }}
    >
      Approve
    </Button>

    <Button
      variant="contained"
      color="error"
      size="large"
      onClick={() =>
        rejectWorkflow(
          item.id
        )
      }
      sx={{
        borderRadius:
          "14px",
        px: 4,
        fontWeight:
          "bold",
      }}
    >
      Reject
    </Button>
  </Box>
</Box>

      </CardContent>
    </Card>
  ))
)}
  </MainLayout>
);
}

export default PendingApprovals;