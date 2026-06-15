import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import WorkflowDetails from "../pages/WorkflowDetails";
import Settings from "../pages/Settings";
import WorkflowList from "../pages/WorkflowList";
import CreateWorkflow from "../pages/CreateWorkflow";
import PendingApprovals from "../pages/PendingApprovals";
import ApprovalHistory from "../pages/ApprovalHistory";
import AISearch from "../pages/AISearch";
import Analytics from "../pages/Analytics";
import UserManagement from "../pages/UserManagement";
import RoleManagement from "../pages/RoleManagement";
import AuditLogs from "../pages/AuditLogs";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/workflows" element={<WorkflowList />} />
      <Route path="/create-workflow" element={<CreateWorkflow />} />
      <Route path="/workflow-details" element={<WorkflowDetails />} />

      <Route path="/pending-approvals" element={<PendingApprovals />} />
      <Route path="/approval-history" element={<ApprovalHistory />} />
      <Route path="/ai-search" element={<AISearch />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/users" element={<UserManagement />} />
      <Route path="/roles" element={<RoleManagement />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/audit-logs" element={<AuditLogs />} />
    </Routes>
  );
}

export default AppRoutes;
