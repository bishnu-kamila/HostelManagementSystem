package com.example.hostelmanagementsystem;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "admin")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "e_Mail")
    private String eMail;
    @Column(name = "password")
    private String Password;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String geteMail() {
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }
}
