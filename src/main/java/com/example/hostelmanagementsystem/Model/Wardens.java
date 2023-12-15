package com.example.hostelmanagementsystem.Model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "wardens")
public class Wardens {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long empId;
    @Column(name = "regd_id")
    private String regdId;
    @Column(name = "password")
    private String password;
    @Column(name = "first_name", nullable = false)
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "gender")
    private String gender;
    @Column(name = "e_Mail")
    private String eMail;
    @Column(name = "hostel_no")
    private int hostelNo;

    public Long getEmpId() {
        return empId;
    }

    public void setEmpId(Long empId) {
        this.empId = empId;
    }

    public String getRegdId() {
        return regdId;
    }

    public void setRegdId(String regdId) {
        this.regdId = regdId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String geteMail() {
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
    }

    public int getHostelNo() {
        return hostelNo;
    }

    public void setHostelNo(int hostelNo) {
        this.hostelNo = hostelNo;
    }
}
