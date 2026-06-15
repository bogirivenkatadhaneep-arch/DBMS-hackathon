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

function UserManagement() {
  const users = [
    ["John Doe","john@gmail.com","Employee"],
    ["Sarah Smith","sarah@gmail.com","Reviewer"],
    ["David Lee","david@gmail.com","Manager"],
    ["Admin User","admin@gmail.com","Admin"],
  ];

  return (
    <MainLayout>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        User Management
      </Typography>

      <Card>
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map((user,index)=>(
                <TableRow key={index}>
                  <TableCell>{user[0]}</TableCell>
                  <TableCell>{user[1]}</TableCell>
                  <TableCell>{user[2]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </MainLayout>
  );
}

export default UserManagement;