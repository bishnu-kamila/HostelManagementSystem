package com.example.hostelmanagementsystem.Repository;

import com.example.hostelmanagementsystem.Model.Application;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository extends JpaRepository<Application,Long> {
}
