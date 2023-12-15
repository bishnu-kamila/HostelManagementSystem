package com.example.hostelmanagementsystem.Controller;

import com.example.hostelmanagementsystem.Model.Parent;
import com.example.hostelmanagementsystem.Service.ParentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class ParentController {

    ParentService parentService;

    public ParentController(ParentService parentService) {
        this.parentService = parentService;
    }
    @PostMapping("/parent")
    public ResponseEntity<Parent> save(@RequestBody Parent parent){
        return new ResponseEntity<Parent>(parentService.saveParent(parent), HttpStatus.CREATED);
    }
    @GetMapping("/getparent/{id}")
    public ResponseEntity<Parent> getParentById(@PathVariable  ("id") long parid){
        return new ResponseEntity<Parent>(parentService.getParentById(parid),HttpStatus.OK);
    }
}
