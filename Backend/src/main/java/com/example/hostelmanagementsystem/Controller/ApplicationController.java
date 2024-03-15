package com.example.hostelmanagementsystem.Controller;

import com.example.hostelmanagementsystem.Model.Application;
import com.example.hostelmanagementsystem.Model.Students;
import com.example.hostelmanagementsystem.Service.ApplicationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class ApplicationController {

    ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }
    @PostMapping("/application")
    public ResponseEntity<Application>save(@RequestBody Application application){
        return new ResponseEntity<Application>(applicationService.save(application), HttpStatus.CREATED);
    }
    @GetMapping("/app")
    public List<Application>getAll(){
        return applicationService.getAll();
    }

    @PutMapping("/updateapp/{id}")
    public ResponseEntity<String> updatestd(@RequestBody Application application, @PathVariable("id")long appid){
        applicationService.updateApplicationById(application,appid);
        return new ResponseEntity<String>("Successfully Updated",HttpStatus.OK);
    }
}
