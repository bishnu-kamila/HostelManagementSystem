package com.example.hostelmanagementsystem;

import lombok.Data;

import javax.persistence.*;
import java.io.File;
@Data
@Entity
@Table(name = "canteen")
public class Canteen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long canteenId;
    @Column(name = "canteen_Name")
    private String canteenName;
    @Column(name = "owner_Name")
    private String ownerName;
    @Column(name = "e_Mail")
    private String eMail;
    @Column(name = "food_License")
    private File foodLicense;
    @Column(name = "canteen_Type")
    private String canteenType;

    public Long getCanteenId() {
        return canteenId;
    }

    public void setCanteenId(Long canteenId) {
        this.canteenId = canteenId;
    }

    public String getCanteenName() {
        return canteenName;
    }

    public void setCanteenName(String canteenName) {
        this.canteenName = canteenName;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public String geteMail() {
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
    }

    public File getFoodLicense() {
        return foodLicense;
    }

    public void setFoodLicense(File foodLicense) {
        this.foodLicense = foodLicense;
    }

    public String getCanteenType() {
        return canteenType;
    }

    public void setCanteenType(String canteenType) {
        this.canteenType = canteenType;
    }
}
