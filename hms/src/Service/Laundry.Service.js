import axios from "axios"
const API_URL="http://localhost:8080";
class LaundryService{
    
    saveLaundry(laundry){
        return axios.post(API_URL+"/laundry",laundry);
    }

    getAllLaundry(){
        return axios.get(API_URL+"/laund");
    }
    
    updateLaundry(laundry){
        return axios.put(API_URL+"/"+laundry.id,laundry);
    }
    deleteStudent(id){
        return axios.get(API_URL+"/laundry/"+id);
    }
}
export default new LaundryService;