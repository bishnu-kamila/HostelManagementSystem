import axios from "axios"
const API_URL="http://localhost:8080";
class WardenService{
    
    saveWarden(warden){
        return axios.post(API_URL+"/wardenregister",warden);
    }

    getAllWarden(){
        return axios.get(API_URL+"/al");
    }
    getWardenById(id){
        return axios.get(API_URL+"/"+id);
    }
    updateWarden(warden){
        return axios.put(API_URL+"/"+warden.id,warden);
    }
    deleteWarden(id){
        return axios.get(API_URL+"/deletewarden/"+id);
    }
}
export default new WardenService;