import axios from "axios"
const API_URL="http://localhost:8080";
class AdminService{
    
    saveAdmin(admin){
        return axios.post(API_URL+"/saveAdmin",admin);
    }

    
    
    deleteAdmin(id){
        return axios.delete(API_URL+"/"+id);
    }
}
export default new AdminService;