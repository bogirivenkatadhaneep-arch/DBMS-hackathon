package com.workflow.workflow_approval_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.workflow.workflow_approval_backend.entity.Workflow;

@Repository
public interface WorkflowRepository
        extends JpaRepository<Workflow, Long> {

    long countByStatus(String status);

    List<Workflow> findByStatus(String status);
}