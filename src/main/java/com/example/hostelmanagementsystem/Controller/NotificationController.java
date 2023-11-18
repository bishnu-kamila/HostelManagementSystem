package com.example.hostelmanagementsystem.Controller;

import com.example.hostelmanagementsystem.Notification;
import com.example.hostelmanagementsystem.Service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/notification")
public class NotificationController {
    NotificationService notificationService;

    @Autowired
    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }
    @PostMapping
    public ResponseEntity<Notification>saveNotification(@RequestBody Notification notification){
        return new ResponseEntity<Notification>(notificationService.saveNotification(notification), HttpStatus.CREATED);
    }

    @GetMapping
    public List<Notification>getAll(){
        return notificationService.getAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Notification>getById(@PathVariable  ("id") Long notid){
        return new ResponseEntity<Notification>(notificationService.getNotificationById(notid),HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<String>UpdateNotification(@RequestBody Notification notification , @PathVariable ("id") Long notific){
        notificationService.updateNotification(notification , notific);
        return new ResponseEntity<String>("Notification Successfully updated",HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteNotific(@RequestBody String notification , @PathVariable ("id") Long notifion){
        notificationService.deleteNotification(notification ,notifion );
        return new ResponseEntity<String >("Notification Deleted Successfully",HttpStatus.OK);
    }

}