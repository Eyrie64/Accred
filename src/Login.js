import { useState, useContext } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import logo from "../src/Images/logo3.png";
import BackgroundSlider from "react-background-slider";
import image1 from "../src/Images/image1.jpg";
import image2 from "../src/Images/image2.jpg";
import image3 from "../src/Images/image3.jpg";
import image4 from "../src/Images/image4.jpg";
import image5 from "../src/Images/image5.jpg";
import "./Login.css";
import { useAlert } from "react-alert";

const Login = () => {
  const [useremail, setuseremail] = useState("");
  const [psstype, setpsstype] = useState("");
  const { authenticate } = useContext(AuthContext);
  const history = useHistory();
  const alert = useAlert();

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/users/auth/login", {
      email: useremail,
      password: psstype,
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("email", res.data.data.user.email);
        localStorage.setItem("user", res.data.data.user.user);
        if (res.data.data.user.departmentid !== null) {
          localStorage.setItem("department", res.data.data.user.departmentid);
        }
        if (res.data.data.user.schoolid !== null) {
          localStorage.setItem("school", res.data.data.user.schoolid);
        }
        if (res.data.data.user.collegeid !== null) {
          localStorage.setItem("college", res.data.data.user.collegeid);
        }

        authenticate();
        alert.success("Login Successful.");
        window.location.reload();
        //throw new Error();
      })
      .catch((e) => alert.error("Invalid Email/Password"));
  };
  return (
    <div className="login">
      <BackgroundSlider
        images={[image1, image2, image3, image4, image5]}
        duration={3}
        transition={2}
      />
      <img src={logo} alt=" " />
      <form>
        <header>LOGIN</header>
        <hr />
        <label htmlFor="email">EMAIL</label>
        <input
          type="text"
          required
          id="email"
          placeholder="Email"
          onChange={(e) => {
            setuseremail(e.target.value);
          }}
        />
        <br />
        <label>PASSWORD</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          required
          onChange={(e) => {
            setpsstype(e.target.value);
          }}
        />

        <button onClick={login}>LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
