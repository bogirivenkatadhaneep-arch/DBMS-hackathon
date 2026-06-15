import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
} from "@mui/material";

import MainLayout from "../layouts/MainLayout";
import api from "../services/api";

function ApprovalHistory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/workflows")
      .then((res) => {
        const history = res.data.filter(
          (item) =>
            item.status === "APPROVED" ||
            item.status === "REJECTED"
        );

        setData(history);
      })
      .catch((err) => console.log(err));
  }, []);

  const getColor = (status) => {
    if (status === "APPROVED") return "success";
    if (status === "REJECTED") return "error";
    return "warning";
  };

  return (
    <MainLayout>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Approval History
      </Typography>

      <Card sx={{ borderRadius: 4 }}>
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Workflow</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Decision</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>

                  <TableCell>
                    {row.title}
                  </TableCell>

                  <TableCell>
                    {row.department}
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={row.status}
                      color={getColor(
                        row.status
                      )}
                    />
                  </TableCell>

                  <TableCell>
                    {row.createdAt?.substring(
                      0,
                      10
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </MainLayout>
  );
}

export default ApprovalHistory;