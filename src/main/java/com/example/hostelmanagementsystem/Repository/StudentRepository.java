package com.example.hostelmanagementsystem.Repository;

import com.example.hostelmanagementsystem.Students;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Students,Long> {
}
