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
    private UserRepository db;

    @PutMapping("/update/{id}")
    public ResponseEntity<String> update(
            @PathVariable Long id,
            @RequestBody SignupRequest sd) {

        Optional<User> op = db.findById(id);

        if (op.isEmpty()) {
            return ResponseEntity
                    .status(404)
                    .body("User not found");
        }

        User user = op.get();

        // ✅ Update only non-null fields
        if (sd.getName() != null) {
            user.setName(sd.getName());
        }
        if (sd.getEmail() != null) {
            user.setEmail(sd.getEmail());
        }
        if (sd.getPassword() != null) {
            user.setPassword(sd.getPassword());
        }

        db.save(user);

        return ResponseEntity.ok("User updated successfully");
    }
}
