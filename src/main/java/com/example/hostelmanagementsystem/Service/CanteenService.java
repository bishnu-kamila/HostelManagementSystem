package com.example.hostelmanagementsystem.Service;

import com.example.hostelmanagementsystem.Canteen;

public interface CanteenService {
    Canteen saveCanteen(Canteen canteen);
    void deleteCanteen(Canteen ctn , Long id);
}
