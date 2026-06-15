import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import MainLayout from "../layouts/MainLayout";

function AuditLogs() {
  const logs = [
    ["Admin","Approved WF-101","14 Jun 2026"],
    ["HR Manager","Reviewed WF-102","13 Jun 2026"],
    ["Finance","Rejected WF-104","12 Jun 2026"],
    ["Employee","Created WF-105","11 Jun 2026"],
  ];

  return (
    <MainLayout>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Audit Logs
      </Typography>

      <Card>
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Action</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {logs.map((log,index)=>(
                <TableRow key={index}>
                  <TableCell>{log[0]}</TableCell>
                  <TableCell>{log[1]}</TableCell>
                  <TableCell>{log[2]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </MainLayout>
  );
}

export default AuditLogs;