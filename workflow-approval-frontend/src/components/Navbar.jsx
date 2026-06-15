import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
} from "@mui/material";

function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "#fff",
        color: "#000",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography>
            Admin User
          </Typography>

          <Avatar>A</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;