package com.example.hostelmanagementsystem.Controller;

import com.example.hostelmanagementsystem.Service.WardenService;
import com.example.hostelmanagementsystem.Wardens;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class WardenController {
    private WardenService wardenService;

    @Autowired
    public WardenController(WardenService wardenService) {
        this.wardenService = wardenService;
    }
    @PostMapping("/wardenregister")
    private ResponseEntity<Wardens> saveWrdn(@RequestBody Wardens wardens){
        return new ResponseEntity<Wardens>(wardenService.saveWarden(wardens), HttpStatus.CREATED);
    }
    @GetMapping("/al")
    public List<Wardens>getAllWdn(){
        return wardenService.getAll();
    }
    @GetMapping("/getwarden/{id}")
    public ResponseEntity<Wardens>getWdnById(@PathVariable ("id") long wdnid){
        return new ResponseEntity<Wardens>(wardenService.getWardenById(wdnid),HttpStatus.OK);
    }

    @PutMapping("/warden/{id}")
    public ResponseEntity<String>updateById(@RequestBody Wardens wardens ,@PathVariable("id") Long wdnid){
        wardenService.updateWarden(wardens,wdnid);
        return new ResponseEntity<String>("Updated",HttpStatus.OK);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteWdn(@RequestBody Wardens wardens, @PathVariable("id") Long wdnid){
        wardenService.deleteWarden(wardens,wdnid);
        return new ResponseEntity<String>("Deleted Successfully",HttpStatus.OK);
    }
}
