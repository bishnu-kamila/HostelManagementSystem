import axios from "axios"

const API_URL="http://localhost:8080";
class ApplicationService{
    
    saveApplication(application){
        return axios.post(API_URL+"/application",application);
    }

    getAllApplication(){
        return axios.get(API_URL+"/app");
    }
    getApplicationById(id){
        return axios.get(API_URL+"/"+id);
    }
    updateApplication(application){
        return axios.put(API_URL+"/updateapp/"+application.id,application);
    }
    deleteApplication(id){
        return axios.get(API_URL+"/deleteapplication/"+id);
    }
}
export default new ApplicationService;