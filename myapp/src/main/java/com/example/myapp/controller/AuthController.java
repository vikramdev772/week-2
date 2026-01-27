package com.example.myapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import com.example.myapp.dto.LoginRequest;
import com.example.myapp.dto.SignupRequest;
import com.example.myapp.model.User;
import com.example.myapp.repo.UserRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class AuthController {
    @Autowired
    UserRepository db;

    @PostMapping("/signup")
    public String m(@RequestBody SignupRequest sd) {
        System.out.println("\n\t data : " + sd);
        User data = new User();
        data.setName(sd.getName());
        data.setEmail(sd.getEmail());
        data.setPassword(sd.getPassword());

        db.save(data);

        return "signup sucess -> data" + sd.toString();
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest data) {

        User user = db.findByEmail(data.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.getPassword().equals(data.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return "Login successful";
    }

    @GetMapping("/data")
    List<User> getData() {

        return db.findAll();

    }

}
