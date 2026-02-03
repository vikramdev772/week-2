package com.example.myapp.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.myapp.dto.SignupRequest;
import com.example.myapp.model.User;
import com.example.myapp.repo.UserRepository;

@RestController
@RequestMapping("/api/v1")
public class UpdateUser {

    @Autowired
    UserRepository db;

    @PutMapping("/update/{id}")
    String update(@PathVariable Long id,@RequestBody SignupRequest sd){
        Optional<User> op=db.findById(id);


        return " dev";

    }
}
