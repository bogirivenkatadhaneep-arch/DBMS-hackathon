import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Stack,
  InputBase,
  IconButton,
  Badge,
} from "@mui/material";

import {
  Search,
  NotificationsNone,
  Menu,
} from "@mui/icons-material";

import Sidebar from "../components/Sidebar";

const drawerWidth = 300;

function MainLayout({ children }) {
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#f3f6fb",
        background:
          "linear-gradient(180deg,#f8fafc 0%,#eef4ff 100%)",
      }}
    >
      {/* SIDEBAR */}
      <Box
        sx={{
          width: drawerWidth,
          flexShrink: 0,
        }}
      >
        <Sidebar />
      </Box>

      {/* MAIN CONTENT */}
      <Box
        sx={{
          flexGrow: 1,
          ml: `${drawerWidth}px`,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        {/* HEADER */}
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            bgcolor: "rgba(255,255,255,.85)",
            backdropFilter: "blur(20px)",
            color: "#0f172a",
            borderBottom:
              "1px solid rgba(148,163,184,.15)",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              px: 4,
              height: 72,
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ flexGrow: 1 }}
            >
              <IconButton
                sx={{
                  display: { lg: "none" },
                }}
              >
                <Menu />
              </IconButton>

              {/* SEARCH */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: 450,
                  px: 2,
                  py: 1,
                  bgcolor: "#fff",
                  borderRadius: 3,
                  border:
                    "1px solid rgba(148,163,184,.15)",
                  boxShadow:
                    "0 4px 20px rgba(15,23,42,.06)",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow:
                      "0 8px 30px rgba(37,99,235,.12)",
                  },
                }}
              >
                <Search
                  sx={{
                    color: "#64748b",
                    mr: 1,
                  }}
                />

                <InputBase
                  placeholder="Search workflows, approvals, users..."
                  sx={{
                    flexGrow: 1,
                    fontSize: "0.9rem",
                  }}
                />

                <Typography
                  variant="caption"
                  sx={{
                    bgcolor: "#f8fafc",
                    px: 1,
                    py: 0.3,
                    borderRadius: 1,
                    border:
                      "1px solid rgba(148,163,184,.2)",
                  }}
                >
                  ⌘K
                </Typography>
              </Box>
            </Stack>

            {/* RIGHT ACTIONS */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <IconButton
                sx={{
                  bgcolor: "#fff",
                  border:
                    "1px solid rgba(148,163,184,.15)",
                  boxShadow:
                    "0 4px 16px rgba(0,0,0,.06)",
                }}
              >
                <Badge
                  color="error"
                  variant="dot"
                >
                  <NotificationsNone />
                </Badge>
              </IconButton>

              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
              >
                <Avatar
                  sx={{
                    width: 42,
                    height: 42,
                    background:
                      "linear-gradient(135deg,#2563eb,#7c3aed)",
                    fontWeight: "bold",
                  }}
                >
                  {user?.name?.charAt(0) || "A"}
                </Avatar>

                <Box>
                  <Typography
                    fontWeight="bold"
                    fontSize="0.9rem"
                  >
                    {user?.name ||
                      "Admin User"}
                  </Typography>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    {user?.role || "ADMIN"}
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Toolbar>

          {/* BREADCRUMB */}
          <Box
            sx={{
              px: 4,
              py: 1,
              bgcolor:
                "rgba(255,255,255,.6)",
              borderTop:
                "1px solid rgba(148,163,184,.08)",
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Dashboard / Workflow Portal
            </Typography>
          </Box>
        </AppBar>

        {/* PAGE CONTENT */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 4,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default MainLayout;

