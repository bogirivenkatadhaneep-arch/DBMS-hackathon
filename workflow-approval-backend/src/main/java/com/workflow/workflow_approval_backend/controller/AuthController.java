package com.workflow.workflow_approval_backend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.workflow.workflow_approval_backend.entity.User;
import com.workflow.workflow_approval_backend.repository.UserRepository;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserRepository repo;

    @PostMapping("/login")
    public User login(
            @RequestBody User loginUser) {

        Optional<User> user =
                repo.findByEmail(
                        loginUser.getEmail());

        if(user.isPresent()) {

            if(user.get().getPassword()
                    .equals(loginUser.getPassword())) {

                return user.get();
            }
        }

        throw new RuntimeException("Invalid Login");
    }
}