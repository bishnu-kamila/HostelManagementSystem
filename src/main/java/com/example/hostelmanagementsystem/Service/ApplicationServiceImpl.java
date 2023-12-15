package com.example.hostelmanagementsystem.Service;

import com.example.hostelmanagementsystem.Model.Application;
import com.example.hostelmanagementsystem.Repository.ApplicationRepository;
import com.example.hostelmanagementsystem.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationServiceImpl implements ApplicationService{

    ApplicationRepository applicationRepository;

    @Autowired
    public ApplicationServiceImpl(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    @Override
    public Application save(Application application) {
        return applicationRepository.save(application);
    }

    @Override
    public List<Application> getAll() {
        return applicationRepository.findAll();
    }

    @Override
    public Application updateApplicationById(Application app, Long id) {
        Application existingApplication = applicationRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Application","Id","id"));
        existingApplication.setRegdNo(app.getRegdNo());
        existingApplication.setApplicationSub(app.getApplicationSub());
        existingApplication.setParentApproval(app.getParentApproval());
        existingApplication.setHodApproval(app.getHodApproval());
        applicationRepository.save(existingApplication);
        return existingApplication;
    }


}
