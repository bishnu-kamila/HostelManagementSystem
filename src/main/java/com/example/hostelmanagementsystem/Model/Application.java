package com.example.hostelmanagementsystem.Model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "application")
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "regd_No" ,nullable = false)
    private String regdNo;
    @Column(name = "application_Sub")
    private String applicationSub;
    @Column(name = "parent_Approval")
    private String parentApproval;
    @Column(name = "hod_Approval")
    private String hodApproval;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRegdNo() {
        return regdNo;
    }

    public void setRegdNo(String regdNo) {
        this.regdNo = regdNo;
    }

    public String getApplicationSub() {
        return applicationSub;
    }

    public void setApplicationSub(String applicationSub) {
        this.applicationSub = applicationSub;
    }

    public String getParentApproval() {
        return parentApproval;
    }

    public void setParentApproval(String parentApproval) {
        this.parentApproval = parentApproval;
    }

    public String getHodApproval() {
        return hodApproval;
    }

    public void setHodApproval(String hodApproval) {
        this.hodApproval = hodApproval;
    }
}
