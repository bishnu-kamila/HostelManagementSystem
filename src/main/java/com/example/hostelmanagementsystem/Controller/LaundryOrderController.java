package com.example.hostelmanagementsystem.Controller;

import com.example.hostelmanagementsystem.Model.LaundryOrder;
import com.example.hostelmanagementsystem.Service.LaundryOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class LaundryOrderController {

    LaundryOrderService laundryOrderService;

    @Autowired
    public LaundryOrderController(LaundryOrderService laundryOrderService) {
        this.laundryOrderService = laundryOrderService;
    }

    @PostMapping("/order")
    public ResponseEntity<LaundryOrder>save(@RequestBody LaundryOrder laundryOrder){
        return new ResponseEntity<LaundryOrder>(laundryOrderService.saveLaundryOrder(laundryOrder), HttpStatus.CREATED);
    }
    @GetMapping("/ord")
    public List<LaundryOrder> getAllOrder(){
        return laundryOrderService.getAll();
    }

}
