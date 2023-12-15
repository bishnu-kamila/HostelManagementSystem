package com.example.hostelmanagementsystem.Service;

import com.example.hostelmanagementsystem.ResourceNotFoundException;
import com.example.hostelmanagementsystem.Repository.StudentRepository;
import com.example.hostelmanagementsystem.Model.Students;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImplementation implements StudentService{

    private StudentRepository studentRepository;

    @Autowired
    public StudentServiceImplementation(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public Students saveStudent(Students students) {
        return studentRepository.save(students);
    }

    @Override
    public List<Students> getAll() {
        return studentRepository.findAll();
    }

    @Override
    public Students getStudentById(Long id) {
        Optional<Students> students = studentRepository.findById(id);
        if (students.isPresent()){
            return students.get();
        }else {
            throw new ResourceNotFoundException("Stident","id",id);
        }
    }

    @Override
    public Students updateStudentById(Students std, Long id) {
        Students existingStudent = studentRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Students","Id","id"));
        existingStudent.setRegdNo(std.getRegdNo());
        existingStudent.setPassword(std.getPassword());
        existingStudent.setFirstName(std.getFirstName());
        existingStudent.setLastName(std.getLastName());
        existingStudent.seteMail(std.geteMail());
        existingStudent.setMobileNo(std.getMobileNo());
        existingStudent.setFatherFirstName(std.getFatherFirstName());
        existingStudent.setFatherLastName(std.getFatherLastName());
        existingStudent.setFatherEmail(std.getFatherEmail());
        existingStudent.setFatherMobile_No(std.getFatherMobile_No());
        existingStudent.setGender(std.getGender());
        existingStudent.setDepartment(std.getDepartment());
        existingStudent.setCourse(std.getCourse());
        existingStudent.setHostelType(std.getHostelType());
        existingStudent.setRoomNo(std.getRoomNo());
        studentRepository.save(existingStudent);
        return existingStudent;
    }

    @Override
    public void deleteStudent(String std, Long id) {
        Students existingStudent = studentRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Students","Id","id"));
        studentRepository.delete(existingStudent);
    }


}
