import axios from "axios"
const API_URL="http://localhost:8080";
class OrderService{
    
    saveOrder(order){
        return axios.post(API_URL+"/order",order);
    }

    getAllOrder(){
        return axios.get(API_URL+"/ord");
    }
    getOrderById(id){
        return axios.get(API_URL+"/"+id);
    }
    updateOrder(order){
        return axios.put(API_URL+"/"+order.id,order);
    }
    deleteOrder(id){
        return axios.get(API_URL+"/deleteorder/"+id);
    }
}
export default new OrderService;