import { useNavigate } from "react-router-dom";
import React, {
  useEffect,
  useState,
} from "react";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  Stack,
  Button,
  LinearProgress,
} from "@mui/material";

import {
  Assignment,
  PendingActions,
  CheckCircle,
  Cancel,
  Add,
  Analytics,
  SmartToy,
  People,
  TrendingUp,
  ArrowForward,
} from "@mui/icons-material";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

import MainLayout from "../layouts/MainLayout";
import api from "../services/api";

function Dashboard() {

  const [stats, setStats] =
    useState({
      total: 0,
      pending: 0,
      approved: 0,
      rejected: 0,
    });

  const [workflows, setWorkflows] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    Promise.all([
      api.get("/dashboard/stats"),
      api.get("/workflows"),
    ])
      .then(
        ([
          statsResponse,
          workflowResponse,
        ]) => {

          setStats(
            statsResponse.data
          );

          setWorkflows(
            workflowResponse.data
          );

          setLoading(false);
        }
      )
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  const navigate = useNavigate();

  const statCards = [
    {
      title:
        "Total Workflows",

      value: stats.total,

      icon: (
        <Assignment />
      ),

      color:
        "#2563eb",

      bg:
        "#dbeafe",
    },

    {
      title:
        "Pending",

      value:
        stats.pending,

      icon: (
        <PendingActions />
      ),

      color:
        "#f59e0b",

      bg:
        "#fef3c7",
    },

    {
      title:
        "Approved",

      value:
        stats.approved,

      icon: (
        <CheckCircle />
      ),

      color:
        "#22c55e",

      bg:
        "#dcfce7",
    },

    {
      title:
        "Rejected",

      value:
        stats.rejected,

      icon: (
        <Cancel />
      ),

      color:
        "#ef4444",

      bg:
        "#fee2e2",
    },
  ];

  const trendData = [
    {
      month: "Jan",
      value: 25,
    },
    {
      month: "Feb",
      value: 40,
    },
    {
      month: "Mar",
      value: 55,
    },
    {
      month: "Apr",
      value: 70,
    },
    {
      month: "May",
      value: 90,
    },
    {
      month: "Jun",
      value: 120,
    },
  ];

  const statusData = [
    {
      name:
        "Approved",

      value:
        stats.approved,
    },

    {
      name:
        "Pending",

      value:
        stats.pending,
    },

    {
      name:
        "Rejected",

      value:
        stats.rejected,
    },
  ];

  const COLORS = [
    "#22c55e",
    "#f59e0b",
    "#ef4444",
  ];

  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection:
            "column",

          gap: 4,
        }}
      >

        {/* HERO SECTION */}

        <Card
          sx={{
            borderRadius: 6,

            overflow:
              "hidden",

            background:
              "linear-gradient(135deg,#2563eb 0%,#7c3aed 100%)",

            color:
              "#fff",

            boxShadow:
              "0 25px 60px rgba(37,99,235,.25)",
          }}
        >
          <CardContent
            sx={{
              p: 5,
            }}
          >
            <Grid
              container
              spacing={3}
              alignItems="center"
            >
              <Grid
                item
                xs={12}
                md={8}
              >
                <Typography
                  variant="h3"
                  fontWeight="900"
                >
                  Workflow
                  Command Center
                </Typography>

                <Typography
                  sx={{
                    mt: 2,

                    opacity:
                      0.9,

                    maxWidth:
                      700,
                  }}
                >
                  Manage approvals,
                  workflows,
                  analytics,
                  AI search
                  and team
                  productivity
                  from a
                  centralized
                  enterprise
                  dashboard.
                </Typography>

                <Stack
                  direction="row"
                  spacing={2}
                  mt={4}
                >
                  <Button
  variant="contained"
  startIcon={<Add />}
  onClick={() =>
    navigate("/create-workflow")
  }
  sx={{
    bgcolor: "#fff",
    color: "#2563eb",
    fontWeight: 700,
    "&:hover": {
      bgcolor: "#f8fafc",
    },
  }}
>
  Create Workflow
</Button>
                 <Button
  variant="outlined"
  endIcon={<ArrowForward />}
  onClick={() =>
    navigate("/analytics")
  }
  sx={{
    borderColor: "#fff",
    color: "#fff",
  }}
>
  View Reports
