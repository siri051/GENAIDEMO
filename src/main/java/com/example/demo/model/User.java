package com.example.demo.model;

import lombok.Data;
import jakarta.persistence.*;

@Data
@Entity
@Table(name = "app_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String email;
    private String phone;
    private Integer age;
    private String password;

    // Getters and setters
}
