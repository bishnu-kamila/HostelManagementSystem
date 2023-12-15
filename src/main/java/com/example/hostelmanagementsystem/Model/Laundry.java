package com.example.hostelmanagementsystem.Model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "laundry")
public class Laundry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "laundry_Id",nullable = false)
    private String laundryId;
    @Column(name = "password")
    private String password;
    @Column(name = "laundry_Name")
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

    public String getLaundryId() {
        return laundryId;
    }

    public void setLaundryId(String laundryId) {
        this.laundryId = laundryId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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
