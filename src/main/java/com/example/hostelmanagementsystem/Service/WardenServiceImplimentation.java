package com.example.hostelmanagementsystem.Service;

import com.example.hostelmanagementsystem.Repository.HostelWarden;
import com.example.hostelmanagementsystem.ResourceNotFoundException;
import com.example.hostelmanagementsystem.Model.Wardens;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WardenServiceImplimentation implements WardenService{

    @Autowired
   private HostelWarden hostelWarden;

    public WardenServiceImplimentation(HostelWarden hostelWarden) {
        this.hostelWarden = hostelWarden;
    }

    @Override
    public Wardens saveWarden(Wardens wardens) {
        return hostelWarden.save(wardens);
    }

    @Override
    public List<Wardens> getAll() {
        return hostelWarden.findAll();
    }

    @Override
    public Wardens getWardenById(Long id) {
        Optional<Wardens> wardens = hostelWarden.findById(id);
        if(wardens.isPresent()){
            return wardens.get();
        }
        else {
            throw new ResourceNotFoundException("Wardens","Id",id);
        }
    }

    @Override
    public Wardens updateWarden(Wardens wdn, Long id) {
        Wardens existingWarden = hostelWarden.findById(id).orElseThrow(()-> new ResourceNotFoundException("Wardens","Id","id"));
        existingWarden.setFirstName(wdn.getFirstName());
        existingWarden.setLastName(wdn.getLastName());
        existingWarden.seteMail(wdn.geteMail());
        existingWarden.setGender(wdn.getGender());
        existingWarden.setHostelNo(wdn.getHostelNo());
        hostelWarden.save(existingWarden);
        return existingWarden;

    }

    @Override
    public void deleteWarden(Wardens wdn, Long id) {
        Wardens existingWarden = hostelWarden.findById(id).orElseThrow(()->new ResourceNotFoundException("Warden", "Id","id"));
        hostelWarden.delete(existingWarden);
    }
}
