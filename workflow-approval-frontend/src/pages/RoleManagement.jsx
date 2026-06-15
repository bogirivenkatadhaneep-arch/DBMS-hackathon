import React, { useState } from "react";

import {
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Stack,
} from "@mui/material";

import {
  Security,
  Group,
  VerifiedUser,
  Add,
} from "@mui/icons-material";

import MainLayout from "../layouts/MainLayout";

function RoleManagement() {

  const [roles, setRoles] = useState([
    {
      id: 1,
      name: "Admin",
      users: 5,
      permissions: "Full Access",
      status: "Active",
    },
    {
      id: 2,
      name: "HR Manager",
      users: 8,
      permissions: "HR Access",
      status: "Active",
    },
    {
      id: 3,
      name: "Reviewer",
      users: 12,
      permissions: "Approval Access",
      status: "Active",
    },
    {
      id: 4,
      name: "Finance Manager",
      users: 4,
      permissions: "Finance Access",
      status: "Active",
    },
    {
      id: 5,
      name: "Employee",
      users: 34,
      permissions: "Limited Access",
      status: "Active",
    },
  ]);

  const [newRole, setNewRole] =
    useState("");

  const addRole = () => {
    if (!newRole.trim()) {
      alert("Enter Role Name");
      return;
    }

    setRoles([
      ...roles,
      {
        id: Date.now(),
        name: newRole,
        users: 0,
        permissions: "Custom",
        status: "Active",
      },
    ]);

    setNewRole("");
  };
  return (
    <MainLayout>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Role Management
      </Typography>

      {/* KPI CARDS */}

      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Security color="primary" />
                <Box>
                  <Typography color="text.secondary">
                    Total Roles
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight="bold"
                  >
                    {roles.length}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Group color="success" />

                <Box>
                  <Typography color="text.secondary">
                    Active Users
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight="bold"
                  >
                    63
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Stack direction="row" spacing={2}>
                <VerifiedUser color="warning" />

                <Box>
                  <Typography color="text.secondary">
                    Permissions
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight="bold"
                  >
                    24
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography color="text.secondary">
                Security Level
              </Typography>

              <Typography
                variant="h4"
                fontWeight="bold"
                color="success.main"
              >
                High
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* ADD ROLE */}

      <Card
        sx={{
          mb: 3,
          borderRadius: 4,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            mb={2}
            fontWeight="bold"
          >
            Create New Role
          </Typography>

          <Stack
            direction="row"
            spacing={2}
          >
            <TextField
              fullWidth
              label="Role Name"
              value={newRole}
              onChange={(e) =>
                setNewRole(
                  e.target.value
                )
              }
            />

            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={addRole}
            >
              Create
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {/* ROLES TABLE */}

      <Card
        sx={{
          borderRadius: 4,
          mb: 3,
        }}
      >
        <CardContent>

          <Typography
            variant="h6"
            fontWeight="bold"
            mb={2}
          >
            Roles & Permissions
          </Typography>

          <TableContainer
            component={Paper}
          >
            <Table>

              <TableHead>
                <TableRow>
                  <TableCell>
                    Role
                  </TableCell>

                  <TableCell>
                    Users
                  </TableCell>

                  <TableCell>
                    Permissions
                  </TableCell>

                  <TableCell>
                    Status
                  </TableCell>

                  <TableCell>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>

                {roles.map(
                  (role) => (
                    <TableRow
                      key={role.id}
                    >
                      <TableCell>
                        {role.name}
                      </TableCell>

                      <TableCell>
                        {role.users}
                      </TableCell>

                      <TableCell>
                        {
                          role.permissions
                        }
                      </TableCell>

                      <TableCell>
                        <Chip
                          label={
                            role.status
                          }
                          color="success"
                          size="small"
                        />
                      </TableCell>

                      <TableCell>
  <Button
    size="small"
    variant="outlined"
    onClick={() => {
      const newName = prompt(
        "Edit Role Name",
        role.name
      );

      if (newName) {
        setRoles(
          roles.map((r) =>
            r.id === role.id
              ? {
                  ...r,
                  name: newName,
                }
              : r
          )
        );
      }
    }}
  >
    Edit
  </Button>

  <Button
    size="small"
    color="error"
    variant="outlined"
    sx={{ ml: 1 }}
    onClick={() => {
      if (
        window.confirm(
          `Delete ${role.name}?`
        )
      ) {
        setRoles(
          roles.filter(
            (r) =>
              r.id !== role.id
          )
        );
      }
    }}
  >
    Delete
  </Button>
</TableCell>
                    </TableRow>
                  )
                )}

              </TableBody>

            </Table>
          </TableContainer>

        </CardContent>
      </Card>

      {/* PERMISSION MATRIX */}

      <Card
        sx={{
          borderRadius: 4,
          mb: 3,
        }}
      >
        <CardContent>

          <Typography
            variant="h6"
            fontWeight="bold"
            mb={3}
          >
            Permission Matrix
          </Typography>

          <TableContainer
            component={Paper}
          >
            <Table>

              <TableHead>
                <TableRow>
                  <TableCell>
                    Role
                  </TableCell>

                  <TableCell>
                    Create
                  </TableCell>

                  <TableCell>
                    Edit
                  </TableCell>

                  <TableCell>
                    Approve
                  </TableCell>

                  <TableCell>
                    Delete
                  </TableCell>

                  <TableCell>
                    AI Search
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>

                <TableRow>
                  <TableCell>
                    Admin
                  </TableCell>

                  <TableCell>✅</TableCell>
                  <TableCell>✅</TableCell>
                  <TableCell>✅</TableCell>
                  <TableCell>✅</TableCell>
                  <TableCell>✅</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    HR Manager
                  </TableCell>

                  <TableCell>✅</TableCell>
                  <TableCell>✅</TableCell>
                  <TableCell>✅</TableCell>
                  <TableCell>❌</TableCell>
                  <TableCell>✅</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    Reviewer
                  </TableCell>

                  <TableCell>❌</TableCell>
                  <TableCell>❌</TableCell>
                  <TableCell>✅</TableCell>
                  <TableCell>❌</TableCell>
                  <TableCell>❌</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    Finance Manager
                  </TableCell>

                  <TableCell>✅</TableCell>
                  <TableCell>✅</TableCell>
                  <TableCell>✅</TableCell>
                  <TableCell>❌</TableCell>
                  <TableCell>✅</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    Employee
                  </TableCell>

                  <TableCell>✅</TableCell>
                  <TableCell>❌</TableCell>
                  <TableCell>❌</TableCell>
                  <TableCell>❌</TableCell>
                  <TableCell>❌</TableCell>
                </TableRow>

              </TableBody>

            </Table>
          </TableContainer>

        </CardContent>
      </Card>

      {/* RECENT ROLE ACTIVITY */}

      <Grid container spacing={3}>

        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 4,
              height: "100%",
            }}
          >
            <CardContent>

              <Typography
                variant="h6"
                fontWeight="bold"
                mb={2}
              >
                Recent Role Activity
              </Typography>

              <Stack spacing={2}>

                <Chip
                  label="Admin role updated"
                  color="primary"
                />

                <Chip
                  label="HR Manager permissions modified"
                  color="success"
                />

                <Chip
                  label="Reviewer role assigned"
                  color="warning"
                />

                <Chip
                  label="Finance role created"
                  color="secondary"
                />

              </Stack>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 4,
              height: "100%",
            }}
          >
            <CardContent>

              <Typography
                variant="h6"
                fontWeight="bold"
                mb={2}
              >
                Access Overview
              </Typography>

              <Typography mb={2}>
                Total Roles: {roles.length}
              </Typography>

              <Typography mb={2}>
                Active Users: 63
              </Typography>

              <Typography mb={2}>
                Security Level: High
              </Typography>

              <Typography>
                Enterprise Access Control Enabled
              </Typography>

            </CardContent>
          </Card>
        </Grid>

      </Grid>

    </MainLayout>
  );
}

export default RoleManagement;