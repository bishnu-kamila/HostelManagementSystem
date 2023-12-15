package com.example.hostelmanagementsystem.Service;

import com.example.hostelmanagementsystem.Model.Wardens;

import java.util.List;

public interface WardenService {

    Wardens saveWarden(Wardens wardens);
    List<Wardens>getAll();
    Wardens getWardenById(Long id);
    Wardens updateWarden(Wardens wdn , Long id);

    void deleteWarden(Wardens wdn,Long id);
}
