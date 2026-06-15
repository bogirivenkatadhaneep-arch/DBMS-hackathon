import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Chip,
  Box,
} from "@mui/material";

import MainLayout from "../layouts/MainLayout";

function AISearch() {
  const [query, setQuery] = useState("");

  const results = [
    {
      id: "WF-101",
      title: "Leave Request",
      department: "HR",
      status: "Pending",
    },
    {
      id: "WF-102",
      title: "Budget Approval",
      department: "Finance",
      status: "Approved",
    },
    {
      id: "WF-103",
      title: "Hiring Request",
      department: "HR",
      status: "Under Review",
    },
  ];

  return (
    <MainLayout>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        AI Semantic Search
      </Typography>

      <Card
        sx={{
          mb: 4,
          borderRadius: 4,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            mb={2}
          >
            Search Workflows Using Natural Language
          </Typography>

          <Box
            display="flex"
            gap={2}
          >
            <TextField
              fullWidth
              label="Example: Show pending HR requests"
              value={query}
              onChange={(e) =>
                setQuery(e.target.value)
              }
            />

            <Button
              variant="contained"
              size="large"
            >
              Search
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {results.map((item) => (
          <Grid
            item
            xs={12}
            key={item.id}
          >
            <Card
              sx={{
                borderRadius: 4,
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                >
                  {item.title}
                </Typography>

                <Typography>
                  Workflow ID: {item.id}
                </Typography>

                <Typography>
                  Department: {item.department}
                </Typography>

                <Box mt={2}>
                  <Chip
                    label={item.status}
                    color="primary"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
}

export default AISearch;