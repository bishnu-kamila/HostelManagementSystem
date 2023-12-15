package com.example.hostelmanagementsystem.Service;

import com.example.hostelmanagementsystem.Model.Parent;
import com.example.hostelmanagementsystem.Repository.ParentRepository;
import com.example.hostelmanagementsystem.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ParentServiceImplementation implements ParentService{

    ParentRepository parentRepository;

    @Autowired
    public ParentServiceImplementation(ParentRepository parentRepository) {
        this.parentRepository = parentRepository;
    }

    @Override
    public Parent saveParent(Parent parent) {
        return parentRepository.save(parent);
    }

    @Override
    public Parent getParentById(Long id) {
        Optional<Parent> parent = parentRepository.findById(id);
        if(parent.isPresent()){
            return parent.get();
        }else {
            throw new ResourceNotFoundException("Parent","id",id);
        }

    }
}
