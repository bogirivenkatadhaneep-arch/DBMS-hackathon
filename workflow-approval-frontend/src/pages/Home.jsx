import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a, #1e293b, #334155)",
        color: "white",
      }}
    >
      {/* NAVBAR */}
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 3,
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
          >
            Workflow Portal
          </Typography>

          <Button
            variant="contained"
            onClick={() => navigate("/login")}
          >
            Sign In
          </Button>
        </Box>
      </Container>

      {/* HERO */}
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: "3rem",
                md: "5rem",
              },
              lineHeight: 1.1,
            }}
          >
            Workflow Approval
            <br />
            & Review Portal
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontSize: "1.3rem",
              color: "#cbd5e1",
              maxWidth: "800px",
            }}
          >
            Multi-Level Approvals, Workflow Tracking,
            Audit History and AI-Powered Semantic Search
            for modern organizations.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 5,
              px: 5,
              py: 1.5,
              borderRadius: "12px",
            }}
            onClick={() => navigate("/login")}
          >
            Get Started
          </Button>
        </Box>

        {/* FOOTER */}
        <Box
          sx={{
            textAlign: "center",
            pb: 4,
          }}
        >
          <Typography color="#cbd5e1">
            Workflow Approval & Review Portal © 2026
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;