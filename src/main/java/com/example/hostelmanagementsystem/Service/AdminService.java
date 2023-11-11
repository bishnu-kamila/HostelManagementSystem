package com.example.hostelmanagementsystem.Service;

import com.example.hostelmanagementsystem.Admin;

import javax.persistence.Id;

public interface AdminService {

    Admin saveAdmin(Admin admin);

    void deleteAdminById(String adm, Long Id);
}
