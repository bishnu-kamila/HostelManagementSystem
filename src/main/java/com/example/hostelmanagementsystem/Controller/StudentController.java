package com.example.hostelmanagementsystem.Controller;

import com.example.hostelmanagementsystem.Service.StudentService;
import com.example.hostelmanagementsystem.Students;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {
    private StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }
    @PostMapping
    public ResponseEntity<Students> saveEmployee(@RequestBody Students students){
        return new ResponseEntity<Students>(studentService.saveStudent(students), HttpStatus.CREATED);
    }
    @GetMapping
    public List<Students> getAllStudents(){
        return studentService.getAll();
    }
    @GetMapping("{id}")
    public ResponseEntity<Students> getStudent(@PathVariable ("id")long stdid){
        return new ResponseEntity<Students>(studentService.getStudentById(stdid),HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<String> updatestd(@RequestBody Students students, @PathVariable("id")long stdid){
        studentService.updateStudentById(students,stdid);
        return new ResponseEntity<String>("Successfully Updated",HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String > deleteStd(@RequestBody String students, @PathVariable("id")long stdid){
        studentService.deleteStudent(students,stdid);
        return new ResponseEntity<String>("Deleted Successfully",HttpStatus.OK);
    }

}
