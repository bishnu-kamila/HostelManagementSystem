package com.example.hostelmanagementsystem.Service;

import com.example.hostelmanagementsystem.Admin;
import com.example.hostelmanagementsystem.AdminRepository;
import com.example.hostelmanagementsystem.ResourceNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImplementation implements AdminService{

    private AdminRepository adminRepository;

    public AdminServiceImplementation(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @Override
    public Admin saveAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    @Override
    public void deleteAdminById(String adm, Long Id) {
        Admin existingAdmin = adminRepository.findById(Id).orElseThrow(()-> new ResourceNotFoundException("Admin","Id","id"));
        adminRepository.delete(existingAdmin);
    }


}
