import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as City } from "../assets/images/city.svg";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="LoginMain">
      <div className="ImageSide">
        <City className="City"/>
        <div className="Slogan">Clean Air For African Cities.</div>
      </div>
      <div className="LoginSide">
        <div className="LoginForm">
          <div className="LoginHeader">Sign in</div>
          <input type="email"  className="form-control" placeholder="Username" />
          <input type="password"  className="form-control" placeholder="Password"/>
          <button className="btn btn-primary" onClick={() => navigate("/dash")}>Sign in</button>
          <div className=""><a href="/">Forgot Password?</a></div>
          <div className="">
            Don't have an account? <a href="/">Request Access</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
