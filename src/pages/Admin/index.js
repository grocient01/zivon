import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import bcrypt from "bcryptjs";
import Dashboard from "./dashboard";

export default function AdminLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const authKey = Cookies.get("authKey");

    if (authKey) {
      const adminEmail = "admin@example.com";
      const adminPassword = "admin123";

      if (adminEmail === "admin@example.com" && adminPassword === "admin123") {
        bcrypt.compare("123456", authKey, function (err, result) {
          if (result) {
            setIsLoggedIn(true);
          } else {
            Cookies.remove("authKey");
          }
        });
      }
    }
  }, []);

  const handleLogin = () => {
    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      const encryptedAuthKey = bcrypt.hashSync("123456", 10);
      Cookies.set("authKey", encryptedAuthKey);

      setIsLoggedIn(true);

      // Remove the token after 2 hours
      setTimeout(() => {
        Cookies.remove("authKey");
        setIsLoggedIn(false);
      }, 2 * 60 * 60 * 1000); // 2 hours in milliseconds
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  // Render Dashboard component if logged in
  if (isLoggedIn) {
    return <Dashboard />;
  }

  // Render login form if not logged in
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h2 className="mb-4">Admin Login</h2>
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
