
import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  LinearProgress,
  Button,
  Stack,
} from "@mui/material";

import MainLayout from "../layouts/MainLayout";

import {
  TrendingUp,
  CheckCircle,
  PendingActions,
  Cancel,
  Add,
  Assignment,
  Analytics as AnalyticsIcon,
  Search,
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

function Analytics() {
  const monthlyData = [
    { month: "Jan", value: 25 },
    { month: "Feb", value: 40 },
    { month: "Mar", value: 55 },
    { month: "Apr", value: 38 },
    { month: "May", value: 70 },
    { month: "Jun", value: 90 },
  ];

  const departmentData = [
    { dept: "HR", requests: 40 },
    { dept: "Finance", requests: 55 },
    { dept: "IT", requests: 70 },
    { dept: "Admin", requests: 35 },
  ];

  const pieData = [
    { name: "Approved", value: 180 },
    { name: "Pending", value: 32 },
    { name: "Rejected", value: 33 },
  ];

  const COLORS = [
    "#22c55e",
    "#f59e0b",
    "#ef4444",
  ];

  const stats = [
    {
      title: "Total Workflows",
      value: "245",
      growth: "+12%",
      icon: <TrendingUp />,
      color: "#2563eb",
    },
    {
      title: "Approved",
      value: "180",
      growth: "+8%",
      icon: <CheckCircle />,
      color: "#22c55e",
    },
    {
      title: "Pending",
      value: "32",
      growth: "+4%",
      icon: <PendingActions />,
      color: "#f59e0b",
    },
    {
      title: "Rejected",
      value: "33",
      growth: "-2%",
      icon: <Cancel />,
      color: "#ef4444",
    },
  ];

  return (
    <MainLayout>
      <Box mb={4}>
        <Typography
          variant="h3"
          fontWeight="bold"
        >
          Welcome Back 👋
        </Typography>

        <Typography
          color="text.secondary"
          mt={1}
        >
          Monitor workflows, approvals and
          performance metrics in real time.
        </Typography>
      </Box>

      <Card
        sx={{
          mb: 4,
          borderRadius: 5,
          background:
            "linear-gradient(135deg,#2563eb,#7c3aed)",
          color: "#fff",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h5"
            fontWeight="bold"
          >
            Workflow Command Center
          </Typography>

          <Typography sx={{ opacity: 0.9 }}>
            Manage approvals, monitor
            performance and track workflows.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            mt={3}
          >
            <Button
              variant="contained"
              startIcon={<Add />}
              sx={{
                bgcolor: "#fff",
                color: "#2563eb",
                fontWeight: "bold",
              }}
            >
              Create Workflow
            </Button>

            <Button
              variant="outlined"
              startIcon={<Assignment />}
              sx={{
                borderColor: "#fff",
                color: "#fff",
              }}
            >
              Pending Requests
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {stats.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={item.title}
          >
            <Card
              sx={{
                borderRadius: 5,
                transition: "0.3s",
                boxShadow:
                  "0 15px 35px rgba(0,0,0,.08)",
                "&:hover": {
                  transform:
                    "translateY(-8px)",
                  boxShadow:
                    "0 25px 50px rgba(0,0,0,.15)",
                },
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography
                      color="text.secondary"
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="h3"
                      fontWeight="bold"
                    >
                      {item.value}
                    </Typography>

                    <Typography
                      color="success.main"
                    >
                      {item.growth} this month
                    </Typography>
                  </Box>

                  <Avatar
                    sx={{
                      bgcolor: item.color,
                      width: 56,
                      height: 56,
                    }}
                  >
                    {item.icon}
                  </Avatar>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item xs={12} lg={8}>
          <Card
            sx={{
              borderRadius: 5,
              height: "100%",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={3}
              >
                Monthly Approval Trend
              </Typography>

              <ResponsiveContainer
                width="100%"
                height={350}
              >
                <LineChart data={monthlyData}>
                  <XAxis dataKey="month" />
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

        <Grid item xs={12} lg={4}>
          <Card
            sx={{
              borderRadius: 5,
              height: "100%",
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
                height={320}
              >
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    outerRadius={110}
                  >
                    {pieData.map(
                      (entry, index) => (
                        <Cell
                          key={index}
                          fill={
                            COLORS[index]
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

        <Grid item xs={12} lg={7}>
          <Card sx={{ borderRadius: 5 }}>
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={3}
              >
                Department Requests
              </Typography>

              <ResponsiveContainer
                width="100%"
                height={320}
              >
                <BarChart
                  data={departmentData}
                >
                  <XAxis dataKey="dept" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="requests"
                    fill="#7c3aed"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={5}>
          <Card sx={{ borderRadius: 5 }}>
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={3}
              >
                Performance Metrics
              </Typography>

              <Typography>
                Approval Rate (85%)
              </Typography>

              <LinearProgress
                variant="determinate"
                value={85}
                sx={{
                  mb: 3,
                  height: 10,
                  borderRadius: 5,
                }}
              />

              <Typography>
                Processing Speed (78%)
              </Typography>

              <LinearProgress
                variant="determinate"
                value={78}
                sx={{
                  mb: 3,
                  height: 10,
                  borderRadius: 5,
                }}
              />

              <Typography>
                SLA Compliance (92%)
              </Typography>

              <LinearProgress
                variant="determinate"
                value={92}
                sx={{
                  mb: 4,
                  height: 10,
                  borderRadius: 5,
                }}
              />

              <Typography
                variant="h6"
                fontWeight="bold"
                mb={2}
              >
                Recent Activity
              </Typography>

              <Stack spacing={2}>
                <Typography>
                  ✅ Leave Request Approved
                </Typography>

                <Typography>
                  📄 Budget Approval Submitted
                </Typography>

                <Typography>
                  ❌ Travel Request Rejected
                </Typography>

                <Typography>
                  🤖 AI Search Executed
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default Analytics;

