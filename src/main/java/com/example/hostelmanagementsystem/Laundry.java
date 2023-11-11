package com.example.hostelmanagementsystem;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "laundry")
public class Laundry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "laundry_name",nullable = false)
    private String laundryName;
    @Column(name = "owner_name")
    private String ownerName;
    @Column(name = "owner_email")
    private String owner_email;
    @Column(name = "laundry_type")
    private String laundryType;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLaundryName() {
        return laundryName;
    }

    public void setLaundryName(String laundryName) {
        this.laundryName = laundryName;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public String getOwner_email() {
        return owner_email;
    }

    public void setOwner_email(String owner_email) {
        this.owner_email = owner_email;
    }

    public String getLaundryType() {
        return laundryType;
    }

    public void setLaundryType(String laundryType) {
        this.laundryType = laundryType;
    }
}
