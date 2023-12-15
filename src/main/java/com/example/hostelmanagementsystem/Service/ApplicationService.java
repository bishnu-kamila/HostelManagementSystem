package com.example.hostelmanagementsystem.Service;

import com.example.hostelmanagementsystem.Model.Application;
import com.example.hostelmanagementsystem.Repository.ApplicationRepository;

import java.util.List;

public interface ApplicationService {
    Application save(Application application);
    List<Application>getAll();

    Application updateApplicationById(Application app , Long id);
}
