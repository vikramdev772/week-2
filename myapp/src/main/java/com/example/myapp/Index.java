package com.example.myapp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.myapp.dto.M;
@RestController
public class Index {
    @GetMapping("/")
    M m() {
        return new M();
    }
    @GetMapping("/notion")
    String m1(){
        return "https://steady-shawl-7c0.notion.site/CRUD-OPERATIONS-2eeff9567a0780938a56cd1b4320a553";
    }
}
