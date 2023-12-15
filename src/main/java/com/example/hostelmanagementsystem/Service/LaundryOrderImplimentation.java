package com.example.hostelmanagementsystem.Service;

import com.example.hostelmanagementsystem.Model.LaundryOrder;
import com.example.hostelmanagementsystem.Repository.LaundryOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LaundryOrderImplimentation implements LaundryOrderService{

    LaundryOrderRepository laundryOrderRepository;

    @Autowired
    public LaundryOrderImplimentation(LaundryOrderRepository laundryOrderRepository) {
        this.laundryOrderRepository = laundryOrderRepository;
    }

    @Override
    public LaundryOrder saveLaundryOrder(LaundryOrder laundryOrder) {
        return laundryOrderRepository.save(laundryOrder);
    }

    @Override
    public List<LaundryOrder> getAll() {
        return laundryOrderRepository.findAll();
    }


}
