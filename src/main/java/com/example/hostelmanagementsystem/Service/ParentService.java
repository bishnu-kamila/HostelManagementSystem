package com.example.hostelmanagementsystem.Service;

import com.example.hostelmanagementsystem.Model.Parent;

public interface ParentService {

    Parent saveParent(Parent parent);
    Parent getParentById(Long id);
}
