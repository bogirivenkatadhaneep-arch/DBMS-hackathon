import React from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Avatar,
  Stack,
  Divider,
  Chip,
} from "@mui/material";

import {
  Dashboard,
  Assignment,
  AddCircle,
  PendingActions,
  History,
  Search,
  Analytics,
  People,
  Security,
  ReceiptLong,
  Settings,
  Logout,
  SmartToy,
} from "@mui/icons-material";

import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    text: "Dashboard",
    icon: <Dashboard />,
    path: "/dashboard",
    roles: ["ADMIN", "APPROVER", "REQUESTER"],
  },
  {
    text: "Workflows",
    icon: <Assignment />,
    path: "/workflows",
    roles: ["ADMIN", "REQUESTER"],
  },
  {
    text: "Create Workflow",
    icon: <AddCircle />,
    path: "/create-workflow",
    roles: ["ADMIN", "REQUESTER"],
  },
  {
    text: "Pending Approvals",
    icon: <PendingActions />,
    path: "/pending-approvals",
    roles: ["ADMIN", "APPROVER"],
    badge: 12,
  },
  {
    text: "Approval History",
    icon: <History />,
    path: "/approval-history",
    roles: ["ADMIN", "APPROVER", "REQUESTER"],
  },

  {
    text: "Analytics",
    icon: <Analytics />,
    path: "/analytics",
    roles: ["ADMIN", "APPROVER"],
  },
  {
    text: "Users",
    icon: <People />,
    path: "/users",
    roles: ["ADMIN"],
  },
  {
    text: "Roles",
    icon: <Security />,
    path: "/roles",
    roles: ["ADMIN"],
  },
  {
    text: "Audit Logs",
    icon: <ReceiptLong />,
    path: "/audit-logs",
    roles: ["ADMIN"],
  },
  {
    text: "Settings",
    icon: <Settings />,
    path: "/settings",
    roles: ["ADMIN"],
  },
];

function Sidebar() {
  const location = useLocation();

  const role = localStorage.getItem("role");

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  return (
    <Box
      sx={{
        width: 300,
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,

        background: "rgba(15,23,42,.95)",
        backdropFilter: "blur(30px)",

        color: "#fff",

        display: "flex",
        flexDirection: "column",

        borderRight:
          "1px solid rgba(255,255,255,.06)",

        boxShadow:
          "20px 0 60px rgba(0,0,0,.25)",
      }}
    >
      {/* LOGO */}
      <Box sx={{ p: 3 }}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <Avatar
            sx={{
              width: 56,
              height: 56,

              background:
                "linear-gradient(135deg,#2563eb,#7c3aed)",

              boxShadow:
                "0 15px 35px rgba(37,99,235,.45)",

              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            WP
          </Avatar>

          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
            >
              Workflow Portal
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#94a3b8",
              }}
            >
              Enterprise Suite
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Divider
        sx={{
          borderColor:
            "rgba(255,255,255,.08)",
        }}
      />

      <Typography
        sx={{
          px: 3,
          py: 2,
          color: "#64748b",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        MAIN MENU
      </Typography>

      <List sx={{ px: 2 }}>
        {menuItems
          .filter((item) =>
            item.roles.includes(role)
          )
          .map((item) => (
            <ListItemButton
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                mb: 1,

                borderRadius: 3,

                color: "#e2e8f0",

                transition:
                  "all .25s ease",

                position: "relative",

                background:
                  location.pathname ===
                  item.path
                    ? "linear-gradient(135deg,#2563eb,#7c3aed)"
                    : "transparent",

                boxShadow:
                  location.pathname ===
                  item.path
                    ? "0 8px 25px rgba(37,99,235,.35)"
                    : "none",

                "&::before":
                  location.pathname ===
                  item.path
                    ? {
                        content: '""',
                        position:
                          "absolute",
                        left: -8,
                        top: 8,
                        bottom: 8,
                        width: 4,
                        borderRadius: 4,
                        background:
                          "#fff",
                      }
                    : {},

                "&:hover": {
                  transform:
                    "translateX(8px) scale(1.02)",

                  background:
                    "linear-gradient(135deg,#2563eb,#7c3aed)",
                },
              }}
            >
              <Box sx={{ mr: 2 }}>
                {item.icon}
              </Box>

              <ListItemText
                primary={item.text}
              />

              {item.badge && (
                <Chip
                  label={item.badge}
                  size="small"
                  color="warning"
                />
              )}
            </ListItemButton>
          ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      {/* AI CARD */}
      <Box
        sx={{
          mx: 2,
          mb: 2,
          p: 2.5,

          borderRadius: 4,

          background:
            "linear-gradient(135deg,#2563eb,#7c3aed)",

          boxShadow:
            "0 15px 40px rgba(37,99,235,.35)",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <SmartToy />

          <Box>
            <Typography
              fontWeight="bold"
            >
              Workflow AI
            </Typography>

            <Typography
              variant="body2"
            >
              1,247 Searches
            </Typography>

            <Typography
              variant="body2"
            >
              98% Accuracy
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* USER CARD */}
      <Box sx={{ px: 2 }}>
        <Box
          sx={{
            p: 2,

            borderRadius: 4,

            bgcolor:
              "rgba(255,255,255,.05)",

            border:
              "1px solid rgba(255,255,255,.08)",
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
          >
            <Avatar
              sx={{
                background:
                  "linear-gradient(135deg,#2563eb,#7c3aed)",
              }}
            >
              {user?.name?.charAt(0) ||
                "A"}
            </Avatar>

            <Box>
              <Typography
                fontWeight="bold"
              >
                {user?.name ||
                  "Admin User"}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#94a3b8",
                }}
              >
                {user?.role ||
                  "ADMIN"}
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  color: "#22c55e",
                }}
              >
                ● Online
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>

      {/* STATS */}
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            p: 2,
            borderRadius: 4,
            bgcolor:
              "rgba(255,255,255,.04)",
          }}
        >
          <Typography
            variant="body2"
          >
            Pending Reviews: 12
          </Typography>

          <Typography
            variant="body2"
          >
            Active Users: 34
          </Typography>

          <Typography
            variant="body2"
          >
            Storage Used: 78%
          </Typography>
        </Box>
      </Box>

      {/* LOGOUT */}
      <Box sx={{ p: 2 }}>
        <ListItemButton
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
          sx={{
            borderRadius: 3,
            bgcolor: "#dc2626",
            color: "#fff",
            justifyContent:
              "center",

            "&:hover": {
              bgcolor: "#b91c1c",
            },
          }}
        >
          <Logout sx={{ mr: 1 }} />

          <ListItemText
            primary="Logout"
            sx={{
              textAlign: "center",
            }}
          />
        </ListItemButton>
      </Box>
    </Box>
  );
}

export default Sidebar;