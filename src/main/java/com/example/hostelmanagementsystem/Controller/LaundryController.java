package com.example.hostelmanagementsystem.Controller;

import com.example.hostelmanagementsystem.Model.Laundry;
import com.example.hostelmanagementsystem.Service.LaundryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class LaundryController {

    private LaundryService laundryService;

    @Autowired
    public LaundryController(LaundryService laundryService) {
        this.laundryService = laundryService;
    }
    @PostMapping("/laundry")
    public ResponseEntity<Laundry>saveLaundry(@RequestBody Laundry laundry){
        return new ResponseEntity<Laundry>(laundryService.saveLaundry(laundry), HttpStatus.CREATED);
    }
    @GetMapping("/laund")
    public List<Laundry>getAllLaundry(){
        return laundryService.getAll();
    }

    @DeleteMapping("/laundry/{id}")
    public ResponseEntity<String>deleteLdry(@RequestBody Laundry laundry, @PathVariable ("id") long lndid){
        laundryService.deleteLaundryById(laundry,lndid);
        return new ResponseEntity<String>("Deleted Successfully", HttpStatus.OK);
    }
}
