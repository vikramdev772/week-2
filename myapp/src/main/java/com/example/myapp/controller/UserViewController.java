package com.example.myapp.controller;

import com.example.myapp.model.User;
import com.example.myapp.repo.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserViewController {

    private final UserRepository userRepository;

    public UserViewController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/alluser")
    public String listUsers(@RequestParam(defaultValue = "0") int page,
                            @RequestParam(defaultValue = "10") int size,
                            Model model) {
        if (page < 0) page = 0;
        if (size < 1) size = 1;
        if (size > 50) size = 50;

        Page<User> userPage = userRepository.findAll(PageRequest.of(page, size));

        model.addAttribute("users", userPage.getContent());
        model.addAttribute("page", userPage.getNumber());
        model.addAttribute("size", userPage.getSize());
        model.addAttribute("totalPages", userPage.getTotalPages());
        model.addAttribute("totalElements", userPage.getTotalElements());

        return "alluser";
    }
}
