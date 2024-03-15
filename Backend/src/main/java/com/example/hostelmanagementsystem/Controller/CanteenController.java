package com.example.hostelmanagementsystem.Controller;

import com.example.hostelmanagementsystem.Model.Canteen;
import com.example.hostelmanagementsystem.Service.CanteenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class CanteenController {

    private CanteenService canteenService;

    @Autowired
    public CanteenController(CanteenService canteenService) {
        this.canteenService = canteenService;
    }
    @PostMapping("/canteen")
    public ResponseEntity<Canteen>saveCntn(@RequestBody Canteen canteen){
        return new ResponseEntity<Canteen>(canteenService.saveCanteen(canteen), HttpStatus.CREATED);
    }
    @GetMapping("/a")
    public List<Canteen>getAllCanteen(){
        return canteenService.getAll();
    }

    @DeleteMapping("/deletecanteen/{id}")
    public ResponseEntity<String>deleteCntn(@RequestBody Canteen canteen, @PathVariable ("id") Long cntnid){
        canteenService.deleteCanteen(canteen,cntnid);
        return new ResponseEntity<String>("Deleted Successfully",HttpStatus.OK);
    }
}
