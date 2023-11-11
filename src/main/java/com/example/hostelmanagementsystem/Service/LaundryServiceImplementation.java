package com.example.hostelmanagementsystem.Service;

import com.example.hostelmanagementsystem.Laundry;
import com.example.hostelmanagementsystem.LaundryRepository;
import com.example.hostelmanagementsystem.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LaundryServiceImplementation implements LaundryService{

    private LaundryRepository laundryRepository;

    public LaundryServiceImplementation(LaundryRepository laundryRepository) {
        this.laundryRepository = laundryRepository;
    }

    @Override
    public Laundry saveLaundry(Laundry laundry) {
        return laundryRepository.save(laundry);
    }

    @Override
    public List<Laundry> getAll() {
        return laundryRepository.findAll();
    }

    @Override
    public Laundry findLaundryById(Long id) {
        Optional<Laundry> laundry = laundryRepository.findById(id);
        if (laundry.isPresent()){
            return laundry.get();
        }else {
            throw new ResourceNotFoundException("Laundry","Id","id");
        }
    }

    @Override
    public void deleteLaundryById(Laundry lry, Long id) {
        Laundry existingLaundry = laundryRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Laundry","Id","id"));
        laundryRepository.delete(existingLaundry);
    }
}
