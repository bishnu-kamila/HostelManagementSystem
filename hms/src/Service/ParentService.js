import axios from "axios"

const API_URL="http://localhost:8080";
class ParentService{
    
    saveParent(parent){
        return axios.post(API_URL+"/parent",parent);
    }

    getAllParent(){
        return axios.get(API_URL+"/");
    }
    getParentById(id){
        return axios.get(API_URL+"/"+id);
    }
    updateParent(parent){
        return axios.put(API_URL+"/stdupdate/"+parent.id,parent);
    }
    deleteParent(id){
        return axios.get(API_URL+"/deleteparent/"+id);
    }
}
export default new ParentService;