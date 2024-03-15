import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [studentid, setStudentid] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!studentid) {
      validationErrors.id = "id is required";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Call your API for user authentication
        const response = await axios.post("http://localhost:8080/api/students", {
          studentid,
          password,
        });

       

        if (response.data = "Login successful!") {
          console.log("Response from server:", response.data);
          navigate('/MenteeNav', { replace: true });
          //navigate("/MenteeDash");
        } else {
          setErrors({ general: "Invalid user role" });
        }

        console.log("Sign in successful");
      } catch (error) {
        setErrors({ general: "Invalid RegdNo or password" });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="form-group">
          <label>Id</label>
          <input
            type="text"
            value={studentid}
            onChange={(e) => setStudentid(e.target.value)}
          />
          {errors.id && <p className="error-message">{errors.id}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
          {errors.general && <p className="error-message">{errors.general}</p>}
          {/* <a>Forget Password?</a> */}
        </div>
        <Link to="/studenthome"><button type="submit" className="btn">Login</button></Link>
        
      </form>

    </div>
  );
};

export default Login;