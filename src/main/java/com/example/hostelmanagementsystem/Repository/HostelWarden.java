package com.example.hostelmanagementsystem.Repository;

import com.example.hostelmanagementsystem.Model.Wardens;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HostelWarden extends JpaRepository<Wardens,Long> {
}
