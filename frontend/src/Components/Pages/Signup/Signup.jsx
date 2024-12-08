import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData());
  const navigate = useNavigate();

  function initialFormData() {
    return {
      email: "",
      password: "",
      username: "",
      gender: "",
      country: "",
      birthday: "",
    };
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const toggleMode = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
    setFormData(initialFormData());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // Login kérés küldése a backendhez
        const response = await fetch("https://localhost:8080/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        if (response.ok) {
          const user = await response.json();
          localStorage.setItem("role", user.role);
          alert(user.role === "admin" ? "Admin login successful!" : "User login successful!");
          navigate(user.role === "admin" ? "/admin" : "/dashboard");
        } else {
          alert("Invalid email or password!");
        }
      } else {
        // Regisztráció kérés küldése a backendhez
        const response = await fetch("https://localhost:8080/save/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("Registration successful! You can now log in.");
          setIsLogin(true); // Váltás login módba
        } else {
          alert("Registration failed. Please try again.");
        }
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }; 
  return (
    <div className="signup-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <RegistrationFields formData={formData} onChange={handleInputChange} />
          )}
          {isLogin && (
            <>
              <InputField
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <InputField
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </>
          )}
          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <a href="#" className="switch-link" onClick={toggleMode}>
            {isLogin ? "Sign Up!" : "Login!"}
          </a>
        </p>
        {/* Admin link hozzáadása a login űrlaphoz */}
        {isLogin && (
          <p>
            <a href="/admin" className="admin-link">
              Go to Admin Page
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

const RegistrationFields = ({ formData, onChange }) => (
  <>
    <InputField
      type="text"
      name="username"
      placeholder="Username"
      value={formData.username}
      onChange={onChange}
      required
    />
    <InputField
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={onChange}
      required
    />
    <InputField
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={onChange}
      required
    />
    <InputField
      type="text"
      name="country"
      placeholder="Country"
      value={formData.country}
      onChange={onChange}
      required
    />
    <InputField
      type="date"
      name="birthday"
      value={formData.birthday}
      onChange={onChange}
      required
    />
    <select name="gender" value={formData.gender} onChange={onChange} required>
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </>
);

const InputField = ({ type, name, placeholder, value, onChange, required }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
  />
);

export default Signup;
