package com.example.hostelmanagementsystem.Service;

import com.example.hostelmanagementsystem.Model.Canteen;

import java.util.List;

public interface CanteenService {
    Canteen saveCanteen(Canteen canteen);

    List<Canteen> getAll();
    void deleteCanteen(Canteen ctn , Long id);
}
