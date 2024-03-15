import axios from "axios"

const API_URL="http://localhost:8080";
class StudentService{
    
    saveStudent(students){
        return axios.post(API_URL+"/register",students);
    }

    getAllStudent(){
        return axios.get(API_URL+"/");
    }
    getStudentById(id){
        return axios.get(API_URL+"/"+id);
    }
    updateStudent(students){
        return axios.put(API_URL+"/stdupdate/"+students.id,students);
    }
    deleteStudent(id){
        return axios.get(API_URL+"/deleteStudent/"+id);
    }
}
export default new StudentService;