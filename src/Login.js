import { useState, useContext } from "react";
import Axios from "axios";
import { AuthContext } from "./contexts/AuthContext";
import logo from "../src/Images/logo3.png";
import BackgroundSlider from "react-background-slider";
import image1 from "../src/Images/image1.jpg";
import image2 from "../src/Images/image2.jpg";
import image3 from "../src/Images/image3.jpg";
import image4 from "../src/Images/image4.jpg";
import image5 from "../src/Images/image5.jpg";
import "./Login.css";


const Login = () => {
  const [useremail, setuseremail] = useState("");
  const [psstype, setpsstype] = useState("");
  const { authenticate } = useContext(AuthContext);
  

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/users/auth/login", {
      email: useremail,
      password: psstype,
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.data.token);
        authenticate();

        // history.push("/dashboard");
      })
      .catch(console.log);
  };
  return (
    <div className="login">
      <BackgroundSlider 
      images = {[image1, image2, image3, image4, image5]} 
      duration = {3} transition ={2}
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
