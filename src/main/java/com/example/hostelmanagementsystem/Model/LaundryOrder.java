package com.example.hostelmanagementsystem.Model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "laundryorder")
public class LaundryOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String Name;
    @Column(name = "room_No")
    private String roomNo;
    @Column(name = "clothes")
    private int clothes;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getRoomNo() {
        return roomNo;
    }

    public void setRoomNo(String roomNo) {
        this.roomNo = roomNo;
    }

    public int getClothes() {
        return clothes;
    }

    public void setClothes(int clothes) {
        this.clothes = clothes;
    }
}
