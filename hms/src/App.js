import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Layout/Navbar';
import Home from './component/Home/Home';
import { Route, Routes } from 'react-router';
import StudentRegistration from './component/Home/students/StudentRegistration';
import AdminRegistration from './component/Home/Admin/AdminRegistration';
import ShowAllStudent from './component/Home/students/ShowAllStudent';
import AddNotification from './component/Home/Notification/AddNotification';
import ShowNotification from './component/Home/Notification/ShowNotification';
import AdminPage from './component/Home/Admin/AdminHomePage';
import WardenRegistration from './component/Home/Warden/WardenRegistration';
import ShowAllWarden from './component/Home/Warden/ShowWarden';
import Login from './component/Home/students/StudentLogin';
import WardenHomePage from './component/Home/Warden/WardenHome';
import CanteenHomePage from './component/Home/Canteen/CanteenHome';
import StudentHomePage from './component/Home/students/Studenthome';
import WardenLogin from './component/Home/Warden/WardenLogin';
import CanteenLogin from './component/Home/Canteen/CanteenLogin';
import AdminLogin from './component/Home/Admin/AdminLogin';
import ShowAllCanteen from './component/Home/Canteen/ShowAllCanteen';
import CanteenRegistration from './component/Home/Canteen/CanteenRegistration';
import EditStudent from './component/Home/students/EditStudent';
import ShowStudentToStudent from './component/Home/students/ShowStudentToStudent';
import LaundryRegistration from './component/Home/Laundry/LaundryRegistration';
import LaundryOrder from './component/Home/LaundryOrder/LaundryOrder';
import LaundryHome from './component/Home/Laundry/LaundryHome';
import ShowAllOrder from './component/Home/LaundryOrder/ShowAllOrder';
import LaundryLogin from './component/Home/Laundry/LaundryLogin';
import ShowNotificationToStudent from './component/Home/Notification/ShowNotificationToStudent';
import ParentRegistration from './component/Home/Parent/ParentRegistration';
import AddApplication from './component/Home/Application/AddApplication';
import EditApplication from './component/Home/Application/EditApplication';
import ShowAllApplication from './component/Home/Application/ShowApplication';
import ParentLogin from './component/Home/Parent/ParentLogin';
import ParentHome from './component/Home/Parent/ParentHome';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/studentRegistration' element={<StudentRegistration/>} ></Route>
        <Route path='/studentLogin' element={<Login/>}></Route>
        <Route path='/adminRegistration' element={<AdminRegistration/>}></Route>
        <Route path='/showAllStudent' element={<ShowAllStudent/>}></Route>
        <Route path='/adminHomePage' element={<AdminPage/>}></Route>
        <Route path='/showNotification' element={<ShowNotification/>}></Route>
        <Route path='/addNotification' element={<AddNotification/>}></Route>
        <Route path='/wardenRegistration' element={<WardenRegistration/>}></Route>
        <Route path='/showWarden' element={<ShowAllWarden/>}></Route>
        <Route path='/wardenHome' element={<WardenHomePage/>}></Route>
        <Route path='/canteenHome' element={<CanteenHomePage/>}></Route>
        <Route path='/studenthome' element={<StudentHomePage/>}></Route>
        <Route path='/wardenLogin' element={<WardenLogin/>}></Route>
        <Route path='/canteenLogin' element={<CanteenLogin/>}></Route>
        <Route path='/adminLogin' element={<AdminLogin/>}></Route>
        <Route path='/showAllCanteen' element={<ShowAllCanteen/>}></Route>
        <Route path='/canteenRegistration' element={<CanteenRegistration/>}></Route>
        <Route path='editStudent/:id' element={<EditStudent/>}></Route>
        <Route path='/showStudentToStudent' element={<ShowStudentToStudent/>}></Route>
        <Route path='/laundryRegistration' element={<LaundryRegistration/>}></Route>
        <Route path='/laundryOrder' element={<LaundryOrder/>}></Route>
        <Route path='/laundryHome' element={<LaundryHome/>}></Route>
        <Route path='/showAllOrder' element={<ShowAllOrder/>}></Route>
        <Route path='/laundryLogin' element={<LaundryLogin/>}></Route>
        <Route path='/showNotificationToStudent' element={<ShowNotificationToStudent/>}></Route>
        <Route path='/parentRegistration' element={<ParentRegistration/>}></Route>
        <Route path='/addApplication' element={<AddApplication/>}></Route>
        <Route path='/editApplication' element={<EditApplication/>}></Route>
        <Route path='/showApplication' element={<ShowAllApplication/>}></Route>
        <Route path='/parentLogin' element={<ParentLogin/>}></Route>
        <Route path='/parentHome' element={<ParentHome/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
