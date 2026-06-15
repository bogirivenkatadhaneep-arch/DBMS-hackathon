package com.workflow.workflow_approval_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.workflow.workflow_approval_backend.entity.Workflow;
import com.workflow.workflow_approval_backend.service.WorkflowService;

@RestController
@RequestMapping("/api/workflows")
@CrossOrigin(origins = "*")
public class WorkflowController {

    @Autowired
    private WorkflowService service;

    @GetMapping
    public List<Workflow> getAll() {
        return service.getAllWorkflows();
    }

    @GetMapping("/pending")
    public List<Workflow> getPendingWorkflows() {
        return service.getPendingWorkflows();
    }

    @PostMapping
    public Workflow create(
            @RequestBody Workflow workflow) {

        workflow.setStatus("PENDING");

        return service.createWorkflow(workflow);
    }

    @PutMapping("/{id}/approve")
    public Workflow approveWorkflow(
            @PathVariable Long id) {

        Workflow workflow =
                service.getWorkflowById(id);

        workflow.setStatus("APPROVED");

        return service.createWorkflow(workflow);
    }

    @PutMapping("/{id}/reject")
    public Workflow rejectWorkflow(
            @PathVariable Long id) {

        Workflow workflow =
                service.getWorkflowById(id);

        workflow.setStatus("REJECTED");

        return service.createWorkflow(workflow);
    }
}