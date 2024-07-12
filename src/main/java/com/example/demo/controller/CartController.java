package com.example.demo.controller;

import com.example.demo.model.Product;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:4200")  // Adjust the origin as needed
public class CartController {

    @PostMapping("/cart")
    public ResponseEntity<Map<String, String>> submitCart(@RequestBody List<Product> cart) {
        // Logic to handle the submitted cart (e.g., save to database)
        // For simplicity, we're just returning a success message
        return ResponseEntity.ok(Map.of("message", "Cart submitted successfully"));
    }
}
