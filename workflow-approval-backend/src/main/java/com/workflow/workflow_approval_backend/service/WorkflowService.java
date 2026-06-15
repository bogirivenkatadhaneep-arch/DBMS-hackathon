package com.workflow.workflow_approval_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.workflow.workflow_approval_backend.entity.Workflow;
import com.workflow.workflow_approval_backend.repository.WorkflowRepository;

@Service
public class WorkflowService {

    @Autowired
    private WorkflowRepository repository;

    public List<Workflow> getAllWorkflows() {
        return repository.findAll();
    }

    public List<Workflow> getPendingWorkflows() {
        return repository.findByStatus("PENDING");
    }

    public Workflow getWorkflowById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Workflow createWorkflow(
            Workflow workflow) {

        if (workflow.getStatus() == null) {
            workflow.setStatus("PENDING");
        }

        return repository.save(workflow);
    }
}