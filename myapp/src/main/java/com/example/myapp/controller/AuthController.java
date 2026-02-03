package com.example.myapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.myapp.dto.LoginRequest;
import com.example.myapp.dto.SignupRequest;
import com.example.myapp.model.User;
import com.example.myapp.repo.UserRepository;
import com.example.myapp.security.JwtService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private UserRepository db;

    @Autowired
    private JwtService jwt;

    // ✅ SIGNUP
    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody SignupRequest sd) {
        try {
            Optional<User> existing = db.findByEmail(sd.getEmail());
            if (existing.isPresent()) {
                return ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body("Email already exists");
            }

            User user = new User();
            user.setName(sd.getName());
            user.setEmail(sd.getEmail());
            user.setPassword(sd.getPassword()); // hash later

            db.save(user);

            return ResponseEntity.ok("Signup successful");

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Signup failed");
        }
    }

    // ✅ LOGIN
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest data) {

        Optional<User> op = db.findByEmail(data.getEmail());

        if (op.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("User not found");
        }

        User user = op.get();

        if (!user.getPassword().equals(data.getPassword())) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid password");
        }

        String token = jwt.generateToken(user.getEmail());
        return ResponseEntity.ok(token);
    }

    // ✅ GET ALL USERS
    @GetMapping("/data")
    public ResponseEntity<List<User>> getData() {
        return ResponseEntity.ok(db.findAll());
    }

  @PutMapping("/update/{id}")
public ResponseEntity<String> updateUser(
        @PathVariable Long id,
        @RequestBody SignupRequest sd) {

    User user = db.findById(id)
            .orElseThrow(() -> new RuntimeException("User not found"));

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


    // ✅ DELETE USER
    @DeleteMapping("/user/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {

        Optional<User> op = db.findById(id);

        if (op.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("User not found");
        }

        db.deleteById(id);
        return ResponseEntity.ok("User deleted successfully");
    }
}
