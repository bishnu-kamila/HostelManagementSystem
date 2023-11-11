package com.example.hostelmanagementsystem.Service;

import com.example.hostelmanagementsystem.Canteen;
import com.example.hostelmanagementsystem.CanteenRepository;
import com.example.hostelmanagementsystem.ResourceNotFoundException;
import net.bytebuddy.implementation.bytecode.Throw;
import org.springframework.stereotype.Service;

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
    public void deleteCanteen(Canteen ctn, Long id) {
        Canteen existingCanteen = canteenRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Canteen","Id","id"));
        canteenRepository.delete(existingCanteen);

    }
}
