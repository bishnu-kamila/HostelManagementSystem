import axios from "axios"
const API_URL="http://localhost:8080";
class NotificationService{
    
    saveNotification(notification){
        return axios.post(API_URL+"/upload",notification);
    }

    getAllNotification(){
        return axios.get(API_URL+"/allnot");
    }
    
    updateNotification(students){
        return axios.put(API_URL+"/"+students.id,students);
    }
    deleteNotification(id){
        return axios.get(API_URL+"/deleteStudent/"+id);
    }
}
export default new NotificationService;