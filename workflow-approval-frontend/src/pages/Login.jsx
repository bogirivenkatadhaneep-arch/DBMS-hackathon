import React, { useState } from "react";
import {
  Box,
  Card,
  Grid,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Divider,
  IconButton,
  Chip,
} from "@mui/material";

import {
  EmailOutlined,
  LockOutlined,
  VisibilityOutlined,
  VisibilityOffOutlined,
  AccountBalanceOutlined,
  SendOutlined,
  TaskAltOutlined,
  ShieldOutlined,
  AutoAwesomeOutlined,
  BarChartOutlined,
  Lock,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import api from "../services/api";
const demoAccounts = [
  {
    name: "Aarav Admin",
    email: "admin@example.com",
    password: "admin123",
    role: "Admin",
    color: "#6366f1",
    bg: "#ede9fe",
    border: "#a5b4fc",
  },
  {
    name: "Priya Approver",
    email: "approver@example.com",
    password: "approver123",
    role: "Approver",
    color: "#0891b2",
    bg: "#ecfeff",
    border: "#67e8f9",
  },
  {
    name: "Rahul Requester",
    email: "requester@example.com",
    password: "requester123",
    role: "Requester",
    color: "#059669",
    bg: "#d1fae5",
    border: "#6ee7b7",
  },
];

const features = [
  {
    icon: <SendOutlined sx={{ fontSize: 20, color: "#a5b4fc" }} />,
    title: "Workflow Submission",
    desc: "Submit and manage workflow requests with ease",
  },
  {
    icon: <TaskAltOutlined sx={{ fontSize: 20, color: "#a5b4fc" }} />,
    title: "Approval Tracking",
    desc: "Track approval progress in real-time across all levels",
  },
  {
    icon: <ShieldOutlined sx={{ fontSize: 20, color: "#a5b4fc" }} />,
    title: "Audit History",
    desc: "Complete audit trail and history for compliance",
  },
  {
    icon: <AutoAwesomeOutlined sx={{ fontSize: 20, color: "#a5b4fc" }} />,
    title: "AI Semantic Search",
    desc: "Intelligent search across documents and workflows",
  },
  {
    icon: <BarChartOutlined sx={{ fontSize: 20, color: "#a5b4fc" }} />,
    title: "Analytics Dashboard",
    desc: "Data-driven insights and performance analytics",
  },
];

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleDemoFill = async (account) => {
  try {
    setEmail(account.email);
    setPassword(account.password);
    setError("");

    const response = await api.post("/auth/login", {
      email: account.email,
      password: account.password,
    });

    localStorage.setItem(
      "user",
      JSON.stringify(response.data)
    );

    localStorage.setItem(
      "role",
      response.data.role
    );

    navigate("/dashboard");
  } catch (error) {
    console.error(error);
    setError("Login failed");
  }
};

const handleLogin = async () => {
  try {
    setError("");

    const response = await api.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem(
      "user",
      JSON.stringify(response.data)
    );

    localStorage.setItem(
      "role",
      response.data.role
    );

    navigate("/dashboard");

  } catch (error) {
    console.error(error);
    setError("Invalid email or password");
  }
};
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #334155 0%, #0f172a 45%, #020617 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 1150,
          borderRadius: "28px",
          overflow: "hidden",
          boxShadow: "0 25px 80px rgba(0,0,0,0.55)",
        }}
      >
        <Grid container>
          {/* ── LEFT PANEL ── */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              position: "relative",
              background: "linear-gradient(135deg,#0f172a,#020617,#1e1b4b)",
              color: "white",
              p: 5,
              overflow: "hidden",
            }}
          >
            {/* decorative blob */}
            <Box
              sx={{
                position: "absolute",
                width: 350,
                height: 350,
                background:
                  "radial-gradient(circle, rgba(139,92,246,.5), transparent)",
                bottom: -120,
                left: -100,
                borderRadius: "50%",
              }}
            />

            {/* Logo letter */}
            <Typography
              sx={{
                fontSize: "52px",
                fontWeight: 800,
                background: "linear-gradient(90deg,#ffffff,#8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 1,
              }}
            >
              W
            </Typography>

            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Workflow Approval Portal
            </Typography>

            <Typography sx={{ color: "#cbd5e1", mb: 4, fontSize: "1.05rem" }}>
              Multi-Level Approvals with AI-Powered Semantic Search
            </Typography>

            <Divider sx={{ width: 60, borderColor: "#3b82f6", mb: 4 }} />

            {features.map((item, index) => (
              <Box
                key={index}
                sx={{ display: "flex", gap: 2, mb: 3, alignItems: "flex-start" }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "rgba(99,102,241,0.2)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography fontWeight={700} sx={{ mb: 0.3, fontSize: "0.9rem" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#94a3b8", lineHeight: 1.4 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>

          {/* ── RIGHT PANEL ── */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              background: "#ffffff",
              p: { xs: 4, md: 5 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Avatar icon */}
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2.5 }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "#ede9fe",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Lock sx={{ color: "#6366f1", fontSize: 38 }} />
              </Box>
            </Box>

            <Typography align="center" variant="h4" fontWeight="bold" gutterBottom>
              Welcome Back
            </Typography>

            <Typography align="center" color="text.secondary" sx={{ mb: 3.5 }}>
              Sign in to continue to your account
            </Typography>

            {/* Email */}
            <TextField
              fullWidth
              placeholder="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined sx={{ color: "#94a3b8" }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Password */}
            <TextField
              fullWidth
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 1.5 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined sx={{ color: "#94a3b8" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? (
                        <VisibilityOffOutlined sx={{ color: "#94a3b8" }} />
                      ) : (
                        <VisibilityOutlined sx={{ color: "#94a3b8" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Error message */}
            {error && (
              <Typography
                sx={{ color: "#ef4444", fontSize: "0.8rem", mb: 1, pl: 0.5 }}
              >
                {error}
              </Typography>
            )}

            {/* Remember me / Forgot password */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2.5,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    sx={{ color: "#6366f1", "&.Mui-checked": { color: "#6366f1" } }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: "0.85rem", color: "#475569" }}>
                    Remember me
                  </Typography>
                }
              />
              <Typography
                sx={{ color: "#6366f1", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem" }}
              >
                Forgot password?
              </Typography>
            </Box>

            {/* Sign In button */}
            <Button
              fullWidth
              onClick={handleLogin}
              sx={{
                py: 1.7,
                color: "white",
                fontWeight: "bold",
                borderRadius: "12px",
                background: "linear-gradient(90deg,#2563eb,#7c3aed)",
                fontSize: "0.95rem",
                mb: 2.5,
                "&:hover": {
                  background: "linear-gradient(90deg,#1d4ed8,#6d28d9)",
                },
              }}
            >
              SIGN IN
            </Button>

            {/* OR divider */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2.5 }}>
              <Divider sx={{ flex: 1 }} />
              <Typography sx={{ color: "#94a3b8", fontSize: "0.85rem" }}>OR</Typography>
              <Divider sx={{ flex: 1 }} />
            </Box>

            {/* SSO button */}
            <Button
              fullWidth
              variant="outlined"
              startIcon={<AccountBalanceOutlined />}
              sx={{
                py: 1.4,
                borderRadius: "12px",
                borderColor: "#e2e8f0",
                color: "#475569",
                fontWeight: 600,
                mb: 3,
                "&:hover": { borderColor: "#6366f1", background: "#f5f3ff" },
              }}
            >
              Sign in with SSO
            </Button>

            {/* Demo accounts */}
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#94a3b8",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                mb: 1.5,
              }}
            >
              Demo accounts
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {demoAccounts.map((account) => (
                <Box
                  key={account.role}
                  onClick={() => handleDemoFill(account)}
                  sx={{
                    border: "1.5px solid #e2e8f0",
                    borderRadius: "12px",
                    px: 2,
                    py: 1,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.15s",
                    "&:hover": {
                      borderColor: account.color,
                      background: account.bg,
                    },
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: "#1e293b" }}>
                      {account.name}
                    </Typography>
                    <Typography sx={{ fontSize: "0.75rem", color: "#94a3b8", mt: "2px" }}>
                      {account.email} · {account.password}
                    </Typography>
                  </Box>
                  <Chip
                    label={account.role}
                    size="small"
                    sx={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: account.color,
                      background: account.bg,
                      border: `1.5px solid ${account.border}`,
                      height: 26,
                    }}
                  />
                </Box>
              ))}
            </Box>

            <Typography align="center" sx={{ mt: 3, color: "#94a3b8", fontSize: "0.78rem" }}>
              Workflow Approval & Review Portal
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default Login;
