package com.example.hostelmanagementsystem;

import org.springframework.data.jpa.repository.JpaRepository;

public interface HostelWarden extends JpaRepository<Wardens,Long> {
}
