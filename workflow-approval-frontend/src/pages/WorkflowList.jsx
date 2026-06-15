import React, { useEffect, useState } from "react";

import {
  Typography,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Chip,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Grid,
  Button,
  Stack,
  Avatar,
  MenuItem,
  TableContainer,
  Paper,
} from "@mui/material";

import {
  Search,
  Refresh,
  Download,
  Visibility,
  Assignment,
  CheckCircle,
  PendingActions,
  Cancel,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import api from "../services/api";

function WorkflowList() {
  const navigate = useNavigate();

  const [workflows, setWorkflows] = useState([]);
  const [search, setSearch] = useState("");
  const [department, setDepartment] =
    useState("ALL");

  const loadWorkflows = () => {
    api
      .get("/workflows")
      .then((res) =>
        setWorkflows(res.data)
      )
      .catch((err) =>
        console.log(err)
      );
  };

  useEffect(() => {
    loadWorkflows();
  }, []);

  const filteredWorkflows =
    workflows.filter((workflow) => {
      const matchesSearch =
        workflow.title
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesDepartment =
        department === "ALL" ||
        workflow.department ===
          department;

      return (
        matchesSearch &&
        matchesDepartment
      );
    });

  const total =
    workflows.length;

  const pending =
    workflows.filter(
      (w) =>
        w.status ===
        "PENDING"
    ).length;

  const approved =
    workflows.filter(
      (w) =>
        w.status ===
        "APPROVED"
    ).length;

  const rejected =
    workflows.filter(
      (w) =>
        w.status ===
        "REJECTED"
    ).length;

  const getStatusColor = (
    status
  ) => {
    switch (status) {
      case "APPROVED":
        return "success";

      case "REJECTED":
        return "error";

      default:
        return "warning";
    }
  };

  const getPriorityColor = (
    priority
  ) => {
    if (priority === "High")
      return "error";

    if (
      priority === "Medium"
    )
      return "warning";

    return "success";
  };

  return (
    <MainLayout>

      {/* HERO SECTION */}

      <Card
        sx={{
          mb: 4,
          borderRadius: 5,

          background:
            "linear-gradient(135deg,#2563eb,#7c3aed)",

          color: "#fff",

          overflow: "hidden",
        }}
      >
        <CardContent
          sx={{
            p: 4,
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
          >
            Workflow Management Center
          </Typography>

          <Typography
            sx={{
              mt: 1,
              opacity: 0.9,
            }}
          >
            Manage workflow
            requests, approvals
            and enterprise
            operations.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            mt={3}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor:
                  "#fff",
                color:
                  "#2563eb",
              }}
            >
              Create Workflow
            </Button>

            <Button
              variant="outlined"
              startIcon={
                <Download />
              }
              sx={{
                color:
                  "#fff",
                borderColor:
                  "#fff",
              }}
            >
              Export
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {/* KPI CARDS */}

      <Grid
        container
        spacing={3}
        mb={4}
      >


  <Grid item xs={12} md={3}>
    <Card
      sx={{
        borderRadius: 5,
        boxShadow:
          "0 15px 35px rgba(37,99,235,.08)",

        transition: ".3s",

        "&:hover": {
          transform:
            "translateY(-6px)",
        },
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              color="text.secondary"
            >
              Total Workflows
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
            >
              {total}
            </Typography>
          </Box>

          <Avatar
            sx={{
              bgcolor:
                "#2563eb",
            }}
          >
            <Assignment />
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  </Grid>

  <Grid item xs={12} md={3}>
    <Card
      sx={{
        borderRadius: 5,
        boxShadow:
          "0 15px 35px rgba(245,158,11,.08)",

        transition: ".3s",

        "&:hover": {
          transform:
            "translateY(-6px)",
        },
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              color="text.secondary"
            >
              Pending
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
            >
              {pending}
            </Typography>
          </Box>

          <Avatar
            sx={{
              bgcolor:
                "#f59e0b",
            }}
          >
            <PendingActions />
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  </Grid>

  <Grid item xs={12} md={3}>
    <Card
      sx={{
        borderRadius: 5,
        boxShadow:
          "0 15px 35px rgba(34,197,94,.08)",

        transition: ".3s",

        "&:hover": {
          transform:
            "translateY(-6px)",
        },
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              color="text.secondary"
            >
              Approved
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
            >
              {approved}
            </Typography>
          </Box>

          <Avatar
            sx={{
              bgcolor:
                "#22c55e",
            }}
          >
            <CheckCircle />
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  </Grid>

  <Grid item xs={12} md={3}>
    <Card
      sx={{
        borderRadius: 5,
        boxShadow:
          "0 15px 35px rgba(239,68,68,.08)",

        transition: ".3s",

        "&:hover": {
          transform:
            "translateY(-6px)",
        },
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              color="text.secondary"
            >
              Rejected
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
            >
              {rejected}
            </Typography>
          </Box>

          <Avatar
            sx={{
              bgcolor:
                "#ef4444",
            }}
          >
            <Cancel />
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  </Grid>
</Grid>

{/* SEARCH & FILTERS */}

<Card
  sx={{
    mb: 4,
    borderRadius: 5,
  }}
>
  <CardContent>
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        xs={12}
        md={6}
      >
        <TextField
          fullWidth
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          placeholder="Search workflows..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={3}
      >
        <TextField
          select
          fullWidth
          value={
            department
          }
          onChange={(e) =>
            setDepartment(
              e.target.value
            )
          }
        >
          <MenuItem value="ALL">
            All Departments
          </MenuItem>

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
      </Grid>

      <Grid
        item
        xs={12}
        md={3}
      >
        <Button
          fullWidth
          startIcon={
            <Refresh />
          }
          variant="contained"
          sx={{
            height: 56,
            borderRadius: 3,
          }}
          onClick={
            loadWorkflows
          }
        >
          Refresh
        </Button>
      </Grid>
    </Grid>
  </CardContent>
</Card>

{/* PREMIUM TABLE */}

<Card
  sx={{
    borderRadius: 5,
    overflow: "hidden",
    boxShadow:
      "0 20px 50px rgba(15,23,42,.05)",
  }}
>
  <CardContent>
    <TableContainer
      component={Paper}
      elevation={0}
    >
      <Table>

<TableHead>
  <TableRow
    sx={{
      bgcolor: "#f8fafc",
    }}
  >
    <TableCell>
      <strong>ID</strong>
    </TableCell>

    <TableCell>
      <strong>Title</strong>
    </TableCell>

    <TableCell>
      <strong>Department</strong>
    </TableCell>

    <TableCell>
      <strong>Priority</strong>
    </TableCell>

    <TableCell>
      <strong>Status</strong>
    </TableCell>

    <TableCell>
      <strong>Date</strong>
    </TableCell>

    <TableCell>
      <strong>Actions</strong>
    </TableCell>
  </TableRow>
</TableHead>

<TableBody>
  {filteredWorkflows.length === 0 ? (
    <TableRow>
      <TableCell
        colSpan={7}
        align="center"
      >
        <Box py={6}>
          <Typography
            variant="h6"
            color="text.secondary"
          >
            No Workflows Found
          </Typography>

          <Typography
            color="text.secondary"
          >
            Try adjusting your
            search or filters.
          </Typography>
        </Box>
      </TableCell>
    </TableRow>
  ) : (
    filteredWorkflows.map(
      (workflow) => (
        <TableRow
          key={workflow.id}
          sx={{
            transition: ".2s",

            "&:hover": {
              bgcolor:
                "#f8fafc",
            },
          }}
        >
          <TableCell>
            #{workflow.id}
          </TableCell>

          <TableCell>
            <Typography
              fontWeight="600"
            >
              {workflow.title}
            </Typography>
          </TableCell>

          <TableCell>
            {
              workflow.department
            }
          </TableCell>

          <TableCell>
            <Chip
              label={
                workflow.priority
              }
              color={getPriorityColor(
                workflow.priority
              )}
              size="small"
            />
          </TableCell>

          <TableCell>
            <Chip
              label={
                workflow.status
              }
              color={getStatusColor(
                workflow.status
              )}
              size="small"
            />
          </TableCell>

          <TableCell>
            {workflow.createdAt?.substring(
              0,
              10
            )}
          </TableCell>

          <TableCell>
            <Stack
              direction="row"
              spacing={1}
            >
              <Button
                size="small"
                variant="contained"
                startIcon={
                  <Visibility />
                }
                onClick={() =>
                  navigate(
                    "/workflow-details"
                  )
                }
              >
                View
              </Button>
            </Stack>
          </TableCell>
        </TableRow>
      )
    )
  )}
</TableBody>
      </Table>
    </TableContainer>
  </CardContent>
</Card>

    </MainLayout>
  );
}

export default WorkflowList;

