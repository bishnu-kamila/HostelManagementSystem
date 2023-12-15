package com.example.hostelmanagementsystem.Service;

import com.example.hostelmanagementsystem.Model.Notification;
import com.example.hostelmanagementsystem.Repository.NotificationRepository;
import com.example.hostelmanagementsystem.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NotificationServiceImplementation implements NotificationService{

    NotificationRepository notificationRepository;

    @Autowired
    public NotificationServiceImplementation(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    @Override
    public Notification saveNotification(Notification notification) {
        return notificationRepository.save(notification);
    }

    @Override
    public List<Notification> getAll() {
        return notificationRepository.findAll();
    }

    @Override
    public Notification getNotificationById(Long id) {
        Optional<Notification>notification = notificationRepository.findById(id);
        if (notification.isPresent()){
            return notification.get();
        }else {
            throw new ResourceNotFoundException("Notification","id",id);
        }
    }

    @Override
    public Notification updateNotification(Notification noti, Long id) {
        Notification existingNotification = notificationRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Notification","Id","id"));
        existingNotification.setTopic(noti.getTopic());
        existingNotification.setNotification(noti.getNotification());
        notificationRepository.save(existingNotification);
        return existingNotification;


    }

    @Override
    public void deleteNotification(String not, Long id) {
        Notification existingNotification = notificationRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Notification","Id","id"));
        notificationRepository.delete(existingNotification);
    }
}
