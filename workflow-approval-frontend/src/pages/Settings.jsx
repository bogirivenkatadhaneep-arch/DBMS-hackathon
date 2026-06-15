import React, { useState, useEffect } from "react";

import {
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Switch,
  FormControlLabel,
  Button,
  Avatar,
  Box,
  Stack,
  Divider,
  Chip,
} from "@mui/material";

import MainLayout from "../layouts/MainLayout";

function Settings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [darkMode, setDarkMode] =
    useState(false);

  const [notifications, setNotifications] =
    useState(true);

  const [aiSuggestions, setAiSuggestions] =
    useState(true);

  const [emailReports, setEmailReports] =
    useState(false);

  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    setName(user.name || "");
    setEmail(user.email || "");

    setDarkMode(
      user.darkMode || false
    );

    setNotifications(
      user.notifications ?? true
    );

    setAiSuggestions(
      user.aiSuggestions ?? true
    );

    setEmailReports(
      user.emailReports ?? false
    );
  }, []);

  const saveProfile = () => {
    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    const updatedUser = {
      ...user,
      name,
      email,
      darkMode,
      notifications,
      aiSuggestions,
      emailReports,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    alert("Profile Saved Successfully");
  };

  const savePreferences = () => {
    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    localStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        darkMode,
        notifications,
        aiSuggestions,
        emailReports,
      })
    );

    alert(
      "Preferences Saved Successfully"
    );
  };

  const updatePassword = () => {
    
    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword
    ) {
      alert(
        "Please fill all password fields"
      );
      return;
    }

    if (
      newPassword !== confirmPassword
    ) {
      alert(
        "Passwords do not match"
      );
      return;
    }

    localStorage.setItem(
      "password",
      newPassword
    );

    alert(
      "Password Updated Successfully"
    );

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };
  return (
  <MainLayout>
    <Typography
      variant="h4"
      fontWeight="900"
      mb={4}
    >
      Settings
    </Typography>

    <Grid container spacing={3}>

      {/* PROFILE CARD */}

      <Grid item xs={12} md={6}>
        <Card
          sx={{
            borderRadius: 5,
            boxShadow:
              "0 15px 35px rgba(0,0,0,.08)",
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
                  width: 70,
                  height: 70,
                  background:
                    "linear-gradient(135deg,#2563eb,#7c3aed)",
                }}
              >
                {name?.charAt(0) || "A"}
              </Avatar>

              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                >
                  {name || "Admin User"}
                </Typography>

                <Chip
                  label="Enterprise Admin"
                  color="primary"
                  size="small"
                />
              </Box>
            </Stack>

            <Divider sx={{ mb: 2 }} />

            <TextField
              fullWidth
              label="Full Name"
              margin="normal"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <Button
              variant="contained"
              sx={{
                mt: 2,
                borderRadius: 3,
              }}
              onClick={saveProfile}
            >
              Save Profile
            </Button>

          </CardContent>
        </Card>
      </Grid>

      {/* PREFERENCES */}

      <Grid item xs={12} md={6}>
        <Card
          sx={{
            borderRadius: 5,
            boxShadow:
              "0 15px 35px rgba(0,0,0,.08)",
          }}
        >
          <CardContent>

            <Typography
              variant="h6"
              fontWeight="bold"
              mb={2}
            >
              System Preferences
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={(e) =>
                    setDarkMode(
                      e.target.checked
                    )
                  }
                />
              }
              label="Dark Mode"
            />

            <br />

            <FormControlLabel
              control={
                <Switch
                  checked={
                    notifications
                  }
                  onChange={(e) =>
                    setNotifications(
                      e.target.checked
                    )
                  }
                />
              }
              label="Notifications"
            />

            <br />

            <FormControlLabel
              control={
                <Switch
                  checked={
                    aiSuggestions
                  }
                  onChange={(e) =>
                    setAiSuggestions(
                      e.target.checked
                    )
                  }
                />
              }
              label="AI Suggestions"
            />

            <br />

            <FormControlLabel
              control={
                <Switch
                  checked={
                    emailReports
                  }
                  onChange={(e) =>
                    setEmailReports(
                      e.target.checked
                    )
                  }
                />
              }
              label="Email Reports"
            />

            <Button
              variant="contained"
              color="secondary"
              sx={{
                mt: 3,
                borderRadius: 3,
              }}
              onClick={
                savePreferences
              }
            >
              Save Preferences
            </Button>

          </CardContent>
        </Card>
      </Grid>
            {/* SECURITY SETTINGS */}

      <Grid item xs={12}>
        <Card
          sx={{
            borderRadius: 5,
            boxShadow:
              "0 15px 35px rgba(0,0,0,.08)",
          }}
        >
          <CardContent>

            <Typography
              variant="h6"
              fontWeight="bold"
              mb={3}
            >
              Security Settings
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Grid
              container
              spacing={2}
            >
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  type="password"
                  label="Current Password"
                  value={currentPassword}
                  onChange={(e) =>
                    setCurrentPassword(
                      e.target.value
                    )
                  }
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  type="password"
                  label="New Password"
                  value={newPassword}
                  onChange={(e) =>
                    setNewPassword(
                      e.target.value
                    )
                  }
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  type="password"
                  label="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="warning"
              sx={{
                mt: 3,
                borderRadius: 3,
              }}
              onClick={
                updatePassword
              }
            >
              Update Password
            </Button>

          </CardContent>
        </Card>
      </Grid>

      {/* SYSTEM INFORMATION */}

      <Grid item xs={12}>
        <Card
          sx={{
            borderRadius: 5,
            boxShadow:
              "0 15px 35px rgba(0,0,0,.08)",
          }}
        >
          <CardContent>

            <Typography
              variant="h6"
              fontWeight="bold"
              mb={3}
            >
              System Information
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Grid
              container
              spacing={3}
            >
              <Grid item xs={12} md={3}>
                <Typography
                  color="text.secondary"
                >
                  Version
                </Typography>

                <Typography
                  fontWeight="bold"
                >
                  1.0.0
                </Typography>
              </Grid>

              <Grid item xs={12} md={3}>
                <Typography
                  color="text.secondary"
                >
                  Environment
                </Typography>

                <Typography
                  fontWeight="bold"
                >
                  Production
                </Typography>
              </Grid>

              <Grid item xs={12} md={3}>
                <Typography
                  color="text.secondary"
                >
                  Database
                </Typography>

                <Typography
                  fontWeight="bold"
                >
                  MySQL
                </Typography>
              </Grid>

              <Grid item xs={12} md={3}>
                <Typography
                  color="text.secondary"
                >
                  Backend
                </Typography>

                <Typography
                  fontWeight="bold"
                >
                  Spring Boot
                </Typography>
              </Grid>
            </Grid>

          </CardContent>
        </Card>
      </Grid>

    </Grid>
  </MainLayout>
);
}

export default Settings;