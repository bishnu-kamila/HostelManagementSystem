import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function WardenLogin() {
  const [wardenregdId, setWardenregdId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!wardenregdId) {
      validationErrors.regdId = "RegdId is required";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post("http://localhost:8080/api/canteen", {
          wardenregdId,
          password,
        });

       

        if (response.data = "Login successful!") {
          console.log("Response from server:", response.data);
          navigate('/MenteeNav', { replace: true });
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
        <h3>Warden Login</h3>
        <div className="form-group">
          <label>RegdId</label>
          <input
            type="text"
            value={wardenregdId}
            onChange={(e) => setWardenregdId(e.target.value)}
          />
          {errors.id && <p className="error-message">{errors.regdId}</p>}
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
        </div>
        <Link to="/wardenHome"><button type="submit" className="btn">Login</button></Link>
        
      </form>

    </div>
  );
};

export default WardenLogin;