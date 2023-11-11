package com.example.hostelmanagementsystem.Service;

import com.example.hostelmanagementsystem.Laundry;

import java.util.List;

public interface LaundryService {
    Laundry saveLaundry(Laundry laundry);
    List<Laundry> getAll();
    Laundry findLaundryById(Long id);
    void deleteLaundryById(Laundry lry , Long id);


}
