package com.example.hostelmanagementsystem.Controller;

import com.example.hostelmanagementsystem.Laundry;
import com.example.hostelmanagementsystem.Service.LaundryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/laundry")
public class LaundryController {

    private LaundryService laundryService;

    @Autowired
    public LaundryController(LaundryService laundryService) {
        this.laundryService = laundryService;
    }
    @PostMapping
    public ResponseEntity<Laundry>saveLaundry(@RequestBody Laundry laundry){
        return new ResponseEntity<Laundry>(laundryService.saveLaundry(laundry), HttpStatus.CREATED);
    }
    @GetMapping
    public List<Laundry>getAllLaundry(){
        return laundryService.getAll();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String>deleteLdry(@RequestBody Laundry laundry, @PathVariable ("id") long lndid){
        laundryService.deleteLaundryById(laundry,lndid);
        return new ResponseEntity<String>("Deleted Successfully", HttpStatus.OK);
    }
}
