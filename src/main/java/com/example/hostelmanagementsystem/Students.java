package com.example.hostelmanagementsystem;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "students")
public class Students {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "first_name",nullable = false)
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "e_mail")
    private String eMail;
    @Column(name = "mobile_no")
    private long mobileNo;
    @Column(name = "father_firstname")
    private String fatherFirstName;
    @Column(name = "father_lastname")
    private String fatherLastName;
    @Column(name = "father_email")
    private String fatherEmail;
    @Column(name = "father_mobileNo")
    private long fatherMobile_No;
    @Column(name = "gender")
    private String gender;
    @Column(name = "department")
    private String department;
    @Column(name = "course")
    private String course;
    @Column(name = "hostel_type")
    private String hostelType;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String geteMail() {
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
    }

    public long getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(long mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getFatherFirstName() {
        return fatherFirstName;
    }

    public void setFatherFirstName(String fatherFirstName) {
        this.fatherFirstName = fatherFirstName;
    }

    public String getFatherLastName() {
        return fatherLastName;
    }

    public void setFatherLastName(String fatherLastName) {
        this.fatherLastName = fatherLastName;
    }

    public String getFatherEmail() {
        return fatherEmail;
    }

    public void setFatherEmail(String fatherEmail) {
        this.fatherEmail = fatherEmail;
    }

    public long getFatherMobile_No() {
        return fatherMobile_No;
    }

    public void setFatherMobile_No(long fatherMobile_No) {
        this.fatherMobile_No = fatherMobile_No;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getHostelType() {
        return hostelType;
    }

    public void setHostelType(String hostelType) {
        this.hostelType = hostelType;
    }
}
