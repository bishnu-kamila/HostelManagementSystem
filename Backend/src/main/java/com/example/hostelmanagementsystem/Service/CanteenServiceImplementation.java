package com.example.hostelmanagementsystem.Service;

import com.example.hostelmanagementsystem.Model.Canteen;
import com.example.hostelmanagementsystem.Repository.CanteenRepository;
import com.example.hostelmanagementsystem.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CanteenServiceImplementation implements CanteenService{

    private CanteenRepository canteenRepository;


    public CanteenServiceImplementation(CanteenRepository canteenRepository) {
        this.canteenRepository = canteenRepository;
    }

    @Override
    public Canteen saveCanteen(Canteen canteen) {
        return canteenRepository.save(canteen);
    }

    @Override
    public List<Canteen> getAll() {
        return canteenRepository.findAll();
    }

    @Override
    public void deleteCanteen(Canteen ctn, Long id) {
        Canteen existingCanteen = canteenRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Canteen","Id","id"));
        canteenRepository.delete(existingCanteen);

    }
}