</Button>
                </Stack>
              </Grid>

             <Grid
                item
                xs={12}
                md={4}
              >
                <Box
                  textAlign="center"
                >
                  <Typography
                    variant="h1"
                    fontWeight="900"
                  >
                    {
                      stats.total
                    }
                  </Typography>

                  <Typography>
                    Active
                    Workflows
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* KPI CARDS */}

        <Grid
          container
          spacing={3}
        >
          {statCards.map(
            (card) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={
                  card.title
                }
              >
                <Card
                  sx={{
                    borderRadius: 5,

                    transition:
                      ".3s",

                    boxShadow:
                      "0 15px 40px rgba(15,23,42,.05)",

                    "&:hover":
                      {
                        transform:
                          "translateY(-8px)",
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
                          {
                            card.title
                          }
                        </Typography>

                        <Typography
                          variant="h3"
                          fontWeight="800"
                        >
                          {
                            card.value
                          }
                        </Typography>
                      </Box>

                      <Avatar
                        sx={{
                          bgcolor:
                            card.bg,

                          color:
                            card.color,

                          width: 60,

                          height: 60,
                        }}
                      >
                        {
                          card.icon
                        }
                      </Avatar>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            )
          )}
        </Grid>

        {/* QUICK ACTIONS + ACTIVITY */}

        <Grid
          container
          spacing={3}
        >
          {/* QUICK ACTIONS */}

          <Grid
            item
            xs={12}
            md={8}
          >
            <Card
              sx={{
                borderRadius: 5,
                boxShadow:
                  "0 15px 40px rgba(15,23,42,.05)",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  mb={3}
                >
                  Quick Actions
                </Typography>

                <Grid
                  container
                  spacing={2}
                >
                  <Grid item xs={12} sm={6}>
                    <Card
                      sx={{
                        borderRadius: 4,
                        cursor: "pointer",
                        transition:
                          ".3s",

                        "&:hover":
                          {
                            transform:
                              "translateY(-6px)",
                          },
                      }}
                    >
                      <CardContent>
                        <Stack
                          direction="row"
                          spacing={2}
                          alignItems="center"
                        >
                          <Avatar
                            sx={{
                              bgcolor:
                                "#dbeafe",
                              color:
                                "#2563eb",
                            }}
                          >
                            <Add />
                          </Avatar>

                          <Box>
                            <Typography fontWeight="bold">
                              Create Workflow
                            </Typography>

                            <Typography
                              variant="body2"
                              color="text.secondary"
                            >
                              Submit new workflow
                            </Typography>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Card
                      sx={{
                        borderRadius: 4,
                        cursor: "pointer",
                        transition:
                          ".3s",

                        "&:hover":
                          {
                            transform:
                              "translateY(-6px)",
                          },
                      }}
                    >
                      <CardContent>
                        <Stack
                          direction="row"
                          spacing={2}
                          alignItems="center"
                        >
                          <Avatar
                            sx={{
                              bgcolor:
                                "#fef3c7",
                              color:
                                "#f59e0b",
                            }}
                          >
                            <PendingActions />
                          </Avatar>

                          <Box>
                            <Typography fontWeight="bold">
                              Pending Approvals
                            </Typography>

                            <Typography
                              variant="body2"
                              color="text.secondary"
                            >
                              Review requests
                            </Typography>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Card
                      sx={{
                        borderRadius: 4,
                        cursor: "pointer",
                        transition:
                          ".3s",

                        "&:hover":
                          {
                            transform:
                              "translateY(-6px)",
                          },
                      }}
                    >
                      <CardContent>
                        <Stack
                          direction="row"
                          spacing={2}
                          alignItems="center"
                        >
                          <Avatar
                            sx={{
                              bgcolor:
                                "#ede9fe",
                              color:
                                "#7c3aed",
                            }}
                          >
                            <Analytics />
                          </Avatar>

                          <Box>
                            <Typography fontWeight="bold">
                              Analytics
                            </Typography>

                            <Typography
                              variant="body2"
                              color="text.secondary"
                            >
                              View reports
                            </Typography>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Card
                      sx={{
                        borderRadius: 4,
                        cursor: "pointer",
                        transition:
                          ".3s",

                        "&:hover":
                          {
                            transform:
                              "translateY(-6px)",
                          },
                      }}
                    >
                      <CardContent>
                        <Stack
                          direction="row"
                          spacing={2}
                          alignItems="center"
                        >
                          <Avatar
                            sx={{
                              bgcolor:
                                "#dcfce7",
                              color:
                                "#22c55e",
                            }}
                          >
                            <SmartToy />
                          </Avatar>

                          <Box>
                            <Typography fontWeight="bold">
                              AI Search
                            </Typography>

                            <Typography
                              variant="body2"
                              color="text.secondary"
                            >
                              Smart workflow search
                            </Typography>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* ACTIVITY FEED */}

          <Grid
            item
            xs={12}
            md={4}
          >
            <Card
              sx={{
                borderRadius: 5,
                height: "100%",
                boxShadow:
                  "0 15px 40px rgba(15,23,42,.05)",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  mb={3}
                >
                  Activity Feed
                </Typography>

                <Stack spacing={3}>
                  <Box>
                    <Typography fontWeight="bold">
                      Workflow Approved
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Finance request approved
                    </Typography>
                  </Box>

                  <Box>
                    <Typography fontWeight="bold">
                      New Workflow Created
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      HR Leave Request
                    </Typography>
                  </Box>

                  <Box>
                    <Typography fontWeight="bold">
                      User Added
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      New manager onboarded
                    </Typography>
                  </Box>

                  <Box>
                    <Typography fontWeight="bold">
                      Analytics Updated
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Monthly metrics refreshed
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* RECENT WORKFLOWS */}

        <Card
          sx={{
            borderRadius: 5,
            boxShadow:
              "0 15px 40px rgba(15,23,42,.05)",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={3}
            >
              Recent Workflows
            </Typography>

            <Stack spacing={2}>
              {workflows
                .slice(0, 5)
                .map((workflow) => (
                  <Box
                    key={workflow.id}
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      bgcolor:
                        "#f8fafc",
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box>
                        <Typography fontWeight="bold">
                          {workflow.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                        >
                          {workflow.department}
                        </Typography>
                      </Box>

                      <Chip
                        label={workflow.status}
                        color={
                          workflow.status ===
                          "APPROVED"
                            ? "success"
                            : workflow.status ===
                              "REJECTED"
                            ? "error"
                            : "warning"
                        }
                      />
                    </Stack>
                  </Box>
                ))}
            </Stack>
          </CardContent>
        </Card>
                {/* ANALYTICS SECTION */}

        <Grid
          container
          spacing={3}
        >
          {/* APPROVAL TREND */}

          <Grid
            item
            xs={12}
            lg={8}
          >
            <Card
              sx={{
                borderRadius: 5,
                boxShadow:
                  "0 15px 40px rgba(15,23,42,.05)",
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  mb={3}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                    >
                      Workflow Trend Analysis
                    </Typography>

                    <Typography
                      color="text.secondary"
                    >
                      Monthly workflow growth
                    </Typography>
                  </Box>

                  <Chip
                    label="+18.4%"
                    color="success"
                  />
                </Stack>

                <ResponsiveContainer
                  width="100%"
                  height={350}
                >
                  <LineChart
                    data={trendData}
                  >
                    <XAxis
                      dataKey="month"
                    />

                    <YAxis />

                    <Tooltip />

                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#2563eb"
                      strokeWidth={4}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* STATUS CHART */}

          <Grid
            item
            xs={12}
            lg={4}
          >
            <Card
              sx={{
                borderRadius: 5,
                height: "100%",
                boxShadow:
                  "0 15px 40px rgba(15,23,42,.05)",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  mb={3}
                >
                  Workflow Status
                </Typography>

                <ResponsiveContainer
                  width="100%"
                  height={350}
                >
                  <PieChart> 
                    <Pie
  data={statusData}
  dataKey="value"
  cx="50%"
  cy="50%"
  innerRadius={45}
  outerRadius={75}
  paddingAngle={4}
>
                      {statusData.map(
                        (
                          item,
                          index
                        ) => (
                          <Cell
                            key={index}
                            fill={
                              COLORS[
                                index
                              ]
                            }
                          />
                        )
                      )}
                    </Pie>

                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* DEPARTMENT PERFORMANCE */}

        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            md={7}
          >
            <Card
              sx={{
                borderRadius: 5,
                boxShadow:
                  "0 15px 40px rgba(15,23,42,.05)",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  mb={3}
                >
                  Department Performance
                </Typography>

                <ResponsiveContainer
                  width="100%"
                  height={320}
                >
                  <BarChart
                    data={[
                      {
                        dept: "HR",
                        value: 40,
                      },
                      {
                        dept: "Finance",
                        value: 55,
                      },
                      {
                        dept: "IT",
                        value: 80,
                      },
                      {
                        dept: "Admin",
                        value: 35,
                      },
                    ]}
                  >
                    <XAxis
                      dataKey="dept"
                    />

                    <YAxis />

                    <Tooltip />

                    <Bar
                      dataKey="value"
                      fill="#7c3aed"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* PERFORMANCE SCORE */}

          <Grid
            item
            xs={12}
            md={5}
          >
            <Card
              sx={{
                borderRadius: 5,
                height: "100%",
                boxShadow:
                  "0 15px 40px rgba(15,23,42,.05)",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  mb={4}
                >
                  Enterprise Performance
                </Typography>

                <Box mb={4}>
                  <Typography
                    mb={1}
                  >
                    Approval Rate
                  </Typography>

                  <LinearProgress
                    variant="determinate"
                    value={92}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                    }}
                  />

                  <Typography
                    mt={1}
                    fontWeight="bold"
                  >
                    92%
                  </Typography>
                </Box>

                <Box mb={4}>
                  <Typography
                    mb={1}
                  >
                    SLA Compliance
                  </Typography>

                  <LinearProgress
                    variant="determinate"
                    value={96}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                    }}
                  />

                  <Typography
                    mt={1}
                    fontWeight="bold"
                  >
                    96%
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    mb={1}
                  >
                    Processing Speed
                  </Typography>

                  <LinearProgress
                    variant="determinate"
                    value={84}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                    }}
                  />

                  <Typography
                    mt={1}
                    fontWeight="bold"
                  >
                    84%
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
                {/* AI INSIGHTS + TEAM PERFORMANCE */}

        <Grid
          container
          spacing={3}
        >
          {/* AI INSIGHTS */}

          <Grid
            item
            xs={12}
            md={6}
          >
            <Card
              sx={{
                borderRadius: 5,
                height: "100%",
                background:
                  "linear-gradient(135deg,#2563eb,#7c3aed)",
                color: "#fff",
                boxShadow:
                  "0 20px 50px rgba(37,99,235,.25)",
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  mb={3}
                >
                  <Avatar
                    sx={{
                      bgcolor:
                        "rgba(255,255,255,.2)",
                    }}
                  >
                    <SmartToy />
                  </Avatar>

                  <Typography
                    variant="h5"
                    fontWeight="bold"
                  >
                    AI Insights
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    mb: 2,
                    opacity: 0.9,
                  }}
                >
                  Approval rate increased
                  by 18.4% this month.
                </Typography>

                <Typography
                  sx={{
                    mb: 2,
                    opacity: 0.9,
                  }}
                >
                  IT department has the
                  highest workflow volume.
                </Typography>

                <Typography
                  sx={{
                    opacity: 0.9,
                  }}
                >
                  Average approval time
                  reduced by 2.1 days.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* TEAM PERFORMANCE */}

          <Grid
            item
            xs={12}
            md={6}
          >
            <Card
              sx={{
                borderRadius: 5,
                height: "100%",
                boxShadow:
                  "0 15px 40px rgba(15,23,42,.05)",
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  mb={3}
                >
                  <Avatar
                    sx={{
                      bgcolor:
                        "#dbeafe",
                      color:
                        "#2563eb",
                    }}
                  >
                    <People />
                  </Avatar>

                  <Typography
                    variant="h5"
                    fontWeight="bold"
                  >
                    Team Performance
                  </Typography>
                </Stack>

                <Box mb={3}>
                  <Typography>
                    HR Team
                  </Typography>

                  <LinearProgress
                    value={88}
                    variant="determinate"
                    sx={{
                      mt: 1,
                      height: 8,
                      borderRadius: 4,
                    }}
                  />

                  <Typography
                    mt={1}
                  >
                    88%
                  </Typography>
                </Box>

                <Box mb={3}>
                  <Typography>
                    Finance Team
                  </Typography>

                  <LinearProgress
                    value={94}
                    variant="determinate"
                    sx={{
                      mt: 1,
                      height: 8,
                      borderRadius: 4,
                    }}
                  />

                  <Typography
                    mt={1}
                  >
                    94%
                  </Typography>
                </Box>

                <Box>
                  <Typography>
                    IT Team
                  </Typography>

                  <LinearProgress
                    value={98}
                    variant="determinate"
                    sx={{
                      mt: 1,
                      height: 8,
                      borderRadius: 4,
                    }}
                  />

                  <Typography
                    mt={1}
                  >
                    98%
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* EXECUTIVE SUMMARY */}

        <Card
          sx={{
            borderRadius: 5,
            background:
              "linear-gradient(135deg,#0f172a,#1e293b)",
            color: "#fff",
            boxShadow:
              "0 20px 50px rgba(15,23,42,.25)",
          }}
        >
          <CardContent
            sx={{
              p: 4,
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              mb={2}
            >
              Executive Summary
            </Typography>

            <Typography
              sx={{
                opacity: 0.9,
                lineHeight: 1.8,
              }}
            >
              The workflow approval
              platform is operating at
              peak efficiency with a
              high approval rate,
              strong SLA compliance,
              and increasing user
              engagement across all
              departments.
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              mt={4}
            >
              <Chip
                label="92% Approval Rate"
                color="success"
              />

              <Chip
                label="96% SLA Compliance"
                color="primary"
              />

              <Chip
                label="Enterprise Ready"
                color="secondary"
              />
            </Stack>
          </CardContent>
        </Card>

      </Box>
    </MainLayout>
  );
}

export default Dashboard;