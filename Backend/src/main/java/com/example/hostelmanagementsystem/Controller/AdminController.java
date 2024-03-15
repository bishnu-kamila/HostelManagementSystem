package com.example.hostelmanagementsystem.Controller;

import com.example.hostelmanagementsystem.Model.Admin;
import com.example.hostelmanagementsystem.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class AdminController {

    private AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/saveAdmin")
    public ResponseEntity<Admin> saveAdmin(@RequestBody Admin admin){
        return new ResponseEntity<Admin>(adminService.saveAdmin(admin), HttpStatus.CREATED);
    }

    @GetMapping("/deletyeAdmin/{id}")
    public ResponseEntity<String>DeleteAdmin(@RequestBody String Admin , @PathVariable("id") long adm){
        adminService.deleteAdminById(Admin,adm);
        return new ResponseEntity<String>("Deleted Successfully",HttpStatus.OK);
    }
}
