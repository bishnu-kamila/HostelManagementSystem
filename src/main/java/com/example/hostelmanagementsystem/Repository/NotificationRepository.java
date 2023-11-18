package com.example.hostelmanagementsystem.Repository;

import com.example.hostelmanagementsystem.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.Id;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
}
