import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Divider,
  Box,
  Avatar,
  Button,
  Stack,
  LinearProgress,
} from "@mui/material";

import MainLayout from "../layouts/MainLayout";

import {
  Assignment,
  Person,
  Business,
  PriorityHigh,
  Download,
  CheckCircle,
  Schedule,
  AccessTime,
} from "@mui/icons-material";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

function WorkflowDetails() {
  const status = "PENDING";

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
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
          >
            Workflow Command Center
          </Typography>

          <Typography sx={{ mt: 1, opacity: 0.9 }}>
            Monitor workflow progress,
            approvals, activities and
            stakeholders.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            mt={3}
          >
            <Chip
              label="Workflow #WF-101"
              sx={{
                bgcolor:
                  "rgba(255,255,255,.2)",
                color: "#fff",
              }}
            />

            <Chip
              label={status}
              sx={{
                bgcolor:
                  "rgba(255,255,255,.2)",
                color: "#fff",
              }}
            />
          </Stack>
        </CardContent>
      </Card>

      {/* KPI CARDS */}
      <Grid container spacing={3} mb={1}>
        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography color="text.secondary">
                Progress
              </Typography>

              <Typography
                variant="h4"
                fontWeight="bold"
              >
                75%
              </Typography>

              <LinearProgress
                value={75}
                variant="determinate"
                sx={{ mt: 2 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography color="text.secondary">
                Approvals
              </Typography>

              <Typography
                variant="h4"
                fontWeight="bold"
              >
                3/5
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography color="text.secondary">
                SLA Status
              </Typography>

              <Typography
                variant="h4"
                fontWeight="bold"
                color="success.main"
              >
                On Time
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography color="text.secondary">
                Remaining
              </Typography>

              <Typography
                variant="h4"
                fontWeight="bold"
              >
                2 Steps
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* MAIN DETAILS */}
        <Grid item xs={12} lg={8}>
          <Card
            sx={{
              borderRadius: 4,
              mb: 3,
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                fontWeight="bold"
                mb={3}
              >
                Leave Request
              </Typography>

              <Divider sx={{ mb: 3 }} />

              <Stack spacing={2}>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <Assignment />
                  <Typography>
                    Workflow ID:
                    WF-101
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <Business />
                  <Typography>
                    Department: HR
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <PriorityHigh />
                  <Typography>
                    Priority: High
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <Person />
                  <Typography>
                    Requested By:
                    John Doe
                  </Typography>
                </Box>
              </Stack>

              <Divider sx={{ my: 3 }} />

              <Typography
                variant="h6"
                fontWeight="bold"
                mb={2}
              >
                Description
              </Typography>

              <Typography>
                Employee requested
                leave for 5 working
                days due to personal
                reasons.
              </Typography>
            </CardContent>
          </Card>

          {/* COMMENTS */}
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={3}
              >
                Comments & Notes
              </Typography>

              <Box mb={2}>
                <Typography
                  fontWeight="bold"
                >
                  HR Manager
                </Typography>

                <Typography
                  color="text.secondary"
                >
                  Initial review
                  completed.
                </Typography>
              </Box>

              <Box>
                <Typography
                  fontWeight="bold"
                >
                  Finance Team
                </Typography>

                <Typography
                  color="text.secondary"
                >
                  Awaiting final
                  verification.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid item xs={12} lg={4}>
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
                Approval Timeline
              </Typography>

              <Timeline>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="success" />
                    <TimelineConnector />
                  </TimelineSeparator>

                  <TimelineContent>
                    Submitted
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="success" />
                    <TimelineConnector />
                  </TimelineSeparator>

                  <TimelineContent>
                    Reviewer Approved
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="success" />
                    <TimelineConnector />
                  </TimelineSeparator>

                  <TimelineContent>
                    Manager Approved
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="warning" />
                  </TimelineSeparator>

                  <TimelineContent>
                    Finance Review
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </CardContent>
          </Card>

          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={3}
              >
                Attachments
              </Typography>

              <Button
                fullWidth
                variant="outlined"
                startIcon={<Download />}
              >
                Download Leave Form
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* APPROVERS */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={3}
              >
                Assigned Approvers
              </Typography>

              <Stack
                direction="row"
                spacing={4}
                flexWrap="wrap"
              >
                {[
                  "Reviewer",
                  "Manager",
                  "Finance",
                  "HR",
                ].map((name) => (
                  <Box
                    key={name}
                    textAlign="center"
                  >
                    <Avatar
                      sx={{
                        width: 70,
                        height: 70,
                        mx: "auto",
                        background:
                          "linear-gradient(135deg,#2563eb,#7c3aed)",
                      }}
                    >
                      {name[0]}
                    </Avatar>

                    <Typography
                      mt={1}
                    >
                      {name}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* ACTIVITY LOG */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={3}
              >
                Activity Log
              </Typography>

              <Stack spacing={2}>
                <Box>
                  <CheckCircle
                    color="success"
                  />
                  <Typography>
                    Workflow
                    Submitted -
                    11 Jun 2026
                  </Typography>
                </Box>

                <Box>
                  <CheckCircle
                    color="success"
                  />
                  <Typography>
                    Reviewer
                    Approved -
                    12 Jun 2026
                  </Typography>
                </Box>

                <Box>
                  <CheckCircle
                    color="success"
                  />
                  <Typography>
                    Manager
                    Approved -
                    13 Jun 2026
                  </Typography>
                </Box>

                <Box>
                  <Schedule
                    color="warning"
                  />
                  <Typography>
                    Finance Review
                    Pending
                  </Typography>
                </Box>

                <Box>
                  <AccessTime
                    color="info"
                  />
                  <Typography>
                    Awaiting Final
                    Approval
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default WorkflowDetails;

