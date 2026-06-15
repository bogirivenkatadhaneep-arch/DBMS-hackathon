package com.workflow.workflow_approval_backend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.workflow.workflow_approval_backend.repository.WorkflowRepository;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {

    @Autowired
    private WorkflowRepository workflowRepository;

    @GetMapping("/stats")
    public Map<String, Object> getStats() {

        Map<String, Object> stats = new HashMap<>();

        stats.put("total", workflowRepository.count());

        stats.put(
                "pending",
                workflowRepository.countByStatus("PENDING"));

        stats.put(
                "approved",
                workflowRepository.countByStatus("APPROVED"));

        stats.put(
                "rejected",
                workflowRepository.countByStatus("REJECTED"));

        return stats;
    }
}