package com.example.hostelmanagementsystem.Service;

import com.example.hostelmanagementsystem.Model.Admin;

public interface AdminService {

    Admin saveAdmin(Admin admin);

    void deleteAdminById(String adm, Long Id);
}
