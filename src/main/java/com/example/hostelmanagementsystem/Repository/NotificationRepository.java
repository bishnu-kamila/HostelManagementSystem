package com.example.hostelmanagementsystem.Repository;

import com.example.hostelmanagementsystem.Model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
}
