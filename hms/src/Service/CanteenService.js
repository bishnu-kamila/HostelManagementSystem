import axios from "axios"
const API_URL="http://localhost:8080";
class CanteenService{
    
    saveCanteen(canteen){
        return axios.post(API_URL+"/canteen",canteen);
    }

    getAllCanteen(){
        return axios.get(API_URL+"/a");
    }
    getCanteenById(id){
        return axios.get(API_URL+"/"+id);
    }
    updateCanteen(canteen){
        return axios.put(API_URL+"/"+canteen.id,canteen);
    }
    deleteCanteen(id){
        return axios.get(API_URL+"/deletecanteen/"+id);
    }
}
export default new CanteenService;