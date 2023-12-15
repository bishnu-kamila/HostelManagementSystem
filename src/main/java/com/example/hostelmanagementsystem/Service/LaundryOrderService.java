package com.example.hostelmanagementsystem.Service;

import com.example.hostelmanagementsystem.Model.LaundryOrder;
import com.example.hostelmanagementsystem.Repository.LaundryOrderRepository;

import java.util.List;

public interface LaundryOrderService {

    LaundryOrder saveLaundryOrder(LaundryOrder laundryOrder);

    List<LaundryOrder>getAll();

}
