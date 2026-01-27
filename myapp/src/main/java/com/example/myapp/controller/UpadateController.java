package com.example.myapp.controller;

import java.util.Optional;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.myapp.dto.SignupRequest;
import com.example.myapp.model.User;

public class UpadateController {
     @PutMapping("/update/{id}")
    public String updateUser(@PathVariable Long id,@RequestBody SignupRequest sd){
        Optional<User> op=db.findById(id);
        if(op.isEmpty()){
            return "user not found";
        }
        User updatedUser=op.get();
        updatedUser.setName(sd.getName());
        updatedUser.setEmail(sd.getEmail());
        db.save(updatedUser);
        return "user updated successfully";
}
