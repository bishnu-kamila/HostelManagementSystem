package com.example.hostelmanagementsystem.Controller;

import com.example.hostelmanagementsystem.Canteen;
import com.example.hostelmanagementsystem.Service.CanteenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/canteen")
public class CanteenController {

    private CanteenService canteenService;

    @Autowired
    public CanteenController(CanteenService canteenService) {
        this.canteenService = canteenService;
    }
    @PostMapping
    public ResponseEntity<Canteen>saveCntn(@RequestBody Canteen canteen){
        return new ResponseEntity<Canteen>(canteenService.saveCanteen(canteen), HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String>deleteCntn(@RequestBody Canteen canteen, @PathVariable ("id") Long cntnid){
        canteenService.deleteCanteen(canteen,cntnid);
        return new ResponseEntity<String>("Deleted Successfully",HttpStatus.OK);
    }
}
